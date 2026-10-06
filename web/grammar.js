// Zirvə — qrammatika kursu (orijinal material, Zirvə üçün yazılıb; mənbə: CEFR A2–B1 qrammatika əhatəsi).
// Hər mövzu: izah (AZ), nümunələr, tipik səhvlər, məşqlər (mc: düz cavab birinci; type: yazmalı; fix: səhvi düzəlt), qısa yazı, danışıq.
// status: "ready" — tam işləyir; "planned" — planda var, məzmun hələ yazılmayıb.
const GRAM = [
{ id:"g01", status:"ready", level:"A2", week:1, mins:35,
  title:"be · have · do və sual/inkar",
  goal:"am/is/are, have/has və do/does/did köməkçi fellərini düz seçib təsdiq, inkar və sual cümləsi qurmaq.",
  expl:[
    "İngilis cümləsində fel MÜTLƏQDİR. Azərbaycanca «Mən yorğunam» deyirik — ingiliscə fel lazımdır: <b>I am tired.</b> Burada fel <b>be</b>-dir: I <b>am</b>, he/she/it <b>is</b>, we/you/they <b>are</b>.",
    "<b>have/has</b> — sahib olmaq: I <b>have</b> a car. She <b>has</b> two brothers. (he/she/it → has)",
    "Adi fellərlə inkar və sual üçün köməkçi <b>do/does</b> (indiki), <b>did</b> (keçmiş) işlənir: I <b>don't</b> like tea. <b>Does</b> she work here? <b>Did</b> you call him?",
    "Köməkçi fel gələndə əsas fel <b>sadə formaya</b> qayıdır: She works → She <b>doesn't work</b> (works yox!). He went → <b>Did</b> he <b>go</b>?",
    "be ilə do işlənmir: <b>Are</b> you ready? (Do you ready? — səhv). <b>Is</b> he a doctor?"
  ],
  examples:[
    ["My sister is a nurse.","Bacım tibb bacısıdır."],
    ["We aren't at home now.","İndi evdə deyilik."],
    ["Does your brother live in Baku?","Qardaşın Bakıda yaşayır?"],
    ["I didn't see the message.","Mesajı görmədim."],
    ["Have you got any questions? / Do you have any questions?","Sualın var?"],
    ["Where do they work?","Onlar harada işləyirlər?"]
  ],
  errors:[
    ["I tired.","I am tired.","Azərbaycancada «-am» şəkilçidir; ingiliscə ayrıca fel (am) lazımdır."],
    ["She don't like coffee.","She doesn't like coffee.","he/she/it ilə does/doesn't."],
    ["Does he works here?","Does he work here?","does-dan sonra fel -s almır."],
    ["Do you ready?","Are you ready?","Sifətlə (ready, tired, happy) be işlənir, do yox."],
    ["I didn't went.","I didn't go.","did-dən sonra fel sadə formadadır."]
  ],
  mc:[
    ["My parents ___ teachers.",["are","is","am","be"]],
    ["___ she speak English?",["Does","Do","Is","Has"]],
    ["He ___ a new phone.",["has","have","is","does"]],
    ["I ___ understand this word.",["don't","doesn't","am not","isn't"]],
    ["___ you at work yesterday?",["Were","Did","Was","Are"]],
    ["They ___ come to the party last night.",["didn't","don't","weren't","doesn't"]],
    ["Where ___ your office?",["is","does","do","has"]],
    ["What time ___ the shop open?",["does","is","do","has"]]
  ],
  type:[
    ["İnkar et: «She lives in Ganja.»",["she doesn't live in ganja","she does not live in ganja"]],
    ["Sual qur: «They work on Saturdays.»",["do they work on saturdays"]],
    ["İnkar et: «I am hungry.»",["i am not hungry","i'm not hungry"]],
    ["Keçmişdə sual: «You saw the film.» → Did …?",["did you see the film"]],
    ["be-nin düz forması: «It ___ cold today.» (yalnız sözü yaz)",["is"]],
    ["have/has: «My friend ___ a dog.» (yalnız sözü yaz)",["has"]]
  ],
  fix:[
    ["He don't have a car.",["he doesn't have a car","he does not have a car"]],
    ["Is she work in a bank?",["does she work in a bank"]],
    ["We was very tired.",["we were very tired"]],
    ["Did you went to school?",["did you go to school"]]
  ],
  write:{task:"Özün haqqında 5 cümlə yaz: işin, ailən, nə sevirsən, nə sevmirsən, dünən nə etmədin. Ən azı bir inkar və bir sual işlət.", min:40},
  speak:{task:"Dostunu təsəvvür et və ona 5 sual ver: işi, yaşadığı yer, hobbisi, dünən nə etdiyi. Sonra suallara özün cavab ver.", secs:90}
},
{ id:"g02", status:"ready", level:"A2", week:1, mins:35,
  title:"Söz sırası: Subject + Verb + Object",
  goal:"İngilis cümləsində sözləri düz sıraya qoymaq, zaman və yer sözlərini düz yerə yerləşdirmək.",
  expl:[
    "Azərbaycanca fel sonda gəlir: «Mən çay içirəm». İngiliscə fel <b>subyektdən dərhal sonra</b>: <b>I drink tea.</b> (S + V + O)",
    "Yer və zaman adətən sonda: I met him <b>at the station yesterday</b>. (əvvəl yer, sonra zaman)",
    "Tezlik zərfləri (always, usually, often, sometimes, never) əsas feldən <b>əvvəl</b>, be-dən <b>sonra</b>: I <b>usually</b> walk. She is <b>always</b> late.",
    "Sual: köməkçi fel + subyekt + əsas fel: <b>Where do you live?</b> (Where you live? — səhv)"
  ],
  examples:[
    ["I usually have breakfast at eight.","Adətən saat səkkizdə səhər yeməyi yeyirəm."],
    ["She bought a laptop in the city centre last week.","Keçən həftə şəhər mərkəzində noutbuk aldı."],
    ["He is never late.","O heç vaxt gecikmir."],
    ["What do you usually do at the weekend?","Həftəsonu adətən nə edirsən?"]
  ],
  errors:[
    ["I tea drink.","I drink tea.","Fel subyektdən dərhal sonra gəlir."],
    ["I go always to work by bus.","I always go to work by bus.","always əsas feldən əvvəl."],
    ["Where you work?","Where do you work?","Sualda köməkçi fel lazımdır."],
    ["Yesterday at the cafe I him met.","I met him at the cafe yesterday.","S + V + O + yer + zaman."]
  ],
  mc:[
    ["Hansı cümlə düzdür?",["She often visits her grandmother.","She visits often her grandmother.","Often she her grandmother visits.","She her grandmother often visits."]],
    ["Hansı cümlə düzdür?",["We watched a film at home last night.","We watched last night at home a film.","We a film watched at home last night.","At home we last night watched a film."]],
    ["Hansı sual düzdür?",["What time does the bus leave?","What time the bus leaves?","What time leaves the bus?","What does time the bus leave?"]],
    ["Hansı cümlə düzdür?",["They are usually busy on Mondays.","They usually are busy on Mondays.","Usually they busy are on Mondays.","They are busy usually on Mondays always."]]
  ],
  type:[
    ["Sözləri sırala: «coffee / never / I / drink»",["i never drink coffee"]],
    ["Sözləri sırala: «you / where / live / do»",["where do you live"]],
    ["Sözləri sırala: «late / is / sometimes / he»",["he is sometimes late"]],
    ["Sözləri sırala: «yesterday / I / my keys / lost»",["i lost my keys yesterday","yesterday i lost my keys"]]
  ],
  fix:[
    ["I English study every day.",["i study english every day"]],
    ["She goes never to the gym.",["she never goes to the gym"]],
    ["What you are doing?",["what are you doing"]]
  ],
  write:{task:"Adi bir gününü 6 cümlə ilə təsvir et. always, usually, sometimes, never sözlərindən ən azı üçünü düz yerdə işlət.", min:50},
  speak:{task:"«What do you usually do on Saturdays?» sualına 60 saniyə cavab ver. Tezlik sözləri işlət.", secs:60}
},
{ id:"g03", status:"ready", level:"A2", week:2, mins:40,
  title:"Present Simple və Present Continuous",
  goal:"Vərdiş/fakt (Present Simple) ilə indi baş verən və ya müvəqqəti hadisəni (Present Continuous) ayırmaq.",
  expl:[
    "<b>Present Simple</b> — vərdiş, daimi vəziyyət, fakt: I <b>work</b> in an office. Water <b>boils</b> at 100°C. he/she/it → <b>-s</b>: she work<b>s</b>.",
    "<b>Present Continuous</b> (am/is/are + -ing) — indi, bu anda və ya bu günlərdə müvəqqəti: I <b>am working</b> from home this week. Look! It <b>is raining</b>.",
    "Siqnal sözlər: always, usually, every day → Simple; now, at the moment, today, this week, Look! → Continuous.",
    "Vəziyyət felləri (know, like, want, need, believe, understand) adətən -ing almır: I <b>know</b> (I am knowing — səhv)."
  ],
  examples:[
    ["She usually drives to work, but today she is taking the metro.","O adətən maşınla işə gedir, amma bu gün metroya minir."],
    ["I don't understand this question.","Bu sualı başa düşmürəm."],
    ["What are you doing right now?","İndi nə edirsən?"],
    ["Prices are rising this year.","Bu il qiymətlər artır."]
  ],
  errors:[
    ["I am working here since 2020.","I have worked here since 2020.","since/for ilə Present Perfect lazımdır (növbəti mövzular)."],
    ["She go to work every day.","She goes to work every day.","he/she/it ilə -s."],
    ["I am knowing the answer.","I know the answer.","know vəziyyət felidir, -ing almır."],
    ["Now I write an email.","I am writing an email now.","Bu anda baş verən iş — Continuous."]
  ],
  mc:[
    ["Listen! Somebody ___ at the door.",["is knocking","knocks","knock","are knocking"]],
    ["My father ___ coffee every morning.",["drinks","is drinking","drink","are drinking"]],
    ["I ___ what you mean.",["understand","am understanding","understands","is understanding"]],
    ["This week we ___ on a big project.",["are working","work","works","is working"]],
    ["How often ___ you go to the cinema?",["do","are","does","is"]],
    ["The sun ___ in the east.",["rises","is rising","rise","are rising"]]
  ],
  type:[
    ["Mötərizədəki feli işlət: «She ___ (read) a book at the moment.»",["is reading","'s reading"]],
    ["«They ___ (not/watch) TV every evening.»",["don't watch","do not watch"]],
    ["«___ (you/wait) for the bus now?» — sual tam yaz",["are you waiting for the bus now"]],
    ["«My brother ___ (study) medicine.» (daimi fakt)",["studies"]]
  ],
  fix:[
    ["He is wanting a new job.",["he wants a new job"]],
    ["I am go to the gym on Mondays.",["i go to the gym on mondays"]],
    ["Look! The children plays in the garden.",["look! the children are playing in the garden","look the children are playing in the garden"]]
  ],
  write:{task:"Ailə üzvlərindən ikisini təsvir et: adətən nə edirlər (Simple) və bu günlərdə nə ilə məşğuldurlar (Continuous). 60–80 söz.", min:60},
  speak:{task:"Pəncərədən baxırsan: kim nə edir? 60 saniyə təsvir et (Continuous), sonra o insanların adətən nə etdiyini de (Simple).", secs:60}
},
{ id:"g04", status:"ready", level:"A2", week:3, mins:40,
  title:"Past Simple və Past Continuous",
  goal:"Keçmişdə bitmiş hadisələri danışmaq və «bir iş gedərkən başqası baş verdi» quruluşunu işlətmək.",
  expl:[
    "<b>Past Simple</b> — keçmişdə bitmiş hadisə: I <b>visited</b> Sheki last summer. Qaydalı fellər <b>-ed</b>, qaydasızlar ayrıca: go→<b>went</b>, see→<b>saw</b>, buy→<b>bought</b>.",
    "İnkar/sual: <b>didn't</b> / <b>Did</b> + sadə fel: I didn't <b>see</b>. Did you <b>buy</b> it?",
    "<b>Past Continuous</b> (was/were + -ing) — keçmişdə müəyyən anda davam edən iş: At 8 pm I <b>was cooking</b>.",
    "Birlikdə: uzun iş (Continuous) + qısa hadisə (Simple): I <b>was walking</b> home <b>when</b> it <b>started</b> to rain. <b>While</b> she was talking, the phone rang."
  ],
  examples:[
    ["We met in 2019.","2019-cu ildə tanış olduq."],
    ["What were you doing at ten o'clock last night?","Dünən gecə saat onda nə edirdin?"],
    ["I was driving when you called.","Zəng edəndə maşın sürürdüm."],
    ["She didn't come because she was ill.","Xəstə olduğu üçün gəlmədi."]
  ],
  errors:[
    ["I goed to the market.","I went to the market.","go qaydasızdır: went."],
    ["Did you saw him?","Did you see him?","Did-dən sonra sadə fel."],
    ["When I was arriving, they left.","When I arrived, they were leaving. / When I arrived, they had left.","Qısa hadisə Simple olur."],
    ["Yesterday I am very busy.","Yesterday I was very busy.","Keçmiş üçün was/were."]
  ],
  mc:[
    ["I ___ my keys yesterday.",["lost","was losing","lose","have lost"]],
    ["While I ___ dinner, the lights went out.",["was cooking","cooked","am cooking","cook"]],
    ["___ you enjoy the concert?",["Did","Were","Do","Was"]],
    ["They ___ football when it started to rain.",["were playing","played","was playing","are playing"]],
    ["She ___ to Istanbul three years ago.",["moved","was moving","moves","has moved"]],
    ["What ___ you doing at 7 this morning?",["were","did","was","are"]]
  ],
  type:[
    ["Keçmiş forma: buy →",["bought"]],
    ["Keçmiş forma: write →",["wrote"]],
    ["«I ___ (not/sleep) well last night.»",["didn't sleep","did not sleep"]],
    ["«He ___ (read) when I came in.»",["was reading"]],
    ["Keçmiş forma: think →",["thought"]]
  ],
  fix:[
    ["I didn't knew the answer.",["i didn't know the answer","i did not know the answer"]],
    ["We was watching TV when he called.",["we were watching tv when he called"]],
    ["She buyed a new dress.",["she bought a new dress"]]
  ],
  write:{task:"Yadda qalan bir günü danış (səyahət, toy, imtahan günü). 70–90 söz. Ən azı bir dəfə «when» və ya «while» ilə Past Continuous işlət.", min:70},
  speak:{task:"«Tell me about the last time you went somewhere new.» — 90 saniyə danış: harada, kiminlə, nə baş verdi, necə hiss etdin.", secs:90}
},
{ id:"g05", status:"ready", level:"A2", week:4, mins:40,
  title:"Gələcək: will, be going to, Present Continuous",
  goal:"Plan, qərar, proqnoz və razılaşdırılmış görüşlər üçün düz gələcək formasını seçmək.",
  expl:[
    "<b>be going to</b> — əvvəlcədən düşünülmüş plan və ya indi görünən əlamətə görə proqnoz: I'<b>m going to</b> study abroad. Look at the clouds — it'<b>s going to</b> rain.",
    "<b>will</b> — danışarkən verilən qərar, təklif, söz, ümumi proqnoz: The phone is ringing — I'<b>ll</b> answer it. I think prices <b>will</b> rise.",
    "<b>Present Continuous</b> — vaxtı/yeri razılaşdırılmış görüş: I'<b>m meeting</b> the manager at 3 tomorrow.",
    "if/when ilə zaman cümləsində gələcək üçün Present Simple: <b>When I finish</b> the course, I'll take the exam. (When I will finish — səhv)"
  ],
  examples:[
    ["I'm going to start a new course in January.","Yanvarda yeni kursa başlayacağam (planım var)."],
    ["Don't worry, I'll help you.","Narahat olma, sənə kömək edərəm."],
    ["We're flying to Tbilisi on Friday.","Cümə günü Tbilisiyə uçuruq (bilet alınıb)."],
    ["I'll call you when I get home.","Evə çatanda sənə zəng edəcəm."]
  ],
  errors:[
    ["I will to go.","I will go.","will-dən sonra to yoxdur."],
    ["When I will arrive, I call you.","When I arrive, I'll call you.","Zaman cümləsində Present Simple."],
    ["I go to visit my aunt tomorrow — I decided last week.","I'm going to visit my aunt tomorrow.","Əvvəlcədən plan — going to."]
  ],
  mc:[
    ["A: We have no milk. B: OK, I ___ buy some.",["'ll","'m going to","am buying","buy"]],
    ["She has booked a table. They ___ dinner at 8 tonight.",["are having","will have","have","has"]],
    ["Look at that car! It ___ crash!",["is going to","will","crashes","is crashing to"]],
    ["I'll text you as soon as I ___.",["arrive","will arrive","am going to arrive","arrived"]],
    ["I think the exam ___ difficult.",["will be","is being","is going be","be"]],
    ["What ___ you going to do after university?",["are","will","do","is"]]
  ],
  type:[
    ["«I ___ (not/be) late, I promise.» (will)",["won't be","will not be"]],
    ["«We ___ (move) to a new flat next month. Everything is planned.» (going to)",["are going to move","'re going to move"]],
    ["«If it ___ (rain), we'll stay at home.»",["rains"]],
    ["Sual qur (going to): «you / study / tonight»",["are you going to study tonight"]]
  ],
  fix:[
    ["I will to call you later.",["i will call you later","i'll call you later"]],
    ["When she will come, we will start.",["when she comes, we will start","when she comes we will start","when she comes, we'll start"]],
    ["Are you go to buy a car?",["are you going to buy a car"]]
  ],
  write:{task:"Gələn 6 ay üçün planlarını yaz (iş, ingilis dili, səyahət). 70–90 söz. going to, will və Present Continuous-un hər birindən ən azı bir dəfə.", min:70},
  speak:{task:"«What are your plans for next year?» — 90 saniyə. Planları (going to) və proqnozları (I think … will …) ayır.", secs:90}
},
{ id:"g06", status:"ready", level:"A2", week:5, mins:40,
  title:"Sayılan/sayılmayan isimlər, artikllar, some/any/much/many",
  goal:"a/an/the və quantifier-ləri (some, any, much, many, a lot of, a few, a little) düz işlətmək.",
  expl:[
    "Sayılan: a book, two books. Sayılmayan: water, money, information, advice, furniture, news — <b>a</b> almır, cəm olmur: <b>some advice</b> (an advice, advices — səhv).",
    "<b>a/an</b> — ilk dəfə xatırlanan, birini: I saw <b>a</b> dog. <b>an</b> sait SƏSİ ilə başlayanda: <b>an</b> hour, <b>a</b> university.",
    "<b>the</b> — hər ikimizin bildiyi, təkcə bir olan: <b>The</b> dog was big. <b>the</b> sun, <b>the</b> internet. Ümumi danışanda artikl yoxdur: <b>Dogs</b> are friendly. I like <b>music</b>.",
    "<b>many</b> + sayılan, <b>much</b> + sayılmayan (çox vaxt sual/inkarda); <b>a lot of</b> hər ikisi ilə. <b>a few</b> + sayılan, <b>a little</b> + sayılmayan. <b>some</b> təsdiqdə, <b>any</b> sual/inkarda."
  ],
  examples:[
    ["Can you give me some advice?","Mənə məsləhət verə bilərsən?"],
    ["There isn't much time.","Çox vaxt yoxdur."],
    ["I have a few friends in London.","Londonda bir neçə dostum var."],
    ["The information on this website is useful.","Bu saytdakı məlumat faydalıdır."]
  ],
  errors:[
    ["I need an information.","I need some information.","information sayılmır."],
    ["How much people came?","How many people came?","people sayılandır — many."],
    ["The life is beautiful.","Life is beautiful.","Ümumi mənada artikl yoxdur."],
    ["She is engineer.","She is an engineer.","Peşə ilə a/an lazımdır."]
  ],
  mc:[
    ["We don't have ___ milk left.",["much","many","a few","a"]],
    ["There are ___ apples on the table.",["some","much","a little","an"]],
    ["He is ___ honest man.",["an","a","the","—"]],
    ["Could I have ___ water, please?",["some","a","many","an"]],
    ["I've got ___ questions for you.",["a few","a little","much","an"]],
    ["___ moon goes around the Earth.",["The","A","An","—"]]
  ],
  type:[
    ["a / an: «___ umbrella»",["an"]],
    ["a / an: «___ university»",["a"]],
    ["much / many: «How ___ money do you need?»",["much"]],
    ["Cəm forma: «child» →",["children"]],
    ["some / any: «Are there ___ shops near here?»",["any"]]
  ],
  fix:[
    ["She gave me many advices.",["she gave me a lot of advice","she gave me some advice","she gave me lots of advice"]],
    ["I bought a new furniture.",["i bought some new furniture","i bought new furniture"]],
    ["My brother is doctor.",["my brother is a doctor"]]
  ],
  write:{task:"Mətbəxini və ya otağını təsvir et: nə var, nə yoxdur, nədən çoxdur, nədən azdır. 60–80 söz. some, any, much, many, a few, a little işlət.", min:60},
  speak:{task:"«Describe your favourite place to shop.» — 60 saniyə: orada nələr var, qiymətlər, insanlar.", secs:60}
},
{ id:"g07", status:"ready", level:"A2", week:6, mins:35,
  title:"Müqayisə: comparative və superlative",
  goal:"İki şeyi müqayisə etmək (-er / more) və ən üstün dərəcəni (-est / the most) işlətmək.",
  expl:[
    "Qısa sifət: cheap → <b>cheaper</b> → <b>the cheapest</b>. big → bigger (son samit ikiləşir). easy → easier (y → i).",
    "Uzun sifət (2+ heca, -y ilə bitməyən): expensive → <b>more expensive</b> → <b>the most expensive</b>.",
    "Qaydasız: good → <b>better</b> → <b>the best</b>; bad → <b>worse</b> → <b>the worst</b>; far → <b>further/farther</b>.",
    "Müqayisədə <b>than</b>: Baku is <b>bigger than</b> Ganja. Bərabərlik: <b>as … as</b>: This phone is <b>as good as</b> that one. Fərq: <b>much</b> cheaper, <b>a bit</b> slower."
  ],
  examples:[
    ["The train is faster than the bus.","Qatar avtobusdan sürətlidir."],
    ["This is the most interesting book I've read this year.","Bu, bu il oxuduğum ən maraqlı kitabdır."],
    ["My English is better than last year.","İngiliscəm keçən ildən yaxşıdır."],
    ["The flat isn't as big as I expected.","Mənzil gözlədiyim qədər böyük deyil."]
  ],
  errors:[
    ["He is more tall than me.","He is taller than me.","Qısa sifət -er alır."],
    ["This is the more expensive hotel in the city.","This is the most expensive hotel in the city.","Ən üstün dərəcə — the most."],
    ["She is gooder than him.","She is better than him.","good qaydasızdır."],
    ["It's bigger that I thought.","It's bigger than I thought.","Müqayisədə than."]
  ],
  mc:[
    ["Summer here is ___ than spring.",["hotter","more hot","hottest","the hotter"]],
    ["This is ___ day of my life!",["the best","the better","the goodest","best"]],
    ["Online courses are often ___ than classes.",["cheaper","more cheap","cheapest","the cheaper"]],
    ["My new job is ___ interesting than my old one.",["much more","more much","most","many more"]],
    ["Ali is not ___ tall as his brother.",["as","than","so much","more"]]
  ],
  type:[
    ["Comparative: happy →",["happier"]],
    ["Superlative: important →",["the most important","most important"]],
    ["Comparative: bad →",["worse"]],
    ["«The metro is ___ (fast) than a taxi in the morning.»",["faster"]]
  ],
  fix:[
    ["This test was more easy than the last one.",["this test was easier than the last one"]],
    ["He is the most fast runner in our team.",["he is the fastest runner in our team"]],
    ["My car is as old than yours.",["my car is as old as yours"]]
  ],
  write:{task:"İki şəhəri (məs. Bakı və Gəncə və ya Bakı və İstanbul) müqayisə et: ölçü, qiymətlər, nəqliyyat, hava. 80–100 söz.", min:80},
  speak:{task:"«Is it better to live in a big city or a small town?» — 90 saniyə: müqayisə et və öz seçimini səbəblə de.", secs:90}
},
{ id:"g08", status:"ready", level:"A2", week:7, mins:45,
  title:"Present Perfect və Past Simple",
  goal:"Keçmişdə vaxtı göstərilməyən təcrübə və indiyə təsiri olan hadisə (Present Perfect) ilə vaxtı məlum keçmiş hadisəni (Past Simple) ayırmaq.",
  expl:[
    "<b>Present Perfect</b> (have/has + V3): həyat təcrübəsi (vaxt deyilmir), indiyə qədər davam edən vəziyyət, indiyə nəticəsi olan yeni hadisə. I <b>have visited</b> Turkey twice. She <b>has lived</b> here <b>for</b> five years / <b>since</b> 2021. I'<b>ve lost</b> my phone (indi yoxdur).",
    "<b>Past Simple</b>: vaxt göstərilir və ya bitmiş keçmişdir: I <b>visited</b> Turkey <b>in 2022</b>. Siqnallar: yesterday, last week, ago, in 2019, when I was a child.",
    "Siqnallar (Present Perfect): ever, never, already, yet, just, so far, for, since. <b>for</b> + müddət (for two years), <b>since</b> + başlanğıc (since Monday).",
    "Azərbaycanca hər ikisi çox vaxt «-mışam/-dım» ilə verilir — ona görə vaxt sözünə bax: vaxt var → Past Simple."
  ],
  examples:[
    ["Have you ever been to London? — Yes, I went there in 2023.","Londonda olmusan? — Bəli, 2023-də getdim."],
    ["I've worked here since March.","Martdan bəri burada işləyirəm."],
    ["She has just finished her homework.","Ev tapşırığını indicə bitirdi."],
    ["We haven't decided yet.","Hələ qərar verməmişik."]
  ],
  errors:[
    ["I have seen him yesterday.","I saw him yesterday.","yesterday — vaxt bilinir → Past Simple."],
    ["I live here for three years.","I have lived here for three years.","İndiyə qədər davam edir → Present Perfect."],
    ["Did you ever eat sushi?","Have you ever eaten sushi?","Təcrübə sualı — Present Perfect."],
    ["She has went home.","She has gone home.","has + V3 (gone)."]
  ],
  mc:[
    ["I ___ this film three times.",["have seen","saw","see","have saw"]],
    ["We ___ to Sheki last summer.",["went","have gone","have been","go"]],
    ["He has worked here ___ 2020.",["since","for","from","ago"]],
    ["___ you finished the report yet?",["Have","Did","Has","Do"]],
    ["They got married five years ___.",["ago","since","for","before"]],
    ["I've never ___ a horse.",["ridden","rode","ride","riding"]]
  ],
  type:[
    ["V3 forması: write →",["written"]],
    ["V3 forması: go →",["gone","been"]],
    ["for / since: «___ two hours»",["for"]],
    ["«I ___ (lose) my wallet. Can you lend me some money?»",["have lost","'ve lost"]],
    ["«She ___ (call) me an hour ago.»",["called"]]
  ],
  fix:[
    ["I have bought this car in 2021.",["i bought this car in 2021"]],
    ["How long do you know him?",["how long have you known him"]],
    ["Have you went to Paris?",["have you been to paris","have you gone to paris"]]
  ],
  write:{task:"«My English journey»: indiyə qədər nə etmisən (Present Perfect) və konkret vaxtlarda nə baş verib (Past Simple). 80–100 söz.", min:80},
  speak:{task:"«Have you ever …?» sualları ilə özünə 4 sual ver və cavab ver: vaxtı deyəndə Past Simple-a keç.", secs:90}
},
{ id:"g09", status:"ready", level:"A2", week:8, mins:40,
  title:"Modal fellər: can, could, must, have to, should, might",
  goal:"Bacarıq, icazə, məcburiyyət, məsləhət və ehtimal bildirmək.",
  expl:[
    "Modaldan sonra fel <b>sadə formada</b>, to olmadan: She <b>can speak</b> French. (can to speak, can speaks — səhv)",
    "<b>can/could</b> — bacarıq, icazə, xahiş: <b>Could</b> you help me? (could daha nəzakətli). <b>must</b> — danışanın gördüyü güclü zərurət, qayda: You <b>must</b> wear a seatbelt. <b>have to</b> — xarici məcburiyyət: I <b>have to</b> work on Saturdays.",
    "<b>mustn't</b> = qadağandır; <b>don't have to</b> = lazım deyil (seçim səndədir). Fərq vacibdir!",
    "<b>should</b> — məsləhət: You <b>should</b> sleep more. <b>might/may</b> — ehtimal: It <b>might</b> rain later."
  ],
  examples:[
    ["You don't have to come if you're busy.","Məşğulsansa, gəlmək məcburi deyil."],
    ["You mustn't use your phone during the exam.","İmtahan zamanı telefondan istifadə etmək olmaz."],
    ["I couldn't sleep last night.","Dünən gecə yata bilmədim."],
    ["We might go to the beach on Sunday.","Bazar günü bəlkə çimərliyə gedək."]
  ],
  errors:[
    ["I can to swim.","I can swim.","Modaldan sonra to yoxdur."],
    ["He musts go.","He must go.","Modal -s almır."],
    ["You mustn't pay — it's free.","You don't have to pay — it's free.","Lazım deyil = don't have to."],
    ["Should I to call her?","Should I call her?","Modaldan sonra sadə fel."]
  ],
  mc:[
    ["You look tired. You ___ go to bed early.",["should","must to","have","can to"]],
    ["Children ___ play with matches. It's dangerous.",["mustn't","don't have to","shouldn't to","can"]],
    ["Tomorrow is a holiday, so we ___ get up early.",["don't have to","mustn't","can't to","haven't"]],
    ["___ you open the window, please?",["Could","Must","Should","Might"]],
    ["Take an umbrella. It ___ rain.",["might","must","has to","should to"]],
    ["When I was five, I ___ read.",["could","can","might","must"]]
  ],
  type:[
    ["«I ___ (have to) work yesterday.» keçmiş forma",["had to"]],
    ["İnkar: «You must smoke here.» → qadağa",["you mustn't smoke here","you must not smoke here"]],
    ["Nəzakətli xahiş başlanğıcı: «___ you help me?» (could/must)",["could"]],
    ["«She ___ (can/not) come because she is ill.»",["can't","cannot","can not"]]
  ],
  fix:[
    ["She cans drive.",["she can drive"]],
    ["We must to finish today.",["we must finish today"]],
    ["You should to see a doctor.",["you should see a doctor"]]
  ],
  write:{task:"İngilis dili öyrənən dostuna məsləhət məktubu yaz: nə etməlidir (should), nə məcburidir (have to), nə lazım deyil (don't have to). 80–100 söz.", min:80},
  speak:{task:"«What are the rules at your workplace?» — 60 saniyə: have to, must, mustn't, can işlət.", secs:60}
},
{ id:"g10", status:"planned", level:"B1", week:10, title:"Gerund və infinitive", goal:"enjoy doing / want to do, purpose to + fel." },
{ id:"g11", status:"planned", level:"B1", week:11, title:"Ön sözlər: zaman, yer, fel + ön söz", goal:"in/on/at, depend on, interested in və s." },
{ id:"g12", status:"planned", level:"B1", week:12, title:"Passive voice", goal:"is made, was built, has been done — akademik mətndə passiv." },
{ id:"g13", status:"planned", level:"B1", week:13, title:"Relative clauses", goal:"who, which, that, where, whose — təyin budaq cümlələri." },
{ id:"g14", status:"planned", level:"B1", week:14, title:"Conditionals 0–3", goal:"real və qeyri-real şərt, If I were you…" },
{ id:"g15", status:"planned", level:"B1", week:15, title:"Reported speech", goal:"He said that…, asked if…" },
{ id:"g16", status:"planned", level:"B2", week:16, title:"Bağlayıcılar: səbəb, nəticə, ziddiyyət, güzəşt", goal:"because of, therefore, however, although, despite, whereas." },
{ id:"g17", status:"planned", level:"B2", week:17, title:"Present Perfect Continuous və Past Perfect", goal:"have been doing, had done — zaman ardıcıllığı." },
{ id:"g18", status:"planned", level:"B2", week:18, title:"Mürəkkəb cümlələr və durğu işarələri", goal:"vergül, budaq cümlələr, akademik cümlə quruluşu." }
];
