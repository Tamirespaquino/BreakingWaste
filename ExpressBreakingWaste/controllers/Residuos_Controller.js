let path = require('path');
let fs = require('fs');

const Residuos_Controller = {
    residuos: (req, res) => {
        res.render('residuos')
    }
}

module.exports = Residuos_Controller;