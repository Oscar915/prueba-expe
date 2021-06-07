const { Producto } = require("../../../services/db");

//Obtenemos los detalles de un producto 
const obtenerproducto = async (req, res) => {
  const id = req.params.id;
  try {
    let rows = await Producto.findOne({ where: { id: id } });
    
    if (!rows) {
      return res.status(400).json({
        ok: false,
        msg: "No existe producto con ese id",
      });
    }

    const producto = rows;

    return res.status(200).json({
      producto
      
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      mgs: "Hable con el administrador",
    });
  }
};

//Obtenemos los productos mas buscados
const obtenerMasBuscado = async (req, res) => {
  try {
    
    const desde = Number(req.query.desde) || 0;
    const { count, rows } = await Producto.findAndCountAll({
      offset: desde,
      limit: 6,
      order: [
        ['busqueda', 'DESC']
      ]
    });

    
    const producto = rows;
    
    res.json({
      ok: true,
      producto,
      count
    });

  } catch (error) {
    res.status(500).json({
      error: error,
      mgs: "Hable con el administrador",
    });
  }


};

//Creamos un nuevo producto
const crearProducto = async (req, res) => {
  //obteniendo los datos del producto
  const data = {
    id: req.body.id,
    nombre: req.body.nombre,
    precio: req.body.precio,
    precio_des: req.body.precio_des,
    porcentaje_des: req.body.porcentaje_des,
    busqueda: 0,
    url1: req.body.url1,
    url2: req.body.url2,
    idcat: req.body.idcat,
  }
 

  const producto = await Producto.create(data);
 

  res.status(200).json({
    mgs: "OK",
  });

  res.status(400).json({
    mgs: "Error al crear producto",
  });
};

module.exports = {
  obtenerproducto,
  obtenerMasBuscado,
  crearProducto
};