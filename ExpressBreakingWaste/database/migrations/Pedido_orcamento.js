module.exports = { 
    up: (QueryInterface, DataTypes) => {
        QueryInterface.createTable('Pedido_orcamento', {
            Pedido_id:  {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTERGER,
                references: { model: 'Pedido', key: id}    
            },
            Usuario_cadastrado_id:    {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTERGER,
                references: { model: 'Orcamento', key: id} 
            }   
            });
    },
    down: (QueryInterface) => {
        queryInterface.dropTable('Pedido_orcamento')
    }
}