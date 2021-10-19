'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    static associate(models) {
      Compra.belongsTo(models.Cliente, {
        foreignKey:'ClienteId', as: 'cliente'
      });
      Compra.belongsToMany(models.Produto,{
        foreignKey: 'ProdutoId',
        through: 'ItemCompra',
        as: 'compraDeProduto'
      });
      Compra.hasMany(models.ItemCompra, {
        foreignKey: 'CompraId',
        as: 'compraItens'
      });
    }
  };
  Compra.init({
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};