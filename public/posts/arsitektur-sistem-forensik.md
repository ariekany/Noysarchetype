# Membangun Arsitektur Sistem Forensik Blockchain dengan Rust

Teknologi blockchain telah memicu transformasi besar pada sektor keuangan global. Meskipun menawarkan transparansi, sifat anonim dari teknologi ini sering kali dimanfaatkan untuk kejahatan finansial berskala besar, seperti pada kasus skema ponzi PlusToken. Para penjahat menyembunyikan jejak dana ilegal mereka menggunakan teknik pelapisan (*layering* dan *peeling chain*) dengan memecahnya melintasi jutaan transaksi.

Sayangnya, melacak aliran dana kripto dalam jumlah masif membutuhkan performa komputasi yang sangat tinggi. Artikel ini akan merangkum bagaimana sebuah rancangan sistem forensik terbaru berhasil melacak aliran dana tersebut dengan cepat dan efisien.

---

### Masalah pada Alat Pelacakan Konvensional

Pendekatan pelacakan tradisional selama ini umumnya murni mengandalkan bahasa pemrograman Python. Kelemahan utamanya adalah Python sering kali mengalami *bottleneck* (kemacetan performa) dan kehabisan memori saat harus memproses jutaan titik data.

Hal ini berakar dari batasan kedalaman dan mekanisme *Global Interpreter Lock* (GIL) pada Python, yang sering kali memicu program untuk berhenti secara tiba-tiba tanpa peringatan dan menghasilkan data pelacakan yang tidak akurat.

---

### Solusi: Arsitektur Hibrida Rust-Python

Untuk mengatasi keterbatasan komputasi tersebut, sebuah penelitian mengusulkan sistem forensik blockchain berkinerja tinggi yang memanfaatkan arsitektur campuran (hibrida) antara bahasa pemrograman Rust dan Python.

Sistem ini membagi tugas secara strategis:

**Rust untuk Kerja Berat:** Beban komputasi yang berat didelegasikan sepenuhnya ke bahasa pemrograman Rust yang unggul dalam manajemen memori. Rust bertugas menerapkan algoritma *Union-Find* untuk mengelompokkan entitas *Sybil* dan *Depth-First Search* (DFS) untuk melacak rute aliran dana.


**Python untuk Kontrol dan Analisis:** Python dimanfaatkan sebagai ruang pengontrol untuk mengelola validasi statistik (menggunakan Hukum Benford) dan memvisualisasikan jaringan secara interaktif.



---

### Hasil Pengujian yang Menakjubkan

Sistem arsitektur ini diuji menggunakan 4,7 juta baris data transaksi historis Bitcoin yang diekstrak pada masa puncak aktivitas pencucian uang sindikat PlusToken. Hasil evaluasinya menunjukkan performa yang signifikan:

**1. Kecepatan dan Ketahanan Eksekusi**

* Sistem arsitektur hibrida ini berhasil memproses data **7,34 kali lebih cepat** dibandingkan dengan metode yang hanya menggunakan Python.


* Saat diuji, sistem Python murni mengalami kehabisan tumpukan memori dan berhenti diam-diam, hanya menghasilkan 212 rute pelarian yang cacat. Sebaliknya, Rust berhasil menembus batas kedalaman untuk merekonstruksi **78.875 rute pelarian uang** tanpa memicu masalah kehabisan memori (*Out-of-Memory*).



**2. Memetakan Rute Pencucian Uang**

* Sistem ini berhasil mengidentifikasi 393 entitas *Sybil* raksasa, di mana setiap entitasnya mengendalikan lebih dari 500 alamat dompet.


* Pelacakan membuktikan bahwa dana tidak bergerak di ruang hampa; dana mengalir dari dompet pasif (*Cold Wallet*) menuju dompet aktif (*Hot Wallet*) yang berfungsi mengacak aliran dana.


* Dari *Hot Wallet*, uang secara sengaja dialirkan ke layanan pencucian uang di pasar *darkweb* (Hydra Market) dan jaringan judi (Bovada) untuk memutus jejak penyebabnya. Pada akhirnya, dana tersebut secara bertahap diintegrasikan ke bursa kripto publik (seperti HTX, LocalBitcoin, dan Mercado Bitcoin) untuk dicairkan.



**3. Bukti Ilmiah Menggunakan Hukum Benford**

* Untuk memvalidasi secara pasti apakah jaringan transaksi itu organik atau dijalankan *bot* otomatis, sistem menggunakan uji statistik Hukum Benford (*Benford's Law*).


* Hasil evaluasi mengonfirmasi adanya manipulasi algoritmik, dengan skor *Mean Absolute Deviation* (MAD) yang melampaui batas ambang 0,015.


* Lonjakan probabilitas angka awalan "1" pada *Hot Wallet* memberikan bukti matematis absolut bahwa transfer dana dieksekusi secara berulang oleh *bot* otomatis menggunakan nominal pecahan yang statis (misalnya 1,0 atau 0,1 BTC) untuk teknik pelapisan.



---

### Kesimpulan

Pendekatan arsitektur hibrida berkinerja tinggi ini terbukti mengatasi kelemahan mendasar pada metode pelacakan tradisional. Dengan kecepatan pemrosesan dan ketahanannya mengelola skala data yang masif, sistem ini secara signifikan diharapkan mampu meningkatkan kapabilitas aparat penegak hukum dalam menyelidiki dan membongkar aliran dana ilegal yang sangat rumit.