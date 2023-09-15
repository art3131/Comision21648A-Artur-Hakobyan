const {Sequelize, DataTypes} = require('sequelize')


// instancia de conexion

 const sequelize = new Sequelize('forodb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });



  module.exports = {
    sequelize,
    DataTypes,
    Sequelize
  }