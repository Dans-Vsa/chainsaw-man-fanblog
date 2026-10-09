// Bedah arc & filosofi Chainsaw Man.
// Pembagian arc & rentang chapter: halaman "Story Arcs" Chainsaw Man Fandom Wiki.
// "happened" = ringkasan kejadian (SPOILER), "meaning" = tafsiran tema — bukan pernyataan resmi Fujimoto.

const ARCS = [
  // ── Part 1 ─────────────────────────────────────
  {
    part: 1, name: "Introduction", chapters: "1–4",
    adapt: { id: "Anime S1 · episode 1–2", en: "Anime S1 · episodes 1–2" },
    hook: { id: "Denji, utang, dan seekor anjing bergergaji.", en: "Denji, a debt, and a dog with a chainsaw." },
    happened: {
      id: "Denji melunasi utang mendiang ayahnya ke yakuza dengan menjual organ tubuhnya dan berburu iblis bersama Pochita. Yakuza lalu mengkhianatinya dan menyerahkannya ke Iblis Zombie. Pochita menyatu dengan jasad Denji, Denji bangkit sebagai Chainsaw Man, dan Makima membawanya ke Public Safety — sebagai “anjing” peliharaannya.",
      en: "Denji pays off his late father's yakuza debt by selling his organs and hunting devils with Pochita. The yakuza betray him to the Zombie Devil. Pochita merges with Denji's corpse, Denji rises as Chainsaw Man, and Makima takes him into Public Safety — as her “dog”.",
    },
    meaning: {
      id: "Titik awalnya adalah kemiskinan yang diukur dengan bagian tubuh. Mimpi Denji — roti selai dan kasur — sangat kecil, dan justru itu yang menyakitkan: menunjukkan betapa rendah standar hidup orang yang dibuang masyarakat. Tawaran Makima membuka tema besar seri ini: bedanya “dipelihara” dengan benar-benar bebas.",
      en: "It starts with poverty measured in body parts. Denji's dream — toast with jam and a bed — is tiny, and that's what hurts: it shows how low the bar is for someone society threw away. Makima's offer opens the series' big theme: the difference between being “kept” and being truly free.",
    },
  },
  {
    part: 1, name: "Bat Devil", chapters: "5–12",
    adapt: { id: "Anime S1 · episode 2–5", en: "Anime S1 · episodes 2–5" },
    hook: { id: "Power minta tolong menyelamatkan kucingnya.", en: "Power asks for help saving her cat." },
    happened: {
      id: "Power menjanjikan Denji boleh menyentuh dadanya kalau ia menyelamatkan Meowy dari Iblis Kelelawar. Ternyata Power menjadikan Denji umpan. Denji tetap menang — tapi saat “hadiahnya” akhirnya ia dapatkan, rasanya jauh dari yang ia bayangkan.",
      en: "Power promises Denji he can touch her chest if he rescues Meowy from the Bat Devil. She uses him as bait instead. Denji wins anyway — but when he finally gets his “reward”, it's nothing like he imagined.",
    },
    meaning: {
      id: "Keinginan vs kenyataan: hal yang dikejar mati-matian ternyata hampa. Makima lalu “mengajari” Denji bahwa keintiman butuh saling memahami — pelajaran yang terdengar bijak, tapi datang dari orang yang sedang mengendalikannya. Di sisi lain, egoisme Power yang jujur jadi benih keluarga yang dibangun dari orang-orang rusak.",
      en: "Desire vs reality: the thing you chase hardest turns out hollow. Makima then “teaches” Denji that intimacy needs understanding — wise-sounding advice from someone who is controlling him. Meanwhile Power's honest selfishness plants the seed of a family built from broken people.",
    },
  },
  {
    part: 1, name: "Eternity Devil", chapters: "13–21",
    adapt: { id: "Anime S1 · episode 5–7", en: "Anime S1 · episodes 5–7" },
    hook: { id: "Terjebak di lantai 8 hotel yang tak berujung.", en: "Trapped on a hotel's endless 8th floor." },
    happened: {
      id: "Divisi 4 terkurung di lantai hotel yang berputar-putar. Iblis Keabadian hanya mau melepaskan mereka kalau Denji diserahkan, dan rekan-rekannya mulai berbalik melawan Denji. Denji akhirnya melompat ke dalam tubuh iblis itu dan menggergajinya selama tiga hari, bertahan hidup dengan meminum darahnya.",
      en: "Division 4 is trapped on a looping hotel floor. The Eternity Devil will only free them if they hand over Denji, and his teammates start turning on him. Denji finally dives into the devil and saws through it for three days, surviving by drinking its blood.",
    },
    meaning: {
      id: "Rasa takut membuat manusia saling mengorbankan. Kepahlawanan Denji tidak lahir dari idealisme, melainkan dari daya tahan dan motivasi yang konyol — dan cerita memperlakukannya dengan serius sekaligus absurd. Penutupnya (ciuman pertama yang berakhir muntah) jadi contoh khas Fujimoto: horor lalu lelucon dalam satu tarikan napas.",
      en: "Fear makes people sacrifice each other. Denji's heroism doesn't come from ideals but from sheer endurance and silly motives — and the story treats it as both serious and absurd. The ending (a first kiss that ends in vomit) is classic Fujimoto: horror, then a joke, in one breath.",
    },
  },
  {
    part: 1, name: "Katana Man", chapters: "22–38",
    adapt: { id: "Anime S1 · episode 8–12", en: "Anime S1 · episodes 8–12" },
    hook: { id: "Serangan mendadak menghancurkan Divisi 4.", en: "A sudden attack tears Division 4 apart." },
    happened: {
      id: "Katana Man dan Akane Sawatari menyergap Divisi 4; banyak Devil Hunter tewas, termasuk Himeno yang mengorbankan dirinya demi Aki. Kishibe melatih Denji dan Power dengan brutal. Katana Man akhirnya dikalahkan di pertarungan di atas kereta — dan “balas dendam” mereka adalah lomba menendang selangkangannya.",
      en: "Katana Man and Akane Sawatari ambush Division 4; many Devil Hunters die, including Himeno, who sacrifices herself for Aki. Kishibe trains Denji and Power brutally. Katana Man is finally beaten in a fight on a train — and their “revenge” is a contest to kick him in the groin.",
    },
    meaning: {
      id: "Arc tentang duka dan balas dendam. Aki memilih terus bertarung meski tahu harganya; Denji justru tidak peduli soal balas dendam — ia hanya ingin hidupnya sendiri. Akhir yang konyol itu mengejek trope balas dendam yang khidmat ala shōnen, sekaligus menunjukkan cara para karakter bertahan dari duka: tertawa.",
      en: "An arc about grief and revenge. Aki chooses to keep fighting despite the cost; Denji doesn't care about revenge — he just wants his own life. The ridiculous ending mocks shōnen's solemn revenge trope, while showing how these characters survive grief: by laughing.",
    },
  },
  {
    part: 1, name: "Bomb Girl", chapters: "39–52",
    adapt: { id: "Film Reze Arc (2025)", en: "Reze Arc movie (2025)" },
    hook: { id: "Gadis kafe yang Denji temui saat hujan.", en: "The café girl Denji meets in the rain." },
    happened: {
      id: "Reze mendekati Denji: berenang di sekolah malam-malam, festival musim panas, janji kabur bersama. Ternyata ia hibrida Iblis Bom yang dikirim Uni Soviet untuk mencuri jantung Denji. Setelah pertarungan besar, Denji tetap mengajaknya pergi bersama. Reze hampir datang ke kafe tempat Denji menunggu — tapi dihentikan Makima sebelum sampai.",
      en: "Reze gets close to Denji: a night swim at school, a summer festival, a promise to run away together. She turns out to be a Bomb Devil hybrid sent by the Soviet Union to steal his heart. After a huge battle, Denji still asks her to leave with him. Reze nearly makes it to the café where he's waiting — but Makima stops her before she arrives.",
    },
    meaning: {
      id: "Cinta pertama yang memperlakukan Denji sebagai manusia — tapi dibangun di atas kebohongan. Arc ini bertanya: bisakah perasaan tulus tumbuh dari sandiwara? Dongeng “tikus kota dan tikus desa” yang diceritakan Reze menggambarkan pilihan antara hidup sederhana yang aman atau hidup mewah yang berbahaya. Campur tangan Makima menegaskan: ia tidak membiarkan ikatan apa pun yang bukan buatannya.",
      en: "A first love that treats Denji as a person — built on a lie. The arc asks: can sincere feelings grow out of an act? Reze's “city mouse and country mouse” story frames a choice between a safe, simple life and a rich, dangerous one. Makima's intervention makes it clear: she allows no bond she didn't author.",
    },
  },
  {
    part: 1, name: "International Assassins", chapters: "53–70",
    adapt: { id: "Anime “Assassins Arc” (diumumkan Des 2025)", en: "“Assassins Arc” anime (announced Dec 2025)" },
    hook: { id: "Seluruh dunia memburu jantung Denji.", en: "The whole world hunts Denji's heart." },
    happened: {
      id: "Pembunuh bayaran dari berbagai negara — termasuk Quanxi dan Santa Claus — datang ke Jepang untuk merebut jantung Denji. Tim Kishibe melindunginya. Santa Claus menyeret mereka ke Neraka, tempat mereka berhadapan dengan Iblis Kegelapan, salah satu “ketakutan purba”. Di akhir arc, kekuatan Makima yang luar biasa mulai terlihat.",
      en: "Assassins from many countries — including Quanxi and Santa Claus — come to Japan for Denji's heart. Kishibe's team protects him. Santa Claus drags them into Hell, where they face the Darkness Devil, one of the “primal fears”. By the end, Makima's overwhelming power starts to show.",
    },
    meaning: {
      id: "Denji sebagai komoditas: dunia menginginkan jantungnya, bukan dirinya. Iblis Kegelapan menggambarkan ketakutan paling tua manusia — yang tak bisa dikalahkan, hanya dihindari. Dan makin terlihat bahwa “perlindungan” yang Denji terima selama ini juga punya pemilik.",
      en: "Denji as a commodity: the world wants his heart, not him. The Darkness Devil embodies humanity's oldest fear — one you can't beat, only escape. And it becomes clearer that the “protection” Denji gets also has an owner.",
    },
  },
  {
    part: 1, name: "Gun Devil", chapters: "71–79",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Iblis yang merenggut keluarga Aki akhirnya datang.", en: "The devil that took Aki's family finally arrives." },
    happened: {
      id: "Iblis Senjata Api menyerang dan Makima menghadapinya langsung. Aki — yang sudah membuat kontrak dengan Makima agar Denji dan Power tidak dikorbankan — justru berubah menjadi Gun Fiend. Denji terpaksa melawannya, sementara di kepalanya pertarungan itu terlihat seperti perang bola salju.",
      en: "The Gun Devil attacks and Makima confronts it head-on. Aki — who made a contract with Makima so Denji and Power wouldn't be sacrificed — becomes the Gun Fiend instead. Denji is forced to fight him, while in Denji's mind the fight looks like a snowball fight.",
    },
    meaning: {
      id: "Harga balas dendam dan keluarga yang dijadikan senjata. Aki menyerahkan dendamnya demi melindungi “keluarga barunya”, tapi tetap kehilangan semuanya. Adegan bola salju adalah pelarian pikiran dari tragedi — salah satu cara paling menyakitkan Fujimoto menggambarkan trauma.",
      en: "The cost of revenge, and family turned into a weapon. Aki gives up his vengeance to protect his “new family”, yet still loses everything. The snowball fight is the mind escaping tragedy — one of Fujimoto's most painful depictions of trauma.",
    },
  },
  {
    part: 1, name: "Control Devil", chapters: "80–97",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Denji yang hancur mencari pelukan Makima.", en: "A shattered Denji turns to Makima for comfort." },
    happened: {
      id: "Makima membunuh Power di depan Denji dan mengungkap bahwa ia sengaja memberi Denji kebahagiaan agar bisa merenggutnya — semua demi mengambil Pochita. Berkat darah Power, Denji bangkit lagi dan akhirnya mengalahkan Makima dengan cara tak terduga: memakannya. Iblis Kendali kemudian bereinkarnasi sebagai Nayuta, dan Denji memilih membesarkannya.",
      en: "Makima kills Power in front of Denji and reveals she gave him happiness only to tear it away — all to get Pochita. Thanks to Power's blood, Denji gets back up and finally beats Makima in an unthinkable way: by eating her. The Control Devil is reborn as Nayuta, and Denji chooses to raise her.",
    },
    meaning: {
      id: "Inti Part 1: kendali vs cinta. Makima mendambakan hubungan setara tapi hanya mengenal dominasi. Denji memutus lingkaran itu dengan memilih membesarkan Nayuta sebagai manusia — dengan aturan, makanan, dan kasih sayang — bukan sebagai peliharaan. Dari “anjing” Makima, Denji berubah menjadi orang yang memberi rumah.",
      en: "The heart of Part 1: control vs love. Makima longs for an equal relationship but only knows domination. Denji breaks the cycle by raising Nayuta as a person — with rules, food, and affection — not as a pet. Makima's “dog” becomes someone who gives a home.",
    },
  },

  // ── Part 2 ─────────────────────────────────────
  {
    part: 2, name: "Justice Devil", chapters: "98–111",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Siswi penyendiri dan seekor ayam bernama Bucky.", en: "A loner student and a chicken named Bucky." },
    happened: {
      id: "Asa Mitaka tanpa sengaja membunuh Bucky, Iblis Ayam peliharaan kelasnya, lalu dibunuh ketua kelas yang ternyata punya kontrak dengan Iblis Keadilan. Yoru, Iblis Perang, menghidupkan Asa kembali dan berbagi tubuh dengannya — dengan satu tujuan: membunuh Chainsaw Man. Persahabatan baru Asa pun berakhir tragis.",
      en: "Asa Mitaka accidentally kills Bucky, her class's pet Chicken Devil, and is then killed by her class president, who has a contract with the Justice Devil. Yoru, the War Devil, revives Asa and shares her body — with one goal: kill Chainsaw Man. Asa's new friendship ends in tragedy.",
    },
    meaning: {
      id: "Kesepian dan penghakiman sosial. “Keadilan” di sini adalah tekanan kelompok yang bisa berubah jadi kekejaman. Asa membenci dirinya sendiri, ingin terhubung dengan orang lain, tapi takut — dan cerita menunjukkan bahwa koneksi memang selalu berisiko.",
      en: "Loneliness and social judgment. “Justice” here is group pressure that can turn cruel. Asa hates herself, wants to connect, yet is afraid — and the story shows connection is always a risk.",
    },
  },
  {
    part: 2, name: "Dating Denji", chapters: "112–120",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Agar kuat, Asa harus mengorbankan sesuatu yang ia sayangi.", en: "To get stronger, Asa must sacrifice something she cares about." },
    happened: {
      id: "Yoru bisa mengubah hal yang Asa sayangi menjadi senjata, jadi Asa berencana membuat dirinya menyukai Denji lalu “mengubahnya”. Kencan di akuarium berantakan, lalu Iblis Kelaparan (Fami) muncul dan mengurung mereka — mereka baru bisa keluar kalau Asa berhasil mengubah Denji menjadi senjata.",
      en: "Yoru can turn things Asa cares about into weapons, so Asa plans to grow fond of Denji and then “convert” him. Their aquarium date is a mess, and then the Famine Devil (Fami) shows up and traps them — they can only leave once Asa turns Denji into a weapon.",
    },
    meaning: {
      id: "Cinta yang dijadikan senjata: semakin kamu menyayangi sesuatu, semakin besar kekuatan — dan kehilangan — yang dihasilkannya. Sindiran halus terhadap hubungan yang dijalani demi manfaat, bukan demi orangnya.",
      en: "Love turned into a weapon: the more you care, the greater the power — and the loss. A sly jab at relationships pursued for usefulness rather than for the person.",
    },
  },
  {
    part: 2, name: "Falling Devil", chapters: "121–131",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Sebuah “ketakutan purba” turun ke bumi.", en: "A “primal fear” descends to Earth." },
    happened: {
      id: "Iblis Jatuh, salah satu ketakutan purba, datang mengincar Yoru. Kekuatannya membuat orang-orang “jatuh” — termasuk menyeret Asa kembali ke kenangan paling menyakitkan di masa lalunya. Chainsaw Man datang menolong.",
      en: "The Falling Devil, one of the primal fears, comes after Yoru. Its power makes people “fall” — including dragging Asa back into the most painful memories of her past. Chainsaw Man comes to the rescue.",
    },
    meaning: {
      id: "Keputusasaan digambarkan sebagai gravitasi: masa lalu menarik orang ke bawah. Arc ini menyiratkan bahwa bangkit dari titik terendah sering kali butuh tangan orang lain.",
      en: "Despair is drawn as gravity: the past pulls people down. The arc suggests that getting up from rock bottom often takes someone else's hand.",
    },
  },
  {
    part: 2, name: "Chainsaw Man Church", chapters: "132–155",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Chainsaw Man berubah menjadi agama.", en: "Chainsaw Man becomes a religion." },
    happened: {
      id: "Gereja Chainsaw Man berdiri, dipimpin diam-diam oleh Fami. Muncul Chainsaw Man palsu, Asa justru jadi terkenal, sementara Denji dilarang berubah demi keselamatan Nayuta. Di tengah kekacauan yang dirancang gereja, Denji kehilangan rumah, hewan peliharaannya, dan Nayuta.",
      en: "The Chainsaw Man Church is founded, secretly led by Fami. Fake Chainsaw Men appear, Asa becomes famous, and Denji is forbidden to transform for Nayuta's safety. Amid chaos orchestrated by the Church, Denji loses his home, his pets, and Nayuta.",
    },
    meaning: {
      id: "Ketenaran dan identitas. Denji terbelah antara ingin dikenal sebagai Chainsaw Man dan menjaga hidup normalnya. Arc ini menyorot bagaimana masyarakat memproduksi idola dan pahlawan — dan bagaimana citra bisa menelan orang aslinya.",
      en: "Fame and identity. Denji is torn between wanting recognition as Chainsaw Man and protecting his normal life. The arc looks at how society manufactures idols and heroes — and how the image can swallow the real person.",
    },
  },
  {
    part: 2, name: "Aging Devil", chapters: "156–190",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Denji di titik terendah hidupnya.", en: "Denji at the lowest point of his life." },
    happened: {
      id: "Denji ditahan dan dipotong-potong di pusat penahanan iblis, lalu diselamatkan Asa, Yoru, dan Fami. Mereka kemudian berhadapan dengan Iblis Penuaan. Saat Pochita mengambil alih tubuh Denji, Asa harus menghadapi Iblis Gergaji Mesin itu sendiri.",
      en: "Denji is detained and dismembered at a devil detention center, then rescued by Asa, Yoru, and Fami. They then face the Aging Devil. When Pochita takes over Denji's body, Asa has to face the Chainsaw Devil itself.",
    },
    meaning: {
      id: "Tubuh yang diperlakukan sebagai milik institusi — kembali ke awal cerita, saat Denji menjual organnya. Asa tumbuh dari gadis yang takut terhubung menjadi orang yang rela menyelamatkan orang lain.",
      en: "A body treated as an institution's property — echoing the start, when Denji sold his organs. Asa grows from a girl afraid of connection into someone willing to save another person.",
    },
  },
  {
    part: 2, name: "War Devil", chapters: "191–232",
    adapt: { id: "Belum dianimasikan", en: "Not yet animated" },
    hook: { id: "Iblis Kematian turun ke bumi.", en: "The Death Devil descends." },
    happened: {
      id: "Iblis Kematian datang dan dunia makin kacau. Di pertarungan terakhir, Denji dan Pochita menghapus konsep kematian — namun tanpa kematian, dunia justru jatuh ke dalam kekacauan. Pochita akhirnya mengorbankan diri dan menghapus Iblis Gergaji Mesin dari keberadaan, sehingga dunia ter-reset. Denji kembali ke awal hidupnya, kali ini tanpa Pochita. Seri ditutup di chapter 232, “Thank You, Chainsaw Man”.",
      en: "The Death Devil arrives and the world spirals into chaos. In the final battle, Denji and Pochita erase the concept of death — but without death, the world falls apart. Pochita ultimately sacrifices himself, erasing the Chainsaw Devil from existence and resetting the world. Denji is back at the start of his life, this time without Pochita. The series closes with chapter 232, “Thank You, Chainsaw Man”.",
    },
    meaning: {
      id: "Kematian sebagai bagian dari hidup yang tak boleh dihapus. Pengorbanan Pochita adalah bentuk cinta paling murni di seri ini — ia memberikan segalanya agar Denji bisa hidup “biasa”. Akhir yang pahit-manis dan sengaja tidak tuntas ini sesuai dengan yang Fujimoto inginkan: “rasa tertinggal” yang absurd.",
      en: "Death as a part of life that mustn't be erased. Pochita's sacrifice is the purest act of love in the series — giving everything so Denji can live an “ordinary” life. The bittersweet, deliberately unresolved ending matches what Fujimoto wanted: an absurd “aftertaste”.",
    },
  },
];

// Filosofi: pernyataan Fujimoto (bersumber) + tafsiran tema (pembacaan kritikus/pembaca).
const PHILOSOPHY = {
  said: [
    {
      id: "Ia mengaku punya tema yang ingin disampaikan, tapi sengaja membuat manganya agar tidak menyampaikan semuanya.",
      en: "He says there are themes he wants to convey, but he deliberately makes his manga so it doesn't convey everything.",
      src: "Da Vinci, 2021 (terjemahan penggemar)",
    },
    {
      id: "Ia menyukai “absurditas agung” film The Big Lebowski — yang membuatnya bertanya-tanya apakah semuanya sia-sia — dan ingin Chainsaw Man meninggalkan rasa yang sama pada pembacanya.",
      en: "He loved the “sublime absurdity” of The Big Lebowski — which left him wondering if it was all for nothing — and wants Chainsaw Man to leave readers with that same aftertaste.",
      src: "Da Vinci, 2021",
    },
    {
      id: "Banyak konsep sengaja dibiarkan samar dan terbuka agar bisa dikembangkan di Part 2.",
      en: "He left many concepts vague and open-ended on purpose so Part 2 could expand on them.",
      src: "Anime News Network, 2021",
    },
    {
      id: "Ia mempertahankan gaya pribadinya, tapi meminjam struktur cerita dan arketipe khas Shōnen Jump agar karyanya tidak tenggelam.",
      en: "He kept his personal style while borrowing Shōnen Jump's story structure and archetypes so his work wouldn't be overlooked.",
      src: "Anime News Network, 2021",
    },
    {
      id: "Film The Texas Chain Saw Massacre (1974) yang menginspirasinya membuat seri ini.",
      en: "The film The Texas Chain Saw Massacre (1974) inspired him to create the series.",
      src: "Real Sound, 2021",
    },
    {
      id: "Setelah Chainsaw Man tamat, ia mengerjakan manga baru: “cerita yang memandang kematian secara positif”.",
      en: "After Chainsaw Man ended, he's working on a new manga: “a story that takes a positive view of death”.",
      src: "Wawancara 2026 (via CBR)",
    },
  ],
  themes: [
    {
      title: { id: "Mimpi kecil di dunia yang kejam", en: "Small dreams in a cruel world" },
      text: {
        id: "Denji tidak ingin menyelamatkan dunia; ia cuma ingin makan enak, tidur di kasur, dan dicintai. Kritikus membandingkannya dengan kisah ala Dickens tentang kerasnya hidup kelas bawah — kebahagiaan “biasa” justru jadi kemewahan.",
        en: "Denji doesn't want to save the world; he wants good food, a bed, and to be loved. Critics compare it to a Dickensian tale of working-class hardship — where “ordinary” happiness is a luxury.",
      },
    },
    {
      title: { id: "Kendali vs kebebasan", en: "Control vs freedom" },
      text: {
        id: "Motif “anjing” muncul berulang: Denji sebagai anjing yakuza, lalu anjing Makima. Seri ini bertanya apa bedanya dirawat dengan dimiliki — dan apakah menyerahkan kendali hidup pada orang lain itu nyaman atau berbahaya.",
        en: "The “dog” motif keeps returning: Denji as the yakuza's dog, then Makima's. The series asks what separates being cared for from being owned — and whether handing over control of your life is comforting or dangerous.",
      },
    },
    {
      title: { id: "Ketakutan yang diberi wujud", en: "Fear given a body" },
      text: {
        id: "Kekuatan iblis datang dari rasa takut manusia. Artinya, monster di dunia ini adalah cerminan kecemasan kolektif kita — senjata api, kegelapan, kematian, bahkan penuaan.",
        en: "Devils draw power from human fear. That makes the monsters a mirror of our collective anxieties — guns, darkness, death, even aging.",
      },
    },
    {
      title: { id: "Keluarga yang dipilih", en: "Found family" },
      text: {
        id: "Denji, Power, dan Aki adalah orang-orang rusak yang tak punya siapa-siapa, tapi berhasil menjadi keluarga di sebuah apartemen sempit. Karena itulah kehilangan di cerita ini terasa begitu berat.",
        en: "Denji, Power, and Aki are broken people with no one, yet they become a family in a cramped apartment. That's why the losses in this story hit so hard.",
      },
    },
    {
      title: { id: "Makna di tengah nihilisme", en: "Meaning amid nihilism" },
      text: {
        id: "Di permukaan, ceritanya sinis, brutal, dan konyol. Tapi di bawahnya — seperti dicatat kritikus Anime News Network — ada perjuangan tulus untuk menemukan arti hidup.",
        en: "On the surface it's cynical, brutal, and silly. Underneath — as an Anime News Network critic noted — is a heartfelt struggle to find meaning.",
      },
    },
    {
      title: { id: "Kemanusiaan bagi yang terpinggirkan", en: "Humanity for the marginalized" },
      text: {
        id: "Para Devil Hunter diperlakukan sebagai barang sekali pakai oleh institusi. Kritikus membaca seri ini sebagai kritik terhadap dehumanisasi — dan pembelaan terhadap orang-orang yang dianggap tidak berharga.",
        en: "Devil Hunters are treated as disposable by institutions. Critics read the series as a critique of dehumanization — and a defense of people deemed worthless.",
      },
    },
    {
      title: { id: "Berdamai dengan kematian", en: "Making peace with death" },
      text: {
        id: "Di akhir cerita, dunia tanpa kematian justru kacau. Ditambah karya Fujimoto berikutnya yang “memandang kematian secara positif”, banyak pembaca melihat pesan bahwa kematian adalah bagian hidup yang memberi arti.",
        en: "By the end, a world without death falls into chaos. Together with Fujimoto's next work taking “a positive view of death”, many readers see a message that death is part of what gives life meaning.",
      },
      spoiler: true,
    },
  ],
};
