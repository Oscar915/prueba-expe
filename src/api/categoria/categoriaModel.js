module.exports = (sequelize, type) => {
    return  sequelize.define('categoria', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: type.STRING,
        descrip: type.STRING,
    },{timestamp:false})
};