"use strict";

module.exports = function (sequelize, DataTypes) {
  var orcamento = sequelize.define("Orcamento", {
    id: {
      type: DataTypes.INTEGER,
      uallownull: false,
      autoIncrement: true,
      primaryKey: true
    },
    preco: {
      type: DataTypes.FLOAT,
      uallownull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      uallownull: false
    }
  }, {
    timestamps: false,
    tableName: 'orcamentos'
  });

  orcamento.associate = function (models) {
    orcamento.belongsToMany(models.Usuario, {
      through: 'usuarios_orcamentos',
      as: 'usuario_fk',
      foreignKey: 'usuario_id'
    });
    orcamento.belongsToMany(models.Pedido, {
      through: 'pedidos_orcamentos',
      as: 'pedido_fk',
      foreignKey: 'pedido_id'
    });
  };

  return orcamento;
};