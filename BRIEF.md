# Zirvə — layihə brifi (agentlər üçün)

## Kim üçün
İstifadəçi: Fuad, azərbaycandilli, ingilis dilini A1-dən öyrənir. Hədəf: **IELTS 6.5–7.0** və
rəsmi, rahat danışıq. Proqramda hazırda **Dərs 3**-dədir. Bütün interfeys mətnləri azərbaycancadır.

## Proqramın quruluşu
4 pillə, hər biri əvvəlkini bitirəndə açılır:

| Pillə | Ad | Məzmun | Vəziyyət |
|---|---|---|---|
| 1 | Söz ehtiyatı I | 3000 söz (rəsmi NGSL 1.01 + NAWL), 50 dərs | sözlər hazır |
| 2 | Söz ehtiyatı II | növbəti 3000 söz, 50 dərs | **sözlər yoxdur** |
| 3 | Qrammatika | 12 intensiv dərs | **içi yoxdur** |
| 4 | IELTS | 10 dərs | **içi yoxdur** |

**Dərs ölçüsü artır:** Dərs 1–10 = 40 söz, 11–20 = 50, 21–30 = 60, 31–40 = 70, 41–50 = 80.
Cəmi düz 3000 söz = 50 dərs.

**Vahidlər (units)** hər pillədə bu sıra ilə düzülür:
- `l` — Dərs (sözlər + mətn + test)
- `r` — **Təkrar**, hər 3 dərsdən bir (o 3 dərsin bütün sözləri + böyük mətn + test)
- `s` — **Danışıq**, hər 5 dərsdən bir (20 dəq, mikrofonla şadoinq)
- `e` — **Səviyyə imtahanı**: P1 Dərs 20 → A2, Dərs 35 → A2+, Dərs 50 → B1;
  P2 Dərs 25 → B1+, Dərs 50 → B2; P3 sonu → B2 tam; P4 sonu → IELTS sınaq

**Kilid:** hər dərs testdə **90%+** alanda bitir və növbəti açılır. Səviyyə imtahanlarında keçid **75%**.

## Fayllar (hamısı `web/` içində)
| Fayl | Nədir |
|---|---|
| `index.html` | bütün proqram (HTML+CSS+JS bir faylda) — **agentlər buna toxunmur** |
| `words.js` | `const W=[[rank,word,pos,az,(oxunuş)],...]` — 3000 söz, Pillə 1 |
| `texts.js` | `TEXTS` (dərs mətnləri) və `REVIEWS` (təkrar mətnləri) |
| `speak.js` | `SPEAK` — danışıq bloklarının cümlələri |
| `exams.js` | `EXAMS` — 7 səviyyə imtahanı |
| `syllabus.js` | `GRAMMAR`, `IELTS` — Pillə 3 və 4 dərslərinin siyahısı |
| `lemma.js` | sadə lemmatizator (mətndəki sözü siyahıdakı formaya gətirir) |
| `audio/` | neyron səslər (edge-tts, en-US-AriaNeural) |

## Data formatları (dəqiq riayət et)

### texts.js — dərs mətni
```js
TEXTS = {
 11: {
  title: "Başlıq",
  text: "Abzas.\n\nİkinci abzas.",
  extra: [["word","azərbaycanca"], ...],   // yalnız ad/idiom; qalanı avtomatik tapılır
  q:  [["True/False cümləsi", true], ...],  // bool = düzgün cavab
  mc: [["Sual?", ["düz variant","yanlış","yanlış","yanlış"], 0], ...]  // düz cavab HƏMİŞƏ indeks 0
 }
}
```
### texts.js — təkrar mətni
Eyni, üstəgəl `lessons:[a,b,c]` — hansı 3 dərsi əhatə etdiyi.

### speak.js — danışıq bloku
```js
SPEAK = { 4: { lessons:[16,20], items:["Cümlə bir.","Cümlə iki.", ...] } }  // 24 cümlə
```

### exams.js — imtahan
```js
EXAMS = { 1: { level:"A2", after:20, part:1, pass:75, mins:40, title:"", intro:"",
  reading:{title:"", text:""},
  listening:["dinləmə cümləsi 1", ...],     // sayı 'l' tipli sualların sayına BƏRABƏR olmalıdır
  items:[ ["v","azərbaycanca söz",["düz","y","y","y"],0],   // v=söz
          ["g","Boşluqlu cümlə ___.",["düz","y","y","y"],0], // g=qrammatika
          ["r","Mətnə aid sual",["düz","y","y","y"],0],      // r=oxu
          ["l","Səsə aid sual",["düz","y","y","y"],0] ] } }  // l=dinləmə
```

## Dəyişməz qaydalar
1. **Düzgün cavab həmişə indeks 0-dır.** Proqram variantları özü qarışdırır.
2. **Hər variant tam 4 ədəddir.**
3. **Sual azərbaycanca, cavab ingiliscə** — söz suallarında. Qrammatika/oxu/dinləmə tam ingiliscə.
4. **Mətnlərin konsepti hər dəfə fərqli olmalıdır.** Dərs 1–10 "Elvin" hekayəsidir; istifadəçi
   bundan bezib — **11-dən sonra Elvin olmasın**, hər mətn ayrı janr və mövzu (xəbər, resept,
   məktub, müsahibə, elmi izah, səyahət qeydi, tarixi hadisə, dialoq, reklam, rəy yazısı…).
5. **Mətndəki sözlər həmin dərsə qədər keçilmiş olmalıdır** (`words.js`-dəki `rank` ilə yoxla).
   Keçilməmiş sözlər avtomatik altda siyahılanır, amma sayı az olsun.
6. **Səviyyə artımı:** Dərs 11 ≈ A2, Dərs 35 ≈ B1, Dərs 50 ≈ B1+. Mətn uzunluğu 200 → 450 söz.
7. **Beynəlxalq standart:** suallar Cambridge/IELTS tiplərinə uyğun olsun — True/False/Not Given,
   matching headings, sentence completion, word formation, key word transformation, inference.
8. **Heç bir faylı silmə, `index.html`-ə toxunma.** Yalnız öz faylını yaz.
9. **Yazandan sonra `node --check <fayl>` ilə sintaksisi yoxla.**
10. İş bitəndə qısa hesabat: nə yazdın, neçə ədəd, hansı nömrələr.
