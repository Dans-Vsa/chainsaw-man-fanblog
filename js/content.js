// Karakter, linimasa, dan galeri.
// Gambar: taruh file di folder assets/img/... sesuai path `img`. Kalau file belum ada,
// situs otomatis menampilkan placeholder — jadi aman menambah data dulu, gambar belakangan.

// Jumlah semua karakter di ensiklopedia (28 unggulan + 143 dari characters-all.js)
const TOTAL_CHARACTERS = 171;

const CHARACTERS = [
  {
    id: "denji", part: 1, img: "assets/img/characters/denji.webp",
    name: "Denji",
    role: { id: "Protagonis · Chainsaw Man", en: "Protagonist · Chainsaw Man" },
    bio: {
      id: "Remaja yatim yang dulu terjerat utang yakuza. Setelah menyatu dengan Pochita, ia bisa berubah menjadi Chainsaw Man dan direkrut Public Safety.",
      en: "An orphaned teen once trapped by yakuza debt. After merging with Pochita, he can transform into Chainsaw Man and is recruited by Public Safety.",
    },
    ability: { id: "Gergaji mesin muncul dari kepala & lengan saat menarik tali di dadanya.", en: "Chainsaws burst from his head and arms when he pulls the cord in his chest." },
  },
  {
    id: "pochita", part: 1, img: "assets/img/characters/pochita.webp",
    name: "Pochita",
    role: { id: "Iblis Gergaji Mesin", en: "Chainsaw Devil" },
    bio: {
      id: "Iblis kecil mirip anjing yang menjadi sahabat pertama Denji, lalu menjadi jantungnya.",
      en: "A small, dog-like devil who was Denji's first friend — and later became his heart.",
    },
    ability: { id: "Gergaji mesin di kepalanya.", en: "The chainsaw on its head." },
  },
  {
    id: "power", part: 1, img: "assets/img/characters/power.webp",
    name: "Power",
    role: { id: "Blood Fiend", en: "Blood Fiend" },
    bio: {
      id: "Partner Denji yang berisik, sombong, dan suka berbohong — tapi sangat sayang pada kucingnya, Meowy.",
      en: "Denji's loud, arrogant, habitually lying partner — who absolutely adores her cat, Meowy.",
    },
    ability: { id: "Membentuk darah menjadi senjata.", en: "Shapes blood into weapons." },
  },
  {
    id: "aki", part: 1, img: "assets/img/characters/aki.webp",
    name: "Aki Hayakawa",
    role: { id: "Devil Hunter Senior", en: "Senior Devil Hunter" },
    bio: {
      id: "Devil Hunter serius yang ingin membalas dendam pada Iblis Senjata Api, yang merenggut keluarganya.",
      en: "A serious Devil Hunter seeking revenge on the Gun Devil, which took his family.",
    },
    ability: { id: "Kontrak dengan Iblis Rubah, Kutukan, dan Masa Depan.", en: "Contracts with the Fox, Curse, and Future Devils." },
  },
  {
    id: "makima", part: 1, img: "assets/img/characters/makima.webp", spoiler: true,
    name: "Makima",
    role: { id: "Kepala Divisi Khusus 4", en: "Head of Special Division 4" },
    bio: {
      id: "Atasan Denji yang tenang dan memikat. Di akhir Part 1 terungkap bahwa ia adalah Iblis Kendali.",
      en: "Denji's calm, captivating boss. Late in Part 1 she is revealed to be the Control Devil.",
    },
    ability: { id: "Mengendalikan makhluk yang ia anggap lebih rendah.", en: "Controls beings she considers beneath her." },
  },
  {
    id: "kobeni", part: 1, img: "assets/img/characters/kobeni.webp",
    name: "Kobeni Higashiyama",
    role: { id: "Devil Hunter", en: "Devil Hunter" },
    bio: {
      id: "Selalu panik dan ingin berhenti, tapi diam-diam punya refleks dan kelincahan luar biasa.",
      en: "Constantly panicking and wanting to quit, yet secretly blessed with incredible reflexes and agility.",
    },
    ability: { id: "Kecepatan dan kelincahan ekstrem.", en: "Extreme speed and agility." },
  },
  {
    id: "himeno", part: 1, img: "assets/img/characters/himeno.webp",
    name: "Himeno",
    role: { id: "Mentor Aki", en: "Aki's Mentor" },
    bio: {
      id: "Devil Hunter bertutup mata yang santai dan menjadi senior sekaligus pembimbing Aki.",
      en: "An easygoing, eyepatch-wearing Devil Hunter who serves as Aki's senior and mentor.",
    },
    ability: { id: "Kontrak dengan Iblis Hantu.", en: "Contract with the Ghost Devil." },
  },
  {
    id: "kishibe", part: 1, img: "assets/img/characters/kishibe.webp",
    name: "Kishibe",
    role: { id: "Devil Hunter Veteran", en: "Veteran Devil Hunter" },
    bio: {
      id: "Disebut-sebut sebagai Devil Hunter terkuat. Ia melatih Denji dan Power dengan cara yang brutal.",
      en: "Said to be the strongest Devil Hunter. He trains Denji and Power through brutal methods.",
    },
    ability: { id: "Pengalaman tempur bertahun-tahun & banyak kontrak iblis.", en: "Decades of combat experience and multiple devil contracts." },
  },
  {
    id: "reze", part: 1, img: "assets/img/characters/reze.webp", spoiler: true,
    name: "Reze",
    role: { id: "Hibrida Iblis Bom", en: "Bomb Devil Hybrid" },
    bio: {
      id: "Gadis kafe yang Denji temui saat hujan — ternyata hibrida Iblis Bom yang mengincar jantungnya.",
      en: "The café girl Denji meets in the rain — secretly a Bomb Devil hybrid after his heart.",
    },
    ability: { id: "Ledakan dari tubuhnya sendiri.", en: "Explosions from her own body." },
  },
  {
    id: "angel", part: 1, img: "assets/img/characters/angel.webp",
    name: "Angel Devil",
    role: { id: "Iblis Malaikat · Divisi 4", en: "Angel Devil · Division 4" },
    bio: {
      id: "Iblis bersayap yang malas dan pesimis, anggota Divisi Khusus 4 yang dipasangkan dengan Aki.",
      en: "A lazy, pessimistic winged devil in Special Division 4, partnered with Aki.",
    },
    ability: { id: "Sentuhannya menyerap sisa umur manusia, yang bisa ia ubah menjadi senjata.", en: "His touch absorbs human lifespans, which he can turn into weapons." },
  },
  {
    id: "beam", part: 1, img: "assets/img/characters/beam.webp",
    name: "Beam",
    role: { id: "Fiend Hiu · Divisi 4", en: "Shark Fiend · Division 4" },
    bio: {
      id: "Fiend hiu yang polos dan hiperaktif. Ia memuja Chainsaw Man dan memanggil Denji “Tuan Chainsaw”.",
      en: "An innocent, hyperactive shark fiend who worships Chainsaw Man and calls Denji “Lord Chainsaw”.",
    },
    ability: { id: "Berenang menembus tanah dan dinding seolah air; bisa berubah ke wujud hiu.", en: "Swims through ground and walls as if they were water; can shift into shark form." },
  },
  {
    id: "galgali", part: 1, img: "assets/img/characters/galgali.webp",
    name: "Galgali",
    role: { id: "Violence Fiend · Divisi 4", en: "Violence Fiend · Division 4" },
    bio: {
      id: "Fiend bermasker yang, meski mewakili “kekerasan”, justru tenang dan ramah.",
      en: "A masked fiend who, despite embodying “violence”, is calm and friendly.",
    },
    ability: { id: "Kekuatan fisik luar biasa, sengaja ditekan oleh masker beracun yang ia pakai.", en: "Immense physical strength, deliberately suppressed by the poison mask he wears." },
  },
  {
    id: "princi", part: 1, img: "assets/img/characters/princi.webp",
    name: "Princi",
    role: { id: "Iblis Laba-laba · Divisi 4", en: "Spider Devil · Division 4" },
    bio: {
      id: "Iblis Laba-laba yang menjadi bawahan setia Makima di Divisi Khusus 4.",
      en: "The Spider Devil, a loyal subordinate of Makima in Special Division 4.",
    },
    ability: { id: "Wujud laba-laba raksasa yang cepat dan kuat.", en: "A fast, powerful giant spider form." },
  },
  {
    id: "arai", part: 1, img: "assets/img/characters/arai.webp",
    name: "Hirokazu Arai",
    role: { id: "Devil Hunter · rekan Kobeni", en: "Devil Hunter · Kobeni's partner" },
    bio: {
      id: "Rekrutan baru Divisi 4 yang berpasangan dengan Kobeni — serius dan penuh semangat.",
      en: "A new Division 4 recruit paired with Kobeni — earnest and eager.",
    },
    ability: { id: "Kontrak dengan Iblis Rubah.", en: "Contract with the Fox Devil." },
  },
  {
    id: "akane", part: 1, img: "assets/img/characters/akane.webp",
    name: "Akane Sawatari",
    role: { id: "Devil Hunter swasta", en: "Private Devil Hunter" },
    bio: {
      id: "Devil Hunter swasta berhoodie merah yang bersekutu dengan Katana Man untuk menyerang Divisi 4.",
      en: "A red-hoodied private Devil Hunter who teams up with Katana Man to attack Division 4.",
    },
    ability: { id: "Kontrak dengan Iblis Ular yang bisa menelan musuh.", en: "Contract with the Snake Devil, which can swallow enemies." },
  },
  {
    id: "katana", part: 1, img: "assets/img/characters/katana.webp",
    name: "Katana Man",
    role: { id: "Hibrida Iblis Katana", en: "Katana Devil hybrid" },
    bio: {
      id: "Cucu si penagih utang yakuza yang dibunuh Denji. Ia bergabung dengan Akane untuk balas dendam dan mencuri jantung Denji.",
      en: "Grandson of the yakuza debt collector Denji killed. He teams up with Akane for revenge and to steal Denji's heart.",
    },
    ability: { id: "Bilah katana mencuat dari lengan dan kepalanya saat menarik tali — mirip Denji.", en: "Katana blades burst from his arms and head when he pulls a cord — much like Denji." },
  },
  {
    id: "quanxi", part: 1, img: "assets/img/characters/quanxi.webp",
    name: "Quanxi",
    role: { id: "Devil Hunter Pertama · Tiongkok", en: "The First Devil Hunter · China" },
    bio: {
      id: "Dijuluki “Devil Hunter Pertama”. Petarung legendaris dari Tiongkok yang datang memburu Denji bersama para fiend pendampingnya.",
      en: "Known as “the First Devil Hunter”, a legendary fighter from China who comes for Denji with her fiend companions.",
    },
    ability: { id: "Hibrida Iblis Busur dengan kecepatan nyaris tak terlihat.", en: "A Bow Devil hybrid with near-invisible speed." },
  },
  {
    id: "santa", part: 1, img: "assets/img/characters/santa.webp",
    name: "Santa Claus",
    role: { id: "Pembunuh bayaran · Jerman", en: "Assassin · Germany" },
    bio: {
      id: "Pembunuh bayaran asal Jerman yang ikut memburu jantung Denji — dan jauh lebih berbahaya daripada kelihatannya.",
      en: "A German assassin hunting Denji's heart — and far more dangerous than they look.",
    },
    ability: { id: "Memegang kontrak dengan beberapa iblis sekaligus.", en: "Holds contracts with several devils at once." },
  },
  {
    id: "yoshida", part: 1, img: "assets/img/characters/yoshida.webp",
    name: "Hirofumi Yoshida",
    role: { id: "Devil Hunter · pengawal Denji", en: "Devil Hunter · Denji's bodyguard" },
    bio: {
      id: "Devil Hunter santai yang ditugaskan mengawal Denji, lalu menyamar menjadi teman sekolahnya di Part 2.",
      en: "A laid-back Devil Hunter assigned to guard Denji, who later attends school with him in Part 2.",
    },
    ability: { id: "Kontrak dengan Iblis Gurita.", en: "Contract with the Octopus Devil." },
  },
  {
    id: "meowy", part: 1, img: "assets/img/characters/meowy.webp",
    name: "Meowy",
    role: { id: "Kucing Power", en: "Power's cat" },
    bio: {
      id: "Kucing putih kesayangan Power — alasan Power meminta tolong Denji melawan Iblis Kelelawar.",
      en: "Power's beloved white cat — the reason Power asks Denji to fight the Bat Devil.",
    },
    ability: { id: "Membuat semua orang luluh. Itu saja.", en: "Melting everyone's heart. That's it." },
  },
  {
    id: "nayuta", part: 1, img: "assets/img/characters/nayuta.webp", spoiler: true,
    name: "Nayuta",
    role: { id: "Reinkarnasi Iblis Kendali", en: "The reborn Control Devil" },
    bio: {
      id: "Gadis kecil yang dibesarkan Denji sebagai adiknya — reinkarnasi Iblis Kendali setelah Makima kalah.",
      en: "A little girl Denji raises as his sister — the Control Devil reborn after Makima's defeat.",
    },
    ability: { id: "Kendali atas makhluk lain, seperti pendahulunya.", en: "Control over other beings, like her predecessor." },
  },
  {
    id: "asa", part: 2, img: "assets/img/characters/asa.webp",
    name: "Asa Mitaka",
    role: { id: "Protagonis Part 2", en: "Part 2 Protagonist" },
    bio: {
      id: "Siswi penyendiri yang berbagi tubuh dengan Yoru, Iblis Perang.",
      en: "A loner high-school student who shares her body with Yoru, the War Devil.",
    },
    ability: { id: "Yoru bisa mengubah benda miliknya menjadi senjata.", en: "Yoru can turn things she owns into weapons." },
  },
  {
    id: "yoru", part: 2, img: "assets/img/characters/yoru.webp",
    name: "Yoru",
    role: { id: "Iblis Perang", en: "War Devil" },
    bio: {
      id: "Iblis Perang yang berbagi tubuh dengan Asa dan bertekad membunuh Chainsaw Man untuk merebut kembali kekuatannya.",
      en: "The War Devil, sharing Asa's body and determined to kill Chainsaw Man to take back her power.",
    },
    ability: { id: "Mengubah apa pun yang dianggap “miliknya” menjadi senjata — makin besar rasa sayangnya, makin kuat senjatanya.", en: "Turns anything she considers “hers” into a weapon — the stronger the attachment, the stronger the weapon." },
  },
  {
    id: "fami", part: 2, img: "assets/img/characters/fami.webp", spoiler: true,
    name: "Fami",
    role: { id: "Pemimpin Gereja Chainsaw Man", en: "Leader of the Chainsaw Man Church" },
    bio: {
      id: "Siswi misterius yang selalu kelaparan dan mengaku sebagai Iblis Kelaparan — dalang di balik Gereja Chainsaw Man.",
      en: "A mysterious, always-hungry student claiming to be the Famine Devil — the mastermind behind the Chainsaw Man Church.",
    },
    ability: { id: "Memanfaatkan rasa lapar dan memanipulasi orang dari balik layar.", en: "Exploits hunger and manipulates people from behind the scenes." },
  },
  {
    id: "yuko", part: 2, img: "assets/img/characters/yuko.webp",
    name: "Yuko",
    role: { id: "Teman Asa · Klub Devil Hunter", en: "Asa's friend · Devil Hunter Club" },
    bio: {
      id: "Teman pertama Asa di Klub Devil Hunter — ceria, baik hati, dan menyimpan rahasia.",
      en: "Asa's first friend in the Devil Hunter Club — cheerful, kind, and hiding a secret.",
    },
    ability: { id: "Rahasia — lihat profil (spoiler).", en: "A secret — see profile (spoiler)." },
  },
  {
    id: "haruka", part: 2, img: "assets/img/characters/haruka.webp",
    name: "Haruka Iseumi",
    role: { id: "Ketua Klub Devil Hunter", en: "Devil Hunter Club president" },
    bio: {
      id: "Ketua Klub Devil Hunter sekaligus ketua OSIS yang mengaku sebagai Chainsaw Man — padahal ia cuma penggemar beratnya.",
      en: "President of both the Devil Hunter Club and student council, who claims to be Chainsaw Man — but is really just a superfan.",
    },
    ability: { id: "Devil hunter sekolah — lengkap dengan tali palsu di dadanya.", en: "A school devil hunter — complete with a fake ripcord in his chest." },
  },
  {
    id: "fumiko", part: 2, img: "assets/img/characters/fumiko.webp",
    name: "Fumiko Mifune",
    role: { id: "Devil Hunter · Divisi 7", en: "Devil Hunter · Division 7" },
    bio: {
      id: "Devil Hunter Public Safety yang “mengawal” Denji di sekolah dengan cara yang sangat mencurigakan.",
      en: "A Public Safety Devil Hunter who “guards” Denji at school in a very suspicious way.",
    },
    ability: { id: "Kontrak iblis yang memungkinkannya membuat duplikat diri.", en: "A devil contract that lets her create duplicates of herself." },
  },
  {
    id: "barem", part: 2, img: "assets/img/characters/barem.webp", spoiler: true,
    name: "Barem Bridge",
    role: { id: "Hibrida Iblis Pelontar Api", en: "Flamethrower Devil hybrid" },
    bio: {
      id: "Hibrida yang pertama muncul sebagai bawahan Makima, lalu kembali sebagai tangan kanan Gereja Chainsaw Man.",
      en: "A hybrid who first appears as Makima's subordinate, then returns as the Chainsaw Man Church's right hand.",
    },
    ability: { id: "Menyemburkan api dari tubuhnya.", en: "Breathes fire from his body." },
  },
];

const TIMELINE = [
  { date: "2018-12", title: { id: "Part 1 dimulai", en: "Part 1 begins" }, text: { id: "Chainsaw Man debut di Weekly Shōnen Jump.", en: "Chainsaw Man debuts in Weekly Shōnen Jump." } },
  { date: "2020-12", title: { id: "Part 1 tamat", en: "Part 1 ends" }, text: { id: "Public Safety Saga selesai di chapter 97 (11 volume).", en: "The Public Safety Saga wraps at chapter 97 (11 volumes)." } },
  { date: "2021-07", title: { id: "Look Back", en: "Look Back" }, text: { id: "Fujimoto merilis one-shot Look Back di Shōnen Jump+.", en: "Fujimoto releases the one-shot Look Back on Shōnen Jump+." } },
  { date: "2022-07", title: { id: "Part 2 dimulai", en: "Part 2 begins" }, text: { id: "Cerita berlanjut di Shōnen Jump+ dengan protagonis baru, Asa Mitaka.", en: "The story continues on Shōnen Jump+ with a new lead, Asa Mitaka." } },
  { date: "2022-10", title: { id: "Anime tayang", en: "Anime premieres" }, text: { id: "Adaptasi MAPPA tayang, 12 episode dengan 12 lagu penutup.", en: "MAPPA's adaptation airs — 12 episodes with 12 ending songs." } },
  { date: "2025-09", title: { id: "Film Reze Arc", en: "Reze Arc movie" }, text: { id: "Chainsaw Man – The Movie: Reze Arc tayang di bioskop Jepang.", en: "Chainsaw Man – The Movie: Reze Arc hits Japanese theaters." } },
  { date: "2025-12", title: { id: "Season 2 diumumkan", en: "Season 2 announced" }, text: { id: "Anime kembali dengan “Assassins Arc”, mengadaptasi arc International Assassins.", en: "The anime returns with the “Assassins Arc”, adapting the International Assassins arc." } },
  { date: "2026-03", title: { id: "Manga tamat", en: "The manga ends" }, text: { id: "Chapter 232 “Thank You, Chainsaw Man” menutup seri. Volume 24 terbit Juni 2026.", en: "Chapter 232, “Thank You, Chainsaw Man”, closes the series. Volume 24 follows in June 2026." } },
];

// Galeri: tambah/ubah entri lalu taruh file gambarnya di assets/img/gallery/.
// Sumber gambar: Chainsaw Man Fandom Wiki (materi promosi resmi Shueisha / MAPPA).
const GALLERY = [
  { img: "assets/img/gallery/vol1.webp", caption: { id: "Sampul manga volume 1", en: "Manga volume 1 cover" } },
  { img: "assets/img/gallery/kv1.webp", caption: { id: "Key visual 1 anime", en: "Anime key visual 1" } },
  { img: "assets/img/gallery/kv2.webp", caption: { id: "Key visual 2 anime", en: "Anime key visual 2" } },
  { img: "assets/img/gallery/reze-poster.webp", caption: { id: "Poster film Reze Arc", en: "Reze Arc movie poster" } },
  { img: "assets/img/gallery/denji-pochita.webp", caption: { id: "Denji & Pochita (manga)", en: "Denji & Pochita (manga)" } },
  { img: "assets/img/gallery/vol12.webp", caption: { id: "Sampul volume 12 — awal Part 2", en: "Volume 12 cover — start of Part 2" } },
  { img: "assets/img/gallery/division4.webp", caption: { id: "Iblis & fiend Divisi Khusus 4", en: "Special Division 4 devils & fiends" } },
];
