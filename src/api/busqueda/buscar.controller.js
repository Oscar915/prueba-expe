const { Producto } = require("../../services/db");
const { Op } = require('sequelize');

//Obtenemos la busqueda por nombre
const obtenerResultado = async (req, res) => {
  const nombre = req.params.nombre;
  let producto = [];
  try {
    producto = await Producto.findOne({ where: { nombre: { [Op.like]: `${nombre}%` } } })
    if(producto){
      await Producto.update({ busqueda: (producto.busqueda + 1) }, {
        where: {
          id: producto.id
        }
      });
      return res.status(200).json({
        producto,
      })
    }else{
      return res.status(202).json({
        msg: "No hay coincidencia"
      })
    }
    
    
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  obtenerResultado,
};
