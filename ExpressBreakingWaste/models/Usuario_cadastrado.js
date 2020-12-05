module.exports = (sequelize, DataTypes) => {

    const usuario = sequelize.define(
        "Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                uallownull: false,
                autoIncrement: true,
                primaryKey: true,

            },
            username: {
                type: DataTypes.STRING,
                uallownull: false,
            },
            email: {
                type: DataTypes.STRING,
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
                uallownull: false,
            },
            numero: {
                type: DataTypes.STRING,
                uallownull: false,
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
            tableName: 'usuarios'
        }
    )

    usuario.associate = (models) => {
        usuario.belongsToMany(models.Pedido, {
            through: 'pedidos_usuarios', as: 'pedido_fk', foreignKey: 'pedido_id'
        });
        usuario.belongsToMany(models.Orcamento, {
            through: 'usuarios_orcamentos', as: 'orcamento_fk', foreignKey: 'orcamento_id'
        });
        usuario.belongsToMany(models.Usuario, {
            through: 'usuarios_usuarios', as: 'usuario_fk', foreignKey: 'usuario_id'
        });
        usuario.belongsToMany(models.Usuario, {
            through: 'usuarios_usuarios', as: 'usuario_fk1', foreignKey: 'usuario_id1'
        });
    }
    return usuario;
}
