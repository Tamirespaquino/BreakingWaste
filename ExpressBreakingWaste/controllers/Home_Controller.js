const Home_Controller = {
    home: (req, res) => {
        res.render('home')
    }
}

const { Usuario_cadastrado } = require('../models')
var Home_Controller = {
      busca: async (req, res) => {
       // ideia da lógica: selecionar os usuários que atendam os seguintes requisitos: tipo de resíduo, quatidade de bombona, tamanho de bombona   
      // const busca = await Usuario_cadastrado.findAll({
         //  where: {usuario_cadastrado_id = id}
       // }
      //  );
      //  console.log(busca);
      //  return res.render('/resultadobusca', {busca})
    }
}

module.exports = Home_Controller;
