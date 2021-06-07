const { Router } = require('express');

const {obtenerproducto, crearProducto, obtenerMasBuscado } = require('./producto.controller');
const router = Router();


router.get('/:id', obtenerproducto);
router.post('/', crearProducto);
router.get('/', obtenerMasBuscado);

module.exports = router;