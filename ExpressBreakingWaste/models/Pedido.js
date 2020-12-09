module.exports = (sequelize, DataTypes) => {

    const pedido = sequelize.define(
        "Pedido",
        {
            id: {
                type: DataTypes.INTEGER,
                allownull: false,
                autoIncrement: true,
                primaryKey: true
            },
            cep_retirada: {
                type: DataTypes.INTEGER,
                allownull: false,
            },
            tipo_residuo: {
                type: DataTypes.INTEGER,
                allownull: false,
            },
            tamanho_bombonas: {
                type: DataTypes.INTEGER,
                allownull: false,
            },
            quantidade_bombinas: {
                type: DataTypes.INTEGER,
                allownull: false,
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allownull: false,
            }
        },

        {
            timestamps: false,
            tableName: 'pedidos'
        }
    )

    pedido.associate = (models) => {
        pedido.belongsToMany(models.Usuario, {
            through: 'pedidos_usuarios', as: 'usuario_fk', foreignKey: 'usuario_id'
        });
        pedido.belongsToMany(models.Orcamento, {
            through: 'pedidos_orcamentos', as: 'orcamento_fk', foreignKey: 'orcamento_id'
        });
    }
    return pedido;
}
