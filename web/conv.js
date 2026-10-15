// Zirvə — Söhbət (danışıq partnyoru): A2–B1, IELTS Speaking Part 1 üslubunda gündəlik mövzular.
// Hər sual: q — sual, az — tərcümə, h — cavaba başlamaq üçün kömək, more — cavab çox qısa olanda əlavə sual.
// Orijinal material (Zirvə üçün yazılıb).
const CONV = [
{ id:"c01", title:"Özün haqqında", en:"About you", level:"A2", q:[
  {q:"Hi! My name is Emma. What's your name?", az:"Salam! Mənim adım Emmadır. Sənin adın nədir?", h:"My name is … . Nice to meet you.", more:"Nice to meet you! Do you like your name? Why?"},
  {q:"Where are you from?", az:"Haralısan?", h:"I'm from … . It is in … .", more:"Is it a big city or a small town?"},
  {q:"How old are you, if I can ask?", az:"Soruşmaq olarsa, neçə yaşın var?", h:"I am … years old.", more:"And when is your birthday?"},
  {q:"What do you do? Do you work or study?", az:"Nə işlə məşğulsan? İşləyirsən, yoxsa oxuyursan?", h:"I work in … . / I am a … .", more:"Do you like it? Why?"},
  {q:"What do you like doing in your free time?", az:"Boş vaxtında nə etməyi xoşlayırsan?", h:"I like … -ing, because … .", more:"How often do you do that?"},
  {q:"Why are you learning English?", az:"Niyə ingilis dili öyrənirsən?", h:"I am learning English because … .", more:"Is English difficult for you? Why?"}
]},
{ id:"c02", title:"Ev və şəhər", en:"Home and city", level:"A2", q:[
  {q:"Where do you live now?", az:"İndi harada yaşayırsan?", h:"I live in … . I live in a house / a flat.", more:"Do you live alone or with your family?"},
  {q:"Tell me about your home. Is it big or small?", az:"Evin haqqında danış. Böyükdür, yoxsa kiçik?", h:"My home is … . It has … rooms.", more:"Which room do you like most? Why?"},
  {q:"What do you like about your city?", az:"Şəhərində nəyi xoşlayırsan?", h:"I like … because … .", more:"Can you give me an example?"},
  {q:"Is there anything you don't like about your city?", az:"Şəhərində xoşlamadığın bir şey varmı?", h:"I don't like … . For example, … .", more:"What can the city do to make it better?"},
  {q:"What can a tourist do in your city?", az:"Turist sənin şəhərində nə edə bilər?", h:"A tourist can visit … and … .", more:"What is your favourite place there?"},
  {q:"Do you want to live in another city in the future?", az:"Gələcəkdə başqa şəhərdə yaşamaq istəyirsən?", h:"Yes, I want to live in … because … . / No, because … .", more:"Why?"}
]},
{ id:"c03", title:"İş", en:"Work", level:"A2", q:[
  {q:"What is your job?", az:"İşin nədir?", h:"I work in … . My company … .", more:"What does your company do?"},
  {q:"What do you do on a normal working day?", az:"Adi iş günündə nə edirsən?", h:"In the morning I … . Then I … .", more:"What time do you start and finish work?"},
  {q:"What do you like about your job?", az:"İşində nəyi xoşlayırsan?", h:"I like … because … .", more:"Is there anything difficult in your job?"},
  {q:"Do you work with other people or alone?", az:"Başqaları ilə işləyirsən, yoxsa tək?", h:"I work with … . / I usually work alone.", more:"Do you like working that way? Why?"},
  {q:"Do you use English at work?", az:"İşdə ingilis dilindən istifadə edirsən?", h:"Yes, I use English when … . / Not yet, but … .", more:"When will English help you in your job?"},
  {q:"What job do you want to do in five years?", az:"Beş ildən sonra hansı işi görmək istəyirsən?", h:"In five years I want to … .", more:"What do you need to do for that?"}
]},
{ id:"c04", title:"Ailə", en:"Family", level:"A2", q:[
  {q:"Is your family big or small?", az:"Ailən böyükdür, yoxsa kiçik?", h:"My family is … . There are … people in my family.", more:"Who are they?"},
  {q:"Who are you closest to in your family?", az:"Ailəndə ən çox kimə yaxınsan?", h:"I am closest to my … because … .", more:"What do you do together?"},
  {q:"What do you usually do with your family at the weekend?", az:"Həftə sonu ailənlə adətən nə edirsən?", h:"At the weekend we usually … .", more:"Did you do that last weekend?"},
  {q:"Do you have brothers or sisters?", az:"Qardaşın və ya bacın var?", h:"I have … . / I don't have any … .", more:"What do they do?"},
  {q:"What do you like to cook or eat with your family?", az:"Ailənlə nə bişirməyi və ya yeməyi xoşlayırsan?", h:"We like to eat … . My mother cooks … .", more:"Can you describe that dish?"},
  {q:"Is family important in your country? Why?", az:"Sənin ölkəndə ailə vacibdirmi? Niyə?", h:"Yes, family is very important because … .", more:"Can you give an example?"}
]},
{ id:"c05", title:"Gündəlik rejim", en:"Daily routine", level:"A2", q:[
  {q:"What time do you usually get up?", az:"Adətən saat neçədə durursan?", h:"I usually get up at … .", more:"What do you do first in the morning?"},
  {q:"What do you have for breakfast?", az:"Səhər yeməyində nə yeyirsən?", h:"For breakfast I have … .", more:"Do you drink tea or coffee?"},
  {q:"How do you get to work?", az:"İşə necə gedirsən?", h:"I go to work by car / by bus / on foot. It takes … minutes.", more:"Do you like the journey? Why?"},
  {q:"What do you do in the evening?", az:"Axşam nə edirsən?", h:"In the evening I … .", more:"What did you do yesterday evening?"},
  {q:"When do you study English?", az:"İngilis dilini nə vaxt öyrənirsən?", h:"I study English in the … for … hours.", more:"What do you study first?"},
  {q:"What time do you go to bed?", az:"Saat neçədə yatırsan?", h:"I go to bed at … .", more:"Do you sleep well? Why?"}
]},
{ id:"c06", title:"Yemək", en:"Food", level:"A2", q:[
  {q:"What is your favourite food?", az:"Ən sevdiyin yemək nədir?", h:"My favourite food is … because … .", more:"How often do you eat it?"},
  {q:"Can you cook? What can you cook?", az:"Yemək bişirə bilirsən? Nə bişirə bilirsən?", h:"Yes, I can cook … . / No, I can't cook, but … .", more:"Who taught you?"},
  {q:"Do you prefer eating at home or in restaurants?", az:"Evdə yeməyi üstün tutursan, yoxsa restoranda?", h:"I prefer eating … because … .", more:"What is a good restaurant in your city?"},
  {q:"What is a traditional dish in your country?", az:"Ölkəndə ənənəvi yemək hansıdır?", h:"A traditional dish is … . It is made with … .", more:"When do people eat it?"},
  {q:"What did you eat yesterday?", az:"Dünən nə yedin?", h:"Yesterday I ate … . / For dinner I had … .", more:"Was it good?"},
  {q:"Do you want to try food from other countries?", az:"Başqa ölkələrin yeməklərini dadmaq istəyirsən?", h:"Yes, I want to try … food because … .", more:"Which country's food do you like most?"}
]},
{ id:"c07", title:"Boş vaxt", en:"Free time", level:"A2", q:[
  {q:"What do you do in your free time?", az:"Boş vaxtında nə edirsən?", h:"In my free time I … .", more:"Why do you like it?"},
  {q:"Do you play any sports?", az:"Hər hansı idmanla məşğul olursan?", h:"Yes, I play … . / No, but I like … .", more:"How often?"},
  {q:"Do you like watching films? What kind?", az:"Film izləməyi xoşlayırsan? Hansı növ?", h:"I like … films, for example … .", more:"What is the last film you watched?"},
  {q:"Do you listen to music? What kind?", az:"Musiqi dinləyirsən? Hansı növ?", h:"I listen to … when I … .", more:"Who is your favourite singer?"},
  {q:"What did you do last weekend?", az:"Keçən həftə sonu nə etdin?", h:"Last weekend I … and … .", more:"Did you enjoy it?"},
  {q:"Is there a new hobby you want to try?", az:"Sınamaq istədiyin yeni hobbi varmı?", h:"I want to try … because … .", more:"When will you start?"}
]},
{ id:"c08", title:"Səyahət", en:"Travel", level:"A2", q:[
  {q:"Do you like travelling? Why?", az:"Səyahət etməyi xoşlayırsan? Niyə?", h:"Yes, I like travelling because … .", more:"Where did you go last time?"},
  {q:"Which countries have you visited?", az:"Hansı ölkələrdə olmusan?", h:"I have visited … . / I haven't visited many countries yet.", more:"Which one did you like most?"},
  {q:"Where are you going to travel next?", az:"Növbəti dəfə hara səyahət edəcəksən?", h:"I am going to visit … in … .", more:"What are you going to do there?"},
  {q:"Do you prefer travelling alone or with friends?", az:"Tək səyahət etməyi üstün tutursan, yoxsa dostlarla?", h:"I prefer travelling with … because … .", more:"Why?"},
  {q:"What do you always take with you when you travel?", az:"Səyahətə həmişə nə götürürsən?", h:"I always take my … and … .", more:"Why is that important?"},
  {q:"What is the best way to travel in Europe, do you think?", az:"Səncə, Avropada ən yaxşı səyahət yolu hansıdır?", h:"I think the best way is by train / by plane because … .", more:"Why do you think so?"}
]},
{ id:"c09", title:"Keçən həftə sonu", en:"Last weekend", level:"A2", q:[
  {q:"What did you do last Saturday?", az:"Keçən şənbə nə etdin?", h:"Last Saturday I … .", more:"Who were you with?"},
  {q:"Did you go anywhere on Sunday?", az:"Bazar günü bir yerə getdin?", h:"Yes, I went to … . / No, I stayed at home and … .", more:"What did you do there?"},
  {q:"What did you eat at the weekend?", az:"Həftə sonu nə yedin?", h:"I ate … . It was … .", more:"Did you cook it?"},
  {q:"Did you study English at the weekend?", az:"Həftə sonu ingilis dili oxudun?", h:"Yes, I studied … for … . / No, because … .", more:"What did you learn?"},
  {q:"What was the best moment of your weekend?", az:"Həftə sonunun ən yaxşı anı nə idi?", h:"The best moment was when I … .", more:"Why was it good?"},
  {q:"What are you going to do next weekend?", az:"Gələn həftə sonu nə edəcəksən?", h:"Next weekend I am going to … .", more:"Why?"}
]},
{ id:"c10", title:"Alış-veriş", en:"Shopping", level:"A2", q:[
  {q:"Do you like shopping?", az:"Alış-verişi xoşlayırsan?", h:"Yes, I like shopping because … . / No, I don't, because … .", more:"Why?"},
  {q:"Where do you usually buy clothes?", az:"Paltarı adətən haradan alırsan?", h:"I usually buy clothes in … / online.", more:"Is it expensive there?"},
  {q:"Do you prefer shopping online or in shops?", az:"Onlayn alış-veriş edirsən, yoxsa mağazada?", h:"I prefer … because … .", more:"What do you usually buy online?"},
  {q:"What did you buy last week?", az:"Keçən həftə nə aldın?", h:"Last week I bought … .", more:"How much was it?"},
  {q:"Is shopping expensive in your city?", az:"Şəhərində alış-veriş bahadır?", h:"Some things are expensive, for example … .", more:"What is cheap there?"},
  {q:"What do you want to buy in the future?", az:"Gələcəkdə nə almaq istəyirsən?", h:"I want to buy a … because … .", more:"When are you going to buy it?"}
]},
{ id:"c11", title:"Hava və fəsillər", en:"Weather and seasons", level:"A2", q:[
  {q:"What is the weather like today?", az:"Bu gün hava necədir?", h:"Today it is … . It is … degrees.", more:"Do you like this weather?"},
  {q:"What is your favourite season? Why?", az:"Ən sevdiyin fəsil hansıdır? Niyə?", h:"My favourite season is … because … .", more:"What do you do in that season?"},
  {q:"Is it windy in your city?", az:"Şəhərində külək olur?", h:"Yes, it is often windy, especially in … .", more:"How does the weather change in winter?"},
  {q:"What do you do when it rains?", az:"Yağış yağanda nə edirsən?", h:"When it rains, I usually … .", more:"Do you like rainy days?"},
  {q:"Do you prefer hot or cold weather?", az:"İsti havanı xoşlayırsan, yoxsa soyuq?", h:"I prefer … weather because … .", more:"Why?"},
  {q:"What will the weather be like in February in Europe, do you think?", az:"Səncə, fevralda Avropada hava necə olacaq?", h:"I think it will be cold, so I will take … .", more:"What clothes will you take?"}
]},
{ id:"c12", title:"İngilis dili öyrənmək", en:"Learning English", level:"A2", q:[
  {q:"When did you start learning English?", az:"İngilis dilini nə vaxt öyrənməyə başladın?", h:"I started learning English … ago.", more:"Why did you start?"},
  {q:"How do you study English every day?", az:"Hər gün ingilis dilini necə öyrənirsən?", h:"Every day I learn new words, I … and I … .", more:"Which part do you like most?"},
  {q:"What is the most difficult part of English for you?", az:"İngilis dilində sənin üçün ən çətini nədir?", h:"The most difficult part is … because … .", more:"What do you do to make it easier?"},
  {q:"Do you watch videos or listen to podcasts in English?", az:"İngiliscə video izləyirsən və ya podkast dinləyirsən?", h:"Yes, I watch … . / Not yet, but I want to … .", more:"Do you understand everything?"},
  {q:"Why is IELTS important for you?", az:"IELTS sənin üçün niyə vacibdir?", h:"IELTS is important for me because … .", more:"What score do you need?"},
  {q:"What will you do when your English is very good?", az:"İngiliscən çox yaxşı olanda nə edəcəksən?", h:"When my English is very good, I will … .", more:"Why is that important to you?"}
]},
{ id:"c13", title:"Telefon və internet", en:"Phone and internet", level:"A2", q:[
  {q:"How many hours a day do you use your phone?", az:"Gündə neçə saat telefondan istifadə edirsən?", h:"I use my phone about … hours a day.", more:"Is that too much, do you think?"},
  {q:"What apps do you use most?", az:"Ən çox hansı tətbiqlərdən istifadə edirsən?", h:"I use … and … most, because … .", more:"What do you do on them?"},
  {q:"Do you use social media for work?", az:"Sosial şəbəkələrdən iş üçün istifadə edirsən?", h:"Yes, I use … to … . / No, I use it only for … .", more:"Does it help you?"},
  {q:"Can you live one day without the internet?", az:"Bir gün internetsiz yaşaya bilərsən?", h:"Yes, I can, because … . / No, I can't, because … .", more:"What would you do that day?"},
  {q:"How did people communicate before mobile phones?", az:"Mobil telefonlardan əvvəl insanlar necə ünsiyyət qururdu?", h:"Before mobile phones, people used to … .", more:"Was it better or worse?"},
  {q:"Do you think children should have phones?", az:"Səncə, uşaqların telefonu olmalıdır?", h:"I think children should / shouldn't have phones because … .", more:"At what age?"}
]},
{ id:"c14", title:"Gələcək planlar", en:"Future plans", level:"A2", q:[
  {q:"What are you going to do this evening?", az:"Bu axşam nə edəcəksən?", h:"This evening I am going to … .", more:"And after that?"},
  {q:"What are your plans for next month?", az:"Gələn ay üçün planların nədir?", h:"Next month I am going to … .", more:"Why is that important?"},
  {q:"Where do you want to live in ten years?", az:"On ildən sonra harada yaşamaq istəyirsən?", h:"In ten years I want to live in … because … .", more:"What will your life be like there?"},
  {q:"What will you do on your trip to Europe?", az:"Avropa səfərində nə edəcəksən?", h:"I will visit … and I will … .", more:"Which city are you most excited about?"},
  {q:"What new skill do you want to learn?", az:"Hansı yeni bacarığı öyrənmək istəyirsən?", h:"I want to learn … because … .", more:"How will you learn it?"},
  {q:"What is your biggest goal this year?", az:"Bu il ən böyük məqsədin nədir?", h:"My biggest goal this year is to … .", more:"What will you do to reach it?"}
]}
];
