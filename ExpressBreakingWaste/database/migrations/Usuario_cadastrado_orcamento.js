// module.exports = {
//     up: (QueryInterface, DataTypes) => {
//         QueryInterface.createTable('Usuario_orcamento', {
//             Usuario_id: {
//                 allowNull: false,
//                 autoIncrement: true,
//                 type: DataTypes.INTERGER,
//                 references: { model: 'Usuario', key: id }
//             },
//             Usuario_id1: {
//                 allowNull: false,
//                 type: DataTypes.INTERGER,
//                 references: { model: 'Orcamento', key: id }
//             }
//         });
//     },
//     down: (QueryInterface) => {
//         queryInterface.dropTable('Usuario_orcamento')
//     }
// }