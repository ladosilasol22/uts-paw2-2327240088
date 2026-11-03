const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });

const kategoriKuechema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  kodeKue: { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true },
  harga: alamatSchema,
  ukuran: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
  bahan: {type: String, topping: String}, tanpa_id,
  kategoriKueId: {type: ObjectId, ref: 'KategoriKue'},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('kategoriKue', kategoriKuechema);