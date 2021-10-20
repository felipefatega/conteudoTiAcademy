'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Pedido, {foreignKey: 'ClienteId', as: 'pedidos'});
    }
  };
  Cliente.init({
    nome: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};