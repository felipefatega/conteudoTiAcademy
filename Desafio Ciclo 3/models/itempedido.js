'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    static associate(models) {
      ItemPedido.belongsTo(models.Pedido,{foreignKey: 'PedidoId', as:'pedidos'});
      ItemPedido.belongsTo(models.Servico,{foreignKey: 'ServicoId', as: 'servicos'});
    }
  };
  ItemPedido.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    PedidoId: DataTypes.INTEGER,
    ServicoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemPedido',
  });
  return ItemPedido;
};