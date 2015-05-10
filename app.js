var express = require('express');
var basicAuth = require('./module/auth');
var app = express();
app.disable('x-powered-by');

app.get('/ddd', basicAuth,function (req, res) {
    res.send('Hello World!');
});

app.use(function(req, res, next) {
    res.redirect(301, 'https://google.com');
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});