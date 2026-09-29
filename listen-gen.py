# Zirvə — Ümumi təkrar dinləmələri: hər replika öz səsi ilə, aralarda qısa pauza, bir mp3.
# İstifadə: .venv/bin/python listen-gen.py [N ...]   (fayl varsa keçir; yenidən üçün silin)
import asyncio, json, os, subprocess, sys, tempfile
import edge_tts
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "web", "audio", "b")

def load():
    js = open(os.path.join(ROOT, "web", "listen.js"), encoding="utf-8").read()
    r = subprocess.run(["node", "-e", js + ";process.stdout.write(JSON.stringify(LISTEN))"], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

async def seg(text, voice, rate, path):
    for a in range(4):
        try:
            await edge_tts.Communicate(text, voice, rate=rate).save(path); return
        except Exception:
            await asyncio.sleep(1.5 * (a + 1))
    raise RuntimeError("TTS failed: " + text[:40])

async def build(n, L):
    dst = os.path.join(OUT, f"{n}.mp3")
    if os.path.exists(dst): return
    with tempfile.TemporaryDirectory() as td:
        sem = asyncio.Semaphore(5); files = []
        async def one(i, who, text):
            async with sem:
                await seg(text, L["who"][who][1], L["rate"], os.path.join(td, f"{i:03d}.mp3"))
        await asyncio.gather(*[one(i, w, t) for i, (w, t) in enumerate(L["lines"])])
        sil = os.path.join(td, "sil.mp3")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", "0.55", "-b:a", "48k", sil], check=True)
        lst = os.path.join(td, "list.txt")
        with open(lst, "w") as f:
            for i in range(len(L["lines"])):
                f.write(f"file '{td}/{i:03d}.mp3'\nfile '{sil}'\n")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst, "-ar", "24000", "-ac", "1", "-b:a", "48k", dst], check=True)

async def main():
    os.makedirs(OUT, exist_ok=True)
    L = load(); want = sys.argv[1:] or list(L.keys())
    for n in want:
        await build(n, L[n])
        d = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", os.path.join(OUT, f"{n}.mp3")], capture_output=True, text=True).stdout.strip()
        words = sum(len(t.split()) for _, t in L[n]["lines"])
        print(n, f"{float(d)/60:.2f} dəq", words, "söz", flush=True)
asyncio.run(main())
