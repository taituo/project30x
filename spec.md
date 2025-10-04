[O[IStrateginen Suunnitelma: "Softa 2025" Monorepon Yhtenäinen Tietämyskeskus
Osa I: Arkkitehtuurin Perusta: Yhtenäinen Tietämyskeskus
Tämä perustavanlaatuinen osio määrittelee Docusaurus-sivuston ei ainoastaan dokumentaatiotyökaluna, vaan strategisena voimavarana tiedonhallintaan ja kehittäjäkokemuksen parantamiseen monimutkaisessa monorepo-ympäristössä.

1.1 Monorepon Haaste: Monimutkaisuuden Hallinta Skaalassa

Nykyaikainen ohjelmistokehitys, erityisesti laajamittaisissa ympäristöissä, kohtaa merkittäviä haasteita. "Softa 2025" -hankkeen konteksti – noin 30 projektia, jotka kattavat pieniä työkaluja, SaaS-alustoja ja enterprise-tason järjestelmiä ja jotka on toteutettu eri teknologiapinoilla yhdessä monorepossa – on tästä erinomainen esimerkki. Tällainen ympäristö, vaikka se tarjoaa etuja koodin jakamisessa ja yhtenäisissä työkaluissa, synnyttää väistämättä haasteita, jotka voivat hidastaa kehitystä ja heikentää laatua ilman systemaattista lähestymistapaa.

Keskeisimpiä haasteita ovat:

Tietosiilot: Eri projektitiimien välille syntyy helposti tietokuiluja, jolloin parhaita käytäntöjä ja opittuja asioita ei jaeta tehokkaasti.

Epäjohdonmukaiset Standardit: Ilman keskitettyä ohjeistusta projektit alkavat noudattaa omia, toisistaan poikkeavia koodaus- ja arkkitehtuuristandardejaan, mikä vaikeuttaa ylläpitoa ja tiimien välistä yhteistyötä.

Korkea Kognitiivinen Kuorma: Uusien kehittäjien perehdyttäminen on hidasta ja tehotonta, kun heidän on navigoitava kymmenien projektien ja niiden epävirallisten dokumentaatioiden viidakossa.

Dokumentaation Vanheneminen: Perinteiset dokumentaatiojärjestelmät, jotka sijaitsevat koodin ulkopuolella, eivät pysy monorepon nopeiden muutosten tahdissa. Tämä johtaa siihen, että dokumentaatio vanhenee, menettää luotettavuutensa ja lopulta hylätään.

On olennaista ymmärtää, että dokumentaation laatu ei ole pelkästään tekninen yksityiskohta; se vaikuttaa suoraan tuotteen laatumielikuvaan ja sen omaksumisen helppouteen. Ilman keskitettyä, hyvin suunniteltua ja ylläpidettyä tietämyskeskusta kehittäjien tuottavuus heikkenee väistämättä monorepon kasvaessa. Tämä suunnitelma esittää arkkitehtuurin, joka vastaa näihin haasteisiin ja muuttaa dokumentaation strategiseksi voimavaraksi.   

1.2 Docusaurus Strategisena Valintana: Enemmän Kuin Staattinen Sivugeneraattori

Docusaurus-alustan valinta "Softa 2025" -hankkeen perustaksi ei ole sattumaa. Se on strateginen päätös, joka perustuu sen kykyyn toimia modernina Jamstack-tietämyskeskuksena, ei pelkästään staattisten sivujen generaattorina. Docusaurus tarjoaa joukon ominaisuuksia, jotka vastaavat suoraan monorepo-ympäristön asettamiin vaatimuksiin.   

"Docs-as-Code" -filosofia: Tämä on koko arkkitehtuurin kulmakivi. Dokumentaatiota käsitellään kuten mitä tahansa muuta koodia: se sijaitsee samassa monorepossa, sitä versioidaan Gitillä, se tarkistetaan osana pull request -prosessia ja se julkaistaan automaattisesti samojen CI/CD-putkien kautta. Tämä kehittäjäkeskeinen lähestymistapa sitouttaa kehittäjät dokumentaation ylläpitoon ja varmistaa, että se pysyy ajan tasalla koodimuutosten kanssa. Tämä ei ole pelkästään tekninen valinta, vaan se on kulttuurinen muutos, joka integroi dokumentoinnin osaksi ydin-kehitysprosessia. Kun dokumentaation päivittäminen on osa "definition of done" -määritelmää, se ei jää enää jälkikäteen tehtäväksi velvollisuudeksi.   

MDX Rikkaaseen ja Interaktiiviseen Sisältöön: Docusaurus hyödyntää MDX-muotoa, joka mahdollistaa React-komponenttien upottamisen suoraan Markdown-tiedostoihin. Tämä on erittäin voimakas ominaisuus, joka muuttaa staattisen dokumentaation dynaamiseksi oppimisympäristöksi. Voimme luoda interaktiivisia kaavioita, jotka visualisoivat monimutkaisia arkkitehtuureja, upottaa live-koodieditoreita, joissa käyttäjät voivat kokeilla API-kutsuja, tai näyttää reaaliaikaista dataa suoraan dokumentaatiosivulla. Tämä parantaa merkittävästi tiedon omaksumista ja sitoutumista.   

Laajennettava Arkkitehtuuri: Docusaurus on rakennettu laajennettavaksi (pluggable). Vaikka aloitamme    

classic-esiasetuksella, joka tarjoaa erinomaisen pohjan dokumentaatiolle ja blogille , säilytämme täyden vapauden lisätä tai kehittää omia laajennoksia tulevaisuuden tarpeisiin. Tämä takaa järjestelmän pitkän aikavälin elinkelpoisuuden ja muokattavuuden.   

Sisäänrakennettu Versiointi ja Kansainvälistäminen (i18n): Vaikka välitön tarve ei olekaan ilmeinen, Docusauruksen sisäänrakennettu tuki dokumentaation versioinnille ja kansainvälistämiselle on merkittävä etu. Erityisesti SaaS- ja enterprise-projekteissa on yleistä, että eri asiakkaat käyttävät eri versioita ohjelmistosta. Versioinnin avulla voimme ylläpitää ja tarjota tarkkaa dokumentaatiota jokaiselle julkaistulle versiolle. Tämä on kriittinen ominaisuus, joka varmistaa, että järjestelmä skaalautuu tulevaisuuden liiketoimintavaatimuksiin.   

Tämän arkkitehtonisen valinnan myötä luotava tietämyskeskus ei ole vain passiivinen tietovarasto. Siitä tulee aktiivinen työkalu, joka edistää laatua, selkeyttä ja yhtenäistä insinöörikulttuuria koko organisaatiossa. Se muuttaa tavan, jolla tietoa luodaan, jaetaan ja ylläpidetään, ja tekee siitä kiinteän osan päivittäistä kehitystyötä.

Osa II: Informaatioarkkitehtuuri ja Sisältöstrategia
Tämä osio esittelee yksityiskohtaisen suunnitelman sivuston rakenteesta, määritellen tarkasti, mihin kukin tieto sijoitetaan ja miksi. Huolellisesti suunniteltu informaatioarkkitehtuuri on elintärkeä, jotta laaja tietomäärä pysyy hallittavana, löydettävänä ja ylläpidettävänä.

2.1 Docusaurus-hakemistorakenne: Skaalautuva Perusta

Ehdotettu hakemistorakenne on suunniteltu selkeyttä ja vastuualueiden erottelua varten. Sijoittamalla Docusaurus-sivuston (docs-website) omaan kansioonsa monorepon juurelle varmistamme, että dokumentaatio on loogisesti erillään, mutta silti tiiviisti kytköksissä projektien lähdekoodiin. Tämä on Docusauruksen suosittelema parhaiden käytäntöjen mukainen rakenne monorepo-ympäristöissä. Selkeä rakenne helpottaa uusien kehittäjien perehtymistä ja tekee sisällön lisäämisestä ja löytämisestä intuitiivista.   

Ehdotettu hakemistorakenne:

monorepo-root/
├── packages/               # Sisältää 30 projektin lähdekoodit
└── docs-website/           # Docusaurus-sivuston juurihakemisto
    ├── docusaurus.config.js
    ├── sidebars.js
    ├── docs/
    │   ├── golden-path/
    │   ├── projects/
    │   │   ├── small/
    │   │   ├── saas/
    │   │   └── enterprise/
    │   ├── platform/
    │   ├── architecture/
    │   │   └── adr/
    │   └── research/
    ├── blog/
    ├── src/
    └── static/
Tämä rakenne luo selkeät rajat eri sisältötyyppien välille, mikä on perusta tehokkaalle hallinnalle ja navigoinnille.

2.2 Docs vs. Blog -dikotomia: Kriittinen Arkkitehtoninen Päätös

Yksi Docusauruksen käytön keskeisimmistä ja usein väärinymmärretyistä arkkitehtonisista päätöksistä on docs- ja blog-laajennusten välinen ero. Nämä eivät ole vain kaksi tapaa esittää sisältöä, vaan ne edustavat kahta eri tiedonhallinnan paradigmaa. Selkeän ja johdonmukaisen hallintomallin luominen sille, mitä sisältöä sijoitetaan mihinkin, on elintärkeää sivuston pitkän aikavälin käytettävyydelle ja ylläpidettävyydelle.   

docs-laajennuksen ominaisuudet ja käyttötarkoitus:

Tarkoitus: docs-osio on tarkoitettu perustavanlaatuiselle, "ikivihreälle" tai ajattomalle tiedolle. Se on kanoninen referenssimateriaali, organisaation kollektiivinen totuus.

Rakenne: Sisältö on luonteeltaan hierarkkista, ei-kronologista, ja sitä selataan pääasiassa sivupalkin (sidebar) kautta. Täällä olevan tiedon oletetaan olevan aina ajantasainen kuvaus nykytilasta.   

Käyttökohteet "Softa 2025" -hankkeessa:

Golden Path: Ydinarkkitehtuurin periaatteet, koodausstandardit, pull request -käytännöt ja muut yleiset ohjeet, jotka koskevat kaikkia kehittäjiä.

Projects: Yksityiskohtaiset asennusohjeet, API-referenssit, käyttöoppaat ja arkkitehtuurikuvaukset kullekin 30 projektista.

Platform: Syväluotaavat oppaat ja referenssit jaetuista alustakomponenteista, kuten CI/CD-putkista, infrastruktuurista koodina (IaC), monitoroinnista ja tietoturvakäytännöistä.

Architecture/ADR: Muuttumattomat tallenteet merkittävistä arkkitehtuuripäätöksistä (Architecture Decision Records).

Research: Virallinen dokumentaatio tutkimusmetodologioista, LLM-kokeilujen asetelmista ja toistettavista tuloksista.

blog-laajennuksen ominaisuudet ja käyttötarkoitus:

Tarkoitus: blog-osio on tarkoitettu ajalliselle, narratiiviselle tai tapahtumapohjaiselle sisällölle. Se on projektin ja tiimien päiväkirja.

Rakenne: Sisältö on kronologista, järjestettynä päivämäärän mukaan. Se tukee ominaisuuksia kuten avainsanoja (tags) ja kirjoittajatietoja (authors), jotka ovat tyypillisiä aikajanalle sijoittuvalle sisällölle.   
Käyttökohteet "Softa 2025" -hankkeessa:

Weekly Reports: Viikkoraportit, jotka noudattavat hankkeen aikataulua. Jokainen raportti on päivätty blogikirjoitus, joka voidaan merkitä avainsanoilla (esim. projekti, tiimi).

Milestone Reviews: Yhteenvedot saavutuksista suhteessa vuoden 2025 loppupuolen virstanpylväisiin.

Retrospectives: Yhteenvedot sprinttien tai projektien retrospektiiveistä. Kirjoittajatiedot ja päivämäärät tarjoavat historiallisen kontekstin tiimin oppimiselle.

Announcements: Tiedotteet suurista julkaisuista, uusista työkaluista tai merkittävistä muutoksista.

Tämä tiukka erottelu ei ole rajoitus, vaan ominaisuus, joka pakottaa ylläpitämään arkkitehtonista kurinalaisuutta. Se vaatii tiimiä tietoisesti päättämään, onko jokin tieto ajaton "totuus" vai ajankohtainen "tapahtuma". Tämä kurinalaisuus on avainasemassa tiedon rappeutumisen estämisessä ja sivuston ylläpidettävyyden varmistamisessa pitkällä aikavälillä. Se estää blogin muuttumisen epämääräiseksi "sekalaisen tiedon" kaatopaikaksi, mikä on yleinen ansa vähemmän jäsennellyissä tietämyskannoissa. Työkalu itsessään ohjaa ja ylläpitää informaatioarkkitehtuurin eheyttä.

2.3 Tiedon Verkosto: Ristiinlinkitysstrategia

Staattinen hakemistorakenne ei yksinään riitä. Tietämyskeskuksen todellinen arvo syntyy yhteyksistä, jotka luodaan sisällön välille. Määrittelemme strategian syvälle ja johdonmukaiselle ristiinlinkitykselle, joka muuttaa erilliset dokumentit yhtenäiseksi ja navigoitavaksi tietograafiksi.

Esimerkkejä linkitysmalleista:

Projekti A:n asennusopas (docs/projects/saas/project-a/setup.md) linkittää suoraan kanoniseen CI/CD-putken yleiskatsaukseen (docs/platform/ci-cd/overview.md), välttäen tiedon toistamista.

Arkkitehtuuripäätös tietokannan valinnasta (docs/architecture/adr/005-database-choice.md) linkitetään jokaisen kyseistä tietokantaa käyttävän projektin dokumentaatiosta.

Viikkoraportti (blog/2025-10-20-weekly-update.md) sisältää linkit juuri valmistuneen ominaisuuden projektidokumentaatioon sekä ADR-dokumenttiin, joka ohjasi sen toteutusta.

Retrospektiivissä (blog/2025-11-05-sprint-retro.md) tunnistettu tekninen velka voidaan linkittää suoraan kyseisen komponentin tekniseen dokumentaatioon (docs/projects/enterprise/project-b/component-x.md).

Tämä strategia muuttaa sivuston dokumenttikokoelmasta integroiduksi järjestelmäksi. Käyttäjät voivat vaivattomasti siirtyä korkean tason tilanneraportista yksittäisen ominaisuuden tekniseen toteutukseen ja edelleen sen taustalla olevaan arkkitehtoniseen päätökseen. Tämä luo kontekstia ja syventää ymmärrystä, mikä nopeuttaa ongelmanratkaisua ja perehtymistä.

2.4 Sisällön Hallintamalli

Jotta sisältöstrategia voidaan jalkauttaa tehokkaasti, se on operationalisoitava selkeän hallintamallin avulla. Seuraava taulukko toimii ohjenuorana kaikille sisällöntuottajille ja varmistaa, että informaatioarkkitehtuuri säilyy johdonmukaisena.

Taulukko: Sisällön Hallintamalli

Osio	Hakemistopolku	Sisältötyyppi	Pääasiallinen Kohdeyleisö	Päivitystiheys	Docusaurus-laajennus	Perustelu
Golden Path	docs/golden-path/	Parhaat käytännöt, standardit	Kaikki kehittäjät	Harvoin	docs	Perustavanlaatuiset, ei-kronologiset periaatteet.
Projects	docs/projects/...	Projektikohtaiset oppaat, API:t	Projektitiimit	Tarpeen mukaan	docs	Kanoninen referenssimateriaali kullekin projektille.
Platform	docs/platform/	CI/CD, infra, tietoturva	Kaikki kehittäjät, Ops	Satunnaisesti	docs	Ikivihreä dokumentaatio jaetuille palveluille.
Architecture	docs/architecture/adr/	ADR:t, järjestelmäsuunnittelu	Arkkitehdit, Senior-kehittäjät	Päätöksen mukaan	docs	Muuttumattomat, historialliset päätöstallenteet.
Research	docs/research/	Metodit, LLM-tulokset	T&K, teknologiajohto	Kokeilun mukaan	docs	Formaalit, toistettavat tieteelliset dokumentit.
Reports	blog/	Viikkoraportit, virstanpylväät	Kaikki sidosryhmät	Viikoittain/kausittain	blog	Aikasidonnaiset, kronologiset tilannepäivitykset.
Retrospectives	blog/	Sprintti/tiimi-retrot	Projektitiimit	Sprintin mukaan	blog	Päivätyt kertomukset tiimin oppimisesta ja tapahtumista.
Tämä taulukko poistaa epäselvyydet ja toimii yksinkertaisena ja tehokkaana työkaluna jokaiselle kehittäjälle. Kun tarve dokumentoida jotain ilmenee, tämä malli antaa välittömästi vastauksen oikeasta sijainnista, muodosta ja perusteesta. Tämä madaltaa osallistumisen kynnystä ja varmistaa, että huolellisesti suunniteltu arkkitehtuuri säilyy elinvoimaisena ajan myötä.

Osa III: Navigaatiosuunnittelu ja Käyttäjäpolut
Tässä osiossa keskitytään käyttäjäkokemukseen ja varmistetaan, että valtava tietomäärä on helposti löydettävissä eikä tunnu ylivoimaiselta. Tehokas navigaatio on avainasemassa tietämyskeskuksen omaksumisessa ja hyödyntämisessä.

3.1 Monisivupalkkinen Navigaatiojärjestelmä: Konteksti on Kaikki

Yksi ainoa, automaattisesti generoitu sivupalkki kaikille 30 projektille sekä alusta- ja arkkitehtuuridokumentaatiolle olisi käyttökelvoton. Se olisi liian pitkä, vaikeaselkoinen ja aiheuttaisi käyttäjälle valtavan kognitiivisen kuorman. Ratkaisu on strateginen usean sivupalkin (multi-sidebar) arkkitehtuuri, joka tarjoaa käyttäjälle kontekstisidonnaisen navigaation.   

Ehdotettu sivupalkkiarkkitehtuuri:

Globaali Sivupalkki (globalSidebar): Tämä sivupalkki on näkyvissä yleisillä, kaikkia projekteja koskevilla sivuilla. Se sisältää linkit keskeisiin, horisontaalisiin kokonaisuuksiin.

Golden Path

Platform (CI/CD, Infrastructure, Observability, Security)

Architecture (ADRs)

Research

Projektikohtaiset Sivupalkit: Luomme erilliset sivupalkit kullekin projektikategorialle. Tämä rajaa näkymän vain kyseisen kategorian kannalta relevanttiin sisältöön.

smallProjectsSidebar: Kaikille dokumenteille hakemistossa docs/projects/small/.

saasProjectsSidebar: Kaikille dokumenteille hakemistossa docs/projects/saas/.

enterpriseProjectsSidebar: Kaikille dokumenteille hakemistossa docs/projects/enterprise/.

Toteutus:
Käytämme displayed_sidebar-avainta Markdown-tiedostojen frontmatter-osiossa yhdistääksemme jokaisen dokumentin oikeaan sivupalkkiin. Esimerkiksi jokaisessa    

docs/projects/saas/-hakemiston alla olevassa dokumentissa on metatieto displayed_sidebar: saasProjectsSidebar. Tämä varmistaa, että kun käyttäjä selaa SaaS-projektin dokumentaatiota, hän näkee ainoastaan muiden SaaS-projektien ja niihin liittyvien dokumenttien navigaation. Tämä tarjoaa olennaista kontekstia, vähentää häiriötekijöitä ja tekee navigaatiosta huomattavasti tehokkaampaa.

Tämä lähestymistapa muokkaa suoraan kehittäjien käyttäytymistä ja tiedonhakumalleja. Kontekstitietoinen navigaatiojärjestelmä kannustaa syvälliseen tutustumiseen tietyn osa-alueen sisällä. Esimerkiksi SaaS-projektin parissa työskentelevä kehittäjä voi helposti tutkia muiden vastaavien projektien ratkaisuja ja API-kuvauksia, mikä edistää parhaiden käytäntöjen leviämistä ja yhtenäistää toteutustapoja.

3.2 Yläpalkki ja Päänavigaatio

Sivuston yläpalkki (navbar) toimii ensisijaisena sisäänkäyntipisteenä sivuston pääosioihin. Sen tulee olla selkeä ja tarjota nopea pääsy tärkeimpiin sisältökokonaisuuksiin.   

Ehdotetut yläpalkin elementit:

Docs (Pudotusvalikko):

Golden Path

Platform

Architecture

Projects (Pudotusvalikko):

Small Projects

SaaS Projects

Enterprise Projects

Blog (Suora linkki): Raportit, retrospektiivit ja virstanpylväät.

Research (Suora linkki)

GitHub (Linkki monorepoon)

Tämä rakenne antaa käyttäjälle välittömän yleiskuvan sivuston sisällöstä ja ohjaa hänet oikeaan osioon yhdellä klikkauksella.

3.3 Löydettävyyden Parantaminen: Haku, Avainsanat ja Metadata

Docusaurus ei sisällä sisäänrakennettua hakutoimintoa. Tämä on kriittinen puute näin laajassa tietämyskeskuksessa, ja se on korjattava ulkoisella ratkaisulla. Tehokas haku on välttämätön, jotta käyttäjät voivat nopeasti löytää tarvitsemansa tiedon riippumatta sen sijainnista hierarkiassa.   

Hakustrategia:
Integroimme sivustolle Algolia DocSearch -palvelun. Se on de facto -standardi Docusaurus-sivustoille ja tarjoaa erittäin nopean, tarkan ja kirjoitusvirheitä sietävän haun koko tietämyskannan yli. Tämä ei ole neuvoteltavissa oleva vaatimus; ilman tehokasta hakua sivuston arvo laskee merkittävästi. Haku mahdollistaa poikkileikkaavat "hypyt" eri osa-alueiden välillä. Kehittäjä, joka kohtaa tietoturvaongelman, ei välttämättä tiedä, missä tietoturvaohjeistus sijaitsee, mutta hän voi hakea termillä "CSRF-suojaus" ja päästä suoraan oikealle sivulle (docs/platform/security/csrf.md). Tämä tukee täysin erilaista tiedonhakumallia kuin hierarkkinen selaaminen.

Metadatastrategia:
Vahvistamme tiukan metadatakäytännön (frontmatter) kaikelle sisällölle. Rikas metadata ei ole ainoastaan näyttämistä varten; Algolia indeksoi sen, mikä parantaa dramaattisesti haun relevanssia ja mahdollistaa tulevaisuudessa tiedon suodattamisen ja fasettinavigoinnin.

Docs-sivut: Pakolliset kentät: id, title, description, displayed_sidebar. Suositeltu kenttä: tags-lista (esim. tags: [api, backend, postgres]).

Blog-kirjoitukset: Pakolliset kentät: slug, title, authors, date. Suositeltu kenttä: tags-lista (esim. tags: [weekly-report, project-apollo, q4-2025]).

Yhdessä strukturoitu navigaatio (sivupalkit) ja strukturoimaton haku (Algolia) palvelevat kahta erilaista, mutta yhtä tärkeää käyttäjän matkaa. Tämä kaksitahoinen lähestymistapa varmistaa, että insinöörit voivat käyttää tietoa tehokkaasti riippumatta siitä, miten he lähestyvät ongelmaa. Käyttäjäkokemus ei ole vain estetiikkaa, vaan se on olennainen osa alustan hyödyllisyyttä ja vaikuttaa suoraan kehittäjien tuottavuuteen.

Osa IV: Hallintamalli ja Tietämyskannan Kehittäminen
Tämä osio kuvaa prosessit, jotka pitävät tietämyskeskuksen elävänä, tarkkana ja integroituna tiimien työnkulkuihin. Teknologia on vain mahdollistaja; menestys riippuu prosesseista ja kulttuurista.

4.1 Päätösten Kodifiointi: ADR-työnkulku

Arkkitehtuuripäätöstallenteet (ADR) ovat kriittinen osa teknistä hallintaa. Niitä ei tule säilyttää erillisissä dokumentinhallintajärjestelmissä, vaan ne on kohdeltava muuttumattomina, versioituina artefakteina osana tietämyskeskusta.

Prosessimalli:

Ehdotus: Uusi ADR kirjoitetaan Markdown-muodossa käyttäen standardoitua pohjaa. Tiedosto sijoitetaan hakemistoon docs/architecture/adr/ uudessa Git-haarassa.

Katselmointi: ADR katselmoidaan Pull Request -prosessin kautta. Tämä mahdollistaa asynkronisen, dokumentoidun keskustelun ja väittelyn arkkitehtien ja senior-kehittäjien välillä. Kommentit ja muutosehdotukset tallentuvat osaksi PR:n historiaa.

Hyväksyntä & Yhdistäminen: Kun konsensus on saavutettu, PR hyväksytään ja yhdistetään päähaaraan. Tässä hetkessä ADR:stä tulee osa virallista, muuttumatonta arkkitehtonista historiaa.

Tämä "ADRs-as-code" -prosessi varmistaa, että suurten teknisten päätösten taustalla oleva historia ja perustelut säilyvät ja ovat kaikkien saatavilla. Se estää tiedon katoamista ja ehkäisee tulevia kiistoja menneistä valinnoista. Kun arkkitehtuurikeskustelu käydään PR:n kautta, siitä tulee läpinäkyvää ja auditoitavaa. Git-historiasta muodostuu muuttumaton kirjanpito tehdyistä päätöksistä.

4.2 Matkan Dokumentointi: Raportointi- ja Retrospektiivikadenssi

Tämä alaluku operationalisoi käyttäjän esittämän "Milestone-mallin" ja viikkoaikataulun hyödyntämällä blog-laajennuksen kronologista luonnetta.

Prosessimalli:

Viikkoraportit: Nimetty henkilö (esim. tiiminvetäjä) vastaa uuden blogikirjoituksen luomisesta joka viikko käyttäen standardoitua pohjaa. Tiedoston nimeämiskäytäntö YYYY-MM-DD-weekly-update.md on pakollinen kronologisen järjestyksen varmistamiseksi. Avainsanoja (tags) käytetään raportin liittämiseen tiettyihin projekteihin tai tiimeihin.   

Virstanpylväiden Katsaukset: Jokaisen virstanpylväsjakson päätteeksi luodaan kattava blogikirjoitus. Se tiivistää saavutukset, haasteet ja seuraavat askeleet, ja linkittää relevantteihin viikkoraportteihin ja projektidokumentaatioon.

Retrospektiivit: Sprintin tai projektin jälkeiset retrospektiivit dokumentoidaan blogikirjoituksina. Ne tallentavat keskeiset opit, onnistumiset ja parannuskohteet. authors-metatietoa käytetään liittämään kirjoitus osallistuneeseen tiimiin.   
Tämä prosessi luo haettavan, kronologisen historian koko "Softa 2025" -hankkeesta. Se tekee edistymisen seurannasta helppoa ja auttaa ymmärtämään projektin evoluutiota ajan myötä. Se ei ole pelkästään raportointia, vaan se on kollektiivisen muistin rakentamista.

Integroimalla raportointi ja ADR:t Git-pohjaiseen työnkulkuun muutamme hallintamallin byrokraattisesta prosessista läpinäkyväksi, auditoitavaksi ja kehittäjäystävälliseksi toiminnaksi. Tämä lähestymistapa lisää luottamusta prosesseihin, koska historia on avoin eikä sitä voi helposti muuttaa. Se demokratisoi tiedon saantia, mahdollistaen kenelle tahansa kehittäjälle ominaisuuden jäljittämisen sen alkuperäiseen ADR-päätökseen ja sen edistymisen seuraamisen viikkoraporttien kautta. Tämä edistää korkean luottamuksen ja vastuullisuuden insinöörikulttuuria.

Osa V: Tulevaisuuteen Suuntautuvat Aloitteet: Tutkimuskeskus
Tämä osio käsittelee käyttäjän tulevaisuuteen suuntautuvia vaatimuksia tutkimus- ja kehitystyön dokumentoinnista.

5.1 Tutkimus- ja Kokeilukeskus

Hakemisto docs/research/ toimii virallisena arkistona T&K-toiminnalle. Tämän sisällön sijoittaminen docs-osioon blogin sijaan on tietoinen arkkitehtoninen valinta. Tutkimustulokset, erityisesti liittyen LLM-kokeiluihin, on dokumentoitava tavalla, joka on toistettavissa ja joka muodostaa pysyvän referenssin, ei pelkästään kronologisen päiväkirjamerkinnän.

Sisällön Rakenne:
Tämä osio tulee käsitellä formaalina dokumentaationa. Sen on oltava tieteellisen tarkka ja jäsennelty.

Mahdolliset alihakemistot:

docs/research/methodologies/: Standardoidut pohjat ja ohjeet kokeilujen suorittamiseen. Tämä varmistaa, että tutkimus on johdonmukaista ja vertailukelpoista.

docs/research/llm-experiments/: Jokainen kokeilu saa oman kansionsa, joka sisältää yksityiskohtaisen dokumentaation hypoteesista, koeasetelmasta, käytetystä datasta, saaduista tuloksista ja johtopäätöksistä.

Tämä rakenne varmistaa, että T&K-työ tuottaa kestävää ja hyödynnettävää immateriaaliomaisuutta yritykselle, eikä vain yksittäisiä tuloksia, jotka unohtuvat nopeasti. Se luo perustan, jonka päälle voidaan rakentaa tulevaa tutkimusta ja tuotekehitystä.

Perustamalla formaalin, docs-pohjaisen prosessin tutkimuksen dokumentointiin, nostamme T&K-toiminnan ad-hoc-kokeiluista kurinalaiseksi, tieteelliseksi käytännöksi. Tämä lisää todennäköisyyttä, että tutkimustulokset integroidaan onnistuneesti tuotantojärjestelmiin, koska ne on dokumentoitu samalla tarkkuudella ja laatuvaatimuksilla kuin järjestelmät itse. Kun toinen tiimi haluaa hyödyntää aiempaa LLM-kokeilua, he eivät löydä epämääräistä blogikirjoitusta, vaan formaalin dokumentin, jossa on selkeät osiot metodologiasta ja tuloksista. Tämä tekee tutkimuksesta luotettavampaa ja helpommin operationalisoitavaa, mikä on merkittävä kilpailuetu.

Osa VI: Julkaisu- ja Operatiivinen Putki
Tämä viimeinen osio esittää konseptuaalisen suunnitelman sivuston julkaisemiseksi ja ylläpitämiseksi. Automaatio on avainasemassa "docs-as-code" -strategian onnistumisessa.

6.1 Julkaisu GitHub Pagesin ja Actionsin Avulla

Käytämme hosting-alustana GitHub Pagesia, koska se on ilmainen, syvästi integroitu GitHubiin ja ihanteellinen staattisille sivustoille. Julkaisuprosessi automatisoidaan täysin käyttämällä GitHub Actions -työnkulkuja.   

Konseptuaalinen CI/CD-työnkulku (.github/workflows/deploy.yml):

Käynnistin (Trigger): Työnkulku käynnistyy automaattisesti jokaisesta push-tapahtumasta tai yhdistämisestä (merge) main-haaraan.

Koodin Nouto (Checkout): Toiminto lataa monorepon lähdekoodin.

Node.js-ympäristön Asetus: Määritetään oikea Node.js-versio.

Riippuvuuksien Asennus: Suoritetaan yarn install tai npm install docs-website-hakemistossa.

Sivuston Rakentaminen (Build): Suoritetaan komento npm run build. Tämä kääntää Docusaurus-sivuston staattisiksi HTML-, CSS- ja JS-tiedostoiksi    

build-hakemistoon.

Julkaisu (Deploy): Erillinen GitHub Action -toiminto (esim. peaceiris/actions-gh-pages) ottaa build-hakemiston sisällön ja työntää sen erilliseen gh-pages-haaraan samassa repositoriossa.   
Repositorion Konfigurointi:

Repositorion asetuksissa GitHub Pages -toiminto konfiguroidaan palvelemaan sisältöä gh-pages-haarasta.   
GitHub Actions -työnkululle annetaan tarvittavat kirjoitusoikeudet repositorioon, jotta se voi päivittää gh-pages-haaraa.   
6.2 Docusaurus-konfiguraation Olennaiset Asetukset

docusaurus.config.js-tiedosto on konfiguroitava oikein GitHub Pages -julkaisua varten. Virheelliset asetukset ovat yleinen syy epäonnistuneille julkaisuille.   

Tärkeimmät Kentät:

organizationName: GitHub-organisaation tai käyttäjän nimi.

projectName: Monorepo-repositorion nimi.

baseUrl: Tämä on asetettava arvoon /<projectName>/. Tämä on kriittisen tärkeä asetus, joka varmistaa, että CSS- ja JS-tiedostot latautuvat oikein, kun sivusto ei ole domainin juurella.

trailingSlash: Usein asetetaan arvoon false yhteensopivuuden parantamiseksi GitHub Pagesin reitityksen kanssa.

Täysin automatisoitu CI/CD-putki on koko "docs-as-code" -strategian selkäranka. Se tekee oikeasta tavasta toimia (dokumentaation päivittäminen) myös helpoimman tavan. Poistamalla kaikki manuaaliset julkaisuvaiheet vähennämme kitkaa ja kannustamme aktiivisesti osallistumaan. Kun kehittäjän tarvitsee vain yhdistää hyväksytty pull request ja muutokset ovat hetken kuluttua livenä, kynnys pientenkin parannusten tekemiseen madaltuu dramaattisesti.

Tämä helppokäyttöisyys on voimakas psykologinen ajuri. Se edistää pienten, inkrementaalisten päivitysten kulttuuria, mikä on avain dokumentaation pitämiseen tarkkana ja ajantasaisena. Tämä luo itseään vahvistavan kehän: koska dokumentaatiota on helppo päivittää, useammat ihmiset päivittävät sitä. Koska sitä päivitetään usein, se on luotettavampaa. Koska se on luotettavaa, useammat ihmiset käyttävät sitä ja osallistuvat sen kehittämiseen. CI/CD-putki ei siis ole vain tekninen toteutusyksityiskohta; se on dokumentaatiokulttuurin moottori.

Johtopäätökset ja Suositukset
Tämä strateginen suunnitelma esittää kattavan arkkitehtuurin "Softa 2025" -hankkeen yhtenäiselle tietämyskeskukselle. Hyödyntämällä Docusaurus-alustaa ja "docs-as-code" -filosofiaa, voimme rakentaa järjestelmän, joka ei ainoastaan ratkaise monimutkaisen monorepo-ympäristön haasteita, vaan myös muuttaa dokumentaation strategiseksi voimavaraksi, joka edistää laatua, tuottavuutta ja yhtenäistä insinöörikulttuuria.

Keskeiset suositukset ovat:

Sitoutuminen "Docs-as-Code" -kulttuuriin: Tekninen toteutus on vain osa ratkaisua. Onnistuminen edellyttää koko organisaation sitoutumista periaatteeseen, että dokumentaatio on erottamaton osa ohjelmistokehitystä ja sen päivittäminen on jokaisen kehittäjän vastuulla.

Tiukka Informaatioarkkitehtuurin Noudattaminen: docs- ja blog-osioiden välinen selkeä ero on säilytettävä. Sisällön hallintamallin (Content Governance Matrix) tulee toimia ohjenuorana kaikelle sisällöntuotannolle.

Investointi Käyttäjäkokemukseen: Monisivupalkkinen navigaatio ja tehokas Algolia-haku ovat välttämättömiä. Niihin panostaminen maksaa itsensä takaisin parantuneena löydettävyytenä ja kehittäjien tuottavuutena.

Prosessien Integrointi: ADR-työnkulkujen, raportoinnin ja retrospektiivien integrointi Git-pohjaiseen prosessiin tekee hallinnasta läpinäkyvää ja tehokasta.

Täysi Automaatio: CI/CD-putken rakentaminen on ensimmäinen ja tärkein tekninen tehtävä. Se poistaa kitkan ja toimii moottorina, joka pitää tietämyskeskuksen elävänä ja relevanttina.

Noudattamalla tätä suunnitelmaa "Softa 2025" -hanke voi luoda paitsi maailmanluokan dokumentaatioalustan, myös kestävän tiedonhallinnan ekosysteemin, joka skaalautuu tulevaisuuden haasteisiin ja tukee organisaation kasvua ja innovaatiota.
