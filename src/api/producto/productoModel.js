module.exports = (sequelize, type) => {
    return  sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: type.STRING,
        precio: type.FLOAT,
        precio_des: type.FLOAT,
        porcentaje_des: type.FLOAT,
        busqueda: type.INTEGER,
        url1: type.STRING,
        url2: type.STRING,
        idcat: type.INTEGER,  
    },{timestamp:false})
};