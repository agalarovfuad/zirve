// Zirvə — qrammatika DƏRSLƏRİ, 1-ci hissə (L01–L05).
// Hər dərs = BİR mövzu, tam və aydın. Format: sections[{h, t:[abzaslar], tbl?, ex:[[EN,AZ]], no?}], sum:[...]
var GLESSONS = typeof GLESSONS==='undefined' ? [] : GLESSONS;
GLESSONS.push(

/* ───────────────────────── L01 ───────────────────────── */
{ id:"L01", title:"be · have · there is/are", level:"A2", mins:25, from:["g01","g19"],
  intro:"Bu dərsdə ingilis dilinin üç ən vacib quruluşunu öyrənirsən: «olmaq» (am / is / are), «sahib olmaq» (have / has) və «bir yerdə var» (there is / there are). Bunlar hər gün işlənir, onlarsız cümlə qurmaq olmur. Dərsin əsas fikri: cümlədə am / is / are varsa do lazım deyil, yoxdursa do / does / did mütləq lazımdır.",
  sections:[
    { h:"1. am, is, are — «olmaq» sözü və seçimi",
      t:[
        "Azərbaycanca «Mən yorğunam» deyəndə «-am» sözün sonuna yapışır. İngiliscə belə şəkilçi yoxdur. Onun yerinə ayrıca söz yazılır: am, is və ya are. Bu söz «olmaq» felidir (ingiliscə be).",
        "İngilis cümləsində fel mütləq olmalıdır. «Mən yorğunam» ingiliscə üç sözdür: I + am + tired. Feli atsan, cümlə yarımçıq qalır.",
        "Hansını seçəcəyin «kim» haqqında danışdığından asılıdır. I ilə həmişə am gəlir. Bir adam, bir əşya və ya bir yer ilə is gəlir. Birdən çox adam və ya şey ilə are gəlir. you ilə həmişə are işlənir: bir nəfərə deyirsən də, çox nəfərə deyirsən də. İki adı and ilə birləşdirəndə onlar «çox» sayılır: Murad and I are."
      ],
      tbl:[["I","am"],["he / she / it, bir ad, bir əşya, bir yer","is"],["we / you / they, iki və daha çox","are"]],
      ex:[["I am tired.","Mən yorğunam."],["She is at home.","O evdədir."],["They are students.","Onlar tələbədir."],["Baku is a big city.","Bakı böyük şəhərdir."],["My parents are at work now.","Valideynlərim indi işdədir."],["Murad and I are colleagues.","Murad və mən iş yoldaşıyıq."]],
      no:"I tired. / She at home. / My parents is at work. / Murad and I am… — səhvdir (am / is / are yoxdur və ya yanlış seçilib)" },

    { h:"2. am / is / are nə vaxt lazımdır: necə? harada? kim? neçə yaş?",
      t:[
        "Cümlədə iş-hərəkət yoxdursa, am / is / are lazımdır. Kiminsə NECƏ olduğunu (yorğun, hazır, ac), HARADA olduğunu (evdə, işdə) və ya KİM olduğunu (həkim, tələbə) deyəndə bu sözü yaz. Azərbaycanca belə cümlələrdə ayrıca fel görünmür («Hazırsan?»), ona görə çoxları ingiliscə də onu atır.",
        "Yaş da belədir. Azərbaycanca «25 yaşım var» deyirik, ona görə çoxları have yazır. İngiliscə isə yaş «sahib olmaq» kimi yox, «olmaq» kimi deyilir: «mən 25-əm» = I am 25. Yaşı soruşanda How old + am / is / are işlənir.",
        "Rəqəmdən sonra years old yazmaq olar, yazmamaq da olar. Amma tək years yazılmır: I am 25 years — səhvdir."
      ],
      tbl:[["necə?","I am tired. Are you ready?"],["harada?","We are at home."],["kim? nə?","He is a doctor."],["neçə yaşında?","I am 25. How old is she?"]],
      ex:[["Are you ready?","Hazırsan?"],["I'm hungry.","Acmışam."],["He is a driver.","O sürücüdür."],["My office is in the city centre.","Ofisim şəhər mərkəzindədir."],["I'm 25 years old.","Mənim 25 yaşım var."],["How old is your daughter?","Qızın neçə yaşındadır?"]],
      no:"Do you ready? / I have 25 years. / How old has your daughter? — səhvdir (am / is / are lazımdır, have və do yox)" },

    { h:"3. was / were (keçmiş), sual və inkar",
      t:[
        "«İdim, idi, idik» demək üçün am / is / are keçmişə keçir: am və is → was, are → were. Seçim qaydası eynidir: I və bir adam / bir əşya üçün was; we, you, they və çox şey üçün were. Dünən, keçən il, uşaq olanda kimi vaxt sözləri ilə işlənir.",
        "Sual qurmaq üçün am / is / are / was / were «kim»-dən əvvələ keçir. Heç bir söz əlavə olunmur: do / does / did lazım deyil. Sual sözü (where, how old, why) varsa, o, ən əvvəldə durur: Where is your office?",
        "İnkar üçün am / is / are / was / were-dən dərhal sonra not yazılır. Danışıqda qısalır: isn't, aren't, wasn't, weren't. am not qısalmır; onun yerinə I'm not deyilir. Burada da do işlənmir.",
        "Qısa formalar: I'm, you're, he's, she's, it's, we're, they're. İki söz birləşir, düşən hərfin yerinə apostrof (') qoyulur. Qısa və tam forma eyni mənanı verir, ikisi də düzdür. Yalnız rəsmi yazıda (məsələn, IELTS essesində) tam forma yaz."
      ],
      tbl:[["təsdiq","sual","inkar"],["She is at home.","Is she at home?","She isn't at home."],["They were late.","Were they late?","They weren't late."],["I am hungry.","Am I hungry?","I'm not hungry."]],
      ex:[["I was very tired yesterday.","Dünən çox yorğun idim."],["The weather was nice yesterday.","Dünən hava gözəl idi."],["Is she a doctor?","O həkimdir?"],["Were you at work yesterday?","Dünən işdə idin?"],["I'm not hungry.","Ac deyiləm."],["My brother wasn't at home yesterday.","Qardaşım dünən evdə deyildi."]],
      no:"We was very tired. / I were at home. / Do you are a student? / Did you were at work? / I amn't hungry. / We not ready. — səhvdir" },

    { h:"4. have / has / had — «var» (sahiblik)",
      t:[
        "Bir şeyin kiminsə olduğunu demək üçün have işlənir: I have a car — «mənim maşınım var». Azərbaycanca «var» sonda gəlir, ingiliscə have isə «kim»-dən dərhal sonra gəlir.",
        "I, you, we, they və iki və daha çox adam / şey ilə have yazılır. he, she, it, bir ad və ya bir əşya ilə has yazılır. Keçmişdə hamı üçün eyni söz işlənir: had («var idi»).",
        "have «olmaq» deyil, «sahib olmaq» deməkdir. Ona görə yaş və ya vəziyyət (tired, hungry) üçün işlənmir, onlar üçün am / is / are lazımdır (2-ci bölmə)."
      ],
      tbl:[["I / you / we / they, iki və daha çox","have"],["he / she / it, bir ad, bir əşya","has"],["keçmiş, hamı üçün","had"]],
      ex:[["I have two children.","İki uşağım var."],["Elvin has a big car.","Elvinin böyük maşını var."],["The hotel has a nice garden.","Otelin gözəl bağı var."],["You have a beautiful voice.","Sənin gözəl səsin var."],["We had a dog when I was a child.","Uşaq olanda itimiz var idi."]],
      no:"She have a car. / I has a car. / She haves a car. — səhvdir" },

    { h:"5. Əsas qayda: do / does / did nə vaxt lazımdır?",
      t:[
        "Bu, dərsin ən vacib qaydasıdır. Cümlədə am / is / are / was / were VARSA, sual və inkar üçün başqa söz lazım deyil: onları qabağa keçirirsən və ya not əlavə edirsən (3-cü bölmə). Cümlədə am / is / are / was / were YOXDURSA, sual və inkar üçün mütləq do / does / did lazımdır.",
        "Bu qayda istisnasız BÜTÜN fellərə aiddir: work, go, like, live, have… fel hansı olursa olsun, am / is / are yoxdursa, do / does / did gəlir.",
        "Bir cümlədə ikisi birlikdə işlənmir: ya am / is / are, ya da do. Ona görə Do you tired? səhvdir: tired iş feli deyil, «necə?» sözüdür, onun yanında am / is / are olmalıdır. Is she work in a bank? da səhvdir: work iş felidir və am / is / are yoxdur, ona görə Does she work in a bank? deyilir."
      ],
      tbl:[["Cümlədə am / is / are / was / were var","do lazım deyil: Are you tired? She isn't here."],["Cümlədə am / is / are / was / were yoxdur","do / does / did lazımdır: Do you work? She doesn't work."]],
      ex:[["You are tired. → Are you tired?","Yorğunsan? (am / is / are var, do yoxdur)"],["You work here. → Do you work here?","Burada işləyirsən? (am / is / are yoxdur, do gəlir)"],["She is a student. → Is she a student?","O tələbədir?"],["She lives in Ganja. → Does she live in Ganja?","O Gəncədə yaşayır?"]],
      no:"Do you tired? / Is she work in a bank? / Are you live here? — səhvdir (ya am / is / are, ya do — ikisi birlikdə yox)" },

    { h:"6. do, does, yoxsa did? Əsas fel sadə qalır",
      t:[
        "Seçim iki şeydən asılıdır: zamandan və «kim»-dən. İndiki zamanda I, you, we, they və çox adam ilə do (inkarı don't) işlənir. İndiki zamanda he, she, it və bir ad ilə does (inkarı doesn't) işlənir. Keçmişdə isə «kim» kim olursa olsun, hamı üçün did (inkarı didn't) işlənir.",
        "does və ya did gələndə əsas fel sadə formaya qayıdır. Təsdiqdə he / she / it ilə feldə -s olur, keçmişdə fel dəyişir (went, saw). Sual və inkarda isə -s does sözünə, keçmiş forma did sözünə «köçür». Ona görə: She works → Does she work? He went → Did he go? -s və keçmiş forma cümlədə iki dəfə yazılmır.",
        "have «var» mənasında adi feldir, am / is / are deyil. Ona görə sual və inkar do ilə qurulur: Do you have a pen? He doesn't have a car. Britaniya variantı have got da var: Have you got a pen? I haven't got a bike. Bu formada do lazım deyil. İkisini qarışdırma: Do you have got — səhvdir.",
        "Sual sözü (where, what time, why, how often) həmişə ən əvvəldə durur. Sonra adi sual sırası gəlir: am / is / are yoxdursa sual sözü + do / does / did + kim + fel; varsa sual sözü + am / is / are + kim. Azərbaycanca «Harada yaşayırsan?» qısa görünür, amma ingiliscə sual sözündən sonra do atılmır: Where do you live?"
      ],
      tbl:[["indi: I / you / we / they, çox adam","do / don't"],["indi: he / she / it, bir ad","does / doesn't"],["keçmiş: hamı üçün","did / didn't"]],
      ex:[["Do your parents live in Baku?","Valideynlərin Bakıda yaşayır?"],["Does she speak English?","O ingiliscə danışır?"],["He doesn't have a car.","Onun maşını yoxdur."],["Nigar didn't go to the party.","Nigar məclisə getmədi."],["What time does the bank open?","Bank saat neçədə açılır?"],["Where did you go last night?","Dünən axşam hara getdin?"]],
      no:"She don't like coffee. / Do she speak English? / Does he works? / Did you went? / Where you live? / He don't have a car. — səhvdir" },

    { h:"7. there is / there are — «bir yerdə … var»",
      t:[
        "Bir yerdə nəyinsə olduğunu demək üçün there is / there are işlənir. Azərbaycanca «Otaqda masa var» deyirik: yer əvvəldə, «var» sonda. İngiliscə cümlə there is ilə başlayır, yer adətən sonda gəlir. there burada «orada» demək deyil, sadəcə cümləni başladır.",
        "Seçim there-dən sonra gələn sözdən asılıdır. Bir şey varsa — there is (qısası there's). Çox şey varsa — there are. Sayıla bilməyən şeylər (su, süd, pul, vaxt) üçün də there is işlənir. a lot of-dan sonra gələn sözə bax: a lot of people → are, a lot of water → is.",
        "İnkar: there isn't / there aren't. Cəm isimlə və sayıla bilməyən şeylərlə inkarda adətən any gəlir: there aren't any shops, there isn't any milk. İkinci yol: there's no / there are no + isim. no özü inkardır, ona görə there isn't no yazma.",
        "Sual: is / are there-dən əvvələ keçir: Is there…? Are there…? Cəm isimlə sualda adətən any gəlir. Qısa cavabda there is / there are təkrar olunur: Yes, there is. No, there aren't. «Bəli» cavabında qısaltma olmur: Yes, there's səhvdir. Neçə dənə olduğunu How many + cəm isim + are there? ilə soruşursan; sayılmayan şey üçün How much + isim + is there?"
      ],
      tbl:[["təsdiq","There is a bank. · There are two banks."],["inkar","There isn't a bank. · There aren't any banks. · There's no bank."],["sual","Is there a bank? · Are there any banks?"],["qısa cavab","Yes, there is. · No, there aren't."]],
      ex:[["There is a cafe near my office.","Ofisimin yaxınlığında kafe var."],["There are three parks in our district.","Rayonumuzda üç park var."],["There isn't a hospital in the village.","Kənddə xəstəxana yoxdur."],["There aren't any shops here.","Burada mağaza yoxdur."],["Is there a pharmacy near here? — Yes, there is.","Yaxınlıqda aptek var? — Bəli, var."],["How many students are there in your class?","Sinfinizdə neçə tələbə var?"]],
      no:"There is two cars outside. / There are a lot of water. / There isn't no milk. / Are there any milk? / Yes, there's. — səhvdir" },

    { h:"8. there was / there were / there will be və have ilə fərq",
      t:[
        "Keçmişdə «var idi» demək üçün there is → there was, there are → there were olur. Seçim eynidir: bir şey — was, çox şey — were. Sual və inkar da eynidir: Was there…? Were there…? There wasn't… There weren't… Çox vaxt yesterday, ten years ago kimi sözlərlə işlənir.",
        "Gələcəkdə «olacaq» demək üçün there will be işlənir (qısası there'll be). Bu forma tək və cəm üçün eynidir, is / are seçmək lazım deyil. İnkarı there won't be, sualı Will there be…? formasındadır. will-dən sonra yalnız be gəlir: There will are — səhvdir.",
        "have və there is-i qarışdırma. İkisi də Azərbaycancaya «var» kimi tərcümə olunur. Kiminsə SAHİB olduğunu deyəndə have / has işlənir, cümlə sahiblə başlayır: My city has an old mosque. Bir YERDƏ nəyinsə olduğunu deyəndə there is işlənir, yer adətən sonda gəlir: There is an old mosque in my city. Cümlə yerlə başlayırsa (In my room…), ondan sonra have yazılmır.",
        "Bir şeyi ilk dəfə xatırlayanda there is / there are deyirik, çünki dinləyən onu hələ bilmir. Sonra həmin şey haqqında danışanda it (tək) və ya they (çox) işlədirik. there yalnız «var olmaq» üçündür, şeyi təsvir etmək üçün işlənmir."
      ],
      tbl:[["there is (bir şey) → keçmiş","there was"],["there are (çox şey) → keçmiş","there were"],["gələcək, hamı üçün","there will be"]],
      ex:[["There was a cinema here ten years ago.","On il əvvəl burada kinoteatr var idi."],["There were a lot of people at the wedding.","Toyda çoxlu adam var idi."],["There will be a meeting tomorrow.","Sabah iclas olacaq."],["Will there be any food at the party?","Məclisdə yemək olacaq?"],["My city has an old mosque. = There is an old mosque in my city.","Şəhərimin köhnə məscidi var. = Şəhərimdə köhnə məscid var."],["There's a new cafe on our street. It's very nice.","Küçəmizdə yeni kafe var. Çox gözəldir."]],
      no:"In my room have a bed. / There was many people. / There will are a party. / My city there is a mosque. — səhvdir" },

    { h:"9. it — hava, vaxt, məsafə; It's difficult to …",
      t:[
        "Azərbaycanca «Soyuqdur», «Saat beşdir» deyirik və «o» sözü lazım olmur. İngiliscə cümlədə həmişə «kim» yazılmalıdır. Ona görə hava, vaxt, tarix və məsafə haqqında danışanda it işlənir. Bu it heç bir əşyanı göstərmir, sadəcə «kim»-in yerini doldurur. Fel də yerində olmalıdır: It is cold. Is cold today — səhvdir.",
        "Məsafəni How far…? ilə soruşuruq, cavab it ilə başlayır: How far is the airport? — It's about 20 kilometres from here. «Uzaqdırmı?» sualı Is it far…? olur.",
        "Bir iş haqqında fikir bildirəndə (asandır, çətindir, xoşdur) cümlə çox vaxt It's + sifət + to + fel ilə başlayır. Azərbaycanca «İş tapmaq çətindir» deyirik. İngiliscə də belə demək olar, amma təbii yol it ilə başlamaqdır: It's difficult to find a job.",
        "it ilə there is fərqlidir. there is bir şeyin VAR olduğunu deyir: There is a problem with my phone. it isə hava, vaxt, məsafəni və artıq xatırladığın şeyi göstərir. It is a problem with my phone — səhvdir."
      ],
      ex:[["It's cold today.","Bu gün soyuqdur."],["It's 5 o'clock.","Saat beşdir."],["It's raining.","Yağış yağır."],["How far is the airport? — It's about 20 kilometres from here.","Hava limanı nə qədər uzaqdır? — Buradan təxminən 20 kilometrdir."],["Is it far from here to the airport?","Buradan hava limanına qədər uzaqdır?"],["It's difficult to find a job.","İş tapmaq çətindir."]],
      no:"Is cold today. / Is raining. / It is a problem with my phone. — səhvdir (it lazımdır; «problem var» üçün there is)" }
  ],
  sum:[
    "Hər ingilis cümləsində fel olmalıdır: «Mən yorğunam» = I am tired (I tired yox).",
    "am — I ilə; is — he / she / it və bir ad ilə; are — we / you / they və çox adam ilə. you həmişə are.",
    "necə? harada? kim? neçə yaş? → am / is / are. Yaşda have yox: I am 25.",
    "was — I / he / she / it; were — we / you / they. Sual: was / were qabağa keçir; inkar: wasn't / weren't.",
    "have — I / you / we / they; has — he / she / it; had — keçmiş. «Sahiblik» üçün işlənir.",
    "am / is / are / was / were VARSA do lazım deyil. YOXDURSA (bütün fellərdə, have də) do / does / did lazımdır — ikisi birlikdə yox.",
    "does / did gələndə əsas fel sadə qalır: Does she work? Did he go?",
    "there is + tək, there are + çox, there was / were — keçmiş, there will be — gələcək. «Yerdə var» = there is, «sahibdir» = have / has.",
    "Hava, vaxt, məsafə → it: It's cold. It's 5 o'clock. İlk dəfə xatırlayanda there is, sonra it / they."
  ]
},

/* ───────────────────────── L02 ───────────────────────── */
{ id:"L02", title:"Söz sırası və suallar", level:"A2", mins:30, from:["g02","g21","g22"],
  intro:"Azərbaycanca fel cümlənin sonunda durur, ingiliscə isə ikinci yerdə. Bu dərsdə əvvəl adi cümlənin sırasını öyrənirsən, sonra sualda sıranın necə dəyişdiyini, sonra suallara qısa cavab verməyi və söhbətdə «mən də» deməyi. Hamısı eyni fikrə bağlıdır: ingiliscə sözün rolunu şəkilçi yox, yeri göstərir.",
  sections:[
    { h:"1. Əsas sıra: kim → fel → nəyi → harada → nə vaxt",
      t:[
        "İngilis cümləsinin əsas sırası belədir: əvvəl kim (işi görən; qrammatikada buna «subyekt» deyirlər), sonra fel (nə edir), sonra nəyi. Azərbaycanca fel sonda olur: «Mən çay içirəm». İngiliscə fel ikinci yerdədir, «kim»-dən dərhal sonra gəlir: I drink tea. Azərbaycanca sözün rolunu şəkilçi göstərir («çayı», «kitabı»). İngiliscə şəkilçi yoxdur, rolu sözün YERİ göstərir. Ona görə sıranı dəyişmək olmaz.",
        "«Kim» sözü həmişə yazılır. Azərbaycanca «gəlirəm» deyəndə «mən»-i atırıq, çünki şəkilçi kimin olduğunu göstərir. İngilis felində belə şəkilçi yoxdur, ona görə I, we, she kimi söz yazılmalıdır. Hava və vaxt haqqında danışanda «kim»-in yerinə it qoyulur: It is cold.",
        "«Nəyi» feldən dərhal sonra gəlir. Fel ilə «nəyi»-nin arasına vaxt, yer və ya tezlik sözü girmir. Azərbaycanca «Hər gün anasına zəng edir» deyirik və «hər gün» ortada durur. İngiliscə əvvəl fel və «nəyi» gəlir: He calls his mother every day.",
        "Cümlənin sonunda yer və vaxt durur: əvvəl HARADA, sonra NƏ VAXT. Azərbaycanca çox vaxt əksinədir: «dünən stansiyada». Vaxtı vurğulamaq istəsən, onu ən əvvələ qoya bilərsən: Yesterday I saw Leyla in the park. Amma vaxt sözü «kim» ilə felin arasına və ya fel ilə «nəyi»-nin arasına girə bilməz."
      ],
      tbl:[["kim (subyekt)","I / My mother / Kamran"],["fel","drink / reads / has"],["nəyi","tea / books / a new car"],["harada","in the city centre"],["nə vaxt","last week"]],
      ex:[["I drink tea.","Mən çay içirəm."],["My mother reads books.","Anam kitab oxuyur."],["He calls his mother every day.","O hər gün anasına zəng edir."],["She bought a laptop in the city centre last week.","Keçən həftə şəhər mərkəzində noutbuk aldı."],["We watched a film at home last night.","Dünən axşam evdə film izlədik."],["Yesterday I saw Leyla in the park.","Dünən parkda Leylanı gördüm."]],
      no:"I tea drink. / Am coming. / He calls every day his mother. / We watched last night at home a film. / I yesterday saw Leyla. — səhvdir" },

    { h:"2. always, usually, often… və every day: tezlik sözləri",
      t:[
        "always (həmişə), usually (adətən), often (tez-tez), sometimes (bəzən), never (heç vaxt) işin nə qədər tez-tez olduğunu göstərir. Bu sözlər cümlənin ortasına gəlir: «kim» ilə iş felinin arasına. Azərbaycanca da «Adətən piyada gedirəm» deyirik, sıra demək olar ki eynidir: I usually walk to work.",
        "am / is / are / was / were varsa, tezlik sözü onlardan SONRA gəlir: She is always late. Yadda saxla: iş felindən ƏVVƏL, am / is / are-dən SONRA. Cümlədə do, does, did, can kimi köməkçi söz varsa, tezlik sözü köməkçi ilə əsas felin ARASINA girir: I don't usually eat breakfast. Do you often go to the cinema?",
        "never özü inkardır, ona görə onunla don't / doesn't işlənmir: I never drink coffee. Bir neçə sözdən ibarət ifadələr — every day, twice a week, three times a week, on Sundays — ortaya girmir. Onlar cümlənin SONUNDA, vurğu üçün ən əvvəlində durur: I go to the gym twice a week. Every morning I drink tea. Tək söz ortada, uzun ifadə kənarda."
      ],
      tbl:[["always / usually / often / sometimes / never","ortada: iş felindən əvvəl, am / is / are-dən sonra"],["every day / twice a week / on Sundays","sonda (və ya ən əvvəldə)"]],
      ex:[["I usually walk to work.","Adətən işə piyada gedirəm."],["She is always late.","O həmişə gecikir."],["I never drink coffee.","Heç vaxt qəhvə içmirəm."],["I don't usually eat breakfast.","Adətən səhər yeməyi yemirəm."],["Do you often go to the cinema?","Tez-tez kinoya gedirsən?"],["We go to the park on Sundays.","Bazar günləri parka gedirik."]],
      no:"I go always to work. / She always is late. / I don't never drink coffee. / I twice a week go to the gym. / She every day goes to work. — səhvdir" },

    { h:"3. Sifət isimdən əvvəl; iki «nəyi»: give me the book",
      t:[
        "Sifət «necə?» sualına cavab verən sözdür: new, red, careful. İsimlə birlikdə sifət həmişə isimdən QABAQ durur. Azərbaycanca da belədir: «yeni maşın» = a new car. a, the, my varsa, sifət onlarla isim arasına girir: a red car, my new phone. Sifət cəm olmur, -s almır: two new cars.",
        "Sifət am / is / are-dən sonra da gələ bilər, onda isim yoxdur: The car is red. Orada sifət «necə?» sualına cavab verir.",
        "«Vermək, göndərmək, göstərmək, gətirmək» mənalı fellərdən (give, send, show, bring) sonra iki şey gəlir: kimə və nəyi. İki sıra mümkündür. Birinci: kimə + nəyi, burada to yazılmır: Give me the book. İkinci: nəyi + to + kimə: Give the book to me. to yalnız «kimə» sonda olanda gəlir."
      ],
      tbl:[["kimə + nəyi (to yoxdur)","Give me the book."],["nəyi + to + kimə","Give the book to me."]],
      ex:[["She has a red car.","Onun qırmızı maşını var."],["He is a careful driver.","O ehtiyatlı sürücüdür."],["She bought two new chairs.","O iki yeni stul aldı."],["Give me the keys, please.","Açarları mənə ver, zəhmət olmasa."],["I sent my brother a message. / I sent a message to my brother.","Qardaşıma mesaj göndərdim."],["She showed us her photos. / She showed her photos to us.","O bizə şəkillərini göstərdi."]],
      no:"a car red / He is a driver careful / two news chairs / Give to me the book. / Give the book me. — səhvdir" },

    { h:"4. Sual: köməkçi söz «kim»-dən əvvələ keçir",
      t:[
        "Azərbaycanca sualı çox vaxt səs tonu ilə veririk, sözlərin yeri dəyişmir: «Çay içirsən?» İngiliscə sözlərin yeri dəyişir: köməkçi söz «kim»-dən əvvələ keçir. Köməkçi söz — cümlədə olan am / is / are, was / were, can, will, have kimi sözlərdir. Cümlədə bunlardan heç biri yoxdursa, do / does / did əlavə olunur. Bu qayda istisnasız bütün iş fellərinə aiddir (1-ci dərs).",
        "Sıra belədir: sual sözü → köməkçi → kim → əsas fel → qalanı. Əsas fel heç vaxt «kim»-dən əvvələ keçmir, «nəyi» də feldən sonra qalır. Sual sözü (where, what time, why, how often) varsa, o hamıdan əvvəl gəlir. Sual sözü yoxdursa (bəli / xeyr sualı), cümlə birbaşa köməkçi ilə başlayır: Do you like music?",
        "does və did gələndə əsas fel sadə qalır, çünki -s və keçmiş forma onlara köçür: She works → Does she work? He went → Did he go?",
        "Ən çox edilən səhv: sual sözündən sonra adi cümlənin sırasını saxlamaq: Where you work? Where the station is? Düzgün: Where do you work? Where is the station? Azərbaycanca «Harada işləyirsən?» qısa görünür, amma ingiliscə sual sözündən sonra köməkçi atılmır."
      ],
      tbl:[["Cümlədə am / is / are / was / were var","Is she at home? What are you doing? Where is the station?"],["Cümlədə can / will / have var","Can you swim? Where have you been?"],["Bunlar yoxdur (adi fel)","Do you like music? Where does she work? What did you buy?"]],
      ex:[["Do you like music?","Musiqini sevirsən?"],["Where does your sister work?","Bacın harada işləyir?"],["What time does the bus leave?","Avtobus saat neçədə yola düşür?"],["What are you doing?","Nə edirsən?"],["Why were you late?","Niyə gecikdin?"],["Where have you been?","Harada olmusan?"]],
      no:"Where you work? / What you are doing? / Where does work your sister? / Do you music like? — səhvdir" },

    { h:"5. «Kim zəng etdi?» və «Kimə zəng etdin?» — who, what və ön söz",
      t:[
        "who (kim) və what (nə) iki cür sual verir. Birincisi, işi görəni soruşur: «Sənə KİM zəng etdi?» İkincisi, işin kimə və ya nəyə yönəldiyini soruşur: «Sən KİMƏ zəng etdin?» İngiliscə bu iki sualın qurulması fərqlidir.",
        "Birinci halda who özü «kim»-in yerində durur, ona görə sıra adi cümlə kimi qalır və do / does / did işlənmir: Who called you? What happened? Who lives in this house? Cümlədə is, can kimi köməkçi varsa, o qalır: Who is talking to Aysel? Yalnız do / does / did yoxdur. İkinci halda adi sual qaydası işləyir: Who did you call? What did you buy?",
        "Yoxlama yolu: cavabı düşün. Cavab «Əli zəng etdi» olarsa, who işi görəndir: Who called you? Cavab «Mən Əliyə zəng etdim» olarsa, who işi görmür: Who did you call? Diqqət: «Bu söz nə deməkdir?» sualında what işi görən deyil, ona görə does lazımdır: What does this word mean?",
        "Ön söz (to, from, for, at, about, with) sualın SONUNA keçir. Azərbaycanca «Haralısan?», «Kimlə danışırsan?» deyirik, şəkilçi sual sözünə yapışır. İngiliscə sual sözü əvvəldə qalır, ön söz isə sonda durur: Where are you from? Who are you talking to?"
      ],
      tbl:[["Who called you?","Sənə KİM zəng etdi? (kim işi görür — did yoxdur)"],["Who did you call?","Sən KİMƏ zəng etdin? (kim işə yönəlib — did var)"]],
      ex:[["Who called you?","Sənə kim zəng etdi?"],["What happened?","Nə oldu?"],["Who did you meet at the party?","Məclisdə kimlə tanış oldun?"],["What did you buy?","Nə aldın?"],["Where are you from?","Haralısan?"],["Who are you waiting for?","Kimi gözləyirsən?"]],
      no:"Who did call you? / What did happen? / Who you are talking to? / What means this word? — səhvdir" },

    { h:"6. Digər sual sözləri: which, whose, how many, What … like?",
      t:[
        "Əsas sual sözləri cədvəldədir. how başqa sözlərlə birləşib yeni suallar düzəldir: how many (neçə, sayılan şeylər), how much (nə qədər, sayılmayan şeylər), how old, how long, how often, how far. Hamısından sonra adi sual sırası gəlir: How often do you cook? How far is the airport?",
        "what yoxsa which? Azərbaycanca ikisi də «hansı» olur. Seçim az və bəlli olanda which işlənir: Which bus goes to the centre — the 5 or the 12? Seçim çox və ya açıq olanda what işlənir: What music do you like? Eyni fikir: arxasından isim gələndə what (what time, what colour), sifət gələndə how (how old, how big).",
        "Bir adamın və ya şeyin necə olduğunu, təsvirini soruşmaq üçün What … like? işlənir. Burada like «xoşlamaq» deyil, «kimi» deməkdir. Cavabda təsvir gəlir: What is your new flat like? — It's small but nice. How is the weather like — səhvdir.",
        "Bir işin nə qədər vaxt apardığını How long does it take (to …)? ilə soruşuruq. Burada it «kim» yerində durur, take «vaxt aparmaq» deməkdir. Cavab It takes + vaxt formasında olur: It takes about 30 minutes."
      ],
      tbl:[["what / where / when / who / why","nə / harada / nə vaxt / kim / niyə"],["which / whose","hansı (az seçimdən) / kimin"],["how many / how much","neçə (sayılan) / nə qədər (sayılmayan)"],["how old / how long / how often / how far","neçə yaş / nə qədər müddət / nə qədər tez-tez / nə qədər uzaq"]],
      ex:[["Whose bag is this?","Bu kimin çantasıdır?"],["Which bus goes to the centre — the 5 or the 12?","Mərkəzə hansı avtobus gedir — 5, yoxsa 12?"],["What time does the shop open?","Mağaza saat neçədə açılır?"],["How far is the airport?","Hava limanı nə qədər uzaqdır?"],["What is your new flat like?","Yeni mənzilin necədir?"],["How long does it take to get to the airport?","Hava limanına getmək nə qədər vaxt aparır?"]],
      no:"How is the weather like? / How long it takes? — səhvdir (What is the weather like? / How long does it take?)" },

    { h:"7. Dolayı sual: Do you know where the station is?",
      t:[
        "Nəzakətli soruşanda sual Do you know…? və ya Can you tell me…? ilə başlayır. Bu sözlərdən sonrakı hissə sual sırası ilə yox, adi cümlə sırası ilə yazılır: sual sözü + kim + fel. Burada do / does / did işlənmir, am / is / are də «kim»-dən əvvələ keçmir.",
        "do / does / did düşəndə -s və keçmiş forma yenidən əsas felə qayıdır: What time does the film start? → Can you tell me what time the film starts? Where did they go? → Do you know where they went?",
        "Eyni qayda cümlənin içində sual sözü gələndə də işləyir: I don't know where she lives. I wonder what time it is. I'm not sure when he arrives. Bunlar sual deyil, adi cümlədir.",
        "Sual sözü olmayan sualı (bəli / xeyr sualı) dolayı soruşanda if işlənir, əvəzinə whether də olar. if-dən sonra da adi sıra gəlir: Is the bank open? → Do you know if the bank is open?"
      ],
      tbl:[["Where is the station?","Do you know where the station is?"],["What time does the film start?","Can you tell me what time the film starts?"],["Is the bank open?","Do you know if the bank is open?"]],
      ex:[["Do you know where the station is?","Stansiyanın harada olduğunu bilirsən?"],["Can you tell me what time the film starts?","Filmin saat neçədə başladığını deyə bilərsən?"],["I don't know what he wants.","Onun nə istədiyini bilmirəm."],["I wonder what time it is.","Görəsən, saat neçədir."],["Do you know if the bank is open?","Bankın açıq olub-olmadığını bilirsən?"],["Can you tell me where I can buy a ticket?","Biletin haradan alınacağını deyə bilərsən?"]],
      no:"Do you know where is the station? / I don't know where does she live. / Do you know what time is it? / I wonder what does he want. — səhvdir" },

    { h:"8. Qısa cavab, «mən də» (So do I / Neither do I), too və either",
      t:[
        "İngiliscə tək «Yes» və ya «No» quru, bəzən kobud səslənir. Ona görə qısa cavab verilir: Yes / No + kim + köməkçi. Köməkçini sualın birinci sözündən götür, əsas fel təkrarlanmır: Do you like coffee? — Yes, I do. «Bəli» cavabı köməkçi ilə bitir və orada qısaltma olmur: Yes, I am (Yes, I'm — səhvdir). «Xeyr» cavabında qısaltma normaldır: No, she isn't; No, I won't.",
        "Köməkçi söz qısa cavabda, «mən də» cümləsində və quyruq sualda eyni qaydayla seçilir. Cümlədə köməkçi varsa, onu götür. Yoxdursa, do / does / did işlət. Zaman da eyni qalır: keçmiş cümləyə keçmiş köməkçi.",
        "«Mən də» demək üçün birinci cümləyə bax. Təsdiqdirsə, So + köməkçi + I: I'm hungry. — So am I. İnkardırsa, Neither + köməkçi + I: I don't smoke. — Neither do I. Burada köməkçi təsdiq formasındadır, çünki neither özü inkardır. Azərbaycanca hər ikisində «Mən də» deyirik, ona görə seçimi birinci cümlə edir.",
        "«Də» mənasını verən too və either cümlənin sonunda gəlir. Təsdiq cümləsində too işlənir, inkar cümləsində either: I like fish too. I don't like fish either. Feli təkrar etməmək üçün sonda yalnız köməkçi yazılır: I don't like fish, but my wife does. She can't drive, but I can. He didn't come, but his wife did."
      ],
      tbl:[["am / is / are, was / were","am, is, are, was, were"],["can, will, should …","can, will, should …"],["have / has (I've finished, she has gone)","have, has"],["adi fel (have «var» mənasında da): work, like, go …","do / does / did"]],
      ex:[["Do you like coffee? — Yes, I do.","Qəhvəni sevirsən? — Bəli."],["Are you ready? — Yes, I am.","Hazırsan? — Bəli."],["I live in Baku. — So do I.","Bakıda yaşayıram. — Mən də."],["I don't smoke. — Neither do I.","Siqaret çəkmirəm. — Mən də."],["I'm not hungry, and Ali isn't hungry either.","Mən ac deyiləm, Əli də ac deyil."],["I don't like fish, but my wife does.","Mən balığı sevmirəm, amma həyat yoldaşım sevir."]],
      no:"Yes, I like. / Yes, I'm. / I'm tired. — So do I. / I don't smoke. — Neither I do. / I'm not hungry too. — səhvdir" },

    { h:"9. Quyruq sual, «Elə?» sualı və I think so",
      t:[
        "Razılıq gözləyəndə cümlənin sonuna qısa sual əlavə edirik (Azərbaycanca «elə deyilmi?»). Təsdiq cümləsinə inkar quyruq gəlir, inkar cümləsinə təsdiq quyruq: It's cold, isn't it? He doesn't smoke, does he? Köməkçi söz birinci hissəyə görə seçilir (8-ci bölmənin qaydası): You live in Baku, don't you?",
        "Quyruqda ad təkrar olunmur, onun yerinə əvəzlik işlənir: he, she, it, they. Cümlə I am ilə başlayırsa, quyruq aren't I? olur. isn't it hər cümləyə uyğun gəlmir: You like music, isn't it? — səhvdir, düzgünü don't you?",
        "Söhbətdə maraq və ya təəccüb bildirmək üçün qısa sual verilir: köməkçi + kim. Azərbaycanca «Elə?», «Doğrudan?» deyirik. Təsdiqə təsdiq, inkara inkar sualı verilir: I live in Ganja. — Do you? I'm not hungry. — Aren't you?",
        "Bütün cavabı təkrar etməmək üçün so işlənir: I think so — «məncə, hə»; I don't think so — «məncə, yox»; I hope so — «ümid edirəm, hə». Ümidin inkarı I hope not-dur, I don't hope so deyilmir."
      ],
      tbl:[["It's cold,","isn't it?"],["You live in Baku,","don't you?"],["She can't drive,","can she?"],["He doesn't smoke,","does he?"],["I'm late,","aren't I?"]],
      ex:[["It's cold, isn't it?","Soyuqdur, elə deyilmi?"],["You live in Baku, don't you?","Bakıda yaşayırsan, elə deyilmi?"],["He doesn't smoke, does he?","O siqaret çəkmir, elə deyilmi?"],["I live in Ganja. — Do you? I live there too!","Gəncədə yaşayıram. — Elə? Mən də orada yaşayıram!"],["I'm not hungry. — Aren't you?","Ac deyiləm. — Elə?"],["Is the shop open? — I think so.","Mağaza açıqdır? — Məncə, hə."]],
      no:"You like music, isn't it? / She is a teacher, doesn't she? / I don't hope so. — səhvdir" }
  ],
  sum:[
    "Əsas sıra: kim → fel → nəyi → harada → nə vaxt. «Kim» həmişə yazılır, fel ondan dərhal sonra gəlir.",
    "Fel ilə «nəyi»-nin arasına söz girmir: He calls his mother every day.",
    "always, usually, often, never — iş felindən əvvəl, am / is / are-dən sonra: I always go. She is always late. every day, twice a week — sonda.",
    "Sifət isimdən əvvəl gəlir və -s almır: a red car, two new cars. Give me the book = Give the book to me.",
    "Sualda köməkçi söz «kim»-dən əvvələ keçir: sual sözü → am / is / are / do / does / did → kim → fel. Where do you work? (Where you work? yox).",
    "who / what işi görəndirsə, do yoxdur: Who called you? İşin yönəldiyi adamdırsa, do var: Who did you call? Ön söz sonda: Who are you waiting for?",
    "Dolayı sualda sıra adi cümlə kimidir: Do you know where the station is? I don't know where she lives.",
    "Qısa cavab: Yes, I do. Yes, I am (qısaltma yox). No, she isn't. «Mən də»: So am I / So do I; «mən də yox»: Neither am I / Neither do I.",
    "Quyruq sual: təsdiq → inkar quyruq, inkar → təsdiq quyruq: It's cold, isn't it? He doesn't smoke, does he? Köməkçi həmişə cümlənin özündən götürülür."
  ]
},

/* ───────────────────────── L03 ───────────────────────── */
{ id:"L03", title:"Present Simple və Present Continuous", level:"A2", mins:25, from:["g03"],
  intro:"Azərbaycanca «işləyirəm» həm «hər gün işləyirəm», həm də «indi işləyirəm» deməkdir. İngiliscə bunlar iki ayrı formadır. Bu dərsdə hər ikisinin necə qurulduğunu, nə vaxt işləndiyini və hansını seçəcəyini öyrənirsən.",
  sections:[
    { h:"1. Azərbaycanca bir, ingiliscə iki",
      t:[
        "Azərbaycanca «işləyirəm» deyəndə həm vərdişi, həm də indi gedən işi nəzərdə tuta bilərik. İngiliscə isə iki forma var və hər dəfə seçməlisən. Bir sual ver: bu iş həmişə / tez-tez olur, yoxsa İNDİ gedir?",
        "Həmişə, adətən olan iş üçün Present Simple işlənir: I work. İndi, bu anda gedən iş üçün Present Continuous işlənir: I am working. Formaları fərqlidir və bir-birinin yerinə işlənmir."
      ],
      tbl:[["Present Simple","I work — adətən, hər gün"],["Present Continuous","I am working — indi, bu anda"]],
      ex:[["I work in a bank.","Bankda işləyirəm (bu mənim işimdir)."],["I am working now.","İndi işləyirəm."],["She drinks tea every morning.","O hər səhər çay içir."],["She is drinking tea now.","O indi çay içir."]] },

    { h:"2. Present Simple: vərdiş, daimi vəziyyət, fakt",
      t:[
        "Present Simple üç halda işlənir. Birincisi, təkrarlanan iş və vərdiş: hər gün, hər həftə, adətən etdiyin şey. İkincisi, uzun müddət dəyişməyən vəziyyət: harada yaşayırsan, harada işləyirsən. Üçüncüsü, həmişə doğru olan fakt.",
        "Forma çox sadədir: fel lüğətdəki kimi qalır, yalnız he / she / it ilə feldə -s olur (3-cü bölmə). «Nə qədər tez-tez?» sualına cavab verən sözlər (always, usually, often, never, every day, on Mondays) bu zamanın siqnallarıdır.",
        "Bir işi nə qədər tez-tez etdiyini How often ilə soruşuruq: How often do you go to the gym? Cavabda tezlik sözü (always, never) və ya ifadə (every day, twice a week) gəlir. once — bir dəfə, twice — iki dəfə; üç və daha çox üçün three times, four times deyilir."
      ],
      ex:[["I drink tea every morning.","Hər səhər çay içirəm."],["They live in Sumgait.","Onlar Sumqayıtda yaşayırlar."],["The sun rises in the east.","Günəş şərqdən çıxır."],["Water boils at 100 degrees.","Su 100 dərəcədə qaynayır."],["How often do you go to the gym? — Twice a week.","Nə qədər tez-tez idman zalına gedirsən? — Həftədə iki dəfə."]] },

    { h:"3. he / she / it ilə feldə -s",
      t:[
        "Bir adam və ya bir əşya haqqında danışanda (he, she, it, Ali, my mother, the shop) təsdiq cümləsində feldə -s olur. I, you, we, they və çox adam / şey ilə -s yoxdur. Bu qayda yalnız təsdiq cümləsinə aiddir: sual və inkarda -s başqa yerə köçür (4-cü bölmə).",
        "Yazılış: çox fellərə sadəcə -s artırılır. s, sh, ch, x, o ilə bitən fellərə -es artırılır. Samit + y ilə bitəndə y düşür və -ies yazılır. Sait + y olanda (play, buy) sadəcə -s artırılır. have xüsusidir: has."
      ],
      tbl:[["work, live, open, stop, rise","works, lives, opens, stops, rises"],["watch, fix, go, pass","watches, fixes, goes, passes"],["study, try","studies, tries"],["play, buy","plays, buys"],["have","has"]],
      ex:[["She works in a hospital.","O xəstəxanada işləyir."],["He watches the news every evening.","O hər axşam xəbərlərə baxır."],["Aysel studies English at home.","Aysel evdə ingilis dili öyrənir."],["The shop opens at nine.","Mağaza saat 9-da açılır."],["My brother has two cats.","Qardaşımın iki pişiyi var."]],
      no:"She work in a hospital. / He gos to the gym. / He watchs TV. / She studys English. — səhvdir" },

    { h:"4. Present Simple: inkar və sual",
      t:[
        "Bu, 1-ci dərsdəki əsas qaydadır: cümlədə am / is / are yoxdursa, BÜTÜN fellərdə sual və inkar do / does ilə qurulur. I, you, we, they ilə do / don't; he, she, it ilə does / doesn't işlənir. Sual sözü varsa, o ən əvvəldə durur: Where do you live?",
        "does gələndə -s ona köçür, əsas fel sadə formada qalır: She works → She doesn't work. Does she work? -s iki dəfə yazılmır.",
        "Qısa cavabda köməkçi təkrarlanır: Does she work here? — Yes, she does. No, she doesn't. work, like, speak, eat kimi iş fellərinin hamısı eyni qaydaya tabedir: Are you like coffee? səhvdir, düzgünü Do you like coffee?"
      ],
      tbl:[["kim","inkar","sual"],["I / you / we / they","I don't work.","Do you work?"],["he / she / it","She doesn't work.","Does she work?"]],
      ex:[["Do you speak Russian?","Rusca danışırsan?"],["She doesn't eat meat.","O ət yemir."],["What time does the bank open?","Bank saat neçədə açılır?"],["Where do your parents live?","Valideynlərin harada yaşayır?"],["My brother doesn't drink coffee.","Qardaşım qəhvə içmir."],["How often does your sister call you?","Bacın sənə nə qədər tez-tez zəng edir?"]],
      no:"She doesn't eats. / Does he works? / She don't know my name. / Are you like coffee? — səhvdir" },

    { h:"5. Present Continuous: indi və «bu günlərdə»",
      t:[
        "Present Continuous danışdığın anda gedən və hələ bitməmiş iş üçündür: «indi nə edirsən?» Look! və Listen! kimi sözlərdən sonra da işlənir, çünki gözünün və ya qulağının qabağında olan iş haqqında danışırsan.",
        "İş tam bu saniyədə getməsə də, bu günlərdə, bu həftə, bu il davam edirsə və müvəqqətidirsə, yenə Continuous işlənir. Müqayisə et: «Bankda işləyirəm» daimi işdir — Present Simple. «Bu həftə evdən işləyirəm» müvəqqətidir — Continuous.",
        "Bu halın siqnal sözləri: now, at the moment, today, this week, these days. Azərbaycanca hər ikisi «işləyirəm» olduğu üçün qarışdırılır. Yadda saxla: hər gün olan iş — Simple, indi və ya keçici olan iş — Continuous."
      ],
      ex:[["Look! It is raining.","Bax! Yağış yağır."],["She is talking on the phone.","O telefonla danışır."],["I'm reading a very good book these days.","Bu günlərdə çox yaxşı kitab oxuyuram."],["We are working from home this week.","Bu həftə evdən işləyirik."],["My brother is looking for a new job.","Qardaşım yeni iş axtarır."],["I usually walk to work, but today I'm taking a taxi.","Adətən işə piyada gedirəm, amma bu gün taksiyə minirəm."]] },

    { h:"6. Present Continuous: forma, -ing yazılışı, inkar və sual",
      t:[
        "Forma: am / is / are + fel + -ing. am / is / are «kim»-ə görə seçilir (I → am, he / she / it → is, we / you / they → are) və atılmır. Azərbaycanca «edirəm» bir sözdür, ingiliscə iki hissə lazımdır: I am + working.",
        "-ing yazılışı: çox fellərə sadəcə -ing artırılır, y olduğu kimi qalır (cry → crying, study → studying). Fel səssiz e ilə bitirsə, e düşür (make → making). Bir hecalı fel «samit + sait + samit» ilə bitirsə, son hərf ikiləşir (sit → sitting). ie ilə bitəndə ie → y olur (lie → lying). Bu qaydalar yalnız yazıya aiddir.",
        "Sual və inkar: cümlədə artıq am / is / are var, ona görə do lazım deyil. Sualda am / is / are «kim»-dən əvvələ keçir: Are you listening? İnkarda ondan sonra not gəlir: He isn't working today. Fel -ing ilə yerində qalır. Sual sözü ilə: What are you doing?"
      ],
      tbl:[["read, work, play, go, cry, study","reading, working, playing, going, crying, studying"],["make, write, have, take","making, writing, having, taking"],["sit, swim, run, stop","sitting, swimming, running, stopping"],["lie, die","lying, dying"]],
      ex:[["He is writing a letter.","O məktub yazır."],["The children are swimming.","Uşaqlar üzürlər."],["Are you listening?","Qulaq asırsan?"],["He isn't working today.","O bu gün işləmir."],["What are you doing?","Nə edirsən?"],["Why are you wearing a coat today?","Bu gün niyə palto geyinmisən?"]],
      no:"Do you working? / What do you doing? / He is work now. / I working now. — səhvdir (am / is / are + -ing; do yoxdur)" },

    { h:"7. Hansını seçim? Siqnal sözlər",
      t:[
        "Hansı formanı seçəcəyini bilmək üçün cümlədəki vaxt sözlərinə bax. «Nə qədər tez-tez?» sualına cavab verən sözlər Present Simple istəyir. «İndi» və ya «bu günlərdə» mənalı sözlər Present Continuous istəyir.",
        "Vaxt sözü olmasa da qayda eynidir: vərdiş, fakt və daimi vəziyyət — Simple; indi gedən və ya bu günlərdə davam edən keçici iş — Continuous. Bir cümlədə ikisi də ola bilər: She usually drinks tea, but now she's drinking coffee."
      ],
      tbl:[["always, usually, often, sometimes, never, every day, on Mondays","Present Simple"],["now, right now, at the moment, today, this week, these days, Look!, Listen!","Present Continuous"]],
      ex:[["She usually drinks tea, but now she's drinking coffee.","O adətən çay içir, amma indi qəhvə içir."],["Listen! Somebody is singing.","Qulaq as! Kimsə oxuyur."],["The film usually starts at eight.","Film adətən saat 8-də başlayır."],["I'm busy. I'm cooking dinner at the moment.","Məşğulam. Hazırda şam yeməyi hazırlayıram."],["My sister never watches TV.","Bacım heç vaxt televizora baxmır."],["Hurry up! The taxi is waiting for us.","Tez ol! Taksi bizi gözləyir."]] },

    { h:"8. «Hal» bildirən fellər -ing almır; have iki mənada",
      t:[
        "Bəzi fellər iş-hərəkət yox, fikir, bilik, hiss, istək və ya sahiblik bildirir. Belə fellər «indi» mənasında da -ing almır, Present Simple-də qalır. Səbəb: «bilirəm, istəyirəm, sevirəm» bir işi görmək deyil, bir halda olmaqdır, onu «indicə gedən iş» kimi göstərmək olmur.",
        "Azərbaycanca «bilirəm», «istəyirəm» deyirik və cümlədə «indi» mənası var, ona görə çoxları am knowing, am wanting deyir. İngiliscə isə həmişə I know, I want deyilir.",
        "have iki mənada işlənir. «Sahib olmaq, var» mənasında have -ing almır, indi olsa da Simple qalır: She has two children. Amma yemək, içmək, duş, istirahət mənasında (have breakfast, have lunch, have a shower, have a good time) have «etmək» deməkdir. Bu mənada o, adi iş feli kimidir və -ing ala bilər: He is having breakfast now."
      ],
      tbl:[["fikir, bilik","know, understand, believe, remember, mean"],["hiss, xoşlama","like, love, hate, prefer"],["istək, ehtiyac, sahiblik","want, need, belong, have (var)"],["görünmə","seem"]],
      ex:[["I know the answer.","Cavabı bilirəm."],["She wants a new phone.","O yeni telefon istəyir."],["I don't understand this word.","Bu sözü başa düşmürəm."],["She has two children.","Onun iki uşağı var."],["He's having breakfast now.","O indi səhər yeməyi yeyir."],["We're having a great time here.","Burada çox gözəl vaxt keçiririk."]],
      no:"I am knowing the answer. / She is wanting a new phone. / She is having two children. — səhvdir" },

    { h:"9. Ən çox edilən səhvlər",
      t:[
        "Birinci səhv: he / she / it ilə -s unutmaq (She go). Azərbaycanca hər şəxsin öz şəkilçisi var (-əm, -sən, -ik), ingiliscə isə yalnız bir yerdə -s qalıb, ona görə unutmaq asandır. Sual və inkarda -s artıq lazım deyil: does gələndə feldən düşür.",
        "İkinci səhv: am / is / are ilə fel formalarını qarışdırmaq. Cümlədə fel sadə formadadırsa (work, go), am / is / are yazılmır: I go to the gym (I am go yox). Cümlədə -ing varsa, am / is / are mütləq yazılır: Are you working? (Do you working yox).",
        "Üçüncü səhv: indi gedən işi Simple ilə demək: Now I write an email deyil, I am writing an email now. Dördüncü səhv: hal fellərinə -ing artırmaq: I am knowing deyil, I know."
      ],
      ex:[["He goes to work by bus every day.","O hər gün işə avtobusla gedir."],["I go to the gym on Mondays.","Bazar ertəsi günləri idman zalına gedirəm."],["I'm writing an email now.","İndi e-poçt yazıram."],["Are you working today?","Bu gün işləyirsən?"],["I know your sister.","Bacını tanıyıram."],["What do you usually do on Sundays?","Bazar günləri adətən nə edirsən?"]],
      no:"She go to work every day. / I am go to the gym. / Now I write an email. / Do you working? / I am knowing your sister. — səhvdir" }
  ],
  sum:[
    "Present Simple — vərdiş, daimi vəziyyət, fakt: I work. She works. Siqnal: always, usually, every day.",
    "he / she / it ilə feldə -s: works, watches, goes, studies, has.",
    "Present Simple-də sual və inkar do / does ilə: Do you work? She doesn't work. does gələndə fel sadə qalır (-s düşür).",
    "Present Continuous — indi və bu günlərdə keçici iş: am / is / are + -ing. Siqnal: now, at the moment, this week, Look!, Listen!",
    "-ing yazılışı: make → making, sit → sitting, lie → lying.",
    "Continuous-da do yoxdur: Are you listening? He isn't working.",
    "know, understand, want, like, need, have (var) — -ing almır: I know, I want, She has.",
    "have yemək, içmək, duş mənasında -ing ala bilər: He is having breakfast.",
    "Hansını seçim? Həmişə / tez-tez olan iş — Simple; indi və ya keçici iş — Continuous."
  ]
},

/* ───────────────────────── L04 ───────────────────────── */
{ id:"L04", title:"Past Simple və Past Continuous", level:"A2", mins:25, from:["g04"],
  intro:"Bu dərsdə keçmişdə olanları necə danışacağını öyrənirsən: bitmiş iş (Past Simple), o anda davam edən iş (Past Continuous) və əvvəllər olan, indi olmayan vərdiş (used to). Əsas fikir: keçmiş formanı yalnız bir yerdə göstərirsən. Sual və inkarda onu did daşıyır.",
  sections:[
    { h:"1. Past Simple: keçmişdə bitmiş iş",
      t:[
        "Past Simple keçmişdə olub BİTMİŞ iş üçün işlənir. Çox vaxt nə vaxt olduğu da deyilir. Azərbaycanca «etdim, getdi, gördük» formasına uyğundur.",
        "Hekayə danışanda hadisələr bir-birinin ardınca Past Simple ilə deyilir: She opened the door and went out. Hər hadisə bitir, sonrakı başlayır.",
        "Past Simple-ın siqnal sözləri cədvəldədir. Bu sözlər keçmişi göstərir və «indi ilə əlaqə» yoxdur."
      ],
      tbl:[["yesterday, last night, last week, last year","dünən, keçən gecə, keçən həftə, keçən il"],["two days ago, a month ago","iki gün əvvəl, bir ay əvvəl"],["in 2019, on Monday","2019-cu ildə, bazar ertəsi günü"],["when I was a child","uşaq olanda"]],
      ex:[["I visited my grandmother yesterday.","Dünən nənəmə baş çəkdim."],["We moved to Baku in 2018.","2018-ci ildə Bakıya köçdük."],["I lost my phone two days ago.","İki gün əvvəl telefonumu itirdim."],["She opened the door and went out.","O qapını açıb çıxdı."],["When I saw the fire, I called the police.","Yanğını görəndə polisə zəng etdim."]] },

    { h:"2. Qaydalı fellər: -ed",
      t:[
        "Qaydalı fellərin keçmiş forması -ed ilə düzəlir: work → worked. Fel e ilə bitirsə, yalnız -d artırılır: live → lived. Samit + y ilə bitirsə, y düşür və -ied yazılır: study → studied. Sait + y olanda sadəcə -ed artırılır: play → played.",
        "Bir hecalı fel «samit + sait + samit» ilə bitirsə, son hərf ikiləşir: stop → stopped. İki hecalı feldə ikiləşmə yoxdur: visit → visited. Bu qaydalar yalnız yazıya aiddir."
      ],
      tbl:[["work, open, visit","worked, opened, visited"],["live, move","lived, moved"],["study, try","studied, tried"],["play, stay","played, stayed"],["stop, plan","stopped, planned"]],
      ex:[["She worked late last night.","Dünən gecə gec saata qədər işlədi."],["The bus stopped near my house.","Avtobus evimin yanında dayandı."],["She studied at Baku State University.","O Bakı Dövlət Universitetində oxudu."],["They played football after work.","Onlar işdən sonra futbol oynadılar."]] },

    { h:"3. Qaydasız fellər — əzbərlə",
      t:[
        "Bəzi fellər keçmişdə -ed almır, tamam başqa forma alır. Bunlara qaydasız fellər deyilir. Onların ümumi qaydası yoxdur, hər birini ayrıca əzbərləmək lazımdır. Cədvəldə ən çox işlənənlər var.",
        "put, cut kimi bəzi fellərdə forma dəyişmir; read yazılışı eyni qalır, oxunuşu dəyişir (red). İndiki zamanda he / she / it ilə feldə -s olur, keçmişdə isə olmur. Past Simple-də forma hamı üçün eynidir: I went, she went, they went. Yalnız be fərqlidir: was / were (1-ci dərs)."
      ],
      tbl:[["go → went","see → saw"],["buy → bought","think → thought"],["have → had","get → got"],["do → did","make → made"],["come → came","take → took"],["eat → ate","drink → drank"],["write → wrote","speak → spoke"],["say → said","tell → told"],["leave → left","meet → met"],["lose → lost","know → knew"],["sleep → slept","hear → heard"],["give → gave","find → found"],["pay → paid","run → ran"],["sit → sat","ring → rang"],["steal → stole","wear → wore"]],
      ex:[["I went to the market.","Bazara getdim."],["She bought a new dress.","O yeni don aldı."],["He left home at seven.","O saat 7-də evdən çıxdı."],["My parents met in 1995.","Valideynlərim 1995-ci ildə tanış olublar."],["We ate fish for dinner.","Şam yeməyində balıq yedik."],["The phone rang while I was having a shower.","Mən duş alarkən telefon zəng çaldı."]],
      no:"I goed to the market. / She buyed a new dress. / She wents home. / He liveds in Ganja. — səhvdir" },

    { h:"4. Past Simple: sual və inkar — did / didn't",
      t:[
        "1-ci dərsdəki qayda keçmişdə də eynidir: cümlədə was / were yoxdursa, BÜTÜN fellərdə sual və inkar did / didn't ilə qurulur. did hamı üçün eynidir: I, you, he, she, we, they.",
        "did artıq keçmişi göstərir, ona görə əsas fel sadə formaya qayıdır: went → go, saw → see, bought → buy. Keçmiş forma cümlədə iki dəfə yazılmır. Sual sözü varsa, ən əvvəldə gəlir: Where did you buy it?",
        "Cümlədə was / were varsa, did işlənmir. Sualda was / were «kim»-dən əvvələ keçir, inkarda ondan sonra not gəlir: wasn't, weren't. Bir cümlədə was və did birlikdə olmur: Were you at home? (Did you were at home yox)."
      ],
      tbl:[["was / were yoxdur","Did you see it? I didn't see it."],["was / were var","Were you at home? I wasn't at home."]],
      ex:[["Did you see the match?","Oyuna baxdın?"],["I didn't sleep well.","Yaxşı yatmadım."],["Where did you buy it?","Onu haradan aldın?"],["Were you at home?","Evdə idin?"],["It wasn't expensive.","Baha deyildi."],["Where were you last night?","Dünən axşam harada idin?"]],
      no:"Did you saw him? / I didn't slept well. / I didn't went. / Did you were at home? — səhvdir" },

    { h:"5. Past Continuous: «edirdim» — o anda davam edən iş",
      t:[
        "Past Continuous keçmişdə müəyyən bir anda davam edən, hələ bitməmiş işi göstərir. Azərbaycanca «edirdim, gedirdik» formasıdır. Çox vaxt dəqiq vaxtla gəlir: at 9 o'clock, at this time yesterday.",
        "Forma: was / were + fel + -ing. was / were «kim»-ə görə seçilir: I, he, she, it → was; we, you, they → were. -ing yazılışı indiki zamandakı kimidir (make → making, sit → sitting).",
        "Sual və inkarda did yoxdur, çünki was / were var. Sualda was / were qabağa keçir: What were you doing? İnkarda not gəlir: She wasn't working.",
        "«Hal» fellərinin (know, understand, want, like, need…) keçmişdə də -ing almır. Azərbaycanca «bilmirdim», «istəyirdi» Continuous kimi səslənir, amma ingiliscə Past Simple işlənir: I didn't know the answer. She wanted a new car."
      ],
      tbl:[["I / he / she / it","was working"],["we / you / they","were working"]],
      ex:[["At 9 o'clock I was having dinner.","Saat 9-da şam edirdim."],["What were you doing yesterday at 5?","Dünən saat 5-də nə edirdin?"],["The children were playing in the garden.","Uşaqlar bağda oynayırdılar."],["She wasn't working at 10 o'clock.","O, saat 10-da işləmirdi."],["I didn't know the answer.","Cavabı bilmirdim."],["She wanted a new car.","O yeni maşın istəyirdi."]],
      no:"I was knowing the answer. / We was watching TV. / What did you doing? — səhvdir" },

    { h:"6. Uzun iş + qısa hadisə: when və while",
      t:[
        "Keçmişdə bir iş uzun müddət gedirdi (Past Continuous), onun ortasında qısa bir hadisə baş verdi (Past Simple). Azərbaycanca: «Sən zəng edəndə maşın sürürdüm». «Sürürdüm» uzun işdir, «zəng etdin» qısa hadisədir.",
        "Qısa hadisə çox vaxt when ilə gəlir: I was driving when you called. when hissəsi cümlənin əvvəlində də ola bilər, onda ondan sonra vergül qoyulur: When the teacher came in, we were talking.",
        "while «…-arkən» deməkdir və uzun davam edən işi göstərir. Ona görə while-dan sonra çox vaxt Past Continuous gəlir, qısa hadisə isə Past Simple-də qalır: While I was cooking, the lights went out. İki uzun iş eyni vaxtda gedirdisə, ikisi də Continuous ola bilər: While I was cooking, my wife was watching TV."
      ],
      tbl:[["uzun, davam edən iş","was / were + -ing"],["qısa, bir anlıq hadisə","Past Simple"]],
      ex:[["I was driving when you called.","Sən zəng edəndə maşın sürürdüm."],["It was raining when we left the house.","Evdən çıxanda yağış yağırdı."],["While I was walking home, I saw an old friend.","Evə piyada gedərkən köhnə dostumu gördüm."],["Somebody stole my bag while I was sleeping.","Mən yatarkən kimsə çantamı oğurladı."],["While I was cooking, my wife was watching TV.","Mən yemək bişirərkən həyat yoldaşım televizora baxırdı."]],
      no:"While I was walking home, I was seeing an old friend. / I was driving when you were calling. — səhvdir (qısa hadisə — Past Simple)" },

    { h:"7. İki qısa hadisə ardıcıl: ikisi də Simple",
      t:[
        "Hadisələr bir-birinin ardınca olubsa — biri bitdi, sonra o biri başladı — hər ikisi Past Simple olur: When I saw the fire, I called the police. Continuous yalnız bir iş başqa hadisə zamanı artıq DAVAM edirdisə işlənir.",
        "Eyni cümlədə forma dəyişəndə məna da dəyişir. Cədvələ bax. «they were having dinner» — mən gələndə onlar artıq şam edirdilər. «they had dinner» — mən gəldim, sonra onlar şam etdilər.",
        "Qısa, bir anlıq hadisəyə (arrived, called, saw, heard, opened) Continuous demə: When I arrived — düzdür, When I was arriving — səhvdir."
      ],
      tbl:[["When I arrived, they were having dinner.","Mən gələndə onlar artıq şam edirdilər."],["When I arrived, they had dinner.","Mən gəldim, sonra onlar şam etdilər."]],
      ex:[["When I heard the news, I called my mother.","Xəbəri eşidəndə anama zəng etdim."],["When the teacher came in, we were talking.","Müəllim girəndə biz danışırdıq."],["I didn't know the answer, so I asked the teacher.","Cavabı bilmirdim, ona görə müəllimdən soruşdum."],["She opened the door and went out.","O qapını açıb çıxdı."]],
      no:"When I was arriving, the film started. / When I was seeing the fire, I was calling the police. — səhvdir" },

    { h:"8. used to — «əvvəllər edərdim, indi etmirəm»",
      t:[
        "used to keçmişdə vərdiş və ya vəziyyət olub, amma indi olmayan şeyi göstərir: «əvvəllər belə idi, indi belə deyil». Forma: used to + sadə fel, hamı üçün eynidir: I used to smoke. This street used to be quiet.",
        "Sual və inkarda did gəlir, ona görə used sözündən d düşür: did … use to, didn't use to. Did you use to play football? We didn't use to have a car. Təsdiq cümləsində isə used to (d ilə) yazılır: I use to play — səhvdir.",
        "İndiki vərdiş üçün used to işlənmir, onun yerinə usually + Present Simple deyilir: I usually walk to work. be used to (alışmaq) ayrı quruluşdur, used to + sadə fel ilə qarışdırma."
      ],
      ex:[["I used to smoke, but I stopped two years ago.","Əvvəllər siqaret çəkirdim, amma iki il əvvəl atdım."],["We used to live in Ganja, but now we live in Baku.","Əvvəllər Gəncədə yaşayırdıq, indi Bakıda yaşayırıq."],["Did you use to have long hair when you were a student?","Tələbə olanda uzun saçın var idi?"],["We didn't use to have a car.","Əvvəllər maşınımız yox idi."],["This street used to be very quiet.","Bu küçə əvvəllər çox sakit idi."],["My father didn't use to drink tea, but now he drinks it every day.","Atam əvvəllər çay içmirdi, indi hər gün içir."]],
      no:"I use to play tennis. / Did you used to play? / I didn't used to like fish. — səhvdir" },

    { h:"9. Azərbaycancadan fərq və ən çox edilən səhvlər",
      t:[
        "Azərbaycanca keçmişi bir neçə yolla deyirik: «-dı» («getdim, gördüm»), «-ırdı» («gedirdim, görürdüm») və «idim» («yorğun idim»). İngiliscə: «-dı» Past Simple-dir (went, saw); «idim» was / were-dir; «-ırdı» yalnız konkret anda davam edən iş üçün Past Continuous-dur.",
        "Diqqət: «Uşaq olanda hər gün futbol oynayırdım» demək vərdiş deyir, konkret an yox. Ona görə burada Past Continuous deyil, Past Simple və ya used to işlənir: I played football every day. / I used to play football every day. Past Continuous həmişə «o anda, o vaxt davam edirdi» mənasındadır.",
        "Digər səhvlər: «idim» üçün am / is / are-i keçmişə keçirməyi unutmaq (Yesterday I am busy deyil, I was busy). did-dən sonra keçmiş forma yazmaq (Did you saw deyil, Did you see). Qaydasız feli -ed ilə düzəltmək (goed deyil, went)."
      ],
      ex:[["Yesterday I was very busy.","Dünən çox məşğul idim."],["When I was a child, I played football every day.","Uşaq olanda hər gün futbol oynayırdım."],["Did you see him?","Onu gördün?"],["I went to the market.","Bazara getdim."],["At 8 o'clock I was watching TV.","Saat 8-də televizora baxırdım."]],
      no:"Yesterday I am very busy. / When I was a child, I was playing football every day. / Did you saw him? / I goed to the market. — səhvdir" }
  ],
  sum:[
    "Past Simple — keçmişdə bitmiş iş: yesterday, last week, two days ago, in 2019.",
    "Qaydalı fellər -ed alır (worked, lived, studied, stopped). Qaydasız fellər başqa forma alır (went, saw, bought) — əzbərlə.",
    "Past Simple-də forma hamı üçün eynidir (I went, she went). Yalnız be: was / were.",
    "was / were yoxdursa (bütün fellərdə) sual və inkar did / didn't ilə. did-dən sonra fel sadə qalır: Did you see? I didn't go.",
    "was / were varsa did yoxdur: Were you at home? It wasn't expensive.",
    "Past Continuous: was / were + -ing — keçmişdə müəyyən anda davam edən iş. Hal fellərində (know, want) işlənmir.",
    "when / while: uzun iş — Continuous, qısa hadisə — Simple: I was cooking when the lights went out.",
    "Hadisələr ardıcıldırsa, hamısı Simple: When I saw the fire, I called the police.",
    "used to + sadə fel — əvvəllər olan, indi olmayan vərdiş. Sual-inkar: did … use to, didn't use to."
  ]
},

/* ───────────────────────── L05 ───────────────────────── */
{ id:"L05", title:"Gələcək: will, going to, Present Continuous", level:"A2", mins:25, from:["g05"],
  intro:"Azərbaycanca gələcəyi bir şəkilçi ilə deyirik: «edəcəyəm». İngiliscə isə forma sənin niyyətindən asılıdır: planın var, qərarı indi verirsən, görüş razılaşdırılıb, yoxsa cədvəldə yazılıb? Bu dərsdə dörd əsas halı və hər birinin formasını öyrənirsən.",
  sections:[
    { h:"1. Gələcək üçün bir neçə forma var",
      t:[
        "Azərbaycanca «edəcəyəm», «gedəcək» deyirik və hər halda eyni şəkilçi işlənir. İngiliscə isə bir neçə forma var və seçim niyyətdən asılıdır. Özündən soruş: bunu əvvəlcədən planlaşdırmışam? İndi qərar verirəm? Görüş razılaşdırılıb? Cədvəldə yazılıb?",
        "Dörd əsas hal var: plan və əlamət üçün be going to, indi verilən qərar, söz və fikir üçün will, razılaşdırılmış görüş üçün Present Continuous, cədvəl üçün Present Simple. Hər birini aşağıda ayrıca öyrənəcəksən.",
        "Gələcək vaxt sözləri: tomorrow, tonight, next week, on Friday, in two days, soon."
      ],
      tbl:[["əvvəlcədən plan","I'm going to study."],["indi verilən qərar, söz","I'll help you."],["razılaşdırılmış görüş","I'm meeting Anar at 6."],["cədvəl (qatar, dərs, film)","The train leaves at 8."]],
      ex:[["I'm going to visit my aunt on Sunday.","Bazar günü xalama baş çəkəcəyəm (planım var)."],["OK, I'll call you back.","Yaxşı, sənə geri zəng edərəm (indi qərar verdim)."],["I'm meeting Anar at 6.","Saat 6-da Anarla görüşürəm (razılaşmışıq)."],["The train leaves at 8.","Qatar saat 8-də yola düşür (cədvəl)."]] },

    { h:"2. be going to: əvvəlcədən plan və görünən əlamət",
      t:[
        "Bir işi danışmazdan ƏVVƏL düşünüb qərara gəlmisənsə, be going to işlənir: bu artıq sənin planındır. Forma: am / is / are + going to + sadə fel. am / is / are «kim»-ə görə seçilir və atılmır. going-dən sonra to yazılır, to-dan sonra fel sadə formada gəlir.",
        "going to-nun ikinci mənası proqnozdur, amma indi GÖRDÜYÜN bir şeyə əsaslanan proqnoz. Göydə qara buludlar görürsən — yağış yağacaq. Adam büdrəyir — yıxılacaq. Nəticənin əlaməti artıq gözünün qabağındadır.",
        "Sual və inkar: cümlədə am / is / are var, ona görə do lazım deyil. Sualda am / is / are «kim»-dən əvvələ keçir: Are you going to study tonight? İnkarda ondan sonra not gəlir: She isn't going to buy a car."
      ],
      tbl:[["təsdiq","I'm going to study tonight."],["inkar","I'm not going to study tonight."],["sual","Are you going to study tonight?"]],
      ex:[["I'm going to start a new course in January.","Yanvarda yeni kursa başlayacağam."],["We are going to buy a flat.","Mənzil alacağıq."],["Look at those clouds! It's going to rain.","O buludlara bax! Yağış yağacaq."],["Be careful! You're going to fall.","Ehtiyatlı ol! Yıxılacaqsan."],["She isn't going to buy a car.","O maşın almayacaq."],["When are you going to call him?","Ona nə vaxt zəng edəcəksən?"]],
      no:"I going to buy a phone. / Do you going to study? / Are you go to buy a car? / Are you going study? — səhvdir" },

    { h:"3. will: forma",
      t:[
        "will bütün şəxslər üçün eynidir: I will, she will, they will. Ondan sonra sadə fel gəlir: to yoxdur, -s yoxdur. Qısa forma 'll-dir: I'll, she'll, we'll. İnkarı won't-dur (= will not).",
        "Sualda will «kim»-dən əvvələ keçir: Will she come? Cümlədə will varsa, başqa köməkçi (do, does) lazım deyil. Qısa cavabda will təkrarlanır: Yes, she will. No, she won't."
      ],
      tbl:[["təsdiq","She will come. / She'll come."],["inkar","She won't come."],["sual","Will she come?"],["qısa cavab","Yes, she will. No, she won't."]],
      ex:[["She will come tomorrow.","O sabah gələcək."],["He won't be at work tomorrow.","O sabah işdə olmayacaq."],["I'll call you later.","Sonra sənə zəng edəcəm."],["Will you be at home tonight? — No, I won't.","Bu axşam evdə olacaqsan? — Xeyr, olmayacağam."],["We'll be late.","Gecikəcəyik."]],
      no:"I will to go. / She will comes. / He doesn't will come. / Do you will help me? — səhvdir" },

    { h:"4. will: indi verilən qərar, söz, təklif, xahiş",
      t:[
        "Əvvəlcədən plan yoxdursa və qərarı danışarkən, elə o an verirsənsə, will işlənir. Azərbaycanca bunu çox vaxt «alaram, edərəm» kimi deyirik. Plan artıq varsa, will yox, going to işlənir.",
        "will başqa hallarda da işlənir. Söz verəndə: I'll…, I won't… Kömək təklif edəndə: I'll help you. Kimdənsə xahiş edəndə: Will you…? won't həm də «razı olmur, etmək istəmir» mənasında işlənir: My car won't start — maşınım işə düşmür."
      ],
      tbl:[["indi verilən qərar","OK, I'll buy some."],["söz","I won't tell anyone."],["təklif","I'll help you."],["xahiş","Will you help me, please?"]],
      ex:[["We have no bread. — OK, I'll buy some.","Çörəyimiz yoxdur. — Yaxşı, alaram."],["The phone is ringing. — I'll answer it.","Telefon zəng çalır. — Mən cavab verərəm."],["I'm cold. — I'll close the window.","Üşüyürəm. — Pəncərəni bağlayaram."],["I won't tell anyone. I promise.","Heç kimə deməyəcəm. Söz verirəm."],["I'll carry your bag.","Çantanı mən daşıyaram."],["Will you help me, please?","Mənə kömək edərsən?"]] },

    { h:"5. will: fikir və proqnoz",
      t:[
        "Gələcək haqqında öz fikrini, təxminini deyəndə will işlənir. Çox vaxt I think, I'm sure, probably sözləri ilə gəlir: I think the exam will be difficult. She will probably be late.",
        "«Olmayacaq» fikrini ingiliscə çox vaxt I don't think … will ilə deyirik. Azərbaycanca «məncə, yağış yağmayacaq» deyirik, inkar feldə olur. İngiliscə isə inkar I think-ə keçir: I don't think it will rain. I think it won't rain də düzdür, amma az işlənir.",
        "Proqnozda fərq belədir: gözünün qabağında əlamət varsa (qara buludlar) — going to. Əlamət yoxdur, sadəcə fikir və ya təxmindirsə — will."
      ],
      ex:[["I think the exam will be difficult.","Məncə imtahan çətin olacaq."],["I don't think it will rain tomorrow.","Məncə sabah yağış yağmayacaq."],["She will probably be late.","O, yəqin ki, gecikəcək."],["I'm sure you will pass the test.","Əminəm ki, imtahandan keçəcəksən."],["Look at those clouds! It's going to rain.","O buludlara bax! Yağış yağacaq (əlamət var)."],["I think it will rain tomorrow.","Məncə sabah yağış yağacaq (sadəcə fikir)."]],
      no:"I don't think it won't rain. / I think the exam will to be difficult. — səhvdir (I don't think artıq inkardır)" },

    { h:"6. will yoxsa going to?",
      t:[
        "Özündən iki sual soruş. Bu qərarı danışmazdan ƏVVƏL vermişdim? Onda going to. Qərarı elə İNDİ, danışarkən verirəm? Onda will.",
        "Eyni vəziyyətdə iki cavab ola bilər. «Bu çanta ağırdır.» — «Gözlə, kömək edərəm» (will: qərar indi verildi). Amma «Elnur gələn ay yeni işə başlayacaq. Dünən mənə dedi» — plan artıq var, going to işlənir.",
        "Proqnozda: gözünün qabağında əlamət varsa — going to, yoxdursa və sadəcə fikirdirsə — will. Söz və təklif həmişə will ilə deyilir."
      ],
      tbl:[["plan (əvvəl qərar verilib)","We decided last week. We're going to buy a car."],["indi verilən qərar","This bag is heavy. — I'll help you."],["əlaməti görürsən","Look at the sky! It's going to snow."],["fikir, təxmin, söz, təklif","I think it will be difficult. I'll call you."]],
      ex:[["We are going to buy a new flat next year. We decided last month.","Gələn il yeni mənzil alacağıq. Keçən ay qərar verdik."],["Sit down. I'll get you some water.","Otur. Sənə su gətirərəm."],["Elnur is going to start a new job next month. He told me yesterday.","Elnur gələn ay yeni işə başlayacaq. Dünən mənə dedi."],["Look at the sky! It's going to snow.","Səmaya bax! Qar yağacaq."],["This bag is heavy. — Wait, I'll help you.","Bu çanta ağırdır. — Gözlə, kömək edərəm."],["What are you going to do after university?","Universitetdən sonra nə edəcəksən?"]],
      no:"I go to visit my aunt tomorrow (plan var). — səhvdir (I'm going to visit my aunt tomorrow)" },

    { h:"7. Present Continuous: razılaşdırılmış görüş",
      t:[
        "Gələcək görüş, səfər və ya tədbir artıq razılaşdırılıbsa — vaxtı və yeri bəllidir, bilet alınıb, masa sifariş olunub — am / is / are + -ing işlənir. Forma «indi» üçün olan Present Continuous ilə eynidir. Gələcək mənasını vaxt sözü verir: tomorrow, on Friday, next week, tonight.",
        "Bu halda going to da düzdür, amma danışıqda Continuous daha çox işlənir. Fərq belədir: Continuous-da konkret görüş, vaxt, bilet var; going to isə sadəcə niyyət də ola bilər. What are you doing tonight? «Bu axşam planın nədir?» deməkdir."
      ],
      ex:[["I'm meeting the manager at 3 tomorrow.","Sabah saat 3-də menecerlə görüşürəm."],["We're flying to Tbilisi on Friday. We have the tickets.","Cümə günü Tbilisiyə uçuruq. Biletlərimiz var."],["She has booked a table. They're having dinner at 8 tonight.","O, masa sifariş edib. Onlar bu axşam saat 8-də şam edirlər."],["I'm meeting Anar at 6 tomorrow. We arranged it yesterday.","Sabah saat 6-da Anarla görüşürəm. Dünən razılaşdıq."],["What are you doing tonight?","Bu axşam nə edirsən? (planın nədir?)"]] },

    { h:"8. Present Simple: cədvəl",
      t:[
        "Qatar, avtobus, təyyarə, dərs, film, mağazanın açılışı kimi cədvəldə yazılmış vaxtlar üçün Present Simple işlənir. Bu vaxtları sən yox, cədvəl müəyyən edir. Ona görə gələcək olsa da, will yox, Present Simple deyilir.",
        "Qaydalar sadə Present Simple ilə eynidir: he / she / it ilə feldə -s olur. Sual və inkar do / does ilə qurulur: What time does the shop open tomorrow? The shop doesn't open on Sundays."
      ],
      ex:[["The train leaves at 6:15 tomorrow morning.","Qatar sabah səhər 6:15-də yola düşür."],["The film starts at 8.","Film saat 8-də başlayır."],["The lesson starts at nine tomorrow.","Dərs sabah saat 9-da başlayır."],["What time does the shop open tomorrow?","Mağaza sabah saat neçədə açılır?"],["Our flight leaves at 7 on Friday.","Təyyarəmiz cümə günü saat 7-də uçur."]],
      no:"The train will leaves at 6:15. / The lesson will to start at nine. — səhvdir (cədvəl: leaves, starts)" },

    { h:"9. when, if, as soon as + Present Simple",
      t:[
        "when (…-an), if (əgər), as soon as (…-an kimi), before, after, until sözlərindən sonra gələcək mənası olsa da will işlənmir. Bu hissədə Present Simple işlənir. will yalnız cümlənin o biri, əsas hissəsində olur: I'll call you when I get home.",
        "Azərbaycanca da «çatanda», «yağsa» deyirik və bu sözlərdə «-acaq» yoxdur. İngiliscə də belədir. Ona görə when I will get home və if it will rain səhvdir.",
        "Hissələrin yeri dəyişə bilər. when / if hissəsi əvvəldədirsə, ondan sonra vergül qoyulur: If it rains, we'll stay at home. Sonda olanda vergül lazım deyil: We'll stay at home if it rains."
      ],
      tbl:[["when / if / as soon as / before / after / until + Present Simple","I'll call you when I get home."],["əsas hissə: will + sadə fel","If it rains, we'll stay at home."]],
      ex:[["I'll call you when I get home.","Evə çatanda sənə zəng edəcəm."],["If it rains, we'll stay at home.","Yağış yağsa, evdə qalacağıq."],["I'll text you as soon as I arrive.","Çatan kimi sənə yazacam."],["When she finishes work, she'll call you.","İşi bitirəndə sənə zəng edəcək."],["If you don't hurry, you'll miss the bus.","Tələsməsən, avtobusu qaçıracaqsan."],["We'll go to the beach if the weather is nice.","Hava gözəl olsa, çimərliyə gedəcəyik."]],
      no:"I'll call you when I will get home. / If it will rain, we'll stay at home. / If I will see him, I'll tell him. — səhvdir" }
  ],
  sum:[
    "Gələcək üçün forma niyyətdən asılıdır: plan, qərar, görüş, cədvəl.",
    "be going to (am / is / are + going to + fel) — əvvəlcədən plan və gözlə görünən əlamət: Look at those clouds! It's going to rain.",
    "going to ilə sual-inkarda do yoxdur: Are you going to study? She isn't going to buy a car.",
    "will + sadə fel (to yox, -s yox): I'll help you. Inkar: won't. Sual: Will you …? Qısa cavab: Yes, I will. No, I won't.",
    "will — indi verilən qərar, söz, təklif, xahiş, fikir (I think … will). «Məncə, olmayacaq» = I don't think it will …",
    "Qərar danışmazdan əvvəl verilibsə — going to; elə indi verilirsə — will.",
    "Razılaşdırılmış görüş (vaxt, yer, bilet) — Present Continuous: I'm meeting Anar at 6 tomorrow.",
    "Cədvəl (qatar, dərs, film) — Present Simple: The train leaves at 6:15.",
    "when, if, as soon as, before, after, until-dan sonra will yoxdur — Present Simple: I'll call you when I get home."
  ]
}

);
