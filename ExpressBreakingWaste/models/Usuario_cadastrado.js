module.exports = (sequelize, DataTypes) => {

    const usuario = sequelize.define(
        "Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                allownull: false,
                autoIncrement: true,
                primaryKey: true,

            },
            username: {
                type: DataTypes.STRING,
                allownull: false,
            },
            email: {
                type: DataTypes.STRING,
                allownull: false,
            },
            password: {
                type: DataTypes.STRING,
                allownull: false,
            },
            razao_social: {
                type: DataTypes.STRING,
                allownull: false,
            },
            cnpj: {
                type: DataTypes.STRING,
                allownull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                allownull: false,
            },
            endereco: {
                type: DataTypes.STRING,
                allownull: false,
            },
            numero: {
                type: DataTypes.STRING,
                allownull: false,
            },
            bairro: {
                type: DataTypes.STRING,
                allownull: false,
            },
            complemento: {
                type: DataTypes.STRING,
                allownull: false,
            },
            cidade: {
                type: DataTypes.STRING,
                allownull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allownull: false,
            },
            cep: {
                type: DataTypes.STRING,
                allownull: false,
            },
            situacaofuncionamento: {
                type: DataTypes.STRING,
                allownull: false,
            },
            tipousuario: {
                type: DataTypes.STRING,
                allownull: false,
            },
            tiporesiduos: {
                type: DataTypes.STRING,
                allownull: false,
            },
            quantidadebombonas: {
                type: DataTypes.STRING,
                allownull: false,
            },
            tamanhobombonas: {
                type: DataTypes.STRING,
                allownull: false,
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
