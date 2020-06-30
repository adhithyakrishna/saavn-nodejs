const express = require('express');
const router = express.Router();

const saavnController = require('../controllers/saavn');

router.get('/search/song/:song', saavnController.getSongResults);

router.get('/search/:id', saavnController.getSearchResults);

module.exports = router;