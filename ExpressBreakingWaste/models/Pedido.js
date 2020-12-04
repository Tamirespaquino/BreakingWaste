module.exports = (sequelize, DataTypes) => {

    const pedido = sequelize.define(
        "Usuário_cadastrado",
        {
            id: {
                type: DataTypes.INTEGER,
                uallownull: false,
                autoIncrement: true,
                primarykey: true
            },
            cep_retirada: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            tipo_residuo: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            tamanho_bombonas: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            quantidade_bombinas: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            usuario_busca_id: {
                type: DataTypes.INTEGER,
                allownull: false,
            }
        },

        {
            timestamps: false,
            tableName: 'Pedido'
        }
    )

    Pedido.associate = (models) => {
        Pedido.belongsToMany(models.Usuario_cadastrado, {
            through: 'Pedido_usuario_cadastrado', as: 'pedido_id', foreignKey: 'pedido_id'
        });
        Pedido.belongsToMany(models.Orcamento, {
            through: 'Pedido_orcamento', as: 'pedido', foreignKey: 'pedido_id'
        });
    }
    return pedido;
}
