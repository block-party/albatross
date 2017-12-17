var express = require('express');
var https = require('https');
var app = express();
var path = require('path');
var engines = require('consolidate');
var fs = require('fs');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

//app.set('view engine', 'html');
//app.engine('html', engines.mustache);
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	layoutDir: __dirname+'/views',
	partialsDir  : [
		__dirname+'/views/partials',
	]
}));
app.set('view engine', 'handlebars');

app.get('/*',function(req, res, next){
	res.header('X-Powered-By', 'BlockParty');
	next();
});

app.use('/css', express.static(path.join(__dirname+'/css')));
app.use('/js', express.static(path.join(__dirname+'/js')));
app.use('/img', express.static(path.join(__dirname+'/img')));

var data = {
}

app.get('/',function(req, res) {
	res.render('index.handlebars', data);
});
app.get('/dashboard/',function(req, res) {
	res.render('dashboard.handlebars', data);
});

app.get('/dashboard/:project',function(req, res) {
	res.render('list.handlebars', data);
});

app.all('/testrpc', function(req, res) {
	proxy.web(req, res, {target: 'http://localhost:8545' });
});

var privateKey = fs.readFileSync(__dirname+'/ssl/local.rb.io.key');
var certificate = fs.readFileSync(__dirname+'/ssl/local.rb.io.crt');

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(443);
console.log('Running BlockParty Project Albatross at Port 443');
