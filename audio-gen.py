# Zirvə — söz və mətn səslərini neyron TTS ilə yaradır (edge-tts, pulsuz).
# İstifadə: .venv/bin/python audio-gen.py
import asyncio, json, re, os, sys
import edge_tts

ROOT = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(ROOT, "web")
VOICE = "en-US-AriaNeural"

def load_js_array(path, name):
    s = open(path, encoding="utf-8").read()
    m = re.search(r"const %s=(\[.*?\]);" % name, s, re.S)
    return json.loads(m.group(1))

def load_texts():
    s = open(os.path.join(WEB, "texts.js"), encoding="utf-8").read()
    out = {}
    for m in re.finditer(r'^(\d+):\s*\{\s*title:\s*"([^"]*)",\s*text:\s*"((?:[^"\\]|\\.)*)"', s, re.M):
        out[int(m.group(1))] = json.loads('"' + m.group(3) + '"')
    return out

async def gen(sem, text, path, rate):
    if os.path.exists(path) and os.path.getsize(path) > 500: return
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, VOICE, rate=rate).save(path)
                return
            except Exception as e:
                await asyncio.sleep(1.5 * (attempt + 1))
        print("FAIL", path, file=sys.stderr)

def slug(w):
    return re.sub(r'[^a-z0-9]+','_',w.lower()).strip('_')

async def main():
    words = load_js_array(os.path.join(WEB, "words.js"), "W")
    bt = json.load(open(os.path.join(ROOT, "build-texts.json"), encoding="utf-8"))
    sem = asyncio.Semaphore(6)
    tasks = []
    os.makedirs(os.path.join(WEB, "audio", "words"), exist_ok=True)
    for w in words:
        tasks.append(gen(sem, w[1], os.path.join(WEB, "audio", "words", slug(w[1]) + ".mp3"), "-15%"))
    for n, t in bt["t"].items():
        tasks.append(gen(sem, t, os.path.join(WEB, "audio", "t", f"{n}.mp3"), "-10%"))
    for n, t in bt["r"].items():
        tasks.append(gen(sem, t, os.path.join(WEB, "audio", "r", f"{n}.mp3"), "-10%"))
    os.makedirs(os.path.join(WEB, "audio", "s"), exist_ok=True)
    for n, t in bt.get("s", {}).items():
        tasks.append(gen(sem, t, os.path.join(WEB, "audio", "s", f"{n}.mp3"), "-8%"))
    os.makedirs(os.path.join(WEB, "audio", "e"), exist_ok=True)
    for n, t in bt.get("e", {}).items():
        tasks.append(gen(sem, t, os.path.join(WEB, "audio", "e", f"{n}.mp3"), "-5%"))
    done = 0
    for coro in asyncio.as_completed(tasks):
        await coro; done += 1
        if done % 500 == 0: print(done, "/", len(tasks), flush=True)
    print("done", len(tasks))

asyncio.run(main())
