const { Carrito, Item } = require("../../services/db");
 

//Creamos un nuevo carrito
const crearCarrito = async (req, res) => {
  const data = {
        compra: req.body.compra,
        estado: "ACTIVO"
    }
  
  const carrito = await Carrito.create(data);
  res.json({
    ok: true,
    carrito,
    mgs: "El carrito se creo satisfactoriamente.",
  });
};

//Traemos los datos del carrito
const obtenerCarrito = async (req, res) => {
    const id = req.params.id;
  try {
    const valor = await Item.sum('total');
    await Carrito.update({ compra: valor }, {
        where: {
          id: id
        }
      });
    let rows = await Carrito.findOne({ where: { id: id } });
    let item = await Item.findAll({ where: { idCarrito: id } });

    if (!rows) {
      return res.status(400).json({
        ok: false,
        msg: "No existe carrito con ese id",
      });
    }
    const  carrito = rows;
    return res.json({
       carrito,
       item
    });
  } catch (error) {
    res.status(500).json({
      error:error,
      mgs: "Hable con el administrador",
    });
  }
  };

  const AgregarCarrito = async (req, res) => {
    //agregando items al carrito
    const data = {
        idpro:  req.body.idpro, 
        idCarrito:  req.body.idCarrito, 
        cantidad:  req.body.cantidad,
        total: req.body.total,
      }
    await Item.create(data);
    res.json({
      mgs: "Producto añadido al carrito",
    });
  };

 module.exports = {
   crearCarrito,
   AgregarCarrito,
   obtenerCarrito
 };