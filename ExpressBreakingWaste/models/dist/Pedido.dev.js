"use strict";

module.exports = function (sequelize, DataTypes) {
  var pedido = sequelize.define("Pedido", {
    id: {
      type: DataTypes.INTEGER,
      uallownull: false,
      autoIncrement: true,
      primaryKey: true
    },
    cep_retirada: {
      type: DataTypes.INTEGER,
      uallownull: false
    },
    tipo_residuo: {
      type: DataTypes.INTEGER,
      uallownull: false
    },
    tamanho_bombonas: {
      type: DataTypes.INTEGER,
      uallownull: false
    },
    quantidade_bombinas: {
      type: DataTypes.INTEGER,
      uallownull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      uallownull: false
    }
  }, {
    timestamps: false,
    tableName: 'pedidos'
  });

  pedido.associate = function (models) {
    pedido.belongsToMany(models.Usuario, {
      through: 'pedidos_usuarios',
      as: 'usuario_fk',
      foreignKey: 'usuario_id'
    });
    pedido.belongsToMany(models.Orcamento, {
      through: 'pedidos_orcamentos',
      as: 'orcamento_fk',
      foreignKey: 'orcamento_id'
    });
  };

  return pedido;
};