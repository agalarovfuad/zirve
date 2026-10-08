// Zirvə — qrammatikanın geniş izahları (Fuad: «daha detallı, güclü səviyyədə»). grammar.js-dəki qısa izahı əvəz edir.
const GRAM_EXPL = {
g01: [
 "<h4>1. Niyə ingiliscədə fel məcburidir?</h4>",
 "Azərbaycan dilində «Mən müəlliməm», «O evdədir» deyəndə ayrıca fel yoxdur — «-əm», «-dir» şəkilçidir. İngilis cümləsində isə <b>hər cümlədə ən azı bir fel olmalıdır</b>. Ona görə «Mən yorğunam» → <b>I am tired</b>, «O evdədir» → <b>She is at home</b>. Bu «be» feli azərbaycanca şəkilçilərin işini görür.",
 "<h4>2. BE feli — formalar</h4>",
 "<table><tr><th></th><th>İndiki</th><th>Keçmiş</th><th>İnkar (qısa)</th></tr><tr><td>I</td><td>am</td><td>was</td><td>I'm not / I wasn't</td></tr><tr><td>he / she / it</td><td>is</td><td>was</td><td>isn't / wasn't</td></tr><tr><td>we / you / they</td><td>are</td><td>were</td><td>aren't / weren't</td></tr></table>",
 "BE nə vaxt işlənir: <b>sifətlə</b> (I am happy), <b>isimlə/peşə ilə</b> (She is a doctor), <b>yerlə</b> (We are in Baku), <b>yaşla</b> (I am 25 — «I have 25» səhvdir!), <b>hava və vaxtla</b> (It is cold. It is 5 o'clock), <b>there is / there are</b> quruluşunda (There is a bank near here).",
 "Sual: BE subyektin <b>önünə</b> keçir — <b>Are</b> you ready? <b>Was</b> she at work? İnkar: BE-dən sonra <b>not</b> — He <b>is not (isn't)</b> here. Qısa cavab: Yes, I <b>am</b>. / No, she <b>isn't</b>. (Qısa cavabda «Yes, I'm» deyilmir — tam forma qalır.)",
 "<h4>3. HAVE — sahib olmaq</h4>",
 "I/you/we/they <b>have</b>, he/she/it <b>has</b>, keçmiş <b>had</b>. Danışıqda (xüsusən britaniyada) <b>have got / has got</b> də işlənir: I've got two sisters. Sual və inkar adi fel kimi DO ilə qurulur: <b>Do</b> you <b>have</b> a car? I <b>don't have</b> time. (have got ilə: <b>Have</b> you <b>got</b> a car? I <b>haven't got</b> time.)",
 "HAVE həm də hərəkət bildirir: <b>have breakfast / lunch / dinner</b>, <b>have a shower</b>, <b>have a good time</b>, <b>have a meeting</b>. Bu mənada «have got» işlənmir: I have breakfast at 8 (I've got breakfast — səhv).",
 "<h4>4. DO — köməkçi fel (sual və inkar üçün)</h4>",
 "Adi fellərin (work, live, like, go...) sual və inkarı öz-özünə qurulmur, köməkçi lazımdır: <b>do / does</b> (indiki), <b>did</b> (keçmiş).",
 "<table><tr><th></th><th>Təsdiq</th><th>İnkar</th><th>Sual</th></tr><tr><td>I/you/we/they</td><td>I work</td><td>I <b>don't</b> work</td><td><b>Do</b> you work?</td></tr><tr><td>he/she/it</td><td>She work<b>s</b></td><td>She <b>doesn't</b> work</td><td><b>Does</b> she work?</td></tr><tr><td>keçmiş (hamısı)</td><td>He work<b>ed</b></td><td>He <b>didn't</b> work</td><td><b>Did</b> he work?</td></tr></table>",
 "<b>Ən vacib qayda:</b> köməkçi (does/did) zaman və şəxs məlumatını özünə götürür, ona görə əsas fel <b>çılpaq</b> qalır: She works → She doesn't <b>work</b> (works yox). He went → Did he <b>go</b>? (went yox). Yəni -s və keçmiş forma cümlədə yalnız BİR dəfə görünür.",
 "<h4>5. Sual sözləri ilə sual</h4>",
 "Quruluş: <b>Sual sözü + köməkçi + subyekt + əsas fel</b>. Where <b>do</b> you live? What time <b>does</b> the shop open? Why <b>did</b> they leave? BE ilə: Where <b>is</b> your office? How old <b>are</b> you?",
 "İstisna — <b>subyekt sualı</b>: sual sözü özü subyektdirsə, do/does/did işlənmir: <b>Who called</b> you? (Who did call — səhv). <b>What happened</b>? Bunu növbəti səviyyədə daha çox görəcəksən.",
 "<h4>6. Azərbaycanca danışanların ən çox etdiyi 4 səhv</h4>",
 "<ul><li>BE-ni buraxmaq: «I tired», «She very nice» → I <b>am</b> tired, She <b>is</b> very nice.</li><li>Sifətlə DO işlətmək: «Do you hungry?» → <b>Are</b> you hungry?</li><li>Köməkçidən sonra -s/keçmiş saxlamaq: «Does he likes», «Did you saw» → Does he <b>like</b>, Did you <b>see</b>.</li><li>Yaşı HAVE ilə demək: «I have 30 years» → I <b>am</b> 30 (years old).</li></ul>"
],
g02: [
 "<h4>1. Əsas fərq: fel harada durur?</h4>",
 "Azərbaycan dilində söz sırası sərbəstdir və fel adətən sonda gəlir: «Mən hər gün işə avtobusla gedirəm». İngilis dilində söz sırası <b>sabitdir</b> və mənanı məhz sıra müəyyən edir. Əsas sxem: <b>Subject + Verb + Object + Place + Time</b> (S-V-O-P-T).",
 "<table><tr><th>Subject</th><th>Verb</th><th>Object</th><th>Place</th><th>Time</th></tr><tr><td>I</td><td>met</td><td>my teacher</td><td>at the station</td><td>yesterday.</td></tr><tr><td>She</td><td>is reading</td><td>a book</td><td>in her room</td><td>now.</td></tr><tr><td>We</td><td>bought</td><td>a new car</td><td>in Ganja</td><td>last month.</td></tr></table>",
 "«The dog bit the man» və «The man bit the dog» — sözlər eynidir, məna tam fərqlidir. İngiliscədə subyekt feldən ƏVVƏL, obyekt feldən SONRA gəlir; şəkilçi ilə bunu göstərə bilmirik.",
 "<h4>2. Vaxt sözü əvvələ keçə bilərmi?</h4>",
 "Bəli, vurğu üçün vaxt cümlənin əvvəlinə keçə bilər: <b>Yesterday</b> I met my teacher at the station. Amma vaxt sözü subyektlə fel ARASINA girmir: «I yesterday met» — səhvdir. Yer ilə vaxt birlikdə sonda olanda, adətən <b>əvvəl yer, sonra vaxt</b>: I was <b>at home</b> <b>all day</b>.",
 "<h4>3. Tezlik zərfləri (always, usually, often, sometimes, rarely, never)</h4>",
 "<table><tr><th>Qayda</th><th>Nümunə</th></tr><tr><td>Əsas feldən <b>ƏVVƏL</b></td><td>I <b>usually</b> walk to work.</td></tr><tr><td>BE feldən <b>SONRA</b></td><td>She is <b>always</b> late.</td></tr><tr><td>Köməkçi və əsas fel arasında</td><td>I have <b>never</b> been to Paris. / You can <b>always</b> call me.</td></tr><tr><td>İnkarda: don't + zərf + fel</td><td>I don't <b>often</b> eat meat.</td></tr></table>",
 "<b>sometimes</b> və <b>usually</b> cümlənin əvvəlində də ola bilər (Sometimes I work from home), amma <b>always</b> və <b>never</b> əvvələ keçmir. Tezlik ifadələri (every day, twice a week, once a month) isə cümlənin <b>sonunda</b> olur: I go to the gym <b>twice a week</b>.",
 "<h4>4. Sual cümləsində söz sırası</h4>",
 "Sualda subyekt ilə köməkçi fel <b>yer dəyişir</b>: You are tired → <b>Are you</b> tired? You live here → <b>Do you</b> live here? Sual sözü ən önə gəlir: <b>Where do you</b> live? Azərbaycanca intonasiya ilə sual verə bilərik («Sən burada yaşayırsan?»), ingiliscədə yazıda quruluş mütləq dəyişməlidir.",
 "<h4>5. İki obyekt: give me the book</h4>",
 "Bəzi fellərin iki obyekti olur (give, send, show, tell, buy). İki sıra mümkündür: <b>give + şəxs + əşya</b> (Give <b>me the book</b>) və ya <b>give + əşya + to + şəxs</b> (Give <b>the book to me</b>). «Give to me the book» — səhvdir.",
 "<h4>6. Sifətlərin yeri</h4>",
 "Sifət ismin <b>önündə</b> gəlir və heç vaxt cəm olmur: a <b>new</b> car, two <b>new</b> cars (news cars — səhv). BE-dən sonra da gələ bilər: The car is <b>new</b>.",
 "<h4>7. Tipik səhvlər</h4>",
 "<ul><li>Feli sona qoymaq: «I English study» → I <b>study English</b>.</li><li>Zərfi yanlış yerə: «I go always by bus» → I <b>always go</b> by bus.</li><li>Sualda köməkçini unutmaq: «Where you work?» → Where <b>do you</b> work?</li><li>Vaxtı subyektlə fel arasına: «I yesterday saw him» → I saw him yesterday.</li></ul>"
]
};
GRAM.forEach(g=>{if(GRAM_EXPL[g.id])g.expl=GRAM_EXPL[g.id];});
