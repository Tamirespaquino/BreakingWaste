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
                type: DataTypes.STRING,
                uallownull: false,
            },
            email: {
                type: DataTypes.STRINT,
                uallownull: false,
            },
            password: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            razao_social: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            cnpj: {
                type: DataTypes.STRING,
                allownull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            endereco: {
                type: DataTypes.STRING,
                uallownull: alse,
            },
            numero: {
                type: DataTypes.STRING,
                uallownull: alse,
            },
            bairro: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            complemento: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            cidade: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            estado: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            cep: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            situacaofuncionamento: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            tipousuario: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            tiporesiduos: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            quantidadebombonas: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            tamanhobombonas: {
                type: DataTypes.STRING,
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
