// seed.js
// Mengisi basis data dengan 3 prodi dan 25 mahasiswa. Aman dijalankan berulang:
// data lama dihapus dulu.
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const kue = require('./models/kueModel');
const kategoriKue = require('./models/kategoriKueModel');

const NAMA = ['Andi', 'Budi', 'Citra', 'Dewi', 'Eko', 'Fitri', 'Gita', 'Hadi', 'Indra', 'Joko',
  'Kiki', 'Lina', 'Maya', 'Nanda', 'Oka', 'Putri', 'Qori', 'Rina', 'Sari', 'Tono',
  'Umar', 'Vina', 'Wawan', 'Yuni', 'Zaki'];
const KOTA = ['Palembang', 'Indralaya', 'Prabumulih', 'Lubuklinggau'];

async function main() {
  await mongoose.connect(process.env.DB_URI);
  await KategoriKue.deleteMany({});
  await Kue.deleteMany({});

  const Kue = await kue.insertMany([
    { kode: 'BLU', nama: 'BOLU' },
    { kode: 'PCK', nama: 'PANCAKE' },
    { kode: 'LCK', nama: 'LAVACAKE' },
  ]);

  const KategoriKue = NAMA.map((nama, i) => ({
    nama,
    nim: String(2301001 + i),
    alamat: { jalan: `Jl. Contoh No. ${i + 1}`, kota: KOTA[i % KOTA.length] },
    prodiId: prodi[i % 3]._id,
  }));
  await KategoriKue.insertMany(kategoriKue);

  console.log(`Seed selesai: ${prodi.length} prodi, ${kategoriKue.length} kategoriKue`);
  await mongoose.disconnect();
}

main().catch((err) => { console.error(err.message); process.exit(1); });