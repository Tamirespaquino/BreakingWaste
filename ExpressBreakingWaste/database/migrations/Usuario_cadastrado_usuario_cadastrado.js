module.exports = {
    up: (QueryInterface, DataTypes) => {
        QueryInterface.createTable('Usuario_cadastrado_usuario_cadastrado', {
            Usuario_cadastrado_id: {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTERGER,
                references: { model: 'Usuario_cadastrado', key: id }
            },
        });
    },
    down: (QueryInterface) => {
        queryInterface.dropTable('Usuario_cadastrado_usuario_cadastrado')
    }
}