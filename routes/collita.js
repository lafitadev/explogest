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