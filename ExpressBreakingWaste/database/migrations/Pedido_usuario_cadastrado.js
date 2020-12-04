module.exports = {
    up: (QueryInterface, DataTypes) => {
        QueryInterface.createTable('Pedido_usuario_cadastrado', {
            Pedido_id: {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTERGER,
                references: { model: 'Pedido', key: id }
            },
            Usuario_cadastrado_id: {
                allowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Usuario_cadastrado', key: id }
            }
        });
    },
    down: (QueryInterface) => {
        queryInterface.dropTable('Pedido_usuario_cadastrado')
    }
}