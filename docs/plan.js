// Zirvə — 22 həftəlik plan (keçid tarixindən sayılır). Pedaqoji təklifdir, nəticə zəmanəti deyil.
// Mərhələlər CEFR can-do məntiqinə əsaslanır (Council of Europe, CEFR Companion Volume). Təqvim keçdiyi üçün səviyyə avtomatik artmır.
// Gün: 6 əsas gün + 1 yüngül təkrar günü. Yeni söz: gündə 40 (Fuad-ın seçimi; Plan bölməsində 20/25/30/40). 3 saatlıq gün: söz/təkrar 30 · qrammatika 30 · listening 45 · reading 30 · speaking+writing 45.
// Resurs açarları: gram=GRAM id, write=WRITING id, speak=SPEAKING id, listen/read — tətbiqdəki hazır materiallar.
const PLAN_DAY = {
  "3h":  [["Söz və təkrar",30],["Qrammatika",30],["Listening",45],["Reading",30],["Speaking / Writing",45]],
  "90m": [["Söz və təkrar",20],["Qrammatika",15],["Listening",20],["Reading",15],["Speaking / Writing",20]]
};
const PLAN = [
// ---- 1-ci ay: A2 boşluqları, gündəlik ünsiyyət, əsas qrammatika, qısa yazı, dinləmə vərdişi ----
{ w:1, m:1, goal:"Cümlə quruluşunu möhkəmlət: be/do, söz sırası; özün haqqında danış və yaz.",
  cando:"Özünü, işini və gündəlik həyatını sadə, əlaqəli cümlələrlə təqdim edə bilirsən.",
  gram:["g01","g02"], write:["w01"], speak:["s01","s04"], listen:"Dərs mətnlərinin səsi (cari dərs) · Ümumi təkrar 11–20 dinləməsi", read:"Cari dərsin mətni + Təkrar mətni", check:"Həftə sonu: g01–g02 testi, w01 yazısı (özünü yoxla)" },
{ w:2, m:1, goal:"Vərdiş və indiki hadisəni ayır; gündəlik rejimini təsvir et.",
  cando:"Adi gününü və bu günlərdə nə etdiyini fərqləndirərək danışa bilirsən.",
  gram:["g03"], write:["w02"], speak:["s01","s07"], listen:"Dərs mətnləri · LISTEN 1 təkrar (altyazısız)", read:"Cari dərs mətni", check:"g03 testi + 60 saniyəlik danışıq yazısı" },
{ w:3, m:1, goal:"Keçmiş hadisəni ardıcıl danış: Past Simple + Past Continuous.",
  cando:"Keçmiş bir hadisəni başlanğıc–orta–son ardıcıllığı ilə danışa bilirsən.",
  gram:["g04"], write:["w03"], speak:["s02"], listen:"Dərs mətnləri · LISTEN 2 (podkast)", read:"Cari dərs + təkrar mətni", check:"g04 testi + w03" },
{ w:4, m:1, goal:"Gələcək planlar və qərarlar; rəsmi qısa e-poçt.",
  cando:"Planlarını və qərarlarını düz gələcək forması ilə ifadə edə, sadə rəsmi mesaj yaza bilirsən.",
  gram:["g05"], write:["w04","w06"], speak:["s03"], listen:"Dərs mətnləri · LISTEN 2 təkrar", read:"Cari dərs mətni", check:"Ay sonu yoxlaması: g01–g05 qarışıq + bir danışıq + bir yazı" },
// ---- 2-ci ay: B1 bacarıqları ----
{ w:5, m:2, goal:"İsimlər, artikllar, miqdar; yeri və əşyaları dəqiq təsvir et.",
  cando:"Tanış yeri və orada olanları təfərrüatla təsvir edə bilirsən.",
  gram:["g06"], write:["w05"], speak:["s08"], listen:"LISTEN 3 (radio, B1)", read:"Cari dərs mətni + A2 daxili yoxlamanın mətnləri", check:"g06 testi" },
{ w:6, m:2, goal:"Müqayisə: iki seçimi müqayisə et və seçimini əsaslandır.",
  cando:"İki variantı müqayisə edib səbəblə seçim edə bilirsən.",
  gram:["g07"], write:["w08"], speak:["s05","s09"], listen:"LISTEN 3 təkrar (0.9×) + diktant", read:"Cari dərs mətni", check:"g07 testi + w08" },
{ w:7, m:2, goal:"Təcrübə və nəticə: Present Perfect vs Past Simple.",
  cando:"Həyat təcrübəni və indiyə təsir edən hadisələri danışa bilirsən.",
  gram:["g08"], write:["w07"], speak:["s10"], listen:"LISTEN 4 (açıq qapı günü)", read:"Cari dərs + təkrar mətni", check:"g08 testi + ilk Part 2 yazısı" },
{ w:8, m:2, goal:"Məsləhət, qayda, ehtimal: modal fellər; problem və həll.",
  cando:"Problemi izah edib məsləhət və həll təklif edə bilirsən.",
  gram:["g09"], write:["w09"], speak:["s06"], listen:"LISTEN 4 təkrar", read:"A2+ daxili yoxlamanın mətnləri", check:"Ay sonu: g06–g09 + B1 abzas yazısı (müəllimə göstər)" },
// ---- 3-cü ay: B1 → B2 keçid, IELTS tapşırıq növləri ----
{ w:9,  m:3, goal:"Uzun dinləmə və IELTS Listening formatı ilə tanışlıq.", cando:"5 dəqiqəlik söhbətdən əsas fikri və rəqəm/ad kimi detalları tuta bilirsən.",
  gram:["g09"], write:["w14"], speak:["s11","s13"], listen:"LISTEN 5 (akademik müzakirə)", read:"T/F/NG strategiyası — B1 daxili yoxlamanın mətnləri", check:"Listening: 5 LISTEN-in hamısında 70%+" },
{ w:10, m:3, goal:"Gerund/infinitive; IELTS Task 2-yə hazırlıq essesi.", cando:"Fikrini iki səbəb və nümunə ilə abzaslarda yaza bilirsən.",
  gram:["g10"], write:["w14"], speak:["s12"], listen:"Müəllim: IELTS Listening Test 2 · Section 1–2 (öyrənmə rejimi)", read:"Müəllim: IELTS Reading Test 2 · Passage 1", check:"w14 (150+ söz)" },
{ w:11, m:3, goal:"Ön sözlər və kollokasiyalar; Task 1 vizual təsviri.", cando:"Sadə qrafikdə əsas tendensiyanı və müqayisəni yaza bilirsən.",
  gram:["g11"], write:["w10"], speak:["s13"], listen:"IELTS Listening Test 2 · Section 3", read:"IELTS Reading Test 2 · Passage 2", check:"w10 (Task 1)" },
{ w:12, m:3, goal:"Passive; proses və akademik mətn.", cando:"Akademik mətndə passiv quruluşları tanıyıb işlədə bilirsən.",
  gram:["g12"], write:["w11","w15"], speak:["s14"], listen:"IELTS Listening Test 2 · Section 4", read:"IELTS Reading Test 2 · Passage 3", check:"Ay sonu: L+R məşqi (20+20) — təxmini aralıq" },
// ---- 4-cü ay: IELTS bölmələri üzrə məqsədli məşq ----
{ w:13, m:4, goal:"Relative clauses; Task 2 discussion essesi.", cando:"Mürəkkəb cümlələrlə iki fikri müzakirə edə bilirsən.",
  gram:["g13"], write:["w15","w12"], speak:["s13"], listen:"Yeni IELTS tipli dinləmə (hazırlanır)", read:"Yeni akademik mətn (hazırlanır)", check:"w15 — müəllim rəyi tövsiyə olunur" },
{ w:14, m:4, goal:"Conditionals; hipotetik danışıq Part 3-də.", cando:"Hipotetik vəziyyətlər haqqında əsaslandırılmış fikir deyə bilirsən.",
  gram:["g14"], write:["w16","w13"], speak:["s14"], listen:"hazırlanır", read:"hazırlanır", check:"Speaking Part 1–3 tam yazı" },
{ w:15, m:4, goal:"Reported speech; mənbələrə istinad.", cando:"Başqasının fikrini öz sözlərinlə ötürə bilirsən.",
  gram:["g15"], write:["w17"], speak:["s12"], listen:"hazırlanır", read:"hazırlanır", check:"w17" },
{ w:16, m:4, goal:"Bağlayıcılar: ziddiyyət, güzəşt; vaxtın idarəsi.", cando:"60 dəqiqədə Task 1 + Task 2 yaza bilirsən.",
  gram:["g16"], write:["w12","w18"], speak:["s11"], listen:"hazırlanır", read:"hazırlanır", check:"Tam Writing (60 dəq)" },
// ---- 5-ci ay: tam sınaqlar, səhv analizi ----
{ w:17, m:5, goal:"Zaman ardıcıllığı; ilk tam sınaq.", cando:"Dörd bölməni ardıcıl, vaxtında edə bilirsən.",
  gram:["g17"], write:["w16"], speak:["s10","s13"], listen:"Tam sınaq (hazırlanır)", read:"Tam sınaq (hazırlanır)", check:"Tam sınaq #1" },
{ w:18, m:5, goal:"Səhv analizi: ən çox təkrarlanan 3 problem.", cando:"Öz səhv növlərini tanıyıb düzəldə bilirsən.",
  gram:["g18"], write:["w17","w11"], speak:["s12"], listen:"Səhv analizi", read:"Səhv analizi", check:"Səhv jurnalı" },
{ w:19, m:5, goal:"Zəif bacarığa əlavə vaxt.", cando:"Zəif bölmədə nəticə artımı.", gram:[], write:["w18"], speak:["s14"], listen:"zəif tərəfə görə", read:"zəif tərəfə görə", check:"Tam sınaq #2" },
{ w:20, m:5, goal:"Təkrar və möhkəmləndirmə.", cando:"Sabit nəticə.", gram:[], write:["w15","w13"], speak:["s11","s13"], listen:"təkrar", read:"təkrar", check:"Mini sınaq" },
{ w:21, m:5, goal:"Son tam sınaq.", cando:"İmtahan şəraitində sabit performans.", gram:[], write:["w16","w10"], speak:["s10","s14"], listen:"Tam sınaq", read:"Tam sınaq", check:"Tam sınaq #3" },
{ w:22, m:5, goal:"Yüngül təkrar, imtahan günü strategiyası.", cando:"—", gram:[], write:[], speak:[], listen:"yüngül", read:"yüngül", check:"İmtahan hazırlığı" }
];
