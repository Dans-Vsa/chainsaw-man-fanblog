// Fun fact / artikel blog. Tambah artikel baru cukup dengan menambah objek ke array POSTS.
// Format: { id, img, imgPos, cat, date, spoiler, title:{id,en}, excerpt:{id,en}, body:{id:[...], en:[...]} }
// img = gambar sampul (opsional), imgPos = titik fokus crop (CSS object-position).
// Kategori yang tersedia ada di CATEGORIES.

const CATEGORIES = {
  creator:    { id: "Sang Kreator",   en: "The Creator" },
  lore:       { id: "Lore & Dunia",   en: "Lore & World" },
  characters: { id: "Karakter",       en: "Characters" },
  anime:      { id: "Anime & Film",   en: "Anime & Film" },
  manga:      { id: "Manga & Rekor",  en: "Manga & Records" },
};

const POSTS = [
  {
    id: "film-buff",
    img: "assets/img/gallery/kv1.webp", imgPos: "50% 30%",
    cat: "creator",
    date: "2026-10-09",
    title: {
      id: "Manga yang Dibuat oleh Maniak Film",
      en: "A Manga Made by a Movie Fanatic",
    },
    excerpt: {
      id: "Tatsuki Fujimoto dikenal sangat gemar menonton film, dan pengaruhnya terasa dari cara panel-panelnya dibingkai.",
      en: "Tatsuki Fujimoto is famously obsessed with movies, and you can feel it in the way his panels are framed.",
    },
    body: {
      id: [
        "Fujimoto sering bercerita di wawancara bahwa ia menonton banyak sekali film, dan kebiasaan itu terlihat jelas di Chainsaw Man. Banyak halamannya terasa seperti potongan adegan: sudut kamera lebar, jeda hening tanpa dialog, lalu ledakan aksi.",
        "Pengaruh sinema ini dirayakan juga di opening anime-nya, lagu \"KICK BACK\" dari Kenshi Yonezu. Video pembukanya penuh penghormatan ke film-film klasik — di antaranya adegan jalan bareng ala Reservoir Dogs dan tarian gergaji mesin saat matahari terbit yang mengingatkan pada The Texas Chain Saw Massacre.",
        "Coba tonton ulang opening-nya sambil menebak film apa saja yang dirujuk. Fans sudah menemukan lebih dari selusin!",
      ],
      en: [
        "Fujimoto has said in interviews that he watches a huge number of movies, and it shows in Chainsaw Man. Many pages read like film shots: wide camera angles, silent beats with no dialogue, then a sudden burst of action.",
        "The anime's opening, Kenshi Yonezu's \"KICK BACK\", celebrates that influence. The OP is packed with homages to classic films — including a Reservoir Dogs-style group walk and a sunrise chainsaw dance that nods to The Texas Chain Saw Massacre.",
        "Rewatch the opening and try to spot every reference. Fans have counted more than a dozen!",
      ],
    },
  },
  {
    id: "two-parts",
    img: "assets/img/gallery/vol12.webp", imgPos: "50% 25%",
    cat: "creator",
    date: "2026-10-07",
    title: {
      id: "Dari Majalah Cetak ke Layar HP",
      en: "From Print Magazine to Phone Screen",
    },
    excerpt: {
      id: "Part 1 terbit di Weekly Shōnen Jump, sementara Part 2 pindah ke aplikasi digital Shōnen Jump+.",
      en: "Part 1 ran in Weekly Shōnen Jump, while Part 2 moved to the digital Shōnen Jump+ app.",
    },
    body: {
      id: [
        "Bagian pertama Chainsaw Man (sering disebut Public Safety Saga) diserialisasikan di majalah Weekly Shōnen Jump dari Desember 2018 sampai Desember 2020, total 97 chapter dalam 11 volume.",
        "Setelah jeda, Part 2 dimulai pada Juli 2022 — tapi kali ini di Shōnen Jump+, platform digital milik Shueisha. Rumah barunya memberi Fujimoto kebebasan ritme yang lebih longgar dibanding jadwal majalah mingguan.",
      ],
      en: [
        "The first part of Chainsaw Man (often called the Public Safety Saga) was serialized in Weekly Shōnen Jump from December 2018 to December 2020 — 97 chapters across 11 volumes.",
        "After a break, Part 2 kicked off in July 2022, this time on Shōnen Jump+, Shueisha's digital platform. The new home gave Fujimoto a looser rhythm than a weekly print magazine schedule.",
      ],
    },
  },
  {
    id: "fear-power",
    img: "assets/img/gallery/kv2.webp", imgPos: "50% 20%",
    cat: "lore",
    date: "2026-10-05",
    title: {
      id: "Semakin Ditakuti, Semakin Kuat",
      en: "The More Feared, the Stronger",
    },
    excerpt: {
      id: "Kekuatan iblis bergantung pada seberapa besar manusia takut pada hal yang diwakilinya.",
      en: "A devil's strength depends on how much humanity fears the thing it represents.",
    },
    body: {
      id: [
        "Di dunia Chainsaw Man, setiap iblis lahir dari sebuah nama atau konsep, dan kekuatannya diukur dari rasa takut manusia terhadap konsep itu.",
        "Itulah kenapa iblis dengan nama sepele bisa sangat lemah, sementara iblis yang mewakili hal yang ditakuti semua orang bisa menjadi bencana berskala dunia. Rasa takut kolektif adalah bahan bakarnya.",
        "Aturan sederhana ini membuat dunianya terasa logis sekaligus mengerikan: kalau ketakutan manusia berubah, peta kekuatan iblis pun ikut berubah.",
      ],
      en: [
        "In Chainsaw Man's world, every devil is born from a name or concept, and its power is measured by how much humans fear that concept.",
        "That's why a devil with a harmless name can be pathetically weak, while one that embodies something everyone dreads can become a world-scale disaster. Collective fear is the fuel.",
        "This simple rule makes the world feel both logical and terrifying: if what humanity fears changes, the balance of power among devils changes with it.",
      ],
    },
  },
  {
    id: "pochita",
    img: "assets/img/gallery/denji-pochita.webp", imgPos: "50% 40%",
    cat: "characters",
    date: "2026-10-03",
    title: {
      id: "Pochita, Iblis Paling Imut",
      en: "Pochita, the Cutest Devil Around",
    },
    excerpt: {
      id: "Iblis Gergaji Mesin yang mirip anjing kecil ini adalah sahabat pertama Denji.",
      en: "This small, dog-like Chainsaw Devil was Denji's very first friend.",
    },
    body: {
      id: [
        "Pochita adalah iblis gergaji mesin berbentuk seperti anjing kecil dengan gergaji mencuat dari kepalanya. Ia menemani Denji saat masih hidup miskin dan terlilit utang.",
        "Ketika Denji hampir mati, Pochita menyatu dengan tubuhnya dan menjadi jantungnya. Imbalannya sederhana tapi menyentuh: Denji cukup menjalani hidup normal yang selama ini ia impikan.",
      ],
      en: [
        "Pochita is a chainsaw devil shaped like a small dog, with a saw sticking out of its head. It kept Denji company when he was poor and buried in debt.",
        "When Denji nearly dies, Pochita merges with his body and becomes his heart. The deal is simple but touching: Denji just has to live the ordinary life he's always dreamed of.",
      ],
    },
  },
  {
    id: "mappa",
    img: "assets/img/gallery/kv1.webp", imgPos: "50% 70%",
    cat: "anime",
    date: "2026-10-01",
    title: {
      id: "12 Episode, 12 Lagu Penutup",
      en: "12 Episodes, 12 Ending Songs",
    },
    excerpt: {
      id: "Anime garapan MAPPA tahun 2022 memakai ending berbeda di setiap episodenya.",
      en: "MAPPA's 2022 anime used a different ending theme for every single episode.",
    },
    body: {
      id: [
        "Adaptasi anime Chainsaw Man tayang mulai Oktober 2022 dan dikerjakan oleh studio MAPPA. Musim pertamanya berisi 12 episode.",
        "Yang unik, tiap episode punya lagu ending dan animasi penutup sendiri, dibawakan oleh musisi yang berbeda-beda. Jadi total ada 12 ending dalam satu musim — langkah yang jarang sekali dilakukan anime TV.",
        "MAPPA juga dilaporkan membiayai produksinya sendiri tanpa komite produksi seperti biasanya, sehingga punya kendali kreatif lebih besar.",
      ],
      en: [
        "The Chainsaw Man anime began airing in October 2022, produced by studio MAPPA. Its first season has 12 episodes.",
        "The fun part: each episode has its own ending song and ending animation, performed by a different artist. That's 12 endings in one season — something TV anime almost never does.",
        "MAPPA also reportedly funded the production itself instead of using the usual production committee, giving the studio more creative control.",
      ],
    },
  },
  {
    id: "fiends",
    img: "assets/img/characters/power.webp", imgPos: "50% 15%",
    cat: "lore",
    date: "2026-09-29",
    title: {
      id: "Iblis vs Fiend, Apa Bedanya?",
      en: "Devil vs Fiend — What's the Difference?",
    },
    excerpt: {
      id: "Fiend adalah iblis yang mengambil alih jasad manusia. Power adalah contoh paling terkenal.",
      en: "A fiend is a devil that has taken over a human corpse. Power is the best-known example.",
    },
    body: {
      id: [
        "Fiend terbentuk ketika iblis merasuki tubuh manusia yang sudah mati. Penampilannya hampir seperti manusia, tapi biasanya ada ciri aneh di kepala — misalnya tanduk.",
        "Power, si Blood Fiend yang berisik dan narsis, adalah contohnya. Tanduk merah di kepalanya jadi penanda bahwa ia bukan manusia biasa.",
      ],
      en: [
        "A fiend is created when a devil possesses a dead human body. They look almost human, but usually have something odd about their head — horns, for instance.",
        "Power, the loud and self-absorbed Blood Fiend, is the classic example. The red horns on her head are the giveaway that she's no ordinary human.",
      ],
    },
  },
  {
    id: "aki-contracts",
    img: "assets/img/characters/aki.webp", imgPos: "50% 15%",
    cat: "characters",
    date: "2026-09-27",
    title: {
      id: "Kontrak Mahal Aki Hayakawa",
      en: "Aki Hayakawa's Costly Contracts",
    },
    excerpt: {
      id: "Aki membuat kontrak dengan beberapa iblis sekaligus, dan semuanya menuntut harga.",
      en: "Aki made contracts with several devils at once, and every one of them has a price.",
    },
    body: {
      id: [
        "Sebagai Devil Hunter, Aki memakai kontrak dengan Iblis Rubah, Iblis Kutukan, dan Iblis Masa Depan. Iblis Masa Depan bahkan tinggal di dalam salah satu matanya.",
        "Di dunia ini, kekuatan dari iblis tidak pernah gratis — sebagian kontrak Aki memotong sisa umurnya sendiri. Itu yang membuat setiap pertarungannya terasa begitu berat.",
      ],
      en: [
        "As a Devil Hunter, Aki relies on contracts with the Fox Devil, the Curse Devil, and the Future Devil. The Future Devil even lives inside one of his eyes.",
        "In this world, power from devils is never free — some of Aki's contracts cost him years of his own life. That's what makes every one of his fights feel so heavy.",
      ],
    },
  },
  {
    id: "makima",
    img: "assets/img/characters/makima.webp", imgPos: "50% 15%",
    cat: "characters",
    date: "2026-09-25",
    spoiler: true,
    title: {
      id: "Identitas Asli Makima",
      en: "Makima's True Identity",
    },
    excerpt: {
      id: "Atasan Denji yang misterius ternyata adalah Iblis Kendali.",
      en: "Denji's mysterious boss turns out to be the Control Devil.",
    },
    body: {
      id: [
        "Sepanjang Part 1, Makima tampil sebagai atasan Denji yang tenang dan memikat. Di akhir cerita terungkap bahwa ia adalah Iblis Kendali (Control Devil).",
        "Kemampuannya untuk mengendalikan makhluk yang ia anggap lebih rendah membuat banyak momen sebelumnya terbaca ulang dengan cara yang jauh lebih menyeramkan.",
      ],
      en: [
        "Throughout Part 1, Makima appears as Denji's calm, charming boss. Late in the story she's revealed to be the Control Devil.",
        "Her ability to control beings she considers beneath her makes many earlier moments read in a much creepier light on a second pass.",
      ],
    },
  },
  {
    id: "before-after",
    img: "assets/img/facts/fire-punch.webp", imgPos: "50% 30%",
    cat: "creator",
    date: "2026-09-23",
    title: {
      id: "Sebelum & Sesudah Chainsaw Man",
      en: "Before & After Chainsaw Man",
    },
    excerpt: {
      id: "Fire Punch, Look Back, dan latar belakang Fujimoto sebagai mahasiswa seni lukis.",
      en: "Fire Punch, Look Back, and Fujimoto's background as a painting student.",
    },
    body: {
      id: [
        "Sebelum Chainsaw Man, Fujimoto menulis Fire Punch (2016–2018) di Shōnen Jump+, manga gelap tentang pria yang tubuhnya terus terbakar namun tak bisa mati.",
        "Setelah Part 1 selesai, ia merilis one-shot Look Back (2021) tentang dua gadis yang sama-sama suka menggambar manga. Kisah itu diadaptasi menjadi film anime pada 2024.",
        "Fujimoto sendiri belajar seni lukis di Tohoku University of Art and Design — mungkin itu sebabnya komposisi gambarnya sering terasa seperti lukisan.",
      ],
      en: [
        "Before Chainsaw Man, Fujimoto wrote Fire Punch (2016–2018) on Shōnen Jump+, a dark manga about a man whose body burns endlessly but who cannot die.",
        "After Part 1 ended, he released the one-shot Look Back (2021), about two girls who both love drawing manga. It was adapted into an anime film in 2024.",
        "Fujimoto himself studied painting at Tohoku University of Art and Design — which may explain why his compositions often feel like paintings.",
      ],
    },
  },
  {
    id: "reze-movie",
    img: "assets/img/gallery/reze-poster.webp", imgPos: "50% 35%",
    cat: "anime",
    date: "2026-09-21",
    title: {
      id: "Arc Reze Naik ke Layar Lebar",
      en: "The Reze Arc Hits the Big Screen",
    },
    excerpt: {
      id: "Kelanjutan anime tidak hadir sebagai season 2, melainkan film bioskop.",
      en: "The anime continued not as a second season, but as a theatrical film.",
    },
    body: {
      id: [
        "Alih-alih langsung melanjutkan dengan season TV kedua, cerita anime Chainsaw Man berlanjut lewat film Chainsaw Man – The Movie: Reze Arc, yang tayang di bioskop Jepang pada September 2025.",
        "Arc ini memperkenalkan Reze, gadis yang Denji temui di sebuah kafe — dan dikenal fans sebagai salah satu arc paling emosional di Part 1.",
      ],
      en: [
        "Instead of jumping straight into a second TV season, the Chainsaw Man anime continued with Chainsaw Man – The Movie: Reze Arc, released in Japanese theaters in September 2025.",
        "The arc introduces Reze, a girl Denji meets at a café — and fans consider it one of the most emotional arcs in Part 1.",
      ],
    },
  },
  {
    id: "the-end",
    img: "assets/img/gallery/vol12.webp", imgPos: "50% 25%",
    cat: "manga",
    date: "2026-10-20",
    title: { id: "Tamat di Chapter 232", en: "It Ended at Chapter 232" },
    excerpt: { id: "Setelah 8 tahun, Chainsaw Man resmi selesai pada Maret 2026 — tanpa Part 3.", en: "After 8 years, Chainsaw Man officially ended in March 2026 — with no Part 3." },
    body: {
      id: [
        "Chapter terakhir Chainsaw Man, berjudul “Thank You, Chainsaw Man”, terbit di Shōnen Jump+ pada 25 Maret 2026. Total ada 232 chapter: 97 di Part 1 (2018–2020) dan 135 di Part 2 (2022–2026).",
        "Halaman terakhirnya ditutup dengan tulisan “The End”, bukan “bersambung”. Shueisha dan Viz Media mengonfirmasi ini akhir dari seluruh seri, dan volume 24 sebagai volume terakhir terbit pada 4 Juni 2026.",
        "Banyak pembaca kaget dengan akhir yang mendadak. Fujimoto sendiri mengaku lebih suka karya pendek dan meminta penggemar menerima akhir ceritanya.",
      ],
      en: [
        "Chainsaw Man's final chapter, “Thank You, Chainsaw Man”, came out on Shōnen Jump+ on March 25, 2026. That's 232 chapters total: 97 in Part 1 (2018–2020) and 135 in Part 2 (2022–2026).",
        "The last page reads “The End” instead of “to be continued”. Shueisha and Viz Media confirmed it's the end of the whole series, and the final volume, Volume 24, came out on June 4, 2026.",
        "Many readers were caught off guard by the sudden ending. Fujimoto has said he prefers shorter works and asked fans to accept the ending.",
      ],
    },
  },
  {
    id: "36-million",
    img: "assets/img/gallery/vol1.webp", imgPos: "50% 20%",
    cat: "manga",
    date: "2026-10-19",
    title: { id: "Lebih dari 36 Juta Kopi", en: "Over 36 Million Copies" },
    excerpt: { id: "Chainsaw Man termasuk manga terlaris di generasinya.", en: "Chainsaw Man is one of the best-selling manga of its generation." },
    body: {
      id: [
        "Per Juni 2026, manga Chainsaw Man sudah beredar lebih dari 36 juta kopi di seluruh dunia.",
        "Angka sebesar itu dicapai dengan 24 volume saja — jauh lebih sedikit dibanding banyak manga shōnen populer lain yang panjangnya puluhan hingga ratusan volume.",
      ],
      en: [
        "As of June 2026, the Chainsaw Man manga has over 36 million copies in circulation worldwide.",
        "It got there with just 24 volumes — far fewer than many popular shōnen series that run for dozens or even a hundred volumes.",
      ],
    },
  },
  {
    id: "awards",
    img: "assets/img/gallery/kv2.webp", imgPos: "50% 30%",
    cat: "manga",
    date: "2026-10-18",
    title: { id: "Koleksi Penghargaan", en: "A Shelf of Awards" },
    excerpt: { id: "Dari Shogakukan Manga Award sampai Harvey Award di Amerika.", en: "From the Shogakukan Manga Award to America's Harvey Award." },
    body: {
      id: [
        "Chainsaw Man memenangkan Shogakukan Manga Award ke-66 (2021) untuk kategori shōnen terbaik — salah satu penghargaan manga paling bergengsi di Jepang.",
        "Di Amerika Serikat, seri ini meraih Harvey Award untuk kategori Best Manga, dan edisi bahasa Inggrisnya masuk nominasi Eisner Award 2022.",
        "Sebelum itu, Chainsaw Man juga meraih peringkat ke-2 Next Manga Award 2019 dan peringkat ke-8 Manga Taishō 2020.",
      ],
      en: [
        "Chainsaw Man won the 66th Shogakukan Manga Award (2021) for best shōnen manga — one of Japan's most prestigious manga awards.",
        "In the US, it won the Harvey Award for Best Manga, and its English edition was nominated for a 2022 Eisner Award.",
        "Before that, it placed 2nd in the 2019 Next Manga Award and 8th in the 2020 Manga Taishō.",
      ],
    },
  },
  {
    id: "noticed-by",
    cat: "creator",
    date: "2026-10-17",
    title: { id: "Ditemukan oleh ONE & Sui Ishida", en: "Spotted by ONE and Sui Ishida" },
    excerpt: { id: "Bakat Fujimoto muda sudah dilirik kreator One Punch Man dan Tokyo Ghoul.", en: "Young Fujimoto caught the eye of the creators of One Punch Man and Tokyo Ghoul." },
    body: {
      id: [
        "Sejak SMA, Fujimoto rajin mengunggah manga ke internet dan mengikuti berbagai kompetisi. Karya-karya one-shot-nya sempat menarik perhatian ONE (One Punch Man) dan Sui Ishida (Tokyo Ghoul).",
        "Debutnya, one-shot “Love is Blind”, mendapat honorable mention di Shueisha Crown Newcomers' Awards pada November 2013.",
        "Bahkan waktu SMP ia sudah membayangkan “majalah” sendiri di kepalanya, berisi sekitar tujuh seri yang ia karang bersamaan.",
      ],
      en: [
        "Since high school, Fujimoto had been posting manga online and entering contests. His one-shots caught the attention of ONE (One Punch Man) and Sui Ishida (Tokyo Ghoul).",
        "His debut one-shot, “Love is Blind”, earned an honorable mention in Shueisha's Crown Newcomers' Awards in November 2013.",
        "Even in junior high, he imagined his own “magazine” in his head, running about seven series he made up at once.",
      ],
    },
  },
  {
    id: "little-sister",
    cat: "creator",
    date: "2026-10-16",
    title: { id: "Akun Twitter “Adik Kelas 3 SD”", en: "The “Third-Grade Sister” Twitter Account" },
    excerpt: { id: "Fujimoto ngetweet sambil berperan sebagai adik perempuan khayalan.", en: "Fujimoto tweets in character as an imaginary little sister." },
    body: {
      id: [
        "Di Twitter/X, Fujimoto aktif lewat akun @nagayama_koharu — dan ia ngetweet sambil berperan sebagai adik perempuan khayalan yang duduk di kelas 3 SD.",
        "Pada November 2022 ia sempat kehilangan akses akun itu dan membuat akun sementara. Fans awalnya curiga itu palsu, sampai editornya, Shihei Lin, mengonfirmasi bahwa itu memang Fujimoto. Di akun sementara itu ia membagikan desain prototipe Aki, Power, dan wujud hibrida Denji.",
      ],
      en: [
        "On Twitter/X, Fujimoto posts as @nagayama_koharu — tweeting in character as an imaginary younger sister in third grade.",
        "In November 2022 he lost access to it and made a temporary account. Fans suspected it was fake until his editor, Shihei Lin, confirmed it was really him. On that account he shared prototype designs for Aki, Power, and Denji's hybrid form.",
      ],
    },
  },
  {
    id: "author-comments",
    cat: "creator",
    date: "2026-10-15",
    title: { id: "Peringkat Tempura Favorit Sang Kreator", en: "The Creator's Tempura Rankings" },
    excerpt: { id: "Komentar penulis di Weekly Shōnen Jump isinya… daftar makanan favorit.", en: "His author comments in Weekly Shōnen Jump were… food rankings." },
    body: {
      id: [
        "Setiap edisi Weekly Shōnen Jump memuat komentar singkat dari para mangaka. Komentar Fujimoto sering berupa peringkat yang sangat random.",
        "Tempura favorit: 1) labu kabocha, 2) kakiage, 3) jamur maitake. Sayur favorit: terong, labu kabocha, bawang bombai. Isian oden favorit: chikuwa, lobak daikon, tahu goreng.",
        "Dan cuaca favoritnya? Urutan pertama mendung, lalu hujan — cerah malah di posisi terakhir.",
      ],
      en: [
        "Every issue of Weekly Shōnen Jump includes short comments from its creators. Fujimoto's were often wonderfully random rankings.",
        "Favorite tempura: 1) kabocha pumpkin, 2) kakiage, 3) maitake mushrooms. Favorite vegetables: eggplant, kabocha, onion. Favorite oden: chikuwa, daikon, fried tofu.",
        "And his favorite weather? Cloudy first, then rainy — sunny came dead last.",
      ],
    },
  },
  {
    id: "copycat",
    img: "assets/img/gallery/kv1.webp", imgPos: "50% 45%",
    cat: "creator",
    date: "2026-10-14",
    title: { id: "“Tiruan” dari Dorohedoro & Jujutsu Kaisen", en: "A “Copycat” of Dorohedoro & Jujutsu Kaisen" },
    excerpt: { id: "Fujimoto sendiri yang menyebut karyanya begitu — dengan nada bercanda.", en: "Fujimoto described his own work that way — tongue firmly in cheek." },
    body: {
      id: [
        "Fujimoto pernah menyebut Chainsaw Man sebagai “tiruan” dari Dorohedoro dan Jujutsu Kaisen. Ia juga menjulukinya “FLCL versi jahat” dan “Abara versi pop”.",
        "Ia juga menyebut pertarungan terakhir di film Kizumonogatari Part 3: Reiketsu sebagai pengaruh langsung untuk klimaks Part 1.",
        "Jadwal serialisasi mingguan yang padat tidak menghentikannya menonton dan membaca karya baru — dan elemen dari karya-karya itu sering ia masukkan ke dalam ceritanya.",
      ],
      en: [
        "Fujimoto once called Chainsaw Man a “copycat” of Dorohedoro and Jujutsu Kaisen. He also dubbed it a “wicked FLCL” and a “pop Abara”.",
        "He cited the final battle of the film Kizumonogatari Part 3: Reiketsu as a direct influence on Part 1's climax.",
        "Even on a punishing weekly schedule, he kept watching and reading new works — and often folded elements from them into the story.",
      ],
    },
  },
  {
    id: "texas",
    img: "assets/img/hero.webp", imgPos: "50% 35%",
    cat: "creator",
    date: "2026-10-13",
    title: { id: "Lahir dari The Texas Chain Saw Massacre", en: "Born from The Texas Chain Saw Massacre" },
    excerpt: { id: "Film horor 1974 inilah yang memicu ide Chainsaw Man.", en: "This 1974 horror film sparked the idea for Chainsaw Man." },
    body: {
      id: [
        "Fujimoto mengatakan film horor The Texas Chain Saw Massacre (1974) menginspirasinya membuat Chainsaw Man.",
        "Ide awalnya sederhana: seorang pahlawan yang bisa menumbuhkan gergaji mesin dari kepalanya dengan menarik tali. Dari situ, cerita dan karakter Denji dibangun — dan Fujimoto memberikan sebagian kepribadiannya sendiri kepada Denji.",
      ],
      en: [
        "Fujimoto said the horror film The Texas Chain Saw Massacre (1974) inspired him to create Chainsaw Man.",
        "The starting idea was simple: a hero who grows a chainsaw from his head by pulling a cord. The story and Denji were built from there — and Fujimoto gave Denji part of his own personality.",
      ],
    },
  },
  {
    id: "fire-punch-sq",
    img: "assets/img/facts/fire-punch.webp", imgPos: "50% 30%",
    cat: "creator",
    date: "2026-10-12",
    title: { id: "Fire Punch Sempat Ditolak", en: "Fire Punch Was Initially Rejected" },
    excerpt: { id: "Serial pertama Fujimoto awalnya diajukan ke majalah lain.", en: "Fujimoto's first series was first pitched to a different magazine." },
    body: {
      id: [
        "Fire Punch awalnya diajukan untuk majalah Jump SQ, tapi ditolak. Editornya lalu mengusulkan agar serial itu dimuat di Shōnen Jump+ — dan disetujui.",
        "Fire Punch berjalan 8 volume dan ramai dibicarakan di internet karena alur ceritanya yang mengejutkan. Setelah itu, Fujimoto merilis one-shot “Sisters” sebelum memulai Chainsaw Man pada Desember 2018.",
      ],
      en: [
        "Fire Punch was originally pitched to Jump SQ magazine, but it was turned down. His editor then suggested running it on Shōnen Jump+ instead — and it was approved.",
        "Fire Punch ran for 8 volumes and caused a stir online with its shocking twists. Fujimoto then released the one-shot “Sisters” before starting Chainsaw Man in December 2018.",
      ],
    },
  },
  {
    id: "season-2",
    img: "assets/img/gallery/kv1.webp", imgPos: "50% 15%",
    cat: "anime",
    date: "2026-10-11",
    title: { id: "Season 2: Assassins Arc", en: "Season 2: Assassins Arc" },
    excerpt: { id: "Anime TV Chainsaw Man resmi kembali.", en: "The Chainsaw Man TV anime is officially coming back." },
    body: {
      id: [
        "Pada 21 Desember 2025, anime Chainsaw Man diumumkan akan kembali dengan season kedua berjudul “Chainsaw Man: Assassins Arc” (Shikaku-hen), yang berfokus pada arc International Assassins.",
        "Trailer keduanya dirilis pada 19 Juni 2026 dalam presentasi lineup ulang tahun ke-15 studio MAPPA.",
      ],
      en: [
        "On December 21, 2025, the Chainsaw Man anime was announced to return with a second season, “Chainsaw Man: Assassins Arc” (Shikaku-hen), focused on the International Assassins arc.",
        "Its second trailer dropped on June 19, 2026, during studio MAPPA's 15th anniversary lineup presentation.",
      ],
    },
  },
  {
    id: "chainsaw-days",
    cat: "anime",
    date: "2026-10-10",
    title: { id: "Film Kompilasi & “Chainsaw Days”", en: "A Compilation Film & “Chainsaw Days”" },
    excerpt: { id: "Bonus-bonus kecil di akhir volume manga ikut dianimasikan.", en: "The little bonus comics at the end of manga volumes got animated too." },
    body: {
      id: [
        "Pada 5 September 2025, sebelum film Reze Arc tayang, dirilis film kompilasi yang merangkum season 1.",
        "Bersamaan dengan itu hadir seri pendek “Chainsaw Days”, yang mengadaptasi omake (komik bonus) di akhir volume 1 sampai 5.",
      ],
      en: [
        "On September 5, 2025, ahead of the Reze Arc movie, a compilation film recapping season 1 was released.",
        "Alongside it came a short series, “Chainsaw Days”, adapting the omake (bonus comics) from the end of volumes 1 through 5.",
      ],
    },
  },
  {
    id: "anime-announce",
    cat: "anime",
    date: "2026-10-09",
    title: { id: "Diumumkan Tepat Setelah Part 1 Tamat", en: "Announced Right After Part 1 Ended" },
    excerpt: { id: "Kabar anime datang hanya beberapa hari setelah chapter 97.", en: "The anime news came just days after chapter 97." },
    body: {
      id: [
        "Adaptasi anime Chainsaw Man diumumkan pada 14 Desember 2020, tepat setelah Part 1 tamat. Beberapa hari kemudian, di Jump Festa 2021, MAPPA dikonfirmasi sebagai studionya.",
        "Trailer pertamanya diputar pada 27 Juni 2021 di acara ulang tahun ke-10 MAPPA. Anime-nya tayang di TV Tokyo mulai 11 Oktober hingga 27 Desember 2022.",
      ],
      en: [
        "The Chainsaw Man anime was announced on December 14, 2020, right after Part 1 ended. Days later, at Jump Festa 2021, MAPPA was confirmed as the studio.",
        "The first trailer debuted on June 27, 2021, at MAPPA's 10th anniversary event. The anime aired on TV Tokyo from October 11 to December 27, 2022.",
      ],
    },
  },
];
