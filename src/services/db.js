const Sequelize = require('sequelize');

const ProductoModel = require('../api/producto/productoModel');
const CategoriaModel = require('../api/categoria/categoriaModel');
const CarritoModal = require('../api/carrito/carritoModel');
const ItemModal = require('../api/carrito/itemModel');

//Creando conexion a la base de datos
const sequelize = new Sequelize('Z99sjJ8Qqb', 'Z99sjJ8Qqb', 'bej5UMIaW6', {
    host: 'remotemysql.com',
    dialect:'mysql' 
  });
//importando modelos

const Producto = ProductoModel(sequelize, Sequelize);
const Categoria = CategoriaModel(sequelize, Sequelize);
const Carrito = CarritoModal(sequelize, Sequelize);
const Item = ItemModal(sequelize, Sequelize);


//creando relaciones entre categoria y producto
Categoria.hasMany(Producto, {
    foreignKey: 'idcat',
    sourcekey:'id'
  });

  //creando relaciones entre producto e item
  Producto.hasMany(Item, {
    foreignKey: 'idpro',
    sourcekey:'id'
  });

   //creando relaciones entre Carrito e imagenes
   Carrito.hasMany(Item, {
    foreignKey: 'idCarrito',
    sourcekey:'id'
  });
  
 
//sincronizando las tablas
try {
  sequelize.sync({force: false}) 
    .then(() => {
        console.log('Tablas sincronizadas');
})
} catch (error) {
  console.log('error de sincronizacion', error);
}


module.exports = {
  sequelize,
  Producto,
  Categoria,
  Carrito,
  Item

};