const express = require('express');
const router = express.Router();
const kategoriKueController = require('../controllers/kategoriKuemahasiswaController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', kategoriKueController.getAll);
router.get('/:id', kategoriKueController.getById);
router.post('/', cekApiKey, kategoriKueController.create);
router.put('/:id', cekApiKey, kategoriKueController.update);
router.delete('/:id', cekApiKey, kategoriKueController.remove);

module.exports = router;