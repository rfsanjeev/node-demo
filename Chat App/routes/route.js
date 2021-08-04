const routes = require('express').Router();
module.exports = routes;

routes.get('/', (req, res) => {
    res.render('index.ejs');
});