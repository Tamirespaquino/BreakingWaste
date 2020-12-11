"use strict";

module.exports = {
  up: function up(QueryInterface, DataTypes) {
    QueryInterface.createTable('pedidos_orcamentos', {
      pedido_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Pedido',
          key: id
        }
      },
      orcamento_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Orcamento',
          key: id
        }
      }
    });
    QueryInterface.createTable('pedidos_usuarios', {
      pedido_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Pedido',
          key: id
        }
      },
      usuario_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      }
    });
    QueryInterface.createTable('usuarios_orcamentos', {
      usuario_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      },
      orcamento_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Orcamento',
          key: id
        }
      }
    });
    QueryInterface.createTable('clientes_fornecedores', {
      cliente_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      },
      fornecedor_id: {
        allowNull: false,
        type: DataTypes.INTERGER,
        references: {
          model: 'Usuario',
          key: id
        }
      }
    });
  },
  down: function down(queryInterface) {
    queryInterface.dropTable('pedidos_orcamentos');
    queryInterface.dropTable('pedidos_usuarios');
    queryInterface.dropTable('usuarios_orcamentos');
    queryInterface.dropTable('usuarios_usuarios');
  }
};