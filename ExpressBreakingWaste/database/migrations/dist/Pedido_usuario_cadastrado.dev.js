// module.exports = {
//     up: (QueryInterface, DataTypes) => {
//         QueryInterface.createTable('Pedido_Usuario', {
//             Pedido_id: {
//                 allowNull: false,
//                 autoIncrement: true,
//                 type: DataTypes.INTERGER,
//                 references: { model: 'Pedido', key: id }
//             },
//             Usuario_id: {
//                 allowNull: false,
//                 type: DataTypes.INTERGER,
//                 references: { model: 'Usuario', key: id }
//             }
//         });
//     },
//     down: (QueryInterface) => {
//         queryInterface.dropTable('Pedido_Usuario')
//     }
// }
"use strict";