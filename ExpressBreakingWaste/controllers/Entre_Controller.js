var path = require('path');
var fs = require('fs');
var bcrypt = require('bcrypt');
const { Usuario } = require('../models')

module.exports = {
    entre: function(req, res, next) {
        res.render('entre');
    },

    logar: async function(req, res) {
        const {username, password} = req.body;

        const user = await Usuario.findOne({where: {username: username}});

        if(!user) {
            return res.redirect('/entre');
        }

        const senhaValida = bcrypt.compareSync(password, user.password);

        if(!senhaValida) {
            return res.redirect('/entre');
        }
        user.password = undefined
        req.session.usuario = user;



        //return res.json(user);
        return res.redirect('/perfil');
    },

    logout: function(req, res) {
        req.session.destroy()
        res.redirect('/entre')

    }


}
