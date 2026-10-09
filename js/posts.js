// Fun fact / artikel blog. Tambah artikel baru cukup dengan menambah objek ke array POSTS.
// Format: { id, img, imgPos, cat, date, spoiler, title:{id,en}, excerpt:{id,en}, body:{id:[...], en:[...]} }
// img = gambar sampul (opsional), imgPos = titik fokus crop (CSS object-position).
// Kategori yang tersedia ada di CATEGORIES.

const CATEGORIES = {
  creator:    { id: "Sang Kreator",   en: "The Creator" },
  lore:       { id: "Lore & Dunia",   en: "Lore & World" },
  characters: { id: "Karakter",       en: "Characters" },
  anime:      { id: "Anime & Film",   en: "Anime & Film" },
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
];
