/**
 * New node file
 */
exports.sulfat = function(req, res){
  if(req.session.validat){
	
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	
	if(!query.selectCampanya){
		query.selectCampanya = 0
	}
	
	dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
		res.render('sulfat', { title: 'Sulfat' ,campanyes: usuari.campanyes, selectCampanya: query.selectCampanya });
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
		  
		   dbObject.collection('sulfats').insert(req.body, function(err, records) {
			   dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
					 res.render('sulfat', { title: 'Sulfat' , campanyes: usuari.campanyes, selectCampanya: query.selectCampanya });
			  });
		   });

			
	  }else{
	    res.render('index', { title: 'exploGEST' });
	  }
	};
	
	exports.llista = function(req, res){
		
		var result = dbObject.collection('sulfats').find({nomUsuari: req.session.usuari.nomUsuari, nomParcela:req.body.nomParcela, nomCampanya:req.body.nomCampanya });
		
		result.toArray(function(err, items) {
			console.log(items)
			res.render('llistasulfat', { title: 'Llista Sulfat' , sulfats: items });
		});
		
		
	};