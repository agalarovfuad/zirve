// Zirvə — qrammatika kursu (orijinal izah və tapşırıqlar; sillabus: Murphy, Basic Grammar in Use 4th ed. + English File Beginner 4th ed. Grammar Bank — kitab mətni köçürülməyib).
// Hər mövzu: izah (AZ), nümunələr, tipik səhvlər, məşqlər (mc: düz cavab birinci; type: yazmalı; fix: səhvi düzəlt), qısa yazı, danışıq.
// status: "ready" — tam işləyir; "planned" — planda var, məzmun hələ yazılmayıb.
const GRAM = [
{ id:"g01", status:"ready", level:"A2", week:1, mins:35,
  title:"be · have · do və sual/inkar",
  goal:"am/is/are, have/has və do/does/did-i düz seçmək; sual və inkar qurmaq.",
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
    ["What time ___ the shop open?",["does","is","do","has"]],
    ["I ___ 30 years old.",["am","have","has","do"]],
    ["How old ___ your daughter?",["is","has","does","have"]],
    ["My brother ___ at home yesterday.",["wasn't","weren't","didn't","isn't"]],
    ["___ your parents have a car?",["Do","Does","Are","Have"]]
  ],
  type:[
    ["İnkar et: «She lives in Ganja.»",["she doesn't live in ganja","she does not live in ganja"]],
    ["Sual qur: «They work on Saturdays.»",["do they work on saturdays"]],
    ["İnkar et: «I am hungry.»",["i am not hungry","i'm not hungry"]],
    ["Keçmişdə sual: «You saw the film.» → Did …?",["did you see the film"]],
    ["be-nin düz forması: «It ___ cold today.» (yalnız sözü yaz)",["is"]],
    ["have/has: «My friend ___ a dog.» (yalnız sözü yaz)",["has"]],
    ["Sual qur: «She is at home.»",["is she at home"]],
    ["İnkar et: «We were at school yesterday.»",["we weren't at school yesterday","we were not at school yesterday"]],
    ["İnkar et: «He went to work.»",["he didn't go to work","he did not go to work"]]
  ],
  fix:[
    ["He don't have a car.",["he doesn't have a car","he does not have a car"]],
    ["Is she work in a bank?",["does she work in a bank"]],
    ["We was very tired.",["we were very tired"]],
    ["Did you went to school?",["did you go to school"]],
    ["I have 25 years.",["i am 25","i'm 25","i am 25 years old","i'm 25 years old"]],
    ["Where you live?",["where do you live"]]
  ],
  write:{task:"Özün haqqında 5 cümlə yaz: işin, ailən, nə sevirsən, nə sevmirsən, dünən nə etmədin. Ən azı bir inkar və bir sual işlət.", min:40},
  speak:{task:"Dostunu təsəvvür et və ona 5 sual ver: işi, yaşadığı yer, hobbisi, dünən nə etdiyi. Sonra suallara özün cavab ver.", secs:90},
  ref:"Murphy: Units 1, 2, 5, 6, 7, 9, 10, 12, 22 · English File: Grammar Bank 1A, 1B, 2A, 2B, 5A, 5B, 6A, 10B"
},
{ id:"g02", status:"ready", level:"A2", week:1, mins:35,
  title:"Söz sırası: Subject + Verb + Object",
  goal:"Sözləri ingilis qaydası ilə düz sıraya qoymaq.",
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
    ["Hansı cümlə düzdür?",["They are usually busy on Mondays.","They usually are busy on Mondays.","Usually they busy are on Mondays.","They are busy usually on Mondays always."]],
    ["Hansı cümlə düzdür?",["I go to the gym twice a week.","I twice a week go to the gym.","I go twice a week to the gym always.","Twice I go a week to the gym."]],
    ["Hansı cümlə düzdür?",["Give me the keys, please.","Give to me the keys, please.","Give the keys me, please.","Me give the keys, please."]],
    ["Hansı cümlə düzdür?",["She bought two new chairs.","She bought two news chairs.","She bought two chairs new.","She two new chairs bought."]],
    ["Hansı cümlə düzdür?",["I am never tired in the morning.","I never am tired in the morning.","I am tired never in the morning.","Never I am tired in the morning."]],
    ["Hansı sual düzdür?",["Where does your sister work?","Where your sister works?","Where works your sister?","Where does work your sister?"]],
    ["Hansı cümlə düzdür?",["Yesterday I saw Leyla in the park.","I yesterday saw Leyla in the park.","I saw yesterday Leyla in the park.","Yesterday I Leyla saw in the park."]]
  ],
  type:[
    ["Sözləri sırala: «coffee / never / I / drink»",["i never drink coffee"]],
    ["Sözləri sırala: «you / where / live / do»",["where do you live"]],
    ["Sözləri sırala: «late / is / sometimes / he»",["he is sometimes late"]],
    ["Sözləri sırala: «yesterday / I / my keys / lost»",["i lost my keys yesterday","yesterday i lost my keys"]],
    ["Sözləri sırala: «a week / I / three times / cook»",["i cook three times a week"]],
    ["Sözləri sırala: «the photos / me / show»",["show me the photos"]],
    ["Sözləri sırala: «tired / always / is / my father»",["my father is always tired"]],
    ["Sözləri sırala: «a / car / red / has / she»",["she has a red car"]]
  ],
  fix:[
    ["I English study every day.",["i study english every day"]],
    ["She goes never to the gym.",["she never goes to the gym"]],
    ["What you are doing?",["what are you doing"]],
    ["Give to me the pen.",["give me the pen","give the pen to me"]],
    ["He calls every day his mother.",["he calls his mother every day"]]
  ],
  write:{task:"Adi bir gününü 6 cümlə ilə təsvir et. always, usually, sometimes, never sözlərindən ən azı üçünü düz yerdə işlət.", min:50},
  speak:{task:"«What do you usually do on Saturdays?» sualına 60 saniyə cavab ver. Tezlik sözləri işlət.", secs:60},
  ref:"Murphy: Units 91, 92, 94 · English File: Grammar Bank 6B, 7A"
},
{ id:"g03", status:"ready", level:"A2", week:2, mins:40,
  title:"Present Simple və Present Continuous",
  goal:"«Adətən edirəm» (Present Simple) ilə «indi edirəm» (Present Continuous) fərqini bilmək.",
  examples:[
    ["She usually drives to work, but today she is taking the metro.","O adətən maşınla işə gedir, amma bu gün metroya minir."],
    ["I don't understand this question.","Bu sualı başa düşmürəm."],
    ["What are you doing right now?","İndi nə edirsən?"],
    ["Prices are going up this year.","Bu il qiymətlər qalxır."]
  ],
  errors:[
    ["She go to work every day.","She goes to work every day.","he/she/it ilə feldə -s olur."],
    ["I am knowing the answer.","I know the answer.","know «hal» bildirir, -ing almır."],
    ["Now I write an email.","I am writing an email now.","İndi, bu anda gedən iş — am/is/are + -ing."],
    ["Do you working?","Are you working?","-ing ilə am/is/are lazımdır, do yox."],
    ["He is work now.","He is working now.","is-dən sonra fel -ing alır."]
  ],
  mc:[
    ["Listen! Somebody ___ at the door.",["is knocking","knocks","knock","are knocking"]],
    ["My father ___ coffee every morning.",["drinks","is drinking","drink","are drinking"]],
    ["I ___ what you mean.",["understand","am understanding","understands","is understanding"]],
    ["This week we ___ on a big project.",["are working","work","works","is working"]],
    ["How often ___ you go to the cinema?",["do","are","does","is"]],
    ["Water ___ at 100 degrees.",["boils","is boiling","boil","are boiling"]],
    ["«Where's Ali?» «He ___ a shower.»",["is having","has","have","having"]],
    ["She ___ two children.",["has","is having","have","are having"]],
    ["___ your brother work on Saturdays?",["Does","Is","Do","Are"]],
    ["Be quiet! The baby ___.",["is sleeping","sleeps","sleep","are sleeping"]],
    ["I ___ this song. It's great!",["love","am loving","loves","is loving"]],
    ["What ___ you doing? Are you cooking?",["are","do","does","is"]],
    ["He ___ to work by bus every day.",["goes","gos","go","is go"]],
    ["My sister never ___ TV.",["watches","is watching","watch","watchs"]]
  ],
  type:[
    ["Mötərizədəki feli işlət: «She ___ (read) a book at the moment.»",["is reading","'s reading"]],
    ["«They ___ (not/watch) TV every evening.»",["don't watch","do not watch"]],
    ["Sual qur: «You are waiting for the bus.»",["are you waiting for the bus"]],
    ["«My brother ___ (study) medicine.» (daimi fakt)",["studies"]],
    ["-s forması (he/she/it): watch →",["watches"]],
    ["-ing forması: swim →",["swimming"]],
    ["-ing forması: write →",["writing"]],
    ["«He ___ (not/like) fish.»",["doesn't like","does not like"]],
    ["«Look! It ___ (rain).»",["is raining","'s raining"]],
    ["Sual qur: «She works in a hospital.»",["does she work in a hospital"]],
    ["«I ___ (not/work) today. I'm at home.»",["am not working","'m not working"]]
  ],
  fix:[
    ["He is wanting a new job.",["he wants a new job"]],
    ["I am go to the gym on Mondays.",["i go to the gym on mondays"]],
    ["Look! The children plays in the garden.",["look the children are playing in the garden"]],
    ["She don't know my name.",["she doesn't know my name","she does not know my name"]],
    ["Are you like coffee?",["do you like coffee"]],
    ["What do you doing now?",["what are you doing now"]],
    ["He watchs TV every night.",["he watches tv every night"]]
  ],
  write:{task:"Ailə üzvlərindən ikisini təsvir et: adətən nə edirlər (Present Simple) və bu günlərdə nə edirlər (Present Continuous). 60–80 söz.", min:60},
  speak:{task:"Pəncərədən baxırsan: kim nə edir? 60 saniyə təsvir et (Continuous), sonra o insanların adətən nə etdiyini de (Simple).", secs:60},
  ref:"Murphy: Units 3–8 · English File: Grammar Bank 5A, 5B, 6A, 9A, 9B"
},
{ id:"g20", status:"ready", level:"A2", week:2, mins:35,
  title:"Əvəzliklər: I/me, my/mine, -'s, myself, this/that",
  goal:"«mən – məni – mənim – mənimki – özüm» sözlərini və this/that/these/those-u düz seçmək.",
  examples:[
    ["I called her, but she didn't answer me.","Ona zəng etdim, amma o mənə cavab vermədi."],
    ["Is this your phone? — No, it isn't mine.","Bu sənin telefonundur? — Yox, mənimki deyil."],
    ["My sister's husband is a driver.","Bacımın əri sürücüdür."],
    ["I don't like this shirt. I like that one.","Bu köynəyi bəyənmirəm. O birini bəyənirəm."]
  ],
  errors:[
    ["She loves his husband.","She loves her husband.","Qadından danışanda «onun» = her."],
    ["Give it to I.","Give it to me.","Feldən və to-dan sonra me."],
    ["This is the car of my brother.","This is my brother's car.","İnsanlarda «-ın/-in» üçün 's."],
    ["Is this your?","Is this yours?","İsim yoxdursa: yours."],
    ["The dog is eating it's food.","The dog is eating its food.","it's = it is; «onun» = its."],
    ["These book is old.","This book is old.","Bir əşya — this; çox — these."]
  ],
  mc:[
    ["Can you help ___?",["me","I","my","mine"]],
    ["This is my sister. ___ name is Aysel.",["Her","His","She","Hers"]],
    ["This is my brother. ___ lives in Ganja.",["He","Him","His","He's"]],
    ["«Whose phone is this?» «It's ___.»",["mine","my","me","I"]],
    ["I know Rashad, but I don't know ___ wife.",["his","him","he","he's"]],
    ["The dog is hungry. Give ___ some food.",["it","its","it's","they"]],
    ["The company changed ___ name last year.",["its","it's","it","its'"]],
    ["That isn't my car. My car is the blue ___.",["one","ones","it","this"]],
    ["___ shoes over there are very nice.",["Those","That","This","Them"]],
    ["He cut ___ in the kitchen.",["himself","him","his","hisself"]],
    ["This is ___ car. (qardaşımın)",["my brother's","my brother","brother's my","my brothers car"]],
    ["The ___ room is upstairs. (uşaqların)",["children's","childrens'","childs'","children"]],
    ["Is this bag ___?",["yours","your","you","yours'"]],
    ["We are going to ___ grandparents' house.",["our","us","ours","we"]]
  ],
  type:[
    ["«Look at ___ (o — qadın). She's very tall.»",["her"]],
    ["«___ (bizim) flat is small.»",["our"]],
    ["«This pen isn't mine. It's ___ (onunku — kişi).»",["his"]],
    ["«Did you make this cake ___ (özün)?»",["yourself"]],
    ["«___ is this umbrella?» (kimin)",["whose"]],
    ["«I don't like these shoes. I like the black ___.»",["ones"]],
    ["«Call ___ (onlar) tonight.»",["them"]],
    ["İngiliscə yaz: «Muradın maşını»",["murad's car"]],
    ["«___ (bu) apples are very sweet.»",["these"]],
    ["«They often talk about ___ (özləri).»",["themselves"]]
  ],
  fix:[
    ["Me and my brother live in Baku.",["my brother and i live in baku"]],
    ["This is the book of my friend.",["this is my friend's book"]],
    ["She loves his husband.",["she loves her husband"]],
    ["Is this your?",["is this yours"]],
    ["The cat is eating it's food.",["the cat is eating its food"]],
    ["Give it to I.",["give it to me"]],
    ["These book is interesting.",["this book is interesting"]]
  ],
  write:{task:"Ailəni təsvir et: hər kəsin adı, işi və əşyaları. his, her, their, -'s, mine/yours sözlərindən ən azı beşini işlət. 50–70 söz.", min:50},
  speak:{task:"Otağındakı 5 əşyanı göstərib danış: «This is my …, that is my brother's …, these are …». 60 saniyə.", secs:60},
  ref:"Murphy: Units 57–62, 72, 73 · English File: Grammar Bank 3B, 4A, 7B"
},
{ id:"g04", status:"ready", level:"A2", week:3, mins:45,
  title:"Past Simple, Past Continuous və used to",
  goal:"Keçmişdə olanları danışmaq: «etdim», «edirdim» və «əvvəllər edərdim, indi yox».",
  examples:[
    ["We met in 2019.","2019-cu ildə tanış olduq."],
    ["What were you doing at ten o'clock last night?","Dünən gecə saat onda nə edirdin?"],
    ["I was driving when you called.","Zəng edəndə maşın sürürdüm."],
    ["I used to live in Sumgait.","Əvvəllər Sumqayıtda yaşayırdım (indi yox)."]
  ],
  errors:[
    ["I goed to the market.","I went to the market.","go qaydasızdır: went."],
    ["Did you saw him?","Did you see him?","Did-dən sonra fel sadə formada qalır."],
    ["When I was arriving, the film started.","When I arrived, the film started.","Qısa, bir anlıq hadisə — Past Simple."],
    ["Yesterday I am very busy.","Yesterday I was very busy.","Keçmiş üçün was/were."],
    ["I use to play football.","I used to play football.","Təsdiq cümləsində used to (d ilə)."]
  ],
  mc:[
    ["I ___ my keys yesterday.",["lost","was losing","lose","losed"]],
    ["While I ___ dinner, the lights went out.",["was cooking","cooked","am cooking","cook"]],
    ["___ you enjoy the concert?",["Did","Were","Do","Was"]],
    ["They ___ football when it started to rain.",["were playing","played","was playing","are playing"]],
    ["She ___ to Istanbul three years ago.",["moved","was moving","moves","move"]],
    ["What ___ you doing at 7 this morning?",["were","did","was","are"]],
    ["I ___ smoke, but I stopped two years ago.",["used to","use to","was used","am used to"]],
    ["___ you use to play football at school?",["Did","Were","Do","Used"]],
    ["We ___ at home last night.",["were","was","did","are"]],
    ["When I saw the accident, I ___ the police.",["called","was calling","call","am calling"]],
    ["He ___ the answer, so he didn't say anything.",["didn't know","wasn't knowing","didn't knew","not knew"]],
    ["I ___ TV when you phoned.",["was watching","watched","were watching","am watching"]],
    ["The film ___ at 9 and finished at 11.",["started","was starting","start","starting"]],
    ["My grandfather ___ a lot of books when he was young.",["wrote","writed","was write","writes"]]
  ],
  type:[
    ["Keçmiş forma: buy →",["bought"]],
    ["Keçmiş forma: write →",["wrote"]],
    ["Keçmiş forma: stop →",["stopped"]],
    ["Keçmiş forma: study →",["studied"]],
    ["Keçmiş forma: think →",["thought"]],
    ["«I ___ (not/sleep) well last night.»",["didn't sleep","did not sleep"]],
    ["«He ___ (read) when I came in.»",["was reading"]],
    ["Sual qur: «You saw Leyla.»",["did you see leyla"]],
    ["«I ___ (use to) live in Sumgait, but now I live in Baku.»",["used to"]],
    ["«What ___ (you/do) at 10 last night?»",["were you doing"]]
  ],
  fix:[
    ["I didn't knew the answer.",["i didn't know the answer","i did not know the answer"]],
    ["We was watching TV when he called.",["we were watching tv when he called"]],
    ["She buyed a new dress.",["she bought a new dress"]],
    ["Did you saw him?",["did you see him"]],
    ["I use to play tennis when I was a child.",["i used to play tennis when i was a child"]],
    ["While I was walking, I was seeing an old friend.",["while i was walking i saw an old friend","while i was walking, i saw an old friend"]]
  ],
  write:{task:"Yadda qalan bir günü danış (səyahət, toy, imtahan günü). 70–90 söz. Ən azı bir dəfə «when» və ya «while» ilə Past Continuous, bir dəfə də used to işlət.", min:70},
  speak:{task:"«Tell me about your childhood.» — 90 saniyə: harada yaşayırdın, nə edərdin (used to), yadında qalan bir hadisə (Past Simple + Past Continuous).", secs:90},
  ref:"Murphy: Units 10–15, 23 · English File: Grammar Bank 10B, 11A, 11B, 12A"
},
{ id:"g23", status:"ready", level:"A2", week:3, mins:30,
  title:"Əmr, xahiş və təklif: Do!/Don't!, Let's, Would you like, I'd rather",
  goal:"Əmr və qadağa vermək, təklif etmək, nəzakətlə istəmək və üstünlük bildirmək.",
  examples:[
    ["Please sit down.","Zəhmət olmasa, oturun."],
    ["Don't forget your keys.","Açarlarını unutma."],
    ["Let's have lunch together.","Gəl birlikdə nahar edək."],
    ["Would you like some tea? — Yes, please.","Çay istəyirsən? — Bəli, zəhmət olmasa."],
    ["I'd rather stay at home tonight.","Bu axşam evdə qalmağı üstün tuturam."]
  ],
  errors:[
    ["Don't to worry.","Don't worry.","Don't-dan sonra to yoxdur."],
    ["Would you like go out?","Would you like to go out?","Would you like + to + fel."],
    ["I'd rather to walk.","I'd rather walk.","I'd rather-dən sonra to yoxdur."],
    ["Let's to start.","Let's start.","Let's-dən sonra to yoxdur."],
    ["Not open the door.","Don't open the door.","Qadağa: Don't + fel."]
  ],
  mc:[
    ["___ the door, please. It's cold.",["Close","Closes","To close","You closing"]],
    ["___ touch that! It's hot.",["Don't","Not","No","Doesn't"]],
    ["It's a nice day. ___ go for a walk.",["Let's","Let","Lets go","We let's"]],
    ["___ you like a cup of tea?",["Would","Do","Are","Will"]],
    ["I'd like ___ a room for two nights.",["to book","book","booking","booked"]],
    ["«Would you like some cake?» «___»",["Yes, please.","Yes, I like.","Yes, I would like.","Yes, I'd."]],
    ["I'm tired. I'd rather ___ at home tonight.",["stay","to stay","staying","stayed"]],
    ["«Do you want to go out?» «No, I'd rather ___.»",["not","don't","not to","no"]],
    ["___ we take a taxi? It's late.",["Shall","Would","Let's","Are"]],
    ["«___ you like tennis?» «Yes, I play every week.»",["Do","Would","Are","Shall"]],
    ["Let's ___ out tonight. We have an exam tomorrow.",["not go","don't go","no go","not to go"]],
    ["I'd rather walk ___ take the bus.",["than","that","then","as"]],
    ["«Would you like to come to my party?» «I'd love ___!»",["to","it","that","for"]]
  ],
  type:[
    ["Qadağa et: «Smoke here.»",["don't smoke here","do not smoke here"]],
    ["Let's ilə təklif qur: «we / watch a film»",["let's watch a film"]],
    ["Nəzakətlə istə (I'd like): «I want a glass of water.»",["i'd like a glass of water","i would like a glass of water"]],
    ["Təklif sualı qur (Would): «you / like / some coffee»",["would you like some coffee"]],
    ["«I'd rather ___ (walk).»",["walk"]],
    ["«___ (sit) down, please.»",["sit"]],
    ["«Would you like ___ (eat) something?»",["to eat"]],
    ["İnkar et: «Let's go out.»",["let's not go out"]],
    ["«Shall I ___ (open) the window?»",["open"]]
  ],
  fix:[
    ["Don't to worry.",["don't worry","do not worry"]],
    ["Would you like go to the cinema?",["would you like to go to the cinema"]],
    ["I'd rather to stay at home.",["i'd rather stay at home","i would rather stay at home"]],
    ["Let's to start the lesson.",["let's start the lesson"]],
    ["Not open the window.",["don't open the window","do not open the window"]],
    ["I'd like buy two tickets.",["i'd like to buy two tickets","i would like to buy two tickets"]]
  ],
  write:{task:"Evinə qonaq gələn dosta qeyd yaz: nə etsin (əmr), nə etməsin (Don't), nə təklif edirsən (Would you like…? Let's…). 50–70 söz.", min:50},
  speak:{task:"Kafedəsən: ofisiantla danış — nə istədiyini de (I'd like…), dostuna təklif et (Would you like…? Let's…). 60 saniyə.", secs:60},
  ref:"Murphy: Units 32–34 · English File: Grammar Bank 7B"
},
{ id:"g05", status:"ready", level:"A2", week:4, mins:40,
  title:"Gələcək: will, be going to, Present Continuous",
  goal:"Plan, ani qərar, söz, proqnoz və razılaşdırılmış görüş üçün düz gələcək formasını seçmək.",
  examples:[
    ["I'm going to start a new course in January.","Yanvarda yeni kursa başlayacağam (planım var)."],
    ["Don't worry, I'll help you.","Narahat olma, sənə kömək edərəm."],
    ["We're flying to Tbilisi on Friday.","Cümə günü Tbilisiyə uçuruq (bilet alınıb)."],
    ["I'll call you when I get home.","Evə çatanda sənə zəng edəcəm."]
  ],
  errors:[
    ["I will to go.","I will go.","will-dən sonra to yoxdur."],
    ["When I will arrive, I call you.","When I arrive, I'll call you.","when/if-dən sonra Present Simple."],
    ["I go to visit my aunt tomorrow — I decided last week.","I'm going to visit my aunt tomorrow.","Əvvəlcədən plan — going to."],
    ["She will comes.","She will come.","will-dən sonra fel -s almır."],
    ["I going to buy it.","I'm going to buy it.","going to-dan əvvəl am/is/are lazımdır."]
  ],
  mc:[
    ["A: We have no milk. B: OK, I ___ buy some.",["'ll","'m going to","am buying","buy"]],
    ["She has booked a table. They ___ dinner at 8 tonight.",["are having","have","having","has"]],
    ["Look at those black clouds! It ___ rain.",["is going to","going to","rains","is raining to"]],
    ["I'll text you as soon as I ___.",["arrive","will arrive","am going to arrive","arrived"]],
    ["I think the exam ___ difficult.",["will be","is being","is going be","be"]],
    ["What ___ you going to do after university?",["are","will","do","is"]],
    ["The train ___ at 6:15 tomorrow morning. (cədvəl)",["leaves","is leave","leave","will leaving"]],
    ["«I'm cold.» «I ___ close the window.»",["'ll","close","closed","am close"]],
    ["I don't think it ___ tomorrow.",["will rain","won't rain","raining","rain"]],
    ["If it ___ tomorrow, we'll stay at home.",["rains","will rain","is going to rain","rained"]],
    ["We ___ to Tbilisi next Friday. We have our tickets.",["are flying","fly","will to fly","flying"]],
    ["He ___ be at work tomorrow. He's on holiday.",["won't","doesn't","isn't","not will"]],
    ["___ you help me with this bag, please?",["Will","Are","Do","Shall"]]
  ],
  type:[
    ["«I ___ (not/be) late, I promise.» (will)",["won't be","will not be"]],
    ["«We ___ (move) to a new flat next month. Everything is planned.» (going to)",["are going to move","'re going to move"]],
    ["«If it ___ (rain), we'll stay at home.»",["rains"]],
    ["Sual qur (going to): «you / study / tonight»",["are you going to study tonight"]],
    ["«When I ___ (finish) the course, I'll take the exam.»",["finish"]],
    ["«The phone is ringing. I ___ (answer) it.»",["'ll answer","will answer"]],
    ["«I ___ (meet) Anar at 6 tomorrow. We arranged it yesterday.»",["am meeting","'m meeting"]],
    ["İnkar et: «She is going to buy a car.»",["she isn't going to buy a car","she is not going to buy a car","she's not going to buy a car"]]
  ],
  fix:[
    ["I will to call you later.",["i will call you later","i'll call you later"]],
    ["When she will come, we will start.",["when she comes we will start","when she comes we'll start"]],
    ["Are you go to buy a car?",["are you going to buy a car"]],
    ["She will comes tomorrow.",["she will come tomorrow","she'll come tomorrow"]],
    ["I going to visit my aunt.",["i'm going to visit my aunt","i am going to visit my aunt"]],
    ["If I will see him, I'll tell him.",["if i see him i'll tell him","if i see him i will tell him"]]
  ],
  write:{task:"Gələn 6 ay üçün planlarını yaz (iş, ingilis dili, səyahət). 70–90 söz. going to, will və Present Continuous-un hər birindən ən azı bir dəfə; bir dəfə də «when + Present Simple».", min:70},
  speak:{task:"«What are your plans for next year?» — 90 saniyə. Planları (going to) və proqnozları (I think … will …) ayır.", secs:90},
  ref:"Murphy: Units 24–26, 96, 97 (English File Beginner-də bu mövzu yoxdur)"
},
{ id:"g19", status:"ready", level:"A2", week:5, mins:30,
  title:"there is / there are və it",
  goal:"«Burada … var» demək (there is/are, there was/were, there will be) və it ilə hava, vaxt, məsafə demək.",
  examples:[
    ["There's a good cafe near my office.","Ofisimin yaxınlığında yaxşı kafe var."],
    ["There are two bedrooms in the flat.","Mənzildə iki yataq otağı var."],
    ["There were a lot of people at the wedding.","Toyda çoxlu adam var idi."],
    ["It's very windy today.","Bu gün çox küləklidir."]
  ],
  errors:[
    ["In my room have a big bed.","There is a big bed in my room.","Bir yerdə «var» — there is."],
    ["There is two cars outside.","There are two cars outside.","Cəm üçün there are."],
    ["Is very hot today.","It's very hot today.","Hava üçün it lazımdır."],
    ["It is a problem with my phone.","There is a problem with my phone.","«Problem var» — there is."],
    ["Yes, there's.","Yes, there is.","Qısa cavabda qısaltma yoxdur."]
  ],
  mc:[
    ["___ a bank near my house.",["There's","It's","There are","Has"]],
    ["___ two bedrooms in our flat.",["There are","There is","They are","It has"]],
    ["___ any eggs in the fridge?",["Are there","Is there","Have","There are"]],
    ["___ a lot of people at the concert last night.",["There were","There was","It was","They were"]],
    ["«Is there a pharmacy near here?» «Yes, ___.»",["there is","it is","there's","is"]],
    ["___ cold today. Take a jacket.",["It's","There's","Is","It has"]],
    ["There's a new cafe on our street. ___ very nice.",["It's","There's","They're","Is"]],
    ["How many students ___ in your class?",["are there","there are","is there","have"]],
    ["___ a meeting tomorrow at 10.",["There will be","It will be","There will","Will be"]],
    ["___ any milk. Can you buy some?",["There isn't","It isn't","There aren't","Isn't"]],
    ["___ far from here to the airport?",["Is it","Is there","Does it","There is"]],
    ["My city ___ a beautiful old mosque.",["has","there is","is","have"]],
    ["___ no chairs in the room.",["There were","There was","It were","They was"]],
    ["___ nice to see you again.",["It's","There's","This","Is"]]
  ],
  type:[
    ["Sual qur: «There is a supermarket near here.»",["is there a supermarket near here"]],
    ["«___ three windows in my room.»",["there are"]],
    ["İnkar et: «There is a TV in the room.»",["there isn't a tv in the room","there is not a tv in the room","there's no tv in the room","there is no tv in the room"]],
    ["Keçmişə çevir: «There are many people.»",["there were many people"]],
    ["Gələcəyə çevir (will): «There is a test.»",["there will be a test"]],
    ["«___ 8 o'clock. We're late!»",["it's","it is"]],
    ["Qısa cavab: «Are there any shops here?» «No, ___.»",["there aren't","there are not"]],
    ["«How many people ___ (var idi) at the party?»",["were there"]],
    ["«___ (yağış yağır) again.» — iki söz",["it's raining","it is raining"]]
  ],
  fix:[
    ["There is two cars outside.",["there are two cars outside"]],
    ["In my room have a big bed.",["there is a big bed in my room","there's a big bed in my room","in my room there is a big bed","in my room there's a big bed"]],
    ["Is very hot today.",["it's very hot today","it is very hot today"]],
    ["There was many people.",["there were many people"]],
    ["Is there any eggs?",["are there any eggs"]],
    ["It is a problem with my phone.",["there is a problem with my phone","there's a problem with my phone"]]
  ],
  write:{task:"Yaşadığın küçəni və ya rayonu təsvir et: nə var, nə yoxdur, əvvəllər nə var idi, gələcəkdə nə olacaq. 60–80 söz.", min:60},
  speak:{task:"«Describe your home town.» — 60 saniyə: There is/are…, There was…, It's… (hava, məsafə) işlət.", secs:60},
  ref:"Murphy: Units 35–37 · English File: Grammar Bank 10A"
},
{ id:"g06", status:"ready", level:"A2", week:5, mins:45,
  title:"İsimlər, artikllar (a/an/the), some/any, much/many, a few/a little",
  goal:"Sayılan/sayılmayan isimləri ayırmaq, a/an/the-ni və miqdar sözlərini düz işlətmək.",
  examples:[
    ["Can you give me some advice?","Mənə məsləhət verə bilərsən?"],
    ["There isn't much time.","Çox vaxt yoxdur."],
    ["I have a few friends in London.","Londonda bir neçə dostum var."],
    ["I bought a lamp. The lamp was cheap.","Bir lampa aldım. Lampa ucuz idi."]
  ],
  errors:[
    ["I need an information.","I need some information.","information sayılmır: a/an almır."],
    ["How much people came?","How many people came?","people sayılandır — many."],
    ["The life is beautiful.","Life is beautiful.","Ümumi mənada artikl yoxdur."],
    ["She is engineer.","She is an engineer.","Peşədən əvvəl a/an lazımdır."],
    ["I go to the work by bus.","I go to work by bus.","go to work — artiklsız."]
  ],
  mc:[
    ["We don't have ___ milk left.",["much","many","a few","a"]],
    ["There are ___ apples on the table.",["some","much","a little","an"]],
    ["He is ___ honest man.",["an","a","the","—"]],
    ["Could I have ___ water, please?",["some","a","many","an"]],
    ["I've got ___ questions for you.",["a few","a little","much","an"]],
    ["___ moon goes around the Earth.",["The","A","An","—"]],
    ["I need ___ information about the course.",["some","an","many","a few"]],
    ["How ___ people were at the meeting?",["many","much","a lot","few of"]],
    ["My sister is ___ nurse.",["a","an","the","—"]],
    ["I usually go to ___ bed at 11.",["—","the","a","an"]],
    ["___ is beautiful.",["Life","The life","A life","Lives"]],
    ["There's ___ sugar in my tea — just one spoon.",["a little","a few","many","a"]],
    ["We stayed at ___ hotel. ___ hotel was very clean.",["a … The","the … A","a … A","an … The"]],
    ["Ten ___ were at the meeting.",["women","womans","woman","womens"]],
    ["Can you buy ___ bread on your way home?",["some","a","an","many"]]
  ],
  type:[
    ["a / an: «___ umbrella»",["an"]],
    ["a / an: «___ university»",["a"]],
    ["a / an: «___ hour»",["an"]],
    ["much / many: «How ___ money do you need?»",["much"]],
    ["Cəm forma: «child» →",["children"]],
    ["Cəm forma: «city» →",["cities"]],
    ["Cəm forma: «person» →",["people"]],
    ["some / any: «Are there ___ shops near here?»",["any"]],
    ["«I have ___ (bir neçə) friends in Ganja.» — iki söz",["a few"]]
  ],
  fix:[
    ["She gave me many advices.",["she gave me a lot of advice","she gave me some advice","she gave me lots of advice"]],
    ["I bought a new furniture.",["i bought some new furniture","i bought new furniture"]],
    ["My brother is doctor.",["my brother is a doctor"]],
    ["The life is hard.",["life is hard"]],
    ["How much people live here?",["how many people live here"]],
    ["I have a news for you.",["i have some news for you","i have news for you"]],
    ["She has two childs.",["she has two children"]]
  ],
  write:{task:"Mətbəxini və ya otağını təsvir et: nə var, nə yoxdur, nədən çoxdur, nədən azdır. 60–80 söz. a/an, the, some, any, much, many, a few, a little işlət.", min:60},
  speak:{task:"«Describe your favourite place to shop.» — 60 saniyə: orada nələr var, qiymətlər, insanlar.", secs:60},
  ref:"Murphy: Units 63–71, 74, 81, 82 · English File: Grammar Bank 3A, 10A"
},
{ id:"g07", status:"ready", level:"A2", week:6, mins:35,
  title:"Müqayisə: comparative və superlative",
  goal:"İki şeyi müqayisə etmək (-er / more … than), «ən» demək (the -est / the most) və as … as işlətmək.",
  examples:[
    ["The train is faster than the bus.","Qatar avtobusdan sürətlidir."],
    ["This is the most interesting book in the library.","Bu, kitabxanadakı ən maraqlı kitabdır."],
    ["My English is better than last year.","İngiliscəm keçən ildən yaxşıdır."],
    ["The flat isn't as big as I expected.","Mənzil gözlədiyim qədər böyük deyil."]
  ],
  errors:[
    ["He is more tall than me.","He is taller than me.","Qısa sifət -er alır."],
    ["This is the more expensive hotel in the city.","This is the most expensive hotel in the city.","«Ən» — the most."],
    ["She is gooder than him.","She is better than him.","good qaydasızdır: better."],
    ["It's bigger that I thought.","It's bigger than I thought.","Müqayisədə than."],
    ["It's very cheaper.","It's much cheaper.","Müqayisədən əvvəl very yox, much / a bit."]
  ],
  mc:[
    ["Summer here is ___ than spring.",["hotter","more hot","hottest","the hotter"]],
    ["This is ___ day of my life!",["the best","the better","the goodest","best"]],
    ["Online courses are often ___ than classes.",["cheaper","more cheap","cheapest","the cheaper"]],
    ["My new job is ___ interesting than my old one.",["much more","more much","most","very more"]],
    ["Ali is not ___ tall as his brother.",["as","than","so much","more"]],
    ["Mount Everest is ___ mountain in the world.",["the highest","the higher","highest","the most high"]],
    ["My English is ___ than last year.",["better","gooder","more good","best"]],
    ["This is ___ expensive phone in the shop.",["the most","the more","most","more"]],
    ["The weather today is ___ than yesterday. (bad)",["worse","badder","more bad","worst"]],
    ["She is a bit ___ than her sister.",["older","more old","oldest","the older"]],
    ["My phone is the same ___ yours.",["as","than","like as","that"]],
    ["He is the ___ person in our family.",["funniest","funnyest","most funny","funnier"]],
    ["The bus is ___ comfortable than the train.",["less","least","fewer","the less"]]
  ],
  type:[
    ["Comparative: happy →",["happier"]],
    ["Comparative: big →",["bigger"]],
    ["Comparative: bad →",["worse"]],
    ["Superlative: important →",["the most important","most important"]],
    ["Superlative: good →",["the best","best"]],
    ["«The metro is ___ (fast) than a taxi in the morning.»",["faster"]],
    ["«This book is ___ (interesting) than that one.»",["more interesting"]],
    ["«Baku is ___ (big) city in Azerbaijan.»",["the biggest"]]
  ],
  fix:[
    ["This test was more easy than the last one.",["this test was easier than the last one"]],
    ["He is the most fast runner in our team.",["he is the fastest runner in our team"]],
    ["My car is as old than yours.",["my car is as old as yours"]],
    ["She is more tall than me.",["she is taller than me","she is taller than i am"]],
    ["This is the better restaurant in town.",["this is the best restaurant in town"]],
    ["It's very cheaper here.",["it's much cheaper here","it is much cheaper here","it's a lot cheaper here","it is a lot cheaper here","it's a bit cheaper here","it is a bit cheaper here"]]
  ],
  write:{task:"İki şəhəri (məs. Bakı və Gəncə və ya Bakı və İstanbul) müqayisə et: ölçü, qiymətlər, nəqliyyat, hava. 80–100 söz. -er, more, the most, as … as işlət.", min:80},
  speak:{task:"«Is it better to live in a big city or a small town?» — 90 saniyə: müqayisə et və öz seçimini səbəblə de.", secs:90},
  ref:"Murphy: Units 85–88"
},
{ id:"g24", status:"ready", level:"A2", week:6, mins:35,
  title:"Sifət və zərf: quick/quickly, good/well, too, enough",
  goal:"«necə şey?» (sifət) ilə «necə edir?» (zərf) fərqini bilmək, too və enough-u düz işlətmək.",
  examples:[
    ["She is a careful driver. She drives carefully.","O ehtiyatlı sürücüdür. Ehtiyatla sürür."],
    ["You speak English well.","İngiliscə yaxşı danışırsan."],
    ["This bag is too heavy.","Bu çanta çox ağırdır (götürə bilmirəm)."],
    ["Is the room big enough for four people?","Otaq dörd nəfər üçün kifayət qədər böyükdür?"]
  ],
  errors:[
    ["He speaks English very good.","He speaks English very well.","İş necə edilir — zərf: well."],
    ["She drove careful.","She drove carefully.","Fel haqqında: -ly."],
    ["I am boring in this lesson.","I am bored in this lesson.","Hiss edən insan: -ed."],
    ["He isn't enough old.","He isn't old enough.","enough sifətdən SONRA gəlir."],
    ["It's too much expensive.","It's too expensive.","too + sifət (much lazım deyil)."]
  ],
  mc:[
    ["He drives very ___.",["carefully","careful","carefuly","more careful"]],
    ["She speaks English very ___.",["well","good","goodly","best"]],
    ["This soup tastes ___.",["good","well","goodly","nicely"]],
    ["You look ___. Are you OK?",["tired","tiredly","tiring","tire"]],
    ["I can't buy it. It's ___ expensive.",["too","enough","very much","to"]],
    ["He isn't old ___ to drive.",["enough","too","very","so"]],
    ["We don't have ___ for a taxi.",["enough money","money enough","too money","enough of money"]],
    ["The film was very ___. I almost fell asleep.",["boring","bored","bore","boringly"]],
    ["I was ___ in the lesson, so I asked many questions.",["interested","interesting","interest","interestingly"]],
    ["He works very ___. He never stops.",["hard","hardly","hardy","harder"]],
    ["Please speak more ___. I don't understand.",["slowly","slow","slowest","slowness"]],
    ["The box is ___ heavy for me to carry.",["too","enough","very much","so much"]],
    ["It's a ___ day today.",["beautiful","beautifully","beauty","beautifuls"]],
    ["She sings ___.",["beautifully","beautiful","beautifuly","beauty"]]
  ],
  type:[
    ["Zərf yaz: quick →",["quickly"]],
    ["Zərf yaz: easy →",["easily"]],
    ["Zərf yaz: good →",["well"]],
    ["Zərf yaz: terrible →",["terribly"]],
    ["«He is a fast driver.» → «He drives ___.»",["fast"]],
    ["«I'm not tall ___ to reach the top shelf.»",["enough"]],
    ["«The tea is ___ hot to drink. Wait a minute.»",["too"]],
    ["«The lesson was ___ (bore). I wanted to sleep.»",["boring"]],
    ["«Do you have ___ time?» (kifayət qədər)",["enough"]]
  ],
  fix:[
    ["He speaks English very good.",["he speaks english very well"]],
    ["She drove careful.",["she drove carefully"]],
    ["He isn't enough old.",["he isn't old enough","he is not old enough"]],
    ["I have money enough.",["i have enough money"]],
    ["You look sadly.",["you look sad"]],
    ["It's too much expensive.",["it's too expensive","it is too expensive"]]
  ],
  write:{task:"Tanıdığın bir insanı təsvir et: necə insandır (sifət) və işləri necə edir (zərf). too və enough-dan bir dəfə işlət. 60–80 söz.", min:60},
  speak:{task:"«Describe a good teacher.» — 60 saniyə: necə müəllimdir və necə izah edir, necə danışır (zərflər).", secs:60},
  ref:"Murphy: Units 83, 84, 89, 90 · English File: Grammar Bank 4B"
},
{ id:"g08", status:"ready", level:"A2", week:7, mins:45,
  title:"Present Perfect və Past Simple; already, yet, still",
  goal:"«Vaxtı demədən: etmişəm» (Present Perfect) ilə «vaxtı bəlli: etdim» (Past Simple) fərqini bilmək.",
  examples:[
    ["Have you ever been to London? — Yes, I went there in 2023.","Londonda olmusan? — Bəli, 2023-də getdim."],
    ["I've worked here since March.","Martdan bəri burada işləyirəm."],
    ["She has just finished her homework.","Ev tapşırığını indicə bitirdi."],
    ["We haven't decided yet.","Hələ qərar verməmişik."]
  ],
  errors:[
    ["I have seen him yesterday.","I saw him yesterday.","yesterday — vaxt bəllidir → Past Simple."],
    ["I live here for three years.","I have lived here for three years.","İndiyə qədər davam edir → have + V3."],
    ["Did you ever eat sushi?","Have you ever eaten sushi?","Həyat təcrübəsi sualı — have + V3."],
    ["She has went home.","She has gone home.","has + V3 (gone)."],
    ["I haven't seen her since three weeks.","I haven't seen her for three weeks.","Müddət — for; başlanğıc nöqtə — since."]
  ],
  mc:[
    ["I ___ this film three times.",["have seen","saw","see","have saw"]],
    ["We ___ to Sheki last summer.",["went","have gone","have been","go"]],
    ["He has worked here ___ 2020.",["since","for","from","ago"]],
    ["___ you finished the report yet?",["Have","Did","Has","Do"]],
    ["They got married five years ___.",["ago","since","for","before"]],
    ["I've never ___ a horse.",["ridden","rode","ride","riding"]],
    ["Ali isn't here. He ___ to the bank.",["has gone","has been","have gone","is gone"]],
    ["I haven't finished my homework ___.",["yet","already","still","just"]],
    ["«Would you like lunch?» «No, thanks. I've ___ eaten.»",["already","yet","still","ever"]],
    ["___ you ever been to London?",["Have","Did","Were","Do"]],
    ["We have known each other ___ ten years.",["for","since","ago","during"]],
    ["When ___ you buy your car?",["did","have","has","do"]],
    ["I have ___ seen Ramil in the street. He says hello.",["just","yet","ever","since"]],
    ["She ___ in Baku since she was a child.",["has lived","lives","lived","is living"]],
    ["It's 2 o'clock and he is ___ sleeping.",["still","yet","already","ever"]]
  ],
  type:[
    ["V3 forması: write →",["written"]],
    ["V3 forması: eat →",["eaten"]],
    ["V3 forması: go →",["gone","been"]],
    ["for / since: «___ two hours»",["for"]],
    ["for / since: «___ Monday»",["since"]],
    ["«I ___ (lose) my wallet. Can you lend me some money?»",["have lost","'ve lost"]],
    ["«She ___ (call) me an hour ago.»",["called"]],
    ["Sual qur: «You have been to Istanbul.»",["have you been to istanbul"]],
    ["İnkar et və yet əlavə et: «I have finished.»",["i haven't finished yet","i have not finished yet"]]
  ],
  fix:[
    ["I have bought this car in 2021.",["i bought this car in 2021"]],
    ["How long do you know him?",["how long have you known him"]],
    ["Have you went to Paris?",["have you been to paris"]],
    ["I have seen him yesterday.",["i saw him yesterday"]],
    ["I live here for three years.",["i have lived here for three years","i've lived here for three years"]],
    ["Did you ever eat sushi?",["have you ever eaten sushi"]],
    ["She has went home.",["she has gone home","she's gone home"]],
    ["I haven't seen her since three weeks.",["i haven't seen her for three weeks","i have not seen her for three weeks"]]
  ],
  write:{task:"«My English journey»: indiyə qədər nə etmisən (Present Perfect) və konkret vaxtlarda nə baş verib (Past Simple). already, yet, for, since işlət. 80–100 söz.", min:80},
  speak:{task:"«Have you ever …?» sualları ilə özünə 4 sual ver və cavab ver: vaxtı deyəndə Past Simple-a keç.", secs:90},
  ref:"Murphy: Units 16–19, 93"
},
{ id:"g09", status:"ready", level:"A2", week:8, mins:40,
  title:"Modal fellər: can, could, must, have to, should, might",
  goal:"Bacarıq, icazə, məcburiyyət, məsləhət və ehtimal bildirmək.",
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
    ["Do you can help me?","Can you help me?","Modal özü qabağa keçir, do lazım deyil."],
    ["I musted work yesterday.","I had to work yesterday.","must-un keçmişi yoxdur — had to."]
  ],
  mc:[
    ["You look tired. You ___ go to bed early.",["should","must to","have","can to"]],
    ["Children ___ play with matches. It's dangerous.",["mustn't","don't have to","shouldn't to","can"]],
    ["Tomorrow is a holiday, so we ___ get up early.",["don't have to","mustn't","can't to","haven't"]],
    ["___ you open the window, please?",["Could","Must","Should","Might"]],
    ["Take an umbrella. It ___ rain.",["might","must","has to","should to"]],
    ["When I was five, I ___ read.",["could","can","might","must"]],
    ["She ___ wear a uniform at work. It's the rule.",["has to","have to","must to","is have to"]],
    ["I ___ go to the doctor yesterday.",["had to","must","have to","musted"]],
    ["___ I use your phone? Mine is dead.",["Can","Do","Have","Am"]],
    ["___ to wear a tie at your job?",["Do you have","Have you","Must you","Do you must"]],
    ["I'm not sure. I ___ come to the party.",["might not","mustn't","don't have","can't to"]],
    ["He can ___ three languages.",["speak","speaks","to speak","speaking"]],
    ["You ___ tell anyone. It's a secret!",["mustn't","don't have to","don't must","not must"]]
  ],
  type:[
    ["Keçmiş forma: «I ___ (have to) work yesterday.»",["had to"]],
    ["Qadağa et: «You must smoke here.» → olmaz",["you mustn't smoke here","you must not smoke here"]],
    ["Nəzakətli xahiş: «___ you help me?» (could/must)",["could"]],
    ["«She ___ (can/not) come because she is ill.»",["can't","cannot","can not"]],
    ["«She ___ (have to) get up at 6 every day.»",["has to"]],
    ["Sual qur: «He can swim.»",["can he swim"]],
    ["«You ___ (should/not) eat so much sugar.»",["shouldn't","should not"]],
    ["İnkar et (lazım deyil): «I have to work on Sunday.»",["i don't have to work on sunday","i do not have to work on sunday"]],
    ["Keçmişə çevir: «I can't sleep.»",["i couldn't sleep","i could not sleep"]]
  ],
  fix:[
    ["She cans drive.",["she can drive"]],
    ["We must to finish today.",["we must finish today"]],
    ["You should to see a doctor.",["you should see a doctor"]],
    ["Do you can help me?",["can you help me"]],
    ["I musted work late yesterday.",["i had to work late yesterday"]],
    ["He have to go now.",["he has to go now"]],
    ["I don't can swim.",["i can't swim","i cannot swim","i can not swim"]]
  ],
  write:{task:"İngilis dili öyrənən dostuna məsləhət məktubu yaz: nə etməlidir (should), nə məcburidir (have to), nə lazım deyil (don't have to), nə olmaz (mustn't). 80–100 söz.", min:80},
  speak:{task:"«What are the rules at your workplace?» — 60 saniyə: have to, must, mustn't, can, don't have to işlət.", secs:60},
  ref:"Murphy: Units 27–31 · English File: Grammar Bank 8A"
},
{ id:"g25", status:"ready", level:"A2", week:8, mins:35,
  title:"somebody/anything/nothing, every/all, both/either/neither",
  goal:"«kimsə, heç kim, hər kəs, bütün, ikisi də, heç biri» sözlərini düz işlətmək.",
  examples:[
    ["Somebody left a bag in the office.","Kimsə ofisdə çanta qoyub getdi."],
    ["Nobody called me today.","Bu gün heç kim mənə zəng etmədi."],
    ["Everybody is ready.","Hamı hazırdır."],
    ["Both of my brothers live abroad.","Qardaşlarımın ikisi də xaricdə yaşayır."]
  ],
  errors:[
    ["Nobody didn't come.","Nobody came.","nobody özü inkardır — ikinci inkar olmur."],
    ["I didn't see nobody.","I didn't see anybody.","didn't varsa — anybody."],
    ["Everybody are here.","Everybody is here.","everybody tək sayılır: is."],
    ["Every students have a book.","Every student has a book.","every + tək isim."],
    ["Both of us is tired.","Both of us are tired.","both = iki nəfər: are."]
  ],
  mc:[
    ["There's ___ at the door. Can you open it?",["somebody","anybody","nobody","everybody"]],
    ["I didn't buy ___ at the market.",["anything","nothing","nobody","anybody"]],
    ["___ called me today.",["Nobody","Anybody","Somebody didn't","Not anybody"]],
    ["«What did you do yesterday?» «___. I stayed at home and rested.»",["Nothing","Anything","Nobody","Anywhere"]],
    ["___ student has a book.",["Every","All","Both","Most"]],
    ["___ the students passed the exam.",["All","Every","Everybody","No"]],
    ["Everybody ___ happy today.",["is","are","be","am"]],
    ["I have two brothers. ___ of them live in Baku.",["Both","Either","Neither","Every"]],
    ["«Tea or coffee?» «___ — I don't mind.»",["Either","Both","Neither","All"]],
    ["___ of my parents speaks English. They only speak Azerbaijani.",["Neither","Both","Either","All"]],
    ["I looked for my keys, but they weren't ___.",["anywhere","somewhere","nowhere","no where"]],
    ["«How many eggs are there?» «___. We need to buy some.»",["None","No","Not any","Nothing"]],
    ["There's ___ milk in the fridge.",["no","any","none","not"]],
    ["___ day I walk to work.",["Every","All","Both","Each of"]]
  ],
  type:[
    ["«I can't see ___ (heç kim).»",["anybody","anyone"]],
    ["«___ (Heç kim) knows the answer.»",["nobody","no one","no-one"]],
    ["«Is there ___ (bir şey) in the box?»",["anything"]],
    ["«There's ___ (bir şey) in my eye.»",["something"]],
    ["«I spent ___ day at home.» (bütün)",["all"]],
    ["«___ (Hamı) is here. Let's start.»",["everybody","everyone"]],
    ["«I have two cars. ___ of them are old.» (ikisi də)",["both"]],
    ["«There are ___ (heç bir) chairs in the room.»",["no"]],
    ["«___ of my two sisters is married.» (heç biri)",["neither"]]
  ],
  fix:[
    ["Nobody didn't come.",["nobody came"]],
    ["I didn't see nobody.",["i didn't see anybody","i didn't see anyone","i saw nobody","i did not see anybody","i did not see anyone"]],
    ["Everybody are here.",["everybody is here","everyone is here"]],
    ["Every students have a book.",["every student has a book","all students have a book","all the students have a book"]],
    ["I didn't do nothing.",["i didn't do anything","i did nothing","i did not do anything"]],
    ["Both of us is tired.",["both of us are tired"]],
    ["There isn't no bread.",["there isn't any bread","there is no bread","there's no bread","there is not any bread"]]
  ],
  write:{task:"İş yerini və ya ailəni təsvir et: everybody, nobody, somebody, all, both, neither sözlərindən ən azı beşini işlət. 60–80 söz.", min:60},
  speak:{task:"«Describe your family.» — 60 saniyə: Both of my…, Neither of…, Everybody in my family…, Nobody… işlət.", secs:60},
  ref:"Murphy: Units 74–80"
},
{ id:"g21", status:"ready", level:"A2", week:9, mins:40,
  title:"Suallar: Who called? Who did you call? Do you know where…?",
  goal:"Bütün sual növlərini düz qurmaq: sual sözləri, «kim etdi?» sualı, sonda ön söz, dolayı sual.",
  examples:[
    ["Who called you this morning?","Səhər sənə kim zəng etdi?"],
    ["Who did you call this morning?","Səhər kimə zəng etdin?"],
    ["Where are you from?","Haralısan?"],
    ["Do you know where the post office is?","Poçtun harada olduğunu bilirsən?"]
  ],
  errors:[
    ["Who did call you?","Who called you?","«Kim» işi görürsə, did lazım deyil."],
    ["Where you are from?","Where are you from?","Sualda are qabağa keçir."],
    ["Do you know where is the bank?","Do you know where the bank is?","Dolayı sualda sıra adi cümlə kimidir."],
    ["What means this word?","What does this word mean?","Adi feldə do/does lazımdır."],
    ["How long it takes?","How long does it take?","Sualda does lazımdır."]
  ],
  mc:[
    ["«Who ___ the window?» «Tom did.»",["broke","did break","did broke","was break"]],
    ["Who ___ you meet at the party?",["did","were","are","does"]],
    ["What ___? Why is everybody laughing?",["happened","did happen","did it happen","happens"]],
    ["«Where are you ___?» «I'm from Ganja.»",["from","to","at","in"]],
    ["What is your new flat ___? Is it big?",["like","as","how","likes"]],
    ["«___ do you go to the gym?» «Twice a week.»",["How often","How long","How much","When often"]],
    ["___ does it take to get to the airport?",["How long","How much","How far","How often"]],
    ["Do you know where ___?",["the station is","is the station","does the station","the station does"]],
    ["___ bus goes to the centre — number 5 or number 12?",["Which","Who","Whose","Where"]],
    ["Can you tell me what time ___?",["the bank opens","does the bank open","opens the bank","the bank does open"]],
    ["___ is this jacket? Is it yours?",["Whose","Who","Who's","Which"]],
    ["«Who is this present ___?» «For you!»",["for","to","at","of"]],
    ["«How ___ is your brother?» «He's 25.»",["old","many","much","long"]],
    ["I don't know what ___.",["he wants","does he want","he want","wants he"]],
    ["How ___ sugar do you want?",["much","many","long","often"]]
  ],
  type:[
    ["Sual qur (kim etdi?): «Somebody called you.»",["who called you"]],
    ["Sual qur (kimə?): «You called somebody.»",["who did you call"]],
    ["Sual sözü: «___ is the bank?» «It's next to the school.»",["where"]],
    ["Sual sözü: «___ do you drink green tea?» «Because it's healthy.»",["why"]],
    ["Ön sözü yaz: «Who are you waiting ___?» «My friend.»",["for"]],
    ["Dolayı sual: «Where is the toilet?» → «Do you know ___?»",["where the toilet is"]],
    ["«___ does it take by bus?» «About 20 minutes.» — iki söz",["how long"]],
    ["Sual qur (where): «She has been to Paris.» → Where …?",["where has she been"]],
    ["«What ___ your new teacher like?» «She's very kind.»",["is"]],
    ["Dolayı sual: «What time does the film start?» → «Can you tell me ___?»",["what time the film starts"]]
  ],
  fix:[
    ["Who did call you?",["who called you"]],
    ["Where you are from?",["where are you from"]],
    ["Do you know where is the bank?",["do you know where the bank is"]],
    ["What did happen?",["what happened"]],
    ["How long it takes?",["how long does it take"]],
    ["What means this word?",["what does this word mean"]],
    ["I don't know where does she live.",["i don't know where she lives","i do not know where she lives"]]
  ],
  write:{task:"Yeni iş yoldaşından müsahibə al: ona 8 sual yaz (who, what, where, how long, how often, which, bir «kim etdi?» sualı, bir dolayı sual «Do you know…?»).", min:50},
  speak:{task:"Turist kimi küçədə yol soruşursan: 5 nəzakətli sual ver («Excuse me, do you know where…?», «Can you tell me how long…?»). 60 saniyə.", secs:60},
  ref:"Murphy: Units 42–47 · English File: Grammar Bank 2B, 7A"
},
{ id:"g22", status:"ready", level:"A2", week:9, mins:30,
  title:"Qısa cavablar və razılaşma: Yes, I do · So do I · Neither do I · isn't it?",
  goal:"Qısa cavab vermək, «mən də / mən də yox» demək və quyruq sualı (isn't it?) qurmaq.",
  examples:[
    ["«Do you work here?» «Yes, I do.»","«Burada işləyirsən?» «Bəli.»"],
    ["«I'm hungry.» «So am I.»","«Acmışam.» «Mən də.»"],
    ["«I don't smoke.» «Neither do I.»","«Siqaret çəkmirəm.» «Mən də çəkmirəm.»"],
    ["It's a lovely day, isn't it?","Gözəl gündür, elə deyilmi?"]
  ],
  errors:[
    ["«Do you like tea?» «Yes, I like.»","«Yes, I do.»","Qısa cavabda sualdakı köməkçi təkrarlanır."],
    ["«Are you ready?» «Yes, I'm.»","«Yes, I am.»","Qısa «bəli» cavabında qısaltma olmur."],
    ["«I'm tired.» «So do I.»","«So am I.»","Cümlədə am var — am ilə cavab ver."],
    ["I'm not hungry too.","I'm not hungry either.","İnkarda too yox, either."],
    ["You like music, isn't it?","You like music, don't you?","Quyruqda cümlənin öz köməkçisi işlənir."]
  ],
  mc:[
    ["«Do you like coffee?» «Yes, I ___.»",["do","like","am","does"]],
    ["«Is she married?» «No, she ___.»",["isn't","doesn't","not","hasn't"]],
    ["«Are you ready?» «Yes, ___.»",["I am","I'm","am","I do"]],
    ["«I'm hungry.» «So ___ I.»",["am","do","have","is"]],
    ["«I don't eat meat.» «Neither ___ I.»",["do","am","don't","eat"]],
    ["«I can swim.» «So ___ I.»",["can","do","am","could"]],
    ["I'm not tired, and my sister isn't tired ___.",["either","too","neither","also"]],
    ["«I went to the cinema yesterday.» «So ___ I.»",["did","was","do","went"]],
    ["It's a nice day, ___?",["isn't it","is it","doesn't it","it isn't"]],
    ["You live in Baku, ___?",["don't you","do you","aren't you","isn't it"]],
    ["«Will it rain tomorrow?» «I don't think ___.»",["so","it","that","yes"]],
    ["«I've never been to Paris.» «Neither ___ I.»",["have","do","am","did"]],
    ["She can't drive, ___?",["can she","can't she","does she","is she"]],
    ["«I live in Ganja.» «Oh, ___? I live there too!»",["do you","are you","you live","don't you"]]
  ],
  type:[
    ["Qısa cavab: «Did you see the film?» «Yes, ___.»",["i did"]],
    ["Qısa cavab: «Can you help me?» «No, ___.»",["i can't","i cannot"]],
    ["Qısa cavab: «Have you finished?» «Yes, ___.»",["i have"]],
    ["«I'm from Baku.» «So ___ I.»",["am"]],
    ["«I didn't like the film.» «Neither ___ I.»",["did"]],
    ["Quyruq sual: «You are a student, ___?»",["aren't you"]],
    ["Quyruq sual: «He doesn't smoke, ___?»",["does he"]],
    ["«I don't like fish, and my wife doesn't ___.»",["either"]],
    ["«Is the shop open?» «I think ___.»",["so"]]
  ],
  fix:[
    ["I am not hungry, and Ali isn't hungry too.",["i am not hungry and ali isn't hungry either","i'm not hungry and ali isn't hungry either","i am not hungry and ali is not hungry either","i'm not hungry and ali is not hungry either"]],
    ["She is a teacher, doesn't she?",["she is a teacher isn't she","she's a teacher isn't she"]],
    ["You like music, isn't it?",["you like music don't you"]],
    ["I'm tired. — So do I.",["i'm tired so am i","i am tired so am i"]],
    ["I don't smoke. — Neither I do.",["i don't smoke neither do i","i do not smoke neither do i"]],
    ["Are you ready? — Yes, I'm.",["are you ready yes i am"]]
  ],
  write:{task:"Dostunla yazışma yaz (8–10 replika): qısa cavablar (Yes, I do / No, I haven't), So … I / Neither … I və iki quyruq sual işlət.", min:50},
  speak:{task:"Dostunun dediklərinə reaksiya ver: «I love football.» «So do I!» kimi 6 cümlə de və hər birinə düz cavab ver. Sonra 3 quyruq sual ver. 60 saniyə.", secs:60},
  ref:"Murphy: Units 38–41"
},
{ id:"g10", status:"ready", level:"B1", week:10, mins:40,
  title:"-ing və to: enjoy doing, want to do, went to buy",
  goal:"Feldən sonra -ing, yoxsa to + fel gəldiyini bilmək; «… üçün» (məqsəd) demək.",
  examples:[
    ["I enjoy cooking at the weekend.","Həftəsonu yemək bişirməyi xoşlayıram."],
    ["We decided to sell the car.","Maşını satmağa qərar verdik."],
    ["I went to the pharmacy to buy some medicine.","Dərman almaq üçün aptekə getdim."],
    ["My boss wants me to finish the report today.","Müdirim hesabatı bu gün bitirməyimi istəyir."]
  ],
  errors:[
    ["I enjoy to swim.","I enjoy swimming.","enjoy-dan sonra -ing."],
    ["I went there for buy bread.","I went there to buy bread.","«… üçün» = to + fel."],
    ["She wants that I help her.","She wants me to help her.","want + adam + to + fel."],
    ["He is good at play chess.","He is good at playing chess.","Ön sözdən sonra -ing."],
    ["She made me to cry.","She made me cry.","make/let + adam + sadə fel (to yox)."]
  ],
  mc:[
    ["I enjoy ___ in the evenings.",["reading","to read","read","reads"]],
    ["I want ___ a new car.",["to buy","buying","buy","for buy"]],
    ["She finished ___ at 10 pm.",["working","to work","work","works"]],
    ["I went to the bank ___ some money.",["to get","for get","for getting","get"]],
    ["He's good at ___.",["cooking","to cook","cook","cooks"]],
    ["My boss wants ___ the report today.",["me to finish","me finish","I finish","me finishing"]],
    ["Would you mind ___ the window?",["opening","to open","open","opened"]],
    ["We decided ___ a car for the weekend.",["to rent","renting","rent","for renting"]],
    ["___ is good for your health.",["Walking","Walk","To walking","Walks"]],
    ["I'm interested in ___ new languages.",["learning","to learn","learn","learned"]],
    ["The doctor told me ___ so much coffee.",["not to drink","don't drink","not drink","no to drink"]],
    ["I hope ___ you again soon.",["to see","seeing","see","seen"]],
    ["Thank you for ___ me.",["helping","help","to help","helped"]],
    ["My parents didn't let me ___ out late.",["go","to go","going","went"]],
    ["He avoided ___ my question.",["answering","to answer","answer","answers"]]
  ],
  type:[
    ["«I need ___ (study) more.»",["to study"]],
    ["«Stop ___ (talk), please. The film is starting.»",["talking"]],
    ["«I'm thinking about ___ (change) my job.»",["changing"]],
    ["«She agreed ___ (help) me.»",["to help"]],
    ["«I came to Baku ___ (learn) English.»",["to learn"]],
    ["«He wants me ___ (call) him tomorrow.»",["to call"]],
    ["«Do you enjoy ___ (travel)?»",["travelling","traveling"]],
    ["«I'm tired of ___ (wait).»",["waiting"]],
    ["«Would you like ___ (come) with us?»",["to come"]]
  ],
  fix:[
    ["I enjoy to swim.",["i enjoy swimming"]],
    ["I went to the shop for buy milk.",["i went to the shop to buy milk"]],
    ["She wants that I help her.",["she wants me to help her"]],
    ["He is good at play chess.",["he is good at playing chess"]],
    ["I decided learning English.",["i decided to learn english"]],
    ["Thank you for help me.",["thank you for helping me"]],
    ["My mother made me to clean my room.",["my mother made me clean my room"]]
  ],
  write:{task:"Boş vaxtın haqqında yaz: nəyi etməyi xoşlayırsan (enjoy, like + -ing), gələcəkdə nə etmək istəyirsən (want, hope, plan + to), nəyi niyə edirsən (to + fel). 80–100 söz.", min:80},
  speak:{task:"«Why are you learning English?» — 90 saniyə: I want to…, I'm learning English to…, I enjoy…, I'm good at… / interested in… işlət.", secs:90},
  ref:"Murphy: Units 49–52 · English File: Grammar Bank 8B"
},
{ id:"g26", status:"ready", level:"A2", week:10, mins:35,
  title:"go, get, do, make, have — gündəlik fellər",
  goal:"Ən çox işlənən beş feli düz birləşmələrlə işlətmək: go swimming, get married, do homework, make a mistake, have breakfast.",
  examples:[
    ["We go shopping on Saturdays.","Şənbə günləri alış-verişə gedirik."],
    ["It's getting cold.","Hava soyuyur."],
    ["I made a mistake, but I did my best.","Səhv etdim, amma əlimdən gələni etdim."],
    ["Let's have lunch together.","Gəl birlikdə nahar edək."]
  ],
  errors:[
    ["I did a mistake.","I made a mistake.","mistake — make ilə."],
    ["Let's go to home.","Let's go home.","home-dan əvvəl to yoxdur."],
    ["I made my homework.","I did my homework.","homework — do ilə."],
    ["We went to swimming.","We went swimming.","go + -ing (to yoxdur)."],
    ["She married last year. (evləndi)","She got married last year.","«Evlənmək» — get married."]
  ],
  mc:[
    ["I need to ___ my homework.",["do","make","have","get"]],
    ["Can you ___ a cup of tea for me?",["make","do","go","play"]],
    ["We ___ swimming every Sunday.",["go","make","get","have"]],
    ["I always ___ a shower in the morning.",["have","make","do","go"]],
    ["It's getting dark. Let's ___ home.",["go","go to","make","do"]],
    ["She ___ married last year.",["got","made","did","went"]],
    ["I ___ a mistake in the test.",["made","did","got","had"]],
    ["What time do you ___ up?",["get","go","make","do"]],
    ["What time did you ___ home last night?",["get","arrive to","reach to","make"]],
    ["Let's ___ for a walk.",["go","do","make","get"]],
    ["We ___ a great time at the party.",["had","made","did","got"]],
    ["I'm ___ hungry. Let's eat.",["getting","making","doing","having"]],
    ["My brother ___ a lot of money in his new job.",["makes","does","goes","takes"]],
    ["___ you got a pen?",["Have","Do","Are","Has"]],
    ["Who ___ the shopping in your family?",["does","makes","goes","has"]]
  ],
  type:[
    ["do / make: «___ a decision»",["make"]],
    ["do / make: «___ the washing»",["do"]],
    ["«Let's go ___ (shop) on Saturday.»",["shopping"]],
    ["«I ___ up at 7 every day.» (get)",["get"]],
    ["«I haven't ___ a car.» (have got)",["got"]],
    ["«She got ___ (evləndi) last year.»",["married"]],
    ["«We ___ (have) breakfast at 8 yesterday.»",["had"]],
    ["«I want to ___ new friends here.»",["make"]],
    ["«You ___ off the bus at the next stop.»",["get"]]
  ],
  fix:[
    ["I did a mistake.",["i made a mistake"]],
    ["Let's go to home.",["let's go home"]],
    ["I made my homework.",["i did my homework"]],
    ["We went to swimming.",["we went swimming"]],
    ["I go to shopping every week.",["i go shopping every week"]],
    ["He did a lot of money.",["he made a lot of money"]]
  ],
  write:{task:"Keçən həftəsonunu danış: go, get, do, make, have fellərinin hər birini ən azı bir dəfə işlət (go shopping, get home, do the cleaning, make dinner, have a rest). 60–80 söz.", min:60},
  speak:{task:"«What do you usually do at the weekend?» — 60 saniyə: go + -ing, do, make, have birləşmələri işlət.", secs:60},
  ref:"Murphy: Units 9, 53–56"
},
{ id:"g11", status:"ready", level:"B1", week:11, mins:45,
  title:"Ön sözlər: zaman, yer, hərəkət və «fel/sifət + ön söz»",
  goal:"in/on/at və digər ön sözləri düz seçmək; interested in, wait for kimi birləşmələri əzbərləmək.",
  examples:[
    ["The lesson starts at 9 on Monday.","Dərs bazar ertəsi saat 9-da başlayır."],
    ["I was born in 1996, in Lankaran.","1996-cı ildə Lənkəranda doğulmuşam."],
    ["Wait for me at the bus stop.","Məni avtobus dayanacağında gözlə."],
    ["She is interested in history.","O, tarixlə maraqlanır."]
  ],
  errors:[
    ["I'll see you in Monday.","I'll see you on Monday.","Həftənin günü — on."],
    ["We arrived to Baku at night.","We arrived in Baku at night.","arrive to yoxdur: arrive in (şəhər), arrive at (bina)."],
    ["I'm waiting the bus.","I'm waiting for the bus.","wait for."],
    ["She is afraid from spiders.","She is afraid of spiders.","afraid of."],
    ["I'll call you on next week.","I'll call you next week.","next/last/this-dən əvvəl ön söz yoxdur."]
  ],
  mc:[
    ["The meeting is ___ Monday.",["on","in","at","—"]],
    ["I was born ___ 1995.",["in","on","at","—"]],
    ["The shop closes ___ 9 pm.",["at","in","on","to"]],
    ["We're meeting ___ next Friday.",["—","on","in","at"]],
    ["My keys are ___ the table.",["on","in","at","to"]],
    ["She lives ___ Baku.",["in","at","on","to"]],
    ["I'll wait for you ___ the bus stop.",["at","in","on","to"]],
    ["I usually go to work ___ bus.",["by","on","with","in"]],
    ["We arrived ___ the airport at 5.",["at","to","in","on"]],
    ["I'm afraid ___ dogs.",["of","from","at","with"]],
    ["She's very good ___ maths.",["at","in","on","with"]],
    ["Can you wait ___ me? I'll be back in five minutes.",["for","to","at","on"]],
    ["Listen ___ me!",["to","at","for","—"]],
    ["I fell asleep ___ the film.",["during","while","for","since"]],
    ["The cinema is ___ the bank and the post office.",["between","among","next","opposite to"]],
    ["It depends ___ the weather.",["on","of","from","at"]]
  ],
  type:[
    ["in / on / at: «___ the morning»",["in"]],
    ["in / on / at: «___ my birthday»",["on"]],
    ["in / on / at: «___ night»",["at"]],
    ["in / on / at: «___ the weekend»",["at","on"]],
    ["«I'm interested ___ history.»",["in"]],
    ["«Look ___ this photo! It's beautiful.»",["at"]],
    ["«He is married ___ my cousin.»",["to"]],
    ["«We went there ___ foot.»",["on"]],
    ["«The train goes ___ a long tunnel.» (içindən keçib)",["through"]],
    ["«This is a book ___ Nizami.» (müəllif)",["by"]]
  ],
  fix:[
    ["I'll see you in Monday.",["i'll see you on monday","i will see you on monday"]],
    ["We arrived to Baku at night.",["we arrived in baku at night"]],
    ["I'm waiting the bus.",["i'm waiting for the bus","i am waiting for the bus"]],
    ["She is afraid from spiders.",["she is afraid of spiders"]],
    ["I'll call you on next week.",["i'll call you next week","i will call you next week"]],
    ["He goes to work with bus.",["he goes to work by bus"]],
    ["It depends of the price.",["it depends on the price"]],
    ["Listen me, please.",["listen to me please"]]
  ],
  write:{task:"Evindən işə (və ya kursa) yolunu təsvir et: nə vaxt çıxırsan, nə ilə gedirsən, hansı yerlərin yanından keçirsən, harada gözləyirsən. 80–100 söz. Ən azı 10 ön söz işlət.", min:80},
  speak:{task:"«Describe your favourite room at home.» — 60 saniyə: nə harada durur (next to, between, on, under, in front of).", secs:60},
  ref:"Murphy: Units 101–111 · English File: Grammar Bank 10A"
},
{ id:"g27", status:"ready", level:"B1", week:11, mins:35,
  title:"Phrasal verbs: get up, put on, give up, look for",
  goal:"Fel + kiçik söz (up, on, off, out …) birləşmələrini başa düşmək və it/them-in yerini bilmək.",
  examples:[
    ["I get up at seven.","Saat yeddidə dururam."],
    ["Put your coat on. It's cold.","Paltonu gey. Soyuqdur."],
    ["My father gave up smoking.","Atam siqareti atdı."],
    ["I'm looking for my phone.","Telefonumu axtarıram."]
  ],
  errors:[
    ["Put on it.","Put it on.","it/them ortada durur."],
    ["She gave up to smoke.","She gave up smoking.","give up + -ing."],
    ["I waked up late.","I woke up late.","wake qaydasızdır: woke."],
    ["I look forward to see you.","I look forward to seeing you.","Burada to ön sözdür: -ing gəlir."],
    ["I'm looking my glasses.","I'm looking for my glasses.","«Axtarmaq» — look for."]
  ],
  mc:[
    ["It's cold. ___ your coat.",["Put on","Put in","Take off","Put up"]],
    ["Please ___ your shoes before you come in.",["take off","take on","put off","take out"]],
    ["Can you ___ the light? I can't see anything.",["turn on","turn off","turn in","turn up"]],
    ["Where are my glasses? I'm looking ___ them.",["for","at","after","up"]],
    ["Who looks ___ your children when you're at work?",["after","for","at","up"]],
    ["My father ___ smoking last year.",["gave up","gave out","gave off","gave away"]],
    ["These shoes look nice. Can I ___?",["try them on","try on them","try them in","try on it"]],
    ["I ___ at 7 this morning.",["woke up","waked up","woke on","wake up"]],
    ["Our car ___ on the motorway, so we called for help.",["broke down","broke up","broke off","broke out"]],
    ["We've ___ of milk. Can you buy some?",["run out","run off","ran away","run over"]],
    ["This is my old jacket. I'm going to throw it ___.",["away","off","up","out of"]],
    ["I'm looking forward ___ you.",["to seeing","to see","seeing","for seeing"]],
    ["«Come ___!» she said, and I went into the room.",["in","on","up","off"]],
    ["Please ___ this form.",["fill in","fill on","fill up with","fill at"]],
    ["I'd like to find ___ more about the course.",["out","up","off","on"]]
  ],
  type:[
    ["«Turn ___ the TV, please. I want to sleep.»",["off"]],
    ["«___ down, please. The doctor will see you soon.»",["sit"]],
    ["«I grew ___ in Lankaran.»",["up"]],
    ["«Where's my phone? I'm looking ___ it.»",["for"]],
    ["«She gave ___ chocolate for a month.»",["up"]],
    ["Sözləri sırala: «put / on / it»",["put it on"]],
    ["«I can't find my keys. Can you help me look for ___?»",["them"]],
    ["Keçmişə çevir: «I wake up at 6.»",["i woke up at 6"]],
    ["«Please come ___ soon. We'll miss you.»",["back"]]
  ],
  fix:[
    ["Put on it.",["put it on"]],
    ["Please turn off it.",["please turn it off"]],
    ["She gave up to smoke.",["she gave up smoking"]],
    ["I waked up late.",["i woke up late"]],
    ["I look forward to see you.",["i look forward to seeing you"]],
    ["Take off them.",["take them off"]],
    ["I'm looking my glasses.",["i'm looking for my glasses","i am looking for my glasses"]]
  ],
  write:{task:"Səhərini təsvir et: wake up, get up, put on, turn on/off, go out, come back kimi ən azı 6 phrasal verb işlət. 60–80 söz.", min:60},
  speak:{task:"«Describe a habit you gave up or want to give up.» — 60 saniyə: give up, start, find out, look forward to işlət.", secs:60},
  ref:"Murphy: Units 112–113, Appendix 6–7"
},
{ id:"g12", status:"ready", level:"B1", week:12, mins:40,
  title:"Passive: is made, was built, has been sold",
  goal:"Kimin etdiyi vacib olmayanda «edilir, edildi, edilib» demək — xüsusən IELTS Task 1 proses təsvirində.",
  examples:[
    ["Tea is grown in Lankaran.","Lənkəranda çay becərilir."],
    ["This bridge was built in 1990.","Bu körpü 1990-cı ildə tikilib."],
    ["The tickets have been sold.","Biletlər satılıb."],
    ["I was born in Ganja.","Gəncədə doğulmuşam."]
  ],
  errors:[
    ["I born in 1995.","I was born in 1995.","«Doğulmaq» — was/were born."],
    ["The house built in 1980.","The house was built in 1980.","Passivdə be lazımdır."],
    ["English is speak here.","English is spoken here.","be + V3 (spoken)."],
    ["The accident was happened at night.","The accident happened at night.","happen passiv olmur."],
    ["It was made from my mother.","It was made by my mother.","«Kim tərəfindən» — by."]
  ],
  mc:[
    ["This bridge ___ in 1990.",["was built","built","is built","was build"]],
    ["English ___ in many countries.",["is spoken","speaks","is speaking","spoken"]],
    ["I ___ in Ganja.",["was born","born","am born","borned"]],
    ["The room ___ every day.",["is cleaned","cleans","is clean","cleaned"]],
    ["The letters ___ yesterday.",["were sent","was sent","sent","are sent"]],
    ["This book was written ___ a famous writer.",["by","from","with","of"]],
    ["My car ___ at the moment, so I'm taking the bus.",["is being repaired","is repaired","is repairing","repairs"]],
    ["All the tickets ___ already ___.",["have … been sold","has … been sold","have … sold","are … been sold"]],
    ["___ this cake made by your mother?",["Was","Did","Has","Does"]],
    ["The results ___ next week.",["will be announced","will announce","are announce","will announced"]],
    ["The accident ___ at 8 pm.",["happened","was happened","is happened","was happen"]],
    ["Paper ___ from wood.",["is made","makes","is making","made"]],
    ["Smoking ___ here.",["isn't allowed","doesn't allow","isn't allowing","not allowed"]],
    ["The windows must ___ every week.",["be cleaned","clean","cleaned","to be cleaned"]]
  ],
  type:[
    ["Passivə çevir: «They make cars in this factory.»",["cars are made in this factory"]],
    ["Passivə çevir: «Somebody stole my bike.»",["my bike was stolen"]],
    ["V3 forması: build →",["built"]],
    ["«The museum ___ (open) in 2010.»",["was opened"]],
    ["«Rice ___ (grow) in the south of Azerbaijan.»",["is grown"]],
    ["«Where ___ you born?»",["were"]],
    ["İnkar et: «The email was sent.»",["the email wasn't sent","the email was not sent"]],
    ["«The report has ___ finished. You can read it.»",["been"]],
    ["«The new hospital ___ (build) next year.» (will)",["will be built"]]
  ],
  fix:[
    ["I born in 1995.",["i was born in 1995"]],
    ["The house built in 1980.",["the house was built in 1980"]],
    ["The cake was make by my sister.",["the cake was made by my sister"]],
    ["English is speak here.",["english is spoken here"]],
    ["The accident was happened at night.",["the accident happened at night"]],
    ["The car was repaired from my brother.",["the car was repaired by my brother"]],
    ["The letters was sent.",["the letters were sent"]]
  ],
  write:{task:"Bir prosesi təsvir et (çay necə hazırlanır, çörək necə bişirilir və ya məktub necə göndərilir): First, … is …; Then, … are …; Finally, … . 80–100 söz, əsasən passiv.", min:80},
  speak:{task:"«Describe a famous building in your city.» — 60 saniyə: nə vaxt tikilib (was built), nə üçün istifadə olunur (is used), indi nə edilir.", secs:60},
  ref:"Murphy: Units 20–21, Appendix 1"
},
{ id:"g13", status:"ready", level:"B1", week:13, mins:40,
  title:"Relative clauses: who, which, that, where, whose",
  goal:"İnsanı, əşyanı və yeri ikinci cümlə ilə təsvir etmək: «Bakıda yaşayan adam» = the man who lives in Baku.",
  examples:[
    ["The woman who lives next door is a doctor.","Qonşuda yaşayan qadın həkimdir."],
    ["I lost the book that you gave me.","Mənə verdiyin kitabı itirdim."],
    ["This is the village where my father was born.","Bu, atamın doğulduğu kənddir."],
    ["My sister, who lives in London, is a nurse.","Londonda yaşayan bacım tibb bacısıdır."]
  ],
  errors:[
    ["The book which I read it was great.","The book which I read was great.","which artıq kitabı göstərir — it təkrar olmur."],
    ["The man which lives here is old.","The man who lives here is old.","İnsan — who."],
    ["This is the town where I live in.","This is the town where I live.","where varsa, sonda in olmur."],
    ["The girl who her mother is a doctor…","The girl whose mother is a doctor…","«kimin» — whose."],
    ["My brother, that lives in Ganja, …","My brother, who lives in Ganja, …","Vergüllü hissədə that olmur."]
  ],
  mc:[
    ["The woman ___ lives next door is a doctor.",["who","which","where","whose"]],
    ["I lost the book ___ you gave me.",["that","who","where","whose"]],
    ["This is the house ___ I was born.",["where","which","who","that"]],
    ["That's the man ___ car was stolen.",["whose","who","who's","which"]],
    ["The film ___ we watched last night was boring.",["which","who","where","whose"]],
    ["Do you know anyone ___ speaks Chinese?",["who","which","where","what"]],
    ["I like people ___ are honest.",["who","which","where","whose"]],
    ["Baku is a city ___ you can see old and new buildings.",["where","which","who","whose"]],
    ["The phone ___ is already broken.",["I bought last week","I bought it last week","which I bought it last week","who I bought last week"]],
    ["My sister, ___ lives in London, is a nurse.",["who","that","which","whose"]],
    ["This is the hotel ___ we stayed at.",["—","where","who","whose"]],
    ["The bus ___ goes to the airport leaves every hour.",["that","who","where","whose"]],
    ["What's the name of the boy ___ father is a pilot?",["whose","who","who's","his"]]
  ],
  type:[
    ["«The man ___ called you is my uncle.»",["who","that"]],
    ["«The bag ___ I bought is red.»",["which","that"]],
    ["«This is the café ___ we first met.»",["where"]],
    ["«He's the student ___ brother is a footballer.»",["whose"]],
    ["Birləşdir: «I have a friend. She lives in Paris.»",["i have a friend who lives in paris","i have a friend that lives in paris"]],
    ["Birləşdir: «This is the car. I bought it last year.»",["this is the car i bought last year","this is the car which i bought last year","this is the car that i bought last year"]],
    ["«A dictionary is a book ___ explains words.»",["which","that"]],
    ["«I'll never forget the day ___ I met you.»",["when","that"]],
    ["Birləşdir: «The man is a teacher. His son is in my class.» → The man whose …",["the man whose son is in my class is a teacher"]]
  ],
  fix:[
    ["The book which I read it was great.",["the book which i read was great","the book that i read was great","the book i read was great"]],
    ["The man which lives here is old.",["the man who lives here is old","the man that lives here is old"]],
    ["This is the town where I live in.",["this is the town where i live","this is the town i live in","this is the town that i live in","this is the town which i live in"]],
    ["The girl who her mother is a doctor is my friend.",["the girl whose mother is a doctor is my friend"]],
    ["My brother, that lives in Ganja, is a driver.",["my brother who lives in ganja is a driver"]],
    ["I have a friend who he speaks French.",["i have a friend who speaks french","i have a friend that speaks french"]]
  ],
  write:{task:"Doğulduğun şəhəri və orada tanıdığın insanları təsvir et: who, which, where, whose ilə ən azı 6 cümlə. 80–100 söz.", min:80},
  speak:{task:"«Describe a person who has influenced you.» — 90 saniyə: who, which, where, whose ilə təsvir et.", secs:90},
  ref:"Murphy: Units 99–100"
},
{ id:"g14", status:"ready", level:"B1", week:14, mins:45,
  title:"Şərt cümlələri (if): 0, 1, 2, 3",
  goal:"Həmişə doğru olan, real gələcək, xəyali və keçmişdə dəyişməsi mümkün olmayan şərtləri ayırmaq.",
  examples:[
    ["If you heat ice, it melts.","Buzu qızdırsan, əriyir."],
    ["If it rains tomorrow, we'll stay at home.","Sabah yağış yağsa, evdə qalacağıq."],
    ["If I had more money, I would buy a flat.","Daha çox pulum olsaydı, mənzil alardım."],
    ["If I had known, I would have helped you.","Bilsəydim, sənə kömək edərdim (amma bilmədim)."]
  ],
  errors:[
    ["If it will rain, we will stay at home.","If it rains, we will stay at home.","if hissəsində will olmur."],
    ["If I would have money, I would buy it.","If I had money, I would buy it.","if hissəsində would olmur."],
    ["If I am you, I would go.","If I were you, I would go.","Məsləhət: If I were you."],
    ["If I had known, I would come.","If I had known, I would have come.","Keçmiş şərt: would have + V3."],
    ["Unless you don't study, you will fail.","Unless you study, you will fail.","unless özü «… -sa, -mazsa» deməkdir — not əlavə olunmur."]
  ],
  mc:[
    ["If you heat water to 100 degrees, it ___.",["boils","boiled","boiling","is boil"]],
    ["If it rains tomorrow, we ___ at home.",["will stay","would stay","stayed","staying"]],
    ["If I ___ a lot of money, I would travel around the world.",["had","have","will have","would have"]],
    ["If I ___ you, I would talk to him.",["were","am","will be","be"]],
    ["What would you do if you ___ a snake in your garden?",["saw","see","will see","seen"]],
    ["You won't pass the exam ___ you study.",["unless","if","when","so"]],
    ["If she ___ harder, she would get a better job.",["worked","works","will work","work"]],
    ["If I had known about the party, I ___.",["would have come","would come","will come","came"]],
    ["If we ___ the bus, we wouldn't have been late.",["hadn't missed","didn't miss","haven't missed","don't miss"]],
    ["I ___ buy that car if I were you. It's too old.",["wouldn't","won't","don't","didn't"]],
    ["If you ___ hungry, there's some soup in the fridge.",["are","were","will be","would be"]],
    ["___ I get the job, I'll have a party.",["If","Unless","Because","So"]],
    ["If he ___ more careful, he wouldn't have had the accident.",["had been","was","were","has been"]],
    ["I'll call you when I ___ home.",["get","will get","got","would get"]]
  ],
  type:[
    ["«If you ___ (mix) red and blue, you get purple.»",["mix"]],
    ["«If it ___ (be) sunny tomorrow, we'll go to the beach.»",["is"]],
    ["«If I ___ (have) a car, I would drive to work.»",["had"]],
    ["«If I were rich, I ___ (buy) a big house.»",["would buy","'d buy"]],
    ["«If I ___ (be) you, I'd see a doctor.»",["were"]],
    ["unless ilə yaz: «If you don't hurry, you'll miss the bus.»",["unless you hurry you'll miss the bus","unless you hurry you will miss the bus"]],
    ["«If she had studied, she ___ (pass) the exam.»",["would have passed","'d have passed"]],
    ["«What ___ you do if you lost your phone?»",["would"]],
    ["«If I had more time, I ___ (can/help) you.»",["could help"]]
  ],
  fix:[
    ["If it will rain, we will stay at home.",["if it rains we will stay at home","if it rains we'll stay at home"]],
    ["If I would have money, I would buy it.",["if i had money i would buy it","if i had money i'd buy it"]],
    ["If I am you, I would go.",["if i were you i would go","if i were you i'd go"]],
    ["If I had known, I would come.",["if i had known i would have come","if i had known i'd have come"]],
    ["Unless you don't study, you will fail.",["unless you study you will fail","unless you study you'll fail","if you don't study you will fail","if you don't study you'll fail"]],
    ["If he will call, tell him I'm busy.",["if he calls tell him i'm busy","if he calls tell him i am busy"]]
  ],
  write:{task:"«If I won a million manat…» — 80–100 söz: nə edərdin (2-ci növ), sonra real planın üçün 2 cümlə (1-ci növ) və keçmişlə bağlı bir təəssüf (3-cü növ).", min:80},
  speak:{task:"«What would you do if you could live in any country?» — 90 saniyə: If I could…, I would…, If I were…, işlət.", secs:90},
  ref:"Murphy: Units 96–98 (3-cü növ bu kitabda yoxdur)"
},
{ id:"g15", status:"ready", level:"B1", week:15, mins:40,
  title:"Reported speech: He said that…, She asked if…, told me to…",
  goal:"Başqasının sözünü, sualını və xahişini öz cümlənlə ötürmək.",
  examples:[
    ["«I'm tired.» → She said (that) she was tired.","«Yorğunam.» → Yorğun olduğunu dedi."],
    ["«I'll call you.» → He told me he would call me.","«Sənə zəng edəcəm.» → Mənə zəng edəcəyini dedi."],
    ["«Do you live here?» → She asked me if I lived there.","«Burada yaşayırsan?» → Orada yaşayıb-yaşamadığımı soruşdu."],
    ["«Don't be late.» → My boss told me not to be late.","«Gecikmə.» → Müdirim gecikməməyimi dedi."]
  ],
  errors:[
    ["She said me that she was ill.","She told me that she was ill.","say-dan sonra adam gəlmir; tell me."],
    ["He asked me where did I live.","He asked me where I lived.","Ötürülən sualda sıra adi cümlə kimidir."],
    ["She told to me to wait.","She told me to wait.","tell + adam (to yox)."],
    ["He said that he will come.","He said that he would come.","will → would."],
    ["My boss told me don't be late.","My boss told me not to be late.","Qadağa ötürəndə: not to + fel."]
  ],
  mc:[
    ["She ___ me that she was tired.",["told","said","says to","told to"]],
    ["He ___ that he was hungry.",["said","told","said me","told that"]],
    ["«I'm tired,» Ali said yesterday. → Ali said he ___ tired.",["was","were","am","be"]],
    ["«I will call you.» → He said he ___ call me.",["would","was","did","wills"]],
    ["«I can swim.» → She said she ___ swim.",["could","can to","was can","cans"]],
    ["She asked me ___ I liked coffee.",["if","that","do","what"]],
    ["He asked me where ___.",["I lived","did I live","I live did","do I live"]],
    ["The teacher told us ___ quiet.",["to be","be","being","that be"]],
    ["My mother told me ___ late.",["not to be","don't be","not being","no be"]],
    ["«I have finished.» → He said he ___ finished.",["had","has","have","was"]],
    ["«My car is broken,» he said. → He said ___ car was broken.",["his","my","her","your"]],
    ["«Are you hungry?» she asked. → She asked me if I ___ hungry.",["was","am","be","does"]],
    ["He ___ me to help him.",["asked","said","say","told to"]],
    ["«Please don't smoke.» → She asked him ___.",["not to smoke","don't smoke","to not smoking","no smoke"]]
  ],
  type:[
    ["say / tell: «He ___ me the truth.» (keçmiş)",["told"]],
    ["say / tell: «She ___ goodbye and left.» (keçmiş)",["said"]],
    ["«I am tired.» → He said (that) he ___ tired.",["was"]],
    ["«I will help you.» → She said she ___ help me.",["would"]],
    ["«I can't come.» → He said he ___ come.",["couldn't","could not"]],
    ["«Do you speak English?» → She asked me ___ I spoke English.",["if","whether"]],
    ["«Where do you work?» → He asked me where I ___.",["worked"]],
    ["«Close the door.» → She told me ___ the door.",["to close"]],
    ["«I have lost my key.» → He said he ___ lost his key.",["had"]]
  ],
  fix:[
    ["She said me that she was ill.",["she told me that she was ill","she told me she was ill","she said that she was ill","she said she was ill"]],
    ["He asked me where did I live.",["he asked me where i lived"]],
    ["She told to me to wait.",["she told me to wait"]],
    ["He asked me do I like tea.",["he asked me if i liked tea","he asked me whether i liked tea"]],
    ["He said that he will come.",["he said that he would come","he said he would come"]],
    ["My boss told me don't be late.",["my boss told me not to be late"]]
  ],
  write:{task:"Dünən kiminləsə söhbətini danış: o nə dedi (said that…), nə soruşdu (asked if / asked where…), nə etməyini istədi (told me to…). 80–100 söz.", min:80},
  speak:{task:"Son eşitdiyin xəbəri və ya dostunun dediklərini ötür: «My friend told me that…, He asked me if…» — 60 saniyə.", secs:60},
  ref:"Murphy: Units 48, 51"
},
{ id:"g16", status:"ready", level:"B1", week:16, mins:40,
  title:"Bağlayıcılar: because (of), so, however, although, despite, whereas",
  goal:"Səbəb, nəticə, ziddiyyət və əlavə fikri düz sözlə bağlamaq — IELTS yazısının əsası.",
  examples:[
    ["The flight was delayed because of the fog.","Duman səbəbindən reys gecikdi."],
    ["Although it was late, we continued working.","Gec olmasına baxmayaraq, işləməyə davam etdik."],
    ["Despite the rain, the match started on time.","Yağışa baxmayaraq, oyun vaxtında başladı."],
    ["The city is expensive. However, salaries are high.","Şəhər bahadır. Lakin maaşlar yüksəkdir."]
  ],
  errors:[
    ["Although it was late, but we continued.","Although it was late, we continued.","although ilə but birlikdə işlənmir."],
    ["Despite it was cold, we went out.","Although it was cold, we went out.","despite-dan sonra tam cümlə yox, isim gəlir."],
    ["I stayed at home because of I was ill.","I stayed at home because I was ill.","Cümlədən əvvəl because (of yox)."],
    ["The flight was late because the fog.","The flight was late because of the fog.","İsimdən əvvəl because of."],
    ["I'm learning English for get a better job.","I'm learning English to get a better job.","Məqsəd — to + fel."]
  ],
  mc:[
    ["I was tired, ___ I went to bed early.",["so","because","but","although"]],
    ["I stayed at home ___ I was ill.",["because","so","but","however"]],
    ["The match was cancelled ___ the rain.",["because of","because","although","so"]],
    ["___ it was cold, we went swimming.",["Although","Despite","However","Because of"]],
    ["___ the rain, we went for a walk.",["Despite","Although","However","Because"]],
    ["The hotel was expensive. ___, the rooms were small.",["However","Although","Despite","Because"]],
    ["I like tea, ___ my wife prefers coffee.",["whereas","despite","because of","therefore"]],
    ["She studied very hard. ___, she passed the exam.",["As a result","However","Although","Despite"]],
    ["Big cities have many problems, ___ traffic and pollution.",["such as","such","like as","as such"]],
    ["I left early ___ I could catch the train.",["so that","because of","despite","although"]],
    ["Despite ___ tired, she finished the work.",["being","she was","be","to be"]],
    ["He didn't get the job ___ he had a lot of experience.",["although","because","so","despite"]],
    ["I'll call you ___ I arrive.",["when","during","despite","so"]],
    ["___ the lesson, my phone rang.",["During","While","When","Although"]],
    ["Although it was late, ___.",["we continued working","but we continued working","however we continued","so we continued"]]
  ],
  type:[
    ["«We missed the bus ___ of the traffic.»",["because"]],
    ["«It was raining. ___, we played football.» (buna baxmayaraq)",["however"]],
    ["«___ she is rich, she lives in a small flat.» (baxmayaraq ki)",["although","even though","though"]],
    ["«In spite ___ the noise, I slept well.»",["of"]],
    ["«I'm saving money ___ buy a car.» (almaq üçün)",["to"]],
    ["«He was ill, ___ he didn't go to work.» (ona görə)",["so"]],
    ["Birləşdir (despite): «It was cold. We went out.»",["despite the cold we went out","we went out despite the cold","despite the cold weather we went out","we went out despite the cold weather"]],
    ["«My brother loves sport, ___ I hate it.» (ziddiyyət, bir söz)",["whereas","while","but"]],
    ["Birləşdir (because of): «The road was closed. There was snow.»",["the road was closed because of the snow","the road was closed because of snow"]]
  ],
  fix:[
    ["Although it was late, but we continued.",["although it was late we continued","it was late but we continued"]],
    ["Despite it was cold, we went out.",["although it was cold we went out","even though it was cold we went out","despite the cold we went out"]],
    ["I stayed at home because of I was ill.",["i stayed at home because i was ill"]],
    ["The flight was late because the fog.",["the flight was late because of the fog"]],
    ["In spite of be tired, she went to work.",["in spite of being tired she went to work"]],
    ["I'm learning English for get a better job.",["i'm learning english to get a better job","i am learning english to get a better job","i'm learning english so that i can get a better job","i am learning english so that i can get a better job"]]
  ],
  write:{task:"«Living in a big city: advantages and disadvantages» — 100–120 söz. because, so, however, although, despite, whereas, for example, in addition sözlərindən ən azı altısını işlət.", min:100},
  speak:{task:"«Do you prefer studying alone or in a group?» — 90 saniyə: because, although, however, whereas ilə fikrini əsaslandır.", secs:90},
  ref:"Murphy: Units 95, 96, 103"
},
{ id:"g17", status:"ready", level:"B1", week:17, mins:45,
  title:"Present Perfect Continuous və Past Perfect",
  goal:"«Bir saatdır gözləyirəm» (have been doing) və «mən gələndə artıq getmişdi» (had done) demək.",
  examples:[
    ["I've been waiting for an hour.","Bir saatdır gözləyirəm."],
    ["How long have you been learning English?","Neçə vaxtdır ingiliscə öyrənirsən?"],
    ["When I arrived, the film had already started.","Mən çatanda film artıq başlamışdı."],
    ["She had never flown before that trip.","O səfərdən əvvəl heç vaxt təyyarəyə minməmişdi."]
  ],
  errors:[
    ["I am waiting for you for an hour.","I have been waiting for you for an hour.","Keçmişdən indiyə davam edir + müddət → have been + -ing."],
    ["I have been knowing her for years.","I have known her for years.","know -ing almır."],
    ["When I arrived, the train already left.","When I arrived, the train had already left.","Daha əvvəl olan iş — had + V3."],
    ["She has been writing five letters today.","She has written five letters today.","Say (neçə dənə) varsa — have + V3."],
    ["After I had ate, I went out.","After I had eaten, I went out.","had + V3 (eaten)."]
  ],
  mc:[
    ["I ___ for you for an hour! Where were you?",["have been waiting","am waiting","waited","have waiting"]],
    ["How long ___ English?",["have you been learning","are you learning","do you learn","you have been learning"]],
    ["She's tired because she ___ all day.",["has been working","is working","works","have been working"]],
    ["I ___ him for ten years.",["have known","have been knowing","know","am knowing"]],
    ["I ___ three emails this morning.",["have written","have been writing","am writing","write"]],
    ["When I arrived at the cinema, the film ___.",["had already started","has already started","already starts","is already started"]],
    ["She was nervous because she ___ on a plane before.",["had never been","has never been","never was","didn't been"]],
    ["After he ___ his homework, he went out.",["had finished","has finished","finishes","had finish"]],
    ["It ___ all day. The streets are wet.",["has been raining","is raining","rains","had been rain"]],
    ["By the time we got to the station, the train ___.",["had left","has left","leaves","was leave"]],
    ["Your eyes are red. ___ crying?",["Have you been","Had you been","Are you been","Did you been"]],
    ["We ___ in this flat since 2019.",["have been living","are living","live","lived"]],
    ["I didn't recognise him because he ___ a lot.",["had changed","has changed","changes","was change"]],
    ["___ you ever ___ sushi before you went to Japan?",["Had … eaten","Have … eaten","Had … eat","Were … eating"]]
  ],
  type:[
    ["«I ___ (wait) here since 10 o'clock.»",["have been waiting","'ve been waiting"]],
    ["Sual qur (How long): «You have been living here for a long time.»",["how long have you been living here"]],
    ["«She ___ (study) for three hours. She needs a break.»",["has been studying","'s been studying"]],
    ["«When we got home, we saw that someone ___ (break) the window.»",["had broken","'d broken"]],
    ["«I ___ (never/see) the sea before I was 20.»",["had never seen","'d never seen"]],
    ["«After she ___ (finish) work, she went to the gym.»",["had finished","'d finished"]],
    ["«He ___ (know) her since school.»",["has known","'s known"]],
    ["«By the time I woke up, my wife ___ (leave).»",["had left","'d left"]],
    ["İnkar et: «I had seen the film.»",["i hadn't seen the film","i had not seen the film"]]
  ],
  fix:[
    ["I am waiting for you for an hour.",["i have been waiting for you for an hour","i've been waiting for you for an hour"]],
    ["I have been knowing her for years.",["i have known her for years","i've known her for years"]],
    ["When I arrived, the train already left.",["when i arrived the train had already left"]],
    ["She has been writing five letters today.",["she has written five letters today","she's written five letters today"]],
    ["How long are you working here?",["how long have you been working here","how long have you worked here"]],
    ["After I had ate, I went out.",["after i had eaten i went out","after i ate i went out"]]
  ],
  write:{task:"«My English so far»: neçə vaxtdır öyrənirsən və son həftələrdə nə edirsən (have been + -ing); kursdan əvvəl nələri bilmirdin (had never…, hadn't…). 80–100 söz.", min:80},
  speak:{task:"«Describe a time you arrived late.» — 90 saniyə: when I arrived, … had already …; I had been waiting … işlət.", secs:90},
  ref:"Murphy: Unit 17 (have been -ing); Past Perfect Basic Grammar in Use-da ayrıca unit kimi yoxdur"
},
{ id:"g18", status:"ready", level:"B1", week:18, mins:40,
  title:"Mürəkkəb cümlələr və durğu işarələri",
  goal:"Cümlələri düz birləşdirmək, vergülü və böyük hərfi düz qoymaq — IELTS Writing üçün təmiz cümlə.",
  examples:[
    ["When I finished work, I went to the gym.","İşi bitirəndə idman zalına getdim."],
    ["I went to the gym when I finished work.","İşi bitirəndə idman zalına getdim."],
    ["The flat is small. However, it is very cheap.","Mənzil kiçikdir. Lakin çox ucuzdur."],
    ["My uncle, who lives in Dubai, is a pilot.","Dubayda yaşayan əmim pilotdur."]
  ],
  errors:[
    ["I was tired, I went home.","I was tired, so I went home.","İki tam cümlə yalnız vergüllə birləşmir."],
    ["Because I was hungry.","Because I was hungry, I made a sandwich.","because-li hissə tək cümlə ola bilməz."],
    ["i live in baku.","I live in Baku.","I və şəhər adları böyük hərflə."],
    ["Its a good idea.","It's a good idea.","it's = it is (apostrofla)."],
    ["I asked him where did he live?","I asked him where he lived.","Ötürülən sualda sıra adi və sual işarəsi yoxdur."]
  ],
  mc:[
    ["Hansı cümlə düzdür?",["I was tired, so I went home.","I was tired, I went home.","I was tired I went home.","I was tired so, I went home."]],
    ["Hansı cümlə düzdür?",["When I arrived, the shop was closed.","When I arrived the shop, was closed.","When, I arrived the shop was closed.","When I arrived. The shop was closed."]],
    ["Hansı cümlə düzdür?",["I stayed at home because I was ill.","I stayed at home. Because I was ill.","Because I was ill. I stayed at home.","I stayed at home because, I was ill."]],
    ["Böyük hərflər hansında düzdür?",["I live in Baku and speak Azerbaijani and English.","i live in baku and speak azerbaijani and english.","I live in baku and speak Azerbaijani and english.","I live in Baku and speak azerbaijani and english."]],
    ["Böyük hərflər hansında düzdür?",["We met on Monday, 5 May.","We met on monday, 5 may.","We met on Monday, 5 may.","we met on Monday, 5 May."]],
    ["Hansı cümlə düzdür?",["The flat is small. However, it is very cheap.","The flat is small, however it is very cheap.","The flat is small however, it is very cheap.","The flat is small. However it, is very cheap."]],
    ["Hansı cümlə düzdür?",["I bought bread, milk and eggs.","I bought bread milk and eggs.","I bought, bread, milk, and, eggs.","I bought bread, and milk, and, eggs."]],
    ["Hansı cümlə düzdür?",["The dog is wagging its tail.","The dog is wagging it's tail.","The dog is wagging its' tail.","The dog is wagging it is tail."]],
    ["Hansı cümlə düzdür?",["I asked him where he lived.","I asked him where he lived?","I asked him where did he live?","I asked him, where he lived?"]],
    ["Akademik yazıda (IELTS) hansı daha uyğundur?",["Many people do not have enough time.","Many people don't got enough time.","Many people doesn't have enough time.","Many people dont have enough time."]],
    ["Hansı cümlə düzdür?",["My father, who is a doctor, works in Baku.","My father who is a doctor, works in Baku.","My father, who is a doctor works in Baku.","My father, that is a doctor, works in Baku."]],
    ["Hansı tam cümlədir?",["Although it was raining, we went out.","Although it was raining.","Because the weather.","When I was a child."]],
    ["Hansı cümlə düzdür?",["If you need help, call me.","If you need help call, me.","If, you need help call me.","If you need help. Call me."]],
    ["Hansı cümlə düzdür?",["For example, many students work part-time.","For example many, students work part-time.","For example. Many students work part-time.","For, example many students work part-time."]]
  ],
  type:[
    ["Birləşdir (so): «It was late. We took a taxi.»",["it was late so we took a taxi"]],
    ["Birləşdir (because): «I didn't go out. It was raining.»",["i didn't go out because it was raining","i did not go out because it was raining"]],
    ["Birləşdir (although): «It was cold. We swam in the sea.»",["although it was cold we swam in the sea","we swam in the sea although it was cold"]],
    ["Akademik forma (qısaltmasız): can't →",["cannot"]],
    ["Akademik forma (qısaltmasız): won't →",["will not"]],
    ["its / it's: «The city is famous for ___ old buildings.»",["its"]],
    ["Birləşdir (who): «My uncle is a pilot. He lives in Dubai.» → My uncle, who …",["my uncle who lives in dubai is a pilot","my uncle who is a pilot lives in dubai"]],
    ["Birləşdir (when): «I was a child. I lived in Ganja.»",["when i was a child i lived in ganja","i lived in ganja when i was a child"]],
    ["«Cars cause pollution. ___, they make cities noisy.» (əlavə olaraq)",["in addition","moreover","also","furthermore"]]
  ],
  fix:[
    ["I was tired I went to bed.",["i was tired so i went to bed","i was tired and i went to bed","because i was tired i went to bed","i went to bed because i was tired"]],
    ["Its a good idea.",["it's a good idea","it is a good idea"]],
    ["Many people thinks that cars are useful.",["many people think that cars are useful","many people think cars are useful"]],
    ["Although the city is big, but it is clean.",["although the city is big it is clean","the city is big but it is clean"]],
    ["Despite of the rain we went out.",["despite the rain we went out","in spite of the rain we went out"]],
    ["I asked him where did he live.",["i asked him where he lived"]]
  ],
  write:{task:"IELTS Task 2 tipli bir abzas yaz: «Should students learn a foreign language at school?» — 100–130 söz. Əsas fikir cümləsi + 2 səbəb + 1 nümunə; when/because/although hissələri, However və For example düz vergüllə.", min:100},
  speak:{task:"«Describe your town and say if you would like to live there in the future.» — 2 dəqiqə: fikirləri because, although, so, when ilə bağla.", secs:120},
  ref:"Murphy: Units 95–99, Appendix 4 (short forms)"
},
];
