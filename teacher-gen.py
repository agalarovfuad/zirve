# Zirvə — Müəllim bölməsinin səsləri (edge-tts): ifadələr teacher/p/, mövzu mətnləri teacher/t/
# İstifadə: .venv/bin/python teacher-gen.py   (mövcud faylları keçir)
import asyncio, json, os, re, subprocess, sys
import edge_tts
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "web", "teacher")
VOICE = "en-US-AriaNeural"
def slug(t): return re.sub(r'[^a-z0-9]+', '_', t.lower()).strip('_')[:60]
async def gen(sem, text, path, rate):
    if os.path.exists(path) and os.path.getsize(path) > 500: return
    async with sem:
        for a in range(4):
            try: await edge_tts.Communicate(text, VOICE, rate=rate).save(path); return
            except Exception: await asyncio.sleep(1.5 * (a + 1))
        print("FAIL", path, file=sys.stderr)
async def main():
    js = open(os.path.join(ROOT, "web", "teacher.js"), encoding="utf-8").read()
    T = json.loads(subprocess.run(["node", "-e", js + ";process.stdout.write(JSON.stringify(TEACHER))"], capture_output=True, text=True, check=True).stdout)
    os.makedirs(os.path.join(OUT, "p"), exist_ok=True); os.makedirs(os.path.join(OUT, "t"), exist_ok=True)
    sem = asyncio.Semaphore(6); tasks = []
    for p in T["phrases"]: tasks.append(gen(sem, p["en"], os.path.join(OUT, "p", slug(p["en"]) + ".mp3"), "-10%"))
    for t in T["topics"]: tasks.append(gen(sem, t["text"], os.path.join(OUT, "t", t["id"] + ".mp3"), "-5%"))
    await asyncio.gather(*tasks); print("done", len(tasks))
asyncio.run(main())
