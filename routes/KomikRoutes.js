const express = require('express');
const router = express.Router();
// Ubah path controllers menyesuaikan struktur folder saat ini
const komikController = require('../controllers/komikcontrollers'); 

// Perhatikan juga nama folder middleware Anda (di gambar tertulis 'middelware' dengan 'e')
const { komikSchema, idSchema, validateBody, validateParams } = require('../middelware/KomikValidator');

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', validateParams(idSchema), komikController.getKomikById);
router.post('/komik', validateBody(komikSchema), komikController.createKomik);
router.put('/komik/:id', validateParams(idSchema), validateBody(komikSchema), komikController.updateKomik);
router.delete('/komik/:id', validateParams(idSchema), komikController.deleteKomik);

module.exports = router;