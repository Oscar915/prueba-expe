const { Router } = require('express');

const {obtenerResultado } = require('./buscar.controller');
const router = Router();


router.get('/:nombre', obtenerResultado);

module.exports = router;