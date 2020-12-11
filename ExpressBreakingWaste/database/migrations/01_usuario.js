module.exports = {
        up: (QueryInterface, DataTypes) => {
            QueryInterface.createTable('Usuario', {
                id: {
                    type: DataTypes.INTEGER,
                    allownull: false,
                    autoIncrement: true,
                    primaryKey: true,
    
                },
                username: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                razao_social: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                cnpj: {
                    type: DataTypes.STRING,
                    allownull: false,
                    unique: true
                },
                telefone: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                endereco: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                numero: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                bairro: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                complemento: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                cidade: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                estado: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                cep: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                situacaofuncionamento: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                tipousuario: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                tiporesiduos: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                quantidadebombonas: {
                    type: DataTypes.STRING,
                    allownull: false,
                },
                tamanhobombonas: {
                    type: DataTypes.STRING,
                    allownull: false,
                }
            });
        },
        down: (queryInterface) => {
            queryInterface.dropTable('Usuario')
        }
    }