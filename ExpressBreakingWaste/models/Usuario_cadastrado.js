module.exports = (sequelize, DataTypes) => {

    const usuario_cadastrado = sequelize.define(
        "Usuário_cadastrado",
        {
            id: {
                type: DataTypes.INTEGER,
                uallownull: false,
                autoIncrement: true,
                primarykey: true,

            },
            username: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            email: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            password: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            razao_social: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            cnpj: {
                type: DataTypes.INTEGER,
                allownull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            endereco: {
                type: DataTypes.INTEGER,
                uallownull: alse,
            },
            numero: {
                type: DataTypes.INTEGER,
                uallownull: alse,
            },
            bairro: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            complemento: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            cidade: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            estado: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            cep: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            situacao_funcionamento: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
            tipo_usuario: {
                type: DataTypes.INTEGER,
                uallownull: false,
            },
        },

        {
            timestamps: false,
            tableName: 'Usuário_cadastrado'
        }
    )

    Usuario_cadastrado.associate = (models) => {
        Usuario_cadastrado.belongsToMany(models.Pedido, {
            through: 'Pedido_usuario_cadastrado', as: 'usuario_cadastrado', foreignKey: 'usuario_cadastrado_id'
        });
        Usuario_cadastrado.belongsToMany(models.Orcamento, {
            through: 'Usuario_cadastrado_orcamento', as: 'usuario_cadastrado', foreignKey: 'usuario_cadastrado_id'
        });
        Usuario_cadastrado.belongsToMany(models.usuario_cadastrado, {
            through: 'Usuario_cadastrado_usuario_cadastrado', as: 'usuario_cadastrado', foreignKey: 'usuario_cadastrado_id'
        });
        Usuario_cadastrado.belongsToMany(models.usuario_cadastrado, {
            through: 'Usuario_cadastrado_usuario_cadastrado', as: 'usuario_cadastrado', foreignKey: 'usuario_cadastrado_id1'
        });
    }
    return usuario_cadastrado;
}
