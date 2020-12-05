// module.exports = {
//     up: (QueryInterface, DataTypes) => {
//         QueryInterface.createTable('Usuario_Usuario', {
//             Usuario_id: {
//                 allowNull: false,
//                 autoIncrement: true,
//                 type: DataTypes.INTERGER,
//                 references: { model: 'Usuario', key: id }
//             },
//         });
//     },
//     down: (QueryInterface) => {
//         queryInterface.dropTable('Usuario_Usuario')
//     }
// }