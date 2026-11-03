let pelanggan = [
  { id: 1, nama: 'Anto' },
  { id: 2, nama: 'Ani' },
];
let nextId = 3;

function getAll() {
  return pelanggan;
}

function getById(id) {
  return pelanggan.find((f) => f.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  pelanggan.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };