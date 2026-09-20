# Zirvə — macOS proqramı

İngilis dili: A1-dən IELTS-ə 4 pillə. Söz ehtiyatı I (3000, 50 dərs) → Söz ehtiyatı II (3000, 50 dərs) → Qrammatika (12 dərs) → IELTS (10 dərs). Hər pillə əvvəlkini bitirəndə açılır; hər dərs testdə 90%+ alanda bitir və növbəti açılır; hər 3 dərsdən bir Təkrar (120 söz + böyük mətn + test).

## Qovluq
- `web/` — proqramın özü (index.html, words.js, texts.js, syllabus.js, audio/). Artifact ilə eyni fayllar (artifact-da audio yoxdur, sistem səsi işlədir).
- `web/audio/` — neyron səslər (edge-tts, en-US-AriaNeural): `w/{rank}.mp3` sözlər, `t/{dərs}.mp3` mətnlər, `r/{təkrar}.mp3` təkrar mətnləri.
- `mac/` — Swift wrapper (WKWebView), Info.plist, ikon generatoru.
- `build.sh` — .app-ı yığır → `build/Zirvə.app`
- `audio-gen.py` — yeni söz/mətn əlavə olunanda səsləri yaradır (`.venv/bin/python audio-gen.py`; əvvəl `build-texts.json`-u yenilə — README-də node əmri).

## Yenidən yığmaq və quraşdırmaq
```
./build.sh
rm -rf "/Applications/Zirvə.app" && cp -R "build/Zirvə.app" /Applications/
```

## Mətn səsləri yeniləmək (texts.js dəyişəndə)
```
node -e "const fs=require('fs');const f=new Function(fs.readFileSync('web/texts.js','utf8')+';return {TEXTS,REVIEWS};');const {TEXTS,REVIEWS}=f();const o={t:{},r:{}};for(const k in TEXTS)o.t[k]=TEXTS[k].text;for(const k in REVIEWS)o.r[k]=REVIEWS[k].text;fs.writeFileSync('build-texts.json',JSON.stringify(o));"
rm -f web/audio/t/*.mp3 web/audio/r/*.mp3 && .venv/bin/python audio-gen.py
```

## Məlumat
`~/Library/Application Support/Zirve/progress.json` — nəticələr, çətin sözlər, mətn anlama faizləri, mövzu.
