// Karakter, linimasa, dan galeri.
// Gambar: taruh file di folder assets/img/... sesuai path `img`. Kalau file belum ada,
// situs otomatis menampilkan placeholder — jadi aman menambah data dulu, gambar belakangan.

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
    id: "asa", part: 2, img: "assets/img/characters/asa.webp",
    name: "Asa Mitaka",
    role: { id: "Protagonis Part 2", en: "Part 2 Protagonist" },
    bio: {
      id: "Siswi penyendiri yang berbagi tubuh dengan Yoru, Iblis Perang.",
      en: "A loner high-school student who shares her body with Yoru, the War Devil.",
    },
    ability: { id: "Yoru bisa mengubah benda miliknya menjadi senjata.", en: "Yoru can turn things she owns into weapons." },
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
