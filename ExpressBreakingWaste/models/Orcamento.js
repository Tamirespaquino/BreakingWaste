module.exports = (sequelize, DataTypes) => {

    const orcamento = sequelize.define(
    "Usuário_cadastrado",
    {
        id: {
            type: DataTypes.INTEGER,
            uallownull: false,
            autoIncrement: true,
            primarykey: true
        },
        orcamento: {
            type: DataTypes.STRING,
            uallownull :false,
            unique: true
        },
    },

    {
        timestamps: false,
        tableName: 'Orcamento'
    }
)

Orcamento.associate = (models) => {
    Orcamento.belongsToMany(models.Usuario_cadastrado, {
         through:'Usuario_cadastrado_orcamento', as: 'orcamento', foreignKey:'orcamento_id'});
     Orcamento.belongsToMany(models.Pedido, {
         through:'Pedido_orcamento', as: 'orcamento', foreignKey:'orcamento_id'});
 }
 return orcamento;
 }
 