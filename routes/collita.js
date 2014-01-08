/**
 * New node file
 */
exports.collita = function(req, res){
  if(req.session.validat){

	var url = require('url');
  	var url_parts = url.parse(req.url, true);
  	var query = url_parts.query;
  	
  	if(!query.selectCampanya){
		query.selectCampanya = 0
	}
  	
  	console.log(query.selectCampanya)
	  
	dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
		 res.render('collita', { title: 'Collita' , campanyes: usuari.campanyes, selectCampanya: query.selectCampanya });
	});
    
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.afegir = function(req, res){
  if(req.session.validat){
	  
	  var url = require('url');
  	  var url_parts = url.parse(req.url, true);
	  var query = url_parts.query;
	  	
	  if(!query.selectCampanya){
		query.selectCampanya = 0
	  }
	  
	   dbObject.collection('collites').insert(req.body, function(err, records) {
		   dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
				 res.render('collita', { title: 'Collita' , campanyes: usuari.campanyes, selectCampanya: query.selectCampanya });
		  });
	   });

		
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.llista = function(req, res){

	var result = dbObject.collection('collites').find({nomUsuari: req.session.usuari.nomUsuari, nomParcela:req.body.nomParcela, nomCampanya:req.body.nomCampanya });
	
	result.toArray(function(err, items) {
		console.log(items)
		res.render('llistacollita', { title: 'Llista Collita' , collites: items });
	});
	
	
};

exports.rendiment = function(req, res){
	res.render('rendiment', { title: 'Rendiment' });
};