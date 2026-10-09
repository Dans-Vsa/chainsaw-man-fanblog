// 143 karakter tambahan untuk halaman ensiklopedia (karakter.html). Boleh diedit langsung.
// Data infobox: Chainsaw Man Fandom Wiki (CC BY-SA). Bio & fun fact ditulis ulang.
const ALL_CHARACTERS = [
 {
  "id": "tomato-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/tomato-devil.webp",
  "name": "Tomato Devil",
  "wiki": "Tomato Devil",
  "role": {
   "id": "Iblis Tomat",
   "en": "Tomato Devil"
  },
  "bio": {
   "id": "Iblis pertama yang terlihat di cerita — mangsa Denji dan Pochita di halaman-halaman awal.",
   "en": "The very first devil seen in the story — prey for Denji and Pochita in the opening pages."
  }
 },
 {
  "id": "zombie-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/zombie-devil.webp",
  "name": "Zombie Devil",
  "wiki": "Zombie Devil",
  "role": {
   "id": "Iblis Zombie",
   "en": "Zombie Devil"
  },
  "bio": {
   "id": "Iblis yang mengubah para yakuza menjadi zombi dan mencoba membunuh Denji di chapter pertama.",
   "en": "The devil who turned the yakuza into zombies and tried to kill Denji in chapter one."
  }
 },
 {
  "id": "bat-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/bat-devil.webp",
  "name": "Bat Devil",
  "wiki": "Bat Devil",
  "role": {
   "id": "Iblis Kelelawar",
   "en": "Bat Devil"
  },
  "bio": {
   "id": "Iblis yang menyandera kucing Power, Meowy — antagonis utama arc Bat Devil.",
   "en": "The devil holding Power's cat Meowy hostage — main antagonist of the Bat Devil arc."
  }
 },
 {
  "id": "muscle-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/muscle-devil.webp",
  "name": "Muscle Devil",
  "wiki": "Muscle Devil",
  "role": {
   "id": "Iblis Otot",
   "en": "Muscle Devil"
  },
  "bio": {
   "id": "Iblis yang dihadapi Denji di awal cerita — satu-satunya yang dipotong dari versi anime.",
   "en": "A devil Denji faces early on — the one cut entirely from the anime."
  }
 },
 {
  "id": "gun-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/gun-devil.webp",
  "name": "Gun Devil",
  "wiki": "Gun Devil",
  "role": {
   "id": "Iblis Senjata Api",
   "en": "Gun Devil"
  },
  "bio": {
   "id": "Iblis yang sangat ditakuti di seluruh dunia setelah membantai sangat banyak orang hanya dalam hitungan menit. Ia merenggut keluarga Aki.",
   "en": "A devil feared worldwide after slaughtering a huge number of people in mere minutes. It took Aki's family."
  }
 },
 {
  "id": "eternity-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/eternity-devil.webp",
  "name": "Eternity Devil",
  "wiki": "Eternity Devil",
  "role": {
   "id": "Iblis Keabadian",
   "en": "Eternity Devil"
  },
  "bio": {
   "id": "Iblis yang mengurung Divisi 4 di lantai 8 hotel yang terus berulang.",
   "en": "The devil that trapped Division 4 on an endlessly looping hotel 8th floor."
  }
 },
 {
  "id": "sea-cucumber-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/sea-cucumber-devil.webp",
  "name": "Sea Cucumber Devil",
  "wiki": "Sea Cucumber Devil",
  "role": {
   "id": "Iblis Teripang",
   "en": "Sea Cucumber Devil"
  },
  "bio": {
   "id": "Iblis kecil yang muncul di awal cerita, di masa Denji masih berburu iblis untuk yakuza.",
   "en": "A minor devil from the start of the story, back when Denji hunted devils for the yakuza."
  }
 },
 {
  "id": "leech-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/leech-devil.webp",
  "name": "Leech Devil",
  "wiki": "Leech Devil",
  "role": {
   "id": "Iblis Lintah",
   "en": "Leech Devil"
  },
  "bio": {
   "id": "Rekan Iblis Kelelawar — antagonis kedua di arc Bat Devil.",
   "en": "The Bat Devil's partner — secondary antagonist of the Bat Devil arc."
  }
 },
 {
  "id": "fox-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/fox-devil.webp",
  "name": "Fox Devil",
  "wiki": "Fox Devil",
  "role": {
   "id": "Iblis Rubah",
   "en": "Fox Devil"
  },
  "bio": {
   "id": "Iblis yang bekerja sama dengan Public Safety lewat kontrak — biasanya hanya kepalanya yang dipanggil untuk melahap musuh.",
   "en": "A devil cooperating with Public Safety through contracts — usually only its head is summoned to devour enemies."
  }
 },
 {
  "id": "fushi",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/fushi.webp",
  "name": "Fushi",
  "wiki": "Fushi",
  "role": {
   "id": "Devil Hunter · Divisi 4",
   "en": "Devil Hunter · Division 4"
  },
  "bio": {
   "id": "Devil Hunter Public Safety di Divisi Khusus 4.",
   "en": "A Public Safety Devil Hunter in Special Division 4."
  }
 },
 {
  "id": "curse-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/curse-devil.webp",
  "name": "Curse Devil",
  "wiki": "Curse Devil",
  "role": {
   "id": "Iblis Kutukan",
   "en": "Curse Devil"
  },
  "bio": {
   "id": "Iblis yang dipanggil Aki lewat pedang berpaku — cukup tiga tusukan untuk membunuh target.",
   "en": "The devil Aki summons with his nailed sword — three stabs and the target dies."
  }
 },
 {
  "id": "snake-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/snake-devil.webp",
  "name": "Snake Devil",
  "wiki": "Snake Devil",
  "role": {
   "id": "Iblis Ular",
   "en": "Snake Devil"
  },
  "bio": {
   "id": "Iblis yang berkontrak dengan Akane Sawatari, sanggup menelan musuh bulat-bulat.",
   "en": "The devil contracted to Akane Sawatari, able to swallow enemies whole."
  }
 },
 {
  "id": "ghost-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/ghost-devil.webp",
  "name": "Ghost Devil",
  "wiki": "Ghost Devil",
  "role": {
   "id": "Iblis Hantu",
   "en": "Ghost Devil"
  },
  "bio": {
   "id": "Iblis tak kasatmata yang berkontrak dengan Himeno, berwujud tangan-tangan yang hanya terlihat oleh sedikit orang.",
   "en": "An invisible devil contracted to Himeno, appearing as hands only a few can see."
  }
 },
 {
  "id": "yutaro-kurose",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/yutaro-kurose.webp",
  "name": "Yutaro Kurose",
  "wiki": "Yutaro Kurose",
  "role": {
   "id": "Devil Hunter · Kyoto",
   "en": "Devil Hunter · Kyoto"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 1 Kyoto.",
   "en": "A Public Safety Devil Hunter from Kyoto Division 1."
  }
 },
 {
  "id": "michiko-tendo",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/michiko-tendo.webp",
  "name": "Michiko Tendo",
  "wiki": "Michiko Tendo",
  "role": {
   "id": "Devil Hunter · Kyoto",
   "en": "Devil Hunter · Kyoto"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 1 Kyoto, rekan setim Kurose.",
   "en": "A Public Safety Devil Hunter from Kyoto Division 1, Kurose's teammate."
  }
 },
 {
  "id": "madoka",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/madoka.webp",
  "name": "Madoka",
  "wiki": "Madoka",
  "role": {
   "id": "Mantan Devil Hunter · Divisi 4",
   "en": "Former Devil Hunter · Division 4"
  },
  "bio": {
   "id": "Salah satu dari sedikit yang selamat dari serangan terhadap Divisi 4, yang lalu memutuskan berhenti jadi Devil Hunter.",
   "en": "One of the few survivors of the attack on Division 4, who then quits being a Devil Hunter."
  }
 },
 {
  "id": "typhoon-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/typhoon-devil.webp",
  "name": "Typhoon Devil",
  "wiki": "Typhoon Devil",
  "role": {
   "id": "Iblis Topan",
   "en": "Typhoon Devil"
  },
  "bio": {
   "id": "Iblis badai raksasa yang muncul di tengah kekacauan arc Bomb Girl.",
   "en": "A giant storm devil that appears amid the chaos of the Bomb Girl arc."
  }
 },
 {
  "id": "future-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/future-devil.webp",
  "name": "Future Devil",
  "wiki": "Future Devil",
  "role": {
   "id": "Iblis Masa Depan",
   "en": "Future Devil"
  },
  "bio": {
   "id": "Iblis yang tinggal di mata kanan Aki dan memberinya kemampuan melihat beberapa detik ke depan.",
   "en": "The devil living in Aki's right eye, letting him see a few seconds into the future."
  }
 },
 {
  "id": "skin-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Skin Devil",
  "wiki": "Skin Devil",
  "role": {
   "id": "Iblis Kulit",
   "en": "Skin Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep kulit, disebut dalam arc International Assassins.",
   "en": "A devil embodying the concept of skin, mentioned in the International Assassins arc."
  }
 },
 {
  "id": "tolka",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/tolka.webp",
  "name": "Tolka",
  "wiki": "Tolka",
  "role": {
   "id": "Devil Hunter · Uni Soviet",
   "en": "Devil Hunter · Soviet Union"
  },
  "bio": {
   "id": "Devil Hunter swasta dari Uni Soviet, murid Santa Claus yang ikut memburu Denji.",
   "en": "A private Devil Hunter from the Soviet Union, Santa Claus's apprentice who joins the hunt for Denji."
  }
 },
 {
  "id": "kusakabe",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/kusakabe.webp",
  "name": "Kusakabe",
  "wiki": "Kusakabe",
  "role": {
   "id": "Devil Hunter · Miyagi",
   "en": "Devil Hunter · Miyagi"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 2 Miyagi yang ditugaskan melindungi Denji.",
   "en": "A Public Safety Devil Hunter from Miyagi Division 2 assigned to protect Denji."
  }
 },
 {
  "id": "aldo",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/aldo.webp",
  "name": "Aldo",
  "wiki": "Aldo",
  "role": {
   "id": "Devil Hunter · Amerika Serikat",
   "en": "Devil Hunter · United States"
  },
  "bio": {
   "id": "Devil Hunter swasta dari Amerika Serikat, anggota kelompok “American Thugs” yang datang memburu Denji.",
   "en": "A private Devil Hunter from the US, part of the “American Thugs” group hunting Denji."
  }
 },
 {
  "id": "joey",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/joey.webp",
  "name": "Joey",
  "wiki": "Joey",
  "role": {
   "id": "Devil Hunter · Amerika Serikat",
   "en": "Devil Hunter · United States"
  },
  "bio": {
   "id": "Devil Hunter swasta dari Amerika Serikat, anggota kelompok “American Thugs”.",
   "en": "A private Devil Hunter from the US, part of the “American Thugs” group."
  }
 },
 {
  "id": "stone-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/stone-devil.webp",
  "name": "Stone Devil",
  "wiki": "Stone Devil",
  "role": {
   "id": "Iblis Batu",
   "en": "Stone Devil"
  },
  "bio": {
   "id": "Iblis yang muncul di arc International Assassins.",
   "en": "A devil appearing in the International Assassins arc."
  }
 },
 {
  "id": "doll-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/doll-devil.webp",
  "name": "Doll Devil",
  "wiki": "Doll Devil",
  "role": {
   "id": "Iblis Boneka",
   "en": "Doll Devil"
  },
  "bio": {
   "id": "Iblis yang berkontrak dengan Santa Claus.",
   "en": "The devil contracted to Santa Claus."
  }
 },
 {
  "id": "nomo",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/nomo.webp",
  "name": "Nomo",
  "wiki": "Nomo",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter Public Safety yang muncul di arc Bomb Girl.",
   "en": "A Public Safety Devil Hunter who appears in the Bomb Girl arc."
  }
 },
 {
  "id": "tamaoki",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/tamaoki.webp",
  "name": "Tamaoki",
  "wiki": "Tamaoki",
  "role": {
   "id": "Devil Hunter · Miyagi",
   "en": "Devil Hunter · Miyagi"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 2 Miyagi.",
   "en": "A Public Safety Devil Hunter from Miyagi Division 2."
  }
 },
 {
  "id": "subaru",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/subaru.webp",
  "name": "Subaru",
  "wiki": "Subaru",
  "role": {
   "id": "Devil Hunter · Kyoto",
   "en": "Devil Hunter · Kyoto"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 1 Kyoto yang muncul di arc International Assassins.",
   "en": "A Public Safety Devil Hunter from Kyoto Division 1 in the International Assassins arc."
  }
 },
 {
  "id": "masaki-ando",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/masaki-ando.webp",
  "name": "Masaki Ando",
  "wiki": "Masaki Ando",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 2 Tokyo.",
   "en": "A Public Safety Devil Hunter from Tokyo Division 2."
  }
 },
 {
  "id": "kato",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/kato.webp",
  "name": "Kato",
  "wiki": "Kato",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 2 Tokyo.",
   "en": "A Public Safety Devil Hunter from Tokyo Division 2."
  }
 },
 {
  "id": "tanabe",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/tanabe.webp",
  "name": "Tanabe",
  "wiki": "Tanabe",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter Public Safety dari Divisi 2 Tokyo.",
   "en": "A Public Safety Devil Hunter from Tokyo Division 2."
  }
 },
 {
  "id": "shiina",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/shiina.webp",
  "name": "Shiina",
  "wiki": "Shiina",
  "role": {
   "id": "Polisi · Kanagawa",
   "en": "Police officer · Kanagawa"
  },
  "bio": {
   "id": "Petugas polisi Prefektur Kanagawa.",
   "en": "A police officer from Kanagawa Prefecture."
  }
 },
 {
  "id": "nakamura",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/nakamura.webp",
  "name": "Nakamura",
  "wiki": "Nakamura",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter Public Safety yang muncul di arc International Assassins.",
   "en": "A Public Safety Devil Hunter in the International Assassins arc."
  }
 },
 {
  "id": "knife-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Knife Devil",
  "wiki": "Knife Devil",
  "role": {
   "id": "Iblis Pisau",
   "en": "Knife Devil"
  },
  "bio": {
   "id": "Salah satu iblis yang berkontrak dengan Kishibe.",
   "en": "One of the devils contracted to Kishibe."
  }
 },
 {
  "id": "claw-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Claw Devil",
  "wiki": "Claw Devil",
  "role": {
   "id": "Iblis Cakar",
   "en": "Claw Devil"
  },
  "bio": {
   "id": "Salah satu iblis yang berkontrak dengan Kishibe.",
   "en": "One of the devils contracted to Kishibe."
  }
 },
 {
  "id": "needle-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Needle Devil",
  "wiki": "Needle Devil",
  "role": {
   "id": "Iblis Jarum",
   "en": "Needle Devil"
  },
  "bio": {
   "id": "Salah satu iblis yang berkontrak dengan Kishibe.",
   "en": "One of the devils contracted to Kishibe."
  }
 },
 {
  "id": "octopus-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/octopus-devil.webp",
  "name": "Octopus Devil",
  "wiki": "Octopus Devil",
  "role": {
   "id": "Iblis Gurita",
   "en": "Octopus Devil"
  },
  "bio": {
   "id": "Iblis yang berkontrak dengan Yoshida, memanggil tentakel raksasa dalam pertarungan.",
   "en": "The devil contracted to Yoshida, summoning giant tentacles in battle."
  }
 },
 {
  "id": "hell-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/hell-devil.webp",
  "name": "Hell Devil",
  "wiki": "Hell Devil",
  "role": {
   "id": "Iblis Neraka",
   "en": "Hell Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep Neraka, bisa memindahkan orang dari dunia ke Neraka.",
   "en": "The devil embodying Hell itself, able to transport people from the world into Hell."
  }
 },
 {
  "id": "pig-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/pig-devil.webp",
  "name": "Pig Devil",
  "wiki": "Pig Devil",
  "role": {
   "id": "Iblis Babi",
   "en": "Pig Devil"
  },
  "bio": {
   "id": "Iblis yang muncul di arc Bomb Girl.",
   "en": "A devil appearing in the Bomb Girl arc."
  }
 },
 {
  "id": "darkness-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/darkness-devil.webp",
  "name": "Darkness Devil",
  "wiki": "Darkness Devil",
  "role": {
   "id": "Iblis Kegelapan",
   "en": "Darkness Devil"
  },
  "bio": {
   "id": "Salah satu “ketakutan purba” — iblis kegelapan dan hal yang tak diketahui, yang belum pernah mati sekali pun.",
   "en": "One of the “primal fears” — the devil of darkness and the unknown, which has never died."
  },
  "spoiler": true
 },
 {
  "id": "long",
  "part": 1,
  "kind": "fiend",
  "img": "assets/img/wiki/long.webp",
  "name": "Long",
  "wiki": "Long",
  "role": {
   "id": "Fiend pendamping Quanxi",
   "en": "Quanxi's fiend companion"
  },
  "bio": {
   "id": "Salah satu fiend pendamping sekaligus kekasih Quanxi.",
   "en": "One of Quanxi's fiend companions and girlfriends."
  }
 },
 {
  "id": "pingtsi",
  "part": 1,
  "kind": "fiend",
  "img": "assets/img/wiki/pingtsi.webp",
  "name": "Pingtsi",
  "wiki": "Pingtsi",
  "role": {
   "id": "Fiend pendamping Quanxi",
   "en": "Quanxi's fiend companion"
  },
  "bio": {
   "id": "Salah satu fiend pendamping sekaligus kekasih Quanxi, yang dikenal sangat rakus.",
   "en": "One of Quanxi's fiend companions and girlfriends, known for her huge appetite."
  }
 },
 {
  "id": "furuno",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/furuno.webp",
  "name": "Furuno",
  "wiki": "Furuno",
  "role": {
   "id": "Devil Hunter · Divisi 2 Tokyo",
   "en": "Devil Hunter · Tokyo Division 2"
  },
  "bio": {
   "id": "Devil Hunter dari Divisi 2 Tokyo.",
   "en": "A Devil Hunter from Tokyo Division 2."
  }
 },
 {
  "id": "tomono",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/tomono.webp",
  "name": "Tomono",
  "wiki": "Tomono",
  "role": {
   "id": "Teman Kurose & Tendo",
   "en": "Kurose & Tendo's friend"
  },
  "bio": {
   "id": "Teman dari Yutaro Kurose dan Michiko Tendo.",
   "en": "A friend of Yutaro Kurose and Michiko Tendo."
  }
 },
 {
  "id": "cosmo",
  "part": 1,
  "kind": "fiend",
  "img": "assets/img/wiki/cosmo.webp",
  "name": "Cosmo",
  "wiki": "Cosmo",
  "role": {
   "id": "Cosmos Fiend · pendamping Quanxi",
   "en": "Cosmos Fiend · Quanxi's companion"
  },
  "bio": {
   "id": "Fiend Kosmos, salah satu kekasih Quanxi, yang mewakili pengetahuan tentang segala sesuatu di alam semesta.",
   "en": "The Cosmos Fiend, one of Quanxi's girlfriends, embodying knowledge of everything in the universe."
  }
 },
 {
  "id": "grape-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/grape-devil.webp",
  "name": "Grape Devil",
  "wiki": "Grape Devil",
  "role": {
   "id": "Iblis Anggur",
   "en": "Grape Devil"
  },
  "bio": {
   "id": "Iblis yang kemungkinan mewakili konsep anggur, muncul di arc International Assassins.",
   "en": "A devil that likely embodies grapes, appearing in the International Assassins arc."
  }
 },
 {
  "id": "fish-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/fish-devil.webp",
  "name": "Fish Devil",
  "wiki": "Fish Devil",
  "role": {
   "id": "Iblis Ikan",
   "en": "Fish Devil"
  },
  "bio": {
   "id": "Iblis ikan berkaki yang muncul di awal arc Eternity Devil.",
   "en": "A legged fish devil appearing early in the Eternity Devil arc."
  }
 },
 {
  "id": "mold-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Mold Devil",
  "wiki": "Mold Devil",
  "role": {
   "id": "Iblis Jamur",
   "en": "Mold Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep jamur (kapang), pertama kali disebut di arc Bomb Girl.",
   "en": "The devil embodying mold, first mentioned in the Bomb Girl arc."
  }
 },
 {
  "id": "tsugihagi",
  "part": 1,
  "kind": "fiend",
  "img": "assets/img/wiki/tsugihagi.webp",
  "name": "Tsugihagi",
  "wiki": "Tsugihagi",
  "role": {
   "id": "Fiend pendamping Quanxi",
   "en": "Quanxi's fiend companion"
  },
  "bio": {
   "id": "Fiend tanpa nama yang menjadi salah satu kekasih Quanxi; “Tsugihagi” (tambal-sulam) hanyalah julukan dari penggemar dan wiki.",
   "en": "An unnamed fiend and one of Quanxi's girlfriends; “Tsugihagi” (patchwork) is just a nickname."
  }
 },
 {
  "id": "punishment-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/punishment-devil.webp",
  "name": "Punishment Devil",
  "wiki": "Punishment Devil",
  "role": {
   "id": "Iblis Hukuman",
   "en": "Punishment Devil"
  },
  "bio": {
   "id": "Iblis yang berkontrak dengan Michiko Tendo.",
   "en": "The devil contracted to Michiko Tendo."
  }
 },
 {
  "id": "denjis-father",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/denjis-father.webp",
  "name": "Denji's Father",
  "wiki": "Denji's Father",
  "role": {
   "id": "Ayah Denji",
   "en": "Denji's father"
  },
  "bio": {
   "id": "Ayah Denji yang tidak disebutkan namanya. Utangnya kepada yakuza menjadi awal penderitaan Denji.",
   "en": "Denji's unnamed father. His debt to the yakuza is where Denji's suffering begins."
  }
 },
 {
  "id": "sato",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/sato.webp",
  "name": "Sato",
  "wiki": "Sato",
  "role": {
   "id": "Devil Hunter Public Safety",
   "en": "Public Safety Devil Hunter"
  },
  "bio": {
   "id": "Devil Hunter Public Safety yang muncul di arc International Assassins.",
   "en": "A Public Safety Devil Hunter in the International Assassins arc."
  }
 },
 {
  "id": "takashi-inoue",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/takashi-inoue.webp",
  "name": "Takashi Inoue",
  "wiki": "Takashi Inoue",
  "role": {
   "id": "Warga sipil",
   "en": "Civilian"
  },
  "bio": {
   "id": "Warga sipil yang bekerja untuk Katana Man dan Akane Sawatari.",
   "en": "A civilian working for Katana Man and Akane Sawatari."
  }
 },
 {
  "id": "mantis-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/mantis-devil.webp",
  "name": "Mantis Devil",
  "wiki": "Mantis Devil",
  "role": {
   "id": "Iblis Belalang Sembah",
   "en": "Mantis Devil"
  },
  "bio": {
   "id": "Iblis yang muncul di akhir Part 1.",
   "en": "A devil appearing late in Part 1."
  }
 },
 {
  "id": "kobenis-car",
  "part": 1,
  "kind": "other",
  "img": "assets/img/wiki/kobenis-car.webp",
  "name": "Kobeni's car",
  "wiki": "Kobeni's car",
  "role": {
   "id": "Mobil Kobeni",
   "en": "Kobeni's car"
  },
  "bio": {
   "id": "Mobil milik Kobeni — sebuah Fiat 500 keluaran 1965. Ya, mobil ini punya halaman sendiri di wiki.",
   "en": "Kobeni's car — a 1965 Fiat 500. Yes, it has its own wiki page."
  }
 },
 {
  "id": "bucky",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/bucky.webp",
  "name": "Bucky",
  "wiki": "Bucky",
  "role": {
   "id": "Iblis Ayam",
   "en": "Chicken Devil"
  },
  "bio": {
   "id": "Iblis Ayam yang dipelihara kelas Asa — pemicu tragedi di chapter pertama Part 2.",
   "en": "The Chicken Devil kept as the class pet in Asa's class — the spark of Part 2's first tragedy."
  }
 },
 {
  "id": "justice-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/justice-devil.webp",
  "name": "Justice Devil",
  "wiki": "Justice Devil",
  "role": {
   "id": "Iblis Keadilan",
   "en": "Justice Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep keadilan. Namanya “dipinjam” di arc Justice Devil, sementara wujud aslinya baru muncul belakangan.",
   "en": "The devil embodying justice. Its name is “borrowed” in the Justice Devil arc, while the real one appears later."
  }
 },
 {
  "id": "tanaka",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/tanaka.webp",
  "name": "Tanaka",
  "wiki": "Tanaka",
  "role": {
   "id": "Guru kelas Asa",
   "en": "Asa's homeroom teacher"
  },
  "bio": {
   "id": "Guru kelas Asa Mitaka di SMA Fourth East, yang membawa Bucky ke kelas.",
   "en": "Asa Mitaka's teacher at Fourth East High, who brought Bucky to class."
  }
 },
 {
  "id": "nuclear-weapons-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Nuclear Weapons Devil",
  "wiki": "Nuclear Weapons Devil",
  "role": {
   "id": "Iblis Senjata Nuklir",
   "en": "Nuclear Weapons Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep senjata nuklir, terkait erat dengan Yoru.",
   "en": "The devil embodying nuclear weapons, closely tied to Yoru."
  },
  "spoiler": true
 },
 {
  "id": "cockroach-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/cockroach-devil.webp",
  "name": "Cockroach Devil",
  "wiki": "Cockroach Devil",
  "role": {
   "id": "Iblis Kecoak",
   "en": "Cockroach Devil"
  },
  "bio": {
   "id": "Iblis kecoak raksasa, antagonis minor di arc Justice Devil.",
   "en": "A giant cockroach devil, minor antagonist of the Justice Devil arc."
  }
 },
 {
  "id": "asa-mitakas-mother",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/asa-mitakas-mother.webp",
  "name": "Asa Mitaka's Mother",
  "wiki": "Asa Mitaka's Mother",
  "role": {
   "id": "Ibu Asa",
   "en": "Asa's mother"
  },
  "bio": {
   "id": "Ibu Asa Mitaka yang tidak disebutkan namanya, yang tewas beberapa tahun sebelum Part 2 dimulai.",
   "en": "Asa Mitaka's unnamed mother, who died years before Part 2 begins."
  }
 },
 {
  "id": "marshmallow-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/marshmallow-devil.webp",
  "name": "Marshmallow Devil",
  "wiki": "Marshmallow Devil",
  "role": {
   "id": "Iblis Marshmallow",
   "en": "Marshmallow Devil"
  },
  "bio": {
   "id": "Iblis kecil di chapter pertama yang namanya tidak pernah disebut di manga.",
   "en": "A minor devil from chapter one whose name is never given in the manga."
  }
 },
 {
  "id": "class-president",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/class-president.webp",
  "name": "Class President",
  "wiki": "Class President",
  "role": {
   "id": "Ketua kelas Asa",
   "en": "Asa's class president"
  },
  "bio": {
   "id": "Ketua kelas Asa yang tidak disebutkan namanya, yang diduga berkontrak dengan “Iblis Keadilan” karena cemburu.",
   "en": "Asa's unnamed class president, who allegedly made a contract with the “Justice Devil” out of jealousy."
  }
 },
 {
  "id": "seigi-akoku",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/seigi-akoku.webp",
  "name": "Seigi Akoku",
  "wiki": "Seigi Akoku",
  "role": {
   "id": "Anggota Klub Devil Hunter",
   "en": "Devil Hunter Club member"
  },
  "bio": {
   "id": "Siswa SMA Fourth East dan anggota Klub Devil Hunter.",
   "en": "A Fourth East High student and Devil Hunter Club member."
  }
 },
 {
  "id": "furio",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/furio.webp",
  "name": "Furio",
  "wiki": "Furio",
  "role": {
   "id": "Anggota Klub Devil Hunter",
   "en": "Devil Hunter Club member"
  },
  "bio": {
   "id": "Siswa SMA Fourth East dan anggota Klub Devil Hunter.",
   "en": "A Fourth East High student and Devil Hunter Club member."
  }
 },
 {
  "id": "taiyo-hayakawa",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/taiyo-hayakawa.webp",
  "name": "Taiyo Hayakawa",
  "wiki": "Taiyo Hayakawa",
  "role": {
   "id": "Adik Aki",
   "en": "Aki's younger brother"
  },
  "bio": {
   "id": "Adik laki-laki Aki Hayakawa, yang tewas diserang Iblis Senjata Api — sumber dendam Aki.",
   "en": "Aki Hayakawa's younger brother, killed by the Gun Devil — the root of Aki's vengeance."
  }
 },
 {
  "id": "division-4-female-member",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/division-4-female-member.webp",
  "name": "Division 4 Female Member",
  "wiki": "Division 4 Female Member",
  "role": {
   "id": "Anggota Divisi 4",
   "en": "Division 4 member"
  },
  "bio": {
   "id": "Anggota Divisi Khusus 4 tanpa nama yang berpasangan dengan Madoka.",
   "en": "An unnamed Special Division 4 member partnered with Madoka."
  }
 },
 {
  "id": "spear-hybrid",
  "part": 1,
  "kind": "hybrid",
  "img": "assets/img/wiki/spear-hybrid.webp",
  "name": "Spear Hybrid",
  "wiki": "Spear Hybrid",
  "role": {
   "id": "Hibrida Iblis Tombak",
   "en": "Spear Devil hybrid"
  },
  "bio": {
   "id": "Hibrida Iblis Tombak yang nama aslinya tidak diketahui — salah satu “Manusia Senjata”.",
   "en": "A Spear Devil hybrid whose real name is unknown — one of the “Weapon Humans”."
  },
  "spoiler": true
 },
 {
  "id": "miri-sugo",
  "part": 1,
  "kind": "hybrid",
  "img": "assets/img/wiki/miri-sugo.webp",
  "name": "Miri Sugo",
  "wiki": "Miri Sugo",
  "role": {
   "id": "Hibrida Iblis Pedang Panjang",
   "en": "Longsword Devil hybrid"
  },
  "bio": {
   "id": "Dikenal juga sebagai “Sword Man”, hibrida Iblis Pedang Panjang — salah satu “Manusia Senjata”.",
   "en": "Also known as “Sword Man”, a Longsword Devil hybrid — one of the “Weapon Humans”."
  },
  "spoiler": true
 },
 {
  "id": "debt-collector",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/debt-collector.webp",
  "name": "Debt Collector",
  "wiki": "Debt Collector",
  "role": {
   "id": "Bos yakuza penagih utang",
   "en": "Yakuza debt collector"
  },
  "bio": {
   "id": "Pemimpin yakuza yang memaksa Denji melunasi utang ayahnya — antagonis utama arc pembuka.",
   "en": "The yakuza boss who forced Denji to pay off his father's debt — main antagonist of the opening arc."
  }
 },
 {
  "id": "whip-hybrid",
  "part": 1,
  "kind": "hybrid",
  "img": "assets/img/wiki/whip-hybrid.webp",
  "name": "Whip Hybrid",
  "wiki": "Whip Hybrid",
  "role": {
   "id": "Hibrida Iblis Cambuk",
   "en": "Whip Devil hybrid"
  },
  "bio": {
   "id": "Hibrida Iblis Cambuk yang nama aslinya tidak diketahui — salah satu “Manusia Senjata”.",
   "en": "A Whip Devil hybrid whose real name is unknown — one of the “Weapon Humans”."
  },
  "spoiler": true
 },
 {
  "id": "famine-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/famine-devil.webp",
  "name": "Famine Devil",
  "wiki": "Famine Devil",
  "role": {
   "id": "Iblis Kelaparan (asli)",
   "en": "Famine Devil (the real one)"
  },
  "bio": {
   "id": "Iblis Kelaparan yang asli, salah satu Four Horsemen.",
   "en": "The real Famine Devil, one of the Four Horsemen."
  },
  "spoiler": true
 },
 {
  "id": "death-devil",
  "part": 1,
  "kind": "devil",
  "img": "assets/img/wiki/death-devil.webp",
  "name": "Death Devil",
  "wiki": "Death Devil",
  "role": {
   "id": "Iblis Kematian",
   "en": "Death Devil"
  },
  "bio": {
   "id": "Iblis terkuat yang pernah ada, mewakili kematian itu sendiri — anggota tertua Four Horsemen.",
   "en": "The strongest devil in existence, embodying death itself — eldest of the Four Horsemen."
  },
  "spoiler": true
 },
 {
  "id": "falling-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/falling-devil.webp",
  "name": "Falling Devil",
  "wiki": "Falling Devil",
  "role": {
   "id": "Iblis Jatuh",
   "en": "Falling Devil"
  },
  "bio": {
   "id": "Salah satu “ketakutan purba”: iblis jatuh — baik jatuh secara fisik maupun “jatuh” ke dalam depresi.",
   "en": "One of the “primal fears”: the devil of falling — both physically and into depression."
  }
 },
 {
  "id": "asa-mitakas-caretaker",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/asa-mitakas-caretaker.webp",
  "name": "Asa Mitaka's caretaker",
  "wiki": "Asa Mitaka's caretaker",
  "role": {
   "id": "Pengasuh panti asuhan Asa",
   "en": "Asa's orphanage caretaker"
  },
  "bio": {
   "id": "Pengasuh di panti asuhan tempat Asa tinggal setelah orang tuanya meninggal.",
   "en": "A caretaker at the orphanage where Asa lived after her parents died."
  }
 },
 {
  "id": "crambon",
  "part": 2,
  "kind": "other",
  "img": "assets/img/wiki/crambon.webp",
  "name": "Crambon",
  "wiki": "Crambon",
  "role": {
   "id": "Kucing Asa",
   "en": "Asa's cat"
  },
  "bio": {
   "id": "Kucing yang diselamatkan dan diadopsi Asa saat serangan Iblis Topan.",
   "en": "A cat Asa rescued and adopted during the Typhoon Devil attack."
  }
 },
 {
  "id": "minami-nakano",
  "part": "bs",
  "kind": "human",
  "img": "assets/img/wiki/minami-nakano.webp",
  "name": "Minami Nakano",
  "wiki": "Minami Nakano",
  "role": {
   "id": "Devil Hunter · Buddy Stories",
   "en": "Devil Hunter · Buddy Stories"
  },
  "bio": {
   "id": "Tokoh dari novel spin-off Chainsaw Man: Buddy Stories — Devil Hunter yang terlibat cinta segitiga dengan Kishibe dan Quanxi, lalu berhenti dari Public Safety.",
   "en": "From the spin-off novel Chainsaw Man: Buddy Stories — a Devil Hunter caught in a love triangle with Kishibe and Quanxi, who later quits Public Safety."
  }
 },
 {
  "id": "fake-chainsaw-man",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/fake-chainsaw-man.webp",
  "name": "Fake Chainsaw Man",
  "wiki": "Fake Chainsaw Man",
  "role": {
   "id": "Chainsaw Man Palsu",
   "en": "Fake Chainsaw Man"
  },
  "bio": {
   "id": "Sosok misterius yang menyamar sebagai Chainsaw Man untuk Gereja Chainsaw Man.",
   "en": "An enigmatic figure posing as Chainsaw Man for the Chainsaw Man Church."
  },
  "spoiler": true
 },
 {
  "id": "carpenter-bee-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/carpenter-bee-devil.webp",
  "name": "Carpenter Bee Devil",
  "wiki": "Carpenter Bee Devil",
  "role": {
   "id": "Iblis Lebah Kayu",
   "en": "Carpenter Bee Devil"
  },
  "bio": {
   "id": "Iblis yang dikalahkan Asa di masa ia bersama Gereja Chainsaw Man.",
   "en": "A devil Asa defeats during her time with the Chainsaw Man Church."
  }
 },
 {
  "id": "kenzo",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/kenzo.webp",
  "name": "Kenzo",
  "wiki": "Kenzo",
  "role": {
   "id": "Devil Hunter swasta",
   "en": "Private Devil Hunter"
  },
  "bio": {
   "id": "Devil Hunter swasta yang sudah tujuh tahun menjalani pekerjaannya.",
   "en": "A private Devil Hunter with seven years on the job."
  }
 },
 {
  "id": "house-devil",
  "part": "bs",
  "kind": "devil",
  "img": null,
  "name": "House Devil",
  "wiki": "House Devil",
  "role": {
   "id": "Iblis Rumah · Buddy Stories",
   "en": "House Devil · Buddy Stories"
  },
  "bio": {
   "id": "Iblis berwujud vila di atas bukit — antagonis utama chapter pertama Chainsaw Man: Buddy Stories.",
   "en": "A devil disguised as a hilltop villa — main antagonist of the first chapter of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "loneliness-fiend",
  "part": "bs",
  "kind": "fiend",
  "img": null,
  "name": "Loneliness Fiend",
  "wiki": "Loneliness Fiend",
  "role": {
   "id": "Fiend Kesepian · Buddy Stories",
   "en": "Loneliness Fiend · Buddy Stories"
  },
  "bio": {
   "id": "Fiend yang mewakili kesepian — antagonis utama chapter ketiga Chainsaw Man: Buddy Stories.",
   "en": "The fiend of loneliness — main antagonist of the third chapter of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "kanbayashi",
  "part": "bs",
  "kind": "human",
  "img": null,
  "name": "Kanbayashi",
  "wiki": "Kanbayashi",
  "role": {
   "id": "Pemilik vila · Buddy Stories",
   "en": "Villa owner · Buddy Stories"
  },
  "bio": {
   "id": "Pemilik vila besar di atas bukit, di Chainsaw Man: Buddy Stories.",
   "en": "Owner of a large hilltop villa in Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "shinohara",
  "part": "bs",
  "kind": "human",
  "img": null,
  "name": "Shinohara",
  "wiki": "Shinohara",
  "role": {
   "id": "Penghuni apartemen · Buddy Stories",
   "en": "Apartment tenant · Buddy Stories"
  },
  "bio": {
   "id": "Penghuni kamar 202 di chapter ketiga Chainsaw Man: Buddy Stories.",
   "en": "The tenant of room 202 in chapter 3 of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "yokota",
  "part": "bs",
  "kind": "human",
  "img": null,
  "name": "Yokota",
  "wiki": "Yokota",
  "role": {
   "id": "Penghuni apartemen · Buddy Stories",
   "en": "Apartment tenant · Buddy Stories"
  },
  "bio": {
   "id": "Penghuni kamar 301 di chapter ketiga Chainsaw Man: Buddy Stories.",
   "en": "The tenant of room 301 in chapter 3 of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "seraphim",
  "part": 1,
  "kind": "other",
  "img": "assets/img/wiki/seraphim.webp",
  "name": "Seraphim",
  "wiki": "Seraphim",
  "role": {
   "id": "Pengikut Chainsaw Man",
   "en": "Follower of Chainsaw Man"
  },
  "bio": {
   "id": "Iblis atau fiend misterius di bawah kendali Makima.",
   "en": "A mysterious devil or fiend under Makima's control."
  },
  "spoiler": true
 },
 {
  "id": "dominion",
  "part": 1,
  "kind": "other",
  "img": "assets/img/wiki/dominion.webp",
  "name": "Dominion",
  "wiki": "Dominion",
  "role": {
   "id": "Pengikut Chainsaw Man",
   "en": "Follower of Chainsaw Man"
  },
  "bio": {
   "id": "Iblis atau fiend misterius di bawah kendali Makima.",
   "en": "A mysterious devil or fiend under Makima's control."
  },
  "spoiler": true
 },
 {
  "id": "virtue",
  "part": 1,
  "kind": "other",
  "img": "assets/img/wiki/virtue.webp",
  "name": "Virtue",
  "wiki": "Virtue",
  "role": {
   "id": "Pengikut Chainsaw Man",
   "en": "Follower of Chainsaw Man"
  },
  "bio": {
   "id": "Iblis atau fiend misterius di bawah kendali Makima.",
   "en": "A mysterious devil or fiend under Makima's control."
  },
  "spoiler": true
 },
 {
  "id": "sato-buddy-stories",
  "part": "bs",
  "kind": "human",
  "img": null,
  "name": "Sato (Buddy Stories)",
  "wiki": "Sato (Buddy Stories)",
  "role": {
   "id": "Penghuni apartemen · Buddy Stories",
   "en": "Apartment tenant · Buddy Stories"
  },
  "bio": {
   "id": "Penghuni kamar 101 di chapter ketiga Chainsaw Man: Buddy Stories.",
   "en": "The tenant of room 101 in chapter 3 of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "nobana-higashiyama",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/nobana-higashiyama.webp",
  "name": "Nobana Higashiyama",
  "wiki": "Nobana Higashiyama",
  "role": {
   "id": "Adik Kobeni",
   "en": "Kobeni's younger brother"
  },
  "bio": {
   "id": "Adik laki-laki Kobeni, siswa SMA Fourth East dan anggota Klub Devil Hunter.",
   "en": "Kobeni's younger brother, a Fourth East High student and Devil Hunter Club member."
  }
 },
 {
  "id": "fire-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/fire-devil.webp",
  "name": "Fire Devil",
  "wiki": "Fire Devil",
  "role": {
   "id": "Iblis Api",
   "en": "Fire Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili api. Orang yang berkontrak dengannya mendapat kekuatan besar, tapi perlahan dikuasai hasrat yang menyimpang.",
   "en": "The devil of fire. Its contractors gain immense power but are slowly consumed by twisted desires."
  },
  "spoiler": true
 },
 {
  "id": "division-2-vice-captain",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/division-2-vice-captain.webp",
  "name": "Division 2 Vice Captain",
  "wiki": "Division 2 Vice Captain",
  "role": {
   "id": "Wakil Kapten Divisi 2",
   "en": "Division 2 Vice Captain"
  },
  "bio": {
   "id": "Wakil kapten Divisi 2 Tokyo yang muncul di arc Bomb Girl.",
   "en": "The Tokyo Division 2 vice captain who appears in the Bomb Girl arc."
  }
 },
 {
  "id": "guillotine-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/guillotine-devil.webp",
  "name": "Guillotine Devil",
  "wiki": "Guillotine Devil",
  "role": {
   "id": "Iblis Guillotine",
   "en": "Guillotine Devil"
  },
  "bio": {
   "id": "Iblis guillotine, salah satu pion Iblis Kematian.",
   "en": "The guillotine devil, one of the Death Devil's pawns."
  }
 },
 {
  "id": "nail-fiend",
  "part": 2,
  "kind": "fiend",
  "img": "assets/img/wiki/nail-fiend.webp",
  "name": "Nail Fiend",
  "wiki": "Nail Fiend",
  "role": {
   "id": "Fiend Paku · Divisi 7",
   "en": "Nail Fiend · Division 7"
  },
  "bio": {
   "id": "Devil Hunter fiend di Divisi Khusus 7 yang sering bertugas bersama Katana Man.",
   "en": "A fiend Devil Hunter in Special Division 7 who often works with Katana Man."
  }
 },
 {
  "id": "takagi",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/takagi.webp",
  "name": "Takagi",
  "wiki": "Takagi",
  "role": {
   "id": "Devil Hunter · Divisi 7",
   "en": "Devil Hunter · Division 7"
  },
  "bio": {
   "id": "Devil Hunter Divisi Khusus 7 yang menjaga pusat penahanan iblis Tokyo.",
   "en": "A Special Division 7 Devil Hunter guarding the Tokyo Devil Detention Center."
  }
 },
 {
  "id": "division-4-male-member",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/division-4-male-member.webp",
  "name": "Division 4 Male Member",
  "wiki": "Division 4 Male Member",
  "role": {
   "id": "Anggota Divisi 4",
   "en": "Division 4 member"
  },
  "bio": {
   "id": "Anggota Divisi Khusus 4 tanpa nama yang berpasangan dengan Fushi.",
   "en": "An unnamed Special Division 4 member partnered with Fushi."
  }
 },
 {
  "id": "ear-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/ear-devil.webp",
  "name": "Ear Devil",
  "wiki": "Ear Devil",
  "role": {
   "id": "Iblis Telinga · Divisi 5",
   "en": "Ear Devil · Division 5"
  },
  "bio": {
   "id": "Iblis telinga yang bekerja sebagai Devil Hunter di Divisi Khusus 5 Tokyo.",
   "en": "The ear devil, working as a Devil Hunter in Tokyo Special Division 5."
  }
 },
 {
  "id": "centipede-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/centipede-devil.webp",
  "name": "Centipede Devil",
  "wiki": "Centipede Devil",
  "role": {
   "id": "Iblis Lipan · Divisi 6",
   "en": "Centipede Devil · Division 6"
  },
  "bio": {
   "id": "Iblis lipan yang bekerja di Divisi Khusus 6 Tokyo.",
   "en": "The centipede devil, working in Tokyo Special Division 6."
  }
 },
 {
  "id": "pillbug-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/pillbug-devil.webp",
  "name": "Pillbug Devil",
  "wiki": "Pillbug Devil",
  "role": {
   "id": "Iblis Kutu Trenggiling · Divisi 6",
   "en": "Pillbug Devil · Division 6"
  },
  "bio": {
   "id": "Iblis kutu trenggiling yang bekerja di Divisi Khusus 6 Tokyo — antagonis minor di arc Aging Devil.",
   "en": "The pillbug devil of Tokyo Special Division 6 — a minor antagonist in the Aging Devil arc."
  }
 },
 {
  "id": "aging-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/aging-devil.webp",
  "name": "Aging Devil",
  "wiki": "Aging Devil",
  "role": {
   "id": "Iblis Penuaan",
   "en": "Aging Devil"
  },
  "bio": {
   "id": "Salah satu “ketakutan purba”: iblis penuaan — antagonis utama arc Aging Devil.",
   "en": "One of the “primal fears”: the devil of aging — main antagonist of the Aging Devil arc."
  }
 },
 {
  "id": "snow-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/snow-devil.webp",
  "name": "Snow Devil",
  "wiki": "Snow Devil",
  "role": {
   "id": "Iblis Salju",
   "en": "Snow Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili salju, muncul di arc Aging Devil.",
   "en": "The devil of snow, appearing in the Aging Devil arc."
  }
 },
 {
  "id": "mouth-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/mouth-devil.webp",
  "name": "Mouth Devil",
  "wiki": "Mouth Devil",
  "role": {
   "id": "Iblis Mulut",
   "en": "Mouth Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili mulut, muncul di arc Aging Devil.",
   "en": "The devil of mouths, appearing in the Aging Devil arc."
  }
 },
 {
  "id": "bitterness-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/bitterness-devil.webp",
  "name": "Bitterness Devil",
  "wiki": "Bitterness Devil",
  "role": {
   "id": "Iblis Kepahitan",
   "en": "Bitterness Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili kepahitan, muncul di arc Aging Devil.",
   "en": "The devil of bitterness, appearing in the Aging Devil arc."
  }
 },
 {
  "id": "kentaro-ishita",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/kentaro-ishita.webp",
  "name": "Kentaro Ishita",
  "wiki": "Kentaro Ishita",
  "role": {
   "id": "Perdana Menteri Jepang",
   "en": "Prime Minister of Japan"
  },
  "bio": {
   "id": "Perdana Menteri Jepang yang sedang menjabat di Part 2.",
   "en": "Japan's sitting Prime Minister in Part 2."
  }
 },
 {
  "id": "hadaji-sakagami",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/hadaji-sakagami.webp",
  "name": "Hadaji Sakagami",
  "wiki": "Hadaji Sakagami",
  "role": {
   "id": "Menteri Dalam Negeri & Komunikasi",
   "en": "Minister of Internal Affairs"
  },
  "bio": {
   "id": "Menteri Dalam Negeri dan Komunikasi Jepang di Part 2.",
   "en": "Japan's Minister of Internal Affairs and Communications in Part 2."
  }
 },
 {
  "id": "shin-toma",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/shin-toma.webp",
  "name": "Shin Toma",
  "wiki": "Shin Toma",
  "role": {
   "id": "Menteri Pertahanan",
   "en": "Minister of Defense"
  },
  "bio": {
   "id": "Menteri Pertahanan Jepang di Part 2.",
   "en": "Japan's Minister of Defense in Part 2."
  }
 },
 {
  "id": "yuki-tomoda",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/yuki-tomoda.webp",
  "name": "Yuki Tomoda",
  "wiki": "Yuki Tomoda",
  "role": {
   "id": "Kepala Sekretaris Kabinet",
   "en": "Chief Cabinet Secretary"
  },
  "bio": {
   "id": "Kepala Sekretaris Kabinet Jepang di Part 2.",
   "en": "Japan's Chief Cabinet Secretary in Part 2."
  }
 },
 {
  "id": "tadashi-hasegawa",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/tadashi-hasegawa.webp",
  "name": "Tadashi Hasegawa",
  "wiki": "Tadashi Hasegawa",
  "role": {
   "id": "Mantan Menteri Keuangan",
   "en": "Former Minister of Finance"
  },
  "bio": {
   "id": "Mantan Menteri Keuangan Jepang.",
   "en": "Japan's former Minister of Finance."
  }
 },
 {
  "id": "miki-takanashi",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/miki-takanashi.webp",
  "name": "Miki Takanashi",
  "wiki": "Miki Takanashi",
  "role": {
   "id": "Menteri Ekonomi, Perdagangan & Industri",
   "en": "Minister of Economy, Trade & Industry"
  },
  "bio": {
   "id": "Menteri Ekonomi, Perdagangan, dan Industri Jepang di Part 2.",
   "en": "Japan's Minister of Economy, Trade, and Industry in Part 2."
  }
 },
 {
  "id": "tank-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Tank Devil",
  "wiki": "Tank Devil",
  "role": {
   "id": "Iblis Tank",
   "en": "Tank Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili tank.",
   "en": "The devil of tanks."
  }
 },
 {
  "id": "aging-devils-victim",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/aging-devils-victim.webp",
  "name": "Aging Devil's Victim",
  "wiki": "Aging Devil's Victim",
  "role": {
   "id": "Korban Iblis Penuaan",
   "en": "Aging Devil's victim"
  },
  "bio": {
   "id": "Mantan Devil Hunter tanpa nama yang terjebak di “Dunia Penuaan”.",
   "en": "An unnamed former Devil Hunter trapped in “Aging's World”."
  }
 },
 {
  "id": "mannequin-devil",
  "part": "bs",
  "kind": "devil",
  "img": null,
  "name": "Mannequin Devil",
  "wiki": "Mannequin Devil",
  "role": {
   "id": "Iblis Manekin · Buddy Stories",
   "en": "Mannequin Devil · Buddy Stories"
  },
  "bio": {
   "id": "Iblis manekin — antagonis utama chapter kedua Chainsaw Man: Buddy Stories.",
   "en": "The mannequin devil — main antagonist of the second chapter of Chainsaw Man: Buddy Stories."
  }
 },
 {
  "id": "shuzo-mishima",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/shuzo-mishima.webp",
  "name": "Shuzo Mishima",
  "wiki": "Shuzo Mishima",
  "role": {
   "id": "Warga sipil",
   "en": "Civilian"
  },
  "bio": {
   "id": "Warga sipil yang bekerja untuk Katana Man dan Akane Sawatari.",
   "en": "A civilian working for Katana Man and Akane Sawatari."
  }
 },
 {
  "id": "mysterious-man",
  "part": 1,
  "kind": "human",
  "img": "assets/img/wiki/mysterious-man.webp",
  "name": "Mysterious Man",
  "wiki": "Mysterious Man",
  "role": {
   "id": "Devil Hunter swasta misterius",
   "en": "Mysterious private Devil Hunter"
  },
  "bio": {
   "id": "Dikenal juga sebagai “Pria Mohawk” — Devil Hunter swasta yang mencoba memancing Denji lewat Reze demi jantungnya.",
   "en": "Also called “Mohawk Man” — a private Devil Hunter who tries to lure Denji out through Reze to get his heart."
  }
 },
 {
  "id": "std-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "STD Devil",
  "wiki": "STD Devil",
  "role": {
   "id": "Iblis PMS",
   "en": "STD Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili penyakit menular seksual, disebut di akhir Part 2.",
   "en": "The devil of sexually transmitted diseases, mentioned late in Part 2."
  }
 },
 {
  "id": "frog-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/frog-devil.webp",
  "name": "Frog Devil",
  "wiki": "Frog Devil",
  "role": {
   "id": "Iblis Katak",
   "en": "Frog Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili katak, muncul di arc Chainsaw Man Church.",
   "en": "The devil of frogs, appearing in the Chainsaw Man Church arc."
  }
 },
 {
  "id": "stag-beetle-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/stag-beetle-devil.webp",
  "name": "Stag Beetle Devil",
  "wiki": "Stag Beetle Devil",
  "role": {
   "id": "Iblis Kumbang Rusa · Divisi 6",
   "en": "Stag Beetle Devil · Division 6"
  },
  "bio": {
   "id": "Iblis kumbang rusa yang bekerja di Divisi Khusus 6 Tokyo.",
   "en": "The stag beetle devil, working in Tokyo Special Division 6."
  }
 },
 {
  "id": "accident-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/accident-devil.webp",
  "name": "Accident Devil",
  "wiki": "Accident Devil",
  "role": {
   "id": "Iblis Kecelakaan",
   "en": "Accident Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili kecelakaan, tubuhnya sebagian tersusun dari mobil-mobil ringsek.",
   "en": "The devil of accidents, its body partly made of wrecked cars."
  }
 },
 {
  "id": "chocolate",
  "part": 1,
  "kind": "other",
  "img": "assets/img/wiki/chocolate.webp",
  "name": "Chocolate",
  "wiki": "Chocolate",
  "role": {
   "id": "Kucing di dekat mesin minuman",
   "en": "The vending-machine cat"
  },
  "bio": {
   "id": "Kucing yang ditemui Power di depan mesin penjual minuman.",
   "en": "A cat Power meets in front of a vending machine."
  }
 },
 {
  "id": "asa-mitakas-father",
  "part": 2,
  "kind": "human",
  "img": "assets/img/wiki/asa-mitakas-father.webp",
  "name": "Asa Mitaka's Father",
  "wiki": "Asa Mitaka's Father",
  "role": {
   "id": "Ayah Asa",
   "en": "Asa's father"
  },
  "bio": {
   "id": "Ayah Asa Mitaka yang tidak disebutkan namanya, yang meninggal beberapa tahun sebelum Part 2.",
   "en": "Asa Mitaka's unnamed father, who died years before Part 2."
  }
 },
 {
  "id": "moray-eel-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/moray-eel-devil.webp",
  "name": "Moray Eel Devil",
  "wiki": "Moray Eel Devil",
  "role": {
   "id": "Iblis Belut Moray",
   "en": "Moray Eel Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili belut moray, muncul di arc War Devil bersama Yoru.",
   "en": "The devil of moray eels, appearing with Yoru in the War Devil arc."
  }
 },
 {
  "id": "lion-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/lion-devil.webp",
  "name": "Lion Devil",
  "wiki": "Lion Devil",
  "role": {
   "id": "Iblis Singa",
   "en": "Lion Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili singa, muncul di arc War Devil bersama Yoru.",
   "en": "The devil of lions, appearing with Yoru in the War Devil arc."
  }
 },
 {
  "id": "teeth-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Teeth Devil",
  "wiki": "Teeth Devil",
  "role": {
   "id": "Iblis Gigi",
   "en": "Teeth Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili gigi, muncul di akhir Part 2.",
   "en": "The devil of teeth, appearing late in Part 2."
  }
 },
 {
  "id": "legs-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Legs Devil",
  "wiki": "Legs Devil",
  "role": {
   "id": "Iblis Kaki",
   "en": "Legs Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili kaki, muncul di akhir Part 2.",
   "en": "The devil of legs, appearing late in Part 2."
  }
 },
 {
  "id": "locust-devil",
  "part": 2,
  "kind": "devil",
  "img": "assets/img/wiki/locust-devil.webp",
  "name": "Locust Devil",
  "wiki": "Locust Devil",
  "role": {
   "id": "Iblis Belalang",
   "en": "Locust Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili belalang dan serangan hama besar-besaran — antagonis minor di arc War Devil.",
   "en": "The devil of locusts and mass infestation — a minor antagonist in the War Devil arc."
  }
 },
 {
  "id": "world-war-ii-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "World War II Devil",
  "wiki": "World War II Devil",
  "role": {
   "id": "Iblis Perang Dunia II",
   "en": "World War II Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili Perang Dunia II, disebut di chapter 84.",
   "en": "The devil of World War II, mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "aids-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "AIDS Devil",
  "wiki": "AIDS Devil",
  "role": {
   "id": "Iblis AIDS",
   "en": "AIDS Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili penyakit AIDS, disebut di chapter 84.",
   "en": "The devil of AIDS, mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "arnolone-syndrome-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Arnolone Syndrome Devil",
  "wiki": "Arnolone Syndrome Devil",
  "role": {
   "id": "Iblis Sindrom Arnolone",
   "en": "Arnolone Syndrome Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili “sindrom Arnolone”, penyakit yang tak dikenal pembaca — disebut di chapter 84.",
   "en": "The devil of “Arnolone syndrome”, a disease unknown to readers — mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "light-of-a-star-that-breaks-childrens-minds-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Light of a Star That Breaks Children's Minds Devil",
  "wiki": "Light of a Star That Breaks Children's Minds Devil",
  "role": {
   "id": "Iblis Cahaya Bintang Perusak Pikiran Anak",
   "en": "Light of a Star That Breaks Children's Minds Devil"
  },
  "bio": {
   "id": "Iblis dengan nama terpanjang di seri ini, mewakili cahaya bintang yang merusak pikiran anak-anak — disebut di chapter 84.",
   "en": "The devil with the longest name in the series, embodying a star's light that breaks children's minds — mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "mount-hio-eruption-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Mount Hio Eruption Devil",
  "wiki": "Mount Hio Eruption Devil",
  "role": {
   "id": "Iblis Letusan Gunung Hio",
   "en": "Mount Hio Eruption Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili letusan Gunung Hio — peristiwa yang tak dikenal pembaca — disebut di chapter 84.",
   "en": "The devil of the Mount Hio eruption — an event unknown to readers — mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "nazi-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Nazi Devil",
  "wiki": "Nazi Devil",
  "role": {
   "id": "Iblis Nazi",
   "en": "Nazi Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili Nazisme, disebut di chapter 84.",
   "en": "The devil of Nazism, mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "sixth-sense-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Sixth Sense Devil",
  "wiki": "Sixth Sense Devil",
  "role": {
   "id": "Iblis Indra Keenam",
   "en": "Sixth Sense Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili indra keenam, disebut di chapter 84.",
   "en": "The devil of the sixth sense, mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "soa-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "SOA Devil",
  "wiki": "SOA Devil",
  "role": {
   "id": "Iblis SOA",
   "en": "SOA Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili “SOA”, konsep misterius yang disebut di chapter 84.",
   "en": "The devil of “SOA”, a mysterious concept mentioned in chapter 84."
  },
  "spoiler": true
 },
 {
  "id": "car-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Car Devil",
  "wiki": "Car Devil",
  "role": {
   "id": "Iblis Mobil",
   "en": "Car Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili mobil, disebut sejak awal cerita.",
   "en": "The devil of cars, mentioned early in the story."
  }
 },
 {
  "id": "coffee-devil",
  "part": 1,
  "kind": "devil",
  "img": null,
  "name": "Coffee Devil",
  "wiki": "Coffee Devil",
  "role": {
   "id": "Iblis Kopi",
   "en": "Coffee Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili kopi, disebut sejak awal cerita.",
   "en": "The devil of coffee, mentioned early in the story."
  }
 },
 {
  "id": "equality-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Equality Devil",
  "wiki": "Equality Devil",
  "role": {
   "id": "Iblis Kesetaraan",
   "en": "Equality Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili kesetaraan, disebut di arc Chainsaw Man Church.",
   "en": "The devil of equality, mentioned in the Chainsaw Man Church arc."
  }
 },
 {
  "id": "fairness-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Fairness Devil",
  "wiki": "Fairness Devil",
  "role": {
   "id": "Iblis Keadilan Merata",
   "en": "Fairness Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili keadilan dalam arti “perlakuan yang sama”, disebut di arc Chainsaw Man Church.",
   "en": "The devil of fairness, mentioned in the Chainsaw Man Church arc."
  }
 },
 {
  "id": "gravity-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Gravity Devil",
  "wiki": "Gravity Devil",
  "role": {
   "id": "Iblis Gravitasi",
   "en": "Gravity Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili gaya gravitasi, disebut di arc Falling Devil.",
   "en": "The devil of gravity, mentioned in the Falling Devil arc."
  }
 },
 {
  "id": "moon-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Moon Devil",
  "wiki": "Moon Devil",
  "role": {
   "id": "Iblis Bulan",
   "en": "Moon Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili Bulan, disebut di arc Falling Devil.",
   "en": "The devil of the Moon, mentioned in the Falling Devil arc."
  }
 },
 {
  "id": "people-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "People Devil",
  "wiki": "People Devil",
  "role": {
   "id": "Iblis Manusia",
   "en": "People Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep “manusia”, disebut menjelang akhir manga.",
   "en": "The devil of “people”, mentioned near the manga's end."
  }
 },
 {
  "id": "sickness-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Sickness Devil",
  "wiki": "Sickness Devil",
  "role": {
   "id": "Iblis Penyakit",
   "en": "Sickness Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili penyakit, disebut di arc Aging Devil.",
   "en": "The devil of sickness, mentioned in the Aging Devil arc."
  }
 },
 {
  "id": "suicide-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Suicide Devil",
  "wiki": "Suicide Devil",
  "role": {
   "id": "Iblis Bunuh Diri",
   "en": "Suicide Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili konsep bunuh diri, disebut di arc Falling Devil.",
   "en": "The devil embodying suicide, mentioned in the Falling Devil arc."
  }
 },
 {
  "id": "trauma-devil",
  "part": 2,
  "kind": "devil",
  "img": null,
  "name": "Trauma Devil",
  "wiki": "Trauma Devil",
  "role": {
   "id": "Iblis Trauma",
   "en": "Trauma Devil"
  },
  "bio": {
   "id": "Iblis yang mewakili trauma fisik dan psikologis, disebut di arc Falling Devil.",
   "en": "The devil of physical and psychological trauma, mentioned in the Falling Devil arc."
  }
 }
];

const ALL_DETAILS = {
 "tomato-devil": {
  "jp": "トマトの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Hinata Tadokoro",
   "vaEn": "Kristian Eros",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk kelompok iblis bertema makanan, bersama Iblis Kopi, Iblis Anggur, dan Iblis Marshmallow.",
    "en": "It belongs to the food-themed devils, alongside the Coffee, Grape, and Marshmallow Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Lycopersicoaphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Lycopersicoaphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #48, #79, #79.",
    "en": "Rankings in the official popularity polls: #48, #79, #79."
   }
  ]
 },
 "zombie-devil": {
  "jp": "ゾンビの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar; Iblis kontrak",
    "en": "Wild Devil; Contract Devil"
   },
   "affiliation": {
    "id": "Yakuza (dulu); Makima (dicuci otak)",
    "en": "Yakuza (formerly); Makima (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Kōki Miyata",
   "vaEn": "Linda Young",
   "contracts": {
    "id": "Various Yakuza †",
    "en": "Various Yakuza †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia antagonis kedua di arc pembuka, setelah para yakuza yang mengkhianati Denji.",
    "en": "He's the secondary antagonist of the opening arc, after the yakuza who betray Denji."
   },
   {
    "id": "Kematiannya justru menjadi momen lahirnya Chainsaw Man.",
    "en": "His death marks the birth of Chainsaw Man.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Kinemortophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Kinemortophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #78, #140.",
    "en": "Rankings in the official popularity polls: #78, #140."
   }
  ]
 },
 "bat-devil": {
  "jp": "コウモリの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Power (briefly, dipaksa); Leech Devil †",
    "en": "Power (briefly, via coercion); Leech Devil †",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 6 · Episode 3",
    "en": "Chapter 6 · Episode 3"
   },
   "vaJp": "Matsuda Ken'ichirō",
   "vaEn": "Gabe Kunda",
   "family": {
    "id": "Leech Devil † (kekasih)",
    "en": "Leech Devil † (girlfriend)",
    "spoiler": true
   },
   "aliases": {
    "id": "Batty (by Leech Devil)",
    "en": "Batty (by Leech Devil)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Wujud inkarnasi keduanya sengaja dibuat mirip lukisan “Saturnus Memangsa Putranya” karya Francisco Goya.",
    "en": "His second incarnation is visually modeled on Francisco Goya's painting “Saturn Devouring His Son”."
   },
   {
    "id": "Iblis yang mati bisa terlahir kembali — Iblis Kelelawar muncul lagi di Part 2.",
    "en": "Devils that die can be reborn — the Bat Devil reappears in Part 2.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Chiroptophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Chiroptophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #73, #182.",
    "en": "Rankings in the official popularity polls: #73, #182."
   }
  ]
 },
 "muscle-devil": {
  "jp": "筋肉の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 2",
    "en": "Chapter 2"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Meski dipotong dari anime, ia tetap muncul di animasi ending ketiga, “Hawatari Nioku Centi”.",
    "en": "Though cut from the anime, it still shows up in the third ending animation, “Hawatari Nioku Centi”."
   },
   {
    "id": "Ia termasuk iblis bertema tubuh, bersama Iblis Telinga, Kaki, Mulut, Kulit, dan Gigi.",
    "en": "It's one of the body-themed devils, alongside the Ear, Legs, Mouth, Skin, and Teeth Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Kinesiophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Kinesiophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #74, #126.",
    "en": "Rankings in the official popularity polls: #74, #126."
   }
  ]
 },
 "gun-devil": {
  "jp": "銃の悪魔",
  "profile": {
   "species": {
    "id": "Iblis (80%) Fiend (20%, dulu)",
    "en": "Devil (80%) Fiend (20%, formerly)"
   },
   "age": {
    "id": "15 years (of known existence)",
    "en": "15 years (of known existence)"
   },
   "origin": {
    "id": "Neraka; United States (after escaping Neraka)",
    "en": "Hell; United States (after escaping Hell)"
   },
   "occupation": {
    "id": "Iblis liar (dulu); Iblis kontrak for the Amerika Serikat; Iblis kontrak for Governments",
    "en": "Wild Devil (formerly); Contract Devil for the USA; Contract Devil for Governments",
    "spoiler": true
   },
   "affiliation": {
    "id": "Amerika Serikat (dulu); Uni Soviet (dulu); Multiple Governments Across The Globe; Yoru",
    "en": "USA (formerly); Soviet Union (formerly); Multiple Governments Across The Globe; Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 4 (disebut); Chapter 75 · Episode 2 (disebut)",
    "en": "Chapter 4 (Mentioned); Chapter 75 · Episode 2 (Mentioned)"
   },
   "contracts": {
    "id": "US President Approximately 40,000 members of the National Pistol Association of Amerika Serikat",
    "en": "US President Approximately 40,000 members of the National Pistol Association of USA",
    "spoiler": true
   },
   "aliases": {
    "id": "Gun",
    "en": "Gun",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal (48%); Hidup (52%)",
    "en": "Deceased (48%); Alive (52%)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Fujimoto menyebut Iblis Senjata Api sebagai gambaran sisi “negara bebas” dan “masyarakat senjata” Amerika Serikat.",
    "en": "Fujimoto described the Gun Devil as a depiction of the “free country” and “gun society” side of the United States."
   },
   {
    "id": "Ia tidak bisa membunuh makhluk yang lahir di bulan April, Juli, atau Oktober — kemungkinan permainan kata, karena nama April (shigatsu) dan Juli (shichigatsu) dalam bahasa Jepang mengandung bunyi “shi” yang mirip kata “mati”.",
    "en": "It couldn't kill anyone born in April, July, or October — likely a pun, since the Japanese names for April (shigatsu) and July (shichigatsu) contain “shi”, a homophone for “death”."
   },
   {
    "id": "Yoru menganggap Iblis Senjata Api sebagai “anaknya”, karena senjata lahir dari perang.",
    "en": "Yoru considers the Gun Devil her “child”, since guns were born from war.",
    "spoiler": true
   },
   {
    "id": "Yoru mengaktifkan kontrak Iblis Senjata Api lewat Patung Liberty — permainan kata antara “gun” dan “liberty” dalam bahasa Jepang.",
    "en": "Yoru activates a Gun Devil contract through the Statue of Liberty — a Japanese pun between “gun” and “liberty”.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Hoplophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Hoplophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #53, #50, #39.",
    "en": "Rankings in the official popularity polls: #53, #50, #39."
   }
  ]
 },
 "eternity-devil": {
  "jp": "永遠の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Fami",
    "en": "Fami",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 14 · Episode 5",
    "en": "Chapter 14 · Episode 5"
   },
   "vaJp": "Hironori Kondō; Masao Komaya; Kozue Saitō; Yū Sasahara",
   "vaEn": "Grant Paulsen; Ariel Graham; Charles Nguyen; William Ofoegbu; Bradley Gareth; Davon Oliver; Morgan Larabee; Rachel Thompson; Abigail Blythe; Kelly Greenshield; Matt Sinclair; Lisette Monique Diaz; James Larabee",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Angka 8 muncul berulang (lantai 8, jam berhenti di 8:18) karena bentuknya mirip lambang tak hingga (∞).",
    "en": "The number 8 keeps appearing (8th floor, clocks frozen at 8:18) because it resembles the infinity symbol (∞)."
   },
   {
    "id": "Inti tubuhnya pun berbentuk seperti lambang tak hingga.",
    "en": "Even its core is shaped like the infinity symbol."
   },
   {
    "id": "Ia termasuk iblis bertema waktu, bersama Iblis Masa Depan dan Iblis Penuaan.",
    "en": "It's one of the time-themed devils, alongside the Future and Aging Devils."
   },
   {
    "id": "Ia muncul lagi di Part 2 dan berperan di arc Dating Denji.",
    "en": "It returns in Part 2 and plays a part in the Dating Denji arc.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Apeirophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Apeirophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #64, #124.",
    "en": "Rankings in the official popularity polls: #64, #124."
   }
  ]
 },
 "sea-cucumber-devil": {
  "jp": "ナマコの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 5 · Episode 2",
    "en": "Chapter 5 · Episode 2"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema laut, bersama Iblis Ikan, Belut Moray, Gurita, dan Hiu.",
    "en": "It's one of the sea-themed devils, alongside the Fish, Moray Eel, Octopus, and Shark Devils."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #68, #129.",
    "en": "Rankings in the official popularity polls: #68, #129."
   }
  ]
 },
 "leech-devil": {
  "jp": "ヒルの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Bat Devil †",
    "en": "Bat Devil †",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 9 · Episode 4",
    "en": "Chapter 9 · Episode 4"
   },
   "vaJp": "Yuuko Tachibana",
   "vaEn": "Corey Pettit",
   "family": {
    "id": "Bat Devil † (boyfriend)",
    "en": "Bat Devil † (boyfriend)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Bdellophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Bdellophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #85, #107.",
    "en": "Rankings in the official popularity polls: #85, #107."
   }
  ]
 },
 "fox-devil": {
  "jp": "狐の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar (dulu); Iblis kontrak",
    "en": "Wild Devil (formerly); Contract Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 10 · Episode 4",
    "en": "Chapter 10 · Episode 4"
   },
   "vaJp": "Yūko Kaida",
   "vaEn": "Natalie Van Sistine",
   "contracts": {
    "id": "Multiple unnamed devil hunters; Aki Hayakawa (dulu); Hirokazu Arai (dulu); Nomo (dulu); Division 2 Vice Captain (dulu); Nakamura (dulu)",
    "en": "Multiple unnamed devil hunters; Aki Hayakawa (formerly); Hirokazu Arai (formerly); Nomo (formerly); Division 2 Vice Captain (formerly); Nakamura (formerly)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kata pemanggilnya, “Kon”, adalah bunyi rubah dalam bahasa Jepang — seperti “nyan” untuk kucing atau “wan” untuk anjing.",
    "en": "Its summoning word, “Kon”, is the Japanese sound a fox makes — like “nyan” for cats or “wan” for dogs."
   },
   {
    "id": "Kekuatannya bersumber dari Fennecaphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Fennecaphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #37, #46, #59.",
    "en": "Rankings in the official popularity polls: #37, #46, #59."
   }
  ]
 },
 "fushi": {
  "jp": "伏",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 20 · Episode 7",
    "en": "Chapter 20 · Episode 7"
   },
   "vaJp": "Chikahiro Kobayashi",
   "vaEn": "Christopher Wehkamp",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #24, #52, #61.",
    "en": "Rankings in the official popularity polls: #24, #52, #61."
   }
  ]
 },
 "curse-devil": {
  "jp": "呪いの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 24 · Episode 8",
    "en": "Chapter 24 · Episode 8"
   },
   "vaJp": "Yūko Ueda",
   "vaEn": "Stephanie Young",
   "contracts": {
    "id": "Santa Claus Aki Hayakawa †",
    "en": "Santa Claus Aki Hayakawa †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ritual pakunya kemungkinan merujuk ke Ushi-no-Toki-Mairi, ritual kutukan Jepang dengan memaku boneka atau pohon keramat.",
    "en": "Its nail ritual likely references Ushi-no-Toki-Mairi, a Japanese curse ritual of driving nails into an effigy or sacred tree."
   },
   {
    "id": "Di manga, jari-jarinya muncul dari sedikit di luar panel; di anime, jari itu tiba-tiba muncul dari luar layar.",
    "en": "In the manga, its fingers reach in from just outside the panel; in the anime, they appear from offscreen."
   },
   {
    "id": "Kekuatannya bersumber dari Deprecophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Deprecophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #43, #62, #118.",
    "en": "Rankings in the official popularity polls: #43, #62, #118."
   }
  ]
 },
 "snake-devil": {
  "jp": "ヘビの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Wild Iblis kontrak",
    "en": "Wild Contract Devil"
   },
   "debut": {
    "id": "Chapter 25 · Episode 8",
    "en": "Chapter 25 · Episode 8"
   },
   "contracts": {
    "id": "Akane Sawatari †",
    "en": "Akane Sawatari †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Konsep awal Power yang dibagikan Fujimoto menampilkan ular yang melilit tubuhnya — kemungkinan cikal bakal Iblis Ular dan Akane.",
    "en": "Early Power concept art Fujimoto shared shows a snake coiled around her — likely the seed of the Snake Devil and Akane."
   },
   {
    "id": "Kekuatannya bersumber dari Ophidiophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Ophidiophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #57, #83, #136.",
    "en": "Rankings in the official popularity polls: #57, #83, #136."
   }
  ]
 },
 "ghost-devil": {
  "jp": "幽霊の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Wild Iblis kontrak",
    "en": "Wild Contract Devil"
   },
   "debut": {
    "id": "Chapter 15 (kemampuan); Chapter 25 · Episode 5 (kemampuan); Episode 8",
    "en": "Chapter 15 (Ability); Chapter 25 · Episode 5 (Ability); Episode 8"
   },
   "vaJp": "Hiroko Kiso",
   "vaEn": "Brandi Price",
   "contracts": {
    "id": "Himeno (dulu)",
    "en": "Himeno (formerly)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kemampuannya sudah dipakai di chapter 15, sebelum wujudnya benar-benar diperlihatkan di chapter 25.",
    "en": "Its ability is used as early as chapter 15, before it's properly shown in chapter 25."
   },
   {
    "id": "Himeno membayar kontraknya dengan bagian tubuhnya — itulah alasan ia memakai penutup mata.",
    "en": "Himeno pays for the contract with parts of her body — the reason she wears an eyepatch.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Phasmophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Phasmophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #33, #42, #69.",
    "en": "Rankings in the official popularity polls: #33, #42, #69."
   }
  ]
 },
 "yutaro-kurose": {
  "jp": "黒瀬ユウタロウ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "height": "165 cm (5'5\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Kyoto 1; Makima (setelah mati)",
    "en": "Public Safety Devil Hunters; Kyoto Division 1; Makima (postmortem)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 26 · Episode 9",
    "en": "Chapter 26 · Episode 9"
   },
   "vaJp": "Kengo Kawanishi",
   "vaEn": "Adam Gibbs",
   "contracts": {
    "id": "Punishment Devil",
    "en": "Punishment Devil",
    "spoiler": true
   },
   "family": {
    "id": "Misa (kekasih); Tanpa nama kakak laki-laki †; Tanpa nama orang tua",
    "en": "Misa (girlfriend); Unnamed older brother †; Unnamed parents",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #32, #29, #43.",
    "en": "Rankings in the official popularity polls: #32, #29, #43."
   }
  ]
 },
 "michiko-tendo": {
  "jp": "天童ミチコ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "height": "175 cm (5'9\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Kyoto 1; Makima (setelah mati)",
    "en": "Public Safety Devil Hunters; Kyoto Division 1; Makima (postmortem)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 26 · Episode 9",
    "en": "Chapter 26 · Episode 9"
   },
   "vaJp": "Hitomi Ueda",
   "vaEn": "Christina Kelly",
   "contracts": {
    "id": "Punishment Devil",
    "en": "Punishment Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia memiliki kontrak dengan Iblis Hukuman.",
    "en": "She has a contract with the Punishment Devil."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #30, #30, #51.",
    "en": "Rankings in the official popularity polls: #30, #30, #51."
   }
  ]
 },
 "madoka": {
  "jp": "円",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu)",
    "en": "Public Safety Devil Hunter (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu); Divisi Khusus Tokyo 4 (dulu)",
    "en": "Public Safety Devil Hunters (formerly); Tokyo Special Division 4 (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 20 · Episode 7",
    "en": "Chapter 20 · Episode 7"
   },
   "vaJp": "Tadashi Mutō",
   "vaEn": "Aaron Campbell",
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Keputusannya berhenti jadi momen langka: tokoh yang memilih hidup normal ketimbang balas dendam.",
    "en": "His decision to quit is a rare moment: a character choosing a normal life over revenge."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #29, #38, #49.",
    "en": "Rankings in the official popularity polls: #29, #38, #49."
   }
  ]
 },
 "typhoon-devil": {
  "jp": "台風の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang (kemungkinan)",
    "en": "Japan (presumably)"
   },
   "occupation": {
    "id": "Iblis liar; Iblis kontrak",
    "en": "Wild Devil; Contract Devil"
   },
   "affiliation": {
    "id": "Reze",
    "en": "Reze",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 41 (suara); Chapter 49 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 41 (Voice); Chapter 49 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Eri Kitamura",
   "vaEn": "Reshel Mae",
   "contracts": {
    "id": "Mysterious Man (offered)",
    "en": "Mysterious Man (offered)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Suaranya sudah terdengar di chapter 41, delapan chapter sebelum wujudnya muncul.",
    "en": "Its voice is heard in chapter 41, eight chapters before it appears."
   },
   {
    "id": "Ia bekerja sama dengan Reze.",
    "en": "It works with Reze.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Lilapsophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Lilapsophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #52, #78, #82.",
    "en": "Rankings in the official popularity polls: #52, #78, #82."
   }
  ]
 },
 "future-devil": {
  "jp": "未来の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar (dulu); Iblis kontrak",
    "en": "Wild Devil (formerly); Contract Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 31 · Episode 10",
    "en": "Chapter 31 · Episode 10"
   },
   "vaJp": "Hiroki",
   "vaEn": "Landon McDonald",
   "contracts": {
    "id": "Aki Hayakawa †; Two Devil Hunters; Seven convicts †; Twenty-three convicts",
    "en": "Aki Hayakawa †; Two Devil Hunters; Seven convicts †; Twenty-three convicts",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Dari dalam sel penahanan, ia terus meneriakkan “Masa depan itu luar biasa!”",
    "en": "From its cell, it keeps shouting “The future is the best!”"
   },
   {
    "id": "Ia setuju berkontrak karena ingin melihat masa depan Aki — yang menurutnya akan berakhir dengan cara terburuk.",
    "en": "It agreed to the contract because it wanted to see Aki's future — which it says will end in the worst way.",
    "spoiler": true
   },
   {
    "id": "Ia termasuk iblis bertema waktu, bersama Iblis Keabadian dan Iblis Penuaan.",
    "en": "It's one of the time-themed devils, alongside the Eternity and Aging Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Chronophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Chronophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #21, #21, #38.",
    "en": "Rankings in the official popularity polls: #21, #21, #38."
   }
  ]
 },
 "skin-devil": {
  "jp": "皮の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 57 (disebut)",
    "en": "Chapter 57 (Mentioned)"
   },
   "contracts": {
    "id": "Joey †; Aldo; Tanpa nama Brother †",
    "en": "Joey †; Aldo; Unnamed Brother †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema tubuh, bersama Iblis Otot, Telinga, Kaki, Mulut, dan Gigi.",
    "en": "It's one of the body-themed devils, alongside the Muscle, Ear, Legs, Mouth, and Teeth Devils."
   }
  ]
 },
 "tolka": {
  "jp": "トーリカ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Uni Soviet",
    "en": "Soviet Union"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Uni Soviet; Santa Claus (guru)",
    "en": "Soviet Union; Santa Claus (mentor)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Hubungannya dengan sang guru jauh lebih kelam daripada kelihatannya.",
    "en": "His relationship with his master is far darker than it seems.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #59, #61, #108.",
    "en": "Rankings in the official popularity polls: #59, #61, #108."
   }
  ]
 },
 "kusakabe": {
  "jp": "日下部",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety; Denji’s Bodyguard (dulu)",
    "en": "Public Safety Devil Hunter; Denji’s Bodyguard (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Miyagi 2",
    "en": "Public Safety Devil Hunters; Miyagi Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 55",
    "en": "Chapter 55"
   },
   "contracts": {
    "id": "Stone Devil",
    "en": "Stone Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Makima menyebutnya salah satu pengawal kelas atas, bersama Yoshida dan Tamaoki.",
    "en": "Makima counts him among her top-class bodyguards, alongside Yoshida and Tamaoki."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #19, #51, #75.",
    "en": "Rankings in the official popularity polls: #19, #51, #75."
   }
  ]
 },
 "aldo": {
  "jp": "アルド",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Amerika Serikat",
    "en": "USA"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Amerika Serikat; American Thugs",
    "en": "United States of America; American Thugs",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 53",
    "en": "Chapter 53"
   },
   "contracts": {
    "id": "Skin Devil",
    "en": "Skin Devil",
    "spoiler": true
   },
   "family": {
    "id": "Joey (brother) †; Tanpa nama Brother †; Tanpa nama Orang tua †; Tanpa nama Grandmother †",
    "en": "Joey (brother) †; Unnamed Brother †; Unnamed Parents †; Unnamed Grandmother †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #22, #35, #63.",
    "en": "Rankings in the official popularity polls: #22, #35, #63."
   }
  ]
 },
 "joey": {
  "jp": "ジョーイ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Amerika Serikat",
    "en": "USA"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Amerika Serikat; American Thugs",
    "en": "United States of America; American Thugs",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 53",
    "en": "Chapter 53"
   },
   "contracts": {
    "id": "Skin Devil",
    "en": "Skin Devil",
    "spoiler": true
   },
   "family": {
    "id": "Aldo (brother); Tanpa nama Brother †; Tanpa nama Orang tua †; Tanpa nama Grandmother †",
    "en": "Aldo (brother); Unnamed Brother †; Unnamed Parents †; Unnamed Grandmother †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #66, #85, #128.",
    "en": "Rankings in the official popularity polls: #66, #85, #128."
   }
  ]
 },
 "stone-devil": {
  "jp": "石の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 59 (disebut); Chapter 65",
    "en": "Chapter 59 (Mentioned); Chapter 65"
   },
   "contracts": {
    "id": "Kusakabe †",
    "en": "Kusakabe †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Petraphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Petraphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #105, #90, #106.",
    "en": "Rankings in the official popularity polls: #105, #90, #106."
   }
  ]
 },
 "doll-devil": {
  "jp": "人形の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "affiliation": {
    "id": "Santa Claus",
    "en": "Santa Claus",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 59 (disebut)",
    "en": "Chapter 59 (Mentioned)"
   },
   "contracts": {
    "id": "Santa Claus",
    "en": "Santa Claus",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kontrak inilah yang memungkinkan Santa Claus mengubah manusia menjadi boneka yang ia kendalikan.",
    "en": "This contract is what lets Santa Claus turn people into dolls under their control.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Pediophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Pediophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "nomo": {
  "jp": "野茂",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 45 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 45 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Kenji Akabane",
   "vaEn": "Ryan Negrón",
   "contracts": {
    "id": "Fox Devil",
    "en": "Fox Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #29, #69, #25.",
    "en": "Rankings in the official popularity polls: #29, #69, #25."
   }
  ]
 },
 "tamaoki": {
  "jp": "玉置",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety; Denji’s Bodyguard (dulu)",
    "en": "Public Safety Devil Hunter; Denji’s Bodyguard (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Miyagi 2",
    "en": "Public Safety Devil Hunters; Miyagi Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 55",
    "en": "Chapter 55"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Makima menyebutnya salah satu spesialis pengawal kelas atas, bersama Yoshida dan Kusakabe.",
    "en": "Makima counts him among her top-class bodyguard specialists, alongside Yoshida and Kusakabe."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #56, #53, #142.",
    "en": "Rankings in the official popularity polls: #56, #53, #142."
   }
  ]
 },
 "subaru": {
  "jp": "昴",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Kyoto 1",
    "en": "Public Safety Devil Hunters; Kyoto Division 1",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 55",
    "en": "Chapter 55"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #61, #146, #84.",
    "en": "Rankings in the official popularity polls: #61, #146, #84."
   }
  ]
 },
 "masaki-ando": {
  "jp": "安藤マサキ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Akihiro Mine",
   "vaEn": "Mauricio Ortiz-Segura",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #63, #121.",
    "en": "Rankings in the official popularity polls: #63, #121."
   }
  ]
 },
 "kato": {
  "jp": "加藤",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Kento Shiraishi",
   "vaEn": "Kyle Halberstadt",
   "contracts": {
    "id": "Mold Devil",
    "en": "Mold Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #81, #81.",
    "en": "Rankings in the official popularity polls: #81, #81."
   }
  ]
 },
 "tanabe": {
  "jp": "田辺",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Taro Kiuchi",
   "vaEn": "Josh Martin",
   "contracts": {
    "id": "Mold Devil",
    "en": "Mold Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #96, #118.",
    "en": "Rankings in the official popularity polls: #96, #118."
   }
  ]
 },
 "shiina": {
  "jp": "椎名",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Polisi; Riot Soldier",
    "en": "Police Officer; Riot Soldier"
   },
   "affiliation": {
    "id": "Kepolisian",
    "en": "Police Force",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Yūki Sanpei",
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "nakamura": {
  "jp": "中村",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 59",
    "en": "Chapter 59"
   },
   "contracts": {
    "id": "Fox Devil",
    "en": "Fox Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #20, #26, #44.",
    "en": "Rankings in the official popularity polls: #20, #26, #44."
   }
  ]
 },
 "knife-devil": {
  "jp": "ナイフの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 61 (disebut)",
    "en": "Chapter 61 (Mentioned)"
   },
   "contracts": {
    "id": "Kishibe",
    "en": "Kishibe",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Aichmophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Aichmophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "claw-devil": {
  "jp": "爪の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 61 (disebut)",
    "en": "Chapter 61 (Mentioned)"
   },
   "contracts": {
    "id": "Kishibe",
    "en": "Kishibe",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Amychophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Amychophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "needle-devil": {
  "jp": "針の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 61 (disebut)",
    "en": "Chapter 61 (Mentioned)"
   },
   "contracts": {
    "id": "Kishibe",
    "en": "Kishibe",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Trypanophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Trypanophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "octopus-devil": {
  "jp": "蛸の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 61",
    "en": "Chapter 61"
   },
   "contracts": {
    "id": "Hirofumi Yoshida (dulu)",
    "en": "Hirofumi Yoshida (formerly)",
    "spoiler": true
   },
   "aliases": {
    "id": "Octopus",
    "en": "Octopus",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema laut, bersama Iblis Ikan, Belut Moray, Teripang, dan Hiu.",
    "en": "It's one of the sea-themed devils, alongside the Fish, Moray Eel, Sea Cucumber, and Shark Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Chapodiphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Chapodiphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #55, #99.",
    "en": "Rankings in the official popularity polls: #55, #99."
   }
  ]
 },
 "hell-devil": {
  "jp": "地獄の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "affiliation": {
    "id": "Santa Claus; Pasukan Anti-Makima",
    "en": "Santa Claus; Anti-Makima Squad",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 63",
    "en": "Chapter 63"
   },
   "contracts": {
    "id": "Santa Claus; Pasukan Anti-Makima †",
    "en": "Santa Claus; Anti-Makima Squad †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Santa Claus memakainya untuk menyeret Denji dan yang lain ke Neraka.",
    "en": "Santa Claus uses it to drag Denji and the others into Hell.",
    "spoiler": true
   },
   {
    "id": "Ia muncul lagi di arc Control Devil dan berhadapan dengan Iblis Gergaji Mesin.",
    "en": "It returns in the Control Devil arc and faces the Chainsaw Devil.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Stygiophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Stygiophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #72, #109.",
    "en": "Rankings in the official popularity polls: #72, #109."
   }
  ]
 },
 "pig-devil": {
  "jp": "豚の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 41 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 41 · Chainsaw Man – The Movie: Reze Arc"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Swinophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Swinophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #91, #173.",
    "en": "Rankings in the official popularity polls: #91, #173."
   }
  ]
 },
 "darkness-devil": {
  "jp": "闇の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Primal Fear; Wild Iblis kontrak",
    "en": "Primal Fear; Wild Contract Devil",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 64",
    "en": "Chapter 64"
   },
   "contracts": {
    "id": "Santa Claus",
    "en": "Santa Claus",
    "spoiler": true
   },
   "aliases": {
    "id": "Darkness",
    "en": "Darkness",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Para astronaut yang ia munculkan kemungkinan merujuk ke manusia yang tewas di wilayah tergelapnya: luar angkasa.",
    "en": "The astronauts it manifests may nod to the humans who died in its darkest domain: outer space."
   },
   {
    "id": "Kematian para Devil Hunter di Neraka sebenarnya disebabkan oleh Iblis Kegelapan, bukan langsung oleh Santa Claus.",
    "en": "The Devil Hunters' deaths in Hell were actually caused by the Darkness Devil, not directly by Santa Claus.",
    "spoiler": true
   },
   {
    "id": "Ia antagonis menyeluruh di arc International Assassins.",
    "en": "It's the overarching antagonist of the International Assassins arc.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #27, #35.",
    "en": "Rankings in the official popularity polls: #27, #35."
   }
  ]
 },
 "long": {
  "jp": "ロン",
  "profile": {
   "species": {
    "id": "Iblis (dulu) Fiend",
    "en": "Devil (formerly) Fiend"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Quanxi and the Fiends",
    "en": "Quanxi and the Fiends",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "family": {
    "id": "Quanxi (kekasih); Pingtsi (kekasih) †; Cosmo (kekasih) †; Tsugihagi (kekasih) †",
    "en": "Quanxi (girlfriend); Pingtsi (girlfriend) †; Cosmo (girlfriend) †; Tsugihagi (girlfriend) †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Nama, asal Tiongkok, dan kemampuan menyemburkan api menunjukkan ia terinspirasi naga Tiongkok, Lóng (龍).",
    "en": "Her name, Chinese origin, and fire-breathing point to the Chinese dragon, Lóng (龍)."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #38, #40, #71.",
    "en": "Rankings in the official popularity polls: #38, #40, #71."
   }
  ]
 },
 "pingtsi": {
  "jp": "ピンツイ",
  "profile": {
   "species": {
    "id": "Iblis (dulu) Fiend",
    "en": "Devil (formerly) Fiend"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Quanxi and the Fiends",
    "en": "Quanxi and the Fiends",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "family": {
    "id": "Quanxi (kekasih); Long (kekasih) †; Cosmo (kekasih) †; Tsugihagi (kekasih) †",
    "en": "Quanxi (girlfriend); Long (girlfriend) †; Cosmo (girlfriend) †; Tsugihagi (girlfriend) †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kebiasaan makannya mirip Futakuchi-onna, yokai Jepang bermulut ekstra di belakang kepala yang selalu kelaparan.",
    "en": "Her eating habits resemble the Futakuchi-onna, a Japanese yokai with an extra, always-hungry mouth on the back of her head."
   },
   {
    "id": "Berbeda dengan Quanxi, romanisasi namanya hampir sepenuhnya akurat — dalam Mandarin ditulis 屏翠 (Píngcuì).",
    "en": "Unlike Quanxi's, her romanized name is almost exactly right — in Mandarin it's 屏翠 (Píngcuì)."
   },
   {
    "id": "Namanya kemungkinan terinspirasi penyanyi Tiongkok, Tsui Ping.",
    "en": "Her name may be inspired by the Chinese singer Tsui Ping."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #13, #33, #55.",
    "en": "Rankings in the official popularity polls: #13, #33, #55."
   }
  ]
 },
 "furuno": {
  "jp": "古野",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Sondo",
   "vaEn": "Anthony DiMascio",
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "tomono": {
  "jp": "友野",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 58",
    "en": "Chapter 58"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #103.",
    "en": "Rankings in the official popularity polls: #103."
   }
  ]
 },
 "cosmo": {
  "jp": "コスモ",
  "profile": {
   "species": {
    "id": "Iblis (dulu) Fiend",
    "en": "Devil (formerly) Fiend"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Quanxi and the Fiends",
    "en": "Quanxi and the Fiends",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "family": {
    "id": "Quanxi (kekasih); Pingtsi (kekasih) †; Long (kekasih) †; Tsugihagi (kekasih) †",
    "en": "Quanxi (girlfriend); Pingtsi (girlfriend) †; Long (girlfriend) †; Tsugihagi (girlfriend) †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia terkenal karena hampir hanya mengucapkan satu kata: “Halloween!”",
    "en": "She's famous for saying almost nothing but one word: “Halloween!”"
   },
   {
    "id": "Karena kekuatannya mahatahu, ia seharusnya tetap mengingat segalanya bahkan setelah bereinkarnasi — tapi belum jelas apakah kepribadiannya ikut berubah.",
    "en": "Being omniscient, she should remember everything even after reincarnating — though it's unclear whether her personality would reset."
   },
   {
    "id": "Belum diketahui bagaimana Iblis Kosmos bisa menjadi fiend, karena ia sendiri terlihat tak peduli pada kematian.",
    "en": "It's unknown how the Cosmos Devil became a fiend, as she seems indifferent to death itself."
   },
   {
    "id": "Kekuatannya bersumber dari Astrophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Astrophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #34, #20, #29.",
    "en": "Rankings in the official popularity polls: #34, #20, #29."
   }
  ]
 },
 "grape-devil": {
  "jp": "ブドウの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 56",
    "en": "Chapter 56"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema makanan, bersama Iblis Kopi, Marshmallow, dan Tomat.",
    "en": "It's one of the food-themed devils, alongside the Coffee, Marshmallow, and Tomato Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Oenophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Oenophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #134.",
    "en": "Rankings in the official popularity polls: #134."
   }
  ]
 },
 "fish-devil": {
  "jp": "魚の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 13 · Episode 5",
    "en": "Chapter 13 · Episode 5"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Penampilannya mirip makhluk di manga Gyo karya Junji Ito — ikan-ikan agresif berkaki serangga.",
    "en": "It looks like the creatures in Junji Ito's manga Gyo — aggressive fish with insect-like legs."
   },
   {
    "id": "Ia termasuk iblis bertema laut, bersama Iblis Belut Moray, Gurita, Teripang, dan Hiu.",
    "en": "It's one of the sea-themed devils, alongside the Moray Eel, Octopus, Sea Cucumber, and Shark Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Ichthyophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Ichthyophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #58, #132.",
    "en": "Rankings in the official popularity polls: #58, #132."
   }
  ]
 },
 "mold-devil": {
  "jp": "カビの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 46 (disebut) · Chainsaw Man – The Movie: Reze Arc (disebut)",
    "en": "Chapter 46 (Mentioned) · Chainsaw Man – The Movie: Reze Arc (Mentioned)"
   },
   "contracts": {
    "id": "Kato †; Tanabe †",
    "en": "Kato †; Tanabe †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya tidak langsung diungkap di chapter saat ia pertama kali disebut.",
    "en": "Its name wasn't revealed in the chapter where it was first mentioned."
   },
   {
    "id": "Kekuatannya bersumber dari Mycophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Mycophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "tsugihagi": {
  "jp": "ツギハギ",
  "profile": {
   "species": {
    "id": "Iblis (dulu) Fiend",
    "en": "Devil (formerly) Fiend"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Quanxi and the Fiends",
    "en": "Quanxi and the Fiends",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "family": {
    "id": "Quanxi (kekasih); Pingtsi (kekasih) †; Long (kekasih) †; Cosmo (kekasih) †",
    "en": "Quanxi (girlfriend); Pingtsi (girlfriend) †; Long (girlfriend) †; Cosmo (girlfriend) †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia satu-satunya anggota kelompok Quanxi yang tidak diberi nama resmi.",
    "en": "She's the only member of Quanxi's group never given an official name."
   },
   {
    "id": "Ia juga satu-satunya fiend di kelompok itu yang tidak pernah menunjukkan kemampuan apa pun.",
    "en": "She's also the only fiend in the group never shown using any ability."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #65, #110.",
    "en": "Rankings in the official popularity polls: #65, #110."
   }
  ]
 },
 "punishment-devil": {
  "jp": "罰の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 76",
    "en": "Chapter 76"
   },
   "contracts": {
    "id": "Michiko Tendo (dulu); Yutaro Kurose (dulu)",
    "en": "Michiko Tendo (formerly); Yutaro Kurose (formerly)",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Nama Jepangnya, “Batsu”, bisa berarti hukuman, sanksi, salah, atau kutukan — dan juga sebutan untuk gestur tangan “X” di Jepang.",
    "en": "Its Japanese name, “Batsu”, can mean punishment, penalty, wrong, or curse — and is also the name of Japan's crossed-arms “X” gesture."
   },
   {
    "id": "Kekuatannya bersumber dari Mastigophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Mastigophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #144.",
    "en": "Rankings in the official popularity polls: #144."
   }
  ]
 },
 "denjis-father": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "affiliation": {
    "id": "Yakuza",
    "en": "Yakuza",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 (penglihatan); Chapter 82 · Episode 1 (penglihatan)",
    "en": "Chapter 1 (vision); Chapter 82 · Episode 1 (vision)"
   },
   "family": {
    "id": "Tanpa nama Wife †; Denji (son)",
    "en": "Unnamed Wife †; Denji (son)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Meski sudah tiada sejak awal cerita, ia tetap jadi sosok penting dalam latar belakang Denji.",
    "en": "Though dead before the story begins, he remains pivotal to Denji's background."
   },
   {
    "id": "Kebenaran tentang kematiannya baru terungkap di arc Control Devil.",
    "en": "The truth about his death is only revealed in the Control Devil arc.",
    "spoiler": true
   }
  ]
 },
 "sato": {
  "jp": "佐藤",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 60",
    "en": "Chapter 60"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #72.",
    "en": "Rankings in the official popularity polls: #72."
   }
  ]
 },
 "takashi-inoue": {
  "jp": "井上タカシ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Civilian",
    "en": "Civilian"
   },
   "debut": {
    "id": "Chapter 27 · Episode 9",
    "en": "Chapter 27 · Episode 9"
   },
   "vaJp": "Daiki Hamano",
   "vaEn": "Jason Marnocha",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia dibunuh Makima lewat kekuatannya dari jarak jauh — salah satu petunjuk awal betapa mengerikannya Makima.",
    "en": "Makima kills him with her power from afar — an early hint of how terrifying she is.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #105, #199.",
    "en": "Rankings in the official popularity polls: #105, #199."
   }
  ]
 },
 "mantis-devil": {
  "jp": "カマキリの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 91",
    "en": "Chapter 91"
   },
   "contracts": {
    "id": "Two Devil Hunters †",
    "en": "Two Devil Hunters †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema serangga, bersama Iblis Lebah Kayu, Kecoak, Belalang, dan Kumbang Rusa.",
    "en": "It's one of the insect-themed devils, alongside the Carpenter Bee, Cockroach, Locust, and Stag Beetle Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Mantophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Mantophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #158.",
    "en": "Rankings in the official popularity polls: #158."
   }
  ]
 },
 "kobenis-car": {
  "jp": "コベニの愛車",
  "profile": {
   "species": {
    "id": "Kendaraan",
    "en": "Mechanical Vehicle"
   },
   "debut": {
    "id": "Chapter 57",
    "en": "Chapter 57"
   },
   "family": {
    "id": "Kobeni Higashiyama (pemilik)",
    "en": "Kobeni Higashiyama (owner)",
    "spoiler": true
   },
   "status": {
    "id": "Hancur",
    "en": "Destroyed",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Bentuknya mirip Fiat 500 atau Puch 500, mobil murah Italia yang diproduksi tahun 1957–1975.",
    "en": "It resembles a Fiat or Puch 500, an Italian economy car made from 1957 to 1975."
   },
   {
    "id": "Nasibnya tidak berakhir baik.",
    "en": "It doesn't end well for the car.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #7, #15, #19.",
    "en": "Rankings in the official popularity polls: #7, #15, #19."
   }
  ]
 },
 "bucky": {
  "jp": "コケピー",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Iblis liar (dulu); Class Pet",
    "en": "Wild Devil (formerly); Class Pet",
    "spoiler": true
   },
   "affiliation": {
    "id": "SMA Fourth East",
    "en": "Fourth East High School",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98",
    "en": "Chapter 98"
   },
   "status": {
    "id": "Meninggal (alur asli); Hidup (timeline baru)",
    "en": "Deceased (original timeline); Alive (new timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Sang guru, Tanaka, awalnya berencana menyuruh kelas menyembelih dan memakan Bucky untuk mengajarkan betapa berharganya nyawa.",
    "en": "The teacher, Tanaka, originally planned to have the class kill and eat Bucky to teach them how precious life is."
   },
   {
    "id": "Kekuatannya bersumber dari Alektorophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Alektorophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #34.",
    "en": "Rankings in the official popularity polls: #34."
   }
  ]
 },
 "justice-devil": {
  "jp": "正義の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Falling Devil (Customer)",
    "en": "Falling Devil (Customer)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98 (disebut); Chapter 124",
    "en": "Chapter 98 (Mentioned); Chapter 124"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia tampak tak bermata — seperti Dewi Keadilan yang ditutup matanya sebagai lambang ketidakberpihakan.",
    "en": "It appears eyeless — like Lady Justice's blindfold, a symbol of impartiality."
   },
   {
    "id": "Lengannya berubah menjadi palu mirip palu hakim, dan kain di lehernya menyerupai kerah jubah hakim.",
    "en": "Its arm becomes a gavel-like hammer, and the cloth at its neck resembles a judge's bands."
   },
   {
    "id": "Di arc Justice Devil, yang sebenarnya memakai nama Iblis Keadilan adalah Iblis Api.",
    "en": "In the Justice Devil arc, it's actually the Fire Devil using the Justice Devil's name.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Dikephobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Dikephobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #173.",
    "en": "Rankings in the official popularity polls: #173."
   }
  ]
 },
 "tanaka": {
  "jp": "田中",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Guru",
    "en": "Teacher"
   },
   "affiliation": {
    "id": "SMA Fourth East",
    "en": "Fourth East High School",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98",
    "en": "Chapter 98"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia dijadikan senjata oleh Yoru dalam pertarungan melawan ketua kelas.",
    "en": "Yoru turns him into a weapon during the fight with the class president.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #120.",
    "en": "Rankings in the official popularity polls: #120."
   }
  ]
 },
 "nuclear-weapons-devil": {
  "jp": "核兵器の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "affiliation": {
    "id": "Yoru",
    "en": "Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis yang dimakan Chainsaw Man sehingga konsepnya terhapus dari dunia.",
    "en": "It's among the devils eaten by Chainsaw Man, erasing its concept from the world.",
    "spoiler": true
   },
   {
    "id": "Tanpa senjata nuklir, rasa takut manusia pada ledakan kemungkinan ikut melemah — dan Iblis Bom pun ikut melemah.",
    "en": "Without nuclear weapons, humanity's fear of explosions may have shrunk — weakening the Bomb Devil too.",
    "spoiler": true
   }
  ]
 },
 "cockroach-devil": {
  "jp": "ゴキブリの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 102",
    "en": "Chapter 102"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema serangga, bersama Iblis Lebah Kayu, Belalang, Belalang Sembah, dan Kumbang Rusa.",
    "en": "It's one of the insect-themed devils, alongside the Carpenter Bee, Locust, Mantis, and Stag Beetle Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Katsaridaphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Katsaridaphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #111.",
    "en": "Rankings in the official popularity polls: #111."
   }
  ]
 },
 "asa-mitakas-mother": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "debut": {
    "id": "Chapter 98 (disebut); Chapter 102 (kilas balik)",
    "en": "Chapter 98 (mentioned); Chapter 102 (flashback)"
   },
   "family": {
    "id": "Tanpa nama husband †; Asa Mitaka (daughter)",
    "en": "Unnamed husband †; Asa Mitaka (daughter)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia tewas akibat serangan Iblis Topan.",
    "en": "She was killed by the Typhoon Devil.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #73.",
    "en": "Rankings in the official popularity polls: #73."
   }
  ]
 },
 "marshmallow-devil": {
  "jp": "マシュマロの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya baru diketahui dari buku panduan animasi resmi, yang menyebutnya “Iblis Marshmallow”.",
    "en": "Its name comes from the official Animation Guide Book, which calls it the “Marshmallow Devil”."
   },
   {
    "id": "Ia termasuk iblis bertema makanan, bersama Iblis Kopi, Anggur, dan Tomat.",
    "en": "It's one of the food-themed devils, alongside the Coffee, Grape, and Tomato Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Althaiophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Althaiophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "class-president": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia (dulu); Iblis",
    "en": "Human (formerly); Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "occupation": {
    "id": "Siswa SMA; Class President",
    "en": "High School Student; Class President"
   },
   "affiliation": {
    "id": "SMA Fourth East",
    "en": "Fourth East High School",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98",
    "en": "Chapter 98"
   },
   "contracts": {
    "id": "Fire Devil",
    "en": "Fire Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Pengkhianatannya terhadap Asa sengaja dibuat sejajar dengan pengkhianatan yakuza terhadap Denji di chapter 1.",
    "en": "Her betrayal of Asa deliberately mirrors the yakuza's betrayal of Denji in chapter 1."
   },
   {
    "id": "Ia karakter ketiga yang terlihat berubah ke wujud iblis, setelah para yakuza dan Santa Claus.",
    "en": "She's the third character shown with a devil transformation, after the yakuza and Santa Claus."
   }
  ]
 },
 "seigi-akoku": {
  "jp": "亜国セイギ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Siswa SMA; Iblis Hunter",
    "en": "High School Student; Devil Hunter"
   },
   "affiliation": {
    "id": "SMA Fourth East; Klub Devil Hunter; Gereja Chainsaw Man (dulu)",
    "en": "Fourth East High School; Devil Hunter Club; Chainsaw Man Church (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 107",
    "en": "Chapter 107"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Penampilannya sedikit mirip Agni, tokoh utama Fire Punch.",
    "en": "He bears a passing resemblance to Agni, the protagonist of Fire Punch."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #88.",
    "en": "Rankings in the official popularity polls: #88."
   }
  ]
 },
 "furio": {
  "jp": "フリオ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Siswa SMA; Iblis Hunter",
    "en": "High School Student; Devil Hunter"
   },
   "affiliation": {
    "id": "SMA Fourth East; Klub Devil Hunter",
    "en": "Fourth East High School; Devil Hunter Club",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 107",
    "en": "Chapter 107"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #160.",
    "en": "Rankings in the official popularity polls: #160."
   }
  ]
 },
 "taiyo-hayakawa": {
  "jp": "早川タイヨウ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Hokkaido, Jepang",
    "en": "Hokkaido, Japan"
   },
   "debut": {
    "id": "Chapter 13 (kilas balik) · Episode 5 (kilas balik)",
    "en": "Chapter 13 (flashback) · Episode 5 (flashback)"
   },
   "vaJp": "Mana Nakatomi",
   "vaEn": "Erin Kelly Noble",
   "family": {
    "id": "Aki Hayakawa (kakak laki-laki) †; Tanpa nama orang tua †",
    "en": "Aki Hayakawa (older brother) †; Unnamed parents †",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia hanya muncul lewat kilas balik.",
    "en": "He only appears in flashbacks."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #26, #62, #86.",
    "en": "Rankings in the official popularity polls: #26, #62, #86."
   }
  ]
 },
 "division-4-female-member": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Divisi Khusus Tokyo 4",
    "en": "Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 20 · Episode 7",
    "en": "Chapter 20 · Episode 7"
   },
   "vaJp": "Satsuki Kokubu",
   "vaEn": "Marisa Duran",
   "contracts": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #93.",
    "en": "Rankings in the official popularity polls: #93."
   }
  ]
 },
 "spear-hybrid": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dicuci otak)",
    "en": "Public Safety Devil Hunter (brainwashed)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); Gereja Chainsaw Man",
    "en": "Makima (brainwashed); Tokyo Special Division 5 (formerly); Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 86",
    "en": "Chapter 86"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Seperti Aki dan Himeno, ia tampaknya juga perokok.",
    "en": "Like Aki and Himeno, he appears to be a smoker."
   },
   {
    "id": "Ia pertama muncul sebagai bawahan Makima di arc Control Devil, lalu kembali di Part 2 bersama Gereja Chainsaw Man.",
    "en": "He first appears under Makima in the Control Devil arc, then returns in Part 2 with the Chainsaw Man Church.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #76, #95.",
    "en": "Rankings in the official popularity polls: #76, #95."
   }
  ]
 },
 "miri-sugo": {
  "jp": "須郷ミリ",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Kanagawa, Jepang",
    "en": "Kanagawa, Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dicuci otak); Siswa SMA",
    "en": "Public Safety Devil Hunter (brainwashed); High School Student",
    "spoiler": true
   },
   "affiliation": {
    "id": "Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); Gereja Chainsaw Man; SMA Fourth East",
    "en": "Makima (brainwashed); Tokyo Special Division 5 (formerly); Chainsaw Man Church; Fourth East High School",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 86",
    "en": "Chapter 86"
   },
   "aliases": {
    "id": "Sword Man",
    "en": "Sword Man",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Hobinya lari dan bermain piano, suka makan steak setiap hari, dan sering ke game center.",
    "en": "His hobbies are running and playing piano; he likes eating steak every day and hanging out at the arcade."
   },
   {
    "id": "Ia pertama muncul sebagai bawahan Makima, lalu kembali di Part 2 bersama Gereja Chainsaw Man.",
    "en": "He first appears under Makima, then returns in Part 2 with the Chainsaw Man Church.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #43, #36.",
    "en": "Rankings in the official popularity polls: #43, #36."
   }
  ]
 },
 "debt-collector": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia (dulu) Iblis",
    "en": "Human (formerly) Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Yakuza Boss",
    "en": "Yakuza Boss"
   },
   "affiliation": {
    "id": "Yakuza",
    "en": "Yakuza",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Kosei Hirota",
   "vaEn": "Greg Dulcie",
   "contracts": {
    "id": "Zombie Devil",
    "en": "Zombie Devil",
    "spoiler": true
   },
   "family": {
    "id": "Katana Man (grandson)",
    "en": "Katana Man (grandson)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia kakek kesayangan Katana Man — alasan Katana Man mendendam pada Denji.",
    "en": "He's Katana Man's beloved grandfather — the reason Katana Man wants revenge on Denji."
   },
   {
    "id": "Para yakuza adalah karakter pertama yang terlihat berubah ke wujud iblis.",
    "en": "The yakuza are the first characters shown undergoing a devil transformation."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #91.",
    "en": "Rankings in the official popularity polls: #91."
   }
  ]
 },
 "whip-hybrid": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "81",
    "en": "81"
   },
   "born": {
    "id": "1917",
    "en": "1917"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dicuci otak)",
    "en": "Public Safety Devil Hunter (brainwashed)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); Gereja Chainsaw Man",
    "en": "Makima (brainwashed); Tokyo Special Division 5 (formerly); Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 86",
    "en": "Chapter 86"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Meski di manga hitam-putih rambutnya diberi screentone seperti karakter berambut terang, versi berwarnanya memberi rambut cokelat gelap.",
    "en": "Though her hair is screentoned like light-haired characters in the black-and-white manga, the colored version makes it dark brown."
   },
   {
    "id": "Hibrida ini berusia 81 tahun namun tampak sangat muda — bukti bahwa hibrida menua sangat lambat.",
    "en": "She's 81 years old yet looks very young — proof that hybrids age extremely slowly."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #49, #83.",
    "en": "Rankings in the official popularity polls: #49, #83."
   }
  ]
 },
 "famine-devil": {
  "jp": "キガちゃん",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Siswa SMA (kedok); Iblis liar",
    "en": "High School Student (cover); Wild Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Four Horsemen; SMA Fourth East; Death Devil (dicuci otak)",
    "en": "Four Horsemen; Fourth East High School; Death Devil (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut); Chapter 195",
    "en": "Chapter 84 (Mentioned); Chapter 195"
   },
   "family": {
    "id": "Death Devil (kakak perempuan) †; Yoru (adik perempuan); Nayuta (adik perempuan) †; Makima (saudari) †",
    "en": "Death Devil (older sister) †; Yoru (younger sister); Nayuta (younger sister) †; Makima (sister) †",
    "spoiler": true
   },
   "aliases": {
    "id": "Famine Devil; Hunger Devil; Hunger (by Makima); Famine (by Yoru); Death Devil (façade by the real Death Devil)",
    "en": "Famine Devil; Hunger Devil; Hunger (by Makima); Famine (by Yoru); Death Devil (façade by the real Death Devil)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya selama ini dipakai sebagai kedok oleh sosok lain: “Fami” yang kita kenal sepanjang Part 2 ternyata adalah Iblis Kematian.",
    "en": "Her name was used as a cover by someone else: the “Fami” we see through Part 2 is actually the Death Devil.",
    "spoiler": true
   },
   {
    "id": "Nama Jepangnya, Kiga (飢餓), berarti kelaparan.",
    "en": "Her Japanese name, Kiga (飢餓), means famine."
   },
   {
    "id": "Kekuatannya bersumber dari Ypositismosphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Ypositismosphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #26.",
    "en": "Rankings in the official popularity polls: #26."
   }
  ]
 },
 "death-devil": {
  "jp": "死の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui (eldest among the Horsemen)",
    "en": "Unknown (eldest among the Horsemen)"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Siswa SMA (kedok); Primal Fear; Leader of the Gereja Chainsaw Man; School Festival Planning Committee",
    "en": "High School Student (cover); Primal Fear; Leader of the Chainsaw Man Church; School Festival Planning Committee",
    "spoiler": true
   },
   "affiliation": {
    "id": "Four Horsemen; SMA Fourth East; Klub Devil Hunter (dulu); Gereja Chainsaw Man",
    "en": "Four Horsemen; Fourth East High School; Devil Hunter Club (formerly); Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut); Chapter 108",
    "en": "Chapter 84 (Mentioned); Chapter 108"
   },
   "family": {
    "id": "Famine Devil (adik perempuan); Yoru (adik perempuan); Nayuta (adik perempuan) †; Makima (adik perempuan) †",
    "en": "Famine Devil (younger sister); Yoru (younger sister); Nayuta (younger sister) †; Makima (younger sister) †",
    "spoiler": true
   },
   "aliases": {
    "id": "Ultimate Terror; Great King of Terror; Lady Death Devil; Li'l D (self-proclaimed); Death (by Makima and Yoru); Fami (fake alias); Famine Devil (fake alias)",
    "en": "Ultimate Terror; Great King of Terror; Lady Death Devil; Li'l D (self-proclaimed); Death (by Makima and Yoru); Fami (fake alias); Famine Devil (fake alias)",
    "spoiler": true
   },
   "status": {
    "id": "Terhapus (alur asli); Tidak diketahui (timeline baru)",
    "en": "Erased (original timeline); Unknown (new timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia pertama kali disebut oleh adiknya, Makima, jauh sebelum muncul.",
    "en": "She's first mentioned by her younger sister, Makima, long before she appears.",
    "spoiler": true
   },
   {
    "id": "Sepanjang Part 2 ia menyamar sebagai “Fami”, memakai nama adiknya, Iblis Kelaparan.",
    "en": "Through Part 2 she poses as “Fami”, using the name of her sister, the Famine Devil.",
    "spoiler": true
   },
   {
    "id": "Antingnya berbentuk timbangan, dan kepalanya hampir selalu miring ke kiri seperti timbangan yang tak seimbang. Timbangan juga lambang keadilan — itu sebabnya Asa sempat mengira ia Iblis Keadilan.",
    "en": "Her earrings are scales, and her head almost always tilts left like an unbalanced scale. Scales also symbolize justice — which is why Asa once suspected she was the Justice Devil.",
    "spoiler": true
   },
   {
    "id": "Ia antagonis menyeluruh di Part 2.",
    "en": "She's the overarching antagonist of Part 2.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #18.",
    "en": "Rankings in the official popularity polls: #18."
   }
  ]
 },
 "falling-devil": {
  "jp": "落下の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Primal Fear; Iblis liar; Neraka's Chef; Yoru's Pawn; Death's Pawn (formally)",
    "en": "Primal Fear; Wild Devil; Hell's Chef; Yoru's Pawn; Death's Pawn (formally)"
   },
   "affiliation": {
    "id": "Yoru (transformed); Death Devil (dicuci otak) †; Justice Devil †",
    "en": "Yoru (transformed); Death Devil (brainwashed) †; Justice Devil †",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 122",
    "en": "Chapter 122"
   },
   "aliases": {
    "id": "Falling",
    "en": "Falling",
    "spoiler": true
   },
   "status": {
    "id": "Hidup (Tak berdaya)",
    "en": "Alive (Incapacitated)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia terinspirasi film horor The Menu (2022), favorit Fujimoto — sosoknya mirip Julian Slowik, koki antagonis di film itu.",
    "en": "She's inspired by the 2022 horror film The Menu, a Fujimoto favorite — she closely resembles its chef antagonist, Julian Slowik."
   },
   {
    "id": "Sayapnya tanpa bulu — simbol ironis: sayap untuk terbang yang justru tak berguna, sekaligus bisa dibaca sebagai malaikat yang jatuh.",
    "en": "Her wings are featherless — an ironic symbol: wings meant for flight that are useless, and a possible nod to a fallen angel."
   },
   {
    "id": "Arti “La Root Vonla”, nama hidangannya, belum jelas — terjemahan Spanyol menyebutnya “Degustasi Trauma”.",
    "en": "The meaning of “La Root Vonla”, her dish, is unclear — the Spanish translation calls it “The Tasting of Trauma”."
   },
   {
    "id": "Meski menakutkan, ia hanyalah bawahan Iblis Kematian.",
    "en": "Terrifying as she is, she's only a subordinate of the Death Devil.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Basophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Basophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #30.",
    "en": "Rankings in the official popularity polls: #30."
   }
  ]
 },
 "asa-mitakas-caretaker": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Caretaker",
    "en": "Caretaker"
   },
   "affiliation": {
    "id": "Tanpa nama orphanage",
    "en": "Unnamed orphanage",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 123",
    "en": "Chapter 123"
   },
   "family": {
    "id": "Tanpa nama Ibu †",
    "en": "Unnamed Mother †",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia mengaku juga kehilangan ibunya karena Iblis Topan — tapi tidak jelas apakah itu jujur atau cara memanipulasi Asa.",
    "en": "She claimed she also lost her mother to the Typhoon Devil — though it's unclear whether that was honest or a way to manipulate Asa.",
    "spoiler": true
   }
  ]
 },
 "crambon": {
  "jp": "クランボン",
  "profile": {
   "species": {
    "id": "Kucing",
    "en": "Feline"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "debut": {
    "id": "Chapter 102",
    "en": "Chapter 102"
   },
   "family": {
    "id": "Asa Mitaka (former pemilik)",
    "en": "Asa Mitaka (former owner)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya merujuk ke cerita anak terkenal karya Kenji Miyazawa, “Yamanashi” (1923), tempat kakak kepiting menyebut “Crambon” yang mati di dalam air.",
    "en": "Its name references Kenji Miyazawa's famous 1923 children's story “Yamanashi”, where a crab brother mentions “Crambon” dying under the water."
   },
   {
    "id": "Kenji Miyazawa juga penulis cerita yang terkait dengan burung tubuh pertama Yoru — dua rujukan ke penulis yang sama.",
    "en": "Kenji Miyazawa also wrote the story tied to Yoru's first bird body — two references to the same author."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #64.",
    "en": "Rankings in the official popularity polls: #64."
   }
  ]
 },
 "minami-nakano": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu)",
    "en": "Public Safety Devil Hunter (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu)",
    "en": "Public Safety Devil Hunters (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 2",
    "en": "Chainsaw Man: Buddy Stories chapter 2"
   },
   "aliases": {
    "id": "Minami New Kid (by Kishibe)",
    "en": "Minami New Kid (by Kishibe)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia salah satu sumber langka tentang masa lalu Kishibe dan Quanxi saat masih bekerja bersama.",
    "en": "She's one of the rare windows into Kishibe and Quanxi's past, back when they worked together."
   }
  ]
 },
 "fake-chainsaw-man": {
  "jp": "偽チェンソーマン",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Iblis",
    "en": "Human (formerly); Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "affiliation": {
    "id": "Gereja Chainsaw Man; Death Devil (dicuci otak)",
    "en": "Chainsaw Man Church; Death Devil (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 111 (siluet); Chapter 126",
    "en": "Chapter 111 (silhouette); Chapter 126"
   },
   "contracts": {
    "id": "Fire Devil",
    "en": "Fire Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama adik laki-laki †",
    "en": "Unnamed younger brother †",
    "spoiler": true
   },
   "aliases": {
    "id": "Chainsaw Man (self-proclaimed)",
    "en": "Chainsaw Man (self-proclaimed)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia kakak dari siswa yang tidak diselamatkan Denji saat melawan Iblis Kecoak.",
    "en": "He's the older brother of the student Denji chose not to save while fighting the Cockroach Devil.",
    "spoiler": true
   },
   {
    "id": "Ia termasuk antagonis utama Part 2.",
    "en": "He's one of Part 2's major antagonists.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #104.",
    "en": "Rankings in the official popularity polls: #104."
   }
  ]
 },
 "carpenter-bee-devil": {
  "jp": "熊蜂の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 135",
    "en": "Chapter 135"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema serangga, bersama Iblis Kecoak, Belalang, Belalang Sembah, dan Kumbang Rusa.",
    "en": "It's one of the insect-themed devils, alongside the Cockroach, Locust, Mantis, and Stag Beetle Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Melissophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Melissophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #164.",
    "en": "Rankings in the official popularity polls: #164."
   }
  ]
 },
 "kenzo": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "25",
    "en": "25"
   },
   "born": {
    "id": "1972",
    "en": "1972"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "debut": {
    "id": "Chapter 5 · Episode 2",
    "en": "Chapter 5 · Episode 2"
   },
   "vaJp": "Yoshihito Sasaki",
   "vaEn": "Ethan Gallardo",
   "aliases": {
    "id": "Grandpa (by Denji and Power)",
    "en": "Grandpa (by Denji and Power)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Di anime, sebuah dokumen laporan insiden Iblis Teripang mencantumkan namanya sebagai Konosuke Asagi (浅木幸之助).",
    "en": "In the anime, a Sea Cucumber Devil incident report lists his name as Konosuke Asagi (浅木幸之助)."
   }
  ]
 },
 "house-devil": {
  "jp": "家の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Mr. Kanbayashi (pemilik)",
    "en": "Mr. Kanbayashi (owner)",
    "spoiler": true
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 1",
    "en": "Chainsaw Man: Buddy Stories chapter 1"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Pintu depannya kemungkinan adalah mulut sang iblis, dan ujung lorong adalah… bagian akhir saluran pencernaannya.",
    "en": "Its front door is likely its mouth, and the end of the corridor is… the far end of its digestive tract."
   },
   {
    "id": "Kekuatannya bersumber dari Oikophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Oikophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "loneliness-fiend": {
  "jp": "孤独の魔人",
  "profile": {
   "species": {
    "id": "Iblis (dulu) Fiend",
    "en": "Devil (formerly) Fiend"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Wild Fiend",
    "en": "Wild Fiend"
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 3",
    "en": "Chainsaw Man: Buddy Stories chapter 3"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Autophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Autophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "kanbayashi": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Inn Owner",
    "en": "Inn Owner"
   },
   "affiliation": {
    "id": "House Devil (dulu, dipaksa)",
    "en": "House Devil (formerly, coerced)",
    "spoiler": true
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 1",
    "en": "Chainsaw Man: Buddy Stories chapter 1"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Vilanya ternyata Iblis Rumah yang menyamar.",
    "en": "His villa turns out to be the House Devil in disguise.",
    "spoiler": true
   }
  ]
 },
 "shinohara": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 3",
    "en": "Chainsaw Man: Buddy Stories chapter 3"
   },
   "family": {
    "id": "Tanpa nama Wife †",
    "en": "Unnamed Wife †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "yokota": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 3",
    "en": "Chainsaw Man: Buddy Stories chapter 3"
   },
   "family": {
    "id": "Tanpa nama Ibu †",
    "en": "Unnamed Mother †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "seraphim": {
  "jp": "セラフィム",
  "profile": {
   "species": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 83",
    "en": "Chapter 83"
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya dari Serafim, malaikat dari tingkatan tertinggi.",
    "en": "Its name comes from the Seraphim, angels of the highest order."
   },
   {
    "id": "Bersama Dominion, Virtue, Princi, Beam, Galgali, Angel, dan Power, ia termasuk “pengikut Chainsaw Man” yang bernama tingkatan malaikat.",
    "en": "With Dominion, Virtue, Princi, Beam, Galgali, Angel, and Power, it's one of the angel-named “followers of Chainsaw Man”."
   },
   {
    "id": "Ada teori bahwa ia berkaitan dengan Iblis Belalang, karena keduanya mirip belalang.",
    "en": "Some theorize it's related to the Locust Devil, since both resemble locusts."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #134.",
    "en": "Rankings in the official popularity polls: #134."
   }
  ]
 },
 "dominion": {
  "jp": "ドミニオン",
  "profile": {
   "species": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 83",
    "en": "Chapter 83"
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya dari Dominions, malaikat dari tingkatan menengah bersama Virtues dan Powers.",
    "en": "Its name comes from the Dominions, mid-order angels alongside Virtues and Powers."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #124.",
    "en": "Rankings in the official popularity polls: #124."
   }
  ]
 },
 "virtue": {
  "jp": "ヴァーチェ",
  "profile": {
   "species": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 83",
    "en": "Chapter 83"
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Namanya dari Virtues, malaikat dari tingkatan menengah bersama Dominions dan Powers.",
    "en": "Its name comes from the Virtues, mid-order angels alongside Dominions and Powers."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #145.",
    "en": "Rankings in the official popularity polls: #145."
   }
  ]
 },
 "sato-buddy-stories": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 3",
    "en": "Chainsaw Man: Buddy Stories chapter 3"
   },
   "family": {
    "id": "Tanpa nama Ibu †; Tanpa nama Husband †; 2 Tanpa nama Children †",
    "en": "Unnamed Mother †; Unnamed Husband †; 2 Unnamed Children †",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "nobana-higashiyama": {
  "jp": "東山ノバナ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Siswa SMA; Iblis Hunter",
    "en": "High School Student; Devil Hunter"
   },
   "affiliation": {
    "id": "SMA Fourth East; Klub Devil Hunter; Gereja Chainsaw Man (dulu)",
    "en": "Fourth East High School; Devil Hunter Club; Chainsaw Man Church (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 112",
    "en": "Chapter 112"
   },
   "family": {
    "id": "Tanpa nama Orang tua; Tanpa nama Eight saudari; Tanpa nama Older Brother; Kobeni Higashiyama (kakak perempuan)",
    "en": "Unnamed Parents; Unnamed Eight Sisters; Unnamed Older Brother; Kobeni Higashiyama (older sister)",
    "spoiler": true
   },
   "aliases": {
    "id": "Glass Licker (by Denji)",
    "en": "Glass Licker (by Denji)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia bukan kakak laki-laki yang disebut Arai di chapter 15 — kakak itu lebih tua dari Kobeni, sementara Nobana masih SMA.",
    "en": "He's not the brother Arai mentions in chapter 15 — that one is older than Kobeni, while Nobana is still in high school."
   },
   {
    "id": "Ia sempat menjadi pemandu tur Gereja Chainsaw Man.",
    "en": "He works for a while as a tour guide for the Chainsaw Man Church."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #70.",
    "en": "Rankings in the official popularity polls: #70."
   }
  ]
 },
 "fire-devil": {
  "jp": "火の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Wild Iblis kontrak; Siswa SMA (Allegedly); Death's Pawn",
    "en": "Wild Contract Devil; High School Student (Allegedly); Death's Pawn",
    "spoiler": true
   },
   "affiliation": {
    "id": "Death Devil † (dicuci otak); SMA Fourth East (Allegedly); Barem Bridge †; Gereja Chainsaw Man",
    "en": "Death Devil † (brainwashed); Fourth East High School (Allegedly); Barem Bridge †; Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98 (\"Justice\" disebut); Chapter 146 (disebut); Chapter 204",
    "en": "Chapter 98 (\"Justice\" mentioned); Chapter 146 (Mentioned); Chapter 204"
   },
   "contracts": {
    "id": "Class President †; Yuko †; Fake Chainsaw Man †; Tanpa nama Elder †; 350,000+ total Gereja Chainsaw Man members",
    "en": "Class President †; Yuko †; Fake Chainsaw Man †; Unnamed Elder †; 350,000+ total Chainsaw Man Church members",
    "spoiler": true
   },
   "aliases": {
    "id": "Justice Devil (fake alias)",
    "en": "Justice Devil (fake alias)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya mungkin terinspirasi puisi Robert Frost, “Fire and Ice” — api melambangkan hasrat manusia, es melambangkan kebencian.",
    "en": "Its powers may draw on Robert Frost's poem “Fire and Ice” — fire for human desire, ice for hatred."
   },
   {
    "id": "Kekuatannya tumbuh persis seperti api: makin banyak bahan bakar, makin besar dan tak terkendali.",
    "en": "Its power grows just like fire: the more fuel, the bigger and less controllable."
   },
   {
    "id": "Penampilannya — feminin dan berjubah gelap — mengingatkan pada sosok penyihir, mungkin merujuk pembakaran penyihir.",
    "en": "Its look — feminine, in dark robes — evokes a witch, possibly referencing witch burnings."
   },
   {
    "id": "Iblis Api-lah yang menyamar sebagai “Iblis Keadilan” di arc Justice Devil.",
    "en": "The Fire Devil is the one posing as the “Justice Devil” in the Justice Devil arc.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Pyrophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Pyrophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #105.",
    "en": "Rankings in the official popularity polls: #105."
   }
  ]
 },
 "division-2-vice-captain": {
  "jp": "対魔２課副隊長",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Tokyo 2",
    "en": "Public Safety Devil Hunters; Tokyo Division 2",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 46 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Hidenori Takahashi",
   "vaEn": "Alex Hom",
   "contracts": {
    "id": "Fox Devil",
    "en": "Fox Devil",
    "spoiler": true
   },
   "aliases": {
    "id": "Vice Captain",
    "en": "Vice Captain",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #45, #57, #42.",
    "en": "Rankings in the official popularity polls: #45, #57, #42."
   }
  ]
 },
 "guillotine-devil": {
  "jp": "ギロチンの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Death's Pawn",
    "en": "Death's Pawn"
   },
   "affiliation": {
    "id": "Death Devil (dicuci otak)",
    "en": "Death Devil (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 157",
    "en": "Chapter 157"
   },
   "aliases": {
    "id": "Guilly (by Death Devil)",
    "en": "Guilly (by Death Devil)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Tubuh bagian atasnya mirip kepala terpenggal, dengan bulu di bahu yang menyerupai keranjang di bawah guillotine.",
    "en": "Its upper body resembles a severed head, with shoulder feathers like the basket beneath a guillotine."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #48.",
    "en": "Rankings in the official popularity polls: #48."
   }
  ]
 },
 "nail-fiend": {
  "jp": "釘の魔人",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Fiend",
    "en": "Devil (formerly); Fiend"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu); Wild Fiend",
    "en": "Public Safety Devil Hunter (formerly); Wild Fiend",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu); Divisi Khusus Tokyo 7 (dulu); Katana Man",
    "en": "Public Safety Devil Hunters (formerly); Tokyo Special Division 7 (formerly); Katana Man",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 144",
    "en": "Chapter 144"
   },
   "aliases": {
    "id": "Nail (by Public Safety); Nail Devil",
    "en": "Nail (by Public Safety); Nail Devil",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Nama aslinya dalam bahasa Jepang adalah Kugi, yang berarti paku.",
    "en": "Its original Japanese name is Kugi, meaning nail."
   },
   {
    "id": "Gender-nya tidak pernah dipastikan.",
    "en": "Its gender is never confirmed."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #65.",
    "en": "Rankings in the official popularity polls: #65."
   }
  ]
 },
 "takagi": {
  "jp": "高木",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 7; Pusat Penahanan Iblis Tokyo",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 7; Tokyo Devil Detention Center",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 156",
    "en": "Chapter 156"
   },
   "family": {
    "id": "Tanpa nama wife",
    "en": "Unnamed wife",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia mencoba menghentikan Asa dan kawan-kawan yang menerobos pusat penahanan.",
    "en": "He tries to stop Asa and company from breaking into the detention center.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #129.",
    "en": "Rankings in the official popularity polls: #129."
   }
  ]
 },
 "division-4-male-member": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Divisi Khusus Tokyo 4",
    "en": "Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 20 · Episode 7",
    "en": "Chapter 20 · Episode 7"
   },
   "vaJp": "Tsuyoshi Kurosawa",
   "vaEn": "Marc Swint",
   "contracts": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #62, #89, #146.",
    "en": "Rankings in the official popularity polls: #62, #89, #146."
   }
  ]
 },
 "ear-devil": {
  "jp": "耳の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 5",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 5",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 171",
    "en": "Chapter 171"
   },
   "aliases": {
    "id": "Ear (by Public Safety)",
    "en": "Ear (by Public Safety)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema tubuh, bersama Iblis Otot, Kaki, Mulut, Kulit, dan Gigi.",
    "en": "It's one of the body-themed devils, alongside the Muscle, Legs, Mouth, Skin, and Teeth Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Aftiphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Aftiphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #100.",
    "en": "Rankings in the official popularity polls: #100."
   }
  ]
 },
 "centipede-devil": {
  "jp": "ムカデの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 6",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 6",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 172",
    "en": "Chapter 172"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Chilopodophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Chilopodophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #160.",
    "en": "Rankings in the official popularity polls: #160."
   }
  ]
 },
 "pillbug-devil": {
  "jp": "ダンゴムシの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 6",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 6",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 172",
    "en": "Chapter 172"
   },
   "aliases": {
    "id": "Pillbug (by Public Safety)",
    "en": "Pillbug (by Public Safety)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peringkat di polling popularitas resmi: #92.",
    "en": "Rankings in the official popularity polls: #92."
   }
  ]
 },
 "aging-devil": {
  "jp": "老いの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "age": {
    "id": "2,000+",
    "en": "2,000+"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Primal Fear; Iblis liar; Iblis kontrak",
    "en": "Primal Fear; Wild Devil; Contract Devil"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 170 (disebut); Chapter 173",
    "en": "Chapter 170 (Mentioned); Chapter 173"
   },
   "contracts": {
    "id": "Aging Devil's Victim; Jepangese Government (failed); Three Devil Hunters; Fumiko Mifune; Multiple unnamed Public Safety agents; Hirofumi Yoshida †; Denji; Asa Mitaka",
    "en": "Aging Devil's Victim; Japanese Government (failed); Three Devil Hunters; Fumiko Mifune; Multiple unnamed Public Safety agents; Hirofumi Yoshida †; Denji; Asa Mitaka",
    "spoiler": true
   },
   "aliases": {
    "id": "Aging (by Public Safety)",
    "en": "Aging (by Public Safety)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Nama Jepangnya, 老い, sebenarnya lebih berarti “usia tua” — sementara “menjadi tua” adalah 老いる.",
    "en": "Its Japanese name, 老い, really means “old age” — “growing old” would be 老いる."
   },
   {
    "id": "Ketakutan pada penuaan erat kaitannya dengan cermin: penderitanya menghindari cermin agar tak melihat kerutan atau uban. Iblis Penuaan pun memakai cermin.",
    "en": "The fear of aging is tied to mirrors: sufferers avoid them so they won't see wrinkles or grey hair. The Aging Devil uses mirrors too."
   },
   {
    "id": "Cerminnya mungkin merujuk ke Ungaikyō, cermin berhantu dalam cerita rakyat Jepang yang memantulkan iblis dan monster.",
    "en": "Its mirrors may reference the Ungaikyō, a haunted mirror from Japanese folklore that reflects demons and monsters."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #76.",
    "en": "Rankings in the official popularity polls: #76."
   }
  ]
 },
 "snow-devil": {
  "jp": "雪の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 174 (disebut); Chapter 182",
    "en": "Chapter 174 (Mentioned); Chapter 182"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "“Snow devil” juga nama fenomena alam nyata: pusaran salju yang naik dari tanah membentuk tiang berputar.",
    "en": "“Snow devil” is also a real natural phenomenon: a whirl of snow rising from the ground in a spinning column."
   },
   {
    "id": "Kekuatannya bersumber dari Chionophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Chionophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #152.",
    "en": "Rankings in the official popularity polls: #152."
   }
  ]
 },
 "mouth-devil": {
  "jp": "口の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema tubuh, bersama Iblis Otot, Telinga, Kaki, Kulit, dan Gigi.",
    "en": "It's one of the body-themed devils, alongside the Muscle, Ear, Legs, Skin, and Teeth Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Stomaphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Stomaphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #199.",
    "en": "Rankings in the official popularity polls: #199."
   }
  ]
 },
 "bitterness-devil": {
  "jp": "苦味の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 174 (disebut); Chapter 183",
    "en": "Chapter 174 (Mentioned); Chapter 183"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Bitrophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Bitrophobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #146.",
    "en": "Rankings in the official popularity polls: #146."
   }
  ]
 },
 "kentaro-ishita": {
  "jp": "石多ケンタロウ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Perdana Menteri of Jepang",
    "en": "Prime Minister of Japan"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "hadaji-sakagami": {
  "jp": "阪上ハダジ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Minister of Internal Affairs and Communication",
    "en": "Minister of Internal Affairs and Communication"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "shin-toma": {
  "jp": "戸間シン",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Minister of Defense",
    "en": "Minister of Defense"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "yuki-tomoda": {
  "jp": "友田ユウキ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Chief of Cabinet Secretary",
    "en": "Chief of Cabinet Secretary"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "tadashi-hasegawa": {
  "jp": "長谷川タダシ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Minister of Finance (dulu)",
    "en": "Minister of Finance (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "family": {
    "id": "Tanpa nama grandson",
    "en": "Unnamed grandson",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia terjebak di dalam “Dunia Penuaan”.",
    "en": "He's trapped inside “Aging's World”.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #113.",
    "en": "Rankings in the official popularity polls: #113."
   }
  ]
 },
 "miki-takanashi": {
  "jp": "高梨ミキ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Minister of Economy, Trade, and Industry",
    "en": "Minister of Economy, Trade, and Industry"
   },
   "debut": {
    "id": "Chapter 174",
    "en": "Chapter 174"
   },
   "family": {
    "id": "4 Tanpa nama children",
    "en": "4 Unnamed children",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "tank-devil": {
  "jp": "戦車の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar (dulu)",
    "en": "Wild Devil (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Meksiko (dulu); Yoru",
    "en": "Mexico (formerly); Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 176",
    "en": "Chapter 176"
   },
   "aliases": {
    "id": "Tank",
    "en": "Tank",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Yoru menganggap Iblis Tank dan Iblis Senjata Api sebagai “anak-anaknya”, karena tank dan senjata lahir dari perang.",
    "en": "Yoru sees the Tank and Gun Devils as her “children”, since tanks and guns were born from war.",
    "spoiler": true
   },
   {
    "id": "Yoru awalnya ragu memakai mereka sebagai senjata melawan Chainsaw Man, tapi akhirnya terpaksa saat terdesak — dan ia mengaku menyesalinya.",
    "en": "Yoru hesitated to use them as weapons against Chainsaw Man, but gave in when cornered — and admits she felt remorse.",
    "spoiler": true
   },
   {
    "id": "Ia termasuk iblis bertema kendaraan, bersama Iblis Mobil.",
    "en": "It's one of the vehicle-themed devils, alongside the Car Devil."
   },
   {
    "id": "Kekuatannya bersumber dari Armamachophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Armamachophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "aging-devils-victim": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "82+",
    "en": "82+"
   },
   "born": {
    "id": "Before 1917",
    "en": "Before 1917"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu); Construction Worker",
    "en": "Public Safety Devil Hunter (formerly); Construction Worker",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu)",
    "en": "Public Safety Devil Hunters (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 180",
    "en": "Chapter 180"
   },
   "contracts": {
    "id": "Aging Devil",
    "en": "Aging Devil",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia menjadi tokoh pendukung di paruh akhir arc Aging Devil.",
    "en": "He becomes a supporting character in the latter half of the Aging Devil arc.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #56.",
    "en": "Rankings in the official popularity polls: #56."
   }
  ]
 },
 "mannequin-devil": {
  "jp": "マネキンの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chainsaw Man: Buddy Stories chapter 2",
    "en": "Chainsaw Man: Buddy Stories chapter 2"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Automatonophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Automatonophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "shuzo-mishima": {
  "jp": "三島シュウゾウ",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Civilian",
    "en": "Civilian"
   },
   "debut": {
    "id": "Chapter 27 · Episode 9",
    "en": "Chapter 27 · Episode 9"
   },
   "vaJp": "Jeremy Herrera",
   "vaEn": "Cason, Chris",
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia dibunuh Makima lewat kekuatannya dari jarak jauh.",
    "en": "Makima kills him with her power from afar.",
    "spoiler": true
   },
   {
    "id": "Peringkat di polling popularitas resmi: #103, #164.",
    "en": "Rankings in the official popularity polls: #103, #164."
   }
  ]
 },
 "mysterious-man": {
  "jp": "謎の男",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "America",
    "en": "America"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter"
   },
   "affiliation": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 41 · Chainsaw Man – The Movie: Reze Arc",
    "en": "Chapter 41 · Chainsaw Man – The Movie: Reze Arc"
   },
   "vaJp": "Kenji Nomura",
   "vaEn": "Daniel Van Thomas",
   "contracts": {
    "id": "Typhoon Devil (failed)",
    "en": "Typhoon Devil (failed)",
    "spoiler": true
   },
   "aliases": {
    "id": "Mohawk Man",
    "en": "Mohawk Man",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Fujimoto menyebut ia kemungkinan orang Amerika, meski hal itu belum pernah ditetapkan pasti.",
    "en": "Fujimoto said he's probably American, though nothing has been firmly decided."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #80.",
    "en": "Rankings in the official popularity polls: #80."
   }
  ]
 },
 "std-devil": {
  "jp": "性病の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis kontrak",
    "en": "Contract Devil"
   },
   "debut": {
    "id": "Chapter 212 (disebut)",
    "en": "Chapter 212 (Mentioned)"
   },
   "contracts": {
    "id": "Fumiko Mifune",
    "en": "Fumiko Mifune",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ceritanya berlatar tahun 1990-an, dekade yang ditandai pandemi HIV/AIDS — rasa takut terhadap penyakit menular seksual saat itu sangat besar.",
    "en": "The story is set in the 1990s, a decade marked by the HIV/AIDS pandemic — when fear of sexually transmitted diseases ran high."
   },
   {
    "id": "Setelah Iblis AIDS dimakan Chainsaw Man, Iblis PMS kemungkinan ikut melemah.",
    "en": "After the AIDS Devil was eaten by Chainsaw Man, the STD Devil likely weakened too.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Venereophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Venereophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "frog-devil": {
  "jp": "カエルの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 141",
    "en": "Chapter 141"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Ranidaphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Ranidaphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #166.",
    "en": "Rankings in the official popularity polls: #166."
   }
  ]
 },
 "stag-beetle-devil": {
  "jp": "クワガタの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter"
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 6",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 6",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 172",
    "en": "Chapter 172"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema serangga, bersama Iblis Lebah Kayu, Kecoak, Belalang, dan Belalang Sembah.",
    "en": "It's one of the insect-themed devils, alongside the Carpenter Bee, Cockroach, Locust, and Mantis Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Skathariphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Skathariphobia — humanity's fear of the concept it embodies."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #150.",
    "en": "Rankings in the official popularity polls: #150."
   }
  ]
 },
 "accident-devil": {
  "jp": "事故の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar; Yoru's Pawn",
    "en": "Wild Devil; Yoru's Pawn"
   },
   "affiliation": {
    "id": "Yoru",
    "en": "Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 216",
    "en": "Chapter 216"
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Nama Jepangnya, “Jiko” (事故), paling sering dipakai untuk menyebut tabrakan lalu lintas.",
    "en": "Its Japanese name, “Jiko” (事故), most often refers to traffic collisions."
   },
   {
    "id": "Ia mirip Iblis Mobil — Makima pernah menjelaskan bahwa Iblis Mobil kuat karena orang takut kecelakaan dan tertabrak kendaraan.",
    "en": "It resembles the Car Devil — Makima once explained the Car Devil draws strength from the fear of traffic accidents."
   },
   {
    "id": "Ia sempat dijadikan senjata oleh Yoru.",
    "en": "Yoru turns it into a weapon at one point.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Dystychiphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Dystychiphobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "chocolate": {
  "jp": "チョコ",
  "profile": {
   "species": {
    "id": "Kucing",
    "en": "Feline"
   },
   "debut": {
    "id": "Chapter 5 · Episode 3",
    "en": "Chapter 5 · Episode 3"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Pelafalan Jepangnya lebih mirip “Coco”.",
    "en": "Its Japanese pronunciation is closer to “Coco”."
   },
   {
    "id": "Peringkat di polling popularitas resmi: #87.",
    "en": "Rankings in the official popularity polls: #87."
   }
  ]
 },
 "asa-mitakas-father": {
  "jp": null,
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "debut": {
    "id": "Chapter 98 (disebut); Chapter 217 (kilas balik)",
    "en": "Chapter 98 (mentioned); Chapter 217 (flashback)"
   },
   "family": {
    "id": "Tanpa nama wife †; Asa Mitaka (daughter)",
    "en": "Unnamed wife †; Asa Mitaka (daughter)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kebenaran tentang kematiannya baru terungkap lewat kilas balik di chapter 217.",
    "en": "The truth about his death is only revealed in a chapter 217 flashback.",
    "spoiler": true
   }
  ]
 },
 "moray-eel-devil": {
  "jp": "ウツボの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Yoru",
    "en": "Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 220",
    "en": "Chapter 220"
   },
   "aliases": {
    "id": "Moray (by Yoru)",
    "en": "Moray (by Yoru)",
    "spoiler": true
   },
   "status": {
    "id": "Terhapus (alur asli); Tidak diketahui (timeline baru)",
    "en": "Erased (original timeline); Unknown (new timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kesukaan Yoru pada Iblis Belut Moray kemungkinan sengaja dikontraskan dengan Asa yang benci ikan.",
    "en": "Yoru's fondness for the Moray Eel Devil likely contrasts with Asa's known hatred of fish."
   },
   {
    "id": "Ia termasuk iblis bertema laut, bersama Iblis Ikan, Gurita, Teripang, dan Hiu.",
    "en": "It's one of the sea-themed devils, alongside the Fish, Octopus, Sea Cucumber, and Shark Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Cheliphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Cheliphobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "lion-devil": {
  "jp": "ライオンの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "affiliation": {
    "id": "Yoru",
    "en": "Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 223",
    "en": "Chapter 223"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Singa muncul di banyak mitologi sebagai lambang hukuman ilahi atau kekerasan tak terbendung — seperti Singa Nemea dalam mitologi Yunani.",
    "en": "Lions appear in many mythologies as symbols of divine punishment or unstoppable violence — like the Nemean Lion of Greek myth."
   },
   {
    "id": "Meski singa sering digambarkan agung, wujud iblis ini mencerminkan rasa takut manusia diburu.",
    "en": "Though lions are often seen as regal, this devil's look reflects humanity's fear of being hunted."
   },
   {
    "id": "Kekuatannya bersumber dari Liontariphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Liontariphobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "teeth-devil": {
  "jp": "歯の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Death's Pawn (dulu); Iblis liar",
    "en": "Death's Pawn (formerly); Wild Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Death Devil (dicuci otak)",
    "en": "Death Devil (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 225",
    "en": "Chapter 225"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema tubuh, bersama Iblis Otot, Telinga, Kaki, Mulut, dan Kulit.",
    "en": "It's one of the body-themed devils, alongside the Muscle, Ear, Legs, Mouth, and Skin Devils."
   },
   {
    "id": "Ia salah satu iblis yang dikendalikan Iblis Kematian.",
    "en": "It's one of the devils controlled by the Death Devil.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Odontophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Odontophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "legs-devil": {
  "jp": "足の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Death's Pawn (dulu); Iblis liar",
    "en": "Death's Pawn (formerly); Wild Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Death Devil (dicuci otak)",
    "en": "Death Devil (brainwashed)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 225",
    "en": "Chapter 225"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kata Jepang “Ashi” (足) sebenarnya lebih berarti “telapak kaki”.",
    "en": "The Japanese word “Ashi” (足) actually means “feet”."
   },
   {
    "id": "Ketakutannya bisa dikaitkan dengan cedera atau kehilangan kemampuan berjalan.",
    "en": "Its fear may tie to injury or losing mobility."
   },
   {
    "id": "Ia salah satu iblis yang dikendalikan Iblis Kematian.",
    "en": "It's one of the devils controlled by the Death Devil.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Basophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Basophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "locust-devil": {
  "jp": "バッタの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar",
    "en": "Wild Devil"
   },
   "debut": {
    "id": "Chapter 226",
    "en": "Chapter 226"
   },
   "status": {
    "id": "Terhapus (alur asli); Tidak diketahui (timeline baru)",
    "en": "Erased (original timeline); Unknown (new timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kawanan belalang secara historis penyebab besar kelaparan — jadi iblis ini mungkin terkait Iblis Kelaparan.",
    "en": "Locust swarms have historically caused famines — so this devil may be linked to the Famine Devil."
   },
   {
    "id": "Dalam Kitab Wahyu, belalang muncul dari jurang setelah sangkakala kelima dan menyiksa manusia selama lima bulan.",
    "en": "In the Book of Revelation, locusts rise from the abyss after the fifth trumpet and torment people for five months."
   },
   {
    "id": "Ia termasuk iblis bertema serangga, bersama Iblis Lebah Kayu, Kecoak, Belalang Sembah, dan Kumbang Rusa.",
    "en": "It's one of the insect-themed devils, alongside the Carpenter Bee, Cockroach, Mantis, and Stag Beetle Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Entomophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Entomophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "world-war-ii-devil": {
  "jp": "第二次世界大戦の悪魔の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "affiliation": {
    "id": "Yoru",
    "en": "Yoru",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli); Tidak diketahui (timeline baru)",
    "en": "Erased (original timeline); Unknown (new timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ilustrasi sampul dalam volume 24 menampilkan tulisan “KI15” — pesawat Mitsubishi Ki-15 dari Perang Dunia II — mengisyaratkan konsep itu kembali ke ingatan manusia.",
    "en": "Volume 24's inside cover shows “KI15” — the Mitsubishi Ki-15, a WWII aircraft — hinting the concept returned to people's minds.",
    "spoiler": true
   },
   {
    "id": "Ia salah satu iblis yang konsepnya terhapus dari dunia karena dimakan Chainsaw Man.",
    "en": "It's among the devils whose concepts were erased from the world after Chainsaw Man ate them.",
    "spoiler": true
   }
  ]
 },
 "aids-devil": {
  "jp": "エイズの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ceritanya berlatar 1990-an, puncak pandemi HIV/AIDS — salah satu ketakutan terbesar di masa itu.",
    "en": "The story is set in the 1990s, at the height of the HIV/AIDS pandemic — one of the era's greatest fears."
   },
   {
    "id": "Ia salah satu iblis yang konsepnya terhapus dari dunia karena dimakan Chainsaw Man — HIV mungkin masih ada, tapi tak lagi berkembang menjadi AIDS.",
    "en": "Its concept was erased from the world after Chainsaw Man ate it — HIV may still exist, but can no longer progress into AIDS.",
    "spoiler": true
   }
  ]
 },
 "arnolone-syndrome-devil": {
  "jp": "アーノロン症候群の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Penyakit ini fiktif karena — di dalam cerita — konsepnya sudah terhapus, sehingga tak seorang pun ingat apa itu.",
    "en": "The disease is fictional because, in the story, its concept was erased, so no one remembers what it was.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Nosophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Nosophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "light-of-a-star-that-breaks-childrens-minds-devil": {
  "jp": "子供の精神を壊すとある星の光の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia mungkin terinspirasi kisah horor kosmik — misalnya planet Remina dari manga Junji Ito, atau Deadlights dari novel It karya Stephen King.",
    "en": "It may draw on cosmic horror — like the planet Remina from Junji Ito's manga, or the Deadlights from Stephen King's It."
   },
   {
    "id": "Ia termasuk iblis bertema benda langit, bersama Iblis Bulan.",
    "en": "It's one of the celestial devils, alongside the Moon Devil."
   },
   {
    "id": "Konsepnya terhapus dari dunia, jadi tak ada yang ingat bintang apa itu.",
    "en": "Its concept was erased, so no one remembers what star it was.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Siderophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Siderophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "mount-hio-eruption-devil": {
  "jp": "比尾山大噴火の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Peristiwa ini tidak dikenal karena konsepnya sudah terhapus di dalam cerita.",
    "en": "The event is unknown because its concept was erased within the story.",
    "spoiler": true
   }
  ]
 },
 "nazi-devil": {
  "jp": "ナチスの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "affiliation": {
    "id": "World War II Devil †",
    "en": "World War II Devil †",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia salah satu iblis yang konsepnya terhapus dari dunia karena dimakan Chainsaw Man.",
    "en": "It's among the devils whose concepts were erased after Chainsaw Man ate them.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Naziphobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Naziphobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "sixth-sense-devil": {
  "jp": "第六感の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Karena konsepnya terhapus, tak diketahui apa sebenarnya indra keenam itu atau apa yang dulu bisa dilakukan manusia dengannya.",
    "en": "Since its concept was erased, no one knows what the sixth sense was or what it let humans do.",
    "spoiler": true
   }
  ]
 },
 "soa-devil": {
  "jp": "租唖の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 84 (disebut)",
    "en": "Chapter 84 (Mentioned)"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Dalam bahasa Jepang ditulis 租唖 — 租 kurang lebih berarti “pajak”, 唖 berarti “bisu”. Artinya tidak jelas.",
    "en": "In Japanese it's written 租唖 — 租 roughly means “tax”, 唖 means “mute”. Its meaning is unclear."
   },
   {
    "id": "Konsepnya terhapus dari dunia, sehingga tak seorang pun ingat apa itu SOA.",
    "en": "Its concept was erased, so no one remembers what SOA was.",
    "spoiler": true
   }
  ]
 },
 "car-devil": {
  "jp": "車の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 6 (disebut)",
    "en": "Chapter 6 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Makima menjelaskan Iblis Mobil kuat karena orang takut kecelakaan lalu lintas dan tertabrak kendaraan — contoh awal aturan “rasa takut = kekuatan”.",
    "en": "Makima explains the Car Devil is strong because people fear traffic accidents — an early example of the “fear = power” rule."
   },
   {
    "id": "Ia termasuk iblis bertema kendaraan, bersama Iblis Tank.",
    "en": "It's one of the vehicle-themed devils, alongside the Tank Devil."
   },
   {
    "id": "Kekuatannya bersumber dari Amaxophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Amaxophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "coffee-devil": {
  "jp": "コーヒーの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 6 (disebut)",
    "en": "Chapter 6 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema makanan, bersama Iblis Anggur, Marshmallow, dan Tomat.",
    "en": "It's one of the food-themed devils, alongside the Grape, Marshmallow, and Tomato Devils."
   },
   {
    "id": "Kekuatannya bersumber dari Cafephobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Cafephobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "equality-devil": {
  "jp": "平等の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 145 (disebut)",
    "en": "Chapter 145 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "fairness-devil": {
  "jp": "公正の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 145 (disebut)",
    "en": "Chapter 145 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": []
 },
 "gravity-devil": {
  "jp": "重力の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 124 (disebut)",
    "en": "Chapter 124 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Barophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Barophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "moon-devil": {
  "jp": "月の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 124 (disebut)",
    "en": "Chapter 124 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Ia termasuk iblis bertema benda langit, bersama Iblis Cahaya Bintang Perusak Pikiran Anak.",
    "en": "It's one of the celestial devils, alongside the Light of a Star That Breaks Children's Minds Devil."
   },
   {
    "id": "Kekuatannya bersumber dari Selenophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Selenophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "people-devil": {
  "jp": "人の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 230 (disebut)",
    "en": "Chapter 230 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Anthropophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Anthropophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "sickness-devil": {
  "jp": "病気の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 170 (disebut)",
    "en": "Chapter 170 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Barem pernah membandingkan takut sakit dengan takut tua — jadi ada kemungkinan Iblis Penyakit juga termasuk ketakutan purba.",
    "en": "Barem once compared the fear of sickness to the fear of aging — so the Sickness Devil may also be a primal fear."
   },
   {
    "id": "Kekuatannya bersumber dari Nosophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Nosophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "suicide-devil": {
  "jp": "自殺の悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 124 (disebut)",
    "en": "Chapter 124 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Setelah Iblis Kematian terhapus, iblis ini kemungkinan kehilangan hampir seluruh kekuatannya.",
    "en": "After the Death Devil's erasure, this devil likely lost almost all its power.",
    "spoiler": true
   },
   {
    "id": "Kekuatannya bersumber dari Autocheirothanatophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Autocheirothanatophobia — humanity's fear of the concept it embodies."
   }
  ]
 },
 "trauma-devil": {
  "jp": "トラウマの悪魔",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "debut": {
    "id": "Chapter 124 (disebut)",
    "en": "Chapter 124 (Mentioned)"
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  },
  "facts": [
   {
    "id": "Kekuatannya bersumber dari Traumatophobia — rasa takut manusia terhadap konsep yang ia wakili.",
    "en": "Its power comes from Traumatophobia — humanity's fear of the concept it embodies."
   }
  ]
 }
};

// Kolom tambahan dari wiki untuk 28 karakter unggulan
const EXTRA_DETAILS = {
 "denji": {
  "wiki": "Denji",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia; Hibrida (dulu)",
    "en": "Human; Hybrid (formerly)"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "16 (Chapter 1-82; current timeline by Chapter 232); 17 (Chapter 83-???; alur asli); 18 (???; alur asli)",
    "en": "16 (Chapter 1-82; current timeline by Chapter 232); 17 (Chapter 83-???; original timeline); 18 (???; original timeline)"
   },
   "born": {
    "id": "1980 (specific date is unknown)",
    "en": "1980 (specific date is unknown)"
   },
   "height": "173 cm (5'8\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter swasta (dulu); Devil Hunter Public Safety; Siswa SMA (dulu)",
    "en": "Private Devil Hunter (formerly); Public Safety Devil Hunter; High School Student (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Pochita (dulu); Yakuza (dipaksa, dulu); Devil Hunter Public Safety; Divisi Khusus Tokyo 4 (dulu); SMA Fourth East (dulu)",
    "en": "Pochita (formerly); Yakuza (coerced, formerly); Public Safety Devil Hunters; Tokyo Special Division 4 (formerly); Fourth East High School (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Kikunosuke Toya; Marina Inoue (child)",
   "vaEn": "Ryan Colt Levy; Ciarán Strange (child)",
   "contracts": {
    "id": "Chainsaw Devil; Blood Devil; Aging Devil",
    "en": "Chainsaw Devil; Blood Devil; Aging Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama Ibu †; Tanpa nama Ayah †; Nayuta (adik angkat; alur asli); Pochita (devil hewan peliharaan) †; Meowy (hewan peliharaan; alur asli); Makima's dogs (hewan peliharaan; alur asli)",
    "en": "Unnamed Mother †; Unnamed Father †; Nayuta (adoptive sister; original timeline); Pochita (devil pet) †; Meowy (pet; original timeline); Makima's dogs (pets; original timeline)",
    "spoiler": true
   },
   "aliases": {
    "id": "Chainsaw Man; Lord Chainsaw (by Beam); Chainsaw Kid (by Angel Devil); Red Chainsaw Man (by Fami)",
    "en": "Chainsaw Man; Lord Chainsaw (by Beam); Chainsaw Kid (by Angel Devil); Red Chainsaw Man (by Fami)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "makima": {
  "wiki": "Makima",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "height": "168 cm (5'6\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety; Iblis kontrak",
    "en": "Public Safety Devil Hunter; Contract Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Four Horsemen; Devil Hunter Public Safety; Head of the Divisi Khusus Tokyo 4; Head of the Divisi Khusus Tokyo 5",
    "en": "Four Horsemen; Public Safety Devil Hunters; Head of the Tokyo Special Division 4; Head of the Tokyo Special Division 5",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Tomori Kusunoki",
   "vaEn": "Suzie Yeung",
   "contracts": {
    "id": "Multiple unnamed devil hunters; Perdana Menteri of Jepang; Aki Hayakawa †",
    "en": "Multiple unnamed devil hunters; Prime Minister of Japan; Aki Hayakawa †",
    "spoiler": true
   },
   "family": {
    "id": "Nayuta (reinkarnasi) †; Famine Devil & Yoru (saudari); Death Devil † (kakak perempuan); Tiramisu (hewan peliharaan) †; Custard/Cream Puff (hewan peliharaan) †; Tanpa nama five dogs †",
    "en": "Nayuta (reincarnation) †; Famine Devil & Yoru (sisters); Death Devil † (older sister); Tiramisu (pet) †; Custard/Cream Puff (pet) †; Unnamed five dogs †",
    "spoiler": true
   },
   "aliases": {
    "id": "Control Devil; Conquest Devil; Iblis of Domination",
    "en": "Control Devil; Conquest Devil; Devil of Domination",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal; Bereinkarnasi",
    "en": "Deceased; Reincarnated",
    "spoiler": true
   }
  }
 },
 "aki": {
  "wiki": "Aki Hayakawa",
  "kind": "fiend",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Fiend Host",
    "en": "Human (formerly); Fiend Host"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "height": "182 cm (6'0\")",
   "origin": {
    "id": "Hokkaido, Jepang",
    "en": "Hokkaido, Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu); Wild Fiend",
    "en": "Public Safety Devil Hunter (formerly); Wild Fiend",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu); Divisi Tokyo 2 (dulu); Divisi Khusus Tokyo 4 (dulu)",
    "en": "Public Safety Devil Hunters (formerly); Tokyo Division 2 (formerly); Tokyo Special Division 4 (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 3 · Episode 2",
    "en": "Chapter 3 · Episode 2"
   },
   "vaJp": "Shogo Sakata; Ayumu Murase (young)",
   "vaEn": "Reagan Murdock; Bryson Baugus (young)",
   "contracts": {
    "id": "Fox Devil (dulu); Curse Devil; Future Devil; Control Devil",
    "en": "Fox Devil (formerly); Curse Devil; Future Devil; Control Devil",
    "spoiler": true
   },
   "family": {
    "id": "Taiyo Hayakawa (adik laki-laki) †; Tanpa nama orang tua †",
    "en": "Taiyo Hayakawa (younger brother) †; Unnamed parents †",
    "spoiler": true
   },
   "aliases": {
    "id": "Topknot (by Power); Jerk-face (by Denji); Gun Fiend",
    "en": "Topknot (by Power); Jerk-face (by Denji); Gun Fiend",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "power": {
  "wiki": "Power",
  "kind": "fiend",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Fiend",
    "en": "Devil (formerly); Fiend"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "height": "170 cm (5'7\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety; Iblis kontrak",
    "en": "Public Safety Devil Hunter; Contract Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Bat Devil (briefly, dipaksa); Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Bat Devil (briefly, coerced); Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 4 · Episode 2",
    "en": "Chapter 4 · Episode 2"
   },
   "vaJp": "Fairouz Ai",
   "vaEn": "Sarah Wiedenheft",
   "contracts": {
    "id": "Denji",
    "en": "Denji",
    "spoiler": true
   },
   "family": {
    "id": "Meowy (hewan peliharaan)",
    "en": "Meowy (pet)",
    "spoiler": true
   },
   "aliases": {
    "id": "Blood Fiend; Blood Devil; Detective Power; Powy (by Denji); Number One",
    "en": "Blood Fiend; Blood Devil; Detective Power; Powy (by Denji); Number One",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal (alur asli); Hidup (timeline baru)",
    "en": "Deceased (original timeline); Alive (new timeline)",
    "spoiler": true
   }
  }
 },
 "pochita": {
  "wiki": "Pochita",
  "kind": "hybrid",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Hibrida",
    "en": "Devil (formerly); Hybrid"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Iblis liar (dulu); Iblis kontrak; Denji's Heart",
    "en": "Wild Devil (formerly); Contract Devil; Denji's Heart",
    "spoiler": true
   },
   "affiliation": {
    "id": "Yakuza (dulu); Denji",
    "en": "Yakuza (formerly); Denji",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 1 · Episode 1",
    "en": "Chapter 1 · Episode 1"
   },
   "vaJp": "Shiori Izawa",
   "vaEn": "Lindsay Seidel",
   "contracts": {
    "id": "Denji",
    "en": "Denji",
    "spoiler": true
   },
   "aliases": {
    "id": "Chainsaw; Chainsaw Devil; Chainsaw Man; Hero of Neraka; Black Chainsaw Man",
    "en": "Chainsaw; Chainsaw Devil; Chainsaw Man; Hero of Hell; Black Chainsaw Man",
    "spoiler": true
   },
   "status": {
    "id": "Terhapus (alur asli); Tidak diketahui (timeline baru)",
    "en": "Erased (original timeline); Unknown (new timeline)",
    "spoiler": true
   }
  }
 },
 "meowy": {
  "wiki": "Meowy",
  "kind": "other",
  "profile": {
   "species": {
    "id": "Kucing",
    "en": "Feline"
   },
   "debut": {
    "id": "Chapter 7 · Episode 3",
    "en": "Chapter 7 · Episode 3"
   },
   "family": {
    "id": "Power (previous pemilik); Denji (current pemilik; alur asli); Nayuta (current pemilik)",
    "en": "Power (previous owner); Denji (current owner; original timeline); Nayuta (current owner)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal (alur asli); Hidup (timeline baru)",
    "en": "Deceased (original timeline); Alive (new timeline)",
    "spoiler": true
   }
  }
 },
 "himeno": {
  "wiki": "Himeno",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "height": "175 cm (5'9\")",
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 10 · Episode 4",
    "en": "Chapter 10 · Episode 4"
   },
   "vaJp": "Mariya Ise",
   "vaEn": "Katelyn Barr",
   "contracts": {
    "id": "Ghost Devil",
    "en": "Ghost Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama ayah; Tanpa nama adik perempuan",
    "en": "Unnamed father; Unnamed younger sister",
    "spoiler": true
   },
   "aliases": {
    "id": "Barf Woman (by Denji)",
    "en": "Barf Woman (by Denji)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "kobeni": {
  "wiki": "Kobeni Higashiyama",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "20 (Chapter 10-???)",
    "en": "20 (Chapter 10-???)"
   },
   "height": "155 cm (5'1\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dulu); Pelayan (dulu)",
    "en": "Public Safety Devil Hunter (formerly); Waitress (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety (dulu); Divisi Khusus Tokyo 4 (dulu); Family Burger Restaurant (dulu)",
    "en": "Public Safety Devil Hunters (formerly); Tokyo Special Division 4 (formerly); Family Burger Restaurant (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 10 · Episode 4",
    "en": "Chapter 10 · Episode 4"
   },
   "vaJp": "Karin Takahashi",
   "vaEn": "Bryn Apprill",
   "contracts": {
    "id": "Unknown Devil",
    "en": "Unknown Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama Orang tua; Tanpa nama Eight saudari; Tanpa nama Older Brother; Nobana Higashiyama (adik laki-laki)",
    "en": "Unnamed Parents; Unnamed Eight Sisters; Unnamed Older Brother; Nobana Higashiyama (younger brother)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "arai": {
  "wiki": "Hirokazu Arai",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "22",
    "en": "22"
   },
   "height": "178 cm (5'10\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 10",
    "en": "Chapter 10"
   },
   "vaJp": "Taku Yashiro",
   "vaEn": "Jarrod Greene",
   "contracts": {
    "id": "Fox Devil",
    "en": "Fox Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama ibu",
    "en": "Unnamed mother",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "akane": {
  "wiki": "Akane Sawatari",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "height": "165 cm (5'5\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Gun Devil (kedok); Yakuza (dulu); Makima (setelah mati)",
    "en": "Gun Devil (ruse); Yakuza (formerly); Makima (postmortem)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 24 · Episode 8",
    "en": "Chapter 24 · Episode 8"
   },
   "vaJp": "Yō Taichi",
   "vaEn": "Emi Lo",
   "contracts": {
    "id": "Snake Devil",
    "en": "Snake Devil",
    "spoiler": true
   },
   "aliases": {
    "id": "Hoodie Girl Snake Girl (by Kishibe)",
    "en": "Hoodie Girl Snake Girl (by Kishibe)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "kishibe": {
  "wiki": "Kishibe",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "50+",
    "en": "50+"
   },
   "height": "194 cm (6'4½\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 1 (dulu); Captain of Divisi Khusus Tokyo 4; Leader of the Pasukan Anti-Makima",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 1 (formerly); Captain of Tokyo Special Division 4; Leader of the Anti-Makima Squad",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 14 (Flashback); Chapter 29 · Episode 5 (Flashback); Episode 10",
    "en": "Chapter 14 (Flashback); Chapter 29 · Episode 5 (Flashback); Episode 10"
   },
   "vaJp": "Kenjiro Tsuda",
   "vaEn": "Jason Douglas",
   "contracts": {
    "id": "Claw Devil; Knife Devil; Needle Devil",
    "en": "Claw Devil; Knife Devil; Needle Devil",
    "spoiler": true
   },
   "aliases": {
    "id": "Master; Captain Kishibe; Mad Dog Kishibe",
    "en": "Master; Captain Kishibe; Mad Dog Kishibe",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "beam": {
  "wiki": "Beam",
  "kind": "fiend",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Fiend",
    "en": "Devil (formerly); Fiend"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "height": "176 cm (5'9¼\")",
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Natsuki Hanae",
   "vaEn": "Derick Snow",
   "aliases": {
    "id": "Shark Fiend; Shark Devil",
    "en": "Shark Fiend; Shark Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "galgali": {
  "wiki": "Galgali",
  "kind": "fiend",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Fiend",
    "en": "Devil (formerly); Fiend"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "height": "178 cm (5'10\")",
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Yūya Uchida",
   "vaEn": "Josh Bangle",
   "aliases": {
    "id": "Violence Fiend; Violence Devil",
    "en": "Violence Fiend; Violence Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "princi": {
  "wiki": "Princi",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "height": "180 cm (5'11\")",
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Saori Gotō",
   "vaEn": "Julie Shields",
   "aliases": {
    "id": "Spider Devil",
    "en": "Spider Devil",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  }
 },
 "angel": {
  "wiki": "Angel Devil",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "height": "155 cm (5'1\")",
   "origin": {
    "id": "Desa terpencil",
    "en": "Rural village"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety",
    "en": "Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 4",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 4",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 34 · Episode 11",
    "en": "Chapter 34 · Episode 11"
   },
   "vaJp": "Maaya Uchida",
   "vaEn": "Casey Mongillo",
   "aliases": {
    "id": "Angel",
    "en": "Angel",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "katana": {
  "wiki": "Katana Man",
  "kind": "hybrid",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "height": "195 cm (6'5\")",
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Yakuza (dulu); Devil Hunter swasta (dulu); Devil Hunter Public Safety (dulu)",
    "en": "Yakuza (formerly); Private Devil Hunter (formerly); Public Safety Devil Hunter (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Yakuza (dulu); Gun Devil (kedok); Akane Sawatari (dulu); Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); Devil Hunter Public Safety (temporarily); Divisi Khusus Tokyo 7 (dulu); Nail Fiend",
    "en": "Yakuza (formerly); Gun Devil (ruse); Akane Sawatari (formerly); Makima (brainwashed); Tokyo Special Division 5 (formerly); Public Safety Devil Hunters (temporarily); Tokyo Special Division 7 (formerly); Nail Fiend",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 23 · Episode 8",
    "en": "Chapter 23 · Episode 8"
   },
   "vaJp": "Daiki Hamano",
   "vaEn": "Jason Marnocha",
   "family": {
    "id": "Tanpa nama kakek †",
    "en": "Unnamed grandfather †",
    "spoiler": true
   },
   "aliases": {
    "id": "Samurai Sword; Sideburns Man (by Denji); Katana; Samurai",
    "en": "Samurai Sword; Sideburns Man (by Denji); Katana; Samurai",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "reze": {
  "wiki": "Reze",
  "kind": "hybrid",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "born": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Uni Soviet",
    "en": "Soviet Union"
   },
   "occupation": {
    "id": "Mata-mata (dulu); Pelayan (dulu)",
    "en": "Spy (formerly); Waitress (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Gun Devil (kedok); Uni Soviet (dulu); Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu)",
    "en": "Gun Devil (ruse); Soviet Union (formerly); Makima (brainwashed); Tokyo Special Division 5 (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 40 · Episode 12",
    "en": "Chapter 40 · Episode 12"
   },
   "vaJp": "Reina Ueda",
   "vaEn": "Alexis Tipton",
   "aliases": {
    "id": "Lady Reze; Bomb; Bomb Girl",
    "en": "Lady Reze; Bomb; Bomb Girl",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "quanxi": {
  "wiki": "Quanxi",
  "kind": "hybrid",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Devil Hunter swasta (dulu) Devil Hunter Public Safety",
    "en": "Private Devil Hunter (formerly) Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Tiongkok; Quanxi and the Fiends; Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); Devil Hunter Public Safety; Divisi Khusus Tokyo 7; Pusat Penahanan Iblis Tokyo",
    "en": "China; Quanxi and the Fiends; Makima (brainwashed); Tokyo Special Division 5 (formerly); Public Safety Devil Hunters; Tokyo Special Division 7; Tokyo Devil Detention Center",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "family": {
    "id": "Pingtsi (kekasih) †; Long (kekasih) †; Cosmo (kekasih) †; Tsugihagi (kekasih) †",
    "en": "Pingtsi (girlfriend) †; Long (girlfriend) †; Cosmo (girlfriend) †; Tsugihagi (girlfriend) †",
    "spoiler": true
   },
   "aliases": {
    "id": "The First Devil Hunter; Bow (by Fumiko Mifune)",
    "en": "The First Devil Hunter; Bow (by Fumiko Mifune)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "santa": {
  "wiki": "Santa Claus",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Iblis",
    "en": "Human (formerly); Devil"
   },
   "gender": {
    "id": "Tidak diketahui; Perempuan (kemungkinan)",
    "en": "Unknown; Female (presumably)"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter swasta",
    "en": "Private Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Jerman (mungkin kedok)",
    "en": "Germany (possible ruse)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 54",
    "en": "Chapter 54"
   },
   "contracts": {
    "id": "Doll Devil; Curse Devil; Hell Devil; Darkness Devil",
    "en": "Doll Devil; Curse Devil; Hell Devil; Darkness Devil",
    "spoiler": true
   },
   "family": {
    "id": "Santa Claus of Jerman (2nd known body); Tolka (former murid; 3rd known body)",
    "en": "Santa Claus of Germany (2nd known body); Tolka (former apprentice; 3rd known body)",
    "spoiler": true
   },
   "aliases": {
    "id": "Santa Claus; Master; The Puppeteer; Tolka’s Master",
    "en": "Santa Claus; Master; The Puppeteer; Tolka’s Master",
    "spoiler": true
   },
   "status": {
    "id": "Tak berdaya",
    "en": "Incapacitated",
    "spoiler": true
   }
  }
 },
 "yoshida": {
  "wiki": "Hirofumi Yoshida",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter swasta (dulu); Devil Hunter Public Safety; Siswa SMA; Denji’s Bodyguard (dulu)",
    "en": "Private Devil Hunter (formerly); Public Safety Devil Hunter; High School Student; Denji’s Bodyguard (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 7; SMA Fourth East; Klub Devil Hunter",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 7; Fourth East High School; Devil Hunter Club",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 55",
    "en": "Chapter 55"
   },
   "contracts": {
    "id": "Octopus Devil; Aging Devil",
    "en": "Octopus Devil; Aging Devil",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "nayuta": {
  "wiki": "Nayuta",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "born": {
    "id": "1997",
    "en": "1997"
   },
   "origin": {
    "id": "Tiongkok",
    "en": "China"
   },
   "occupation": {
    "id": "Pelajar (dulu); Iblis liar (dulu); Devil Hunter Public Safety",
    "en": "School Student (formerly); Wild Devil (formerly); Public Safety Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "Four Horsemen; Devil Hunter Public Safety",
    "en": "Four Horsemen; Public Safety Devil Hunters",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 97",
    "en": "Chapter 97"
   },
   "family": {
    "id": "Makima (previous incarnation) †; Denji (kakak angkat; alur asli); Death Devil (oldest saudari) †; Famine Devil (kakak perempuan); Yoru (kakak perempuan); Meowy (hewan peliharaan); Makima's dogs (hewan peliharaan)",
    "en": "Makima (previous incarnation) †; Denji (adoptive brother; original timeline); Death Devil (oldest sister) †; Famine Devil (older sister); Yoru (older sister); Meowy (pet); Makima's dogs (pets)",
    "spoiler": true
   },
   "aliases": {
    "id": "Control Devil; Control (by \"Fami\"); Conquest Devil; Iblis of Domination; The Former Makima (by Barem)",
    "en": "Control Devil; Control (by \"Fami\"); Conquest Devil; Devil of Domination; The Former Makima (by Barem)",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal (alur asli); Hidup (timeline baru)",
    "en": "Deceased (original timeline); Alive (new timeline)",
    "spoiler": true
   }
  }
 },
 "asa": {
  "wiki": "Asa Mitaka",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia; Fiend Host (dulu)",
    "en": "Human; Fiend Host (formerly)"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Siswa SMA; Devil Hunter swasta (dulu); Wild Fiend Host (dulu)",
    "en": "High School Student; Private Devil Hunter (formerly); Wild Fiend Host (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Yoru (dipaksa; dulu); Four Horsemen (via Yoru; dulu); SMA Fourth East; Klub Devil Hunter (dulu); Gereja Chainsaw Man (dulu)",
    "en": "Yoru (coerced; formerly); Four Horsemen (via Yoru; formerly); Fourth East High School; Devil Hunter Club (formerly); Chainsaw Man Church (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 98",
    "en": "Chapter 98"
   },
   "contracts": {
    "id": "Aging Devil",
    "en": "Aging Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama Ibu †; Tanpa nama Ayah †; Crambon (hewan peliharaan) †",
    "en": "Unnamed Mother †; Unnamed Father †; Crambon (pet) †",
    "spoiler": true
   },
   "aliases": {
    "id": "Chainsaw Woman (by Yuko)",
    "en": "Chainsaw Woman (by Yuko)",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui (alur asli); Hidup (timeline baru)",
    "en": "Unknown (original timeline); Alive (new timeline)",
    "spoiler": true
   }
  }
 },
 "yoru": {
  "wiki": "Yoru",
  "kind": "fiend",
  "profile": {
   "species": {
    "id": "Iblis (dulu); Fiend (dulu)",
    "en": "Devil (formerly); Fiend (formerly)"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "origin": {
    "id": "Neraka",
    "en": "Hell"
   },
   "occupation": {
    "id": "Siswa SMA (kedok; dulu); Devil Hunter swasta (dulu); Wild Fiend (dulu); Iblis kontrak",
    "en": "High School Student (cover; formerly); Private Devil Hunter (formerly); Wild Fiend (formerly); Contract Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Asa Mitaka (dipaksa; dulu); Four Horsemen; Nuclear Weapons Devil; World War II Devil †; SMA Fourth East (dulu); Klub Devil Hunter (dulu); Gereja Chainsaw Man (dulu)",
    "en": "Asa Mitaka (via coercion; formerly); Four Horsemen; Nuclear Weapons Devil; World War II Devil †; Fourth East High School (formerly); Devil Hunter Club (formerly); Chainsaw Man Church (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut); Chapter 98",
    "en": "Chapter 84 (Mentioned); Chapter 98"
   },
   "contracts": {
    "id": "Approximately 40,000 members of the National Pistol Association of Amerika Serikat (via Gun Devil); Governor of California",
    "en": "Approximately 40,000 members of the National Pistol Association of USA (via Gun Devil); Governor of California",
    "spoiler": true
   },
   "family": {
    "id": "Death Devil (kakak perempuan) †; Famine Devil (kakak perempuan); Nayuta (adik perempuan) †; Makima (saudari) †; Asa Mitaka (mantan inang)",
    "en": "Death Devil (older sister) †; Famine Devil (older sister); Nayuta (younger sister) †; Makima (sister) †; Asa Mitaka (former host)",
    "spoiler": true
   },
   "aliases": {
    "id": "Lady Yoru; War Fiend; War Devil; War",
    "en": "Lady Yoru; War Fiend; War Devil; War",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui",
    "en": "Unknown",
    "spoiler": true
   }
  }
 },
 "yuko": {
  "wiki": "Yuko",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Iblis",
    "en": "Human (formerly); Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "occupation": {
    "id": "Siswa SMA; Iblis Hunter",
    "en": "High School Student; Devil Hunter",
    "spoiler": true
   },
   "affiliation": {
    "id": "SMA Fourth East; Klub Devil Hunter",
    "en": "Fourth East High School; Devil Hunter Club",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 99",
    "en": "Chapter 99"
   },
   "contracts": {
    "id": "Fire Devil",
    "en": "Fire Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama orang tua †; Unnamed Devil Hunter relative",
    "en": "Unnamed parents †; Unnamed Devil Hunter relative",
    "spoiler": true
   },
   "status": {
    "id": "Meninggal",
    "en": "Deceased",
    "spoiler": true
   }
  }
 },
 "barem": {
  "wiki": "Barem Bridge",
  "kind": "hybrid",
  "profile": {
   "species": {
    "id": "Manusia (dulu); Hibrida",
    "en": "Human (formerly); Hybrid"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "origin": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety (dicuci otak); Gereja Chainsaw Man Contractor",
    "en": "Public Safety Devil Hunter (brainwashed); Chainsaw Man Church Contractor",
    "spoiler": true
   },
   "affiliation": {
    "id": "Makima (dicuci otak); Divisi Khusus Tokyo 5 (dulu); \"Fami\"; Gereja Chainsaw Man",
    "en": "Makima (brainwashed); Tokyo Special Division 5 (formerly); \"Fami\"; Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 86",
    "en": "Chapter 86"
   },
   "status": {
    "id": "Terhapus (alur asli)",
    "en": "Erased (original timeline)",
    "spoiler": true
   }
  }
 },
 "fami": {
  "wiki": "Fami",
  "kind": "devil",
  "profile": {
   "species": {
    "id": "Iblis",
    "en": "Devil"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "Tidak diketahui",
    "en": "Unknown"
   },
   "occupation": {
    "id": "Siswa SMA (kedok); Iblis liar",
    "en": "High School Student (cover); Wild Devil",
    "spoiler": true
   },
   "affiliation": {
    "id": "Four Horsemen; SMA Fourth East; Klub Devil Hunter (dulu); Gereja Chainsaw Man",
    "en": "Four Horsemen; Fourth East High School; Devil Hunter Club (formerly); Chainsaw Man Church",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 84 (disebut); Chapter 108 (debut)",
    "en": "Chapter 84 (mentioned); Chapter 108 (debut)"
   },
   "family": {
    "id": "Yoru (adik perempuan); Makima (saudari) †; Nayuta (adik perempuan) †; Death Devil (kakak perempuan)",
    "en": "Yoru (younger sister); Makima (sister) †; Nayuta (younger sister) †; Death Devil (older sister)",
    "spoiler": true
   },
   "aliases": {
    "id": "Famine Devil; Hunger Devil; Hunger (by Makima)",
    "en": "Famine Devil; Hunger Devil; Hunger (by Makima)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "haruka": {
  "wiki": "Haruka Iseumi",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Laki-laki",
    "en": "Male"
   },
   "occupation": {
    "id": "Siswa SMA; Iblis Hunter; Public Speaker",
    "en": "High School Student; Devil Hunter; Public Speaker",
    "spoiler": true
   },
   "affiliation": {
    "id": "SMA Fourth East; Klub Devil Hunter (president); OSIS (president); Gereja Chainsaw Man (dulu); \"Fami\" (dulu)",
    "en": "Fourth East High School; Devil Hunter Club (president); Student Council (president); Chainsaw Man Church (formerly); \"Fami\" (formerly)",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 112",
    "en": "Chapter 112"
   },
   "aliases": {
    "id": "Chainsaw Man (self-proclaimed)",
    "en": "Chainsaw Man (self-proclaimed)",
    "spoiler": true
   },
   "status": {
    "id": "Hidup",
    "en": "Alive",
    "spoiler": true
   }
  }
 },
 "fumiko": {
  "wiki": "Fumiko Mifune",
  "kind": "human",
  "profile": {
   "species": {
    "id": "Manusia",
    "en": "Human"
   },
   "gender": {
    "id": "Perempuan",
    "en": "Female"
   },
   "age": {
    "id": "22",
    "en": "22"
   },
   "born": {
    "id": "1976-1977",
    "en": "1976-1977"
   },
   "origin": {
    "id": "Jepang",
    "en": "Japan"
   },
   "occupation": {
    "id": "Devil Hunter Public Safety; Siswa SMA (kedok); Denji’s Bodyguard (dulu)",
    "en": "Public Safety Devil Hunter; High School Student (cover); Denji’s Bodyguard (formerly)",
    "spoiler": true
   },
   "affiliation": {
    "id": "Devil Hunter Public Safety; Divisi Khusus Tokyo 7; SMA Fourth East",
    "en": "Public Safety Devil Hunters; Tokyo Special Division 7; Fourth East High School",
    "spoiler": true
   },
   "debut": {
    "id": "Chapter 136",
    "en": "Chapter 136"
   },
   "contracts": {
    "id": "STD Devil; Aging Devil",
    "en": "STD Devil; Aging Devil",
    "spoiler": true
   },
   "family": {
    "id": "Tanpa nama Orang tua †",
    "en": "Unnamed Parents †",
    "spoiler": true
   },
   "status": {
    "id": "Tidak diketahui (alur asli)",
    "en": "Unknown (original timeline)",
    "spoiler": true
   }
  }
 }
};
