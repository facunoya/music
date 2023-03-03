const path = require('path');

const Main = {
    getIndex: (req, res) => {
        res.render('index')
    }
};

module.exports = Main;