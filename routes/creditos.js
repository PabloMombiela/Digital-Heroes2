var express = require('express');
var router = express.Router();
let heroesController = require('../controllers/creditosController.js')
    /* GET Creditos. */
router.get('/', heroesController.creditos);

module.exports = router;