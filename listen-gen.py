# Zirvə — Ümumi təkrar dinləmələri: hər replika öz səsi ilə, aralarda qısa pauza, bir mp3.
# İstifadə: .venv/bin/python listen-gen.py [N ...]   (göstərilən dinləmələri yenidən yaradır, listen-times.js-i yeniləyir)
import asyncio, json, os, re, subprocess, sys, tempfile
import edge_tts
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "web", "audio", "bl")

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

def sentences(text):
    return [x for x in re.split(r'(?<=[.!?])\s+(?=[A-Z0-9."“])', text.strip()) if x]

async def build(n, L):
    """Hər cümləni öz səsi ilə yaradır, wav-da birləşdirir (cümlə arası 0.25 s, danışan dəyişəndə 0.6 s).
    Qaytarır: [[replika_indeksi, başlama_saniyəsi, cümlə], ...]"""
    dst = os.path.join(OUT, f"{n}.mp3")
    segs = [(li, w, t) for li, (w, line) in enumerate(L["lines"]) for t in sentences(line)]
    with tempfile.TemporaryDirectory() as td:
        sem = asyncio.Semaphore(6)
        async def one(i, who, text):
            async with sem:
                await seg(text, L["who"][who][1], L["rate"], os.path.join(td, f"{i:03d}.mp3"))
        await asyncio.gather(*[one(i, w, t) for i, (li, w, t) in enumerate(segs)])
        SR = 24000
        pcm = bytearray(); out = []
        for i, (li, w, t) in enumerate(segs):
            raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", os.path.join(td, f"{i:03d}.mp3"), "-f", "s16le", "-ac", "1", "-ar", str(SR), "-"], capture_output=True, check=True).stdout
            out.append([li, round(len(pcm) / 2 / SR, 2), t])
            nxt = segs[i + 1][0] if i + 1 < len(segs) else -1
            pcm += raw + bytes(int(SR * (0.25 if nxt == li else 0.6)) * 2)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "s16le", "-ac", "1", "-ar", str(SR), "-i", "-", "-b:a", "48k", dst], input=bytes(pcm), check=True)
        return out

async def main():
    os.makedirs(OUT, exist_ok=True)
    L = load(); want = sys.argv[1:] or list(L.keys())
    tf = os.path.join(ROOT, "web", "listen-times.js")
    times = {}
    if os.path.exists(tf):
        times = json.loads(open(tf, encoding="utf-8").read().split("=", 1)[1].rstrip().rstrip(";"))
    for n in want:
        times[n] = await build(n, L[n])
        d = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", os.path.join(OUT, f"{n}.mp3")], capture_output=True, text=True).stdout.strip()
        print(n, f"{float(d)/60:.2f} dəq", len(times[n]), "cümlə", flush=True)
    with open(tf, "w", encoding="utf-8") as f:
        f.write("// listen-gen.py yaradır — [replika, başlama saniyəsi, cümlə] (altyazı üçün)\nconst LISTEN_T=" + json.dumps(times) + ";\n")
asyncio.run(main())
