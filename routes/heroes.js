var express = require('express');
var router = express.Router();
let heroesController = require('../controllers/heroesController.js')


/* GET Heroes. */
router.get('/', heroesController.list);


router.get('/:idHeroe/profesion', heroesController.detalle);


router.get('/:idHeroe/resenia/:idResenia?', heroesController.resenia);


module.exports = router;