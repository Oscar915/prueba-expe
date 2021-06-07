module.exports = (sequelize, type) => {
    return  sequelize.define('item', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        idpro:  type.INTEGER, 
        idCarrito:  type.INTEGER, 
        cantidad:  type.INTEGER,
        total: type.FLOAT,  
    },{timestamp:false})
};