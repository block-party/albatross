var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');

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

app.use('/css', express.static(path.join(__dirname + '/css')));
app.use('/js', express.static(path.join(__dirname + '/js')));
app.use('/img', express.static(path.join(__dirname + '/img')));

var data = {
}

app.get('/',function(req, res){
	res.render('index.handlebars', data);
});
app.get('/dashboard/',function(req, res){
	res.render('dashboard.handlebars', data);
});

app.get('/dashboard/:project',function(req, res){
	res.render('list.handlebars', data);
});

app.listen(80);
console.log('Running BlockParty Project Albatross at Port 80');
