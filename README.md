# Conway's Game of Life

![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Platform](https://img.shields.io/badge/Platform-Web%20Browser-blue)
![Repo Size](https://img.shields.io/github/repo-size/akbar-kurnia1/conways-game-of-life)
![Last Commit](https://img.shields.io/github/last-commit/akbar-kurnia1/conways-game-of-life)

Repositori ini berisi implementasi berbasis web dari **Conway's Game of Life**, sebuah *cellular automaton* terkenal yang diciptakan oleh matematikawan John Conway. Proyek ini dibangun menggunakan **HTML**, **CSS**, dan **JavaScript** (Vanilla JS) dengan pendekatan kode yang modular dan interface modern (Dark Mode).

**[🔴 LIVE DEMO](https://akbar-kurnia1.github.io/conways-game-of-life/)**

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Utama](#-fitur-utama)
- [Struktur Repositori](#-struktur-repositori)
- [Prasyarat](#-prasyarat)
- [Cara Penggunaan](#-cara-penggunaan)
- [Referensi](#-referensi)
- [Kontribusi](#-kontribusi)
- [Kontak](#-kontak)

## 📖 Tentang Proyek

Game of Life adalah permainan "zero-player", yang berarti evolusinya ditentukan oleh keadaan awalnya, tidak memerlukan input lebih lanjut. Seseorang berinteraksi dengan Game of Life dengan menciptakan konfigurasi awal dan mengamati bagaimana ia berkembang.

Proyek ini bertujuan untuk memvisualisasikan algoritma tersebut dengan fitur interaktif yang memudahkan pengguna untuk bereksperimen dengan pola kehidupan buatan.

## ✨ Fitur Utama

Berdasarkan implementasi saat ini, fitur yang tersedia meliputi:
* **Grid Interaktif:** Klik pada kotak untuk menghidupkan atau mematikan sel.
* **Kontrol Simulasi:** Tombol Start, Stop, Randomize (Acak), dan Clear (Bersihkan).
* **Pengatur Kecepatan:** Opsi kecepatan simulasi (0.5x, 1.0x, 2.0x, 4.0x).
* **Pattern Presets:** Pilihan cepat untuk memunculkan pola terkenal dari Lexicon (Glider, Pulsar, Gosper Glider Gun).
* **Custom Pattern:** Pilihan untuk menyimpan hasil gambar sel pada grid yang disimpan pada storage browser.
* **Responsive Canvas:** Menggunakan sistem koordinat yang presisi pada ukuran layar yang berbeda.

## 📂 Struktur Repositori

Direktori ini diatur dengan pemisahan logika (*Separation of Concerns*) agar kode mudah dipahami dan dikembangkan. Berikut adalah struktur file dalam proyek ini:

```text
/
├── css/
│   └── style.css       # Mengatur tampilan UI (Dark Mode, Grid Layout, & Tombol)
├── js/
│   ├── core.js         # Logika matematika grid & konfigurasi global
│   ├── presets.js      # Kumpulan pola (Glider, Pulsar, dll)
│   ├── script.js       # Interaksi DOM & Loop animasi utama
|   └── storage.js      # UI & Penyimpanan Data (Storage)
└── index.html          # Halaman utama
```

## 🛠 Prasyarat

Untuk menjalankan proyek ini, Anda tidak memerlukan instalasi *compiler* atau *environment* khusus. Cukup pastikan Anda memiliki:

* **Web Browser Modern** (Google Chrome, Microsoft Edge, atau Safari).
* **Text Editor** (VSCode atau Notepad++) *jika ingin memodifikasi kode*.

## 🚀 Cara Penggunaan

Berikut adalah langkah-langkah untuk menjalankan simulasi di komputer lokal Anda:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/akbar-kurnia1/conways-game-of-life.git](https://github.com/akbar-kurnia1/conways-game-of-life.git)
    ```

2.  **Buka Proyek**
    * Navigasikan ke folder hasil clone.
    * Klik dua kali file `index.html`.
    * Proyek akan otomatis terbuka di browser default Anda.

3.  **Interaksi**
    * **Gambar Manual:** Klik pada area hitam untuk membuat pola sendiri.
    * **Gunakan Preset:** Pilih pola dari sidebar kanan (misal: "Gosper Glider Gun") untuk memuat pola otomatis.
    * **Mulai Simulasi:** Tekan tombol **Start**.
    * **Atur Kecepatan:** Gunakan tombol kecepatan di bagian bawah (0.5x - 4.0x) untuk memperlambat atau mempercepat evolusi.
  
## 🔗 Referensi

Berikut adalah beberapa implementasi dan sumber daya Game of Life populer lainnya yang menjadi referensi dalam pengembangan proyek ini:

* **[PlayGameOfLife.com](https://playgameoflife.com/)** - Implementasi web klasik yang menjadi referensi utama untuk antarmuka pengguna (UI).
* **[ConwayLife.com (LifeWiki)](https://conwaylife.com/)** - Ensiklopedia lengkap (Lexicon) yang memuat ribuan pola, teori, dan variasi aturan Game of Life.
* **[Golly](http://golly.sourceforge.net/)** - Aplikasi *open-source* (cross-platform) untuk simulasi cellular automata yang sangat kompleks dan cepat.

## 🤝 Kontribusi

Repositori ini terbuka untuk pengembangan lebih lanjut. Jika Anda ingin menambahkan pola baru ke dalam *Lexicon* atau memperbaiki bug:

1.  Fork repositori ini.
2.  Buat branch fitur baru (`git checkout -b tambah-pola-baru`).
3.  Ubah file `js/presets.js` untuk menambah pola, atau file lain sesuai kebutuhan.
4.  Commit perubahan Anda (`git commit -m 'Menambahkan pola Spaceship'`).
5.  Push ke branch tersebut (`git push origin tambah-pola-baru`).
6.  Buat Pull Request.

## 👤 Kontak

**Akbar Kurniawan**

* GitHub: [@akbar-kurnia1](https://github.com/akbar-kurnia1)

---
*Dibuat untuk keperluan pembelajaran algoritma dengan teknik reverse engineering dan pengembangan web.*
