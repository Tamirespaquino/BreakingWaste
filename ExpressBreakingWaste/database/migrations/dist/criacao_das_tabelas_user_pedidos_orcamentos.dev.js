"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    QueryInterface.createTable('pedidos_usuarios', {
      pedido_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Pedido',
          key: id
        }
      },
      usuario_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      }
    });
    QueryInterface.createTable('usuarios_orcamentos', _defineProperty({
      usuario_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      }
    }, "usuario_id", {
      uallowNull: false,
      type: DataTypes.INTERGER,
      references: {
        model: 'Orcamento',
        key: id
      }
    }));
    QueryInterface.createTable('usuarios_usuarios', {
      usuario_id: {
        uallowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      }
    });
  },
  down: function down(QueryInterface) {
    queryInterface.dropTable('pedidos_orcamentos');
    queryInterface.dropTable('pedidos_usuarios');
    queryInterface.dropTable('usuarios_orcamentos');
    queryInterface.dropTable('usuarios_usuarios');
  }
};