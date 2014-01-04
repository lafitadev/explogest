
/**
 * Module dependencies.
 */

var express = require('express');
MongoClient = require('mongodb').MongoClient;
dbObject = null;
var format = require('util').format;
var routes = require('./routes');
var vademecum = require('./routes/vademecum');
var abonament = require('./routes/abonament');
var admin = require('./routes/admin');
var collita = require('./routes/collita');
var sulfat = require('./routes/sulfat');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var store = new express.session.MemoryStore;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'whatever', store: store }));
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/vademecum', vademecum.vademecum);
app.get('/abonament', abonament.abonament);
app.get('/admin', admin.admin);
app.get('/collita', collita.collita);
app.get('/sulfat', sulfat.sulfat);
app.post('/registrar', user.registrar);
app.post('/validar', user.validar);
app.post('/desconectar', user.desconectar);
app.post('/collita', collita.collita);
app.post('/abonament', abonament.abonament);
app.post('/sulfat', sulfat.sulfat);
app.post('/admin/usuari', admin.usuari);
app.post('/admin/parcela', admin.parcela);
app.post('/admin/campanya', admin.campanya);

MongoClient.connect('mongodb://127.0.0.1:27017/explogest', function(err, db) {
if (err) throw err;
  dbObject = db;
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
