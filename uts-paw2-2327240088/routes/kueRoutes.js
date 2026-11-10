const express = require('express');
const router = express.Router();
const kueController = require('../controllers/kueController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', kueController.getAll);
router.get('/:id', kueController.getById);
router.post('/', cekApiKey, kueController.create);
router.put('/:id', cekApiKey, kueController.update);
router.delete('/:id', cekApiKey, kueController.remove);

module.exports = router;