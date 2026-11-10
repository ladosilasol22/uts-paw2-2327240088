const KategoriKue = require('../models/kategoriKueModel');

exports.create = async (req, res) => {
  try {
    const kategoriKue = await KategoriKue.create(req.body);
    res.status(201).json(kategoriKue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await KategoriKue.find());
};