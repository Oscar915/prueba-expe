const { Router }=require('express');

const path = require('path');
const router = Router();

router.use("/api/producto", require('../api/producto/controlador/producto.routes'));
router.use("/api/buscar", require('../api/busqueda/buscar.routes'));
router.use("/api/carrito", require('../api/carrito/carrito.router'));
router.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'../public/index.html'));
})

module.exports=router;