const express = require('express');
const router = express.Router();
const pelangganController = require('../controllers/');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', pelangganController.getAll);
router.get('/:id', pelangganController.getById);
router.post('/', cekApiKey, pelangganController.create);

module.exports = router;