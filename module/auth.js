var basicAuth = require('basic-auth');
var config = require('../config.json');
var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    }

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }

    if (user.name === config.userName && user.pass === config.userPassword) {
        return next();
    } else {
        return unauthorized(res);
    }
};

module.exports = auth;