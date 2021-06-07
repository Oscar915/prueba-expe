const { Router } = require('express');

const {obtenerCarrito, AgregarCarrito, crearCarrito } = require('./carrito.controller');
const router = Router();


router.get('/:id', obtenerCarrito);
router.post('/', crearCarrito);
router.post('/item/', AgregarCarrito);

module.exports = router;