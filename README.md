# Treadwear.co
Treadwear adalah merek streetwear terbaik di Asia, yang memadukan desain berani dengan budaya urban. Tetap terdepan dalam tren dengan busana ikonik dan mutakhir yang dibuat untuk jalanan.
<br>
<br>

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

