// Murphy formatında tapşırıq qrupları (orijinal məzmun) — 1-ci hissə
// Hər qrup: ins (tapşırıq), az (tərcümə), ex (nümunə — 0-cı bənd), items.
// items: q-da hər ___ üçün a-da bir siyahı (bütün qəbul olunan cavablar, kiçik hərflə);
// tam cümlə cavabları full: [...] (kiçik hərf, sonda durğu işarəsi yoxdur).
var GRAM_SETS = typeof GRAM_SETS === 'undefined' ? {} : GRAM_SETS;
Object.assign(GRAM_SETS, {
  g01: [
    { ins: "Complete the sentences with am, is or are.", az: "Boşluqlara am, is və ya are yaz.",
      ex: ["My brother ___ a driver.", "is"],
      items: [
        { q: "I ___ hungry.", a: [["am"]] },
        { q: "Baku ___ a big city.", a: [["is"]] },
        { q: "My parents ___ at work now.", a: [["are"]] },
        { q: "You ___ my best friend.", a: [["are"]] },
        { q: "It ___ very cold today.", a: [["is"]] },
        { q: "Murad and I ___ colleagues.", a: [["are"]] },
        { q: "This tea ___ very hot.", a: [["is"]] },
        { q: "My son ___ seven years old.", a: [["is"]] }
      ] },
    { ins: "Complete the sentences with was, were, have or has.", az: "Boşluqlara was, were, have və ya has yaz.",
      ex: ["My sister ___ a new phone.", "has"],
      items: [
        { q: "We ___ at home last night.", a: [["were"]] },
        { q: "I ___ two children.", a: [["have"]] },
        { q: "The weather ___ nice yesterday.", a: [["was"]] },
        { q: "Elvin ___ a big car.", a: [["has"]] },
        { q: "My grandparents ___ teachers many years ago.", a: [["were"]] },
        { q: "I ___ very tired yesterday.", a: [["was"]] },
        { q: "The hotel ___ a nice garden.", a: [["has"]] },
        { q: "You ___ a beautiful voice.", a: [["have"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["___ (Are / Do) you tired?", "Are"],
      items: [
        { q: "___ (Is / Does) your brother work in a bank?", a: [["does"]] },
        { q: "___ (Are / Do) you a student?", a: [["are"]] },
        { q: "She ___ (isn't / doesn't) like coffee.", a: [["doesn't","does not"]] },
        { q: "We ___ (aren't / don't) ready.", a: [["aren't","are not"]] },
        { q: "___ (Did / Were) you at work yesterday?", a: [["were"]] },
        { q: "___ (Did / Were) they go home early?", a: [["did"]] },
        { q: "He ___ (isn't / doesn't) have a car.", a: [["doesn't","does not"]] },
        { q: "Where ___ (do / are) your parents live?", a: [["do"]] }
      ] },
    { ins: "Write negative sentences.", az: "İnkar cümlə yaz.",
      ex: ["I am hungry. →", "I'm not hungry."],
      items: [
        { q: "She is at home. →", full: ["she isn't at home", "she is not at home", "she's not at home"] },
        { q: "They work on Saturdays. →", full: ["they don't work on saturdays", "they do not work on saturdays"] },
        { q: "He likes fish. →", full: ["he doesn't like fish", "he does not like fish"] },
        { q: "We were late. →", full: ["we weren't late", "we were not late"] },
        { q: "I have a bike. →", full: ["i don't have a bike", "i do not have a bike"] },
        { q: "Nigar went to the party. →", full: ["nigar didn't go to the party", "nigar did not go to the party"] },
        { q: "The shop was open. →", full: ["the shop wasn't open", "the shop was not open"] },
        { q: "My father drinks coffee. →", full: ["my father doesn't drink coffee", "my father does not drink coffee"] }
      ] },
    { ins: "Write questions.", az: "Sual cümləsi yaz.",
      ex: ["You are busy. →", "Are you busy?"],
      items: [
        { q: "She is a doctor. →", full: ["is she a doctor"] },
        { q: "You live near here. →", full: ["do you live near here"] },
        { q: "Your brother has a car. →", full: ["does your brother have a car"] },
        { q: "They were at the meeting. →", full: ["were they at the meeting"] },
        { q: "He played football yesterday. →", full: ["did he play football yesterday"] },
        { q: "(where / you / work?) →", full: ["where do you work"] },
        { q: "(what time / the bank / open?) →", full: ["what time does the bank open"] },
        { q: "(why / she / leave early yesterday?) →", full: ["why did she leave early yesterday"] }
      ] }
  ],
  g02: [
    { ins: "Put the words in the correct order.", az: "Sözləri düzgün sıraya qoy.",
      ex: ["(tea / I / drink) →", "I drink tea."],
      items: [
        { q: "(football / play / we) →", full: ["we play football"] },
        { q: "(reads / my mother / books) →", full: ["my mother reads books"] },
        { q: "(a new car / has / Kamran) →", full: ["kamran has a new car"] },
        { q: "(likes / she / music) →", full: ["she likes music"] },
        { q: "(English / speak / they) →", full: ["they speak english"] },
        { q: "(the window / opened / my father) →", full: ["my father opened the window"] },
        { q: "(in a bank / works / Leyla) →", full: ["leyla works in a bank"] }
      ] },
    { ins: "Put the word in brackets in the correct place. Write the full sentence.", az: "Mötərizədəki sözü düzgün yerə qoy və cümləni tam yaz.",
      ex: ["I walk to work. (usually) →", "I usually walk to work."],
      items: [
        { q: "We watch films at home. (often) →", full: ["we often watch films at home"] },
        { q: "She is late. (always) →", full: ["she's always late", "she is always late"] },
        { q: "I drink coffee. (never) →", full: ["i never drink coffee"] },
        { q: "They are tired in the evening. (often) →", full: ["they're often tired in the evening", "they are often tired in the evening"] },
        { q: "My brother cooks dinner. (usually) →", full: ["my brother usually cooks dinner"] },
        { q: "I am hungry in the morning. (never) →", full: ["i'm never hungry in the morning", "i am never hungry in the morning"] },
        { q: "He gets up early. (always) →", full: ["he always gets up early"] },
        { q: "The bus is full. (usually) →", full: ["the bus is usually full"] }
      ] },
    { ins: "Write the sentences in the correct order. Put the place before the time.", az: "Cümlələri düzgün sırada yaz: əvvəl yer, sonra vaxt.",
      ex: ["(she / works / every day / in Baku) →", "She works in Baku every day."],
      items: [
        { q: "(I / was / yesterday / at home) →", full: ["i was at home yesterday", "yesterday i was at home"] },
        { q: "(we / go / on Sundays / to the park) →", full: ["we go to the park on sundays", "on sundays we go to the park"] },
        { q: "(my father / goes / every morning / to work) →", full: ["my father goes to work every morning", "every morning my father goes to work"] },
        { q: "(they / met / last week / at the station) →", full: ["they met at the station last week", "last week they met at the station"] },
        { q: "(he / calls / every day / his mother) →", full: ["he calls his mother every day", "every day he calls his mother"] },
        { q: "(I / go / twice a week / to the gym) →", full: ["i go to the gym twice a week", "twice a week i go to the gym"] },
        { q: "(the children / were / all day / at school) →", full: ["the children were at school all day"] }
      ] },
    { ins: "Write the sentence in another way.", az: "Cümləni başqa yolla yaz (kimə + nəyi ↔ nəyi + to + kimə).",
      ex: ["Give the book to me. →", "Give me the book."],
      items: [
        { q: "I sent a message to my brother. →", full: ["i sent my brother a message"] },
        { q: "She showed her photos to us. →", full: ["she showed us her photos"] },
        { q: "Give me your phone. →", full: ["give your phone to me"] },
        { q: "He gave some flowers to his wife. →", full: ["he gave his wife some flowers"] },
        { q: "Show your ticket to the driver. →", full: ["show the driver your ticket"] },
        { q: "We sent our teacher a card. →", full: ["we sent a card to our teacher"] },
        { q: "I gave the keys to Anar. →", full: ["i gave anar the keys"] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["I tea drink every day. →", "I drink tea every day."],
      items: [
        { q: "She every day goes to work. →", full: ["she goes to work every day", "every day she goes to work"] },
        { q: "I go always to the gym. →", full: ["i always go to the gym"] },
        { q: "Where you work? →", full: ["where do you work"] },
        { q: "They have two news cars. →", full: ["they have two new cars"] },
        { q: "Give to me the book. →", full: ["give me the book", "give the book to me"] },
        { q: "He yesterday met his friend. →", full: ["he met his friend yesterday", "yesterday he met his friend"] },
        { q: "I every morning drink tea. →", full: ["i drink tea every morning", "every morning i drink tea"] },
        { q: "Do you music like? →", full: ["do you like music"] },
        { q: "He is a driver careful. →", full: ["he's a careful driver", "he is a careful driver"] }
      ] }
  ],
  g03: [
    { ins: "Put the verb in the Present Simple.", az: "Mötərizədəki feli Present Simple-də yaz.",
      ex: ["She ___ (work) in a hospital.", "works"],
      items: [
        { q: "My father ___ (watch) the news every evening.", a: [["watches"]] },
        { q: "He ___ (go) to the gym on Mondays.", a: [["goes"]] },
        { q: "Aysel ___ (study) English at home.", a: [["studies"]] },
        { q: "The shop ___ (open) at nine.", a: [["opens"]] },
        { q: "We ___ (live) in Sumgait.", a: [["live"]] },
        { q: "My brother ___ (have) two cats.", a: [["has"]] },
        { q: "The bus ___ (stop) near my house.", a: [["stops"]] },
        { q: "The sun ___ (rise) in the east.", a: [["rises"]] }
      ] },
    { ins: "Put the verb in the Present Continuous (am/is/are + -ing).", az: "Feli Present Continuous-da yaz (am/is/are + -ing).",
      ex: ["Look! It ___ (rain).", "is raining"],
      items: [
        { q: "I ___ (write) an email now.", a: [["am writing"]] },
        { q: "The children ___ (swim) in the sea.", a: [["are swimming"]] },
        { q: "Listen! The baby ___ (cry).", a: [["is crying"]] },
        { q: "We ___ (sit) in a cafe at the moment.", a: [["are sitting"]] },
        { q: "She ___ (make) dinner right now.", a: [["is making"]] },
        { q: "My parents ___ (have) breakfast now.", a: [["are having"]] },
        { q: "Be quiet! Your father ___ (sleep).", a: [["is sleeping"]] },
        { q: "Why ___ you ___ (laugh)?", a: [["are"], ["laughing"]] },
        { q: "Rashad ___ (not / work) today.", a: [["isn't working","is not working"]] }
      ] },
    { ins: "Choose the correct form.", az: "Düzgün formanı seç.",
      ex: ["I ___ (work / am working) in a bank.", "work"],
      items: [
        { q: "Look! It ___ (snows / is snowing).", a: [["is snowing"]] },
        { q: "She usually ___ (walks / is walking) to work.", a: [["walks"]] },
        { q: "Please be quiet. I ___ (study / am studying).", a: [["am studying"]] },
        { q: "I ___ (know / am knowing) the answer.", a: [["know"]] },
        { q: "We ___ (want / are wanting) a bigger flat.", a: [["want"]] },
        { q: "He ___ (has / is having) two sisters.", a: [["has"]] },
        { q: "They ___ (have / are having) lunch at the moment.", a: [["are having"]] },
        { q: "I ___ (don't understand / am not understanding) this word.", a: [["don't understand","do not understand"]] },
        { q: "My brother ___ (works / is working) from home this week.", a: [["is working"]] }
      ] },
    { ins: "Present Simple or Present Continuous? Put the verb in the correct form.", az: "Present Simple, yoxsa Present Continuous? Feli düzgün formada yaz.",
      ex: ["She ___ (speak) English very well.", "speaks"],
      items: [
        { q: "Ali ___ (not / eat) meat.", a: [["doesn't eat","does not eat"]] },
        { q: "Listen! Your phone ___ (ring).", a: [["is ringing"]] },
        { q: "How often ___ you ___ (go) to the cinema?", a: [["do"], ["go"]] },
        { q: "What ___ you ___ (do) now?", a: [["are"], ["doing"]] },
        { q: "My sister ___ (read) a very good book these days.", a: [["is reading"]] },
        { q: "___ your father ___ (speak) Russian?", a: [["does"], ["speak"]] },
        { q: "I ___ (not / like) cold weather.", a: [["don't like","do not like"]] },
        { q: "Hurry up! The taxi ___ (wait) for us.", a: [["is waiting"]] },
        { q: "The film usually ___ (start) at eight.", a: [["starts"]] },
        { q: "I'm busy. I ___ (cook) dinner at the moment.", a: [["am cooking"]] }
      ] },
    { ins: "Write questions or negative sentences. Use the Present Simple or the Present Continuous.", az: "Sual və ya inkar cümlə yaz. Present Simple və ya Present Continuous işlət.",
      ex: ["(you / speak / Russian?) →", "Do you speak Russian?"],
      items: [
        { q: "(what / you / do / now?) →", full: ["what are you doing now"] },
        { q: "(she / listen / to me / now?) →", full: ["is she listening to me now"] },
        { q: "(how often / he / play / tennis?) →", full: ["how often does he play tennis"] },
        { q: "(they / not / watch TV / at the moment) →", full: ["they aren't watching tv at the moment", "they are not watching tv at the moment", "they're not watching tv at the moment"] },
        { q: "(my brother / not / drink / coffee) →", full: ["my brother doesn't drink coffee", "my brother does not drink coffee"] },
        { q: "(where / your parents / live?) →", full: ["where do your parents live"] },
        { q: "(why / you / wear / a coat / today?) →", full: ["why are you wearing a coat today"] },
        { q: "(she / not / understand / Turkish) →", full: ["she doesn't understand turkish", "she does not understand turkish"] }
      ] }
  ],
  g20: [
    { ins: "Complete the sentences with me, him, her, it, us or them.", az: "Boşluqlara me, him, her, it, us və ya them yaz.",
      ex: ["I know Aysel. I see ___ every day.", "her"],
      items: [
        { q: "Where are my keys? I need ___.", a: [["them"]] },
        { q: "Rashad is my friend. I often play chess with ___.", a: [["him"]] },
        { q: "We are at the station. Please call ___.", a: [["us"]] },
        { q: "I'm tired. Please help ___.", a: [["me"]] },
        { q: "These are my parents. I love ___ very much.", a: [["them"]] },
        { q: "My sister lives in Guba. I visit ___ on Sundays.", a: [["her"]] },
        { q: "This is a good book. Do you want ___?", a: [["it"]] },
        { q: "Elnur and I are at the cinema. Come with ___!", a: [["us"]] }
      ] },
    { ins: "Complete the sentences with my, your, his, her, its, our or their.", az: "Boşluqlara my, your, his, her, its, our və ya their yaz.",
      ex: ["Rashad is married. ___ wife is a doctor.", "His"],
      items: [
        { q: "Aysel has a brother. ___ brother is a pilot.", a: [["her"]] },
        { q: "We have a new flat. ___ flat is very big.", a: [["our"]] },
        { q: "I have a dog. ___ name is Bobik.", a: [["its"]] },
        { q: "Mr Aliyev has a shop. ___ shop is in the centre.", a: [["his"]] },
        { q: "My parents have a garden. ___ garden is beautiful.", a: [["their"]] },
        { q: "Are you Murad's sister? What's ___ name?", a: [["your"]] },
        { q: "The city is famous for ___ old buildings.", a: [["its"]] },
        { q: "Leyla is married. ___ husband is a teacher.", a: [["her"]] }
      ] },
    { ins: "Write mine, yours, his, hers, ours, theirs or whose.", az: "mine, yours, his, hers, ours, theirs və ya whose yaz.",
      ex: ["This is my bag. → This bag is ___.", "mine"],
      items: [
        { q: "This is our car. → This car is ___.", a: [["ours"]] },
        { q: "These are her shoes. → These shoes are ___.", a: [["hers"]] },
        { q: "Is this your pen? → Is this pen ___?", a: [["yours"]] },
        { q: "That's their house. → That house is ___.", a: [["theirs"]] },
        { q: "These are his keys. → These keys are ___.", a: [["his"]] },
        { q: "This is my coat. → This coat is ___.", a: [["mine"]] },
        { q: "___ phone is this? — It's Leyla's.", a: [["whose"]] },
        { q: "Is this coffee ___ (your / yours)?", a: [["yours"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["___ (This / These) shoes are new.", "These"],
      items: [
        { q: "___ (This / These) coffee is very hot.", a: [["this"]] },
        { q: "Look at ___ (that / those) birds in the sky!", a: [["those"]] },
        { q: "This is ___ (Ali's / Alis) car.", a: [["ali's"]] },
        { q: "My ___ (parent's / parents') house is in Shaki.", a: [["parents'"]] },
        { q: "The ___ (children's / childrens') toys are everywhere.", a: [["children's"]] },
        { q: "___ (Its / It's) very cold today.", a: [["it's","it is"]] },
        { q: "The cat is playing with ___ (its / it's) ball.", a: [["its"]] },
        { q: "These cups are dirty. I need clean ___ (one / ones).", a: [["ones"]] },
        { q: "My ___ (sister's / sisters) husband is a doctor.", a: [["sister's"]] }
      ] },
    { ins: "Complete the sentences with myself, yourself, himself, herself, ourselves or themselves.", az: "Boşluqlara myself, yourself, himself, herself, ourselves və ya themselves yaz.",
      ex: ["He cut ___ with a knife.", "himself"],
      items: [
        { q: "I made this dinner ___.", a: [["myself"]] },
        { q: "She lives by ___.", a: [["herself"]] },
        { q: "We painted the room ___.", a: [["ourselves"]] },
        { q: "They built the house ___.", a: [["themselves"]] },
        { q: "You always talk about ___.", a: [["yourself"]] },
        { q: "My grandfather often talks to ___.", a: [["himself"]] },
        { q: "The children are dressing ___ now.", a: [["themselves"]] }
      ] }
  ],
  g04: [
    { ins: "Put the verb in the Past Simple.", az: "Feli Past Simple-də yaz.",
      ex: ["I ___ (visit) my grandmother yesterday.", "visited"],
      items: [
        { q: "We ___ (go) to the market on Saturday.", a: [["went"]] },
        { q: "She ___ (study) at Baku State University.", a: [["studied"]] },
        { q: "The bus ___ (stop) near the school.", a: [["stopped"]] },
        { q: "I ___ (buy) a new jacket last week.", a: [["bought"]] },
        { q: "They ___ (play) football after work.", a: [["played"]] },
        { q: "He ___ (leave) home at seven.", a: [["left"]] },
        { q: "My parents ___ (meet) in 1995.", a: [["met"]] },
        { q: "I ___ (lose) my keys yesterday.", a: [["lost"]] },
        { q: "We ___ (eat) fish for dinner.", a: [["ate"]] }
      ] },
    { ins: "Write negative sentences or questions in the Past Simple.", az: "Past Simple-də inkar və ya sual cümləsi yaz.",
      ex: ["I saw the match. (negative) →", "I didn't see the match."],
      items: [
        { q: "She bought a new phone. (negative) →", full: ["she didn't buy a new phone", "she did not buy a new phone"] },
        { q: "They were at home. (negative) →", full: ["they weren't at home", "they were not at home"] },
        { q: "You slept well. (question) →", full: ["did you sleep well"] },
        { q: "He was tired. (question) →", full: ["was he tired"] },
        { q: "We went to the cinema. (negative) →", full: ["we didn't go to the cinema", "we did not go to the cinema"] },
        { q: "(where / you / buy / this bag?) →", full: ["where did you buy this bag"] },
        { q: "(what time / the film / start?) →", full: ["what time did the film start"] },
        { q: "(the hotel / expensive?) →", full: ["was the hotel expensive"] }
      ] },
    { ins: "Put the verb in the Past Continuous (was/were + -ing).", az: "Feli Past Continuous-da yaz (was/were + -ing).",
      ex: ["At 9 o'clock I ___ (have) dinner.", "was having"],
      items: [
        { q: "At 8 o'clock yesterday we ___ (watch) TV.", a: [["were watching"]] },
        { q: "What ___ you ___ (do) at 5 o'clock?", a: [["were"], ["doing"]] },
        { q: "It ___ (rain) when I left home.", a: [["was raining"]] },
        { q: "The children ___ (play) in the garden.", a: [["were playing"]] },
        { q: "She ___ (not / work) at 10 o'clock. She was at the doctor's.", a: [["wasn't working","was not working"]] },
        { q: "I ___ (drive) when you called.", a: [["was driving"]] },
        { q: "___ they ___ (sleep) when you arrived?", a: [["were"], ["sleeping"]] }
      ] },
    { ins: "Past Simple or Past Continuous? Put the verbs in the correct form.", az: "Past Simple, yoxsa Past Continuous? Felləri düzgün formada yaz.",
      ex: ["I ___ (cook) when the lights ___ (go) out.", "was cooking … went"],
      items: [
        { q: "While I ___ (walk) home, I ___ (see) an old friend.", a: [["was walking"], ["saw"]] },
        { q: "When the teacher ___ (come) in, we ___ (talk).", a: [["came"], ["were talking"]] },
        { q: "When I ___ (hear) the news, I ___ (call) my mother.", a: [["heard"], ["called"]] },
        { q: "She ___ (open) the door and ___ (go) out.", a: [["opened"], ["went"]] },
        { q: "The phone ___ (ring) while I ___ (have) a shower.", a: [["rang"], ["was having"]] },
        { q: "I ___ (not / know) the answer, so I ___ (ask) the teacher.", a: [["didn't know","did not know"], ["asked"]] },
        { q: "What ___ you ___ (do) when I ___ (call) you?", a: [["were"], ["doing"], ["called"]] }
      ] },
    { ins: "Complete the sentences with used to, didn't use to or did … use to + the verb in brackets.", az: "Boşluqlara used to, didn't use to və ya did … use to + mötərizədəki feli yaz.",
      ex: ["I ___ (smoke), but I stopped two years ago.", "used to smoke"],
      items: [
        { q: "We ___ (live) in Ganja, but now we live in Baku.", a: [["used to live"]] },
        { q: "He ___ (play) football, but now he plays tennis.", a: [["used to play"]] },
        { q: "___ you ___ (have) long hair when you were a student?", a: [["did"], ["use to have"]] },
        { q: "My father ___ (not / drink) tea, but now he drinks it every day.", a: [["didn't use to drink","did not use to drink"]] },
        { q: "This street ___ (be) very quiet, but now it is very busy.", a: [["used to be"]] },
        { q: "I ___ (not / like) fish, but now I love it.", a: [["didn't use to like","did not use to like"]] }
      ] }
  ],
  g23: [
    { ins: "Write the imperative. Use the verb in brackets, or Don't + verb.", az: "Əmr cümləsi yaz: mötərizədəki fel və ya Don't + fel.",
      ex: ["___ (sit) down, please.", "Sit"],
      items: [
        { q: "___ (not / touch) the oven! It's hot.", a: [["don't touch","do not touch"]] },
        { q: "___ (be) careful! The floor is wet.", a: [["be"]] },
        { q: "___ (not / be) late tomorrow.", a: [["don't be","do not be"]] },
        { q: "Please ___ (close) the window.", a: [["close"]] },
        { q: "___ (not / tell) Murad about the party.", a: [["don't tell","do not tell"]] },
        { q: "___ (wait) here, please.", a: [["wait"]] },
        { q: "___ (not / worry). Everything is OK.", a: [["don't worry","do not worry"]] }
      ] },
    { ins: "Choose the correct words.", az: "Düzgün sözləri seç.",
      ex: ["It's a nice day. ___ (Let's / Let's not) go for a walk.", "Let's"],
      items: [
        { q: "I'm very tired. ___ (Let's / Let's not) go out tonight.", a: [["let's not"]] },
        { q: "Your bag looks heavy. ___ (Shall I / Shall we) carry it for you?", a: [["shall i"]] },
        { q: "The bus is late. ___ (Let's / Let's not) take a taxi.", a: [["let's"]] },
        { q: "Where ___ (shall I / shall we) meet tomorrow? — At the station.", a: [["shall we"]] },
        { q: "___ (Let's / Let's to) start the lesson.", a: [["let's"]] },
        { q: "It's raining. ___ (Let's / Let's not) walk home. ___ (Let's / Let's not) take the bus.", a: [["let's not"], ["let's"]] },
        { q: "You look cold. ___ (Shall I / Shall we) close the door for you?", a: [["shall i"]] }
      ] },
    { ins: "Choose the correct words.", az: "Düzgün sözləri seç.",
      ex: ["___ (Would you like / Do you like) some tea? — Yes, please.", "Would you like"],
      items: [
        { q: "___ (Would you like / Do you like) football? — Yes, I watch every match.", a: [["do you like"]] },
        { q: "___ (Would you like / Do you like) to come with us tonight? — I'd love to.", a: [["would you like"]] },
        { q: "___ (I want / I'd like) a glass of water, please.", a: [["i'd like","i would like"]] },
        { q: "Would you like ___ (go / to go) to the cinema?", a: [["to go"]] },
        { q: "I'd like ___ (book / to book) a table for two.", a: [["to book"]] },
        { q: "Would you like some cake? — ___ (Yes, please / Yes, I would like).", a: [["yes, please","yes please"]] },
        { q: "___ (Would you like / Do you like) a sandwich? — No, thank you.", a: [["would you like"]] },
        { q: "Would you like to visit us on Sunday? — I'd love ___ (to / it).", a: [["to"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["I'd rather ___ (stay / to stay) at home.", "stay"],
      items: [
        { q: "I'd rather walk ___ (than / that) take the bus.", a: [["than"]] },
        { q: "Do you want to go out tonight? — I'd rather ___ (not / don't).", a: [["not"]] },
        { q: "I'd rather ___ (have / to have) tea, not coffee.", a: [["have"]] },
        { q: "She'd rather not ___ (talk / talking) about it.", a: [["talk"]] },
        { q: "Would you like to drive? — No, I'd ___ (rather / like) not.", a: [["rather"]] },
        { q: "I'd rather ___ (go / going) by train than by plane.", a: [["go"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["Don't to touch it! →", "Don't touch it!"],
      items: [
        { q: "Let's to go to the park. →", full: ["let's go to the park"] },
        { q: "Would you like go with us? →", full: ["would you like to go with us"] },
        { q: "Not open the door! →", full: ["don't open the door", "do not open the door"] },
        { q: "I'd rather to stay at home. →", full: ["i'd rather stay at home", "i would rather stay at home"] },
        { q: "Let's don't wait. →", full: ["let's not wait"] },
        { q: "I want a coffee. (Say it politely.) →", full: ["i'd like a coffee", "i would like a coffee", "i'd like a coffee, please", "i would like a coffee, please", "i'd like a coffee please", "i would like a coffee please"] }
      ] }
  ],
  g05: [
    { ins: "Complete the sentences. Use going to + the verb in brackets.", az: "Cümlələri tamamla: going to + mötərizədəki fel.",
      ex: ["I ___ (start) a new course in January.", "am going to start"],
      items: [
        { q: "We ___ (buy) a new flat next year.", a: [["are going to buy"]] },
        { q: "Look at those clouds! It ___ (rain).", a: [["is going to rain"]] },
        { q: "She ___ (not / buy) a car.", a: [["isn't going to buy","is not going to buy"]] },
        { q: "___ you ___ (study) tonight?", a: [["are"], ["going to study"]] },
        { q: "Be careful! You ___ (fall).", a: [["are going to fall"]] },
        { q: "My parents ___ (visit) us on Sunday.", a: [["are going to visit"]] },
        { q: "I ___ (not / watch) TV tonight. I ___ (read) a book.", a: [["am not going to watch"], ["am going to read"]] }
      ] },
    { ins: "Complete the sentences with will or won't + the verb in brackets.", az: "Boşluqlara will və ya won't + mötərizədəki feli yaz.",
      ex: ["We have no bread. — OK, I ___ (buy) some.", "will buy"],
      items: [
        { q: "The phone is ringing. I ___ (answer) it.", a: [["will answer","'ll answer"]] },
        { q: "I ___ (not / tell) anyone. I promise.", a: [["won't tell","will not tell"]] },
        { q: "I think the exam ___ (be) difficult.", a: [["will be"]] },
        { q: "___ you ___ (help) me, please?", a: [["will"], ["help"]] },
        { q: "I don't think it ___ (rain) tomorrow.", a: [["will rain"]] },
        { q: "He ___ (not / be) at work tomorrow. He's ill.", a: [["won't be","will not be"]] },
        { q: "It's cold in here. — OK, I ___ (close) the window.", a: [["will close","'ll close"]] }
      ] },
    { ins: "Choose the correct form.", az: "Düzgün formanı seç.",
      ex: ["We ___ (will / are going to) buy a car. We decided last week.", "are going to"],
      items: [
        { q: "This bag is heavy. — Wait, I ___ (will / am going to) help you.", a: [["will"]] },
        { q: "I ___ (meet / am meeting) the manager at 3 o'clock tomorrow.", a: [["am meeting"]] },
        { q: "The train ___ (leaves / will leaves) at 6:15 tomorrow morning.", a: [["leaves"]] },
        { q: "We ___ (fly / are flying) to Tbilisi on Friday. We have the tickets.", a: [["are flying"]] },
        { q: "Look at the sky! It ___ (will / is going to) snow.", a: [["is going to"]] },
        { q: "I'm thirsty. — Sit down. I ___ (will / am going to) get you some water.", a: [["will"]] },
        { q: "The lesson ___ (starts / will to start) at nine tomorrow.", a: [["starts"]] },
        { q: "Elnur ___ (is going to / will) start a new job next month. He told me yesterday.", a: [["is going to"]] }
      ] },
    { ins: "Put the verbs in the correct form. Use will in one part and the Present Simple after when, if and as soon as.", az: "Felləri düzgün formada yaz: bir hissədə will, when / if / as soon as-dan sonra Present Simple.",
      ex: ["I'll call you when I ___ (get) home.", "get"],
      items: [
        { q: "If it ___ (rain), we ___ (stay) at home.", a: [["rains"], ["will stay","'ll stay"]] },
        { q: "I'll text you as soon as I ___ (arrive).", a: [["arrive"]] },
        { q: "When she ___ (finish) work, she ___ (call) you.", a: [["finishes"], ["will call","'ll call"]] },
        { q: "If you ___ (not / hurry), you ___ (miss) the bus.", a: [["don't hurry","do not hurry"], ["will miss","'ll miss"]] },
        { q: "We ___ (go) to the beach if the weather ___ (be) nice.", a: [["will go","'ll go"], ["is"]] },
        { q: "I ___ (buy) a car when I ___ (find) a job.", a: [["will buy","'ll buy"], ["find"]] },
        { q: "As soon as the film ___ (end), we ___ (go) home.", a: [["ends"], ["will go","'ll go"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["I will to go tomorrow. →", "I will go tomorrow."],
      items: [
        { q: "She will comes tomorrow. →", full: ["she will come tomorrow", "she'll come tomorrow"] },
        { q: "I going to buy a new phone. →", full: ["i'm going to buy a new phone", "i am going to buy a new phone"] },
        { q: "I'll call you when I will get home. →", full: ["i'll call you when i get home", "i will call you when i get home", "when i get home, i'll call you", "when i get home, i will call you", "when i get home i'll call you", "when i get home i will call you"] },
        { q: "If it will rain, we'll stay at home. →", full: ["if it rains, we'll stay at home", "if it rains, we will stay at home", "if it rains we'll stay at home", "if it rains we will stay at home", "we'll stay at home if it rains", "we will stay at home if it rains"] },
        { q: "He doesn't will come. →", full: ["he won't come", "he will not come"] },
        { q: "Are you going study tonight? →", full: ["are you going to study tonight"] }
      ] }
  ],
  g19: [
    { ins: "Write there is / there's, there are, is there or are there.", az: "there is / there's, there are, is there və ya are there yaz.",
      ex: ["___ a cafe near my office.", "There is / There's"],
      items: [
        { q: "___ three parks in our district.", a: [["there are"]] },
        { q: "___ a lot of people at the bus stop.", a: [["there are"]] },
        { q: "___ some milk in the fridge.", a: [["there's","there is"]] },
        { q: "___ two banks near here.", a: [["there are"]] },
        { q: "___ a big supermarket on my street.", a: [["there's","there is"]] },
        { q: "___ any eggs? — No, there aren't.", a: [["are there"]] },
        { q: "___ a pharmacy near here? — Yes, there is.", a: [["is there"]] },
        { q: "How many students ___ in your class?", a: [["are there"]] }
      ] },
    { ins: "Write there isn't or there aren't.", az: "there isn't və ya there aren't yaz.",
      ex: ["The village is very small. ___ a hospital.", "There isn't"],
      items: [
        { q: "___ any shops in this street.", a: [["there aren't","there are not"]] },
        { q: "___ a lift in this building. We use the stairs.", a: [["there isn't","there is not","there's not"]] },
        { q: "___ any trains on Sundays.", a: [["there aren't","there are not"]] },
        { q: "___ any milk. Let's buy some.", a: [["there isn't","there is not","there's not"]] },
        { q: "___ any chairs in the room.", a: [["there aren't","there are not"]] },
        { q: "Is there a bank near here? — No, ___.", a: [["there isn't","there is not","there's not"]] },
        { q: "Are there any buses to the airport? — No, ___.", a: [["there aren't","there are not"]] }
      ] },
    { ins: "Write there was, there were, were there or there will be.", az: "there was, there were, were there və ya there will be yaz.",
      ex: ["___ a cinema here ten years ago.", "There was"],
      items: [
        { q: "___ a lot of people at the wedding yesterday.", a: [["there were"]] },
        { q: "___ a meeting tomorrow at ten.", a: [["there'll be","there will be"]] },
        { q: "___ a big storm last night.", a: [["there was"]] },
        { q: "How many people ___ at the party last night?", a: [["were there"]] },
        { q: "___ any problems at work yesterday? — No, there weren't.", a: [["were there"]] },
        { q: "___ new buses in our city next year.", a: [["there'll be","there will be"]] },
        { q: "___ a lot of snow last winter.", a: [["there was"]] }
      ] },
    { ins: "Write there's or it's.", az: "there's və ya it's yaz.",
      ex: ["___ a new cafe on our street. It's very nice.", "There's"],
      items: [
        { q: "___ cold today. Wear a coat.", a: [["it's","it is"]] },
        { q: "___ 5 o'clock. Let's go home.", a: [["it's","it is"]] },
        { q: "___ a man at the door.", a: [["there's","there is"]] },
        { q: "How far is the airport? — ___ about 20 kilometres from here.", a: [["it's","it is"]] },
        { q: "___ nice to see you again.", a: [["it's","it is"]] },
        { q: "Look! ___ a bird on the window.", a: [["there's","there is"]] },
        { q: "___ raining. Take an umbrella.", a: [["it's","it is"]] },
        { q: "___ difficult to find a good flat in the city centre.", a: [["it's","it is"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["There is two cars outside. →", "There are two cars outside."],
      items: [
        { q: "In my room have a bed and a desk. →", full: ["there's a bed and a desk in my room", "there is a bed and a desk in my room", "in my room there's a bed and a desk", "in my room there is a bed and a desk"] },
        { q: "Is cold today. →", full: ["it's cold today", "it is cold today"] },
        { q: "Is there a bank near here? — Yes, there's. (Correct the answer.) →", full: ["yes, there is", "yes there is"] },
        { q: "There are a lot of water on the floor. →", full: ["there's a lot of water on the floor", "there is a lot of water on the floor"] },
        { q: "There will are a party on Friday. →", full: ["there'll be a party on friday", "there will be a party on friday"] },
        { q: "Are there any milk in the fridge? →", full: ["is there any milk in the fridge"] }
      ] }
  ],
  g06: [
    { ins: "Write the plural.", az: "Cəm formasını yaz.",
      ex: ["one car → two ___", "cars"],
      items: [
        { q: "one bus → two ___", a: [["buses"]] },
        { q: "one city → three ___", a: [["cities"]] },
        { q: "one child → two ___", a: [["children"]] },
        { q: "one woman → four ___", a: [["women"]] },
        { q: "one box → five ___", a: [["boxes"]] },
        { q: "one person → ten ___", a: [["people"]] },
        { q: "one tooth → two ___", a: [["teeth"]] },
        { q: "one watch → three ___", a: [["watches"]] },
        { q: "one man → six ___", a: [["men"]] }
      ] },
    { ins: "Write a or an.", az: "a və ya an yaz.",
      ex: ["I waited for ___ hour.", "an"],
      items: [
        { q: "She is ___ nurse.", a: [["a"]] },
        { q: "I eat ___ apple every day.", a: [["an"]] },
        { q: "He studies at ___ university.", a: [["a"]] },
        { q: "Do you have ___ umbrella?", a: [["an"]] },
        { q: "My father is ___ engineer.", a: [["an"]] },
        { q: "Paris is ___ European city.", a: [["a"]] },
        { q: "Wait ___ minute, please.", a: [["a"]] },
        { q: "He is ___ honest man.", a: [["an"]] }
      ] },
    { ins: "Write a, an or the.", az: "a, an və ya the yaz.",
      ex: ["I bought a lamp. ___ lamp was cheap.", "The"],
      items: [
        { q: "___ sun is very hot today.", a: [["the"]] },
        { q: "Please close ___ door. It's cold.", a: [["the"]] },
        { q: "I have ___ brother and two sisters.", a: [["a"]] },
        { q: "I read it on ___ internet.", a: [["the"]] },
        { q: "We stayed in a hotel. ___ hotel was very nice.", a: [["the"]] },
        { q: "Baku is ___ capital of Azerbaijan.", a: [["the"]] },
        { q: "I need ___ new phone.", a: [["a"]] },
        { q: "Let's go to ___ cinema tonight.", a: [["the"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["We don't have ___ (much / many) time.", "much"],
      items: [
        { q: "There are ___ (some / any) apples on the table.", a: [["some"]] },
        { q: "Are there ___ (some / any) shops near here?", a: [["any"]] },
        { q: "How ___ (much / many) people came to the party?", a: [["many"]] },
        { q: "I don't have ___ (much / many) money.", a: [["much"]] },
        { q: "I have ___ (a few / a little) friends in London.", a: [["a few"]] },
        { q: "There's ___ (a few / a little) sugar in my tea.", a: [["a little"]] },
        { q: "How ___ (much / many) water do you drink every day?", a: [["much"]] },
        { q: "I'd like ___ (some / any) water, please.", a: [["some"]] },
        { q: "We don't have ___ (some / any) bread.", a: [["any"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["She is nurse. →", "She is a nurse."],
      items: [
        { q: "I need an advice. →", full: ["i need some advice", "i need advice", "i need a piece of advice"] },
        { q: "The life is beautiful. →", full: ["life is beautiful"] },
        { q: "I have two childs. →", full: ["i have two children"] },
        { q: "I go to the work by bus. →", full: ["i go to work by bus"] },
        { q: "We bought new furnitures. →", full: ["we bought new furniture"] },
        { q: "The people is very friendly here. →", full: ["the people are very friendly here"] },
        { q: "She has informations about the trip. →", full: ["she has information about the trip", "she has some information about the trip"] },
        { q: "I usually go to the bed at 11. →", full: ["i usually go to bed at 11", "i usually go to bed at eleven"] }
      ] }
  ],
  g07: [
    { ins: "Put the adjective in the comparative form (-er or more).", az: "Sifəti müqayisə formasında yaz (-er və ya more).",
      ex: ["The train is ___ (fast) than the bus.", "faster"],
      items: [
        { q: "Today is ___ (hot) than yesterday.", a: [["hotter"]] },
        { q: "My new flat is ___ (big) than my old one.", a: [["bigger"]] },
        { q: "This phone is ___ (expensive) than that one.", a: [["more expensive"]] },
        { q: "Your English is ___ (good) than mine.", a: [["better"]] },
        { q: "The weather is ___ (bad) today than yesterday.", a: [["worse"]] },
        { q: "Aysel is ___ (busy) than her husband.", a: [["busier"]] },
        { q: "Tennis is ___ (interesting) than golf.", a: [["more interesting"]] },
        { q: "My brother is ___ (young) than me.", a: [["younger"]] },
        { q: "This street is ___ (nice) than ours.", a: [["nicer"]] }
      ] },
    { ins: "Put the adjective in the superlative form (the -est or the most).", az: "Sifəti «ən» formasında yaz (the -est və ya the most).",
      ex: ["Baku is ___ (big) city in Azerbaijan.", "the biggest"],
      items: [
        { q: "This is ___ (cheap) hotel in the town.", a: [["the cheapest"]] },
        { q: "This is ___ (expensive) restaurant in our city.", a: [["the most expensive"]] },
        { q: "It was ___ (good) day of my life.", a: [["the best"]] },
        { q: "Kamran is ___ (tall) in our family.", a: [["the tallest"]] },
        { q: "Yesterday was ___ (hot) day of the year.", a: [["the hottest"]] },
        { q: "That was ___ (bad) film of the year.", a: [["the worst"]] },
        { q: "She is ___ (happy) person in our office.", a: [["the happiest"]] },
        { q: "This is ___ (beautiful) park in the city.", a: [["the most beautiful"]] }
      ] },
    { ins: "Write in, of, than or as.", az: "in, of, than və ya as yaz.",
      ex: ["He is the tallest ___ the class.", "in"],
      items: [
        { q: "It's the longest river ___ the world.", a: [["in"]] },
        { q: "It was the best day ___ the year.", a: [["of"]] },
        { q: "My phone is as good ___ yours.", a: [["as"]] },
        { q: "The metro is faster ___ the bus.", a: [["than"]] },
        { q: "My bag is the same ___ yours.", a: [["as"]] },
        { q: "She is the youngest ___ all.", a: [["of"]] },
        { q: "Ali is not as tall ___ his brother.", a: [["as"]] },
        { q: "This is the oldest building ___ our city.", a: [["in"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["The metro is ___ (much / very) faster than the bus.", "much"],
      items: [
        { q: "She is ___ (a bit / very) older than her sister.", a: [["a bit"]] },
        { q: "This is ___ (the most / the more) expensive car in the shop.", a: [["the most"]] },
        { q: "The bus is ___ (less / least) comfortable than the train.", a: [["less"]] },
        { q: "This is ___ (the least / less) expensive phone in the shop.", a: [["the least"]] },
        { q: "My car is ___ (as / more) old as yours.", a: [["as"]] },
        { q: "This exercise is ___ (easier / more easy) than the last one.", a: [["easier"]] },
        { q: "He is ___ (taller / more tall) than me.", a: [["taller"]] },
        { q: "My flat isn't as big ___ (as / than) yours.", a: [["as"]] }
      ] },
    { ins: "Write sentences.", az: "Cümlə yaz.",
      ex: ["(The train / fast / the bus) →", "The train is faster than the bus."],
      items: [
        { q: "(My sister / old / me) →", full: ["my sister is older than me", "my sister is older than i am"] },
        { q: "(This hotel / cheap / that hotel) →", full: ["this hotel is cheaper than that hotel", "this hotel is cheaper than that one"] },
        { q: "(Gold / expensive / silver) →", full: ["gold is more expensive than silver"] },
        { q: "(The weather today / bad / yesterday) →", full: ["the weather today is worse than yesterday", "the weather today is worse than it was yesterday"] },
        { q: "(Everest / high mountain / in the world) →", full: ["everest is the highest mountain in the world"] },
        { q: "(My phone / as good as / yours) →", full: ["my phone is as good as yours"] },
        { q: "(Ali / not as tall as / his brother) →", full: ["ali isn't as tall as his brother", "ali is not as tall as his brother"] }
      ] }
  ],
  g24: [
    { ins: "Write the adverb.", az: "Zərf formasını yaz.",
      ex: ["quick → ___", "quickly"],
      items: [
        { q: "slow → ___", a: [["slowly"]] },
        { q: "careful → ___", a: [["carefully"]] },
        { q: "easy → ___", a: [["easily"]] },
        { q: "happy → ___", a: [["happily"]] },
        { q: "terrible → ___", a: [["terribly"]] },
        { q: "good → ___", a: [["well"]] },
        { q: "fast → ___", a: [["fast"]] },
        { q: "quiet → ___", a: [["quietly"]] },
        { q: "hard → ___", a: [["hard"]] }
      ] },
    { ins: "Choose the correct word: adjective or adverb?", az: "Düzgün sözü seç: sifət, yoxsa zərf?",
      ex: ["He drives ___ (careful / carefully).", "carefully"],
      items: [
        { q: "She is a ___ (careful / carefully) driver.", a: [["careful"]] },
        { q: "You look ___ (tired / tiredly).", a: [["tired"]] },
        { q: "Please speak ___ (slow / slowly).", a: [["slowly"]] },
        { q: "She speaks English very ___ (good / well).", a: [["well"]] },
        { q: "This soup tastes ___ (good / well).", a: [["good"]] },
        { q: "He works very ___ (hard / hardly).", a: [["hard"]] },
        { q: "The children played ___ (quiet / quietly) in their room.", a: [["quietly"]] },
        { q: "The test was ___ (easy / easily).", a: [["easy"]] },
        { q: "He always drives ___ (fast / fastly).", a: [["fast"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["This bag is ___ (too / enough) heavy for me.", "too"],
      items: [
        { q: "He isn't old ___ (too / enough) to drive.", a: [["enough"]] },
        { q: "We don't have ___ (too / enough) money for a new car.", a: [["enough"]] },
        { q: "The tea is ___ (too / enough) hot to drink.", a: [["too"]] },
        { q: "Is the room big ___ (too / enough) for six people?", a: [["enough"]] },
        { q: "It's ___ (too / too much) expensive.", a: [["too"]] },
        { q: "I didn't have ___ (time enough / enough time) to finish.", a: [["enough time"]] },
        { q: "The boy isn't tall ___ (too / enough) to play basketball.", a: [["enough"]] },
        { q: "These shoes are ___ (too / enough) small for me.", a: [["too"]] }
      ] },
    { ins: "Choose the correct word: -ed or -ing?", az: "Düzgün sözü seç: -ed, yoxsa -ing?",
      ex: ["The film was ___ (bored / boring).", "boring"],
      items: [
        { q: "I'm ___ (interested / interesting) in history.", a: [["interested"]] },
        { q: "The lesson was very ___ (interested / interesting).", a: [["interesting"]] },
        { q: "I'm always ___ (tired / tiring) after work.", a: [["tired"]] },
        { q: "It was a long, ___ (tired / tiring) day.", a: [["tiring"]] },
        { q: "We were ___ (bored / boring) at the party.", a: [["bored"]] },
        { q: "The news was very ___ (surprised / surprising).", a: [["surprising"]] },
        { q: "I was ___ (surprised / surprising) to see him.", a: [["surprised"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["He drives careful. →", "He drives carefully."],
      items: [
        { q: "She speaks very well English. →", full: ["she speaks english very well"] },
        { q: "He speaks good. →", full: ["he speaks well"] },
        { q: "It's too much expensive. →", full: ["it's too expensive", "it is too expensive"] },
        { q: "We don't have money enough. →", full: ["we don't have enough money", "we do not have enough money"] },
        { q: "He isn't enough old to drive. →", full: ["he isn't old enough to drive", "he is not old enough to drive", "he's not old enough to drive"] },
        { q: "Please speak more slow. →", full: ["please speak more slowly"] },
        { q: "I am boring at this party. (= I don't like it.) →", full: ["i'm bored at this party", "i am bored at this party"] }
      ] }
  ],
  g08: [
    { ins: "Put the verb in the Present Perfect (have/has + V3).", az: "Feli Present Perfect-də yaz (have/has + V3).",
      ex: ["I ___ (finish) my work.", "have finished"],
      items: [
        { q: "She ___ (lose) her keys.", a: [["has lost"]] },
        { q: "We ___ (see) this film.", a: [["have seen"]] },
        { q: "He ___ (write) a letter to his grandmother.", a: [["has written"]] },
        { q: "They ___ (buy) a new car.", a: [["have bought"]] },
        { q: "I ___ (eat) too much.", a: [["have eaten"]] },
        { q: "My brother ___ (go) to the bank.", a: [["has gone"]] },
        { q: "___ you ___ (do) your homework?", a: [["have"], ["done"]] },
        { q: "She ___ (not / call) me.", a: [["hasn't called","has not called"]] },
        { q: "I ___ (not / take) my medicine.", a: [["haven't taken","have not taken"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["Ali isn't here. He has ___ (been / gone) to the bank.", "gone"],
      items: [
        { q: "I've ___ (been / gone) to London twice.", a: [["been"]] },
        { q: "Where's Leyla? — She's ___ (been / gone) to the shop.", a: [["gone"]] },
        { q: "Have you ___ (ever / never) eaten sushi?", a: [["ever"]] },
        { q: "I've ___ (ever / never) ridden a horse.", a: [["never"]] },
        { q: "My parents aren't at home. They've ___ (been / gone) to Gabala.", a: [["gone"]] },
        { q: "Have you ever ___ (been / gone) to Turkey?", a: [["been"]] },
        { q: "She has ___ (ever / never) seen the sea.", a: [["never"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["I've ___ (already / yet) eaten.", "already"],
      items: [
        { q: "I haven't finished ___ (already / yet).", a: [["yet"]] },
        { q: "Have you finished ___ (yet / still)?", a: [["yet"]] },
        { q: "It's 11 o'clock and he is ___ (still / yet) sleeping.", a: [["still"]] },
        { q: "She has ___ (just / yet) left. You missed her by one minute.", a: [["just"]] },
        { q: "We ___ (still / yet) live with our parents.", a: [["still"]] },
        { q: "The bus hasn't come ___ (already / yet).", a: [["yet"]] },
        { q: "Don't buy milk. I've ___ (already / yet) bought some.", a: [["already"]] }
      ] },
    { ins: "Write for, since or ago.", az: "for, since və ya ago yaz.",
      ex: ["I've lived here ___ three years.", "for"],
      items: [
        { q: "She has worked here ___ 2020.", a: [["since"]] },
        { q: "They got married five years ___.", a: [["ago"]] },
        { q: "I've known him ___ a long time.", a: [["for"]] },
        { q: "We have been in this office ___ Monday.", a: [["since"]] },
        { q: "I saw him two days ___.", a: [["ago"]] },
        { q: "He has had this car ___ ten years.", a: [["for"]] },
        { q: "I've been here ___ 9 o'clock.", a: [["since"]] },
        { q: "She has lived in Baku ___ she was a child.", a: [["since"]] }
      ] },
    { ins: "Present Perfect or Past Simple? Put the verb in the correct form.", az: "Present Perfect, yoxsa Past Simple? Feli düzgün formada yaz.",
      ex: ["I ___ (see) him yesterday.", "saw"],
      items: [
        { q: "Have you ever been to Istanbul? — Yes, I ___ (go) there last summer.", a: [["went"]] },
        { q: "When ___ you ___ (buy) your car?", a: [["did"], ["buy"]] },
        { q: "I ___ (lose) my phone. Have you seen it?", a: [["have lost","'ve lost"]] },
        { q: "She ___ (live) here since 2015.", a: [["has lived"]] },
        { q: "We ___ (move) to Baku in 2018.", a: [["moved"]] },
        { q: "How long ___ you ___ (know) Elvin?", a: [["have"], ["known"]] },
        { q: "I ___ (not / see) Anar last week.", a: [["didn't see","did not see"]] },
        { q: "My father ___ (never / drive) a big truck.", a: [["has never driven"]] },
        { q: "They ___ (arrive) an hour ago.", a: [["arrived"]] }
      ] }
  ],
  g09: [
    { ins: "Choose the correct words.", az: "Düzgün sözləri seç.",
      ex: ["I ___ (can / can't) swim. I learned when I was six.", "can"],
      items: [
        { q: "When I was five, I ___ (could / can) read.", a: [["could"]] },
        { q: "I ___ (couldn't / can't) sleep last night. It was very hot.", a: [["couldn't","could not"]] },
        { q: "We ___ (can / can't) come tomorrow. We're busy.", a: [["can't","cannot","can not"]] },
        { q: "She ___ (can speak / cans speak) three languages.", a: [["can speak"]] },
        { q: "___ (Can / Do) you help me?", a: [["can"]] },
        { q: "___ (Could / Did) you open the window, please?", a: [["could"]] },
        { q: "He ___ (can't / doesn't can) drive.", a: [["can't","cannot","can not"]] },
        { q: "My grandmother ___ (could / can) dance very well when she was young.", a: [["could"]] }
      ] },
    { ins: "Choose the correct words.", az: "Düzgün sözləri seç.",
      ex: ["You ___ (mustn't / don't have to) pay. It's free.", "don't have to"],
      items: [
        { q: "You ___ (mustn't / don't have to) use your phone in the exam.", a: [["mustn't","must not"]] },
        { q: "We ___ (mustn't / don't have to) get up early tomorrow. It's Sunday.", a: [["don't have to","do not have to"]] },
        { q: "You ___ (must / mustn't) wear a seatbelt in the car.", a: [["must"]] },
        { q: "You ___ (mustn't / don't have to) tell anyone. It's a secret.", a: [["mustn't","must not"]] },
        { q: "She ___ (doesn't have to / mustn't) work on Saturdays. She's free.", a: [["doesn't have to","does not have to"]] },
        { q: "I ___ (must / mustn't) call my mother. It's her birthday.", a: [["must"]] },
        { q: "You ___ (mustn't / don't have to) smoke in the hospital.", a: [["mustn't","must not"]] }
      ] },
    { ins: "Complete the sentences with have to, has to, had to or don't / doesn't / didn't have to + the verb in brackets.", az: "Boşluqlara have to, has to, had to və ya don't / doesn't / didn't have to + mötərizədəki feli yaz.",
      ex: ["I ___ (work) on Saturdays.", "have to work"],
      items: [
        { q: "She ___ (wear) a uniform at work.", a: [["has to wear"]] },
        { q: "Yesterday I ___ (work) late.", a: [["had to work"]] },
        { q: "___ you ___ (get up) early tomorrow?", a: [["do"], ["have to get up"]] },
        { q: "He ___ (not / come) to the meeting. It isn't important.", a: [["doesn't have to come","does not have to come"]] },
        { q: "We ___ (not / pay) for the tickets yesterday. They were free.", a: [["didn't have to pay","did not have to pay"]] },
        { q: "___ she ___ (work) last weekend?", a: [["did"], ["have to work"]] },
        { q: "My brother ___ (take) the bus to work every day.", a: [["has to take"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["You look ill. You ___ (should / shouldn't) see a doctor.", "should"],
      items: [
        { q: "You ___ (should / shouldn't) eat so much sugar.", a: [["shouldn't","should not"]] },
        { q: "Take an umbrella. It ___ (might / must) rain.", a: [["might"]] },
        { q: "I'm not sure. I ___ (might not / shouldn't) come to the party.", a: [["might not"]] },
        { q: "___ (Should / Do) I call her?", a: [["should"]] },
        { q: "It's late. You ___ (should / shouldn't) go to bed.", a: [["should"]] },
        { q: "We ___ (might / should) go to Gabala this weekend, but we aren't sure.", a: [["might"]] },
        { q: "Your exam is next week. You ___ (should / might) study more.", a: [["should"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["She cans swim. →", "She can swim."],
      items: [
        { q: "I can to drive. →", full: ["i can drive"] },
        { q: "Do you can help me? →", full: ["can you help me"] },
        { q: "I musted work yesterday. →", full: ["i had to work yesterday"] },
        { q: "She have to wear a uniform. →", full: ["she has to wear a uniform"] },
        { q: "You should to see a doctor. →", full: ["you should see a doctor"] },
        { q: "He doesn't can swim. →", full: ["he can't swim", "he cannot swim", "he can not swim"] },
        { q: "We must to go now. →", full: ["we must go now"] }
      ] }
  ],
  g25: [
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["There's ___ (somebody / anybody) at the door.", "somebody"],
      items: [
        { q: "Is there ___ (something / anything) in the box?", a: [["anything"]] },
        { q: "I didn't see ___ (anybody / somebody) at the station.", a: [["anybody"]] },
        { q: "I'm hungry. I want to eat ___ (something / anything).", a: [["something"]] },
        { q: "I can't find my keys ___ (anywhere / somewhere).", a: [["anywhere"]] },
        { q: "___ (Nobody / Anybody) called me today.", a: [["nobody"]] },
        { q: "What did you buy? — ___ (Nothing / Anything).", a: [["nothing"]] },
        { q: "Let's go ___ (somewhere / anywhere) nice this weekend.", a: [["somewhere"]] },
        { q: "___ (Everything / Anything) is ready. Let's eat!", a: [["everything"]] }
      ] },
    { ins: "Choose the correct word. Remember: no double negatives.", az: "Düzgün sözü seç. Yadda saxla: ikiqat inkar olmur.",
      ex: ["I didn't do ___ (anything / nothing).", "anything"],
      items: [
        { q: "___ (Nobody / Anybody) came to the meeting.", a: [["nobody"]] },
        { q: "I didn't say ___ (nothing / anything).", a: [["anything"]] },
        { q: "There's ___ (nothing / anything) in the fridge.", a: [["nothing"]] },
        { q: "She didn't go ___ (anywhere / nowhere) last weekend.", a: [["anywhere"]] },
        { q: "I have ___ (no / any) money.", a: [["no"]] },
        { q: "How many eggs are there? — ___ (None / No).", a: [["none"]] },
        { q: "There are ___ (no / none) chairs in the room.", a: [["no"]] },
        { q: "Did ___ (anybody / nobody) call me?", a: [["anybody"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["Everybody ___ (is / are) here.", "is"],
      items: [
        { q: "Everything ___ (was / were) perfect.", a: [["was"]] },
        { q: "Every student ___ (has / have) a book.", a: [["has"]] },
        { q: "___ (All / Every) the students passed the exam.", a: [["all"]] },
        { q: "I walk to work every ___ (day / days).", a: [["day"]] },
        { q: "I was ill, so I spent ___ (all / every) day at home.", a: [["all"]] },
        { q: "Everybody ___ (like / likes) her.", a: [["likes"]] },
        { q: "Nobody ___ (know / knows) the answer.", a: [["knows"]] },
        { q: "___ (All / Every) my friends live in Baku.", a: [["all"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["___ (Both / Neither) of my brothers live abroad.", "Both"],
      items: [
        { q: "Tea or coffee? — ___ (Either / Both). I don't mind.", a: [["either"]] },
        { q: "___ (Neither / Both) of my parents speaks English. They speak only Azerbaijani.", a: [["neither"]] },
        { q: "___ (Both / Either) of us are tired.", a: [["both"]] },
        { q: "I have two sisters. ___ (Neither / Both) of them is married.", a: [["neither"]] },
        { q: "Which bus can I take, the 5 or the 12? — ___ (Either / Neither). They both go to the centre.", a: [["either"]] },
        { q: "We visited two museums. ___ (Both / Either) were interesting.", a: [["both"]] },
        { q: "Neither of my friends ___ (came / didn't come) to the party.", a: [["came"]] }
      ] },
    { ins: "These sentences are not correct. Correct them.", az: "Bu cümlələrdə səhv var. Düzəlt.",
      ex: ["Nobody didn't come. →", "Nobody came."],
      items: [
        { q: "I didn't do nothing. →", full: ["i didn't do anything", "i did not do anything", "i did nothing", "i didn't do anything at all", "i did not do anything at all"] },
        { q: "Everybody are happy. →", full: ["everybody is happy", "everybody's happy"] },
        { q: "Every students has a book. →", full: ["every student has a book"] },
        { q: "I didn't see nobody. →", full: ["i didn't see anybody", "i did not see anybody", "i didn't see anyone", "i did not see anyone", "i saw nobody"] },
        { q: "Neither of us didn't go. →", full: ["neither of us went"] },
        { q: "There isn't nothing in the box. →", full: ["there isn't anything in the box", "there is not anything in the box", "there's not anything in the box", "there's nothing in the box", "there is nothing in the box"] },
        { q: "Both of my brothers lives in Baku. →", full: ["both of my brothers live in baku", "both my brothers live in baku"] }
      ] }
  ]
});
