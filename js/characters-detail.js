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
};
