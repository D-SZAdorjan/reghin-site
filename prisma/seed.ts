const {Prisma, PrismaClient } = require("@prisma/client");

const personDataList = [
    {
        first_name: "György",
        last_name: "Heiter",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_1.png",
        description: {
            de: "",
            en: "One of the town's most famous personalities, György Heiter was born on 21 June 1871 in Szászrégen. He learned to play the violin at the age of less than 8, but his musical education was soon discontinued due to the impoverishment of his family. Forced to enter industry, he trained as a photographer. However, he was not far from music, as he was invited to join the Philharmonic Orchestra in Sassregen as a photographer. During his school years he also went to Brasov, where he did not let his musical talent go to waste and became conductor of the Liederkanz in Brasov. Later he travelled around, visiting Vienna and Munich several times, where, in addition to photography, he perfected his musical studies. After returning to Saxony, he opened his own photographic studio in 1895. Soon he became the most famous photographer in the region, working on portraits, postcards, wedding pictures, landscapes and hunting scenes. For posterity, he captured portraits of famous people such as Crown Prince Rudolf, Samu Teleki, Ferdinand I, Charles II, Michael I. In recognition of his achievements, he was awarded the title of Royal Photographer in 1908. His photographic talents were recognised by King Ferdinand I of Romania when he visited Sassrine in 1922. He also conducted the serenade to welcome the King, after which Ferdinand I remarked, „I had no idea he was a self-musical court photographer”. He proved his talent at the Bucharest Photographic Exhibition of 1928, when he won a gold medal for the artistic pictures he exhibited. Alongside his business activities, he also devoted time to his music, first as a member of the Saxon String Quartet and later as conductor of the Saxon Männergesangverein. In 1905 he was appointed leader of the Hungarian Civic Singing Society of Saxony. The economic, social and spiritual development of the town in the second half of the 19th century brought with it the spread of culture among the population through education, drama, music and singing. The Hungarian Civic Choir, founded in 1883, took on a good part of these tasks, with the great help of the town's distinguished photographer and choirmaster, György Heiter. Led by György Heiter, the choir returned home with second prize at the 1912 Budapest National Song Contest, and subsequently won first prize three times, in 1928 in Sighisoara, in 1931 and in 1938 in Cluj-Napoca. Thanks to their successes and the selfless work of György Heiter, the Sasregen Singing Circle was known and appreciated far and wide in the countryside. The choir ceased to exist completely on 6 October 1984, the 100th anniversary of its foundation. The members of the choir celebrated the notable anniversaries of its existence. The 25th anniversary of the choir's existence was celebrated with a grand unveiling of the choir's flag. On one side of the green-based flag with golden-yellow embroidery is the Hungarian Civic Dalkör 1884 1909 of Szászrégeni, on the other side the inscription “Sweet homeland, dear song, we live for you, we die for you”. The flag can be seen today in the Reformed Church of Szászrégeni. In 1930, the choir members organised a concert in honour of the fact that György Heiter had been at the head of the choir for more than 25 years. According to a newspaper article of the time, on the occasion of György Heiter's 25th anniversary as choirmaster, more than a thousand people gathered in the main hall of the Szászrégeni Municipal Hotel to celebrate his decades of selfless service to Hungarian culture. In a few minutes of conversation, György Heiter explains that he has been involved in music since he was 12 years old. He has visited Germany a lot, where he also had the opportunity to participate in the music scene. He has been living in Saxony for 25 years and has been the conductor of the Hungarian Song Choir from the very beginning. Despite his Saxon nationality, he has selflessly devoted all his energy and work to the cause. György Heiter has been the choirmaster and musical director of the Hungarian Civic Choir for more than 30 years since 1935. His 30th anniversary as a conductor was followed by a huge celebration similar to the previous one. For more than 40 years (1905-1940) György Heiter was the conductor of the Hungarian Civic Chorus, and in recognition of his selfless activity and merits he was elected by the Song Association first as district and then as national conductor. He died on 13 March 1947 and his body was laid to rest in the Lutheran cemetery in Szászrégen. His birthplace was nationalised and is now a casino and fast-food restaurant.",
            fr: "",
            hu: "A város egyik leghíresebb személyisége, Heiter György 1871. június 21-én született Szászrégenben. Kevesebb mint 8 éves korában már hegedülni tanult, viszont a család elszegényedése miatt nemsokára abbamaradt zenei taníttatása. Kénytelen volt ipari pályára lépnie, így fényképésznek tanult. A zenétől azonban nem került távol, ugyanis meghívták a szászrégeni filharmóniába, mint a zenekar fényképésze. Iskolai évei alatt Brassóba is elkerült, ahol nem hagyta zenei tehetségét kárba veszni és a brassói Liederkanz karmestere lett. Később vándorútra kelt, többször járt Bécsben és Münchenben, ahol a fényképészet mellet, zenei tanulmányait is tökéletesíthette. Hazatérve Szászrégenbe 1895-ben önálló fényképészeti műtermet nyitott. Hamarosan a vidék leghíresebb fényképésze lett, munkái között portrék, képeslapok, esküvői képek, tájképek, vadászjelenetek megörökítése szerepelt. Az utókor számára olyan híres emberek portréit örökítette meg, mint Rudolf trónörökös, Teleki Samu, I. Ferdinánd, II. Károly, I. Mihály. Érdemei elismeréseként 1908-ban királyi fényképész címmel tüntették ki. Fényképészeti tehetségét I. Ferdinánd román király is elismerte amikor Szászrégenbe látogatott 1922-ben. A királyt köszöntő szerenádot is ő vezényelte, ezt követően I. Ferdinánd a következő megjegyzést tette: „Nem is gondoltam, hogy Önmuzikális udvari fényképész”. Tehetségét az 1928-as bukaresti fotókiállításon is bizonyította, amikor a kiállított művészi képeiért aranyérmet nyert. Üzleti elfoglaltságai mellet időt szánt a zeneápolására is, előbb a szászrégeni vonósnégyesnek volt tagja, később a szászrégeni Männergesangverein karnagyává választották. A Szászrégeni Magyar Polgári Dalkör élére 1905-ben került. A város gazdasági, társadalmi és szellemi fejlődésével a 19. század második felében magával vonta a kultúrának a lakosság körében való elterjedését, az oktatás, a színjátszás, a zenélés és a dalolás útján. Az 1883-ban alakult Magyar Polgári Dalkör ezen feladatok jó részét vállalta magára, melyben nagy segítségükre volt a város kiváló fényképésze és karnagya Heiter György. Heiter György élén, a kórus 1912-ben a budapesti országos dalversenyről második díjjal tértek haza, ezt követően három alkalommal is első díjat nyernek, 1928-ban Segesváron, 1931-ben és 1938-ban pedig Kolozsváron. Sikereinek és Heiter György önzetlen munkájának hála, messze vidéken ismerték és nagy becsben tartották a szászrégeni dalkört. A kórus 1984.október 6-án, fennállásának 100. évfordulóján szűnik meg teljesen. A kórustagok megünnepelték a dalkör fennállásának nevezetes évfordulóit. A kórus fennállásának 25. évfordulójára a nagyszabású ünnepség keretén belül avatták fel a kórus zászlóját. A zöld alapú, aranysárga hímzésű zászló egyik oldalán a Szászrégeni Magyar Polgári Dalkör 1884 1909, a másikon “Édes hazánk, kedves dalunk, érted élünk, érted halunk!” felirat olvasható. A zászlót ma a szászrégeni református templomban tekinthetjük meg. 1930-ban annak tiszteletére szerveztek koncertet a kórustagok, hogy Heiter György több mint 25 éve állt a kórus élén. A Maros nevezetű korabeli újságcikk szerint, Heiter György 25 éves karnagyi jubileumának alkalmából, több mint ezer ember gyűlt össze a Szászrégeni Városi Szálloda nagytermében, hogy megünnepeljék a magyar kultúra szolgálatában önzetlenül eltöltött évtizedek munkásságát. Egy pár perces beszélgetés során Heiter György elmondja, hogy: hogy már 12 éves kora óta foglalkozik zenével. Sokat járt Németországban, ahol szintén volt alkalma a zenei életben résztvenni. Szászrégenben 25 év óta él és az első perctől fogva a Magyar Dalárda karnagya. Annak ellenére, hogy szász nemzetiségű, mégis egész erejét és munkakészségét állította oda önzetlenül a cél szolgálatára. Heiter György 1935-ben már több mint 30 éve a Magyar Polgári Dalkör karnagya, zenei vezetője. 30 éves karnagyi jubileumát az előzőhez hasonló hatalmas ünnepség követte. Heiter György több mint 40 évig (1905-1940) volt a Magyar Polgári Dalkőr karnagya, önzetlen tevékenysége és érdemei elismeréséért a Dalszövetség előbb kerületi, majd országos karnaggyá választotta. 1947 március 13-án halt meg, testét a szászrégeni evangélikus temetőben helyezték örök nyugalomra. Szülőházát államosították, napjainkban kaszinót és gyorséttermet működtetnek benne.",
            ro: ""
        },
        lead: {
            de: "György Heiter, eine der berühmtesten Persönlichkeiten der Stadt, wurde am 21. Juni 1871 in Szászrégen geboren.",
            en: "One of the town's most famous personalities, György Heiter was born on 21 June 1871 in Szászrégen",
            fr: "György Heiter, l'une des personnalités les plus célèbres de la ville, est né le 21 juin 1871 à Szászrégen",
            hu: "A város egyik leghíresebb személyisége, Heiter György 1871. június 21-én született Szászrégenben",
            ro: "György Heiter, una dintre cele mai cunoscute personalități ale orașului, s-a născut la 21 iunie 1871 în Szászrégen",
        },
        priority: BigInt("1"),
        published: true,
    },
    {
        first_name: "Joseph",
        last_name: "Haltrich",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_2.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Joseph Haltrich a város híres szülöttje tanár, etnográfus, történész és folklorista, 1822 július 22.-én született Szászrégenben. Egy különleges vonzalmat érzett saját népének történetének a kutatásában, mely végig kísérte egész karrierje során. Elemi osztályait még szülővárosában, a gimnáziumi tanulmányait már Segesváron folytatta, majd felsőfokú végzettségét a távoli Németországi lipcsei és berlini egyetemeken végezte. Ez idő alatt klasszikus német filozófiát történelmi és teológiai előadásokat hallgatott. Vakációját azzal töltötte, hogy bejárta Németország legfőbb kulturális központjait. Németországi tanulmányait befejezve előbb szülővárosába majd Segesvárra tért vissza. A szabadságharc véres leverése után 1849-től, több mint 24-éven át a segesvári evangélikus gimnázium tanára, 1869-72 között a gimnázium rektora, majd egészen haláláig az egyház szolgálatába lépett. 1886-ban hunyt el betegségektől legyengülve. Munkáságának elismerése fényében, 1972-ben róla nevezték el a segesvári gimnáziumot, ahol 24 évig tanított. Haltrich a tanári munka mellett buzgón kutatta ősei, a szászok lakta területeket. Gyűjtötte a különféle verseket, népdalokat, legendákat és népszokásokat. Nagy hatással voltak rá a Grimm testvérek meséi és a német klasszikus romantika. Nagyon gazdag és mélyreható folklorisztikai, etnográfiai és helytörténeti kutatásokat hagyott hátra a jövő nemzedékének. 1856-ban jelent meg első műve, melynek címe: Sächsische Volksmärchen aus Siebenbürgen. Behatóan tanulmányozta a német irodalmat és a nép által beszélt nyelvet, a különböző nyelvjárásokat, főleg a szász szóhasználatot, sajátos kifejezéseket. Fő törekvése volt, hogy az eddig összegyűjtött, de szerinte kiegészítésre szoruló szóanyagot újabb, tervszerű gyűjtésekkel kiegészítse, elgondolását tervezetben dolgozza ki, címe: Plan zu Vorarbeiten für ein Idiotikon der siebenbürgisch-sächsischen Volkssprache. Kronstadt, 1865. Szógyűjteményében több mint másfélszáz, a szász nyelvjárásban használt magyar szavakat is közöl. Megállapítása szerint sok német szó a magyar nyelv közvetítésével került a szászba. Nagy vágya volt, egy erdélyi német nyelvű szótár megjelenítése. Az összegyűjtött folklór anyagokat, élete végén egy kedves ismerősére J. Wolff-re bízta, aki a gyűjteményt 1885-ben Bécsben adta ki, Zur Volkskunde der Siebenbürgen Sachsen címen. Joseph Haltrich szülővárosáról, Szászrégenről sem feledkezett meg, hiszen többször meglátogatta és állandó kapcsolatot tartott fent. Az első olyan személyek között szerepel, akik Szászrégen történetével komolyabban foglalkoztak. Megírta a város történetét Zur Geschichte von Sächsisch-Regen seit den letzten hundert Jahren címmel (1857). Bíró Donát szavaival élve: Haltrich egyike volt a legfelvilágosultabb erdélyi szász tudósoknak.",
            ro: ""
        },
        lead: {
            de: "Joseph Haltrich, ein berühmter Einwohner der Stadt, Lehrer, Ethnograph, Historiker und Volkskundler, wurde am 22. Juli 1822 in Sachsen-Regen geboren.",
            en: "Joseph Haltrich, a famous native of the town, teacher, ethnographer, historian and folklorist, was born in Saxe-Regen on 22 July 1822.",
            fr: "Joseph Haltrich, célèbre natif de la ville, enseignant, ethnographe, historien et folkloriste, est né à Saxe-Regen le 22 juillet 1822.",
            hu: "Joseph Haltrich a város híres szülöttje tanár, etnográfus, történész és folklorista, 1822 július 22.-én született Szászrégenben.",
            ro: "Joseph Haltrich, un renumit locuitor al orașului, profesor, etnograf, istoric și folclorist, s-a născut în Saxe-Regen la 22 iulie 1822.",
        },
        priority: BigInt("2"),
        published: true,
    },
    {
        first_name: "István",
        last_name: "Kohl",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_3.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Kohl István ornitológus, muzeológus és preparátor, 1922. július 30-án született Szászrégenben. Iskolai tanulmányait a német nyelvű elemi iskolában és a gimnáziumban végezte. A gimnázium után a közeli Marosvásárhelyre került, ahol kitanulta a szűcsmesterséget, hazatérve édesapja műhelyében megtanulta a preparálást, melyet a Focșani Vadászmúzeumban kamatoztatott, itt rövid ideig dolgozott. Szülővárosába hazatérve laboráns, előbb a tanítóképzőben, majd a 2-es számú líceumban. Ebben a líceumban valósította meg a híres és hatalmas állattani szertárát. A madár és emlősgyűjtemény szertára mintegy 2300 preparált madár, 3600 részleges madárcsontváz, 164 emlős és kb. 1000 emlőskoponyát tartalmaz. A múzeum hozzájárul a természetrajz oktatás kibővítéséhez és felkelti a diákok figyelmét a természet iránt. A múzeum a Lucian Blaga Technológiai Líceum udvarán található, a nyilvánosság elött sajnos zárva. Élete során több napló, 123 tudományos dolgozat és két könyv: Erdély madarai, III. kötet és A kárpáti barnamedvéről társszerzője. Tagja volt a Romániai Ornitológiai Társaságnak a Drezdai Szász Ornitológiai Társaságnak, valamint rendes megfigyelője volt a Magyar Madártani Intézetnek. Számos hazai és külföldi madártani tudományos tanácskozásokon vett részt. Kohl István nem csak természettel, hanem zenével is foglalkozott. Évtizedekig aktív résztvevője volt a város zenei életének. 1945-ben fúvós zenekart szervezett, valamint tíz évig zenét tanított a zeneiskolában, és tagja volt a 2-es számú középiskola egykori szimfonikus zenekarának. Mint ember erkölcsileg helyénvaló, mindenki „Pista” bácsija, boldog családi életet élő, szerény, segítőkész, lelkiismeretes ember volt. Barátai körében nagy megbecsülésnek örvendett. Nyugodt és sikeres élete 1998. március 24-én ért véget. Sárkány-Kiss Endre szavait idézve: 1998. március 27-én sokan elkísérték utolsó útjára, ott volt Szászrégen apraja-nagyja, hiszen Kohl István nem mindennapi polgára volt a kisvárosnak. Ő egyszemélyes intézmény volt Szászrégenben, de odasereglettünk Erdély minden sarkából, hiszen lehet, hogy Erdély utolsó autodidakta tudósát temettük. Kohl István munkájával és emberi magatartásával méltán érdemelte ki a post mortem a város díszpolgára címet.",
            ro: ""
        },
        lead: {
            de: "István Kohl, Ornithologe, Museologe und Tierpräparator, wurde am 30. Juli 1922 in Szászrégen geboren.",
            en: "István Kohl, ornithologist, museologist and taxidermist, was born in Szászrégen on 30 July 1922.",
            fr: "István Kohl, ornithologue, muséologue et taxidermiste, est né à Szászrégen le 30 juillet 1922.",
            hu: "Kohl István ornitológus, muzeológus és preparátor, 1922. július 30-án született Szászrégenben.",
            ro: "István Kohl, ornitolog, muzeolog și taxidermist, s-a născut la Szászrégen la 30 iulie 1922.",
        },
        priority: BigInt("3"),
        published: true,
    },
    {
        first_name: "Ferenc",
        last_name: "Koós",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_4.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Cselekvő fia volt korának, a nép felemelkedésén munkálkodó pedagógus, a bukaresti magyarság első irányító szelleme. Társadalmi és közművelődési szervező munkája egymagában is megérdemelné figyelmünket. Koós Ferenc mindezen felül író volt, meleg szívű, igazmondó, az egész népben gondolkodó, eleven tollú, az erdélyi emlékírók legjobb hagyományait folytató krónikás. Pórfiúból lett hazafi, szolgadiákból tanfelügyelő, Bem katonája 48-ban, a bukaresti magyarság múlt századi nagy emberem az első igazán jeles magyar értelmiségi, aki másfél évtizedig apostolkodott a román fővárosban, kultúregyesületek szervezője, a román-magyar megértés hirdetője, munkása. Egy sokat emlegetett, de keveset olvasott emlékirat szerzője. – Beke György jellemzése szerint. Koós Ferenc 1828 október 18-án született egy magyarrégeni jobbágycsaládban. Gyermekkorának élményeit a jobbágyi munka, a pásztorélet, a Maroson való tutajozás, a falusi népszokások, a húsvéti locsolkodás, karácsonyi kántálás határozták meg. A jobbágysorból való felemelkedés egyetlen lehetősége a tanulás volt. Viszont a lehetőséget a kitöréshez Hegyessy Zsigmond-nak köszönheti, aki felfigyelt rá és szolga diákká fogadta a Marosvásárhelyi kollégiumba. 1840-1848-ig volt szolgadiák, ugyanis a szabadságharc kitörése után nemzetőr majd Kossuth-huszár lett. Egy ideig Bem tábornok seregében is harcolt. A szabadságharc vérbefojtása után befejezte kollégiumi tanulmányait és 1855-ben Bukarestbe kerül, mint református lelkész, itt több mint másfél évtizedet töltött. Ez idő alatt úttörő jelentőségű tetteket hajtott végre. Feladatai közé tartozott a lelkészi teendők mellet a román lakta vidékeken, Moldva és Havasalföldön élő református hívek lelki gondozása és a bukaresti magyar nyelvű református elemi iskolában való tanítás. Végigjárta a csángó falvakat, és az egyházkerület, a falvak, a lélekszám s a használt egyházi nyelv szerint kimutatásokat készített róluk. Neki köszönhetően jött létre az első magyar művelődési ház Bukarestben a Hunnia, valamint ennek támogatásával, létrehozta az első romániai magyar újságot a Bukaresti Magyar Közlöny-t. A bukaresti magyar értelmiségiek közül ő foglalkozott először a havasalföldi magyarok betelepülésének történetével is. A román fővárosban folytatott munkássága révén, őt tartják az ott élő magyarok társadalmi és művelődési életének létrehozójaként. Miután visszatér Erdélybe, 1870-ben a dévai tanítóképzőben kapott tanári majd igazgatói állást. 1873-ban áthelyezik Beszterce-Naszód megyébe, ahol királyi tanfelügyelő lett. Kiemelendő az 1876-78 közötti tevékenysége, amikor is tehetséges és okos gyerekek taníttatását szervezte meg a Marosvásárhelyi Kollégiumban. 1878-ban tanfelügyelőként nevezték ki Brassóba. Feladatát komolyan vette és szigorúan vette az oktatást, a helyes és megfelelő tanítás szellemében. Megvetette azokat a tanárokat, akik testi fenyítéssel próbálták oktatni a gyerekeket. Modern pedagógiai elveket vallott, szerinte az ifjúságot a hasznos és okos tanulmányokra kell oktatni, az oktatáson könnyíteni kell és meg kell kedveltetni a diákokkal. 1883-ban munkásságának elismeréseként „királyi tanácsos” címet kapott. Koós Ferencet 1890-ben nyugdíjazzák és 1905-ig, haláláig Brassóban marad. Nyugdíjazásának évében jelent meg legfontosabb műve az „Életem és emlékeim” című kétkötetes önéletrajzi leírás, amely nagyon fontos információkat őrzőt meg Szászrégenről, valamint megírta Apáczai Csere János 17. századi pedagógus életrajzát. Munkássága ideje alatt több ezer cikket, tudósítást, napi jegyzetet írt, cigány és román népmeséket, olasz elbeszéléseket fordított. Élete során, 37 magyar nyelvű lapnak volt a munkatársa. Munkásságának elismerése tiszteletéül, Koós Ferenc emléktáblát állítottak szülőháza falára.",
            ro: ""
        },
        lead: {
            de: "Er war ein aktiver Sohn seiner Zeit, ein Lehrer, der sich für die Verbesserung des Volkes einsetzte, der erste führende Geist der ungarischen Gemeinschaft in Bukarest.",
            en: "He was an active son of his time, a teacher working for the uplift of the people, the first guiding spirit of the Hungarian community in Bucharest.",
            fr: "Il a été un fils actif de son temps, un enseignant travaillant à l'élévation du peuple, le premier esprit directeur de la communauté hongroise de Bucarest.",
            hu: "Cselekvő fia volt korának, a nép felemelkedésén munkálkodó pedagógus, a bukaresti magyarság első irányító szelleme.",
            ro: "A fost un fiu activ al timpului său, un profesor care a lucrat pentru ridicarea poporului, primul spirit călăuzitor al comunității maghiare din București.",
        },
        priority: BigInt("4"),
        published: true,
    },
    {
        first_name: "Petru",
        last_name: "Maior",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_5.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Szászrégen egyik legkiemelkedőbb alakjai közé soroljuk a lelkész, filozófus, tanár és író Petru Maiort, az Erdélyi Iskola jeles képviselőjét, aki több mint 24 éven át fejtette ki tevékenységét a városban a román kisebbség emancipációját támogatva.Esperes fiaként, 1754-ben született Marosvásárhelyen. Tanulmányait 1769-1772-ig előbb szülővárosában, majd Balázsfalván folytatta 1774-ig. Édesapja kapcsolatainak köszönhetően, a fogarasi püspök jóvoltából 1774-1779 között Romába utazik, ahol filozófiát és teológiát tanul, ezt követően 1 évig, 1980-ig a Bécsi Egyetemen tanul. Tanulmányait befejezve Balázsfalvára tér vissza, ahol 4 éven keresztül 1780 és 1784 között középiskolában teológiaiát és logikát tanít. Ioan Bob püspökkel való nézeteltérése miatt Balázsfalvát elhagyta és Szászrégenbe telepedett le, itt a magyarrégeni görögkatolikus román közösség lelkésze és Görgényszentimre esperese címet töltötte be több mint 24 évig, 1809-ig. Ezután Budapestre költözött, ahol revizori és cenzori állást töltött be a királyi nyomdában egészen haláláig, 1821-ig. A budapesti románok létrehozták a Petru Maior nevezetű olvasókört, mely egészen 1914-ig, az első világháború kitöréséig működött. Szászrégenben folytatott tevékenysége során a román kisebbség elnyomása ellen és jogaik érvényesítése érdekében tevékenykedett. Tanárként nagy gondot fordított a román nyelvű oktatás minőségére. Lelkészként a tömegek erkölcsi nevelésében gyakorolt jártassága ismeretében, egyházi szónoklataival hatást tudott gyakorolni az emberekre. Felfogása szerint a nemzeti elnyomás idején az egyháznak a szellemi élet központjaként olyan fórummá kell válnia, ahol politikai szervezkedések is lehetségesek. Petru Maior rengeteg történelmi, filozófiai és egyházi munkát publikált, melyekkel hozzájárult a románok nemzeti tudatának kialakulásához, fejlődéséhez és megerősítéséhez. Legjelentősebb munkái közül kiemelném A románok eredetéről Dáciában-1812, valamint A románok egyházának történetéről-1813.",
            ro: ""
        },
        lead: {
            de: "Eine der bekanntesten Persönlichkeiten in Sasru war der Pfarrer, Philosoph, Lehrer und Schriftsteller Petru Maior, ein prominenter Vertreter der Siebenbürgischen Schule, der sich mehr als 24 Jahre lang in der Stadt für die Emanzipation der rumänischen Minderheit einsetzte.",
            en: "One of the most prominent figures in Sasru was the pastor, philosopher, teacher and writer Petru Maior, a prominent representative of the Transylvanian School, who worked for more than 24 years in the city to promote the emancipation of the Romanian minority.",
            fr: "L'une des figures les plus marquantes de Sasru a été le pasteur, philosophe, enseignant et écrivain Petru Maior, un représentant éminent de l'école transylvanienne, qui a travaillé pendant plus de 24 ans dans la ville pour promouvoir l'émancipation de la minorité roumaine.",
            hu: "Szászrégen egyik legkiemelkedőbb alakjai közé soroljuk a lelkész, filozófus, tanár és író Petru Maiort, az Erdélyi Iskola jeles képviselőjét, aki több mint 24 éven át fejtette ki tevékenységét a városban a román kisebbség emancipációját támogatva.",
            ro: "Una dintre cele mai proeminente figuri din Sasru a fost pastorul, filosoful, profesorul și scriitorul Petru Maior, un reprezentant de seamă al Școlii Transilvane, care a lucrat timp de peste 24 de ani în oraș pentru a promova emanciparea minorității românești.",
        },
        priority: BigInt("5"),
        published: true,
    }
];

const buildingDataList = [{
    name: "Anton Badea Néprajzi Múzeum",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_6.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "Az Anton Badea által 1960-ban alapított néprajzi múzeum legfőképp a Felső-Marosmente, a Kelemen-havasok előkárpátok része és az Erdélyi Mezőség román népi kultúra örökségét mutatjabe. A múzeum eleinte 64 népviseleti tárgyat tartalmazott, a kutatói munka 1966-ban indult be igazán, ennek eredményeképp napjainkban több mint 7000 tárgyat és 27 000 fényképet tartalmaz. A múzeum első állandó kiállítása 1966-ban nyílt meg a Görgény völgyi népművészetről. 1972-1991 között a tárlat anyagát kibővítették a Felső-Marosmente és a Mezőség völgyéből származó népviselettel és népművészeti tárgyakkal, szerszámokkal. 2011-ben politikai nyomásra a múzeum a környékbeli magyar népművészet tárgyait is elkezdte bemutatni.  A múzeum rendelkezik egy szabadtéri részleggel is, ahol 14 épület egy-egy településnek megfelelő hagyományos népi eszközökkel van berendezve.  Ezek közül megemlíteném a fatemplomot, az istállót csűrrel, a malmot és néhány présházat. A múzeum székhelyének otthont adó épület, egy régi erdélyi nemesi família, a Borbereki Farkas család tulajdonában állott. A 19. század végén a család Szászrégen és környékének legnagyobb birtokosai voltak. A dokumentumok szerint 1493-ban Farkas Tamás a székelyek alispánja volt. Farkas Mihály dedrádi és széplaki birtokos pedig az 1848-49-es szabadságharc lelkes résztvevője. Farkas Mihály egyik unokája, Farkas Gyula nagybirtokos volt Magyarrégenben, valószínűleg a kúriát is ő építhette 1892-ben. Másik unokája Albert, Maros Torda vármegye alispánja volt, kinek a magyarrégeni temetőben igen impozáns sírhelye van. A család házasság kapcsán rokoni kapcsolatban áll az Éltető családdal.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "A múzeum hétköznap 8-tól 18-ig fogadja vendégeit.",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "Strada Vînătorilor 51, Reghin 545300",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "Telefonszám: 0265 512 571",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("1"),
    published: true,
},
{
    name: "Az Éltető Udvarház",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_7.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "Ha Maroshévíz irányából közelitjük meg Szászrégent, akkor mindjárt az első körforgalmat elhagyva, az út bal oldalán megtekinthetjük a nevezetes, a 19. század második felének városi gazdaságában fontos szerepet betöltő Éltető család udvarházát. A családhoz köthető ugyanis szászrégeni tutajkereskedelem felvirágzása. A 19. században a Maros és a Görgény folyón való tutajozás egyre nagyobb jelentőség kapott. A Maros folyón való tutajozásban két kisváros Szászrégen és Lippa játszott kulcsfontosságú szerepet. A faáruk áruba bocsátása Régennél kezdődött a folyó felső szakaszán, és Lippánál ért véget a folyó alsó szakaszán. 1853-ban a szászrégeni a tutajozásban érdekeltek egy tutajozási társaságot alapítottak, egy évvel később már több lippai kereskedő is csatlakozott a társasághoz. A szászrégeniek vállalták a fa beszerzését és a szállítást, míg a lippaiak a fa értékesítését, eladását vállalták. A tutajozás nagy tömegeket mozgatott meg, a városban rengeteg embernek jelentett munkát mivel elég nagy jövedelmet eredményezett, viszont gyakoriak voltak a balesetek, sokan reumatikusak lettek, és a tüdővész is számos áldozatot szedett akkoriban. A Maroson kizárólag tavasszal, hóolvadás után és ősszel lehetett szállítani a fát, mikor vízállás magas volt, de még így is fennált a veszélye annak, hogy sziklába futnak, a fennakadt tutajra pedig nagy eséllyel ráfutott a többi, amely sokszor halálos áldozatokat is követelt.  A városban elsőként Éltető Dániel bonyolította le a tutajkereskedelmet, valamint hozzá köthető az első fűrészüzem alapítása. A mesterséget Dániel fia, József folytatta. Miután József meghalt a családi vállalkozást felesége a „Mumu” -nak nevezett Váradi Csukát Karolina vette át, aki megalapozta a család vagyonát. A család feltűnik Wass Albert: A funtineli boszorkány harmadik kötetében (193-196 old.) A sorokban Éltető urat a vasút felvezetése hatalmas lelki megrázkódtatással sújtja, mivel félt a budapesti és szászrégeni versenytársaktól. Mumu, azaz Váradi Karolina, Kemény János: Viziboszorkány című regényének a főszereplője volt. Kelemen Lajos így ír róla: „Ő indította a hosszú tutajszállítmányokat a Maroson messzire, néha Szegedig, s más rendeltetésű helyekre. Embereit messziről ismerte, s azok jobban tartottak tőle, mint a család férfitagjaitól. Mumunak nevezte mindenki. A család vagyonának összeszerzésében neki volt a legtöbb munkája és érdeme.” A Víziboszorkány síremléke a Magyarrégeni református temető bal oldali parcellájában tekinthető meg.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("2"),
    published: true,
},
{
    name: "Címeres kút",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_8.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A központ egy másik ígéretes látnivalója a Só utca végén található Címeres kút, amely Szászrégen három különböző korból származó címerét mutatja be. A kút bal oldalán megpillanthatjuk feltételezhetőleg a város első címerét 1428-ból. Egy tárcsapajzs alakú címerről beszélünk, melyet a pajzson átvonuló harántpolya osztja két mezőre, a heraldikai bal felső sarokban egy hatágú csillagot, míg a heraldikai jobb alsó sarokban egy Anjou liliomot pillanthatunk meg. A harántpolyán pedig az O.P.R. felírat olvasható, jelentésük feltételezhetően Oppidum Privilegiatum Regun, amely a város mezővárosi rangjára utal. A címert az evangélikus templom sekrestye ajtaja fölött is megtaláljuk. A kút közepén a város 1848-as címerének egyszerűsített változatát figyelhetjük meg, amely valószínűleg egy középkori hírvivőt ábrázol. Jobb oldali címer 1934-ből való, a csatapajzs formájú címeren belül egy kalapos tutajozót láthatunk, a hullámok pedig valószínűleg a Maros vizét ábrázolják. A 20. század elején a Maroson való tutajozás igen elterjedt volt a városban, valószínűleg azért kerülhetett bele ez a szimbólum. A címerpajzsot három bástya koronázza meg. A 15. századból származó címerrel kapcsolatban akadnak némi nézeteltérések, ugyanis Schmidt Imre történész szerint, aki mellesleg a város polgármestere volt 1940-44 között, a címert a város sohasem használta. Állítása szerint a tárcsapajzsot a reneszánsz korában kezdték el használni, ezért nem származhat korábbi időkből. Valamint az sem bizonyos, hogy a pólyán szereplő betűk a címerrel egykorúak lennének, mivel a kor heraldika ízlése üres pólyát követelt. A betűknek a polyákon való alkalmazása csupán a 17. század második felétől kezd divatba jönni.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("3"),
    published: true,
},
{
    name: "DIO-Ház",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_9.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A DIO Ház a szászrégeni magyarság közművelődési, kulturális és egyházi funkciót betöltő épület. A létesítményt Makovecz Imre híres építész tervezte, viszont a kivitelezést dr. Müller Csaba építész-mérnöknek köszönhetjük, az építkezések 1996-2002 között zajlottak. A DIÓ Ház egyik különlegessége, hogy sem méretileg sem pedig formailag nincsen a több mint 40 nyílászáró között két egyforma ablak, ajtó. Az épület igen egyedi stílussal rendelkezik, a fedélszerkezete egyik felén domború, a másik felén homorú, az épületnek nincs olyan helysége, amely csupán négyzet, téglalap vagy kör formájú lenne, mindig más és más formát ölt, mindegyik valamilyen irányba nyúlik, keskenyedik vagy szélesedik. Az épület egyházi tulajdonú ezért nevét is eszerint választották. A DIO az épület lelkiségére utal, amely a latinban és a spanyolban Istennel azonosítható. A DIO név betűi külön külön kifejezik azt a feladatkört melyet a Ház betölt. A D betű a szociális szolgálatot fejezi ki, az I betű az ifjúságot, amely az épület ifjúság iránti irányultságát fejezi ki. Az O betű pedig az oktatás, vagyis azt a rengeteg előadást, kulturális és egyházi rendezvényt és művelődési programot tartalmazza. A Ház egy 24 személyt működtető vendégfogadóval is rendelkezik, melynek bevételéből tudják rendszeresen karbantartani az épületet.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("4"),
    published: true,
},
{
    name: "Hajdani Járásbíróság",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_10.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A főtér egyik legimpozánsabb épülete az Alexandru Ceuşianu általános iskolának ad otthont. Az épületet körülbelül az 1870-es években emelhették klasszicista stílusban, mely akkoriban a Magyar Király Járásbíróság székhelye volt. A kommunista hatalomátvétel után az épület továbbra is az Igazságügyi Minisztériumé volt. 1948-ban a Marosvásárhelyi Magyar Tanítóképzőt Szászrégenbe helyezték, politikai okok függvényében először az evangélikus templom mellett lévő szász iskolába. 1949-ben a Tanítóképzőnek sikerült kibérelnie a Járásbíróság épületet a hozzátartozó börtönépülettel együtt, egészen 1956-ig. Ebben az iskolában olyan jeles emberek tanultak, mint Kovács András és Demény Lajos, a Magyar Tudományos Akadémia Külső tagjai. Az iskolaépület amellett, hogy gyönyörű klasszicista stílusjegyeket visel, egy freskóról is nevezetes. Az épület belsejében egy bekötött szemű, egyik karjában pallost, másikban mérleget tartó Justitiát az igazságot megszemélyesítő római istennőt ábrázoló freskóra bukkanunk, amely a hajdani Járásbíróság emlékét idézi. Az épület további meglepetést tartogat számunkra, ugyanis az utolsó felújításkor az előcsarnok oszlopfőin az Árpád-házi királyok arcképei kerültek elő. Sajnos a felújítás végeztével újra a mész alá kerültek. A városnak még számos értékes régi iskolaépülete van melyek hű képet vetítenek a város hajdani építészeti gazdagságára. Ezek közül megemlíteném a jelenlegi Augustin Maior egy emeletes, impozáns, neoklasszikus épületjét a Școlii utcában, melyet a szászok építettek 1894-ben. Ebben az épületben 1944-ig működött német nyelvű oktatás.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("5"),
    published: true,
},
{
    name: "Hegedűk Piramisa",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_11.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A Hegedűk Piramisa emlékmű a szászrégeni hegedűgyártás fél évszázados fennállásának alkalmából készítette Barothi Ádám szobrászművész, 2001-ben. A szobrász szerint a szobor a hangszergyártás mellett, a város történelmi múltját is szimbolizálja. A 7 és fél méteres szobor 3 hegedűt ábrázol, a hegedűk 3 utca felé fordulnak. Az evangélikus templom felé forduló hegedűbe, a művész az 1330-as Anjou Robert által adományozott címert is belevéste, amely a templomban is megtalálható. A hangszergyártás terén a város nagy sikereket ért el az 1950-60-as évektől működő Gliga és Hora hangszergyáraknak köszönhetően. Az itt gyártott hangszerek sikerének titka az ügyes mesteremberek alapos és odaadó munkája mellet, a vidéken termő juhar és lucfenyőnek köszönhető. A hegedűk a tengeren túlra is eljutottak, ahol számos híres hegedűs megszólaltatta. A Gliga hangszergyárat meglátogatva lehetőség nyílik a hangszer készítés folyamatába betekintést nyerni. Az itt gyártott különleges hegedűknek és a felállított szobornak hála napjainkra Szászrégen méltán kiérdemelte a Hegedűk Városa címet.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("6"),
    published: true,
},
{
    name: "Huszár kastély",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_12.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A városhoz 1956-ban hozzácsatolt Abafáján található a Huszár család kastélya, melynek napjainkban csupán a csupasz falai köszönnek vissza. Viszont a kastély nagyon gazdag történelmi múlttal rendelkezik, ha tehetnék falai mesélni tudnának. A klasszicista stílusban épült kastély egy ideig még Abafáji Gyulay Pál fejedelmi titkár és tanácsos birtokában is volt. Továbbá olyan nevezetes személyiségek fordultak meg benne, mint Mikes Kelemen, itt vendégeskedett 1901-ben Habsburg Károly főherceg, többször megfordult Wass Albert és Kemény János, valamint a kastélyban házitanító volt Dsida Jenő. Itt született 1912-ben báró kövesdi Húszár József, az 1956-os forradalom és szabadságharc résztvevője. A kastély építésének évéről nincs pontos adatunk. Egy helyen még megmaradt az épület kazettás famennyezete, amely a kastély hajdani fényűzését idézi. A dokumentumok szerint a kastély nagyon gazdagon és ízlésesen volt berendezve. A belső tereket német reneszánsz, barokk és klasszicista stílusú bútorok, értékes népművészeti tárgyak és festmények díszítették. A kastélynak 32 szobája volt, az emeleten volt a könyvtár, a nagy szalon, a kápolna az ebédlő és a vendégszobák, a földszinten pedig a családtagok és a nevelők szobái, valamint a komornyik családjának a szobája. A kastély továbbá rendelkezett egy csodálatos 30 holdas angol parkkal, benne három halastóval melynek hattyúi és kisebb szigetecskéi voltak. Továbbá mesterségesen kialakított barlanggal, szökőkúttal és szobrokkal is rendelkezett a park. A kastély sorsát az államosítás pecsételte meg, egy ideig intézet működött benne, majd elhagyták és már nagyon hosszú ideje üresen áll. Az épület az idő martalékává vált, állapota napról napra romlik, míg végül teljesen eltűnik. A kastély szomorú példája annak, milyen következményekkel járhat az emberi nemtörődömség és hanyagság.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("7"),
    published: true,
},
{
    name: "Szászrégen Központja",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_13.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "Szászrégen korabeli arculata hasonló volt a többi középkori erdélyi városéhoz. Épületei fából és vályogból készültek és szalmával fedték be, kizárólag a fontos épületek készültek köböl, ezekből pedig kevés akadt. Utcái szűkek, kacskaringósak és piszkosak voltak. Az 1848-as nagy tűzvészkor a város háromnegyedrésze leégett, ezután kerültek megépítésre a ma is látható, a korban modernnek számító gyönyörű neobarokk, neoklasszikus és szecessziós épületei. Hankó Vilmos 1896-ban megjelent Székelyföld című munkájában így írja le a várost: Szászrégen mintegy hatezer lakost számláló kis város a Maros jobb partján, egy lombos fáktól, gyümölcsösöktől zöldellő, párját ritkító szép nagy piactere, körülültetve hatalmas házakkal, palotákkal, nagyvárosi szabású vendéglői, szép kövezett utcái, pompás sétatere kellemesen lepik meg az átutazó idegent.  A 20. század közepén a központi piacteret felszámolták és ekkor hozták létre a ma is létező parkot. Új tömbháznegyedeket alakítottak ki melyek azonban nincsenek összefüggésben a város régi arculatával. Napjainkban az un. történelmi központot egy 30 perces sétával körbe is lehet járni. A város legfigyelemreméltóbb, legimpozánsabb épületei közé az iskolaépületek, templomok és néhány közigazgatási épület tartozik. A központi parkot 2024-ben újították fel Márk Endre polgármester mandátuma alatt.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("8"),
    published: true,
},
{
    name: "Városi szálloda és Bálház",
    image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_14.png",
    description: {
        de: "",
        en: "",
        fr: "",
        hu: "A központ egy másik impozáns és nevezetes épülete a hajdani városi szálloda, amely jelenleg a Banca Românească szászrégeni székhelyének ad otthont a földszinten. A hajdani kétszintes szálloda messze a vidék legmagasabb épületjének számított Marosvásárhelyt is beleszámítva. Az épületet 1862-ben építette a város, a bécsi udvartól felvett 200.000 arany forint kölcsönből. A korban modernek számító 23 emeleti szobával, földszinti cukrászdával, vendéglővel, kocsmával, valamint egy tél és egy nyári kerttel rendelkező szálloda, messze környékről bevonzotta az emberek érdeklődését. A cukrászda az 1970-es években még működött, a két emelet szobái napjainkban üresen állnak. Az épület mellékszárnyát képezte a Bálház, (ma könyvtár és kultúrotthon), ahol színjátszó és tánc előadásokat, valamint hangversenyeket rendeztek. Az épület érdekessége, hogy egy hasonló előadás alkalmával, mikor a marosvásárhelyi írók vendégszerepeltek 1925-ben, Berde Máriában itt fogalmazódott meg egy saját írói közösség alapításának az ötlete, melyet sikerült a fiatal és tettre kész, mindössze 22 éves báró Kemény János fejében elültetnie. 1926-ban Kemény János felkarolásával megalapították az Erdélyi Helikon íróközösséget, amely később a legnagyobb erdélyi íróközösségé alakult. Ennek emlékére 2000. szept.23-án egy emlékplakettet helyeztek el Kemény János emlékére. A báró, mecénás és író, a helikonisták marosvécsi házigazdája tiszteletére elhelyezett plakettet Barothi Ádám szászrégeni szobrászművész készítette.",
        ro: ""
    },
    open_hours: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    address: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    contact_info: {
        de: "",
        en: "",
        fr: "",
        hu: "",
        ro: ""
    },
    is_visitable: true,
    priority: BigInt("9"),
    published: true,
}];

const churchDataList = [
    {
        name: "Az Abafáji Árpád-kori templom",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_15.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Szászrégen legrégibb, eredeti formában fennmaradt épülete az abafájai római katolikus templom. A szent kereszt tiszteletére szentelt templom a város második legrégibb műemlék temploma, melynek építését a kolozsmonostori apátság rendelte el, az épület félköríves szentélye és a hajó szentély felé eső része románkori.  A templom hajóját a 14. században meghosszabbították, ekkor épült a ma is álló tornya. A templom nyugati ajtaja és a szentségfülke egyenes záródású, gyámos megoldása késő gótikus elemekre emlékeztet, ezek a 15.-16. századból valók. A falu és a templom a kolozsmonostori apátság birtoka volt, a sok pereskedés után a nagybirtokos katolikusoké lesz. A Húszár család nagymértékben hozzájárult a templom neobarokk stílusú berendezéséhez, a család címerei a szószéken és a főoltáron figyelhetők meg. A templomon 1930-ban nagyobb javításokat végeztek, ekkor kapta jelenlegi fedelét.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("1"),
        published: true,
    },
    {
        name: "Kakasos templom",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_16.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "A szászrégeni református templom közismertebb nevén, a Kakasos templom 1890-ben épült Alpár Ignác tervei alapján. A templom művészettörténetileg legértékesebb része a szószék és koronája, valamint a bútorzat, a presbiteri és papi székek. A szószék alapjait fehér terméskőből készítette egy magyarvistai kőfaragó, Szallós András. A szószék faanyagát egy régeni asztalos, Kiss Ferenc alkotta. A templom talán egyik legfigyelemre méltóbb, műérték jellegű dísze Molnár Dénes képzőművész által festett 180 templomkazetta. A kazetták a templom különböző részein vannak elhelyezve. 100 darab kazetta a karzat alján, más részük 24-24 darab a templomhajó hosszanti irányában, míg a többi 32 kazetta a pitvar mennyezetén található. A kazetták egy részét a művész 1988-89 között festette, hogy megörökítse a falurombolás veszélyének kitett néhány erdélyi templomot. A karzat alján lévő 48 kazetta a millecentenárium és a III. – Magyar Református Világtalálkozó emlékére készült. A kazetták közül 24 a hazai római katolikus, ortodox és evangélikus templomokat ábrázolja, a többi kazetta egyes svájci, magyarországi, német és holland testvérgyülekezetek templomait ábrázolja. A pitvarban lévő 32 kazetta pedig keresztény szimbólumokat ábrázol.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("2"),
        published: true,
    },
    {
        name: "Magyar-régeni református templom",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_17.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "A város nem műemlék jellegű templomai közül a magyarrégeni református templom a régebbi. A római castrum helyére épült, középkori templomról az a monda kering, hogy a gótok idejében épült. Ebből valószínűleg annyi igaz, hogy gótikus stílusban építették, melynek napjainkban a sorozatos átalakítások miatt nyoma sem maradt.  Az Árpád korban épült templom az 1848-as gyújtogatások áldozata, újjáépítését 1854-ben fejezik be, ekkor lebontják középkori tornyát. A templomot az 1910-1911 években gyökeresen átépítik és kibővítik, ekkortól való jelenlegi tornya is. Tudjuk, hogy eredetileg egyhajós, egyenes szentély záródású épület volt. A templom még az Árpád korban épült. Ezt tanúsítja az 1939-es javításokkor előkerült az eredeti kétrészben mész és egyharmadában kavics ősi templom falait. A részben megmaradt eredeti déli fal vakolatán pedig az egykorú festett felszentelési keresztre bukkantak, amely ma is látható. Ennek alapján fogalmazta meg az akkori lelkész, hogy a templom a marosfelfalusi és a körtvélyfáji templomokkal egyidőben épültek az Árpád korban, melyet püspök szentelt fel.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("3"),
        published: true,
    }, {
        name: "Petru Maior fatemploma",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_19.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Egyes feltételezések szerint 1725-ben míg mások szerint 1744-ben, esetleg 1776-ban épült, viszont annyi bizonyos, hogy a Petru Maior templomaként ismert épület a város egyik legrégibb műemlék jellegű temploma, a románok legfontosabb műemléke. Ha minden igaz és hihetünk a dokumentumoknak akkor 1744-ben épülhetett. A Mihály és Gábriel arkangyal tiszteletére szentelt templom méreteiben szerény, 15m hosszú és 14m magas templomocska több szempontból is figyelemre méltó. Az épület sajátossága, hogy míg a vidéken a hajós alaprajzú kivitelezés az elterjedt, a fatemplom kereszt alakú, ez egész Erdélyben egyedinek számít, ugyanis ez a megoldás a moldvai fatemplomokra jellemző. A fatemplomhoz két legenda is kötődik, amely választ kínál moldvai jellegzeteségére. Az egyik monda szerint, a szászrégeni vásárok alkalmával többször megforduló gazdag makedón kereskedők észrevették, hogy a város román lakosságának nincs egyházi épülete, ahol áldást mondjanak ünnepeik alkalmával. A makedón kereskedők megszánva őket útra keltek, és Moldvából hozattak templomot a románoknak. Egy másik szóbeszéd szerint az akkori román lakosság a makedón építészek segítségével építették meg a templomot és ezért lett kereszt alakú. A templom falait vakolatlan fenyőgerendák képezik, fedele zsindellyel borított. Belső tere gazdagon díszitett, főleg a hatszög alakú oltár szárnyainak ikonjai és festményei a legértékesebbek, melyek 1789 körüliek lehetnek. Az apszisban számos Bibliai személy ikonjai szerepeltek, ezek közül kiemelném a templom két védőszentjének Mihály és Gábriel arkangyal, valamint Mária és Szent Miklós ikonjait melyek valószínűleg 1857-ben készültek. Megjegyzendő, hogy a román művelődéstörténet és az Erdélyi Iskola jeles képviselője, Petru Maior itt kezdte lelkészi tevékenységét 1784-1809 között. Szobrát a templomhoz vezető temető bejárati kapujának jobb oldalán láthatjuk. Az ő gondoskodásának köszönhetően 1791-ben a templom egy tornáccal és egy haranglábbal bővült. Az ortodox fatemplom az évszázadok során több kisebb-nagyobb átépítésen ment keresztül, hogy elnyerje mai külsejét. Az államosítást követően az épület 1948-tól több mint 40 éven keresztül, egészen 1985-ig elhagyatott volt.  Napjainkban a fatemplom sokat köszönhet Daniel Ciolocoiu-nak, aki a templom lelkészeként számos intézkedést tett az épület megmentése érdekében. Napjainkban a templom legértékesebb festményeit a Maros Megyei Múzeumban őrzik.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("4"),
        published: true,
    },
    {
        name: "Római katolikus templom",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_19.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "A város romai katolikus közösségének csak 1736-ban épült temploma, melynek építését Mária Terézia királynő rendelte el. A hivatalos pecsét szerint a templom építését 1736-ban kezdték el, tőke hiányában mindössze 1781-re fejezték be. A templom egyhajós, téglalap alakú és késő barokk stílusban építették. A templombelső falait gondosan kidolgozott freskók díszítik. A boltozaton Miatyánk kéréseit ábrázoló freskókat 1968-ban készítették. A főoltár neobarokk stílusban épült, melyen a szeplőtelen fogantatást ábrázoló kép látható, tőle jobbra Szent Pál, balra Szent Péter szobra áll. Megjegyzendő a templom egyediségét tükröző színes üvegablakai, melyek nemzetünk jeles személyiségeit, királyait és szentjeit ábrázolják. Egy másik érdekesség a templomkert, itt egy szoborparkot alakítottak ki. Az első szobor Erdély nagy püspökét, Márton Áront ábrázolja, megjegyzendő, hogy állításakor ez volt az első egészalakos kültéri szobor melyet róla állítottak. A szoborparkban továbbá megtaláljuk Petőfi Sándor mellszobrát, Boldog Gizella királynő és Szent István 2000-ben felavatott szobrát. 2003-ban adták át II. Rákóczi Ferenc nagyságos fejedelem és hűséges szolgájának Mikes Kelemen mellszobrát. Valamikor Wass Albert mellszobra is itt állt, mára csak az üres talapzat emlékeztet rá, ugyanis 2003-ban az állam háborús bűnősként hivatkozva eltávolította. A szoborpark napjainkban a március 15- i megemlékezések színhelye lett.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("5"),
        published: true,
    },
    {
        name: "Szásztemplom",
        image: "https://storage.googleapis.com/firestorequickstarts.appspot.com/food_20.png",
        description: {
            de: "",
            en: "",
            fr: "",
            hu: "Egy legenda szerint a kápolna építtetője úgy gondolta, hogy miután a kápolnát befejezik még bőven marad pénze, hogy gond nélkül éljen élete végéig, de mire a munkálatok befejeződtek csupán egy tojásra valója maradt, bánatában e tojást is megéve a szerzetes meghalt. A 14. századi főúri egyházi építészet kiemelkedő alkotása, a szászrégeni Szűz Mária tiszteletére szentelt evangélikus templom, melyet Losonczi Tamás kegyúr emeltetett a város szász közösségének. A festői környezetbe csúcsosodó templom a város legrégibb és legértékesebb épülete, melyet köznéven csak Szásztemplomnak neveznek. Építési idejéről a templom északi falának köbe vésett nagybetűs latin felirata értesít, mely máskülönben a középkori Erdély legrégibb felirata. Az építési évet 1330-nak megjelölő felirat, kegyúrként Tamás mestert nevezi meg, valamint említi Miklós nevű plébánosát. Szerkezetét tekintve a 13. századi szászföldi templomokra jellemző háromhajós, pilléres, bazilikális elrendezésű, egy sokszögzáródású főszentéllyel és egy, a főhajóba beugró nyugati toronnyal ellátott gótikus stílusú egyházi épület. A négyszögletes nyugati torony ugyanúgy a főhajóba ugrik, mint számos románkori templom esetében. A nyugati homlokzat legszebb dísze a monumentális enyhén előreugró főkapuzat, melyet egy csúcsíves háromszögű oromzat koronázza meg. A nyugati karzatra a hosszház délnyugati sarkában elhelyezett csigalépcső visz fel.  Itt található a vidék legnagyobb orgonája, melyet Carl Schneider brassói orgonaépítő mester 1849 ben készített. A Szásztemplom főhajóját barokk, stukkó kartusos csehsüveg boltozat borítja. A főhajóba beugró nyugati torony és a karzat érdekes társulása, a szász toronyelhelyezkedés és a családi monostorok figyelemre méltó példáját tükrözi. Az egyenesen zárt mellékhajók a főhajóba diadalívvel nyíló sokszögzáródású főszentélyt veszik közre. A templom monumentális főoltára és az életnagyságúnál is nagyobb Krisztus szobra 1857-58 között készült, valamint a diadalívhez erősített, elegáns szószék melynek koronáján aranyozott evangélista figurák ülnek 1871-ben. A bazilikális elrendezésű templom ilyen stílusban maradt fent az 1708-as Rákóczi szabadságharc alatt a kurucok által keletkezett tűzvészig. Ekkor a templom fő és mellékhajói, valamint a tornyai súlyosan megsérültek. 1787-es újjáépítése során olyan módosításokat végeztek melyekkel megváltoztatták a templom eredeti stílusának egy részét. A templom további tűzvészek áldozatául esett, például az 1848-as nagy tűzvész idején újból hatalmas károkat szenvedett. A templom mai formáját az 1927-1930-as években Gustav Müller folytatta restauráláskor nyerte el. A templom művészettörténetileg értékes épületrészei közé tartozik egy korai gótikus ablak, a rajta levő emberfej domborművekkel, melyek Bánffy Tamás kegyurat és feleségét ábrázolhatják, valamint az egyszerű faragott kövekből készült ülőfülke a templomszentélyben. A szentély falába épített szentségtartó fülke, a sekrestye ajtaja fölötti címer, a keleti boltszakasz két figuratív záróköve mely egyik Losonci Bánffy címerét, a másik pedig Isten Bárányát ábrázolja, valamint a fordított kúp alakú konzol, szép szőlőindával díszítve, melyet a toronyba vezető csigalépcső alján találunk, mind a templom építészeti különlegességeit képezik. A templom értékes részei közé tartozik a Szent Lőrinc kápolna és a külső falán megjelenő gyermek nagyságú torzó, mely feltételezhetőleg a kápolna építtetőjét, Szent Lőrincet ábrázolhatja. A kápolnáról az a hír járja, miszerint valamikor a Szent Lőrinc hegyen, esetleg a Bodogály tetőn állott, mielőtt 1630-ban a templomhoz építették volna. A kápolna fontos szerepet töltött be a vidék népének, ugyanis búcsújáróhelyként szolgált. Továbbá, a kápolna nyugati sarkában az imént említett torzóról azt állítják, hogy valószínűleg még abból az időből való amikor különálló épületként szolgált, ugyanis a lutheránusok már nem készítettek szobrokat. A kápolna gótikus boltozata az 1848-as tűzvész áldozata lesz, ezzel ellenben a szentély két szakaszos gótikus keresztboltozata megmaradt. Egy legenda szerint a kápolna építtetője úgy gondolta, hogy miután a kápolnát befejezik még bőven marad pénze, hogy gond nélkül éljen élete végéig, de mire a munkálatok befejeződtek csupán egy tojásra valója maradt, bánatában e tojást is megéve a szerzetes meghalt. Egy másik legenda szerint, amely a templommal kapcsolatos, Wolff Márton asztalos elbeszélése szerint arról a kőből faragott szőlőfürtről szól, amely a toronyba vezető csigalépcső alsó zárókövén található. A monda szerint 1848-ban megjelent egy mikházai, név szerint Veress, egy Ferenc-rendi szerzetes, aki állítása szerint a zárda levéltárában egy olyan iratra talált, amely állítólag azt bizonyítja, hogy a szászrégeni templomban egy kőszőlőfürt alatt egy hatalmas kincs van elrejtve, melyet a templom építtetője helyezett el oda, abban az esetben, ha a templom netalán leégne vagy szűkősé válna, akkor abból újat építhessenek. Sajnos azóta sem került elő a kincs, pedig különösen jól fogott volna az 1848-as leégéskor. A templom napjainkban a város szimbóluma, a szász örökség része, melyet legtöbbször diákok és tanárok látogatják.",
            ro: ""
        },
        open_hours: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        address: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        contact_info: {
            de: "",
            en: "",
            fr: "",
            hu: "",
            ro: ""
        },
        is_visitable: true,
        priority: BigInt("6"),
        published: true,
    }
];

const prisma = new PrismaClient();

async function main() {
    try {
        // Reset taables
        await prisma.notable_personalities.deleteMany();
        console.log("Data in Personalities table are deleted!");
        await prisma.buildings.deleteMany();
        console.log("Data in Buildings table are deleted!");
        await prisma.churches.deleteMany();
        console.log("Data in Churches table are deleted!");

        // Reset table indexes
        await prisma.$executeRaw`ALTER SEQUENCE notable_personalities_id_seq RESTART WITH 1`;
        console.log("Personalities table id reset!");
        await prisma.$executeRaw`ALTER SEQUENCE buildings_id_seq RESTART WITH 1`;
        console.log("Buildings table id reset!");
        await prisma.$executeRaw`ALTER SEQUENCE churches_id_seq RESTART WITH 1`;
        console.log("Churches table id reset!");

        // Seed tables
        await prisma.notable_personalities.createMany(
            { data: personDataList }
        );
        console.log("Personalities are created!");

        await prisma.buildings.createMany(
            { data: buildingDataList }
        );
        console.log("Buildings are created!");

        await prisma.churches.createMany(
            { data: churchDataList }
        );
        console.log("Churches are created!");

    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })