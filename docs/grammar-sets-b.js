// Murphy formatında tapşırıq qrupları (orijinal məzmun) — 2-ci hissə
var GRAM_SETS = typeof GRAM_SETS === 'undefined' ? {} : GRAM_SETS;
Object.assign(GRAM_SETS, {

  // ───────── g21 — Suallar ─────────
  g21: [
    { ins: "Write questions. Use the words in brackets.", az: "Mötərizədəki sözlərlə sual qur.",
      ex: ["(where / your brother / work?)", "Where does your brother work?"],
      items: [
        { q: "(what time / you / usually / get up?)", full: ["what time do you usually get up"] },
        { q: "(how often / your sister / go / to the gym?)", full: ["how often does your sister go to the gym"] },
        { q: "(where / you / go / last weekend?)", full: ["where did you go last weekend"] },
        { q: "(what / you / do / at the moment?)", full: ["what are you doing at the moment"] },
        { q: "(how many children / your boss / have?)", full: ["how many children does your boss have"] },
        { q: "(why / you / be / late yesterday?)", full: ["why were you late yesterday"] },
        { q: "(what / we / can / do / tonight?)", full: ["what can we do tonight"] },
        { q: "(when / the next train / leave?)", full: ["when does the next train leave"] },
        { q: "(how much / these shoes / cost?)", full: ["how much do these shoes cost"] },
        { q: "(how far / your office / be / from here?)", full: ["how far is your office from here"] }
      ] },
    { ins: "Write questions with Who or What. Is the word the subject (who called?) or the object (who did you call?)?", az: "Who və ya What ilə sual qur. Diqqət: işi görəni soruşursan, yoxsa işin yönəldiyi adamı/şeyi?",
      ex: ["Somebody broke the window. (who?)", "Who broke the window?"],
      items: [
        { q: "Kamran met somebody at the party. (who?)", full: ["who did kamran meet at the party"] },
        { q: "Somebody lives in that house. (who?)", full: ["who lives in that house"] },
        { q: "Something happened last night. (what?)", full: ["what happened last night"] },
        { q: "Ali bought something yesterday. (what?)", full: ["what did ali buy yesterday"] },
        { q: "Somebody gave Murad this book. (who?)", full: ["who gave murad this book"] },
        { q: "Nigar is looking for something. (what?)", full: ["what is nigar looking for", "what's nigar looking for"] },
        { q: "Somebody is talking to Aysel. (who?)", full: ["who is talking to aysel", "who's talking to aysel"] },
        { q: "Aysel is talking to somebody. (who?)", full: ["who is aysel talking to", "who's aysel talking to"] },
        { q: "Somebody cooked dinner. (who?)", full: ["who cooked dinner"] },
        { q: "Rauf phoned somebody this morning. (who?)", full: ["who did rauf phone this morning"] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç.",
      ex: ["___ (What / Which) bus goes to the centre — the 5 or the 12?", "Which"],
      items: [
        { q: "___ (What / Which) kind of music do you like?", a: [["what"]] },
        { q: "There are two jackets here. ___ (What / Which) one is yours?", a: [["which"]] },
        { q: "___ (Who / Whose) phone is this? It was on the table.", a: [["whose"]] },
        { q: "___ (How / What) old is your grandfather?", a: [["how"]] },
        { q: "___ (How / What) time does the bank close?", a: [["what"]] },
        { q: "What is your new boss ___ (like / likes)? — He's very friendly.", a: [["like"]] },
        { q: "Who are you waiting ___ (to / for)?", a: [["for"]] },
        { q: "Where is your wife ___ (from / of)?", a: [["from"]] },
        { q: "___ (How long / How often) does it take to get to your office?", a: [["how long"]] },
        { q: "Do you know where ___ (is the station / the station is)?", a: [["the station is"]] }
      ] },
    { ins: "Ask in a polite way. Begin with the words in brackets.", az: "Nəzakətli sual ver. Mötərizədəki sözlərlə başla (sıra adi cümlə kimi olur).",
      ex: ["Where is the bank? (Do you know …)", "Do you know where the bank is?"],
      items: [
        { q: "What time does the shop open? (Can you tell me …)", full: ["can you tell me what time the shop opens"] },
        { q: "Where does Elnur live? (Do you know …)", full: ["do you know where elnur lives"] },
        { q: "How much is this bag? (Can you tell me …)", full: ["can you tell me how much this bag is"] },
        { q: "Is the museum open today? (Do you know …)", full: ["do you know if the museum is open today", "do you know whether the museum is open today"] },
        { q: "Where did they go? (Do you know …)", full: ["do you know where they went"] },
        { q: "What does this word mean? (Can you tell me …)", full: ["can you tell me what this word means"] },
        { q: "Did Sabina pass the exam? (Do you know …)", full: ["do you know if sabina passed the exam", "do you know whether sabina passed the exam"] },
        { q: "How far is the airport? (Can you tell me …)", full: ["can you tell me how far the airport is"] },
        { q: "Where can I buy a ticket? (Do you know …)", full: ["do you know where i can buy a ticket"] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["Where you work?", "Where do you work?"],
      items: [
        { q: "Who did call you last night?", full: ["who called you last night"] },
        { q: "What did happen at the meeting?", full: ["what happened at the meeting"] },
        { q: "I don't know where does she live.", full: ["i don't know where she lives", "i do not know where she lives"] },
        { q: "What time the film starts?", full: ["what time does the film start"] },
        { q: "Do you know what time is it?", full: ["do you know what time it is"] },
        { q: "Who you are talking to?", full: ["who are you talking to"] },
        { q: "How long it takes to get there?", full: ["how long does it take to get there"] },
        { q: "Can you tell me where is the post office?", full: ["can you tell me where the post office is"] },
        { q: "I wonder what does he want.", full: ["i wonder what he wants"] }
      ] }
  ],

  // ───────── g22 — Qısa cavablar və razılaşma ─────────
  g22: [
    { ins: "Answer the questions with short answers.", az: "Suallara qısa cavab ver (Yes, I do / No, he isn't və s.).",
      ex: ["Are you tired? — Yes, ___.", "I am"],
      items: [
        { q: "Do you speak Russian? — Yes, ___.", a: [["i do"]] },
        { q: "Is your brother married? — No, ___.", a: [["he isn't", "he's not", "he is not"]] },
        { q: "Did you see the match? — Yes, ___.", a: [["i did"]] },
        { q: "Can your sister drive? — No, ___.", a: [["she can't", "she cannot"]] },
        { q: "Have you finished? — Yes, ___.", a: [["i have"]] },
        { q: "Were they at home? — No, ___.", a: [["they weren't", "they were not"]] },
        { q: "Does Murad work here? — Yes, ___.", a: [["he does"]] },
        { q: "Will you be at home tonight? — No, ___.", a: [["i won't", "i will not"]] },
        { q: "Is it raining? — Yes, ___.", a: [["it is"]] },
        { q: "Has Leyla called? — No, ___.", a: [["she hasn't", "she has not"]] }
      ] },
    { ins: "Say «me too» or «me neither». Use So … I or Neither … I.", az: "«Mən də» və ya «Mən də yox» de: So … I / Neither … I.",
      ex: ["I'm hungry. — ___ I.", "So am"],
      items: [
        { q: "I live in Baku. — ___ I.", a: [["so do"]] },
        { q: "I don't eat meat. — ___ I.", a: [["neither do"]] },
        { q: "I can't swim. — ___ I.", a: [["neither can"]] },
        { q: "I went to the cinema yesterday. — ___ I.", a: [["so did"]] },
        { q: "I'm not tired. — ___ I.", a: [["neither am"]] },
        { q: "I've been to Istanbul. — ___ I.", a: [["so have"]] },
        { q: "I didn't sleep well. — ___ I.", a: [["neither did"]] },
        { q: "I was late this morning. — ___ I.", a: [["so was"]] },
        { q: "I'll be at the meeting. — ___ I.", a: [["so will"]] },
        { q: "I haven't seen the new film. — ___ I.", a: [["neither have"]] }
      ] },
    { ins: "Complete with too, either or an auxiliary verb (do, does, can, is …).", az: "too, either və ya köməkçi fel (do, does, can, is …) ilə tamamla.",
      ex: ["I don't like fish, but my wife ___.", "does"],
      items: [
        { q: "She can't cook, but her husband ___.", a: [["can"]] },
        { q: "I'm not hungry, and Ali isn't hungry ___.", a: [["either"]] },
        { q: "I like football, and my brother likes it ___.", a: [["too"]] },
        { q: "Rauf didn't come to the party, but his sister ___.", a: [["did"]] },
        { q: "We aren't ready, but they ___.", a: [["are"]] },
        { q: "My father doesn't smoke, and I don't smoke ___.", a: [["either"]] },
        { q: "I haven't finished, but Nigar ___.", a: [["has"]] },
        { q: "Kamran will come, but Elvin ___.", a: [["won't", "will not"]] },
        { q: "I was tired, and the children were tired ___.", a: [["too"]] },
        { q: "Leyla works on Saturdays, but I ___.", a: [["don't", "do not"]] }
      ] },
    { ins: "Complete the sentences with a question tag.", az: "Cümlənin sonuna quyruq sual əlavə et (isn't it? / do you? və s.).",
      ex: ["It's cold today, ___?", "isn't it"],
      items: [
        { q: "You live near here, ___?", a: [["don't you"]] },
        { q: "She isn't a doctor, ___?", a: [["is she"]] },
        { q: "They can speak English, ___?", a: [["can't they"]] },
        { q: "Your brother doesn't drink coffee, ___?", a: [["does he"]] },
        { q: "You were at work yesterday, ___?", a: [["weren't you"]] },
        { q: "The film was good, ___?", a: [["wasn't it"]] },
        { q: "Leyla has finished her work, ___?", a: [["hasn't she"]] },
        { q: "You didn't call me, ___?", a: [["did you"]] },
        { q: "Ali will help us, ___?", a: [["won't he"]] },
        { q: "The shops aren't open on Sunday, ___?", a: [["are they"]] }
      ] },
    { ins: "Complete the replies. Use a short question (Do you? / Aren't you? …) or so-answers (I think so / I hope so).", az: "Cavabları tamamla: maraq bildirən qısa sual (Do you? / Aren't you?) və ya I think so / I hope so.",
      ex: ["I live in Ganja. — ___? I live there too!", "Do you"],
      items: [
        { q: "I'm a teacher. — ___? So is my wife.", a: [["are you"]] },
        { q: "I don't like chocolate. — ___? I love it!", a: [["don't you"]] },
        { q: "My brother can speak four languages. — ___? That's amazing!", a: [["can he"]] },
        { q: "We went to Paris last month. — ___? Did you like it?", a: [["did you"]] },
        { q: "I'm not going to the party. — ___? Why not?", a: [["aren't you"]] },
        { q: "Nigar has bought a new flat. — ___? Where is it?", a: [["has she"]] },
        { q: "I wasn't at home yesterday. — ___? Where were you?", a: [["weren't you"]] },
        { q: "Is Rauf coming tonight? — I think ___. He called me this morning.", a: [["so"]] },
        { q: "Will it rain tomorrow? — I don't ___ so. The sky is clear.", a: [["think"]] }
      ] }
  ],

  // ───────── g10 — -ing və to ─────────
  g10: [
    { ins: "Put the verb in the correct form: -ing or to + verb.", az: "Feli düzgün formaya sal: -ing və ya to + fel.",
      ex: ["I enjoy ___ (cook) for my family.", "cooking"],
      items: [
        { q: "We decided ___ (rent) a small flat.", a: [["to rent"]] },
        { q: "Would you mind ___ (close) the door?", a: [["closing"]] },
        { q: "I want ___ (buy) a new phone.", a: [["to buy"]] },
        { q: "She finished ___ (work) at 7 o'clock.", a: [["working"]] },
        { q: "They hope ___ (see) you soon.", a: [["to see"]] },
        { q: "Please stop ___ (talk). I'm trying to sleep.", a: [["talking"]] },
        { q: "He promised ___ (call) me tonight.", a: [["to call"]] },
        { q: "I need ___ (practise) my English every day.", a: [["to practise", "to practice"]] },
        { q: "My father gave up ___ (smoke) two years ago.", a: [["smoking"]] },
        { q: "Try to avoid ___ (drive) in the city centre at 6 pm.", a: [["driving"]] }
      ] },
    { ins: "Complete with the verb in brackets: go, to go or going?", az: "Mötərizədəki feli yaz: sadə forma (go), to go, yoxsa going?",
      ex: ["I can't ___ (come) to the party.", "come"],
      items: [
        { q: "My parents let me ___ (stay) up late on Fridays.", a: [["stay"]] },
        { q: "I'd like ___ (order) a pizza, please.", a: [["to order"]] },
        { q: "That sad film made me ___ (cry).", a: [["cry"]] },
        { q: "You should ___ (see) a doctor.", a: [["see"]] },
        { q: "Did you ___ (enjoy) the concert?", a: [["enjoy"]] },
        { q: "My boss wants me ___ (finish) the report today.", a: [["to finish"]] },
        { q: "It started ___ (rain) at 5 o'clock.", a: [["raining", "to rain"]] },
        { q: "I love ___ (swim) in the sea.", a: [["swimming", "to swim"]] },
        { q: "She asked me ___ (help) her with the bags.", a: [["to help"]] },
        { q: "The teacher made us ___ (write) the test again.", a: [["write"]] }
      ] },
    { ins: "Put the verb in the correct form (after a preposition, at the start of a sentence, after an adjective).", az: "Feli düzgün formaya sal: ön sözdən sonra -ing, cümlənin əvvəlində -ing, sifətdən sonra to + fel.",
      ex: ["Thank you for ___ (help) me.", "helping"],
      items: [
        { q: "I'm interested in ___ (learn) Spanish.", a: [["learning"]] },
        { q: "She is very good at ___ (draw).", a: [["drawing"]] },
        { q: "I'm tired of ___ (wait) for the bus.", a: [["waiting"]] },
        { q: "Wash your hands before ___ (eat).", a: [["eating"]] },
        { q: "He left without ___ (say) goodbye.", a: [["saying"]] },
        { q: "We're thinking about ___ (buy) a car.", a: [["buying"]] },
        { q: "After ___ (finish) work, I went to the gym.", a: [["finishing"]] },
        { q: "___ (walk) is good for your health.", a: [["walking"]] },
        { q: "___ (learn) a new language takes a lot of time.", a: [["learning"]] },
        { q: "It's easy ___ (make) this cake.", a: [["to make"]] }
      ] },
    { ins: "Why did they do it? Write one sentence with to.", az: "Niyə? Məqsədi to + fel ilə bildirərək bir cümlə yaz.",
      ex: ["(I went to the bank / get some money)", "I went to the bank to get some money."],
      items: [
        { q: "(she went to the shop / buy some bread)", full: ["she went to the shop to buy some bread"] },
        { q: "(I'm saving money / buy a car)", full: ["i'm saving money to buy a car", "i am saving money to buy a car"] },
        { q: "(he came to Baku / find a job)", full: ["he came to baku to find a job"] },
        { q: "(we went to the station / meet my uncle)", full: ["we went to the station to meet my uncle"] },
        { q: "(I called the hotel / book a room)", full: ["i called the hotel to book a room"] },
        { q: "(she is learning English / get a better job)", full: ["she is learning english to get a better job", "she's learning english to get a better job"] },
        { q: "(they went to the park / play football)", full: ["they went to the park to play football"] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["I enjoy to cook.", "I enjoy cooking."],
      items: [
        { q: "She wants that I help her.", full: ["she wants me to help her"] },
        { q: "I went to the bank for get money.", full: ["i went to the bank to get money"] },
        { q: "The film made me to cry.", full: ["the film made me cry"] },
        { q: "I decided learning French.", full: ["i decided to learn french"] },
        { q: "Thank you for help me.", full: ["thank you for helping me"] },
        { q: "The doctor told me don't drink coffee.", full: ["the doctor told me not to drink coffee"] },
        { q: "He's good at play the guitar.", full: ["he's good at playing the guitar", "he is good at playing the guitar"] },
        { q: "I decided to not go.", full: ["i decided not to go"] },
        { q: "Would you mind to open the window?", full: ["would you mind opening the window"] },
        { q: "My parents didn't let me to go out.", full: ["my parents didn't let me go out", "my parents did not let me go out"] }
      ] }
  ],

  // ───────── g26 — go, get, do, make, have ─────────
  g26: [
    { ins: "Complete with do or make in the correct form.", az: "do və ya make felini düzgün formada yaz.",
      ex: ["I need to ___ my homework.", "do"],
      items: [
        { q: "Can you ___ a cup of tea for me?", a: [["make"]] },
        { q: "I ___ a mistake in the test yesterday.", a: [["made"]] },
        { q: "Who ___ the shopping in your family?", a: [["does"]] },
        { q: "We need to ___ a decision today.", a: [["make"]] },
        { q: "She ___ exercise every morning.", a: [["does"]] },
        { q: "He ___ a lot of money last year.", a: [["made"]] },
        { q: "Please don't ___ a noise. The baby is sleeping.", a: [["make"]] },
        { q: "I'm ___ a course in English at the moment.", a: [["doing"]] },
        { q: "It's easy to ___ friends at university.", a: [["make"]] },
        { q: "What do you ___? — I'm an engineer.", a: [["do"]] }
      ] },
    { ins: "Choose the correct form.", az: "Düzgün variantı seç (go home, go swimming, go for a walk …).",
      ex: ["Let's ___ (go home / go to home).", "go home"],
      items: [
        { q: "We ___ (go swimming / go to swimming) every Sunday.", a: [["go swimming"]] },
        { q: "I ___ (go to the gym / go the gym) on Mondays.", a: [["go to the gym"]] },
        { q: "Let's ___ (go for a walk / go to a walk) after dinner.", a: [["go for a walk"]] },
        { q: "She ___ (went shopping / went to shopping) yesterday.", a: [["went shopping"]] },
        { q: "We're going ___ (on / in) holiday next week.", a: [["on"]] },
        { q: "I usually ___ (go home / go to home) at six.", a: [["go home"]] },
        { q: "Do you want to go ___ (for / to) a coffee?", a: [["for"]] },
        { q: "My father ___ (goes fishing / goes to fishing) at the weekend.", a: [["goes fishing"]] },
        { q: "They ___ (went running / went to running) in the park.", a: [["went running"]] }
      ] },
    { ins: "Complete the sentences. Use get (get / gets / got / getting) + one of these: better, dark, home, hungry, married, off, up, a new job.", az: "get felinin düzgün forması + bu sözlərdən biri: better, dark, home, hungry, married, off, up, a new job.",
      ex: ["In winter it ___ very early.", "gets dark"],
      items: [
        { q: "They ___ last year. Now they have a baby.", a: [["got married"]] },
        { q: "What time did you ___ last night? — At midnight.", a: [["get home"]] },
        { q: "I ___ at 7 every morning and have a shower.", a: [["get up"]] },
        { q: "I didn't have lunch, so I'm ___ now.", a: [["getting hungry"]] },
        { q: "___ the bus at the next stop for the museum.", a: [["get off"]] },
        { q: "My sister ___ at a bank last month. She's very happy.", a: [["got a new job"]] },
        { q: "I was ill last week, but I'm ___ now.", a: [["getting better"]] }
      ] },
    { ins: "Complete the sentences with the correct form of have (or do/does/did where needed).", az: "have felinin düzgün formasını yaz (lazım olsa do/does/did).",
      ex: ["I always ___ a shower in the morning.", "have"],
      items: [
        { q: "What time ___ you have lunch?", a: [["do"]] },
        { q: "We ___ a great time at the party last night.", a: [["had"]] },
        { q: "She ___ got a car. She goes to work by bus.", a: [["hasn't", "has not"]] },
        { q: "___ you got a pen? — Yes, here you are.", a: [["have"]] },
        { q: "I didn't ___ breakfast this morning.", a: [["have"]] },
        { q: "Let's ___ a rest. I'm tired.", a: [["have"]] },
        { q: "They're ___ a party on Saturday. Do you want to come?", a: [["having"]] },
        { q: "My brother ___ got a new phone. It's very nice.", a: [["has"]] },
        { q: "Can I ___ a look at your photos?", a: [["have"]] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["I did a mistake.", "I made a mistake."],
      items: [
        { q: "Let's go to home.", full: ["let's go home", "let us go home"] },
        { q: "I must make my homework.", full: ["i must do my homework"] },
        { q: "We went to swimming yesterday.", full: ["we went swimming yesterday"] },
        { q: "Do you have got a car?", full: ["have you got a car", "do you have a car"] },
        { q: "I get up at 7 and make a shower.", full: ["i get up at 7 and have a shower"] },
        { q: "They do a lot of noise.", full: ["they make a lot of noise"] },
        { q: "Can you do a cup of coffee?", full: ["can you make a cup of coffee"] },
        { q: "Let's make a rest for ten minutes.", full: ["let's have a rest for ten minutes"] },
        { q: "Who makes the cleaning in your house?", full: ["who does the cleaning in your house"] }
      ] }
  ],

  // ───────── g11 — Ön sözlər ─────────
  g11: [
    { ins: "Put in at, on or in. If no preposition is needed, write X.", az: "at, on və ya in yaz. Ön söz lazım deyilsə, X yaz.",
      ex: ["The lesson starts ___ 9 o'clock.", "at"],
      items: [
        { q: "My birthday is ___ 12 March.", a: [["on"]] },
        { q: "I was born ___ 1996.", a: [["in"]] },
        { q: "We usually go to the sea ___ summer.", a: [["in"]] },
        { q: "I don't like working ___ night.", a: [["at"]] },
        { q: "See you ___ Monday!", a: [["on"]] },
        { q: "I always drink coffee ___ the morning.", a: [["in"]] },
        { q: "What are you doing ___ the weekend?", a: [["at", "on"]] },
        { q: "We met ___ last Friday.", a: [["x", "-"]] },
        { q: "I'll see you ___ tomorrow.", a: [["x", "-"]] },
        { q: "The film starts ___ half past eight ___ Saturday evening.", a: [["at"], ["on"]] }
      ] },
    { ins: "Put in in, on or at.", az: "in, on və ya at yaz (yer).",
      ex: ["The keys are ___ my bag.", "in"],
      items: [
        { q: "There's a picture ___ the wall.", a: [["on"]] },
        { q: "Wait for me ___ the bus stop.", a: [["at"]] },
        { q: "She lives ___ a small village near Shaki.", a: [["in"]] },
        { q: "I'm ___ the bus now. I'll be there in ten minutes.", a: [["on"]] },
        { q: "My wife is ___ work until six.", a: [["at"]] },
        { q: "We arrived ___ Baku at midnight.", a: [["in"]] },
        { q: "We arrived ___ the airport two hours early.", a: [["at"]] },
        { q: "Your phone is ___ the table, next to the lamp.", a: [["on"]] },
        { q: "There were a lot of people ___ the party.", a: [["at"]] },
        { q: "Our flat is ___ the third floor.", a: [["on"]] }
      ] },
    { ins: "Complete with: across, behind, between, into, next to, opposite, out of, through, under.", az: "Bu sözlərlə tamamla: across, behind, between, into, next to, opposite, out of, through, under.",
      ex: ["The cinema is ___ the bank and the post office.", "between"],
      items: [
        { q: "He walked ___ the street to the shop on the other side.", a: [["across"]] },
        { q: "The train goes ___ a long tunnel.", a: [["through"]] },
        { q: "She opened her bag and took her keys ___ it.", a: [["out of"]] },
        { q: "He jumped ___ the swimming pool.", a: [["into"]] },
        { q: "Our house is ___ the school, on the other side of the road.", a: [["opposite"]] },
        { q: "I sat ___ my friend on the sofa, and we watched TV together.", a: [["next to"]] },
        { q: "There's a small dog ___ the table. It's eating the food that fell on the floor.", a: [["under"]] },
        { q: "I couldn't see the stage because a tall man was in front of me. I was ___ him.", a: [["behind"]] }
      ] },
    { ins: "Choose the correct preposition.", az: "Düzgün ön sözü seç.",
      ex: ["I go to work ___ (by / with) bus.", "by"],
      items: [
        { q: "We went there ___ (on / by) foot.", a: [["on"]] },
        { q: "She's afraid ___ (of / from) dogs.", a: [["of"]] },
        { q: "Are you interested ___ (in / on) football?", a: [["in"]] },
        { q: "He is married ___ (with / to) my cousin.", a: [["to"]] },
        { q: "Baku is famous ___ (for / with) its old city.", a: [["for"]] },
        { q: "I cut the bread ___ (with / by) a knife.", a: [["with"]] },
        { q: "Your phone is very different ___ (from / of) mine.", a: [["from"]] },
        { q: "I'm proud ___ (of / for) my daughter.", a: [["of"]] },
        { q: "It's a film ___ (about / for) the war.", a: [["about"]] },
        { q: "She's very good ___ (at / in) maths.", a: [["at"]] }
      ] },
    { ins: "Complete with the correct preposition (verb + preposition, time words).", az: "Düzgün ön sözü yaz (fel + ön söz, vaxt sözləri).",
      ex: ["Listen ___ me!", "to"],
      items: [
        { q: "I'm waiting ___ the bus.", a: [["for"]] },
        { q: "Look ___ this photo. Isn't it beautiful?", a: [["at"]] },
        { q: "It depends ___ the weather.", a: [["on"]] },
        { q: "Who does this car belong ___?", a: [["to"]] },
        { q: "I'm looking ___ my glasses. Have you seen them?", a: [["for"]] },
        { q: "I paid ___ the tickets, so you don't need to pay.", a: [["for"]] },
        { q: "I fell asleep ___ (during / while) the film.", a: [["during"]] },
        { q: "I fell asleep ___ (during / while) I was watching TV.", a: [["while"]] },
        { q: "The shop is open ___ 9 ___ 6.", a: [["from"], ["to", "until", "till"]] },
        { q: "I'll wait for you ___ (until / since) 5 o'clock.", a: [["until"]] }
      ] }
  ],

  // ───────── g27 — Phrasal verbs ─────────
  g27: [
    { ins: "Complete with: away, back, down, in, off, on, out, up.", az: "Bu sözlərlə tamamla: away, back, down, in, off, on, out, up.",
      ex: ["Please sit ___. — Thank you.", "down"],
      items: [
        { q: "Come ___! The door is open.", a: [["in"]] },
        { q: "Turn ___ the light. I want to sleep.", a: [["off"]] },
        { q: "I woke ___ at 6 this morning.", a: [["up"]] },
        { q: "It's cold outside. Put ___ your coat.", a: [["on"]] },
        { q: "He went out an hour ago. He'll come ___ soon.", a: [["back"]] },
        { q: "Go ___! I don't want to talk to you.", a: [["away"]] },
        { q: "Let's go ___ tonight. I don't want to stay at home.", a: [["out"]] },
        { q: "Can I try ___ these shoes?", a: [["on"]] },
        { q: "Take ___ your shoes before you come in.", a: [["off"]] },
        { q: "I grew ___ in a small village.", a: [["up"]] }
      ] },
    { ins: "Complete with the correct form of: break down, fill in, find out, give up, look after, look for, run out of, throw away.", az: "Bu phrasal verb-lərin düzgün formasını yaz: break down, fill in, find out, give up, look after, look for, run out of, throw away.",
      ex: ["Who ___ your children when you are at work?", "looks after"],
      items: [
        { q: "My father ___ smoking last year.", a: [["gave up"]] },
        { q: "We've ___ milk. Can you buy some?", a: [["run out of"]] },
        { q: "Our car ___ on the way to Shaki.", a: [["broke down"]] },
        { q: "Please ___ this form and give it to the receptionist.", a: [["fill in"]] },
        { q: "I'm ___ my keys. Have you seen them?", a: [["looking for"]] },
        { q: "Don't ___ that box. I need it.", a: [["throw away"]] },
        { q: "I want to ___ what time the museum opens.", a: [["find out"]] }
      ] },
    { ins: "Write a sentence with it, them or her. Use the words in brackets.", az: "it, them və ya her ilə cümlə yaz. Mötərizədəki sözləri işlət.",
      ex: ["The TV is on. (turn off)", "Turn it off."],
      items: [
        { q: "The light is on. (turn off)", full: ["turn it off"] },
        { q: "It's cold. Where's my jacket? (put on)", full: ["put it on"] },
        { q: "These jeans look nice. (can I / try on?)", full: ["can i try them on"] },
        { q: "Your shoes are dirty. (take off)", full: ["take them off"] },
        { q: "This milk is old. (throw away)", full: ["throw it away"] },
        { q: "Where are my glasses? (I'm looking for)", full: ["i'm looking for them", "i am looking for them"] },
        { q: "The heater is off and it's cold. (turn on)", full: ["turn it on"] },
        { q: "Here is the form. (please / fill in)", full: ["please fill it in"] },
        { q: "My little sister is ill. (I have to / look after)", full: ["i have to look after her"] }
      ] },
    { ins: "Put the verbs into the past simple.", az: "Felləri Past Simple-a sal (yalnız fel hissəsi dəyişir).",
      ex: ["I ___ (wake up) late today.", "woke up"],
      items: [
        { q: "He ___ (give up) sugar last month.", a: [["gave up"]] },
        { q: "We ___ (get up) at 5 to catch the plane.", a: [["got up"]] },
        { q: "The bus ___ (break down) in the middle of the road.", a: [["broke down"]] },
        { q: "She ___ (put on) her best dress for the party.", a: [["put on"]] },
        { q: "They ___ (grow up) in Lankaran.", a: [["grew up"]] },
        { q: "I ___ (find out) the truth yesterday.", a: [["found out"]] },
        { q: "We ___ (run out of) petrol near the village.", a: [["ran out of"]] },
        { q: "He ___ (take off) his jacket because it was hot.", a: [["took off"]] },
        { q: "The children ___ (come back) from school at 3.", a: [["came back"]] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["Put on it.", "Put it on."],
      items: [
        { q: "I look forward to see you.", full: ["i look forward to seeing you"] },
        { q: "She gave up to eat sugar.", full: ["she gave up eating sugar"] },
        { q: "I waked up at 7.", full: ["i woke up at 7"] },
        { q: "Can you turn off it?", full: ["can you turn it off"] },
        { q: "I'm looking it for.", full: ["i'm looking for it", "i am looking for it"] },
        { q: "We've run out sugar.", full: ["we've run out of sugar", "we have run out of sugar"] },
        { q: "He gived up smoking.", full: ["he gave up smoking"] },
        { q: "We are looking forward to visit you.", full: ["we are looking forward to visiting you", "we're looking forward to visiting you"] }
      ] }
  ],

  // ───────── g12 — Passive ─────────
  g12: [
    { ins: "Complete with is/are + past participle (V3).", az: "is/are + V3 ilə tamamla (Present Simple passiv).",
      ex: ["English ___ (speak) in many countries.", "is spoken"],
      items: [
        { q: "These cars ___ (make) in Germany.", a: [["are made"]] },
        { q: "The room ___ (clean) every day.", a: [["is cleaned"]] },
        { q: "Tea ___ (grow) in Lankaran.", a: [["is grown"]] },
        { q: "The letters ___ (deliver) every morning.", a: [["are delivered"]] },
        { q: "Smoking ___ (not / allow) in this building.", a: [["isn't allowed", "is not allowed"]] },
        { q: "How ___ this word ___ (pronounce)?", a: [["is"], ["pronounced"]] },
        { q: "Bread ___ (sell) in that shop.", a: [["is sold"]] },
        { q: "Many languages ___ (speak) in India.", a: [["are spoken"]] }
      ] },
    { ins: "Complete with was/were + past participle (V3).", az: "was/were + V3 ilə tamamla (Past Simple passiv).",
      ex: ["My bike ___ (steal) last night.", "was stolen"],
      items: [
        { q: "This bridge ___ (build) in 1990.", a: [["was built"]] },
        { q: "The letters ___ (send) yesterday.", a: [["were sent"]] },
        { q: "I ___ (born) in Ganja.", a: [["was born"]] },
        { q: "Where ___ you ___ (born)?", a: [["were"], ["born"]] },
        { q: "The windows ___ (break) in the storm.", a: [["were broken"]] },
        { q: "This book ___ (write) by a famous writer.", a: [["was written"]] },
        { q: "The email ___ (not / send).", a: [["wasn't sent", "was not sent"]] },
        { q: "___ this cake ___ (make) by your mother?", a: [["was"], ["made"]] },
        { q: "We ___ (invite) to the wedding.", a: [["were invited"]] }
      ] },
    { ins: "Put the verb in the correct passive form (is being done / has been done / will be done / must be done).", az: "Feli düzgün passiv formaya sal: is being + V3, has been + V3, will be + V3, must be + V3.",
      ex: ["My car is at the garage. It ___ (repair) now.", "is being repaired"],
      items: [
        { q: "All the tickets ___ (sell). There are no tickets left.", a: [["have been sold"]] },
        { q: "The results ___ (announce) next week.", a: [["will be announced"]] },
        { q: "The windows are very dirty. They must ___ (clean).", a: [["be cleaned"]] },
        { q: "A new hospital ___ (build) in our town at the moment.", a: [["is being built"]] },
        { q: "Your room ___ (already / clean), so you can go in now.", a: [["has already been cleaned"]] },
        { q: "This medicine should ___ (keep) in a cold place.", a: [["be kept"]] },
        { q: "The new road ___ (open) next year.", a: [["will be opened"]] },
        { q: "The house ___ (paint) at the moment, so we can't live there.", a: [["is being painted"]] }
      ] },
    { ins: "Rewrite the sentences in the passive. Use by only when the doer is named.", az: "Cümləni passivə çevir. by-ı yalnız işi görən adla verilibsə işlət.",
      ex: ["They built this house in 1950.", "This house was built in 1950."],
      items: [
        { q: "They clean the office every evening.", full: ["the office is cleaned every evening"] },
        { q: "Somebody stole my wallet.", full: ["my wallet was stolen"] },
        { q: "My sister made this cake.", full: ["this cake was made by my sister"] },
        { q: "They sell newspapers in that shop.", full: ["newspapers are sold in that shop"] },
        { q: "Somebody has opened the door.", full: ["the door has been opened"] },
        { q: "They will finish the work tomorrow.", full: ["the work will be finished tomorrow"] },
        { q: "Nizami wrote this poem.", full: ["this poem was written by nizami"] },
        { q: "They are repairing the road.", full: ["the road is being repaired"] }
      ] },
    { ins: "Active or passive? Choose the correct form.", az: "Aktiv, yoxsa passiv? Düzgün formanı seç.",
      ex: ["The accident ___ (happened / was happened) at 8 pm.", "happened"],
      items: [
        { q: "I ___ (born / was born) in 1995.", a: [["was born"]] },
        { q: "This film ___ (made / was made) in Iran.", a: [["was made"]] },
        { q: "My uncle ___ (built / was built) his house himself.", a: [["built"]] },
        { q: "The bus ___ (arrived / was arrived) late.", a: [["arrived"]] },
        { q: "Paper ___ (makes / is made) from wood.", a: [["is made"]] },
        { q: "Our teacher ___ (gave / was given) us a lot of homework.", a: [["gave"]] },
        { q: "The new shopping centre ___ (opened / was opened) by the mayor.", a: [["was opened"]] },
        { q: "___ (Did / Was) the email sent yesterday?", a: [["was"]] },
        { q: "My grandfather ___ (died / was died) in 2010.", a: [["died"]] }
      ] }
  ],

  // ───────── g13 — Relative clauses ─────────
  g13: [
    { ins: "Choose who or which.", az: "who (insan) və ya which (əşya, heyvan) seç.",
      ex: ["The man ___ (who / which) called you is my uncle.", "who"],
      items: [
        { q: "A dictionary is a book ___ (who / which) explains words.", a: [["which"]] },
        { q: "I like people ___ (who / which) are honest.", a: [["who"]] },
        { q: "The film ___ (who / which) we watched was boring.", a: [["which"]] },
        { q: "The woman ___ (who / which) lives next door is a doctor.", a: [["who"]] },
        { q: "Where is the cake ___ (who / which) was on the table?", a: [["which"]] },
        { q: "A pilot is a person ___ (who / which) flies planes.", a: [["who"]] },
        { q: "We have a dog ___ (who / which) is afraid of cats.", a: [["which"]] },
        { q: "The students ___ (who / which) passed the exam were very happy.", a: [["who"]] }
      ] },
    { ins: "Complete with who, which, where, whose or when.", az: "who, which, where, whose və ya when ilə tamamla.",
      ex: ["This is the village ___ my father was born.", "where"],
      items: [
        { q: "That's the man ___ car was stolen.", a: [["whose"]] },
        { q: "The hotel ___ we stayed was very nice.", a: [["where"]] },
        { q: "I'll never forget the day ___ I met you.", a: [["when", "that"]] },
        { q: "The boy ___ father is a pilot is my neighbour.", a: [["whose"]] },
        { q: "Is there a shop near here ___ I can buy a SIM card?", a: [["where"]] },
        { q: "I have a friend ___ speaks five languages.", a: [["who", "that"]] },
        { q: "Do you know the girl ___ brother works in our office?", a: [["whose"]] },
        { q: "2020 was the year ___ we moved to Baku.", a: [["when", "that"]] },
        { q: "The bus ___ goes to the airport leaves every hour.", a: [["which", "that"]] }
      ] },
    { ins: "Make one sentence from two. Use who, which, where or whose.", az: "İki cümləni birləşdir: who, which, where və ya whose işlət.",
      ex: ["I have a friend. She lives in London.", "I have a friend who lives in London."],
      items: [
        { q: "This is the restaurant. We had dinner there last night.", full: ["this is the restaurant where we had dinner last night"] },
        { q: "I met a woman. Her son is a famous singer.", full: ["i met a woman whose son is a famous singer"] },
        { q: "We stayed in a hotel. It was near the sea.", full: ["we stayed in a hotel which was near the sea", "we stayed in a hotel that was near the sea"] },
        { q: "I know a man. His wife is from Turkey.", full: ["i know a man whose wife is from turkey"] },
        { q: "Baku is a city. You can see old and new buildings there.", full: ["baku is a city where you can see old and new buildings"] },
        { q: "He has a cat. It sleeps all day.", full: ["he has a cat which sleeps all day", "he has a cat that sleeps all day"] },
        { q: "That's the doctor. She helped my mother.", full: ["that's the doctor who helped my mother", "that is the doctor who helped my mother", "that's the doctor that helped my mother", "that is the doctor that helped my mother"] },
        { q: "I have a neighbour. He works at the airport.", full: ["i have a neighbour who works at the airport", "i have a neighbour that works at the airport"] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["The book which I read it was great.", "The book which I read was great."],
      items: [
        { q: "I have a friend who he speaks French.", full: ["i have a friend who speaks french"] },
        { q: "This is the town where I live in.", full: ["this is the town where i live"] },
        { q: "The man which lives here is very old.", full: ["the man who lives here is very old", "the man that lives here is very old"] },
        { q: "That's the girl who her mother is a teacher.", full: ["that's the girl whose mother is a teacher", "that is the girl whose mother is a teacher"] },
        { q: "The film that we watched it last night was funny.", full: ["the film that we watched last night was funny"] },
        { q: "My brother, that lives in Ganja, is a doctor.", full: ["my brother, who lives in ganja, is a doctor"] },
        { q: "This is the hotel we stayed.", full: ["this is the hotel we stayed at", "this is the hotel where we stayed"] },
        { q: "The man lives next door is a pilot.", full: ["the man who lives next door is a pilot", "the man that lives next door is a pilot"] }
      ] },
    { ins: "Extra information between commas. Complete with who, which or whose (not that).", az: "Vergüllər arasındakı əlavə məlumat: who, which və ya whose yaz (that olmaz).",
      ex: ["My sister, ___ lives in London, is a nurse.", "who"],
      items: [
        { q: "Baku, ___ is on the Caspian Sea, is my home town.", a: [["which"]] },
        { q: "Our teacher, ___ name is Mrs Aliyeva, is very kind.", a: [["whose"]] },
        { q: "My car, ___ is ten years old, never breaks down.", a: [["which"]] },
        { q: "My grandfather, ___ is 85, still works in his garden.", a: [["who"]] },
        { q: "The Maiden Tower, ___ is in the old city, is very famous.", a: [["which"]] },
        { q: "Elvin, ___ brother is my best friend, is coming to dinner.", a: [["whose"]] },
        { q: "Shaki, ___ I visited last summer, is a beautiful town.", a: [["which"]] },
        { q: "My parents, ___ live in Lankaran, visit us every month.", a: [["who"]] }
      ] }
  ],

  // ───────── g14 — Şərt cümlələri ─────────
  g14: [
    { ins: "Put the verbs in the correct form: present simple or will (1st conditional).", az: "Feli düzgün formaya sal: Present Simple və ya will (1-ci növ).",
      ex: ["If it ___ (rain), we'll stay at home.", "rains"],
      items: [
        { q: "If I see Ali, I ___ (tell) him.", a: [["will tell", "'ll tell"]] },
        { q: "If you ___ (not / hurry), you'll miss the bus.", a: [["don't hurry", "do not hurry"]] },
        { q: "We ___ (go) to the beach if it's sunny tomorrow.", a: [["will go", "'ll go"]] },
        { q: "If she ___ (call), tell her I'm busy.", a: [["calls"]] },
        { q: "I ___ (not / come) if I'm tired.", a: [["won't come", "will not come"]] },
        { q: "If you ___ (study) hard, you ___ (pass) the exam.", a: [["study"], ["will pass", "'ll pass"]] },
        { q: "What ___ you ___ (do) if the shop is closed?", a: [["will"], ["do"]] },
        { q: "I'll call you when I ___ (get) home.", a: [["get"]] }
      ] },
    { ins: "These things are always true. Put the verbs in the present simple (0 conditional).", az: "Bunlar həmişə doğrudur. Felləri Present Simple-da yaz (0-cı növ).",
      ex: ["If you heat ice, it ___ (melt).", "melts"],
      items: [
        { q: "If you mix red and blue, you ___ (get) purple.", a: [["get"]] },
        { q: "If water ___ (reach) 100 degrees, it boils.", a: [["reaches"]] },
        { q: "If I drink coffee in the evening, I ___ (not / sleep) well.", a: [["don't sleep", "do not sleep"]] },
        { q: "Plants ___ (die) if they don't get water.", a: [["die"]] },
        { q: "If my son ___ (be) hungry, he gets angry.", a: [["is"]] },
        { q: "If you ___ (press) this button, the machine starts.", a: [["press"]] },
        { q: "If you ___ (not / water) flowers, they die.", a: [["don't water", "do not water"]] }
      ] },
    { ins: "Put the verbs in the correct form: past simple or would (2nd conditional).", az: "Feli düzgün formaya sal: Past Simple və ya would (2-ci növ, xəyal).",
      ex: ["If I ___ (have) more money, I would buy a flat.", "had"],
      items: [
        { q: "If I won a million, I ___ (travel) around the world.", a: [["would travel", "'d travel"]] },
        { q: "If she ___ (work) harder, she would get a better job.", a: [["worked"]] },
        { q: "If I ___ (be) you, I would see a doctor.", a: [["were"]] },
        { q: "I ___ (not / buy) that car if I were you.", a: [["wouldn't buy", "would not buy"]] },
        { q: "What would you do if you ___ (lose) your phone?", a: [["lost"]] },
        { q: "If we ___ (live) near the sea, we would swim every day.", a: [["lived"]] },
        { q: "If I knew her number, I ___ (call) her.", a: [["would call", "'d call"]] },
        { q: "If he ___ (not / be) so lazy, he would pass his exams.", a: [["weren't", "were not", "wasn't", "was not"]] },
        { q: "Would you be happy if you ___ (get) a job in London?", a: [["got"]] }
      ] },
    { ins: "Put the verbs in the correct form: had + V3 or would have + V3 (3rd conditional).", az: "Feli düzgün formaya sal: had + V3 və ya would have + V3 (3-cü növ).",
      ex: ["If I had known, I ___ (help) you.", "would have helped"],
      items: [
        { q: "If we ___ (not / miss) the bus, we wouldn't have been late.", a: [["hadn't missed", "had not missed"]] },
        { q: "If you ___ (tell) me, I would have come.", a: [["had told"]] },
        { q: "She ___ (pass) the exam if she had studied more.", a: [["would have passed"]] },
        { q: "If it ___ (not / rain), we would have gone to the beach.", a: [["hadn't rained", "had not rained"]] },
        { q: "I ___ (not / be) tired if I had gone to bed earlier.", a: [["wouldn't have been", "would not have been"]] },
        { q: "If he ___ (leave) earlier, he would have caught the train.", a: [["had left"]] },
        { q: "We ___ (buy) the house if it had been cheaper.", a: [["would have bought"]] }
      ] },
    { ins: "Choose the correct form.", az: "Düzgün variantı seç (hansı növ şərt? if, unless, yoxsa when?).",
      ex: ["If I ___ (get / will get) the job, I'll have a party.", "get"],
      items: [
        { q: "If I ___ (won / win) a million, I would travel.", a: [["won"]] },
        { q: "Unless you ___ (study / don't study), you won't pass.", a: [["study"]] },
        { q: "If it ___ (will rain / rains) tomorrow, we'll stay at home.", a: [["rains"]] },
        { q: "If I had known about the party, I ___ (would come / would have come).", a: [["would have come"]] },
        { q: "I finish work at 6. I'll call you ___ (when / if) I get home.", a: [["when"]] },
        { q: "I'm very busy this week, but I'll help you ___ (when / if) I have time.", a: [["if"]] },
        { q: "If I ___ (am / were) you, I wouldn't do that.", a: [["were"]] },
        { q: "You won't get a good job ___ (if / unless) you learn English.", a: [["unless"]] },
        { q: "What ___ (will / would) you do if you saw a ghost?", a: [["would"]] }
      ] }
  ],

  // ───────── g15 — Reported speech ─────────
  g15: [
    { ins: "Put in say, said, tell or told.", az: "say, said, tell və ya told yaz.",
      ex: ["She ___ me that she was ill.", "told"],
      items: [
        { q: "He ___ that he was hungry.", a: [["said"]] },
        { q: "Leyla ___ us she was getting married.", a: [["told"]] },
        { q: "What did the doctor ___ you?", a: [["tell"]] },
        { q: "I ___ to him that I was busy.", a: [["said"]] },
        { q: "Can you ___ me the time, please?", a: [["tell"]] },
        { q: "They ___ they would come later.", a: [["said"]] },
        { q: "Ali ___ me to wait for him.", a: [["told"]] },
        { q: "Please don't ___ anybody about it.", a: [["tell"]] },
        { q: "Why didn't you ___ goodbye?", a: [["say"]] }
      ] },
    { ins: "Complete the reported sentences. Move the tense one step back.", az: "Ötürülən cümləni tamamla. Zamanı bir addım geri çək.",
      ex: ["«I'm tired.» → She said she ___ tired.", "was"],
      items: [
        { q: "«I work in a bank.» → He said he ___ in a bank.", a: [["worked", "works"]] },
        { q: "«I will call you.» → He said he ___ call me.", a: [["would"]] },
        { q: "«I can swim.» → She said she ___ swim.", a: [["could", "can"]] },
        { q: "«I have finished.» → He said he ___ finished.", a: [["had"]] },
        { q: "«We are hungry.» → They said they ___ hungry.", a: [["were"]] },
        { q: "«I don't like coffee.» → She said she ___ like coffee.", a: [["didn't", "did not", "doesn't", "does not"]] },
        { q: "«I'm going to the shop.» → He said he ___ going to the shop.", a: [["was"]] },
        { q: "«I have lost my key.» → Murad said he ___ lost his key.", a: [["had"]] },
        { q: "«I won't be late.» → She said she ___ be late.", a: [["wouldn't", "would not"]] }
      ] },
    { ins: "Report what the person said. Change the tense, the pronouns and the time words.", az: "Deyilənləri ötür: zamanı, əvəzlikləri və vaxt sözlərini dəyiş.",
      ex: ["«My car is broken,» Kamran said.", "Kamran said his car was broken."],
      items: [
        { q: "«I'm very busy,» Nigar said.", full: ["nigar said she was very busy", "nigar said that she was very busy"] },
        { q: "«I'll come tomorrow,» he said.", full: ["he said he would come the next day", "he said that he would come the next day", "he said he'd come the next day", "he said that he'd come the next day"] },
        { q: "«I'll help you,» she told me.", full: ["she told me she would help me", "she told me that she would help me", "she told me she'd help me", "she told me that she'd help me"] },
        { q: "«We live in Ganja,» they said.", full: ["they said they lived in ganja", "they said that they lived in ganja"] },
        { q: "«I can't find my phone,» Sabina said.", full: ["sabina said she couldn't find her phone", "sabina said that she couldn't find her phone", "sabina said she could not find her phone", "sabina said that she could not find her phone"] },
        { q: "«I have never been to London,» my father said.", full: ["my father said he had never been to london", "my father said that he had never been to london", "my father said he'd never been to london", "my father said that he'd never been to london"] },
        { q: "«I saw your brother yesterday,» Ali told me.", full: ["ali told me he had seen my brother the day before", "ali told me that he had seen my brother the day before", "ali told me he saw my brother the day before", "ali told me that he saw my brother the day before", "ali told me he'd seen my brother the day before", "ali told me that he'd seen my brother the day before"] }
      ] },
    { ins: "Report the questions. Begin with She asked me …", az: "Sualları ötür. She asked me … ilə başla (sıra adi cümlə kimi, sual işarəsi yoxdur).",
      ex: ["«Do you speak English?»", "She asked me if I spoke English."],
      items: [
        { q: "«Are you hungry?»", full: ["she asked me if i was hungry", "she asked me whether i was hungry"] },
        { q: "«Where do you work?»", full: ["she asked me where i worked"] },
        { q: "«Can you drive?»", full: ["she asked me if i could drive", "she asked me whether i could drive"] },
        { q: "«What time is it?»", full: ["she asked me what time it was"] },
        { q: "«Why are you late?»", full: ["she asked me why i was late"] },
        { q: "«Have you finished your work?»", full: ["she asked me if i had finished my work", "she asked me whether i had finished my work", "she asked me if i'd finished my work", "she asked me whether i'd finished my work"] },
        { q: "«Where does your brother live?»", full: ["she asked me where my brother lived"] },
        { q: "«Did you see the film?»", full: ["she asked me if i had seen the film", "she asked me whether i had seen the film", "she asked me if i saw the film", "she asked me whether i saw the film", "she asked me if i'd seen the film", "she asked me whether i'd seen the film"] }
      ] },
    { ins: "Report the orders and requests. Use the words in brackets + to or not to.", az: "Əmr və xahişləri ötür: mötərizədəki sözlər + to / not to.",
      ex: ["«Close the door.» (She told me …)", "She told me to close the door."],
      items: [
        { q: "«Please help me.» (He asked me …)", full: ["he asked me to help him"] },
        { q: "«Don't be late.» (My boss told me …)", full: ["my boss told me not to be late"] },
        { q: "«Sit down, please.» (The doctor asked me …)", full: ["the doctor asked me to sit down"] },
        { q: "«Don't touch it!» (My mother told me …)", full: ["my mother told me not to touch it"] },
        { q: "«Please call me tomorrow.» (Leyla asked me …)", full: ["leyla asked me to call her the next day", "leyla asked me to call her tomorrow"] },
        { q: "«Wait here.» (The police officer told us …)", full: ["the police officer told us to wait there", "the police officer told us to wait here"] },
        { q: "«Don't eat too much sugar.» (The doctor told him …)", full: ["the doctor told him not to eat too much sugar"] }
      ] }
  ],

  // ───────── g16 — Bağlayıcılar ─────────
  g16: [
    { ins: "Complete with because, because of or so.", az: "because, because of və ya so ilə tamamla.",
      ex: ["The match was cancelled ___ the rain.", "because of"],
      items: [
        { q: "I was ill, ___ I stayed at home.", a: [["so"]] },
        { q: "I stayed at home ___ I was ill.", a: [["because"]] },
        { q: "We were late ___ the traffic.", a: [["because of"]] },
        { q: "It was very cold, ___ we didn't go out.", a: [["so"]] },
        { q: "She couldn't sleep ___ the noise.", a: [["because of"]] },
        { q: "He didn't come to work ___ his car broke down.", a: [["because"]] },
        { q: "The shop was closed, ___ we went to another one.", a: [["so"]] },
        { q: "I love this city ___ its people.", a: [["because of"]] }
      ] },
    { ins: "Choose the correct word.", az: "Düzgün sözü seç (although / despite / however …).",
      ex: ["___ (Although / Despite) it was late, we continued working.", "Although"],
      items: [
        { q: "___ (Although / Despite) the rain, we went for a walk.", a: [["despite"]] },
        { q: "The hotel was cheap. ___ (However / Although), the rooms were dirty.", a: [["however"]] },
        { q: "She went to work ___ (although / in spite of) being ill.", a: [["in spite of"]] },
        { q: "He didn't get the job ___ (although / despite) he had a lot of experience.", a: [["although"]] },
        { q: "___ (Despite / Despite of) the noise, I slept well.", a: [["despite"]] },
        { q: "I like my job. ___ (However / Despite), the salary is low.", a: [["however"]] },
        { q: "___ (Even though / In spite of) she was tired, she cooked dinner.", a: [["even though"]] },
        { q: "We enjoyed the trip ___ (although / despite) the bad weather.", a: [["despite"]] }
      ] },
    { ins: "Choose the correct linking word.", az: "Düzgün bağlayıcını seç.",
      ex: ["I like tea, ___ (whereas / because) my wife prefers coffee.", "whereas"],
      items: [
        { q: "Big cities have many problems, ___ (such as / for example) traffic and pollution.", a: [["such as"]] },
        { q: "Many students work. ___ (For example / Such as), my cousin works in a cafe.", a: [["for example"]] },
        { q: "She studied very hard. ___ (As a result / However), she passed the exam.", a: [["as a result"]] },
        { q: "Cars cause pollution. ___ (In addition / Although), they make cities noisy.", a: [["in addition"]] },
        { q: "Prices went up. ___ (Therefore / Despite), people bought less.", a: [["therefore"]] },
        { q: "My brother loves sport, ___ (while / so) I hate it.", a: [["while"]] },
        { q: "She speaks English. She ___ (also / however) speaks French.", a: [["also"]] },
        { q: "I left early ___ (so that / because of) I could catch the train.", a: [["so that"]] }
      ] },
    { ins: "Join the two sentences. Use the word in brackets.", az: "İki cümləni mötərizədəki sözlə birləşdir.",
      ex: ["It was raining. We went out. (although)", "Although it was raining, we went out."],
      items: [
        { q: "I was tired. I went to bed early. (so)", full: ["i was tired, so i went to bed early", "i was tired so i went to bed early"] },
        { q: "I stayed at home. I had a headache. (because)", full: ["i stayed at home because i had a headache", "because i had a headache, i stayed at home", "because i had a headache i stayed at home"] },
        { q: "It was cold. We went swimming. (although)", full: ["although it was cold, we went swimming", "although it was cold we went swimming", "we went swimming although it was cold"] },
        { q: "I like coffee. My husband prefers tea. (whereas)", full: ["i like coffee, whereas my husband prefers tea", "i like coffee whereas my husband prefers tea", "whereas i like coffee, my husband prefers tea"] },
        { q: "It was raining. We couldn't play tennis. (so)", full: ["it was raining, so we couldn't play tennis", "it was raining so we couldn't play tennis", "it was raining, so we could not play tennis", "it was raining so we could not play tennis"] },
        { q: "He's saving money. He wants to buy a car. (to)", full: ["he's saving money to buy a car", "he is saving money to buy a car"] },
        { q: "She was tired. She finished the report. (despite being)", full: ["despite being tired, she finished the report", "despite being tired she finished the report", "she finished the report despite being tired"] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["Although it was late, but we continued.", "Although it was late, we continued."],
      items: [
        { q: "Despite of the rain, we played football.", full: ["despite the rain, we played football", "in spite of the rain, we played football", "despite the rain we played football", "in spite of the rain we played football"] },
        { q: "The match was cancelled because the rain.", full: ["the match was cancelled because of the rain", "the match was canceled because of the rain"] },
        { q: "I'm saving money for buy a flat.", full: ["i'm saving money to buy a flat", "i am saving money to buy a flat"] },
        { q: "We were late because of the bus was late.", full: ["we were late because the bus was late"] },
        { q: "During I was watching TV, the phone rang.", full: ["while i was watching tv, the phone rang", "while i was watching tv the phone rang", "when i was watching tv, the phone rang", "when i was watching tv the phone rang"] },
        { q: "Although he is rich, but he isn't happy.", full: ["although he is rich, he isn't happy", "although he is rich, he is not happy", "although he is rich he isn't happy", "although he is rich he is not happy", "he is rich, but he isn't happy", "he is rich, but he is not happy", "he's rich, but he isn't happy"] },
        { q: "I'll call you when I will arrive.", full: ["i'll call you when i arrive", "i will call you when i arrive"] }
      ] }
  ],

  // ───────── g17 — Present Perfect Continuous və Past Perfect ─────────
  g17: [
    { ins: "Put the verb in the present perfect continuous (have/has been + -ing).", az: "Feli Present Perfect Continuous-a sal (have/has been + -ing).",
      ex: ["I ___ (wait) for an hour.", "have been waiting"],
      items: [
        { q: "She ___ (study) for three hours.", a: [["has been studying", "'s been studying"]] },
        { q: "We ___ (live) here since 2019.", a: [["have been living", "'ve been living"]] },
        { q: "How long ___ you ___ (learn) English?", a: [["have"], ["been learning"]] },
        { q: "It ___ (rain) all day.", a: [["has been raining", "'s been raining"]] },
        { q: "They ___ (work) in this company for ten years.", a: [["have been working", "'ve been working"]] },
        { q: "Your eyes are red. ___ you ___ (cry)?", a: [["have"], ["been crying"]] },
        { q: "My brother ___ (play) football since he was six.", a: [["has been playing", "'s been playing"]] },
        { q: "How long ___ Murad ___ (wait) for the bus?", a: [["has"], ["been waiting"]] },
        { q: "I'm tired because I ___ (run).", a: [["have been running", "'ve been running"]] }
      ] },
    { ins: "Present perfect (have done) or present perfect continuous (have been doing)?", az: "have + V3 (nəticə, say) yoxsa have been + -ing (müddət, proses)?",
      ex: ["I ___ (write) three emails this morning.", "have written"],
      items: [
        { q: "I ___ (write) emails all morning.", a: [["have been writing", "'ve been writing"]] },
        { q: "She ___ (read) five books this month.", a: [["has read", "'s read"]] },
        { q: "I ___ (know) him for ten years.", a: [["have known", "'ve known"]] },
        { q: "The streets are wet. It ___ (rain).", a: [["has been raining", "'s been raining"]] },
        { q: "We ___ (paint) the kitchen all day. We're very tired.", a: [["have been painting", "'ve been painting"]] },
        { q: "How many cups of coffee ___ you ___ (drink) today?", a: [["have"], ["drunk"]] },
        { q: "He ___ (want) a new car for a long time.", a: [["has wanted", "'s wanted"]] },
        { q: "Look! I ___ (finish) the report.", a: [["have finished", "'ve finished"]] },
        { q: "How long ___ you ___ (wait)? — About twenty minutes.", a: [["have"], ["been waiting"]] }
      ] },
    { ins: "Put the verb in the past perfect (had + V3).", az: "Feli Past Perfect-ə sal (had + V3).",
      ex: ["When I arrived, the film ___ (already / start).", "had already started"],
      items: [
        { q: "By the time we got to the station, the train ___ (leave).", a: [["had left", "'d left"]] },
        { q: "She was nervous because she ___ (never / fly) before.", a: [["had never flown", "'d never flown"]] },
        { q: "I didn't recognise him because he ___ (change) a lot.", a: [["had changed", "'d changed"]] },
        { q: "After she ___ (finish) work, she went to the gym.", a: [["had finished", "'d finished", "finished"]] },
        { q: "I ___ (not / see) the film before, so I watched it with interest.", a: [["hadn't seen", "had not seen"]] },
        { q: "___ you ever ___ (eat) sushi before that day?", a: [["had"], ["eaten"]] },
        { q: "When we arrived at the party, everybody ___ (go) home.", a: [["had gone", "'d gone"]] },
        { q: "He couldn't pay because he ___ (lose) his wallet.", a: [["had lost", "'d lost"]] }
      ] },
    { ins: "Past simple or past perfect? Choose the correct form.", az: "Past Simple, yoxsa Past Perfect? Düzgün formanı seç.",
      ex: ["When I arrived, the film ___ (started / had started). I missed the first 20 minutes.", "had started"],
      items: [
        { q: "When I arrived, the film ___ (started / had started), so I saw it from the beginning.", a: [["started"]] },
        { q: "I was hungry because I ___ (didn't eat / hadn't eaten) all day.", a: [["hadn't eaten"]] },
        { q: "When the phone rang, I ___ (answered / had answered) it.", a: [["answered"]] },
        { q: "We went to the restaurant, but it ___ (closed / had closed) an hour before.", a: [["had closed"]] },
        { q: "When I got to the bus stop, the bus ___ (left / had left), so I waited for the next one.", a: [["had left"]] },
        { q: "When I saw Ali, I ___ (said / had said) hello.", a: [["said"]] },
        { q: "I couldn't get into the house because I ___ (lost / had lost) my keys.", a: [["had lost"]] },
        { q: "Yesterday I ___ (went / had gone) to the market and bought some fruit.", a: [["went"]] }
      ] },
    { ins: "Each sentence has a mistake. Write the correct sentence.", az: "Hər cümlədə bir səhv var. Düzgün cümləni yaz.",
      ex: ["I am waiting for an hour.", "I have been waiting for an hour."],
      items: [
        { q: "I have been knowing him for years.", full: ["i have known him for years", "i've known him for years"] },
        { q: "I've been writing three emails.", full: ["i've written three emails", "i have written three emails"] },
        { q: "How long are you learning English?", full: ["how long have you been learning english"] },
        { q: "When I arrived, everybody has left.", full: ["when i arrived, everybody had left", "when i arrived everybody had left"] },
        { q: "She was nervous because she never flew before.", full: ["she was nervous because she had never flown before", "she was nervous because she'd never flown before"] },
        { q: "We are living here since 2015.", full: ["we have been living here since 2015", "we've been living here since 2015", "we have lived here since 2015", "we've lived here since 2015"] },
        { q: "He said he has lost his key.", full: ["he said he had lost his key", "he said he'd lost his key"] }
      ] }
  ],

  // ───────── g18 — Mürəkkəb cümlələr və durğu işarələri ─────────
  g18: [
    { ins: "Each sentence has no subject or no verb. Write the correct sentence.", az: "Cümlədə «kim» (subyekt) və ya fel çatmır. Düzgün cümləni yaz.",
      ex: ["The city beautiful.", "The city is beautiful."],
      items: [
        { q: "Is very hot today.", full: ["it is very hot today", "it's very hot today"] },
        { q: "My brother a doctor.", full: ["my brother is a doctor", "my brother's a doctor", "my brother was a doctor"] },
        { q: "Is important to learn English.", full: ["it is important to learn english", "it's important to learn english"] },
        { q: "The children very tired after the trip.", full: ["the children were very tired after the trip", "the children are very tired after the trip"] },
        { q: "I very happy with my new job.", full: ["i am very happy with my new job", "i'm very happy with my new job", "i was very happy with my new job"] },
        { q: "There many cafes in this street.", full: ["there are many cafes in this street", "there were many cafes in this street"] },
        { q: "Was raining all day yesterday.", full: ["it was raining all day yesterday"] }
      ] },
    { ins: "Don't join two sentences with only a comma. Add and, but, so or because.", az: "İki cümləni yalnız vergüllə birləşdirmək olmaz. and, but, so və ya because əlavə et.",
      ex: ["I was tired, ___ I went home.", "so"],
      items: [
        { q: "I called her, ___ she didn't answer.", a: [["but"]] },
        { q: "It was raining, ___ we took a taxi.", a: [["so"]] },
        { q: "He couldn't come to work ___ he was ill.", a: [["because"]] },
        { q: "The film was long, ___ it was very interesting.", a: [["but"]] },
        { q: "We were hungry, ___ we made some sandwiches.", a: [["so"]] },
        { q: "She studied all night ___ she had an exam the next day.", a: [["because"]] },
        { q: "I didn't sleep well, ___ I'm tired today.", a: [["so"]] },
        { q: "I opened the fridge ___ took out some milk.", a: [["and"]] }
      ] },
    { ins: "The second part is not a full sentence. Join the two parts into one sentence.", az: "İkinci hissə tam cümlə deyil. İki hissəni bir cümlədə birləşdir.",
      ex: ["I stayed at home. Because I was ill.", "I stayed at home because I was ill."],
      items: [
        { q: "We went out. Although it was raining.", full: ["we went out although it was raining", "although it was raining, we went out", "although it was raining we went out"] },
        { q: "I made a sandwich. Because I was hungry.", full: ["i made a sandwich because i was hungry", "because i was hungry, i made a sandwich", "because i was hungry i made a sandwich"] },
        { q: "The shop was closed. When I arrived.", full: ["the shop was closed when i arrived", "when i arrived, the shop was closed", "when i arrived the shop was closed"] },
        { q: "Call me. If you need help.", full: ["call me if you need help", "if you need help, call me", "if you need help call me"] },
        { q: "She was happy. Because she passed the exam.", full: ["she was happy because she passed the exam", "because she passed the exam, she was happy", "because she passed the exam she was happy", "she was happy because she had passed the exam"] },
        { q: "I'll call you. When I get home.", full: ["i'll call you when i get home", "i will call you when i get home", "when i get home, i'll call you", "when i get home i'll call you", "when i get home, i will call you", "when i get home i will call you"] }
      ] },
    { ins: "Where does the comma go? Write the word BEFORE the comma. If no comma is needed, write X.", az: "Vergül harada olmalıdır? Vergüldən ƏVVƏLKİ sözü yaz. Vergül lazım deyilsə, X yaz.",
      ex: ["When I arrived the shop was closed.", "arrived"],
      items: [
        { q: "If you need help call me. → ___", a: [["help"]] },
        { q: "The shop was closed when I arrived. → ___", a: [["x", "-"]] },
        { q: "The flat is small. However it is very cheap. → ___", a: [["however"]] },
        { q: "Although it was raining we went out. → ___", a: [["raining"]] },
        { q: "We went out although it was raining. → ___", a: [["x", "-"]] },
        { q: "I bought bread milk and eggs. → ___", a: [["bread"]] },
        { q: "For example many students work part-time. → ___", a: [["example"]] },
        { q: "Because I was hungry I made a sandwich. → ___", a: [["hungry"]] },
        { q: "I'll call you if I have time. → ___", a: [["x", "-"]] }
      ] },
    { ins: "Choose the correct form.", az: "Düzgün variantı seç (its / it's, akademik yazıda tam forma, dolayı sualda sıra).",
      ex: ["___ (Its / It's) a good idea.", "It's"],
      items: [
        { q: "The city is famous for ___ (its / it's) old buildings.", a: [["its"]] },
        { q: "___ (Its / It's) very cold today.", a: [["it's"]] },
        { q: "The dog is eating ___ (its / it's) food.", a: [["its"]] },
        { q: "I don't know what time ___ (it starts / does it start).", a: [["it starts"]] },
        { q: "I asked him where ___ (he lived / did he live).", a: [["he lived"]] },
        { q: "Academic style: Many people ___ (don't / do not) have enough time.", a: [["do not"]] },
        { q: "Academic style: Students ___ (can't / cannot) always work and study at the same time.", a: [["cannot"]] },
        { q: "Academic style: ___ (It's / It is) important to protect nature.", a: [["it is"]] },
        { q: "Academic style: This problem ___ (won't / will not) disappear quickly.", a: [["will not"]] }
      ] }
  ]
});
