# Gambar

Semua gambar berformat `.webp`. Sumber: [Chainsaw Man Fandom Wiki](https://chainsaw-man.fandom.com/) (materi promosi resmi Shueisha / MAPPA), di-crop & dikompres.

| Lokasi | File | Rasio |
|---|---|---|
| Hero | `hero.webp` | 1:1 |
| Pratinjau link (WhatsApp, X, dll.) | `og.jpg` | 1200×630 |
| Karakter | `characters/<id>.webp` — denji, pochita, power, aki, makima, kobeni, himeno, kishibe, reze, asa | 3:4 |
| Galeri | `gallery/*.webp` — daftar & urutannya di `GALLERY` (`js/content.js`) | bebas |
| Sampul artikel | diatur lewat `img` & `imgPos` per artikel di `js/posts.js` | tampil 16:9 |

Ganti gambar: timpa file dengan nama yang sama. Tambah gambar: taruh file, lalu daftarkan path-nya di `js/content.js` atau `js/posts.js`.
Kalau sebuah file tidak ada, situs otomatis menampilkan placeholder (karakter/galeri) atau menyembunyikan slotnya (sampul).
