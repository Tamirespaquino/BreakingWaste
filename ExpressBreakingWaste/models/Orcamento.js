module.exports = (sequelize, DataTypes) => {

    const orcamento = sequelize.define(
        "Orcamento",
        {
            id: {
                type: DataTypes.INTEGER,
                allownull: false,
                autoIncrement: true,
                primaryKey: true
            },
            preco: {
                type: DataTypes.FLOAT,
                allownull: false,
            },
            usuario_id:{
                type: DataTypes.INTEGER,
                allownull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'orcamentos'
        }
    )

    orcamento.associate = (models) => {
        orcamento.belongsToMany(models.Usuario, {
                through: 'usuarios_orcamentos', as: 'usuario_fk', foreignKey:'usuario_id'});
        orcamento.belongsToMany(models.Pedido, {
                through: 'pedidos_orcamentos', as: 'pedido_fk', foreignKey:'pedido_id'});
    }
    return orcamento;
}
 
