const PerfilController = {
    entre(req, res) {
        let id = req.params.id;
        return res.render('empresa', {id});
    }
}

module.exports = PerfilController;