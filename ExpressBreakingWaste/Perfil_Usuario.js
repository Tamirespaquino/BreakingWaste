//Teste - banco - Perfil do Usuário
const sequelize = require('sequelize');
 
const perfilUsuario = sequelize.define('perfilusuario', {
    "PerfilUsuario",
    {
        email: {
            type: Sequelize.STRING,
            autoIncrement: true,
            allowNull: false
        },
        senha: {
            type: Sequelize.INTEGER,
            autoIncrement: false,
            allowNull: false,
            primaryKey: true
        },
        razao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cnpj: {
            type: Sequelize.DOUBLE
        },
    },
    {
        timestamps: false,
        tableName: 'perfilUsuario'
    }
)

perfilUsuario.associate = (models) => {
    perfilUsuario.belongsToMany(models.Usuario, {
        through: 'usuarios_usuarios', as: 'usuario_fk', foreignKey: 'usuario_id'});
        
            
        
    })
}


module.exports = PerfilUsuario;


// const Produto = database.define('produto', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     nome: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     preco: {
//         type: Sequelize.DOUBLE
//     },
//     descricao: Sequelize.STRING
// })
 
// module.exports = Produto;