'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.belongsToMany(models.Compra, {
        foreignKey: 'CompraId',
        through: 'ItemCompra',
        as: 'prod_compra'
      });
      Produto.hasMany(models.ItemCompra,{
        foreignKey: 'ProdutoId',
        as: 'prod_item'
      })
    }
  };
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};