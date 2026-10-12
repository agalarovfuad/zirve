// Zirvə — qrammatika DƏRSLƏRİ (2-ci hissə: L06–L10). Hər dərs bir mövzunu tam izah edir.
var GLESSONS = typeof GLESSONS==='undefined' ? [] : GLESSONS;
GLESSONS.push(
 { id:"L06", title:"Perfect zamanlar: Present Perfect, Past Perfect", level:"A2", mins:25, from:["g08","g17"],
   intro:"Bu dərsdə keçmişi «indi» ilə bağlayan zamanları öyrənirsən: Present Perfect (have + V3), Present Perfect Continuous (have been + -ing) və Past Perfect (had + V3). Azərbaycanca bunların hamısı bir-iki şəkilçi ilə deyilir, ingiliscə isə hər birinin öz yeri var. Bunları bilsən, «etmişəm» ilə «etdim» arasındakı fərqi düz seçəcəksən.",
   sections:[
     { h:"1. Əsas fikir: keçmiş indi ilə bağlıdır",
       t:[
         "İngiliscə keçmişdən danışmağın iki yolu var. Birincisi Past Simple-dır: iş keçmişdə bitib və vaxtı bəllidir (dünən, keçən il, 2019-da). İkincisi Present Perfect-dir: iş keçmişdə olub, amma biz onu İNDİ ilə bağlayırıq.",
         "Bu bağlantı üç cür ola bilər. Təcrübə: həyatda nə vaxtsa etmişəm. Nəticə: nəticəsi indi görünür. Davam edən vəziyyət: keçmişdə başlayıb, indi də davam edir. Üçündə də konkret vaxt DEYİLMİR, sadəcə «indiyə qədər» nəzərdə tutulur.",
         "Azərbaycanca «görmüşəm» və «gördüm» bəzən eyni mənada işlənir, ona görə fərq hiss olunmur. İngiliscə isə seçim ciddidir. Vaxt bəllidirsə Past Simple, vaxt deyilmirsə və indi ilə əlaqə varsa Present Perfect işlənir."
       ],
       tbl:[["Past Simple","Vaxt bəllidir, iş bitib: I lost my keys yesterday."],["Present Perfect","Vaxt yoxdur, indi ilə əlaqə var: I have lost my keys."]],
       ex:[["I lost my keys yesterday.","Dünən açarlarımı itirdim. (vaxt bəllidir)"],["I have lost my keys.","Açarlarımı itirmişəm. (indi də yoxdur)"],["She lived in Ganja in 2015.","O, 2015-ci ildə Gəncədə yaşadı."],["She has lived in Ganja for ten years.","O, on ildir Gəncədə yaşayır."]]
     },
     { h:"2. Necə qurulur: have / has + V3",
       t:[
         "Present Perfect iki hissədən ibarətdir: köməkçi söz have (he / she / it ilə has) və felin üçüncü forması — V3. V3 «etmiş» mənasındakı formadır. Danışıqda have → 've, has → 's qısalır.",
         "Qaydalı fellərdə V3 keçmiş formayla eynidir: sona -ed artırılır (work → worked). Yazılış: e ilə bitəndə yalnız -d (live → lived). Samit + y ilə bitəndə y → ied (study → studied). Sait + y ilə bitəndə dəyişmir (play → played). Bir hecalı fel «samit + sait + samit» ilə bitəndə son hərf ikiləşir (stop → stopped).",
         "Qaydasız fellərdə V3 ayrıca öyrənilir (növbəti bölmə). Sual və inkarda do / does / did LAZIM DEYİL, çünki have artıq köməkçidir. Sualda have kimdən əvvələ keçir, inkarda have / has-dan sonra not gəlir. V3 isə olduğu yerdə qalır."
       ],
       tbl:[["Təsdiq","I have worked · she has worked (I've / she's)"],["İnkar","I haven't worked · she hasn't worked"],["Sual","Have you worked? · Has she worked?"],["Qısa cavab","Yes, I have. · No, she hasn't."]],
       ex:[["I have finished my work.","İşimi bitirmişəm."],["They've bought a new house.","Onlar yeni ev alıblar."],["She hasn't called me.","O mənə zəng etməyib."],["Have you seen this film?","Bu filmə baxmısan?"],["Has he called you?","O sənə zəng edib?"]],
       no:"Do you have seen this film? / She hasn't call me. — səhvdir (have köməkçidir, do lazım deyil; V3 lazımdır: She hasn't called me)"
     },
     { h:"3. Qaydasız fellərin V3 formaları",
       t:[
         "Qaydasız fellərin üç forması var: sadə fel, keçmiş forma (V2) və V3. Present Perfect-də həmişə V3 işlənir, V2 yox. Bəzi fellərdə V2 ilə V3 eynidir (bought — bought), bəzilərində fərqlidir (went — gone).",
         "Qaydasız fellərin ümumi qaydası yoxdur, ona görə onları əzbərləmək lazımdır. Cədvəldə ən çox işlənən 22 fel var. Bu, bütün siyahı DEYİL: yeni qaydasız fellə rastlaşanda V3-ünü lüğətdə yoxla və öyrən."
       ],
       tbl:[["sadə fel","V2 (keçmiş)","V3"],["go","went","gone"],["be","was / were","been"],["see","saw","seen"],["do","did","done"],["eat","ate","eaten"],["write","wrote","written"],["take","took","taken"],["ride","rode","ridden"],["drink","drank","drunk"],["break","broke","broken"],["fly","flew","flown"],["know","knew","known"],["give","gave","given"],["come","came","come"],["buy","bought","bought"],["make","made","made"],["lose","lost","lost"],["have","had","had"],["leave","left","left"],["meet","met","met"],["find","found","found"],["tell","told","told"]],
       ex:[["I've seen this film three times.","Bu filmə üç dəfə baxmışam."],["He has written a book.","O, kitab yazıb."],["We have drunk all the tea.","Bütün çayı içmişik."],["She has broken her phone.","O, telefonunu sındırıb."],["I've never ridden a horse.","Heç vaxt ata minməmişəm."]],
       no:"has went / have saw / have drank — səhvdir (has gone / have seen / have drunk: Present Perfect-də V3 lazımdır)"
     },
     { h:"4. Həyat təcrübəsi: ever, never, been",
       t:[
         "Həyatında nə vaxtsa bir şey etmisənsə, amma NƏ VAXT olduğunu demirsənsə, Present Perfect işlənir. Vacib olan vaxt deyil, təcrübənin özüdür: etmisən, ya yox. Neçə dəfə olduğunu da demək olar: once, twice, three times.",
         "Təcrübə sualı Have you ever…? ilə qurulur. ever «nə vaxtsa» deməkdir və sualda işlənir. never «heç vaxt» deməkdir: cümlənin özü inkar mənası daşıyır, ona görə yanında haven't yazılmır. ever və never have / has ilə V3-ün arasına girir.",
         "go felinin iki V3 forması var və mənaları fərqlidir. been to — gedib qayıdıb, yəni orada olub (təcrübə). gone to — gedib və hələ oradadır, qayıtmayıb. Ona görə «heç Parisdə olmusan?» sualında həmişə been işlənir."
       ],
       tbl:[["ever","sualda: Have you ever…?"],["never","heç vaxt: I have never…"],["been to","gedib qayıdıb: I've been to London."],["gone to","gedib, hələ oradadır: Ali has gone to the bank."]],
       ex:[["I have visited Turkey twice.","Türkiyədə iki dəfə olmuşam."],["Have you ever eaten sushi?","Heç suşi yemisən?"],["I've never ridden a horse.","Heç vaxt ata minməmişəm."],["I've been to London.","Londonda olmuşam (qayıtmışam)."],["Ali isn't here. He has gone to the bank.","Əli burada deyil. Banka gedib (hələ oradadır)."],["Have you ever been to Paris?","Heç Parisdə olmusan?"]],
       no:"Have you ever gone to Paris? — «Parisdə olmusan?» mənasında səhvdir (Have you ever been to Paris?)"
     },
     { h:"5. Yeni hadisə, nəticəsi indi var: just, already, yet, still",
       t:[
         "Bir şey təzəcə olubsa və nəticəsi İNDİ görünürsə, Present Perfect işlənir. Məsələn, pul kisəni itirmisən və indi də yoxdur. Vaxt deyilmir, çünki vacib olan indiki nəticədir.",
         "Bu mənada dörd kiçik söz çox işlənir. just — «indicə». already — «artıq» (iş gözləniləndən tez olub), təsdiq cümlədə. yet — inkarda «hələ» (hələ etməmişəm), sualda «artıq». still — «hələ də» (bir şey gözləniləndən uzun davam edir).",
         "Yerləri: just və already have / has ilə V3-ün arasına girir. yet cümlənin sonunda gəlir. still adi feldən əvvəl, am / is / are-dan sonra gəlir. İnkarda still köməkçidən əvvəl durur (I still haven't…), narazılıq bildirir. still Present Perfect ilə məhdud deyil, Present Simple və Present Continuous ilə də işlənir."
       ],
       tbl:[["just","indicə","She has just left."],["already","artıq (təsdiqdə)","I've already eaten."],["yet","hələ (inkarda) / artıq (sualda)","I haven't finished yet. · Have you finished yet?"],["still","hələ də","He is still sleeping."]],
       ex:[["I've lost my wallet.","Pul kisəmi itirmişəm (indi yoxdur)."],["She has just finished her homework.","O, ev tapşırığını indicə bitirib."],["I've already eaten.","Artıq yemişəm."],["I haven't finished yet.","Hələ bitirməmişəm."],["It's 11 o'clock and he is still sleeping.","Saat 11-dir, o hələ də yatır."],["I still haven't finished my report.","Hələ də hesabatımı bitirməmişəm."]],
       no:"I have finished yet. — səhvdir (təsdiqdə yet olmur: I have already finished)"
     },
     { h:"6. İndiyə qədər davam edir: for, since, How long?",
       t:[
         "Keçmişdə başlayıb İNDİ də davam edən vəziyyət üçün Present Perfect işlənir. Azərbaycanca burada indiki zaman deyirik: «üç ildir burada yaşayıram». İngiliscə isə Present Simple yox, have + V3 lazımdır, çünki iş keçmişdən indiyə qədər uzanır. Müddəti How long have you…? soruşur.",
         "Müddət for ilə, başlanğıc nöqtə since ilə deyilir. for + müddət: nə qədər vaxt. since + başlanğıc: nə vaxtdan. İkisi də Present Perfect ilə gəlir.",
         "ago isə başqadır. ago «əvvəl» deməkdir, keçmişdəki bir anı göstərir və Past Simple ilə işlənir. Yəni ago olan cümlədə Present Perfect işlənmir."
       ],
       tbl:[["for + müddət","for ten minutes, for two hours, for three years, for a long time"],["since + başlanğıc","since 9 o'clock, since Monday, since 2019, since I was a child"],["ago + Past Simple","two days ago, a year ago, five years ago"]],
       ex:[["I've lived here for three years.","Üç ildir burada yaşayıram."],["She has worked here since 2020.","O, 2020-dən burada işləyir."],["How long have you known him?","Onu nə vaxtdan tanıyırsan?"],["We've been married for ten years.","On ildir evliyik."],["They got married five years ago.","Onlar beş il əvvəl evləndilər."]],
       no:"I live here for three years. / I haven't seen her since three weeks. — səhvdir (I have lived here for three years; for three weeks: müddət for ilə deyilir)"
     },
     { h:"7. Present Perfect, yoxsa Past Simple?",
       t:[
         "Qayda sadədir: keçmişin vaxtı deyilibsə və ya bəllidirsə, Past Simple işlənir. Belə vaxt sözləri: yesterday, last week, last year, in 2019, two days ago, when I was a child, at 5 o'clock. Present Perfect keçmişi indiyə bağlayır, bitmiş vaxt isə indiyə bağlı deyil.",
         "When…? sualı Past Simple ilə qurulur: When did you…? Çünki nə vaxt olduğunu soruşursan, vaxt isə keçmişdə qalıb. Vaxt dövrü hələ bitməyibsə (today, this week, this year), Present Perfect işlənir, çünki bu dövr indi də davam edir.",
         "Söhbətdə çox vaxt belə gedir: təcrübə sualı Present Perfect ilə başlayır (Have you ever…?). Cavab «bəli»dirsə, detallar — nə vaxt, harada, necə — Past Simple ilə deyilir. Çünki vaxt artıq bəllidir."
       ],
       tbl:[["Vaxt yoxdur, indi ilə əlaqə var","Present Perfect: I've lost my phone."],["Vaxt bəllidir","Past Simple: I lost my phone yesterday."],["When…? sualı","Past Simple: When did you buy it?"]],
       ex:[["I saw him yesterday.","Onu dünən gördüm."],["When did you buy your car?","Maşınını nə vaxt almısan?"],["Have you ever been to London? — Yes, I went there in 2023.","Londonda olmusan? — Bəli, 2023-də getdim."],["Have you seen the new film? — Yes, I saw it on Friday.","Yeni filmə baxmısan? — Bəli, cümə günü baxdım."],["She called me an hour ago.","O, mənə bir saat əvvəl zəng etdi."],["I've drunk three cups of coffee today.","Bu gün üç fincan qəhvə içmişəm."]],
       no:"I have seen him yesterday. / When have you bought it? — səhvdir (vaxt bəllidir: I saw him yesterday; When did you buy it?)"
     },
     { h:"8. Present Perfect Continuous: have been + -ing",
       t:[
         "Keçmişdə başlayıb indiyə qədər davam edən İŞ-PROSES üçün have / has + been + fel-ing işlənir, xüsusən nə qədər vaxt getdiyini deyəndə. Azərbaycanca yenə indiki zamanla deyirik: «bir saatdır gözləyirəm». Müddəti How long have you been …-ing? soruşur, cavabda for və ya since gəlir.",
         "Eyni forma iş indicə dayanıbsa və izi görünürsə də işlənir. Küçə yaşdır: demək, yağış yağırdı. Gözlər qırmızıdır: demək, ağlayıb. Burada vacib olan prosesin özüdür.",
         "have + V3 ilə fərq: nəticə, bitmiş iş və ya SAY (neçə dənə) vacibdirsə, have + V3. Prosesin özü və müddəti vacibdirsə, have been + -ing. Say varsa Continuous işlənmir, çünki say bitmiş nəticəni göstərir.",
         "Hal bildirən fellər adətən -ing almır: know, understand, believe, remember, mean, like, love, hate, prefer, want, need, belong, seem və «sahib olmaq» mənasında have. Bu, əzbərlənəcək siyahıdır, tam deyil. Onlarla müddət deyəndə have + V3 işlənir: «on ildir tanıyıram» = I've known."
       ],
       tbl:[["have + V3","nəticə, say: I've written three emails."],["have been + -ing","proses, müddət: I've been writing emails all morning."],["hal fellər","müddət üçün have + V3: I've known him for ten years."]],
       ex:[["I've been waiting for an hour.","Bir saatdır gözləyirəm."],["How long have you been learning English?","Neçə vaxtdır ingiliscə öyrənirsən?"],["It has been raining. The streets are wet.","Yağış yağıb. Küçələr yaşdır."],["I've written three emails.","Üç məktub yazmışam."],["I've known him for ten years.","Onu on ildir tanıyıram."],["How many cups of coffee have you drunk today?","Bu gün neçə fincan qəhvə içmisən?"]],
       no:"I am waiting for an hour. / I have been knowing her. / I've been writing three emails. — səhvdir (I have been waiting; I have known her; I've written three emails)"
     },
     { h:"9. Past Perfect: had + V3",
       t:[
         "Keçmişdə iki hadisə var və biri o birindən DAHA ƏVVƏL olubsa, daha əvvəlki hadisə üçün had + V3 işlənir. had bütün şəxslər üçün eynidir (I had, he had, they had). Azərbaycanca «getmişdi, başlamışdı» deyirik.",
         "Fərq çox vacibdir. İki iş ardıcıl və ya eyni anda olubsa, ikisi də Past Simple olur. Biri o birində ARTIQ bitibsə, daha əvvəlkisi Past Perfect olur. Bir sözün dəyişməsi bütün mənanı dəyişir (cədvələ bax).",
         "never, already, just də Past Perfect ilə işlənir: had never flown «o vaxta qədər heç vaxt uçmamışdı». Səbəb bildirəndə (because) çox gəlir. after, before, by the time sözləri ardıcıllığı göstərir: after və before ilə sıra aydın olduğu üçün Past Simple də düzdür. by the time ilə isə had + V3 demək olar ki həmişə lazımdır.",
         "Sual və inkarda had kimdən əvvələ keçir, inkar hadn't olur, qısa forması 'd-dir (I'd, she'd). Bu formanı şərt cümlələrində (If I had known…) və dolayı nitqdə (He said he had lost his key) da görəcəksən. Məna eynidir: keçmişdəki bir andan daha əvvəl olan iş."
       ],
       tbl:[["When I arrived, the film started.","Mən gəldim, sonra film başladı."],["When I arrived, the film had started.","Film mən gəlməmişdən əvvəl başlamışdı."]],
       ex:[["When I arrived, the film had already started.","Mən çatanda film artıq başlamışdı."],["By the time we got to the station, the train had left.","Stansiyaya çatanda qatar getmişdi."],["She was nervous because she had never flown before.","Əsəbi idi, çünki əvvəl heç vaxt təyyarəyə minməmişdi."],["After she had finished work, she went to the gym.","İşi bitirdikdən sonra idman zalına getdi."],["I hadn't seen the film.","Filmə baxmamışdım."],["Had you ever eaten sushi before that day?","O günə qədər heç suşi yemişdin?"]],
       no:"When I arrived, the train already left. / She was nervous because she never flew before. — səhvdir (daha əvvəlki iş: the train had already left; she had never flown)"
     }
   ],
   sum:[
     "Present Perfect = have / has + V3. Sual və inkarda do yoxdur: Have you seen it? She hasn't called.",
     "Vaxt deyilmir, indi ilə əlaqə var → Present Perfect. Vaxt bəllidir (yesterday, ago, in 2019, When…?) → Past Simple.",
     "Təcrübə: Have you ever…? / I have never…; been to = gedib qayıdıb, gone to = hələ oradadır.",
     "just və already ortada (have + just + V3), yet sonda (inkarda «hələ», sualda «artıq»), still = hələ də.",
     "for + müddət, since + başlanğıc nöqtə; ago → Past Simple.",
     "Keçmişdən indiyə davam edir → have + V3 / have been + -ing (Azərbaycanca indiki zaman olsa da, ingiliscə Present Simple yox).",
     "Nəticə və say → have + V3. Proses və müddət → have been + -ing. know, have, like, want kimi hal fellər -ing almır.",
     "Past Perfect = had + V3: keçmişdəki iki hadisədən DAHA ƏVVƏL olanı. Qaydasız fellərin V3-ünü əzbərlə: gone, seen, done, eaten, written."
   ]
 },
 { id:"L07", title:"Modal fellər və təkliflər", level:"A2", mins:25, from:["g09","g23"],
   intro:"Bu dərsdə bacarıq, icazə, məcburiyyət, məsləhət və ehtimal bildirən modal felləri öyrənirsən. Eyni dərsdə əmr, qadağa, təklif və nəzakətli istək ifadələri də var: Let's, Would you like, I'd like, Shall I, I'd rather. Hamısının ortaq cəhəti budur ki, arxasından adətən sadə fel gəlir. Ona görə hamısını bir yerdə görəcəksən.",
   sections:[
     { h:"1. Modal fellər necə işləyir",
       t:[
         "Modal fel başqa feli yanında dəyişən köməkçi sözdür. O, bacarıq, məcburiyyət, məsləhət, ehtimal kimi məna əlavə edir. Əsas modal fellər bunlardır: can, could, may, might, must, shall, should, will, would. Bu siyahı kiçikdir, əzbərlə.",
         "Hamısının üç eyni qaydası var. Birincisi, onlardan sonra sadə fel gəlir, to yoxdur. İkincisi, he / she / it ilə -s almırlar. Üçüncüsü, sual və inkarda do / does / did işlənmir: modal özü kimdən əvvələ keçir və ya özündən sonra not alır.",
         "have to modal deyil, adi feldir. Ona görə has to deyilir, sual və inkarda do / does / did lazımdır. Bunu 5-ci bölmədə görəcəksən."
       ],
       tbl:[["Təsdiq","She can swim."],["İnkar","She can't swim. (can't = cannot)"],["Sual","Can she swim?"]],
       ex:[["She can speak French.","O, fransızca danışa bilir."],["Can you help me?","Mənə kömək edə bilərsən?"],["He can't drive.","O, maşın sürə bilmir."],["You shouldn't worry.","Narahat olmamalısan."]],
       no:"can to swim / She cans swim / Do you can swim? — səhvdir (can swim; she can; Can you swim?)"
     },
     { h:"2. can və could: bacarıq və imkan",
       t:[
         "can iki mənada işlənir: bacarıq (üzə bilirəm) və imkan (sabah gələ bilərəm). Forma hamı üçün eynidir: I can, she can. İnkarı can't və ya cannot-dur (cannot bitişik yazılır). Sualda can kimdən əvvələ keçir.",
         "could can-ın keçmiş formasıdır: keçmişdə bacarıq və ya imkan. İnkarı couldn't-dur. Keçmişdə can işlənmir, onun yerinə could gəlir. Məsələn, «yata bilmirəm» indiki zamandır (can't), «yata bilmədim» keçmişdir (couldn't).",
         "Xahiş etmək üçün də could işlənir, amma orada keçmiş mənası yoxdur (növbəti bölmə)."
       ],
       tbl:[["İndiki zaman","I can swim. · I can't come tomorrow."],["Keçmiş zaman","I could read at five. · I couldn't sleep last night."]],
       ex:[["I can swim.","Üzə bilirəm."],["We can't come tomorrow.","Sabah gələ bilmərik."],["Can you speak Russian? — Yes, I can.","Rusca danışa bilirsən? — Bəli."],["When I was five, I could read.","Beş yaşımda oxuya bilirdim."],["I couldn't sleep last night.","Dünən gecə yata bilmədim."],["Could you swim when you were a child?","Uşaq olanda üzə bilirdin?"]],
       no:"He doesn't can swim. / I don't can swim. — səhvdir (He can't swim; modalda do/does yoxdur)"
     },
     { h:"3. İcazə və xahiş: Can I…? Could you…?",
       t:[
         "İcazə istəmək üçün Can I…? işlənir: «… edə bilərəm?». Daha nəzakətli variantı Could I…?-dir. Rəsmi yerdə May I…? deyilir. Hər üçündə «mən» icazə istəyir.",
         "Kimdənsə xahiş etmək üçün Can you…? və daha nəzakətli Could you…? işlənir. Burada could keçmiş mənası vermir, sadəcə nəzakət göstərir. Tanımadığın adama və rəsmi yerdə could seç, please də əlavə et.",
         "Hamısında sual qaydası eynidir: modal kimdən əvvələ keçir, do lazım deyil."
       ],
       tbl:[["İcazə: mən …?","Can I / Could I / May I …?"],["Xahiş: sən …?","Can you / Could you …?"]],
       ex:[["Can I use your phone?","Telefonundan istifadə edə bilərəm?"],["Could I have some water, please?","Bir az su ala bilərəm?"],["May I come in?","İçəri gələ bilərəm?"],["Could you open the window, please?","Pəncərəni aça bilərsiniz?"],["Can you help me?","Mənə kömək edə bilərsən?"]],
       no:"Do you can open the door? — səhvdir (Can you open the door?)"
     },
     { h:"4. must, mustn't, don't have to: ən çox qarışan hissə",
       t:[
         "must «mütləq etməliyəm» deməkdir. O, iki yerdə işlənir: danışan özü bir işi çox vacib sayanda və yazılı qaydalarda, bildirişlərdə. must-dan sonra sadə fel gəlir.",
         "mustn't (must not) «etmək olmaz, qadağandır» deməkdir. Bu çox güclü qadağadır. don't have to isə «lazım deyil» deməkdir: istəsən edərsən, istəməsən yox. Qadağa yoxdur, sadəcə məcburiyyət yoxdur.",
         "İngiliscə bu iki forma oxşar görünür, amma mənaları tam əksdir. Azərbaycanca «olmaz» və «lazım deyil» ayrı sözlərdir, ingiliscə isə ayrı-ayrı formalardır: mustn't və don't have to. Onları qarışdırma.",
         "have to kənar məcburiyyəti bildirir: iş, qanun, cədvəl, başqasının qərarı. Danışıqda must yerinə çox vaxt have to deyilir. Fərq: must danışanın öz fikridir, have to isə kənardan gələn məcburiyyətdir."
       ],
       tbl:[["must","mütləq etməlisən: You must wear a seatbelt."],["mustn't","olmaz, qadağandır: You mustn't smoke here."],["have to","məcburiyyət (qayda, iş): I have to work on Saturdays."],["don't have to","lazım deyil: You don't have to pay. It's free."]],
       ex:[["I must call my mother.","Anama mütləq zəng etməliyəm."],["Passengers must show their tickets.","Sərnişinlər biletlərini göstərməlidir."],["You mustn't use your phone in the exam.","İmtahanda telefondan istifadə etmək olmaz."],["You mustn't tell anyone. It's a secret.","Heç kimə deməməlisən. Sirdir."],["You don't have to pay. It's free.","Pul ödəmək lazım deyil. Pulsuzdur."],["We don't have to get up early tomorrow. It's Sunday.","Sabah tez durmağımız lazım deyil. Bazardır."]],
       no:"You mustn't pay — it's free. — səhvdir (lazım deyil mənasında: You don't have to pay)"
     },
     { h:"5. have to: forma və keçmiş zaman",
       t:[
         "have to adi feldir, modal deyil. Ona görə he / she / it ilə has to deyilir. Sual və inkarda do / does / did lazımdır, sonra sadə fel gəlir: Do you have to…? She doesn't have to… Bu qayda adi fellərlə eynidir.",
         "must-un keçmiş forması yoxdur: musted səhvdir. Keçmişdə «məcbur idim, etməli oldum» üçün had to işlənir. had to hamı üçün eynidir, sual və inkarda did gəlir: Did you have to…? I didn't have to… Gələcəkdə də will have to deyilir, çünki must-un gələcəyi də yoxdur."
       ],
       tbl:[["Təsdiq","I have to work · she has to work · I had to work"],["İnkar","I don't have to · she doesn't have to · I didn't have to"],["Sual","Do you have to? · Does she have to? · Did you have to?"]],
       ex:[["She has to wear a uniform.","O, forma geyinməlidir."],["Do you have to get up early?","Tez durmalısan?"],["My brother has to take the bus to work every day.","Qardaşım hər gün işə avtobusla getməlidir."],["I had to work late yesterday.","Dünən gec saata qədər işləməli oldum."],["Did you have to wait long?","Çox gözləməli oldun?"],["We didn't have to pay for the tickets.","Biletlər üçün pul ödəmək lazım olmadı."]],
       no:"I musted work yesterday. / He have to go now. / Do you must go? — səhvdir (I had to work; He has to go; Do you have to go?)"
     },
     { h:"6. should və might: məsləhət və ehtimal",
       t:[
         "should məsləhət və fikir bildirir: «…-malısan, yaxşı olar». must-dan yumşaqdır: məcburiyyət yox, tövsiyədir. İnkarı shouldn't-dur. Kiminsə fikrini soruşanda Should I…? işlənir.",
         "might və may «bəlkə, ola bilər» deməkdir: bir şeyin ola biləcəyini deyirsən, amma əmin deyilsən. Bu mənada ikisi demək olar ki eynidir. İnkarı might not (may not) — «bəlkə … -mayacaq».",
         "maybe ilə qarışdırma. might modal feldir, arxasından sadə fel gəlir (It might rain). maybe isə ayrıca zərfdir və çox vaxt cümlənin əvvəlində gəlir (Maybe it will rain). İkisinin mənası yaxındır, qrammatikası fərqlidir."
       ],
       tbl:[["should","məsləhət: You should see a doctor."],["shouldn't","məsləhət deyil: You shouldn't eat so much sugar."],["might / may","bəlkə: It might rain."],["might not","bəlkə … -mayacaq: I might not come."]],
       ex:[["You look ill. You should see a doctor.","Xəstə görünürsən. Həkimə getməlisən."],["You shouldn't eat so much sugar.","Bu qədər şəkər yeməməlisən."],["Should I call her?","Ona zəng edim?"],["Take an umbrella. It might rain.","Çətir götür. Bəlkə yağış yağar."],["I might not come to the party.","Bəlkə məclisə gəlmədim."],["We might go to Gabala this weekend, but we aren't sure.","Bəlkə bu həftəsonu Qəbələyə gedəcəyik, amma əmin deyilik."]],
       no:"You should to see a doctor. / She mights come. — səhvdir (should see; she might come)"
     },
     { h:"7. Əmr, qadağa və Let's",
       t:[
         "Əmr vermək üçün sadə fel cümlənin əvvəlində gəlir, you yazılmır. Bu forma hamı üçün eynidir: bir nəfərə də, çox adama da. Azərbaycanca «otur» və «oturun» fərqlidir, ingiliscə isə eynidir: Sit down.",
         "Qadağa üçün Don't + sadə fel işlənir. Arada to olmur, tək not işlənmir. be ilə də Don't işlənir: Don't be late. Əmr ingiliscə kobud səslənə bilər, xüsusən tanımadığın adama. Ona görə please əlavə et. please cümlənin əvvəlində və ya sonunda dura bilər, sonda vergüldən sonra gəlir.",
         "Birlikdə nəsə etməyi təklif edəndə Let's + sadə fel işlənir: «gəl …-aq». Let's = let us, amma həmişə qısa deyilir. İnkarı Let's not + fel: «…-mayaq». Let's to go və Let's don't go səhvdir."
       ],
       tbl:[["Əmr","Open the window. · Be careful!"],["Qadağa","Don't touch it! · Don't be late."],["Nəzakət","Please wait here. · Close the door, please."],["Təklif","Let's go. · Let's not wait."]],
       ex:[["Open the window, please.","Pəncərəni aç, zəhmət olmasa."],["Be careful! The floor is wet.","Ehtiyatlı ol! Döşəmə yaşdır."],["Don't touch it! It's hot.","Ona toxunma! İstidir."],["Don't be late.","Gecikmə."],["Let's go to the cinema.","Gəl kinoya gedək."],["Let's not wait. Let's start.","Gözləməyək. Başlayaq."]],
       no:"Not open the door. / Don't to touch it. / Let's to go. / Let's don't wait. — səhvdir (Don't open the door; Don't touch it; Let's go; Let's not wait)"
     },
     { h:"8. Would you like…? I'd like… və Do you like…?",
       t:[
         "Kiməsə nəsə təklif edəndə Would you like…? işlənir: «istəyirsən? istərdin?». Əşya təklif edəndə arxasından isim gəlir. İş təklif edəndə to + fel gəlir. Bu to atılmır: Would you like go? səhvdir.",
         "Do you like…? ilə qarışdırma. Do you like…? ümumiyyətlə xoşlayıb-xoşlamadığını soruşur («sevirsən?»). Would you like…? isə indi nəsə təklif edir. Kafedə qonağa həmişə Would you like…? deyilir.",
         "Mağazada, kafedə I want birbaşa və bir az kobud səslənir. Onun yerinə nəzakətli I'd like (= I would like) deyilir: «istərdim». Arxasından isim gəlirsə, to lazım deyil. Arxasından fel gəlirsə, to + fel lazımdır.",
         "Təklifi qəbul edəndə Yes, please, imtina edəndə No, thank you deyilir. Dəvəti sevinclə qəbul edəndə I'd love to! deyilir. Yes, I like cavabı səhvdir, çünki like burada «xoşlayıram» olur, qəbul etmək yox. Sadəcə Yes, please kifayətdir."
       ],
       tbl:[["Do you like tea?","ümumiyyətlə sevirsən?"],["Would you like some tea?","indi istəyirsən? (təklif)"],["I want a coffee.","kobud səslənə bilər"],["I'd like a coffee, please.","nəzakətli"]],
       ex:[["Would you like some tea?","Çay istəyirsən?"],["Would you like to come with us? — I'd love to!","Bizimlə gəlmək istəyirsən? — Məmnuniyyətlə!"],["Do you like coffee? — Yes, I drink it every day.","Qəhvəni xoşlayırsan? — Bəli, hər gün içirəm."],["I'd like a glass of water, please.","Bir stəkan su istərdim."],["I'd like to book a table for two.","İki nəfərlik masa sifariş etmək istərdim."],["Would you like some cake? — Yes, please.","Tort istəyirsən? — Bəli, zəhmət olmasa."]],
       no:"Would you like go out? / I'd like buy two tickets. — səhvdir (Would you like to go out? I'd like to buy two tickets.)"
     },
     { h:"9. Shall I…? Shall we…? və I'd rather",
       t:[
         "Shall I…? kömək təklif edəndə işlənir: «…edim?». Shall we…? birlikdə nəsə etməyi təklif edəndə işlənir: «…edək?». Bu mənada shall yalnız I və we ilə gəlir. Sonra sadə fel gəlir, to yoxdur. Shall we…? mənaca Let's-ə yaxındır, sadəcə sual formasındadır.",
         "I'd rather (= I would rather) «üstün tuturam» deməkdir: bir şeyi digərindən çox istəyirsən. Ondan sonra sadə fel gəlir, to yoxdur. Bu, I'd like-dan fərqlidir: would like → to + fel, would rather → sadə fel. İki şeyi müqayisə edəndə than gəlir, ondan sonra da sadə fel işlənir.",
         "Təklifə tək «No» demək kobud səslənə bilər. İstəmədiyini yumşaq demək üçün I'd rather not («istəməzdim») deyilir. Bu ifadə tək cavab kimi də işlənir, arxasından fel də gələ bilər, orada da to yoxdur."
       ],
       tbl:[["I'd like","+ to + fel: I'd like to stay."],["I'd rather","+ sadə fel: I'd rather stay."],["I'd rather not","+ sadə fel: I'd rather not go."]],
       ex:[["Shall I open the window?","Pəncərəni açım?"],["Shall we take a taxi?","Taksi tutaq?"],["What shall we do tonight?","Bu axşam nə edək?"],["I'd rather stay at home.","Evdə qalmağı üstün tuturam."],["I'd rather walk than take the bus.","Avtobusa minməkdənsə, piyada getməyi üstün tuturam."],["Do you want to go out? — I'd rather not.","Çölə çıxmaq istəyirsən? — İstəməzdim."]],
       no:"I'd rather to stay at home. / Shall I to open the window? — səhvdir (I'd rather stay; Shall I open)"
     }
   ],
   sum:[
     "Modaldan sonra sadə fel gəlir: can swim, should go. to yoxdur, -s yoxdur, do/does/did yoxdur: Can she swim?",
     "can / could = bacarıq. Keçmişdə can yox, could / couldn't. Can I…? Could you…? = icazə və xahiş (could daha nəzakətlidir).",
     "must = mütləq etməli; mustn't = olmaz, qadağandır; don't have to = lazım deyil. Bu üçünü qarışdırma.",
     "have to adi feldir: has to, Do you have to…? Keçmişdə had to (musted yoxdur), gələcəkdə will have to.",
     "should = məsləhət; might / may = bəlkə. maybe ayrı sözdür.",
     "Əmr: fel cümlənin əvvəlində. Qadağa: Don't + fel. Təklif: Let's + fel, Let's not + fel.",
     "Would you like (to…)? = təklif; I'd like (to…) = nəzakətli istək. Do you like…? ümumi xoşlamaqdır, təklif deyil.",
     "Shall I / Shall we + sadə fel = təklif. I'd rather + sadə fel (to yox), I'd rather not = istəməzdim."
   ]
 },
 { id:"L08", title:"İsimlər, artikllar, miqdar sözləri", level:"A2", mins:35, from:["g06","g20","g25"],
   intro:"Bu dərs isimlərin ətrafındakı hər şeyi bir yerdə verir: sayılan və sayılmayan isimlər, cəm forması, a / an / the, miqdar sözləri (some, much, many, a few…), əvəzliklər və mənsubiyyət (me, my, mine, 's), eləcə də somebody, every, both kimi sözlər. Azərbaycan dilində artikl yoxdur və cəm şəkilçisi saydan sonra işlənmir. Ona görə burada ən çox səhv edilir.",
   sections:[
     { h:"1. Sayılan və sayılmayan isimlər",
       t:[
         "Bəzi şeyləri saymaq olur: bir kitab, iki kitab. Bunlar sayılan isimlərdir. Bəzilərini saymaq olmur: su, pul, məlumat. Bunlar sayılmayan isimlərdir. İngiliscə bu fərq çox vacibdir, çünki a / an, cəm forması və much / many buna görə seçilir.",
         "Sayılan isim təkdə a / an alır, cəmdə -s alır. Sayılmayan isim a / an almır və cəm olmur. Onunla feli tək formada işlədirik: the money is, the weather is.",
         "Diqqət: Azərbaycanca saymaq olan bəzi şeylər ingiliscə sayılmayandır. Cədvəldəki sayılmayan sözləri əzbərlə, bu siyahıdır. «Bir dənə» demək lazımdırsa, ölçü sözü işlənir: a piece of, a bottle of, a cup of."
       ],
       tbl:[["Sayılan","a book, two books · an apple, apples · a child, children"],["Sayılmayan","water, money, bread, time, music, advice, information, news, furniture, homework, luggage, weather, work"]],
       ex:[["I have two brothers.","İki qardaşım var."],["I need some money.","Mənə bir az pul lazımdır."],["Can you give me some advice?","Mənə məsləhət verə bilərsən?"],["I have some news for you.","Sənə bir xəbərim var."],["a piece of cake, a bottle of water, a cup of tea","bir tikə tort, bir şüşə su, bir fincan çay"]],
       no:"an advice / informations / a furniture / a news — səhvdir (some advice, some information, some furniture, some news)"
     },
     { h:"2. Cəm forması",
       t:[
         "Sayılan isimlər cəmdə -s alır. Söz s, ss, sh, ch, x ilə bitirsə, -es artırılır, çünki belə oxumaq asandır. Samit + y ilə bitirsə, y → ies olur. Sait + y ilə bitəndə (day, boy) sadəcə -s artırılır. Bir neçə istisna da var (knife → knives, potato → potatoes), onları rast gəldikcə lüğətdə yoxla.",
         "Azərbaycanca «iki kitab» deyirik: saydan sonra cəm şəkilçisi yoxdur. İngiliscə isə saydan sonra -s mütləqdir: two books.",
         "Bəzi isimlər cəmdə -s almır, tamamilə dəyişir. Bunların qaydası yoxdur, əzbərlə. people özü cəmdir («insanlar») və feli cəm olur: people are. person sözünün cəmi kimi people işlənir."
       ],
       tbl:[["car → cars · day → days","adi: -s"],["bus → buses · box → boxes · watch → watches","s, ss, sh, ch, x ilə bitəndə: -es"],["city → cities · country → countries","samit + y: -ies"],["man → men · woman → women · child → children","qaydasız, əzbərlə"],["person → people · foot → feet · tooth → teeth","qaydasız, əzbərlə"]],
       ex:[["There are three buses to the city.","Şəhərə üç avtobus var."],["I visited two cities.","İki şəhərə getdim."],["Two women were at the door.","Qapıda iki qadın var idi."],["My children go to school.","Uşaqlarım məktəbə gedir."],["The people are very friendly here.","Buradakı insanlar çox mehribandır."]],
       no:"two childs / two womans / The people is friendly — səhvdir (two children, two women, The people are friendly)"
     },
     { h:"3. a / an: «bir», ilk dəfə",
       t:[
         "a / an yalnız TƏK SAYILAN isimdən əvvəl işlənir. Mənası «bir, hər hansı biri»dir və ya ilk dəfə xatırlanan şeyi göstərir. Azərbaycanca bu söz çox vaxt deyilmir, ingiliscə isə mütləqdir. Peşədən əvvəl də işlənir: She is a nurse.",
         "Seçim səsə görədir. Söz sait SƏSİ ilə başlayırsa an, samit səsi ilə başlayırsa a işlənir. Burada hərfə yox, oxunuşa baxılır. hour sözündə h oxunmur, ona görə an hour deyilir. university sözü isə «yu» səsi ilə başlayır (bu, samit səsidir), ona görə a university deyilir.",
         "Sayılmayan və cəm isimlərlə a / an işlənmir. «Bir dənə» lazımdırsa, a piece of advice kimi ölçü sözü gəlir."
       ],
       tbl:[["an","an apple, an hour, an honest man, an umbrella, an engineer"],["a","a book, a university, a European city, a nurse"]],
       ex:[["I have a car.","Maşınım var."],["She is a nurse.","O, tibb bacısıdır."],["He's an engineer.","O, mühəndisdir."],["I waited for an hour.","Bir saat gözlədim."],["She studies at a university.","O, universitetdə oxuyur."],["Wait a minute, please.","Bir dəqiqə gözlə, zəhmət olmasa."]],
       no:"She is nurse. / He is engineer. — səhvdir (She is a nurse. He is an engineer.)"
     },
     { h:"4. the: ikimiz də bilirik",
       t:[
         "Danışan da, dinləyən də HANSI şeydən söhbət getdiyini bilirsə, the işlənir. Bir şey ilk dəfə xatırlananda a / an deyilir, ikinci dəfə artıq bəlli olduğu üçün the deyilir. Azərbaycanca bu fərqi çox vaxt şəkilçi göstərir: «lampa aldım» — «lampanı bağla».",
         "Dünyada bir dənə olan şeylər həmişə the ilə gəlir: the sun, the moon, the sky, the sea, the internet. Çünki hansı günəşdən danışdığımız hamıya bəllidir. Ölkənin paytaxtı da belədir: the capital.",
         "«Ən» bildirən sözlərlə də the işlənir: the best, the biggest. first, last və same sözlərindən əvvəl də the gəlir."
       ],
       tbl:[["a / an","ilk dəfə, hər hansı biri: I bought a lamp."],["the","artıq bəlli: The lamp was cheap."],["the","dünyada tək olan: the sun, the internet"]],
       ex:[["I bought a lamp. The lamp was cheap.","Bir lampa aldım. Lampa ucuz idi."],["Can you close the door?","Qapını bağlaya bilərsən?"],["The sun is very hot today.","Bu gün günəş çox istidir."],["I read it on the internet.","Onu internetdə oxudum."],["Baku is the capital of Azerbaijan.","Bakı Azərbaycanın paytaxtıdır."],["He is the best student in the class.","O, sinifdə ən yaxşı tələbədir."]],
       no:"Sun is hot today. / Please close door. — səhvdir (The sun is hot today. Please close the door.)"
     },
     { h:"5. Artikl yoxdur: ümumi danışanda və hazır birləşmələrdə",
       t:[
         "Bir şey haqqında ÜMUMİYYƏTLƏ danışanda — bütün itlər, musiqi, həyat — artikl işlənmir. Sayılan isim cəm olur (dogs), sayılmayan isim olduğu kimi qalır (music, life). Azərbaycanca da «İtlər mehribandır» deyirik, artikl yoxdur. Konkret şeydən danışanda isə the gəlir: the music in this café.",
         "Bəzi hazır birləşmələrdə artikl işlənmir: go to work, go to school, go to bed, at work, at home, go home. Bunları bütöv əzbərlə. home sözündən əvvəl to da işlənmir: go home.",
         "Digər adi yer sözləri the ilə gəlir: the cinema, the bank, the station, the doctor. Şəhər və ölkə adları isə artiklsızdır: go to Baku."
       ],
       tbl:[["Artikl yoxdur","go to work · go to school · go to bed · at home · go home"],["the işlənir","go to the cinema · go to the bank · go to the station · go to the doctor"]],
       ex:[["I like music.","Musiqini sevirəm."],["Dogs are friendly.","İtlər mehribandır."],["Life is beautiful.","Həyat gözəldir."],["I go to work by bus.","İşə avtobusla gedirəm."],["I usually go to bed at eleven.","Adətən saat on birdə yatıram."],["Let's go to the cinema.","Gəl kinoya gedək."]],
       no:"The life is beautiful. / I go to the work by bus. / I go to the bed at 11. — səhvdir (Life is beautiful; go to work; go to bed)"
     },
     { h:"6. much, many, a lot of, a few, a little",
       t:[
         "Bu sözlər «nə qədər?» sualına cavab verir. Seçim ismin sayılan, ya sayılmayan olmasından asılıdır. many və a few sayılan cəm isimlə, much və a little sayılmayan isimlə işlənir. a lot of hər iki növ isimlə işlənir.",
         "much və many çox vaxt sual və inkar cümlələrində gəlir. Təsdiq cümləsində a lot of daha təbiidir. Sualda How many…? sayı, How much…? miqdarı və qiyməti soruşur.",
         "a few «bir neçə», a little «bir az» deməkdir. İkisi də müsbət mənadır: az, amma kifayət qədər var. a olmadan few və little «çox az, demək olar ki yoxdur» deməkdir və mənfi məna verir."
       ],
       tbl:[["many","sayılan cəm: many books · How many people?"],["much","sayılmayan: much money · How much time?"],["a lot of","hər ikisi: a lot of books · a lot of money"],["a few","sayılan cəm: a few friends"],["a little","sayılmayan: a little sugar"]],
       ex:[["We don't have much time.","Çox vaxtımız yoxdur."],["How many people came?","Neçə nəfər gəldi?"],["She has a lot of friends.","Onun çoxlu dostu var."],["I have a few friends in London.","Londonda bir neçə dostum var."],["There's a little sugar in my tea.","Çayımda bir az şəkər var."],["Few people came.","Çox az adam gəldi."]],
       no:"How much people came? / I don't have many money. — səhvdir (people sayılandır: How many people; money sayılmayandır: much money)"
     },
     { h:"7. some, any, no, none və somebody, anything, nowhere",
       t:[
         "some və any «bir az, bir neçə» deməkdir və miqdarı dəqiq demədən işlənir. İkisi də həm cəm, həm sayılmayan isimlə gəlir. some təsdiq cümləsində, any sual və inkar cümləsində işlənir. Təklif və xahiş sualında some işlənir, çünki «hə» cavabı gözlənilir: Would you like some tea?",
         "no + isim «heç bir» deməkdir (no chairs, no time) və özü inkardır, ona görə fel təsdiqdə qalır. İsim yoxdursa, no tək işlənmir, onun yerinə none gəlir: «heç biri». none çox vaxt qısa cavabda işlənir.",
         "some, any, no və every sözlərinə -body (və ya -one) adam, -thing şey, -where yer bildirən hissə artırılır. Seçim qaydası eynidir: somebody təsdiqdə, anybody sual və inkarda, nobody isə özü inkardır. Azərbaycanca «Heç kim gəlmədi» deyirik: iki inkar var. İngiliscə isə ikiqat inkar olmur: ya not + any- (didn't see anybody), ya no- (saw nobody). İkisi birlikdə yox.",
         "-body, -one, -thing ilə bitən bütün bu sözlər tək sayılır və felin tək forması gəlir: Everybody is here. Nobody knows. Everything was perfect."
       ],
       tbl:[["some- (təsdiq)","somebody · something · somewhere"],["any- (sual, inkar)","anybody · anything · anywhere"],["no- (özü inkardır)","nobody · nothing · nowhere"],["every- (hamı, hər şey)","everybody · everything · everywhere"]],
       ex:[["There are some apples on the table.","Masanın üstündə bir neçə alma var."],["Are there any shops near here?","Yaxınlıqda mağaza var?"],["There's somebody at the door.","Qapıda kimsə var."],["I didn't see anybody.","Heç kimi görmədim."],["Nobody called me today.","Bu gün heç kim zəng etmədi."],["How many eggs are there? — None.","Neçə yumurta var? — Heç biri."]],
       no:"Nobody didn't come. / I didn't do nothing. / Everybody are here. — səhvdir (Nobody came; I didn't do anything; Everybody is here)"
     },
     { h:"8. every, all, both, either, neither",
       t:[
         "every «hər» deməkdir və ondan sonra həmişə TƏK isim, tək fel gəlir: every student has. Mənaca hamını əhatə edir, amma qrammatik olaraq tək sayılır, everybody kimi. every day, every week vərdiş göstərir.",
         "all «bütün, hamısı» deməkdir. Ondan sonra cəm isim (all students), all the + isim (all the students) və ya all my + isim gəlir. all + vaxt sözü bir dövrün hamısını göstərir: all day = bütün gün. every day isə «hər gün» deməkdir. Mənaları fərqlidir.",
         "Üç söz iki şey haqqında işlənir. both «ikisi də» deməkdir və feli cəm olur: Both of us are tired. either «hansı olsa, fərq etməz» deməkdir, inkarda (not … either) «heç biri». neither «heç biri» deməkdir, özü inkardır: not əlavə olunmur. neither of + cəm isimlə fel adətən tək formada gəlir. İkidən çox üçün none və ya all işlənir."
       ],
       tbl:[["every + tək isim","every student has"],["all + cəm isim","all the students passed"],["both (2 şeyin ikisi də)","both of us are tired"],["either (2 şeydən biri)","either bus · not … either"],["neither (2 şeydən heç biri)","neither of them knows"]],
       ex:[["Every student has a book.","Hər tələbənin kitabı var."],["All the students passed the exam.","Bütün tələbələr imtahandan keçdi."],["I spent all day at home.","Bütün günü evdə keçirdim."],["Both of my brothers live abroad.","Qardaşlarımın ikisi də xaricdə yaşayır."],["Tea or coffee? — Either. I don't mind.","Çay, yoxsa qəhvə? — Fərq etməz."],["Neither of my parents speaks English.","Valideynlərimin heç biri ingiliscə danışmır."]],
       no:"Every students have a book. / Both of us is tired. / Neither of us didn't go. — səhvdir (Every student has a book; Both of us are tired; Neither of us went)"
     },
     { h:"9. Əvəzliklər: I / me, my / mine, whose",
       t:[
         "İngiliscə eyni adam üçün bir neçə söz var, çünki cümlədəki yerinə görə dəyişir. Azərbaycanca da belədir: mən, məni, mənim, mənimki. I, you, he, she, it, we, they işi görən adamdır (kim?) və feldən qabaq durur. Azərbaycanca «o» bir sözdür, ingiliscə isə üçdür: kişi — he, qadın — she, əşya və heyvan — it.",
         "Özünü başqası ilə birlikdə deyəndə özünü sona qoyub I yaz: my brother and I. Feldən və ön sözdən (to, with, for, at) sonra başqa forma gəlir: me, him, her, us, them. you və it hər iki yerdə eyni qalır. Ən çox edilən səhv ön sözdən sonra I yazmaqdır.",
         "my, your, his, her, its, our, their «mənim…» deməkdir. Azərbaycanca bunu şəkilçi ilə deyirik (maşınım), ingiliscə isə ayrıca söz isimdən ƏVVƏL gəlir. Bu sözlərdən sonra mütləq isim olmalıdır. «Onun» üç cürdür: his (kişi), her (qadın), its (əşya, heyvan), seçim sahibin kim olduğundan asılıdır.",
         "mine, yours, his, hers, ours, theirs «mənimki, səninki» deməkdir. Onlardan sonra isim gəlmir, çünki isim artıq bəllidir (his hər iki yerdə eynidir). Bir şeyin kimin olduğunu Whose…? soruşur: «kimin?». Who's (= who is) ilə qarışdırma."
       ],
       tbl:[["I","me","my · mine"],["you","you","your · yours"],["he","him","his · his"],["she","her","her · hers"],["it","it","its · —"],["we","us","our · ours"],["they","them","their · theirs"]],
       ex:[["She works in Baku. I know her.","O Bakıda işləyir. Mən onu tanıyıram."],["Give it to me.","Onu mənə ver."],["Come with us.","Bizimlə gəl."],["Rashad loves his wife. Aysel loves her husband.","Rəşad həyat yoldaşını sevir. Aysel ərini sevir."],["This bag is mine.","Bu çanta mənimkidir."],["Whose phone is this? — It's Leyla's.","Bu kimin telefonudur? — Leylanındır."]],
       no:"Give it to I. / She loves his husband. / Is this your? — səhvdir (to me; her husband; Is this yours?)"
     },
     { h:"10. 's, its / it's, myself, this / that, one / ones",
       t:[
         "İnsan və heyvan haqqında «Əlinin, qardaşımın» demək üçün ada 's artırılır (Azərbaycancadakı «-ın, -in» kimi): sahib birinci, əşya sonra gəlir. -s ilə bitən cəmdə yalnız apostrof qoyulur (parents'), -s ilə bitməyən cəmdə yenə 's yazılır (children's). «the car of Ali» formasını işlətmirik.",
         "its və it's eyni səslənir, amma mənaları tam fərqlidir. its «onun» deməkdir, əşyaya və ya heyvana aid olanı göstərir və apostrofu yoxdur. it's isə it is (və ya it has) sözlərinin qısa formasıdır. Yoxlamaq üçün yerinə it is qoy: məna düzgündürsə it's yaz.",
         "İşi görən adam işi özünə edirsə, myself, yourself və s. işlənir: «özümü, özünü». Həm də «məhz özüm» mənasını vurğulayır; by myself — tək, kimsənin köməyi olmadan. Cəmdə -selves olur. you çoxdursa yourselves deyilir.",
         "Yaxında olan şey üçün this (tək), these (çox), uzaqda olan üçün that (tək), those (çox) işlənir. Eyni ismi təkrar etməmək üçün one (tək) və ones (cəm) işlənir; adətən sifətdən və ya the, this, which sözlərindən sonra gəlir."
       ],
       tbl:[["I","myself"],["you","yourself · yourselves"],["he / she / it","himself · herself · itself"],["we","ourselves"],["they","themselves"],["this · these","yaxın: this book · these books"],["that · those","uzaq: that car · those cars"]],
       ex:[["This is Ali's car.","Bu Əlinin maşınıdır."],["My parents' house is in Shaki.","Valideynlərimin evi Şəkidədir."],["The dog is eating its food. It's very hungry.","İt yeməyini yeyir. Çox acdır."],["He cut himself.","O, özünü kəsdi."],["Look at those birds!","O quşlara bax!"],["I don't like this shirt. I like the blue one.","Bu köynəyi bəyənmirəm. Mavini bəyənirəm."]],
       no:"the car of Ali / The dog is eating it's food. / These book is old. — səhvdir (Ali's car; its food; This book is old)"
     }
   ],
   sum:[
     "Sayılan isim: a / an və -s. Sayılmayan isim (advice, information, news, money, furniture, homework…): a / an yoxdur, cəm yoxdur.",
     "Cəm: -s; s, ss, sh, ch, x → -es; samit + y → -ies. Qaydasız: men, women, children, people, feet, teeth.",
     "a / an səsə görə seçilir: an hour, a university. Peşədən əvvəl a / an lazımdır: She is a nurse.",
     "the: ikimiz də bilirik, dünyada tək (the sun), «ən». Ümumi danışanda artikl yoxdur: Life is beautiful. go to work, go to school, go to bed, go home.",
     "many + sayılan, much + sayılmayan, a lot of ikisi ilə. a few / a little = bir neçə / bir az; few / little = çox az.",
     "some təsdiqdə, any sual və inkarda. nobody, nothing, no özü inkardır: ikiqat inkar yoxdur. everybody, everything tək sayılır.",
     "every + tək isim; all + cəm isim; both, either, neither iki şey haqqındadır.",
     "I / me, my / mine, his / her / its, Whose…? 's ilə sahiblik: Ali's car. its ≠ it's. myself, this / these, that / those, one / ones."
   ]
 },
 { id:"L09", title:"Sifət, zərf və müqayisə", level:"A2", mins:25, from:["g07","g24"],
   intro:"Sifət isimi, zərf isə feli təsvir edir. Bu dərsdə onların fərqini, zərfin necə düzəldiyini, -ed və -ing sifətləri, too və enough-u, sonra isə müqayisəni öyrənirsən: «daha», «ən», «qədər». Azərbaycanca «daha» və «ən» ayrıca sözdür, ingiliscə isə çox vaxt sifətin özü dəyişir.",
   sections:[
     { h:"1. Sifət və zərf: fərq nədir?",
       t:[
         "Sifət isim haqqında məlumat verir və «necə şey? necə adam?» sualına cavab verir. Sifət isimdən əvvəl durur, Azərbaycancadakı kimi. İsim cəm olanda sifət dəyişmir, -s almır.",
         "Zərf fel haqqında məlumat verir və «necə edir?» sualına cavab verir. Çox vaxt sifətə -ly artırmaqla düzəlir: careful → carefully. Azərbaycanca da bu fərq var: «ehtiyatlı sürücü» (sifət) və «ehtiyatla sürür» (zərf).",
         "Qayda belədir: isim haqqında danışırsansa sifət, iş (fel) haqqında danışırsansa zərf işlənir. Azərbaycanca zərf felin qabağında durur, ingiliscə isə felin (və obyektin) arxasında gəlir."
       ],
       tbl:[["Sifət (necə şey?)","a careful driver · a quick answer"],["Zərf (necə edir?)","He drives carefully. · She answered quickly."]],
       ex:[["a careful driver","ehtiyatlı sürücü"],["He drives carefully.","O, ehtiyatla sürür."],["two beautiful houses","iki gözəl ev"],["She has a beautiful voice.","Onun gözəl səsi var."],["She spoke quietly.","O, sakitcə danışdı."]],
       no:"He drives careful. / She is a carefully driver. — səhvdir (drives carefully; a careful driver)"
     },
     { h:"2. Zərf necə düzəlir: -ly və istisnalar",
       t:[
         "Zərf düzəltmək üçün sifətə -ly artırılır: quick → quickly. Yazılış: -y ilə bitəndə y → ily olur (easy → easily, happy → happily). -le ilə bitəndə e düşür və -y gəlir (terrible → terribly). Qalan sifətlərə sadəcə -ly artırılır (slow → slowly, quiet → quietly, bad → badly).",
         "İstisnalar var, onları əzbərlə. good-un zərfi goodly deyil, well-dir. fast, hard, late, early isə dəyişmir: sifət də, zərf də eyni sözdür (a fast driver, drives fast). Diqqət: hardly «demək olar ki, heç» deməkdir, hard-ın zərfi deyil.",
         "Zərf adətən feldən sonra gəlir. Fel obyektlidirsə (nəyi?), zərf obyektdən də sonra gəlir. Fel ilə obyektin arasına zərf girmir."
       ],
       tbl:[["quick · slow · quiet","quickly · slowly · quietly"],["easy · happy","easily · happily"],["terrible · possible","terribly · possibly"],["good","well"],["fast · hard · late · early","fast · hard · late · early (dəyişmir)"]],
       ex:[["You can do it easily.","Bunu asanlıqla edə bilərsən."],["She speaks English well.","O, ingiliscə yaxşı danışır."],["He works very hard.","O, çox çalışır."],["He always drives fast.","O, həmişə sürətlə sürür."],["She closed the door quietly.","O, qapını sakitcə bağladı."],["I did the test badly.","Testi pis yazdım."]],
       no:"He speaks good. / He drives fastly. / He speaks very well English. — səhvdir (speaks well; drives fast; speaks English very well)"
     },
     { h:"3. be, look, feel, taste + sifət; very, really, quite",
       t:[
         "am / is / are / was / were-dən sonra sifət işlənir, zərf yox. Bu fellərdən sonra da sifət gəlir: look (görünmək), feel (hiss etmək), seem (görünmək), sound (səslənmək), taste (dadı olmaq), smell (iyi gəlmək).",
         "Səbəb budur: bu fellər işin NECƏ edildiyini yox, adamın və ya şeyin necə OLDUĞUNU göstərir. Ona görə «yorğun görünürsən» cümləsində tired (sifət) işlənir, tiredly yox. Əgər look «baxmaq» mənasında hərəkət göstərirsə, zərf gəlir: She looked at me angrily.",
         "very (çox), really (həqiqətən), quite (xeyli) sözləri sifətin və ya zərfin gücünü dəyişir. Onlar həmişə sifətdən və ya zərfdən ƏVVƏL gəlir. very fel ilə işlənmir: «çox sevirəm» = I like it very much və ya I really like it."
       ],
       tbl:[["Fel iş görür","He drives carefully. (zərf)"],["be · look · feel · seem · sound · taste · smell","You look tired. (sifət)"],["very · really · quite","sifətdən / zərfdən əvvəl: very nice, really beautifully"]],
       ex:[["The soup is hot.","Şorba istidir."],["You look tired.","Yorğun görünürsən."],["This soup tastes good.","Bu şorbanın dadı yaxşıdır."],["It's a very nice day.","Çox gözəl gündür."],["She sings really beautifully.","O, həqiqətən gözəl oxuyur."],["I really like this song.","Bu mahnını çox bəyənirəm."]],
       no:"You look tiredly. / I very like it. — səhvdir (You look tired; I like it very much)"
     },
     { h:"4. -ed və -ing sifətlər",
       t:[
         "-ed ilə bitən sifət insanın HİSS ETDİYİNİ göstərir: bored, interested, tired, surprised. -ing ilə bitən sifət isə bu hissi YARADAN şeyi göstərir: boring, interesting, tiring, surprising. Film darıxdırıcıdır (boring), mən isə darıxıram (bored).",
         "İnsan haqqında -ing desən, məna dəyişir: I am boring «mən darıxdırıcı adamam» deməkdir. Ona görə «darıxıram» = I'm bored. Azərbaycanca hər iki mənanı oxşar sözlərlə deyirik, ona görə bu cütü çox qarışdırırlar."
       ],
       tbl:[["bored — boring","I'm bored. The film is boring."],["interested — interesting","I'm interested in history. History is interesting."],["tired — tiring","I'm tired. The day was tiring."],["surprised — surprising","I was surprised. The news was surprising."]],
       ex:[["The film was boring. I was bored.","Film darıxdırıcı idi. Mən darıxdım."],["I'm interested in history. History is interesting.","Tarixlə maraqlanıram. Tarix maraqlıdır."],["The trip was tiring. We were very tired.","Səfər yorucu idi. Biz çox yorulduq."],["The news was very surprising. I was surprised.","Xəbər çox təəccüblü idi. Mən təəccübləndim."],["It was a long, tiring day.","Uzun, yorucu gün idi."]],
       no:"I am boring in this lesson. (darıxıram mənasında) — səhvdir (I am bored in this lesson.)"
     },
     { h:"5. too və enough",
       t:[
         "too + sifət «lazım olandan çox» deməkdir və həmişə mənfi məna verir: buna görə problem var, nəsə etmək olmur. very isə sadəcə «çox» deməkdir, problem göstərmir. too-dan sonra sifət birbaşa gəlir, much yox. too much yalnız isimlə (too much sugar) və ya feldən sonra işlənir.",
         "enough «kifayət qədər» deməkdir. Onun yeri sözün növündən asılıdır: sifətdən SONRA gəlir, isimdən isə ƏVVƏL. Azərbaycanca «kifayət qədər» həmişə əvvəldə durur, ona görə sifətlə səhv edilir. İnkarda «kifayət qədər deyil» mənası verir.",
         "too və enough-dan sonra to + fel gələ bilər. too + sifət + to + fel = «… etmək üçün çox …», yəni edə bilmirsən. sifət + enough + to + fel = «… etmək üçün kifayət qədər …», yəni edə bilirsən."
       ],
       tbl:[["too + sifət","too heavy · too expensive · too hot"],["sifət + enough","old enough · big enough · warm enough"],["enough + isim","enough money · enough time"]],
       ex:[["This bag is too heavy.","Bu çanta çox ağırdır (qaldıra bilmirəm)."],["It's too expensive.","Bu çox bahadır (ala bilmərəm)."],["He isn't old enough to drive.","O, maşın sürmək üçün kifayət qədər böyük deyil."],["We don't have enough money for a taxi.","Taksi üçün kifayət qədər pulumuz yoxdur."],["The tea is too hot to drink.","Çay içmək üçün çox istidir."],["Is it warm enough for you?","Sənin üçün kifayət qədər istidir?"]],
       no:"It's too much expensive. / He isn't enough old. / We don't have money enough. — səhvdir (too expensive; old enough; enough money)"
     },
     { h:"6. Müqayisə: -er than və more … than",
       t:[
         "İki şeyi müqayisə edəndə iki yol var, seçim sifətin uzunluğundan asılıdır. Heca — sözdə sait səslərin sayıdır: cheap bir hecalıdır, ex-pen-sive üç hecalıdır. Bir hecalı sifətə -er artırılır: cheap → cheaper.",
         "-y ilə bitən iki hecalı sifətlərdə y → ier olur (easy → easier, happy → happier, busy → busier). Qalan iki və daha çox hecalı sifətlərin qabağına more qoyulur (more expensive, more interesting). Bir sifətdə ikisi birlikdə işlənmir: more taller yoxdur. Bəzi iki hecalı sifətlərdə hər ikisi düzdür (quiet — quieter / more quiet), more həmişə təhlükəsizdir.",
         "Üç sifət tamamilə dəyişir, əzbərlə: good → better, bad → worse, far → further. Müqayisədən sonra than gəlir: «-dan, -dən». Azərbaycanca sifət dəyişmir («daha» ayrıca sözdür), ingiliscə isə sifətin özü dəyişir. than-dan sonra əvəzlik me, him formasında ola bilər: older than me.",
         "Fərqin ölçüsünü göstərmək üçün müqayisədən əvvəl söz əlavə olunur. Fərq böyükdürsə much, a lot, far; kiçikdirsə a bit, a little. very müqayisə ilə işlənmir: very cheap, amma much cheaper."
       ],
       tbl:[["Bir hecalı","cheap → cheaper · old → older · young → younger"],["-y ilə bitən 2 hecalı","easy → easier · happy → happier · busy → busier"],["Qalan 2 və daha çox hecalı","more expensive · more interesting · more beautiful"],["Qaydasız","good → better · bad → worse · far → further"],["Yazılış: e ilə bitəndə yalnız -r","nice → nicer · large → larger"],["Yazılış: bir hecalı, samit + sait + samit ilə bitəndə son hərf ikiləşir","big → bigger · hot → hotter · thin → thinner"]],
       ex:[["My brother is older than me.","Qardaşım məndən böyükdür."],["This phone is more expensive than that one.","Bu telefon o birindən bahadır."],["My English is better than last year.","İngiliscəm keçən ildən yaxşıdır."],["The weather today is worse than yesterday.","Bu gün hava dünəndən pisdir."],["The metro is much faster than the bus.","Metro avtobusdan xeyli sürətlidir."],["She is a bit older than her sister.","O, bacısından bir az böyükdür."]],
       no:"more tall / gooder / It's bigger that I thought / very cheaper — səhvdir (taller; better; bigger than; much cheaper)"
     },
     { h:"7. «Ən»: the -est və the most",
       t:[
         "Bir şeyin qrupdakı hamıdan üstün olduğunu demək üçün «ən» forması işlənir. Qayda müqayisə ilə eynidir: bir hecalı sifət the + -est alır (the cheapest). -y ilə bitən iki hecalı sifət the + -iest alır (the happiest).",
         "Qalan iki və daha çox hecalı sifətlərin qabağına the most gəlir (the most expensive). the mütləqdir, çünki «ən» yalnız bir şey ola bilər. Yazılış qaydaları -er ilə eynidir (big → the biggest, nice → the nicest). Qaydasız olanlar: good → the best, bad → the worst, far → the furthest.",
         "«Ən»-dən sonra qrup və ya yer deyəndə in işlənir: in the world, in my family, in the class. Vaxt dövrü, say və «hamı» deyəndə of işlənir: of the year, of my life, of all. Azərbaycanca hər ikisi «-da» və ya «-ın» olur, ona görə diqqət et. the more «ən» demək deyil, o, iki şeyi müqayisə edir."
       ],
       tbl:[["Bir hecalı","the cheapest · the oldest · the tallest"],["-y ilə bitən 2 hecalı","the easiest · the happiest · the funniest"],["Qalan 2 və daha çox hecalı","the most expensive · the most beautiful"],["Qaydasız","the best · the worst · the furthest"],["in / of","in the world, in my family · of the year, of my life, of all"]],
       ex:[["Baku is the biggest city in Azerbaijan.","Bakı Azərbaycanın ən böyük şəhəridir."],["This is the most expensive restaurant in town.","Bu, şəhərin ən bahalı restoranıdır."],["It was the best day of my life.","Həyatımın ən yaxşı günü idi."],["That was the worst film of the year.","O, ilin ən pis filmi idi."],["He is the tallest in our family.","O, ailəmizdə ən hündürdür."],["She is the happiest person in our office.","O, ofisimizdə ən xoşbəxt adamdır."]],
       no:"This is the more expensive hotel in the city. / the most fast — səhvdir (ən: the most expensive; the fastest)"
     },
     { h:"8. Bərabərlik və az: as … as, the same as, less",
       t:[
         "İki şey eyni dərəcədədirsə, as + sifət + as işlənir: «… qədər». Burada sifət dəyişmir: -er və more yoxdur. than də işlənmir, iki dəfə as gəlir. Bir şey o birindən az dərəcədədirsə, not as + sifət + as deyilir: «… qədər deyil».",
         "the same as «… ilə eynidir» deməkdir: the mütləqdir, as-dan sonra müqayisə olunan şey gəlir, than işlənmir. Fərqli şeylər üçün different from işlənir.",
         "less «daha az» deməkdir (more-un əksi), the least «ən az» deməkdir (the most-un əksi). Bu sözlər çox vaxt uzun sifətlərlə işlənir: less comfortable. Qısa sifətlərlə isə not as … as daha təbii səslənir."
       ],
       tbl:[["as … as","My phone is as good as yours."],["not as … as","Ali is not as tall as his brother."],["the same as","My phone is the same as yours."],["less · the least","less comfortable · the least expensive"]],
       ex:[["He is as tall as his father.","O, atası qədər hündürdür."],["The flat isn't as big as I expected.","Mənzil gözlədiyim qədər böyük deyil."],["My English isn't as good as yours.","Mənim ingiliscəm səninki qədər yaxşı deyil."],["Her dress is the same as mine.","Onun donu mənimki ilə eynidir."],["The bus is less comfortable than the train.","Avtobus qatardan az rahatdır."],["This is the least expensive option.","Bu ən ucuz variantdır."]],
       no:"My car is as old than yours. / the same than — səhvdir (as old as yours; the same as)"
     },
     { h:"9. Zərflərin müqayisəsi",
       t:[
         "Zərfləri də müqayisə etmək olar. -ly ilə bitən zərflərdə more və most işlənir: more slowly, more carefully. -ly ilə bitməyən zərflər (fast, hard, early, late) sifət kimi -er / -est alır: faster, harder, earlier. well → better, badly → worse olur.",
         "Qalan qaydalar eynidir. Müqayisədən sonra than gəlir, bərabərlik üçün as … as işlənir, fərqin ölçüsü üçün much və a bit işlənir. «Ən» üçün the most carefully, the fastest kimi formalar var."
       ],
       tbl:[["-ly ilə bitən zərf","more slowly · more carefully · more quietly"],["-ly ilə bitməyən zərf","faster · harder · earlier · later"],["Qaydasız","well → better · badly → worse"]],
       ex:[["Please speak more slowly.","Zəhmət olmasa, daha yavaş danış."],["He runs faster than me.","O, məndən sürətli qaçır."],["She works harder than her brother.","O, qardaşından çox çalışır."],["You drive more carefully than me.","Sən məndən ehtiyatlı sürürsən."],["She speaks English better than I do.","O, ingiliscəni məndən yaxşı danışır."]],
       no:"Please speak more slow. — səhvdir (more slowly: -ly zərfində more + zərf)"
     }
   ],
   sum:[
     "Sifət isim haqqında (a careful driver), zərf fel haqqında (drives carefully). Zərf = sifət + -ly; good → well; fast, hard, late, early dəyişmir.",
     "be, look, feel, seem, sound, taste, smell + sifət: You look tired. very sifətdən əvvəl gəlir; fellə: I like it very much.",
     "-ed = hiss edən insan (I'm bored), -ing = hissi yaradan şey (The film is boring).",
     "too + sifət = lazım olandan çox (problem var); sifət + enough, enough + isim; too / enough + to + fel.",
     "Müqayisə: bir hecalı -er (cheaper), -y → -ier (easier), qalanı more (more expensive) + than. good → better, bad → worse. Ölçü: much, a lot, a bit (very yox).",
     "«Ən»: the -est, the most + sifət. Qrup, yer üçün in the world; vaxt dövrü üçün of the year.",
     "as … as = qədər (sifət dəyişmir), not as … as = qədər deyil, the same as, less / the least.",
     "Zərfin müqayisəsi: more slowly, faster, better."
   ]
 },
 { id:"L10", title:"Gerund və infinitive; go, get, do, make", level:"A2", mins:30, from:["g10","g26"],
   intro:"Bu dərsin iki hissəsi var. Birinci hissədə iki fel yan-yana gələndə ikincinin hansı formada olacağını öyrənirsən: sadə fel, -ing və ya to + fel. İkinci hissədə ən çox işlənən fellər var: go, get, do, make, have və onların hazır birləşmələri. Azərbaycanca hər ikisi «-maq/-mək» ilə və ya «etmək» ilə deyilir, ona görə ingiliscədə çox qarışır.",
   sections:[
     { h:"1. İki fel yan-yana: üç forma",
       t:[
         "Azərbaycanca «getmək istəyirəm», «oxumağı sevirəm» deyirik. İngiliscə ikinci fel üç formada ola bilər: sadə fel (go), to + fel (to go) və fel-ing (going). Hansının gələcəyini BİRİNCİ fel müəyyən edir.",
         "Ən asan qayda modal fellərə və do / does / did-ə aiddir. Can, could, must, should, might, will, would kimi modal fellərdən və do / does / did-dən sonra ikinci fel həmişə sadə formadadır: to yoxdur, -s yoxdur, -ing yoxdur. Bu qaydanın istisnası yoxdur.",
         "Qalan fellərin hər biri üçün ayrıca bilmək lazımdır: hansı -ing, hansı to alır. Bu, siyahı əzbərləməkdir. Növbəti bölmədə siyahılar var."
       ],
       tbl:[["Modal və do / does / did-dən sonra","sadə fel: I can go. She doesn't like it."],["enjoy, finish, mind kimi fellərdən sonra","-ing: I enjoy going there."],["want, need, decide kimi fellərdən sonra","to + fel: I want to go."]],
       ex:[["I can't come.","Gələ bilmirəm."],["You should see a doctor.","Həkimə getməlisən."],["Did you see it?","Onu gördün?"],["She doesn't like it.","O, bunu sevmir."],["He can swim.","O, üzə bilir."]]
     },
     { h:"2. Hansı fel -ing, hansı to alır",
       t:[
         "Bu fellərdən sonra ikinci fel HƏMİŞƏ -ing olur: enjoy, finish, mind, stop, avoid, keep, practise, suggest, give up. to + fel işlənmir. Bu fellərin ümumi qaydası yoxdur, siyahını əzbərləmək lazımdır. Azərbaycanca «-mağı» deyirik (bişirməyi xoşlayıram), ingiliscə isə -ing.",
         "Bu fellərdən sonra HƏMİŞƏ to + fel gəlir: want, need, decide, hope, plan, learn, agree, promise, forget, offer, refuse, would like. -ing işlənmir. Bunların çoxu gələcəyə yönəlmiş istək, plan və ya qərar bildirir. Bu da əzbərləmək üçün siyahıdır.",
         "like, love, hate, prefer, start, begin fellərindən sonra isə həm -ing, həm to + fel düzdür, məna demək olar ki dəyişmir. Amma would like, would love, would prefer-dən sonra yalnız to + fel gəlir. Səbəb: would like «indi istəyirəm», like isə «ümumiyyətlə xoşlayıram» deməkdir.",
         "Bu siyahılar bütün feli əhatə etmir. Yeni fel öyrənəndə lüğətdə yoxla: «-ing alır, yoxsa to?» Burada stop «dayandırmaq» mənasındadır: Stop talking = danışmağı dayandır."
       ],
       tbl:[["Yalnız -ing alır","enjoy, finish, mind, stop, avoid, keep, practise, suggest, give up"],["Yalnız to + fel alır","want, need, decide, hope, plan, learn, agree, promise, forget, offer, refuse, would like"],["İkisini də alır","like, love, hate, prefer, start, begin"],["would ilə yalnız to","would like to, would love to, would prefer to"]],
       ex:[["I enjoy cooking.","Yemək bişirməyi xoşlayıram."],["Would you mind opening the window?","Pəncərəni açmağınız mümkündür?"],["I want to buy a new car.","Yeni maşın almaq istəyirəm."],["We decided to rent a flat.","Mənzil kirayələməyə qərar verdik."],["I like reading. / I like to read.","Oxumağı xoşlayıram."],["I'd like to read this book.","Bu kitabı oxumaq istərdim."]],
       no:"I enjoy to cook. / I decided learning English. / Would you mind to open the window? — səhvdir (enjoy cooking; decided to learn; Would you mind opening)"
     },
     { h:"3. Ön sözdən sonra -ing; cümlənin əvvəlində -ing",
       t:[
         "Ön sözdən (in, at, of, about, for, before, after, without) sonra fel gələndə həmişə -ing olur. to + fel və ya sadə fel burada işlənmir. Azərbaycanca bu yerlərdə «-maqdan, -mağa, -dığı üçün» deyirik. Qayda sifət + ön söz birləşmələrində də işləyir: good at, interested in, tired of.",
         "Bir işin özündən danışanda -ing forması isim kimi işlənir və cümlənin əvvəlində «kim» yerində dura bilər. Azərbaycanca bu «-maq» formasıdır: «gəzmək faydalıdır». Bu halda fel tək olur: is, takes."
       ],
       tbl:[["good at · interested in · tired of","good at cooking · interested in learning · tired of waiting"],["thank you for · think about","thank you for helping · think about changing"],["before · after · without","before eating · after finishing · without saying"],["-ing cümlənin əvvəlində","Walking is good for you."]],
       ex:[["He's good at cooking.","O, yemək bişirməyi bacarır."],["I'm interested in learning Spanish.","İspan dilini öyrənməklə maraqlanıram."],["Thank you for helping me.","Mənə kömək etdiyin üçün sağ ol."],["I'm thinking about changing my job.","İşimi dəyişmək haqqında düşünürəm."],["Wash your hands before eating.","Yeməkdən əvvəl əllərini yu."],["Walking is good for your health.","Piyada gəzmək sağlamlıq üçün faydalıdır."]],
       no:"good at cook / Thank you for help me. / Walk is good for you. — səhvdir (good at cooking; Thank you for helping me; Walking is good for you)"
     },
     { h:"4. to + fel: məqsəd, sifətdən sonra, not to",
       t:[
         "Bir işi NİYƏ etdiyini demək üçün to + fel işlənir: «almaq üçün», «öyrənmək üçün». for + fel bu mənada işlənmir. for-dan sonra isə isim gələ bilər: for a coffee, for work.",
         "Sifət bir işin necə olduğunu (asan, çətin, vacib) və ya insanın hissini (şad, hazır) bildirirsə, ondan sonra to + fel gəlir. Azərbaycanca «öyrənmək asandır», «kömək etməyə şadam» deyirik.",
         "to + fel formasını inkar etmək üçün not to-dan əvvəl gəlir: not to go, «getməməyə». Burada don't işlənmir. not əsas felə yox, to-lu hissəyə aiddir."
       ],
       tbl:[["Məqsəd (niyə?)","I went to the bank to get some money."],["Sifət + to + fel","It's easy to learn. · I'm ready to start."],["İnkar","I decided not to go. · Try not to worry."]],
       ex:[["I went to the bank to get some money.","Pul götürmək üçün banka getdim."],["I came to Baku to learn English.","İngilis dili öyrənmək üçün Bakıya gəldim."],["She is learning English to get a better job.","O, daha yaxşı iş tapmaq üçün ingilis dili öyrənir."],["It's easy to make this cake.","Bu tortu hazırlamaq asandır."],["I'm happy to help.","Kömək etməyə şadam."],["I decided not to go.","Getməməyə qərar verdim."]],
       no:"I went to the bank for get money. — səhvdir (məqsəd: to get money)"
     },
     { h:"5. want / ask / tell + adam + to + fel; let və make",
       t:[
         "Başqasının nəsə etməsini istəyəndə want + adam + to + fel işlənir. ask (xahiş etmək) və tell (demək, tapşırmaq) də eyni quruluşla işlənir. Adam me, him, her, us, them formasında gəlir. Azərbaycanca «etməyimi istəyir» deyirik, amma ingiliscə burada that + cümlə işlənmir.",
         "İnkar üçün not to + fel gəlir: told me not to drink. told me don't drink səhvdir: bu quruluşda inkar həmişə not to ilə qurulur.",
         "let «icazə vermək», make isə «məcbur etmək» deməkdir. Bu iki feldən sonra adam, sonra SADƏ fel gəlir, to yoxdur. Azərbaycanca make çox vaxt «ağlatdı, güldürdü» kimi şəkilçi ilə deyilir. Diqqət: let (icazə vermək) ilə Let's (təklif) fərqlidir."
       ],
       tbl:[["want / ask / tell + adam","+ to + fel: He asked me to call him."],["İnkar","+ not to + fel: He told me not to be late."],["let / make + adam","+ sadə fel, to yoxdur: The film made me cry."]],
       ex:[["My boss wants me to finish the report.","Müdirim hesabatı bitirməyimi istəyir."],["He asked me to call him.","Ona zəng etməyimi xahiş etdi."],["The doctor told me not to drink coffee.","Həkim mənə qəhvə içməməyi dedi."],["My parents let me go out.","Valideynlərim çölə çıxmağıma icazə verdilər."],["The film made me cry.","Film məni ağlatdı."],["My boss made me work late.","Müdirim məni gec saata qədər işləməyə məcbur etdi."]],
       no:"She wants that I help her. / She made me to cry. / He told me don't be late. — səhvdir (She wants me to help her; She made me cry; He told me not to be late)"
     },
     { h:"6. go: yerlər, go + -ing, go for a …",
       t:[
         "Bir yerə getmək üçün go to + yer işlənir. Amma home sözündən əvvəl to işlənmir: go home. Tətilə getmək go on holiday, işgüzar səfərə getmək go on a business trip deyilir. Keçmişdə go → went olur.",
         "İdman və əyləncə fəaliyyətləri üçün go + -ing işlənir: go shopping, go swimming, go running, go fishing, go skiing. Arada to və the yoxdur. Azərbaycanca «üzməyə getmək» deyirik və «-mağa» to kimi görünür, ingiliscə isə to yazılmır.",
         "go for a + isim qısa müddətlik fəaliyyət üçün işlənir: go for a walk (gəzintiyə çıxmaq), go for a run, go for a drive (maşınla gəzməyə çıxmaq), go for a coffee (qəhvə içməyə getmək). Burada a mütləqdir. Bu birləşmələri bütöv yadda saxla."
       ],
       tbl:[["go to + yer","go to the gym · go to work · go to Baku"],["go home","evə getmək (to yoxdur)"],["go + -ing","go shopping · go swimming · go running · go fishing · go skiing"],["go for a …","go for a walk · go for a drive · go for a coffee"],["go on …","go on holiday · go on a business trip"]],
       ex:[["I go to the gym on Mondays.","Bazar ertəsi idman zalına gedirəm."],["Let's go home.","Gəl evə gedək."],["We go swimming every Sunday.","Hər bazar günü üzməyə gedirik."],["She went shopping yesterday.","O, dünən alış-verişə getdi."],["Let's go for a walk.","Gəl gəzintiyə çıxaq."],["We're going on holiday next week.","Gələn həftə tətilə gedirik."]],
       no:"Let's go to home. / We went to swimming. / I go to shopping every week. — səhvdir (go home; went swimming; go shopping)"
     },
     { h:"7. get: almaq, olmaq, çatmaq",
       t:[
         "get ingilis dilinin ən çox mənalı fellərindən biridir. Dəqiq mənanı arxasından gələn söz göstərir. Keçmişdə get → got olur. Aşağıdakı dörd quruluşu bil.",
         "get + isim «almaq, tapmaq, qəbul etmək» deməkdir: get a job (iş tapmaq), get a message (mesaj almaq), get some bread (çörək almaq). get + sifət «olmaq» deməkdir, yəni vəziyyət dəyişir: get tired, get hungry, get dark, get better. Azərbaycanca bunu bir felə deyirik: «yorulmaq, acmaq».",
         "get married «evlənmək» (hərəkət), be married isə «evli olmaq» (vəziyyət) deməkdir. get + yer «çatmaq» deməkdir: get home (home-dan əvvəl to yoxdur), get to work. get up — durmaq. Nəqliyyatda avtobus, qatar, təyyarə üçün get on / get off, maşın və taksi üçün get in / get out of işlənir."
       ],
       tbl:[["get + isim","get a job · get a message · get some bread"],["get + sifət","get tired · get hungry · get dark · get better"],["get + yer","get home · get to work"],["get up / on / off / in / out of","get up at 7 · get off the bus · get out of the taxi"]],
       ex:[["She got a new job.","O, yeni iş tapdı."],["Did you get my message?","Mesajımı aldın?"],["It's getting dark.","Qaranlıq düşür."],["They got married last year.","Onlar keçən il evləndilər."],["What time did you get home?","Evə saat neçədə çatdın?"],["Get off the bus at the next stop.","Növbəti dayanacaqda avtobusdan düş."]],
       no:"She is married last year. / What time did you get to home? — səhvdir (She got married last year; get home)"
     },
     { h:"8. do və make",
       t:[
         "Azərbaycanca ikisi də «etmək» olduğu üçün qarışır. Qayda belədir: do iş, vəzifə və ümumi fəaliyyət üçündür, nəticədə yeni əşya yaranmır. make düzəltmək, yaratmaq deməkdir: nəticədə yeni bir şey əmələ gəlir (çay, tort, səs-küy, qərar).",
         "Bu birləşmələri əzbərlə. do ilə: do homework, do the shopping, do the washing, do the cleaning, do exercise, do a course, do your best, do a job. make ilə: make tea, make a cake, make dinner, make a mistake, make a decision, make money, make friends, make a noise, make a phone call, make plans.",
         "«Səhv etmək» ingiliscə həmişə make a mistake-dir, do yox. What do you do? sualı «Nə işləyirsən?» deməkdir. Keçmiş formalar: do → did, make → made."
       ],
       tbl:[["do","homework · the shopping · the washing · the cleaning · exercise · a course · your best"],["make","tea · a cake · dinner · a mistake · a decision · money · friends · a noise · a phone call"]],
       ex:[["I need to do my homework.","Ev tapşırığımı etməliyəm."],["Who does the shopping in your family?","Ailənizdə alış-verişi kim edir?"],["What do you do? — I'm an engineer.","Nə işləyirsən? — Mühəndisəm."],["Can you make a cup of tea?","Bir stəkan çay dəmləyə bilərsən?"],["I made a mistake in the test.","Testdə səhv etdim."],["He makes a lot of money.","O, çox pul qazanır."]],
       no:"I did a mistake. / I made my homework. / They do a lot of noise. — səhvdir (made a mistake; did my homework; make a lot of noise)"
     },
     { h:"9. have və have got",
       t:[
         "have «sahib olmaq» mənasından başqa, bəzi gündəlik işlər üçün də işlənir: have breakfast / lunch / dinner (yemək), have a shower, have a rest, have a party, have a good time, have a look, have a coffee. Bu mənada have «etmək, yemək, keçirmək» deməkdir.",
         "Belə have adi iş felidir: sual və inkarda do / does / did lazımdır (What time do you have lunch? I didn't have breakfast). -ing də ala bilər (They are having a party). Keçmişi had-dır.",
         "«Sahib olmaq» üçün Britaniya danışığında have got / has got da işlənir. Sual Have you got…?, inkar haven't got formasındadır. Burada have köməkçidir, do işlənmir. Keçmişdə had got yox, sadəcə had işlənir. have got yalnız «sahib olmaq» mənasındadır: have got breakfast deyilmir. Do you have got…? isə səhvdir: ya Have you got…?, ya Do you have…?"
       ],
       tbl:[["Sahib olmaq","I have a car. = I've got a car."],["Sual","Do you have a pen? = Have you got a pen?"],["İnkar","I don't have a pen. = I haven't got a pen."],["Gündəlik iş (do / did ilə)","have breakfast · have a shower · have a rest · have a good time"]],
       ex:[["I've got a new phone.","Yeni telefonum var."],["Have you got a pen?","Qələmin var?"],["She hasn't got a car.","Onun maşını yoxdur."],["I always have a shower in the morning.","Səhər həmişə duş qəbul edirəm."],["What time do you have lunch?","Saat neçədə nahar edirsən?"],["We had a great time at the party.","Məclisdə çox gözəl vaxt keçirdik."]],
       no:"Do you have got a car? / I get up at 7 and make a shower. / Let's make a rest. — səhvdir (Have you got a car? have a shower; have a rest)"
     }
   ],
   sum:[
     "Modal fellərdən və do / does / did-dən sonra sadə fel gəlir: can go, Did you see it?",
     "-ing alanlar: enjoy, finish, mind, stop, avoid, keep, practise, suggest, give up. to alanlar: want, need, decide, hope, plan, learn, agree, promise, forget, offer, refuse, would like.",
     "like, love, hate, prefer, start, begin ikisini də alır; would like / would love / would prefer yalnız to + fel.",
     "Ön sözdən sonra həmişə -ing: good at cooking, Thank you for helping. -ing cümlənin əvvəlində də ola bilər: Walking is good for you.",
     "Məqsəd: to + fel (for + fel yox). Sifət + to + fel: It's easy to learn. İnkar: not to + fel.",
     "want / ask / tell + adam + to + fel. let / make + adam + sadə fel (to yoxdur).",
     "go home (to yox), go swimming (to yox), go for a walk. get = almaq, olmaq (get tired), çatmaq (get home); get married.",
     "do homework, do the shopping; make a mistake, make tea, make money. have breakfast, have a shower; have got = sahib olmaq."
   ]
 }
);
