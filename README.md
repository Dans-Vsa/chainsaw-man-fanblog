# DEVIL/HUNTER LOG

Blog fan Chainsaw Man: fun fact, profil karakter, linimasa rilis, dan galeri.
HTML, CSS, dan JS murni — tanpa build, langsung jalan di GitHub Pages.

## Fitur
- **Fun fact** bergaya majalah, filter per kategori, sensor spoiler (klik untuk buka), artikel di dialog dengan gambar sampul.
- **28 karakter** dengan foto potret, filter Part 1 / Part 2, dan pencarian. Klik kartu untuk membuka **profil lengkap** (umur, lahir, tinggi, asal, debut, pengisi suara, kontrak, saudara, status) dan fun fact per karakter. Info spoiler tampil sebagai blok hitam yang bisa diklik.
- **Bedah 14 arc** (Part 1 & 2): kejadian dan makna tiap arc, tertutup sampai dibuka (spoiler).
- **Pesan & filosofi**: pernyataan Fujimoto (bersumber) dipisah dari tafsiran tema.
- **Linimasa** rilis manga, anime, dan film — sampai tamatnya manga (2026).
- **Galeri** dengan lightbox.
- **Bahasa ID / EN** — semua teks dan format tanggal. Pilihan disimpan di browser.

## Struktur
| File | Isi |
|---|---|
| `js/posts.js` | Fun fact (`POSTS`) dan kategori (`CATEGORIES`) |
| `js/content.js` | Karakter (`CHARACTERS`), linimasa (`TIMELINE`), galeri (`GALLERY`) |
| `js/arcs.js` | Bedah arc (`ARCS`) dan filosofi (`PHILOSOPHY`) |
| `js/characters-detail.js` | Profil & fun fact per karakter (`CHAR_DETAILS`) — tandai `spoiler: true` untuk menyensor |
| `js/i18n.js` | Teks UI dalam 2 bahasa (`STR`) |
| `js/app.js` | Logika render, filter, spoiler, ganti bahasa |
| `css/style.css` | Gaya, token sesuai `DESIGN.md` |
| `assets/img/` | Gambar — lihat `assets/img/README.md` untuk nama file |

## Menambah fun fact
Tambahkan objek baru ke array `POSTS` di `js/posts.js`:

```js
{
  id: "slug-unik",
  cat: "lore",            // creator | lore | characters | anime | manga
  date: "2026-10-10",
  spoiler: false,         // true = disensor sampai diklik
  title:   { id: "...", en: "..." },
  excerpt: { id: "...", en: "..." },
  body:    { id: ["paragraf 1", "paragraf 2"], en: ["paragraph 1", "paragraph 2"] },
}
```

## Menjalankan lokal
```bash
python -m http.server 5510
```
Lalu buka http://localhost:5510.

## Disclaimer
Situs fan tidak resmi. Chainsaw Man © Tatsuki Fujimoto / Shueisha. Semua gambar milik pemegang hak ciptanya masing-masing.
