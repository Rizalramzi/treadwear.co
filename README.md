# Treadwear.co
Treadwear adalah merek streetwear terbaik di Asia, yang memadukan desain berani dengan budaya urban. Tetap terdepan dalam tren dengan busana ikonik dan mutakhir yang dibuat untuk jalanan.
<br>
<br>

# Daftar Isi

* <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#run-website-treadwearco">Run Website</a>
* <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#cara-kerja-website">Cara kerja Website</a>
  + <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#alur-pengguna">Alur Pengguna</a>
  + <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#analisa-ux">Analisa UX</a>
* <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#penerapan-dalam-treadwearco">Penerapan UX pada Treadwear.co</a>
* <a href="https://github.com/Rizalramzi/treadwear.co?tab=readme-ov-file#demo-website">Demo Website</a>

# Run Website Treadwear.co
Pastikan perangkat tersambung internet
## 1. Clone repositori ini dengan command :
`git clone https://github.com/Rizalramzi/treadwear.co.git`

## 2. Masuk ke projek
`cd treadwear.co` <br> <br>
(default nama projek adalah 'treadwear.co') lalu buka dengan Visual Studio Code untuk melihat source code

## 3. Install ekstensi `Live Server`
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/live-server.png" align="middle" width="desired width" height="desired heigh"> <br>

Lalu klik tombol `Go Live` dibawah kanan <br> <br>
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/start.png" align="middle" width="desired width" height="desired heigh">

## 4. Menjalankan Tailwind
`npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch`

## 5. Website sudah dijalankan
<br>
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/website.png" align="middle" width="desired width" height="desired heigh">

<br>
<br>

# Cara Kerja Website
## Alur Pengguna
### Melakukan Registrasi / Login dengan mengisi data sebagai berikut : <br>
- `Alamat Email`
- `Password`

### Masuk halaman Dashboard : <br>
Setelah Login / Register, pengguna diarahkan ke halaman Dashboard, yang menampilkan : 
- Menu navigasi ( `Collection` `Product` `Blog` `Store Location` )
- Rekomendasi item berdasarkan preferensi atau tren
- Pencarian item berdasarkan kategori atau filter ( `Type` `Availability` `Price` `Size` )
- Daftar item yang tersedia dengan `Gambar` `Harga` dan `Tipe`

### Memilih Item : <br>
Pengguna bisa memilih item dari daftar atau menggunakan fitur pencarian. <br>
Terdapat beberapa filter untuk memudahkan pencarian item, seperti:
- Tipe ( `Shirt` `Coat` `Jacket` `Flannel` `Short` `Pants` `Hoodie` )
- Ukuran ( `S` `M` `L` `XL` `XXL` `XXXL` )
- Rentang harga

### Masuk ke halaman Detail : <br>
Setelah memilih item, pengguna diarahkan ke halaman Detail Item yang menampilkan:
- Gambar besar dari Item
- Deskripsi Lengkap ( `Color` `Size` `Material` `Features` `Care Instruction`)
- Harga
- Opsi Ukuran
- Ulasan Pengguna Lain
- Tombol `Tambah Keranjang` dan `Favorit`
- Form Ulasan

## Analisa UX
### Pengertian
Sudut pandang pengalaman pengguna (UX) adalah kunci dalam menciptakan desain antarmuka (UI) yang tidak hanya menarik secara visual, tetapi juga efektif dan efisien dalam memenuhi kebutuhan pengguna. Seperti rumah. Desain interior dan eksterior yang indah sangat penting, tetapi yang lebih penting lagi adalah memastikan rumah tersebut nyaman, fungsional, dan memenuhi kebutuhan penghuninya. Begitu pula dengan desain UI website kami. <br>
Mengapa sudut pandang UX penting menurut kami?

### Fokus Pada Pengguna
UX menempatkan pengguna di pusat perhatian. Tujuannya adalah memahami bagaimana pengguna berpikir, merasa, dan berinteraksi dengan produk atau layanan. Dengan memahami perspektif pengguna, desainer dapat menciptakan pengalaman yang intuitif dan menyenangkan.

### Meningkatkan Kegunaan
Desain UI yang baik harus mudah digunakan. Prinsip-prinsip UX membantu memastikan bahwa pengguna dapat dengan mudah menemukan apa yang mereka cari, menyelesaikan tugas, dan mencapai tujuan mereka tanpa merasa kesulitan.

### Membangun Kepuasan
Pengalaman pengguna yang positif akan membuat pengguna lebih loyal terhadap produk atau layanan. Ketika pengguna merasa puas dengan pengalaman mereka, mereka cenderung menggunakan produk tersebut secara berulang dan merekomendasikannya kepada orang lain.

### Meningkatkan Konversi 
Desain UI yang baik dapat meningkatkan tingkat konversi, misalnya mengubah pengunjung website menjadi pelanggan atau mendorong pengguna untuk melakukan pembelian.

### Membedakan Produk
Dalam pasar yang kompetitif, pengalaman pengguna yang unik dapat menjadi pembeda antara produk Anda dengan produk pesaing.

# Penerapan dalam Treadwear.co
### Foto dan Ilustrasi yang Profesional
Kami menggunakan foto dan ilustrasi yang professional, hal ini selain untuk mendukung visual dan estetika namun juga meningkatkan pengalaman pengguna saat mencari atau melihat lihat produk yang tersedia pada website kami.
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/ux-1.png" align="middle" width="desired width" height="desired heigh">

### Desain Responsif
Desain yang menyesuaikan diri dengan berbagai ukuran layar (desktop, tablet, ponsel) memastikan pengalaman pengguna yang konsisten di mana pun mereka mengakses aplikasi atau website. Fitur fitur pada design responsive juga dapat mendukung pengguna dalam menggunakan website dalam berbagai perangkat selain computer seperti tablet maupun handphone. <br>
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/ux-2.png" align="middle" width="desired width" height="desired heigh">

### Animasi dan Transisi Interaktif
Kami juga menambahkan berbagai animasi dan transisi pada website kami, contohnya saja seperti animasi hover, animasi sidebar, dan yang lainnya. Transisi ini mendukung tampilan website kami menjadi lebih baik lagi tidak hanya secara tampilan tapi juga secara pergerakan antar objek pada website kami.

### Bahasa Yang Sederhana
Menggunakan bahasa yang mudah dipahami dan menghindari jargon teknis membuat produk lebih mudah diakses oleh pengguna dari berbagai latar belakang, jadi pengguna dapat memahami produk pada website kami dengan mudah karena penggunaan Bahasa yang sederhana.


### Aestetika yang Menarik
Website kami juga sangat memperhatikan estetika tampilan dari website kami, mulai dari pemilihan warna, font, gambar, video, dan yang lainnya. Hal ini diharapkan dapat meningkatkan kepuasan pengguna saat mengunjungi website kami melalui visual yang sudah kami rancang.
<img src="https://github.com/Rizalramzi/treadwear.co/blob/arka/src/assets/readme/ux-3.png" align="middle" width="desired width" height="desired heigh">

## Demo Website
<a href="https://youtu.be/reiuqgRoM1U?si=4ejoejD8voW6cWel">`https://youtu.be/reiuqgRoM1U?si=4ejoejD8voW6cWel`</a>

