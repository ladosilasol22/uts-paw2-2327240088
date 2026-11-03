import kueModel from '../models/kueModel';
import { errorHttp } from '../middlewares/errorHandler';

export function getAll(req, res) {
  res.json(kueModel.getAll());
}

export function getById(req, res, next) {
  const id = parseInt(req.params.id);
  const data = kueModel.getById(id);
  if (!data) return next(errorHttp(404, 'kue tidak ditemukan'));
  res.json(data);
}

export function create(req, res, next) {
  const { nama } = req.body;
  if (!nama) return next(errorHttp(400, 'jenis kue wajib diisi'));

  const baru = kueModel.create({ nama });
  res.status(201).json(baru);
}