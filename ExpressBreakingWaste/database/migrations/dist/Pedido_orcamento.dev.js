"use strict";

module.exports = {
  up: function up(QueryInterface, DataTypes) {
    QueryInterface.createTable('pedidos_orcamentos', {
      pedido_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Pedido',
          key: id
        }
      },
      orcamento_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Orcamento',
          key: id
        }
      }
    });
    QueryInterface.createTable('pedidos_orcamentos', {
      pedido_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Pedido',
          key: id
        }
      },
      orcamento_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Orcamento',
          key: id
        }
      }
    });
  },
  down: function down(QueryInterface) {
    queryInterface.dropTable('pedidos_orcamentos');
    queryInterface.dropTable('pedidos_orcamentos');
  }
};