export const raceOptions= {
  alleycat: 'Dachowiec',
  purebred: 'Rasowy',
}

export const sexOptions = {
  male: 'Kocur',
  female: 'Kotka'}

export const colorOptions = {
  red: 'Rudy',
  black: 'Czarny',
  white: 'Biały',
  striped: 'Pręgowany',
  mixed: 'Mieszany'

}
export const ageOptions = {
  veryYoung:'poniżej 3 miesięcy',
  young: 'poniżej roku',
  adult: 'powyżej roku'
}


const DataBase = [
  {
    id: 11,
    name :'Aisza',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.adult,
    ointment: colorOptions.black,
    description: 'Do schroniska trafiłam w ubiegłym roku jako nieszczęśliwa i pogruchotana kocia bieda. Ropomacicze, złamana tylna łapka – no nie było dobrze. Wykurowali mnie tu, poskładali do kupy i teraz niecierpliwie czekam na nowy dom. W karcie mi tutaj napisano, że mam 10 lat, ale ani mój wygląd, ani usposobienie o tym nie świadczy! Odwrotnie – żywa, ciekawska i reagująca bestyjka ze mnie. Bardzo dążę do kontaktu z człowiekiem, przewracam na plecki przy głaskaniu, ocieram się o ludzką rękę i lubię ją do siebie przyciągać łapkami. Czasem lekko chwycę ząbkami, ale to z podekscytowania, nie agresji. Po prostu chciałabym człowieka na dłużej przy sobie zatrzymać i taki sposób obrałam, ot co!Jestem naprawdę fajną, kontaktową kotką z (na przekór metryce) młodą duszą. Docenię miłość, troskę i spokojny kąt na Twojej kanapie, jeśli tylko zechcesz mi to ofiarować ….' +,
    image: 'https://media.mnn.com/assets/images/2018/02/AdorableBlackCatLookingAtCameraFromSofa.jpg.653x0_q80_crop-smart.jpg'
  },
  {
    id: 12,
    name :'Kredka',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description:'„Cześć Wszystkim! Jestem Kredka! Panna Kredka szylkretka! Samymi najładniejszymi barwami mnie narysowano: trochę aksamitnej czerni, odrobinę śmietankowej białości, no i te piękne złociste plamki, jak słoneczne promyki w gęstym lesie! Charakter też mam wiosenny, ciepły i kolorowy, cała jestem pozytywną radosną plamką światła – kochana, przyjazna, mrucząca, otwarta i przemiła. Ostatnio pojechałam na Koci Wypad do Brzeżna i choć nie spacerowałam na szelkach jak moi koci pobratymcy, to w przyjaznym i cichym schronieniu przyjmowałam zainteresowanie i zachwyty moją osobą. Dawałam się oczywiście głaskać, dzieciom także, z ukontentowaniem ugniatałam łapkami i pokazywałam puchate brzusio! Informuję uprzejmie, ze w ogóle lubię siedzieć na ręku, bez problemu wchodzę do transportera, dam sobie nałożyć szelki i paraduję w nich po schroniskowym korytarzu. Bardzo chętnie, jak to Kredka, pomaluję czyjś świat nie tylko na „żółto i na niebiesko”, ale na mnóstwo innych kolorów. Zacznijmy od wiosny, a potem każda pora roku będzie nasza, wspólna! Chcesz? To zapraszam do schroniska, czekam na Ciebie w biurze!” Pozdrawiam, Kredka.',
    image: 'http://www.catfinders.org/wp-content/uploads/2012/06/Danbury-Zeke-yawn-2-May-20122.jpg'
  },
  {
    id: 13,
    name :'Fikus',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description: '„No dzień dobry, cześć i czołem! Miałem pozować do fotki z moim towarzyszem i przyjacielem Frankiem, ale on się wstydził i nie chciał. „No, nie wygłupiaj sie, stary, nie pękaj” – mówiłem mu, ale on że nie i nie. No trudno. Jesteśmy dla siebie jak bracia, więc będę mówił za nas obu. W końcu to ja jestem ten odważniejszy. Trafiliśmy tutaj do schroniska jako dwa małe grzdyle, trochę dzikawe, przestraszone i chorujące. Długo się leczyliśmy na różne przypadłości , ale teraz jesteśmy już obaj gotowi do adopcji – i fizycznie, i psychicznie. Najchętniej poszlibyśmy do domu razem, bo bardzo jesteśmy ze sobą zżyci. Wspólnie się bawimy, śpimy przytuleni, a ile bezsennych godzin spędziliśmy na pogawędkach na uszko, jak to nam będzie w tym nowym domu, to już nikt nie zliczy! Jesteśmy pięknymi, młodymi, uroczymi kotami – ja jestem, jak widzicie, niemal całkowicie czarny, a Franuś pochlapał sobie chyba czymś futerko, bo ma biały elegancki żabocik i takież buciki. Wspaniale reagujemy na ludzi, na inne koty, najpewniej dogadamy się także z psami, bo mamy tu styczność ze szczekającymi towarzyszami. Przepiękny z nas duecik, a gwarantuję, ze w nowym, oby wspólnym, domu mój kompan Franuś się ogarnie i ośmieli. Już moja w tym głowa! To co? Czekamy na Was!” Pozdrawiam, Fikus.',
    image: 'https://pet-net.net/wp-content/uploads/Ellie-Maine-Coon-Tabby-Mix-Cat-For-Adoption-Pittsburgh-PA.jpg'
  },
  {
    id: 14,
    name :'Akuda',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.adult,
    ointment: colorOptions.red,
    description: '„Prawdziwa sesja! Miękki kocyk, profesjonalne tło i światło, i nawet asystentka fotografa! Wszystko nowe, wszystko nieznane, aż oczy ze zdumienia szeroko otwieram. Dziwicie się? Dla faceta, którego chorego i brudnego znaleziono w osiedlowym zsypie (tak, tak właśnie Wy, ludzie potraficie podziękować za miłość i przywiązanie …) wszystko to jest cudem, odmianą i zrządzeniem losu. Moja rekonwalescencja tu w schronisku trochę niestety trwała. Jak to mówi nasza pani doktor, długo nie mogłem się zdecydować, czy będę żył, czy nie. To wszystko, co złe, choroby, brud, głód, poniewierka – to już jednak całe szczęście za mną. A co przede mną? To już od Was zależy. Na pewno byłem domowym kotem – jestem spokojny i miły, lgnę do człowieka, daję sie głaskać, i to nawet po puchatym brzuszku, a każdy, kto zna kocią naturę wie, że to zwykle nie jest ulubione miejsce do mizianek. Mnie to jednak odpowiada póki co, a smyrajcie sobie do woli, a najlepiej to już w nowym domu, w godnych warunkach. Bo upokorzeń śmietnikowego kota, którego los nikogo nie obchodzi, przeganianego z miejsca na miejsce to ja już ponownie zaznać nie chcę. Jak możesz dać mi nowy, odpowiedzialny dom, taki do końca świata, żeby nie wiem co, to zapraszam, przyjedź, pogadamy, poznamy się. Z utęsknieniem czekam tu na Opiekuna i Przyjaciela z prawdziwego zdarzenia.” Pozdrawiam, Akuda.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/RedCat_8727.jpg'
  },
  {
    id: 15,
    name :'Janka',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description: '„Dzień dobry, nazywam się Janka. Mówią mi tutaj, ze jestem świetną kocicą i posiadam cały wachlarz zalet: piękna, inteligentna, łagodna, przyjazna, miziasta i tak dalej. Słucham tego i słucham, i do głowy przychodzi mi tylko jedno pytanie: jak to się stało? Jak to może być, że taka wspaniała kocia osoba ląduje pewnego grudniowego dnia bezdomna na chodniku tuż przy najbardziej uczęszczanej ulicy miasta? Myślę i myślę i – naprawdę – nie mogę tego zrozumieć. Bo ja naprawdę nie mogę i nie powinnam żyć na ulicy. Nie tylko dlatego, że jestem domowa i oswojona, również dlatego, że jak wykazały tutejsze badania, miałam kiedyś złamaną miednicę i od tej pory mam prawo kuleć. W wyniku dawnych urazów jestem też kotka wyjątkową, bo … bez ogona. Niektórzy mówią, ze koty bez tej części ciała trudniej znajdują dom. No, to juz w ogóle z trudem mieści sie w moim czarno-białym łebku. Człowieki, naprawdę? To już mój wdzięk, urok, przyjazny charakter, delikatność i łagodność nie mają znaczenia? Tylko takie machające coś na końcu kota? No niemożliwe. Nie wierzę w to i myślę, ze Wy też nie. A skoro nie wierzycie, to liczę, że dla innych tez to nie ma znaczenia. I że mój nowy dom, taki który nigdy nie skończy się uliczną tułaczką, jest tuż, tuż. Czekam tu cierpliwie na niego i … na Ciebie .” Pozdrawiam, Janka.',
    image: 'http://www.catster.com/wp-content/uploads/2017/09/A-tabby-cat-with-an-ID-collar-on.jpg'
  },
  {
    id: 16,
    name :'Gigant',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description: '„Dzień dobry! mam na imię Gigant, bo wszystko u mnie w dużej ilości i w mega promocji! Spory kocur ze mnie, to raz. Gigant-yczne serce dla wszystkich – to dwa. Charakter małego miziastego kociaka w ciele dorosłego kota, to trzy. Przyjazne nastawienie do innych czworonogów, to cztery. Jestem strasznie, okropnie, wręcz Gigant-ycznie spragniony ludzkiej uwagi! W klatce śpię smacznie i stwarzam pozory nieśmiałego, ale wystarczy tylko rękę wyciągnąć, bym rozpoczął pląsy radości i taniec przymilań: na kolana włażę, łebkiem się ocieram, na krok nie odstępuję! Nie mam nic przeciwko innym zwierzętom – psy mi niestraszne, więc nie widzę powodu, dla których nie miałbym zamieszkać z jednym z szczekających przyjaciół. Zaprzyjaźniłem się tu też z kocurem Gondorem i tworzymy świetny duet, ale jeśli chodzi o adopcję, to jednak lepiej żebym – dla bezpieczeństwa – był jedynym kotem w domu. Dlaczego? Ponieważ cierpię na tzw. FIV czyli wirus nabytego niedoboru immunologicznego kotów. Nie jest łatwo się tym zarazić, ale wiecie: strzeżonego pan Bóg strzeże. Ale uwaga: psy i ludzie się tym nie zarażą, poza tym wiele kotów z ta chorobą żyje w dobrej kondycji, więc bez obaw! Wymagam „jedynie” większej uwagi niż zwykły kot, ale przy tak Gigant-ycznej osobowości to chyba naturalne, co? Wszystkich gigantomaniaków zapraszam do biura na poznanie mnie! Będę bardzo szczęśliwy, bo każde ludzkie odwiedziny (nie mówiąc już o wymarzonej adopcji) to dla mnie wielka radość!',
    image: 'url'
  },
  {
    id: 17,
    name :'Kacperek',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOption.young,
    ointment: colorOptions.mixed,
    description: '„Dzień dobry, mam na imię Kacperek. Jestem dość młodym, około 3-letnim kotem, o ciekawym umaszczeniu i zabawną czarną plamką przy nosku. Trafiłem tu w maju 2017 roku, więc już ponad pół roku tu siedzę. Początkowo bardzo byłem wycofany, patrzyłem na ludzi z górnych półek woliery i w ogóle mowy nie było, żebym się integrował. Ale mi przeszło, w końcu ile można się boczyć i izolować? Najpierw zwabiły mnie smakołyki i przysmaczki, a teraz to już i tego nie trzeba. Daję się chętnie głaskać, bez problemu wszedłem do transportera, podczas sesji byłem zaciekawiony i podekscytowany. Z kotami w wolierze mam poprawne relacje, z lekką tendencją do dominacji. Ogólnie – okrzepłem, zmężniałem, przytyłem, przepracowałem swoje lęki i teraz to już nic, tylko tego nowego domu szukać. Czy mam na niego szansę jeszcze przed nastaniem tutaj tej kaszubskiej, srogiej zimy? Oby, bardzo sobie tego życzę. Czekam na Was w kociej wolierze!” Pozdrawiam, Kacperek.',
    image: 'https://kittentoob.com/wp-content/uploads/2017/09/mixed_breed_cat_l1.jpg'
  },
  {
    id: 18,
    name :'Kaktus',
    race: raceOptions.alleycat,
    sex: sexOptions.male,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description: '„Przyszła do woliery, pogłaskała, za uchem podrapała, przyjrzała mi się bliżej i mówi: „Ty jesteś Kaktus”. No zbaraniałem. Nie nadążam za tą dziewczyną, gdzie Kaktus, jaki Kaktus? Miły jestem, „tulaśny”, w ogóle nie „kłujący”. No ale niech jej będzie, takie imię jest wszak lepsze niż żadne. A przybyłem tu do schroniska w maju jako kot bezimienny i bez przeszłości. Ot, taki miejski „bezdomniak”. Pewnie miałem kiedyś swoich ludzi, bo jestem w pełni „obsługiwalny” – rączki, szelki, transporter, te sprawy. Pomieszczenie zamknięte, którego wcześniej nie widziałem, a gdzie miałem sesję zdjęciową też zniosłem spokojnie i z godnością. Ale … zastanawiam się, czy ktoś taki jak ja ma jeszcze szansę na dom: niemłody (dają tu mi tu ok. 6 ), niepiękny (po moich oczach widać przebytą chorobę), z wystającymi trochę górnymi kłami? Do tego czarny, a czarne koty nie cieszą się wśród adoptujących wielkim wzięciem. Ona mi mówi jednak, że jestem fajny i żebym nie tracił nadziei. To nie tracę. I czekam. Pozdrawiam, Kaktus.',
    image: 'https://i.ytimg.com/vi/TI4NMCa22mE/maxresdefault.jpg'
  },
  {
    id: 19,
    name :'Oliwia',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.adult,
    ointment: colorOptions.striped,
    description: 'Do schroniska trafiłam w ubiegłym roku jako nieszczęśliwa i pogruchotana kocia bieda. Ropomacicze, złamana tylna łapka – no nie było dobrze. Wykurowali mnie tu, poskładali do kupy i teraz niecierpliwie czekam na nowy dom. W karcie mi tutaj napisano, że mam 10 lat, ale ani mój wygląd, ani usposobienie o tym nie świadczy! Odwrotnie – żywa, ciekawska i reagująca bestyjka ze mnie. Bardzo dążę do kontaktu z człowiekiem, przewracam na plecki przy głaskaniu, ocieram się o ludzką rękę i lubię ją do siebie przyciągać łapkami. Czasem lekko chwycę ząbkami, ale to z podekscytowania, nie agresji. Po prostu chciałabym człowieka na dłużej przy sobie zatrzymać i taki sposób obrałam, ot co!Jestem naprawdę fajną, kontaktową kotką z (na przekór metryce) młodą duszą. Docenię miłość, troskę i spokojny kąt na Twojej kanapie, jeśli tylko zechcesz mi to ofiarować ….' +,
    image: 'https://i.pinimg.com/736x/60/9b/36/609b36302dd987ec98eb2452661f15d8--guy-standing-genuine-smile.jpg'
  },
  {
    id: 20,
    name :'Gamma',
    race: raceOptions.alleycat,
    sex: sexOptions.female,
    age: ageOption.Young,
    ointment: colorOptions.black,
    description: '„Witam! W schronisku jestem od połowy czerwca tego roku. Trafiłam tu z ul. Oliwskiej. Niestety uległam wypadkowi komunikacyjnemu co skutkowało ciężkim urazem miednicy i rdzenia kręgowego. Ten uraz spowodował częściową utratę czucia w tylnych kończynach, oraz zaburzenia w funkcjonowaniu świadomości wypróżniania się. Ja nie mogę powiedzieć, że potrafię zachować czystość, ale to niestety nie jest zależne ode mnie. Mam za to cudowny charakter. Spokojna, „miziasta”, cierpliwa i bardzo łaknąca kontaktu z ludźmi. Niekoniecznie odpowiada mi kontakt z psami. Nieźle też poruszam się. wiem, że „popsute” zwierzęta mają znacznie mniejsze szanse na znalezienie nowego domu, ale przecież nie po to tak długo ja i schroniskowy lekarz weterynarii walczyliśmy o jak najlepszy stan mojego zdrowia, żeby teraz resztę życia spędziła w schroniskowej klatce. Danie mi domu z pewnością dla nowych opiekunów będzie wyzwanie, ale ja się odwdzięczę swoim serduchem i przyjaźnią.” Pozdrawiam Oliwia.',
    image: 'https://iheartcats.com/wp-content/uploads/2015/08/black-cat.png'
  },

]





export default DataBase
