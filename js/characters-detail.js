// Profil lengkap & fun fact per karakter. Kunci = id karakter di CHARACTERS (content.js).
// Sumber: infobox & trivia Chainsaw Man Fandom Wiki (ditulis ulang), tinggi badan dari
// bagan resmi Chainsaw Man Anime Exhibition, peringkat dari polling popularitas resmi.
//
// Nilai profil boleh berupa:
//   "teks"                     → sama untuk kedua bahasa
//   { id: "...", en: "..." }   → beda per bahasa
//   { spoiler: true, id, en }  → disensor (blok hitam) sampai diklik
// Fun fact: { id, en } atau { id, en, spoiler: true }.

const UNKNOWN = { id: "Tidak diungkap", en: "Not revealed" };

const CHAR_DETAILS = {
  denji: {
    jp: "デンジ",
    profile: {
      age: { id: "16 tahun (awal cerita)", en: "16 (start of the story)" },
      born: { id: "1980 (tanggal tidak diungkap)", en: "1980 (exact date not revealed)" },
      height: "173 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 1 · Episode 1", en: "Chapter 1 · Episode 1" },
      vaJp: "Kikunosuke Toya",
      vaEn: "Ryan Colt Levy",
      contracts: { id: "Pochita (menjadi jantungnya)", en: "Pochita (as his heart)" },
      status: { spoiler: true, id: "Masih hidup", en: "Alive" },
    },
    facts: [
      { id: "Pada 2021, Tatsuki Fujimoto menyebut Denji sebagai karakter favoritnya di seri ini.", en: "In 2021, Tatsuki Fujimoto named Denji as his favorite character in the series." },
      { id: "Denji sempat muncul sebagai cameo di latar belakang My Hero Academia chapter 259. Di versi anime-nya, ia diganti karakter berkepala gergaji tangan — kemungkinan demi menghindari masalah hak cipta.", en: "Denji makes a background cameo in My Hero Academia chapter 259. The anime swapped him for a character with a handsaw head — likely to avoid copyright issues." },
      { id: "Sebelum menyatu dengan Pochita, Denji mengidap penyakit jantung turunan dari ibunya yang membuatnya sering batuk darah.", en: "Before merging with Pochita, Denji had a heart condition inherited from his mother that made him cough up blood." },
      { id: "Mimpinya ikut naik level: awalnya cuma ingin sarapan roti selai tiap pagi, lalu belakangan mendambakan steak.", en: "His dreams level up over time: at first he just wants toast with jam every morning, later he craves steak." },
      { id: "Peringkat polling popularitas resmi: ke-5, ke-4, lalu ke-4 lagi.", en: "Official popularity poll rankings: 5th, then 4th, then 4th again." },
    ],
  },

  pochita: {
    jp: "ポチタ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: { id: "Seukuran anjing kecil", en: "About the size of a small dog" },
      origin: { id: "Neraka", en: "Hell" },
      debut: { id: "Chapter 1 · Episode 1", en: "Chapter 1 · Episode 1" },
      vaJp: "Shiori Izawa",
      vaEn: "Lindsay Seidel",
      contracts: "Denji",
      status: { spoiler: true, id: "Dijuluki “Pahlawan Neraka” — sosok yang paling ditakuti para iblis", en: "Known as the “Hero of Hell” — the being devils fear most" },
    },
    facts: [
      { id: "Bentuk anjingnya sangat mirip gergaji mesin merek Makita yang berwarna oranye. Namanya diduga gabungan “Pochi” (nama anjing yang umum di Jepang) dan akhiran “-ta” dari Makita.", en: "His dog form closely resembles orange Makita-brand chainsaws. His name is thought to combine “Pochi” (a common Japanese dog name) with the “-ta” from Makita." },
      { id: "Kekuatannya bersumber dari rasa takut manusia terhadap gergaji mesin.", en: "His power comes from humanity's fear of chainsaws." },
      { id: "Fujimoto menyebut manga Abara karya Tsutomu Nihei sebagai salah satu inspirasi Chainsaw Man — dan protagonis Abara kebetulan juga bernama Denji.", en: "Fujimoto cited Tsutomu Nihei's manga Abara as an inspiration for Chainsaw Man — and Abara's protagonist happens to be named Denji too." },
      { id: "Konsisten banget: Pochita meraih peringkat ke-9 di ketiga polling popularitas resmi.", en: "Talk about consistent: Pochita placed 9th in all three official popularity polls." },
      { spoiler: true, id: "Wujud asli Pochita adalah Chainsaw Man hitam yang membuat iblis lain gemetar — dan diduga terinspirasi dari makhluk Black Gauna di Abara.", en: "Pochita's true form is a black Chainsaw Man that makes other devils tremble — likely inspired by the Black Gauna in Abara." },
    ],
  },

  power: {
    jp: "パワー",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "170 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 4 · Episode 2", en: "Chapter 4 · Episode 2" },
      vaJp: "Fairouz Ai",
      vaEn: "Sarah Wiedenheft",
      contracts: { id: "Denji (kontrak darah)", en: "Denji (blood contract)" },
      status: { spoiler: true, id: "Meninggal di akhir Part 1", en: "Dies near the end of Part 1" },
    },
    facts: [
      { id: "Power juara 1 di polling popularitas pertama dengan 35.268 suara.", en: "Power won the first popularity poll with 35,268 votes." },
      { id: "Kepribadiannya terinspirasi Walter Sobchak dari film The Big Lebowski — dan juga Eric Cartman dari South Park.", en: "Her personality was inspired by Walter Sobchak from The Big Lebowski — and by Eric Cartman from South Park." },
      { id: "Namanya diambil dari “Powers”, salah satu tingkatan malaikat dalam hierarki malaikat Kristen.", en: "Her name comes from “Powers”, one of the orders in the Christian angelic hierarchy." },
      { id: "Tulisan “76.1” di kausnya merujuk ke sebuah stasiun radio Jepang.", en: "The “76.1” on her shirt refers to a Japanese radio station." },
      { id: "Peran “partner Denji” awalnya direncanakan untuk Himeno, sebelum akhirnya diberikan ke Power.", en: "The “Denji's partner” role was originally planned for Himeno before it went to Power." },
      { id: "Sebagai Blood Fiend, kekuatannya bersumber dari rasa takut manusia terhadap darah.", en: "As the Blood Fiend, her power comes from humanity's fear of blood." },
    ],
  },

  aki: {
    jp: "早川アキ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "182 cm",
      origin: { id: "Hokkaido, Jepang", en: "Hokkaido, Japan" },
      debut: { id: "Chapter 3 · Episode 2", en: "Chapter 3 · Episode 2" },
      vaJp: "Shogo Sakata",
      vaEn: "Reagan Murdock",
      contracts: { id: "Iblis Rubah, Iblis Kutukan, Iblis Masa Depan", en: "Fox Devil, Curse Devil, Future Devil" },
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Aki juara 1 di polling popularitas kedua dengan 88.568 suara, dan mendapat bonus chapter satu halaman bersama Himeno.", en: "Aki won the second popularity poll with 88,568 votes and got a one-page bonus chapter with Himeno." },
      { id: "Tindikan di telinga Aki adalah ulah Himeno, yang terus memaksanya untuk ditindik.", en: "Aki's ear piercings came from Himeno, who kept insisting he get them." },
      { id: "Ide yang batal: Himeno awalnya akan menjadi adik perempuan Aki.", en: "A scrapped idea: Himeno was originally going to be Aki's younger sister." },
      { id: "Fujimoto membocorkan isi prank Denji & Power ke Aki sebelum arc Eternity Devil: mereka menaruh kotoran di hidungnya.", en: "Fujimoto revealed the prank Denji and Power pulled on Aki before the Eternity Devil arc: they put poop on his nose." },
      { spoiler: true, id: "Aki akhirnya punya total empat kontrak iblis — yang keempat dengan Makima, si Iblis Kendali. Jumlah itu menyamai Santa Claus sebagai yang terbanyak.", en: "Aki ends up with four devil contracts in total — the fourth with Makima, the Control Devil. That ties Santa Claus for the most." },
      { spoiler: true, id: "Aki kemudian berubah menjadi Gun Fiend dan harus dihadapi oleh Denji.", en: "Aki later becomes the Gun Fiend, and Denji has to face him." },
    ],
  },

  makima: {
    jp: "マキマ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "168 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 1 · Episode 1", en: "Chapter 1 · Episode 1" },
      vaJp: "Tomori Kusunoki",
      vaEn: "Suzie Yeung",
      contracts: { spoiler: true, id: "Banyak devil hunter, bahkan Perdana Menteri Jepang", en: "Many devil hunters — even Japan's Prime Minister" },
      status: { spoiler: true, id: "Kalah di akhir Part 1, lalu bereinkarnasi sebagai Nayuta", en: "Defeated at the end of Part 1, then reincarnated as Nayuta" },
    },
    facts: [
      { id: "Makima selalu berada di peringkat ke-2 di ketiga polling popularitas resmi.", en: "Makima placed 2nd in all three official popularity polls." },
      { id: "Di desain prototipenya, tinggi Makima direncanakan 173 cm.", en: "In her prototype design, Makima was planned to be 173 cm tall." },
      { id: "Rokok yang ia isap bermerek “hi-fight” — plesetan dari merek rokok Jepang “hi-lite”.", en: "She smokes “hi-fight” cigarettes — a parody of the Japanese brand “hi-lite”." },
      { id: "Makima adalah karakter pertama yang sosoknya sudah jelas di kepala Fujimoto — ia berasal dari cerita fantasi yang Fujimoto bayangkan sejak SMP.", en: "Makima was the first character Fujimoto had a clear picture of — she came from a fantasy story he imagined back in junior high." },
      { id: "Ia sebagian terinspirasi dari Benten di The Eccentric Family, dan kemungkinan juga Haruko dari FLCL.", en: "She was partly inspired by Benten from The Eccentric Family, and likely Haruko from FLCL." },
      { id: "Menurut Fujimoto, kalau suku kata “ki” dibuang dari “Makima”, tersisa “Mama” — cocok dengan Denji yang sejak kecil tak punya sosok ibu.", en: "According to Fujimoto, removing the “ki” from “Makima” leaves “Mama” — fitting for Denji, who grew up without a mother." },
      { spoiler: true, id: "Fujimoto menjelaskan Makima sebenarnya tidak pernah benar-benar merokok — ia hanya meniru manusia, sama seperti caranya mempelajari emosi lewat menonton film.", en: "Fujimoto explained that Makima never truly smoked — she only imitated humans, the same way she studied emotions by watching movies." },
    ],
  },

  kobeni: {
    jp: "東山コベニ",
    profile: {
      age: { id: "20 tahun", en: "20" },
      born: UNKNOWN,
      height: "155 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 10 · Episode 4", en: "Chapter 10 · Episode 4" },
      vaJp: "Karin Takahashi",
      vaEn: "Bryn Apprill",
      contracts: { id: "Iblis yang tidak diungkap", en: "An unrevealed devil" },
      status: { spoiler: true, id: "Masih hidup", en: "Alive" },
    },
    facts: [
      { id: "Keluarganya besar: Kobeni punya delapan saudara perempuan, seorang kakak laki-laki, dan seorang adik laki-laki.", en: "She comes from a big family: eight sisters, an older brother, and a younger brother." },
      { id: "Tahi lalat Kobeni sama persis dengan milik Togata, karakter dari Fire Punch — manga Fujimoto sebelumnya.", en: "Kobeni has the exact same moles as Togata from Fire Punch, Fujimoto's previous manga." },
      { id: "Peringkat polling popularitas resmi: ke-8, ke-10, lalu ke-13.", en: "Official popularity poll rankings: 8th, 10th, then 13th." },
      { spoiler: true, id: "Kobeni awalnya ditakdirkan mati menggantikan Angel Devil. Fujimoto bertanya pada editornya siapa yang sebaiknya mati; editornya memilih Kobeni — lalu Fujimoto justru melakukan kebalikannya.", en: "Kobeni was originally meant to die instead of the Angel Devil. Fujimoto asked his editor who should die; the editor picked Kobeni — so Fujimoto did the opposite." },
      { spoiler: true, id: "Di Part 2, Kobeni sudah keluar dari Public Safety dan sempat bekerja sebagai pelayan restoran burger.", en: "In Part 2, Kobeni has quit Public Safety and works for a while as a burger restaurant waitress." },
    ],
  },

  himeno: {
    jp: "姫野",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "175 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 10 · Episode 4", en: "Chapter 10 · Episode 4" },
      vaJp: "Mariya Ise",
      vaEn: "Katelyn Barr",
      contracts: { id: "Iblis Hantu", en: "Ghost Devil" },
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Rencana awalnya, Himeno adalah adik Aki sekaligus partner Denji — peran yang kemudian diberikan ke Power.", en: "Originally, Himeno was going to be Aki's sister and Denji's partner — a role that later went to Power." },
      { id: "Ia salah satu dari sedikit karakter yang namanya ditulis dengan kanji (姫野), sementara kebanyakan karakter lain memakai katakana.", en: "She's one of the few characters whose name is written in kanji (姫野), while most others use katakana." },
      { id: "Denji menjulukinya “Wanita Muntah” — gara-gara ciuman pertama Denji yang berakhir dengan Himeno muntah di mulutnya.", en: "Denji nicknames her “Barf Woman” — because his first kiss ended with a drunk Himeno throwing up in his mouth." },
      { id: "Dialah yang memaksa Aki menindik telinganya.", en: "She's the one who pushed Aki into getting his ears pierced." },
      { spoiler: true, id: "Fujimoto mengaku awalnya mengira Himeno akan hidup jauh lebih lama di cerita.", en: "Fujimoto admitted he originally expected Himeno to survive much longer in the story." },
    ],
  },

  kishibe: {
    jp: "岸辺",
    profile: {
      age: { id: "50 tahun lebih", en: "50+" },
      born: UNKNOWN,
      height: { id: "194 cm — tertinggi di daftar ini", en: "194 cm — tallest on this list" },
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 29 · Episode 10", en: "Chapter 29 · Episode 10" },
      vaJp: "Kenjiro Tsuda",
      vaEn: "Jason Douglas",
      contracts: { id: "Iblis Cakar, Iblis Pisau, Iblis Jarum", en: "Claw Devil, Knife Devil, Needle Devil" },
      status: { spoiler: true, id: "Masih hidup", en: "Alive" },
    },
    facts: [
      { id: "Menurut bagan tinggi resmi dari pameran anime, Kishibe setinggi 194 cm — menjulang di atas semua anggota Divisi 4.", en: "According to the official anime exhibition height chart, Kishibe stands 194 cm — towering over everyone in Division 4." },
      { id: "Julukannya “Mad Dog Kishibe”.", en: "His nickname is “Mad Dog Kishibe”." },
      { id: "Sebelum memimpin Divisi Khusus 4, ia bertugas di Divisi Khusus 1 Tokyo.", en: "Before captaining Special Division 4, he served in Tokyo Special Division 1." },
      { id: "Ia sudah muncul lebih dulu lewat kilas balik di chapter 14 (episode 5), jauh sebelum debut aslinya.", en: "He first shows up in a flashback in chapter 14 (episode 5), well before his proper debut." },
      { spoiler: true, id: "Diam-diam Kishibe memimpin tim rahasia untuk melawan Makima.", en: "Kishibe secretly leads a squad working against Makima." },
    ],
  },

  reze: {
    jp: "レゼ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { spoiler: true, id: "Uni Soviet", en: "Soviet Union" },
      debut: { id: "Chapter 40 · Episode 12", en: "Chapter 40 · Episode 12" },
      vaJp: "Reina Ueda",
      vaEn: "Alexis Tipton",
      contracts: { spoiler: true, id: "Hibrida Iblis Bom", en: "Bomb Devil hybrid" },
      status: { spoiler: true, id: "Muncul kembali di akhir Part 1 di bawah kendali Makima", en: "Returns late in Part 1 under Makima's control" },
    },
    facts: [
      { id: "Reze menang telak di polling popularitas ketiga dengan 205.775 suara — dan mendapat bonus chapter satu halaman bersama Denji.", en: "Reze won the third popularity poll by a landslide with 205,775 votes — earning a one-page bonus chapter with Denji." },
      { id: "Pada 2020 Fujimoto menyebut Reze sebagai karakter favoritnya, sebelum digeser Denji setahun kemudian.", en: "In 2020 Fujimoto called Reze his favorite character, before Denji took the spot a year later." },
      { id: "Nama “Reze” sudah ada sebelum Chainsaw Man: ia adalah heroine dari ide cerita Fujimoto berjudul “Ibuki”.", en: "The name “Reze” predates Chainsaw Man: she was the heroine of a story idea of Fujimoto's called “Ibuki”." },
      { id: "Fujimoto mengaku sering mengarang cerita tentang Reze di kepalanya setiap malam sebelum tidur.", en: "Fujimoto says he makes up stories about Reze in his head every night before he sleeps." },
      { spoiler: true, id: "Arc Reze terinspirasi film Jin-Roh: The Wolf Brigade, yang dibuka dengan seorang gadis melakukan pengeboman — mirip cara Reze mengaktifkan kekuatannya.", en: "The Reze arc was influenced by the film Jin-Roh: The Wolf Brigade, which opens with a girl carrying out a bombing — much like how Reze triggers her powers." },
      { spoiler: true, id: "Reze sebenarnya mata-mata Soviet yang dikirim untuk mengambil jantung Denji.", en: "Reze is actually a Soviet spy sent to take Denji's heart." },
    ],
  },

  asa: {
    jp: "三鷹アサ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 98 (awal Part 2)", en: "Chapter 98 (start of Part 2)" },
      vaJp: { id: "Belum ada (Part 2 belum dianimasikan)", en: "None yet (Part 2 isn't animated)" },
      vaEn: { id: "Belum ada", en: "None yet" },
      contracts: { id: "Berbagi tubuh dengan Yoru, Iblis Perang", en: "Shares her body with Yoru, the War Devil" },
      status: { spoiler: true, id: "Rumit — baca Part 2 sampai tamat", en: "Complicated — read Part 2 to the end" },
    },
    facts: [
      { id: "Permainan nama: “Asa” berarti pagi dan “Yoru” berarti malam. Kanji 鷹 (elang) di nama Mitaka juga muncul di “yotaka” — burung cabak, wujud yang dirasuki Yoru.", en: "Wordplay: “Asa” means morning and “Yoru” means night. The 鷹 (hawk) in Mitaka also appears in “yotaka” — the nightjar bird Yoru inhabits." },
      { id: "Debut Asa sengaja dibuat mirip Denji: sama-sama yatim piatu, dikhianati orang dekat, lalu dihidupkan kembali oleh iblis. Judul chapter 1 dan chapter 98 pun sejajar.", en: "Asa's debut deliberately mirrors Denji's: both orphans, betrayed by someone close, then revived by a devil. Even the titles of chapter 1 and chapter 98 parallel each other." },
      { id: "Saat Yoru mengambil alih tubuhnya, bekas luka di wajah Yoru ikut terlihat oleh orang lain.", en: "When Yoru takes control of her body, Yoru's facial scars become visible to others." },
      { id: "Asa langsung masuk 10 besar (peringkat ke-10) di polling popularitas ketiga.", en: "Asa jumped straight into the top 10 (10th place) in the third popularity poll." },
      { spoiler: true, id: "Asa pernah punya hewan peliharaan bernama Crambon, yang punya peran penting dalam masa lalunya.", en: "Asa once had a pet named Crambon, who plays an important part in her past." },
    ],
  },

  angel: {
    jp: "天使の悪魔",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "155 cm",
      origin: { id: "Sebuah desa terpencil", en: "A remote village" },
      debut: { id: "Chapter 34 · Episode 11", en: "Chapter 34 · Episode 11" },
      vaJp: "Maaya Uchida",
      vaEn: "Casey Mongillo",
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Peringkat polling popularitas resmi: ke-6, ke-7, lalu ke-6 lagi.", en: "Official popularity poll rankings: 6th, 7th, then 6th again." },
      { id: "Penampilannya meniru malaikat dari tingkatan paling rendah, seperti yang banyak dilukis di era Abad Pertengahan dan Renaisans. Ia juga mirip Lucifer dalam lukisan “The Fallen Angel” karya Alexandre Cabanel.", en: "His look is based on the lowest order of angels, as often painted in medieval and Renaissance art. He also resembles Lucifer in Alexandre Cabanel's painting “The Fallen Angel”." },
      { id: "Denji sempat menganggapnya cukup cantik untuk dijadikan pacar — sampai tahu Angel itu laki-laki.", en: "Denji briefly considered him girlfriend material — until he learned Angel is male." },
      { id: "Kekuatannya bersumber dari rasa takut manusia terhadap malaikat.", en: "His power comes from humanity's fear of angels." },
      { id: "Menurut Fujimoto, rasa es krim favorit Angel adalah karamel vanila.", en: "According to Fujimoto, Angel's favorite ice cream flavor is caramel vanilla." },
      { spoiler: true, id: "Nasib Angel ditentukan lewat “undian terbalik”: editor Fujimoto memilih Kobeni yang mati karena tak ingin Angel bernasib buruk — jadi Fujimoto justru mematikan Angel.", en: "Angel's fate came from a “reverse vote”: Fujimoto's editor chose Kobeni to die because he didn't want Angel to suffer — so Fujimoto killed Angel instead." },
    ],
  },

  beam: {
    jp: "ビーム",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "176 cm",
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 34 · Episode 11", en: "Chapter 34 · Episode 11" },
      vaJp: "Natsuki Hanae",
      vaEn: "Derick Snow",
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Peringkatnya naik di polling ketiga: ke-12, ke-12, lalu melonjak ke peringkat 7.", en: "He climbed in the third poll: 12th, 12th, then up to 7th." },
      { id: "Kekuatannya bersumber dari rasa takut manusia terhadap hiu.", en: "His power comes from humanity's fear of sharks." },
      { id: "Namanya berasal dari Kerubim, malaikat dari tingkatan tertinggi. Empat siripnya mirip empat sayap kerub, dan sifatnya yang kekanak-kanakan cocok dengan gambaran kerub sebagai bayi bersayap.", en: "His name comes from the Cherubim, angels of the highest order. His four fins echo a cherub's four wings, and his childlike personality fits the popular image of cherubs as winged infants." },
      { id: "Bukan cuma Beam: nama Power, Galgali, Princi, dan Angel juga diambil dari tingkatan malaikat.", en: "It's not just Beam: Power, Galgali, Princi, and Angel are also named after orders of angels." },
      { spoiler: true, id: "Saat melawan Reze, Denji menunggangi Beam layaknya “hiu gergaji mesin” untuk mengejarnya.", en: "In the fight against Reze, Denji rides Beam like a “chainsaw shark” to chase her down." },
    ],
  },

  galgali: {
    jp: "ガルガリ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "178 cm",
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 34 · Episode 11", en: "Chapter 34 · Episode 11" },
      vaJp: "Yūya Uchida",
      vaEn: "Josh Bangle",
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Namanya dari Galgalim (Ofanim), roda-roda api bermata banyak dalam Perjanjian Lama — dan Galgali memang punya banyak mata saat maskernya dilepas.", en: "His name comes from the Galgalim (Ophanim), the many-eyed flaming wheels of the Old Testament — and Galgali does have many eyes under his mask." },
      { id: "Kata Jepang untuk “kekerasan” (暴力) lebih mengarah ke perkelahian fisik. Itu sebabnya ia mengaku kalah kelas dari Reze yang memakai bom.", en: "The Japanese word for “violence” (暴力) mostly means physical brawling. That's why he admits Reze, who uses bombs, completely outclasses him." },
      { id: "Tidak seperti kebanyakan fiend, ia menyimpan banyak ingatan dari jasad inangnya karena otaknya masih segar.", en: "Unlike most fiends, he kept many of his host's memories because the brain was still fresh." },
      { id: "Peringkat polling popularitas resmi: ke-15, ke-17, lalu ke-17 lagi.", en: "Official popularity poll rankings: 15th, 17th, then 17th again." },
    ],
  },

  princi: {
    jp: "プリンシ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "180 cm",
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 34 · Episode 11", en: "Chapter 34 · Episode 11" },
      vaJp: "Saori Gotō",
      vaEn: "Julie Shields",
      status: { spoiler: true, id: "Tidak diketahui", en: "Unknown" },
    },
    facts: [
      { id: "Kekuatannya bersumber dari arachnofobia — rasa takut pada laba-laba dan sejenisnya.", en: "Her power comes from arachnophobia — the fear of spiders and their kin." },
      { id: "Namanya dari Principalities, tingkatan malaikat yang bertugas membimbing bangsa dan institusi — pas dengan sosoknya sebagai bawahan patuh Makima.", en: "Her name comes from the Principalities, angels who guide nations and institutions — fitting for Makima's obedient subordinate." },
      { id: "Di beberapa terjemahan ia disebut “Prinz”, yang kemungkinan besar salah terjemah.", en: "Some translations call her “Prinz”, which is most likely a mistranslation." },
      { id: "Peringkat polling popularitas resmi: ke-27, ke-34, lalu ke-58.", en: "Official popularity poll rankings: 27th, 34th, then 58th." },
    ],
  },

  arai: {
    jp: "荒井ヒロカズ",
    profile: {
      age: { id: "22 tahun", en: "22" },
      born: UNKNOWN,
      height: "178 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 10", en: "Chapter 10" },
      vaJp: "Taku Yashiro",
      vaEn: "Jarrod Greene",
      contracts: { id: "Iblis Rubah", en: "Fox Devil" },
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Hobinya menulis haiku.", en: "His hobby is writing haiku." },
      { id: "Ia direkrut bersamaan dengan Kobeni sebagai anggota baru pasukan khusus Makima.", en: "He joined Makima's special squad as a new recruit alongside Kobeni." },
      { id: "Peringkat polling popularitas resmi: ke-35, ke-47, lalu ke-46.", en: "Official popularity poll rankings: 35th, 47th, then 46th." },
    ],
  },

  akane: {
    jp: "沢渡アカネ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "165 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 24 · Episode 8", en: "Chapter 24 · Episode 8" },
      vaJp: "Yō Taichi",
      vaEn: "Emi Lo",
      contracts: { id: "Iblis Ular", en: "Snake Devil" },
      status: { spoiler: true, id: "Meninggal di Part 1", en: "Dies in Part 1" },
    },
    facts: [
      { id: "Konsep awal yang dibagikan Fujimoto menunjukkan Akane kemungkinan berasal dari desain awal Power — lengkap dengan ular yang melilitnya.", en: "Concept art Fujimoto shared suggests Akane may have come from an early design of Power — complete with a snake coiled around her." },
      { id: "Kishibe menjulukinya “Gadis Ular”.", en: "Kishibe nicknames her “Snake Girl”." },
      { id: "Mata ularnya jelas melambangkan kontraknya, tapi tidak pernah dipastikan apakah itu nyata atau sekadar gaya gambar.", en: "Her snake eyes clearly symbolize her contract, but it's never confirmed whether they're literal or just a stylistic choice." },
      { id: "Peringkat polling popularitas resmi: ke-31, ke-37, lalu ke-50.", en: "Official popularity poll rankings: 31st, 37th, then 50th." },
    ],
  },

  katana: {
    jp: "サムライソード",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: "195 cm",
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 23 · Episode 8", en: "Chapter 23 · Episode 8" },
      vaJp: "Daiki Hamano",
      vaEn: "Jason Marnocha",
      status: { spoiler: true, id: "Masih hidup — muncul lagi di Part 2", en: "Alive — returns in Part 2" },
    },
    facts: [
      { id: "Nama aslinya tidak pernah diungkap. Denji menjulukinya “Pria Cambang”.", en: "His real name is never revealed. Denji calls him “Sideburns Man”." },
      { id: "Saat memakai serangan Sword-Draw Dash, posisinya meniru pendekar yang meraih pedang di pinggang: tangan kiri jadi katana, tangan kanan seolah menghunusnya.", en: "His Sword-Draw Dash mimics a swordsman reaching for a blade at the waist: his left arm is the katana, his right hand draws it." },
      { id: "Wujud hibridanya mirip Karl Ruprecht Kroenen dari Hellboy — bilah di lengan, mantel kulit hitam panjang, dan topi.", en: "His hybrid form resembles Karl Ruprecht Kroenen from Hellboy — forearm blades, a long black leather coat, and a hat." },
      { id: "Peringkat polling popularitas resmi: ke-25, ke-32, lalu ke-22.", en: "Official popularity poll rankings: 25th, 32nd, then 22nd." },
      { spoiler: true, id: "Di Part 2 ia diam-diam mengikuti kabar Asa sebagai “wajah” Gereja Chainsaw Man — sampai tahu tanggal rilis buku puisinya — tapi ngotot bukan penggemarnya.", en: "In Part 2 he secretly follows Asa as the Chainsaw Man Church's poster girl — even knowing when her poetry book goes on sale — yet insists he's not a fan." },
    ],
  },

  quanxi: {
    jp: "クァンシ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Tiongkok", en: "China" },
      debut: { id: "Chapter 54 (arc-nya diadaptasi di Assassins Arc)", en: "Chapter 54 (adapted in the Assassins Arc)" },
      contracts: { id: "Hibrida Iblis Busur", en: "Bow Devil hybrid" },
      status: { spoiler: true, id: "Masih hidup — bergabung dengan Public Safety di Part 2", en: "Alive — joins Public Safety in Part 2" },
    },
    facts: [
      { id: "Adegan Quanxi memenggal banyak lawan dalam sekejap adalah rujukan ke “Kirisuke and Johnny, The Slaying of 499”, yang juga disebut oleh Fujimoto.", en: "Quanxi's lightning-fast mass beheading references “Kirisuke and Johnny, The Slaying of 499”, a work Fujimoto has mentioned." },
      { id: "“Quanxi” sebenarnya romanisasi yang keliru. Versi Mandarin menulis namanya 光熙 (Guāngxī), yang berarti “cahaya” dan “cemerlang”.", en: "“Quanxi” is actually a mistaken romanization. The Mandarin edition writes her name 光熙 (Guāngxī), meaning “light” and “bright”." },
      { id: "Nama itu sangat langka: pernah dipakai sebagai nama era oleh Liu Bian, kaisar Tiongkok kuno, lebih dari seribu tahun lalu.", en: "The name is extremely rare: it was used as an era name by the ancient Chinese emperor Liu Bian, over a thousand years ago." },
      { id: "Julukan “Devil Hunter Pertama” mengisyaratkan bahwa hibrida menua sangat lambat — atau bahkan tidak menua sama sekali.", en: "Her title “the First Devil Hunter” hints that hybrids age extremely slowly — or not at all." },
      { id: "Ia datang ke Jepang bersama para fiend pendamping yang juga kekasih-kekasihnya.", en: "She comes to Japan with fiend companions who are also her girlfriends." },
      { id: "Peringkat polling popularitas resmi: ke-14, ke-11, lalu ke-14.", en: "Official popularity poll rankings: 14th, 11th, then 14th." },
    ],
  },

  santa: {
    jp: "サンタクロース",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Jerman (mungkin kedok)", en: "Germany (possibly a cover)" },
      debut: { id: "Chapter 54 (arc-nya diadaptasi di Assassins Arc)", en: "Chapter 54 (adapted in the Assassins Arc)" },
      contracts: { spoiler: true, id: "Iblis Boneka, Iblis Kutukan, Iblis Neraka, Iblis Kegelapan", en: "Doll Devil, Curse Devil, Hell Devil, Darkness Devil" },
      status: { spoiler: true, id: "Tak berdaya — pikirannya rusak", en: "Incapacitated — mind broken" },
    },
    facts: [
      { id: "Fujimoto kemungkinan memberi Santa Claus banyak tahi lalat di wajah karena menurutnya makin banyak tahi lalat, makin bagus tampang karakternya.", en: "Fujimoto likely gave Santa Claus lots of facial moles because he thinks the more moles a character has, the better they look." },
      { id: "Santa Claus adalah karakter kedua yang terlihat berubah ke wujud iblis — setelah para yakuza di awal cerita.", en: "Santa Claus is the second character shown undergoing a devil transformation — after the yakuza at the very start." },
      { id: "Peringkat polling popularitas resmi: ke-16, ke-24, lalu ke-45.", en: "Official popularity poll rankings: 16th, 24th, then 45th." },
      { spoiler: true, id: "“Santa Claus” sebenarnya jaringan boneka manusia di seluruh dunia yang dikendalikan satu pikiran lewat Iblis Boneka.", en: "“Santa Claus” is actually a worldwide network of human dolls controlled by one mind through the Doll Devil." },
      { spoiler: true, id: "Dengan empat kontrak iblis, Santa Claus menyamai Aki sebagai pemilik kontrak terbanyak.", en: "With four devil contracts, Santa Claus ties Aki for the most contracts." },
    ],
  },

  yoshida: {
    jp: "吉田ヒロフミ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 55", en: "Chapter 55" },
      contracts: { id: "Iblis Gurita", en: "Octopus Devil" },
      status: { spoiler: true, id: "Meninggal di Part 2", en: "Dies in Part 2" },
    },
    facts: [
      { id: "Peringkat polling popularitas resmi: ke-10, ke-6, lalu ke-8 — jauh lebih tinggi dari dugaan Fujimoto sendiri.", en: "Official popularity poll rankings: 10th, 6th, then 8th — far higher than Fujimoto himself expected." },
      { id: "Fujimoto mengaku bingung dengan popularitas Yoshida, dan baru tahu soal itu dari asistennya.", en: "Fujimoto admitted he was puzzled by Yoshida's popularity, and only found out about it from his assistant." },
      { id: "Ia karakter pertama selain Denji yang dikonfirmasi muncul di Part 2 — bahkan sebelum Asa.", en: "He was the first character besides Denji confirmed to appear in Part 2 — even before Asa." },
      { id: "Ia salah satu dari sedikit devil hunter swasta yang kemudian bergabung dengan Public Safety.", en: "He's one of the few private devil hunters who later joined Public Safety." },
      { spoiler: true, id: "Editor Fujimoto pernah menerima pesan penggemar yang meminta Yoshida jangan terlalu aktif agar tidak cepat mati. Ternyata ia memang tewas di chapter 213.", en: "Fujimoto's editor once got a fan message asking that Yoshida not be too active so he wouldn't die soon. He did end up dying in chapter 213." },
    ],
  },

  meowy: {
    jp: "ニャーコ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: { id: "Kucing", en: "Cat-sized" },
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 7 · Episode 3", en: "Chapter 7 · Episode 3" },
      status: { spoiler: true, id: "Mati di alur asli, hidup di timeline baru", en: "Dies in the original timeline, alive in the new one" },
    },
    facts: [
      { id: "Nama aslinya dalam bahasa Jepang adalah Nyāko (ニャーコ), dari “nyā” — bunyi “meong”.", en: "Its Japanese name is Nyāko (ニャーコ), from “nyā” — the sound of a meow." },
      { id: "Kucing ini lebih populer dari banyak karakter manusia: peringkat ke-23, ke-19, lalu ke-20 di polling resmi.", en: "This cat outranks many human characters: 23rd, 19th, then 20th in the official polls." },
      { spoiler: true, id: "Setelah Power tiada, Meowy dirawat oleh Denji dan Nayuta.", en: "After Power is gone, Meowy is cared for by Denji and Nayuta." },
    ],
  },

  nayuta: {
    jp: "ナユタ",
    profile: {
      age: UNKNOWN,
      born: "1997",
      height: UNKNOWN,
      origin: { id: "Tiongkok", en: "China" },
      debut: { id: "Chapter 97", en: "Chapter 97" },
      family: { id: "Kakak angkat: Denji", en: "Adoptive brother: Denji" },
      status: { spoiler: true, id: "Mati di alur asli, hidup di timeline baru", en: "Dies in the original timeline, alive in the new one" },
    },
    facts: [
      { id: "Nama dan desainnya diambil dari tokoh utama one-shot Fujimoto, “Nayuta of the Prophecy”. Di sana, kakak yang merawatnya bernama Kenji — mirip sekali dengan Denji.", en: "Her name and design come from the lead of Fujimoto's one-shot “Nayuta of the Prophecy”. There, the brother who cares for her is named Kenji — very close to Denji." },
      { id: "Tali kekang anjing-anjingnya diikat di sabuk, di posisi yang sama dengan rantai Makima.", en: "She ties her dogs' leashes to her belt, in the same spot where Makima wore her chains." },
      { id: "Denji dan Nayuta sama-sama memelihara tanaman — punya Denji tumbuh subur, punya Nayuta hampir mati.", en: "Denji and Nayuta both keep plants — Denji's thrives, Nayuta's is barely alive." },
      { id: "Keduanya awalnya puas dengan roti tawar biasa, lalu makin pemilih seiring waktu.", en: "Both start out happy with plain sliced bread, then get pickier over time." },
      { id: "Peringkat polling popularitas resmi: ke-18, lalu ke-11.", en: "Official popularity poll rankings: 18th, then 11th." },
      { spoiler: true, id: "Saat Barem meneriakkan bahwa Nayuta adalah penyihir yang akan menjerumuskan dunia ke kegelapan, itu rujukan langsung ke adegan massa yang memburu Nayuta di one-shot aslinya.", en: "When Barem screams that Nayuta is a witch who will plunge the world into darkness, it directly references the mob hunting Nayuta in the original one-shot." },
    ],
  },

  yoru: {
    jp: "ヨル",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Neraka", en: "Hell" },
      debut: { id: "Chapter 98 (disebut di chapter 84)", en: "Chapter 98 (mentioned in chapter 84)" },
      contracts: { id: "Berbagi tubuh dengan Asa Mitaka", en: "Shares a body with Asa Mitaka" },
      family: { spoiler: true, id: "Saudari dari Iblis Kematian, Iblis Kelaparan, dan Iblis Kendali (Makima/Nayuta)", en: "Sister of the Death Devil, Famine Devil, and Control Devil (Makima/Nayuta)" },
      status: { spoiler: true, id: "Tidak diketahui", en: "Unknown" },
    },
    facts: [
      { id: "Tubuh pertamanya adalah burung cabak (nightjar) — burung yang juga jadi tokoh cerita pendek Kenji Miyazawa, “The Nighthawk Star”, tentang burung yang merasa bersalah karena membunuh serangga demi bertahan hidup.", en: "Her first body was a nightjar — the bird from Kenji Miyazawa's short story “The Nighthawk Star”, about a bird guilty over killing insects to survive." },
      { id: "Permainan kata “war hawk”: burung pemangsa melambangkan perang, dan nama Mitaka mengandung kanji 鷹 (elang). Asa dan Yoru secara harfiah adalah “elang perang”.", en: "A “war hawk” pun: birds of prey symbolize war, and Mitaka contains the kanji 鷹 (hawk). Asa and Yoru are literally a “war hawk”." },
      { id: "Kegemarannya membuat pedang mungkin merujuk ke Penunggang Kuda Perang dalam Kitab Wahyu, yang digambarkan membawa pedang.", en: "Her love of making swords may reference the Horseman of War in the Book of Revelation, who carries a sword." },
      { id: "Ia satu-satunya iblis yang terlihat merasuki dua tubuh sebagai fiend, dan satu-satunya yang merasuki hewan.", en: "She's the only devil shown possessing two bodies as a fiend, and the only one to possess an animal." },
      { id: "Bekas luka di wajahnya terlihat oleh orang lain setiap kali ia mengambil alih tubuh Asa.", en: "Her facial scars become visible to others whenever she takes over Asa's body." },
      { id: "Peringkat polling popularitas ketiga: ke-16.", en: "Third popularity poll ranking: 16th." },
      { spoiler: true, id: "Yoru menganggap Iblis Senjata Api dan Iblis Tank sebagai “anak-anaknya”.", en: "Yoru considers the Gun Devil and the Tank Devil her “children”." },
    ],
  },

  fami: {
    jp: "キガ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 108 (disebut di chapter 84)", en: "Chapter 108 (mentioned in chapter 84)" },
      family: { spoiler: true, id: "Saudari dari Iblis Kematian, Yoru, dan Iblis Kendali", en: "Sister of the Death Devil, Yoru, and the Control Devil" },
      status: { spoiler: true, id: "Masih hidup", en: "Alive" },
    },
    facts: [
      { id: "Nama “Fami” hanya dipakai di terjemahan Inggris dan Jerman. Nama aslinya キガ (Kiga), artinya “kelaparan”.", en: "The name “Fami” is only used in the English and German translations. Her original name is キガ (Kiga), meaning “famine”." },
      { id: "Antingnya berbentuk timbangan — rujukan ke Penunggang Kuda Kelaparan dalam Kitab Wahyu yang membawa timbangan untuk menakar makanan.", en: "Her earrings are shaped like scales — a nod to the Horseman of Famine in Revelation, who carries scales for weighing food." },
      { id: "Kepalanya hampir selalu miring ke kiri, seperti timbangan yang tidak seimbang.", en: "Her head is almost always tilted to the left, like an unbalanced scale." },
      { id: "Seperti Santa Claus, ia diberi banyak tahi lalat — karena Fujimoto merasa itu membuat karakter makin menarik.", en: "Like Santa Claus, she has lots of moles — because Fujimoto feels they make a character look better." },
      { id: "Kekuatannya bersumber dari rasa takut manusia akan kelaparan.", en: "Her power comes from humanity's fear of starvation." },
    ],
  },

  yuko: {
    jp: "ユウコ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Chapter 99", en: "Chapter 99" },
      status: { spoiler: true, id: "Meninggal di arc Justice Devil", en: "Dies in the Justice Devil arc" },
    },
    facts: [
      { id: "Yuko memanggil Asa “Chainsaw Woman” — dalam bahasa Jepang terdengar nyaris sama dengan “Sensō Woman” alias “Wanita Perang”.", en: "Yuko calls Asa “Chainsaw Woman” — which in Japanese sounds almost identical to “Sensō Woman”, or “War Woman”." },
      { id: "Peringkat polling popularitas ketiga: ke-54.", en: "Third popularity poll ranking: 54th." },
      { spoiler: true, id: "Yuko ternyata antagonis utama arc Justice Devil.", en: "Yuko turns out to be the main antagonist of the Justice Devil arc." },
      { spoiler: true, id: "Ia langsung mengenali Yoru dari bekas luka di wajah Asa.", en: "She instantly recognizes Yoru from the scars on Asa's face." },
    ],
  },

  haruka: {
    jp: "伊勢海ハルカ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Tidak diungkap", en: "Not revealed" },
      debut: { id: "Chapter 112", en: "Chapter 112" },
      status: { spoiler: true, id: "Masih hidup", en: "Alive" },
    },
    facts: [
      { id: "Ia memiliki setiap merchandise Chainsaw Man yang pernah ada.", en: "He owns every piece of Chainsaw Man merchandise in existence." },
      { id: "Ia pernah menjadi juara kedua kontes kuis Chainsaw Man.", en: "He once placed runner-up in a Chainsaw Man quiz contest." },
      { id: "Di polling popularitas ketiga ia hanya di peringkat ke-77 dengan 297 suara.", en: "In the third popularity poll he placed just 77th, with 297 votes." },
      { spoiler: true, id: "Ia sempat menjadi wajah publik Gereja Chainsaw Man — yang berujung ia dibenci di seluruh negeri.", en: "He briefly became the public face of the Chainsaw Man Church — which ended with him villainized nationwide." },
    ],
  },

  fumiko: {
    jp: "三船フミコ",
    profile: {
      age: { id: "22 tahun", en: "22" },
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Jepang", en: "Japan" },
      debut: { id: "Part 2", en: "Part 2" },
      status: { spoiler: true, id: "Rahasia — baca sendiri!", en: "A secret — read it yourself!" },
    },
    facts: [
      { id: "Fumiko seolah dikaitkan dengan angka 2: nama Fumiko bisa ditulis dengan kanji 二 (dua), ia berpose peace sign terbalik, berusia 22 tahun, dan kontraknya membuatnya bisa membuat duplikat diri.", en: "Fumiko seems tied to the number 2: her name can be written with the kanji 二 (two), she flashes an upside-down peace sign, she's 22, and her contract lets her duplicate herself." },
      { id: "Ia rekan kerja Yoshida di Divisi Khusus 7.", en: "She works alongside Yoshida in Special Division 7." },
      { id: "Peringkat polling popularitas ketiga: ke-37.", en: "Third popularity poll ranking: 37th." },
      { spoiler: true, id: "Di arc Aging Devil, dialah yang memulai rencana Public Safety untuk mengorbankan 10.000 anak demi menjebak Iblis Penuaan.", en: "In the Aging Devil arc, she launches Public Safety's plan to sacrifice 10,000 children to trap the Aging Devil." },
    ],
  },

  barem: {
    jp: "バルエム・ブリッチ",
    profile: {
      age: UNKNOWN,
      born: UNKNOWN,
      height: UNKNOWN,
      origin: { id: "Tidak diketahui", en: "Unknown" },
      debut: { id: "Chapter 86", en: "Chapter 86" },
      contracts: { id: "Hibrida Iblis Pelontar Api", en: "Flamethrower Devil hybrid" },
      status: { spoiler: true, id: "Terhapus di alur asli", en: "Erased in the original timeline" },
    },
    facts: [
      { id: "Sebelum namanya diungkap, ia ikut polling popularitas kedua dengan sebutan “Manusia Senjata (Pelontar Api)”.", en: "Before his name was revealed, he entered the second popularity poll as “Weapon Human (Flamethrower)”." },
      { id: "Peringkat polling popularitas resmi: ke-54 (332 suara), lalu naik ke-40.", en: "Official popularity poll rankings: 54th (332 votes), then up to 40th." },
      { spoiler: true, id: "Tujuannya meneruskan warisan Makima dengan menghancurkan hidup Denji.", en: "His goal is to carry on Makima's legacy by ruining Denji's life." },
      { spoiler: true, id: "Dialah yang membunuh Yoshida di chapter 213.", en: "He's the one who kills Yoshida in chapter 213." },
    ],
  },
};
