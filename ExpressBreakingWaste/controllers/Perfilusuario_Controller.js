var path = require('path');
var fs = require('fs');


module.exports = {
    entre: function(req, res, next) {
        res.render('/views/entre');
    },

    visualizar: function(req, res, next) {
        let empresa = empresas.findAll((empresa) => {
            empresa.id == id;
            res.render('/empresa/visualizar');
        });

        res.redirect('/views/entre');
    },

    


    // editar, deletar/remover, criar e guardar
    //chamar modulo exports:
}    