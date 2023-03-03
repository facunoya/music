const path = require('path');

const Main = {
    getSearch: (req, res) => {
        res.render('searching')
    },
    search: (req, res) => {
        let busqueda = req.body
        res.send(busqueda)
    }
};

module.exports = Main;