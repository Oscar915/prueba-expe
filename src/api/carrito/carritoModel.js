module.exports = (sequelize, type) => {
    return  sequelize.define('carrito', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        compra:  type.FLOAT,
        estado:  type.STRING,  
    },{timestamp:false})
};