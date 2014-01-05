/**
 * New node file
 */
exports.abonament = function(req, res){
  if(req.session.validat){
	  
	  var url = require('url');
	  var url_parts = url.parse(req.url, true);
	  var query = url_parts.query;
	  
	  if(!query.selectCampanya){
			query.selectCampanya = 0
		}
	  
	  dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
		  res.render('abonament', { title: 'Abonament' ,campanyes: usuari.campanyes, selectCampanya: query.selectCampanya });
	  });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
  
};