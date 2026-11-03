const Kue = require('../models/kueModel');

exports.create = async (req, res) => {
  try {
    const kue = await Kue.create(req.body);
    res.status(201).json(kue);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Kue.find());
};