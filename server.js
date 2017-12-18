var express = require('express');
var https = require('https');
var app = express();
var path = require('path');
var fs = require('fs');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

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

app.get('/',function(req, res) {
	res.app.locals = {albatross: {nonce: 0}, };
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('index.handlebars');
});
app.get('/dashboard',function(req, res) {
	res.app.locals = {albatross: {nonce: 0}, };
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('dashboard.handlebars');
});
app.get('/dashboard/add',function(req, res) {
	res.app.locals = {albatross: {nonce: 0}, };
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('add-project.handlebars');
});
app.get('/dashboard/:project',function(req, res) {
	res.app.locals = {albatross: {nonce: 0}, };
	res.app.locals.project = req.params.project;
	res.app.locals.albatross.project = req.params.project;
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('list.handlebars');
});
app.get('/dashboard/:project/add',function(req, res) {
	res.app.locals = {albatross: {}, };
	res.app.locals.project = req.params.project;
	res.app.locals.albatross.project = req.params.project;
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('add.handlebars');
});
app.get('/dashboard/:project/pay',function(req, res) {
	res.app.locals = {albatross: {}, };
	res.app.locals.project = req.params.project;
	res.app.locals.albatross.project = req.params.project;
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('pay.handlebars');
});
app.get('/dashboard/:project/pay/:user',function(req, res) {
	res.app.locals = {albatross: {}, };
	res.app.locals.project = req.params.project;
	res.app.locals.user = req.params.user;
	res.app.locals.albatross.project = req.params.project;
	res.app.locals.albatross.user = req.params.user;
	res.app.locals.albatross = JSON.stringify(res.app.locals.albatross);
	res.render('payment.handlebars');
});

app.all('/testrpc', function(req, res) {
	proxy.web(req, res, {target: 'http://192.168.1.27:8545' });
});
proxy.on('error', function (err, req, res) {
	res.writeHead(500, {
		'Content-Type': 'text/plain'
	});
	res.end('Unavailable.');
});

var privateKey = fs.readFileSync(__dirname+'/ssl/local.rb.io.key');
var certificate = fs.readFileSync(__dirname+'/ssl/local.rb.io.crt');

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(443);
console.log('Running BlockParty Project Albatross at Port 443');
