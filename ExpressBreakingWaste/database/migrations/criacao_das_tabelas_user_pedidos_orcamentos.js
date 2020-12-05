module.exports = {
    up: (QueryInterface, DataTypes) => {
        QueryInterface.createTable('pedidos_orcamentos', {
            pedido_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Pedido', key: id }
            },
            orcamento_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Orcamento', key: id }
            }
        });
        QueryInterface.createTable('pedidos_usuarios', {
            pedido_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Pedido', key: id }
            },
            usuario_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Usuario', key: id }
            }
        });
        QueryInterface.createTable('usuarios_orcamentos', {
            usuario_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Usuario', key: id }
            },
            usuario_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Orcamento', key: id }
            }
        });
        QueryInterface.createTable('usuarios_usuarios', {
            usuario_id: {
                uallowNull: false,
                type: DataTypes.INTERGER,
                references: { model: 'Usuario', key: id }
            }    
        });


    },
    down: (QueryInterface) => {
        queryInterface.dropTable('pedidos_orcamentos');
        queryInterface.dropTable('pedidos_usuarios');
        queryInterface.dropTable('usuarios_orcamentos');
        queryInterface.dropTable('usuarios_usuarios');
    }
}

