/**
 * New node file
 */
exports.admin = function(req, res){
  if(req.session.validat){

	dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1, parceles: 1},function(err, usuari) {
	   res.render('admin', { title: 'Administració', campanyes: usuari.campanyes });
	});
	
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.usuari = function(req, res){
  if(req.session.validat){
	res.render('admin', { title: 'Administració' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.campanya = function(req, res){
  if(req.session.validat){

	dbObject.collection('usuaris').update({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{$addToSet: {campanyes: req.body}}, function (err, inserted) {
		dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
			 res.render('admin', { title: 'Administració', campanyes: usuari.campanyes });
	    });
	});
	  
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.parcela = function(req, res){
  if(req.session.validat){
	
   dbObject.collection('usuaris').update({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya, 'campanyes.nomCampanya': req.body.nomCampanya},{$addToSet: {'campanyes.$.parceles': req.body}}, function (err, inserted) {
	   dbObject.collection('usuaris').findOne({nomUsuari: req.session.usuari.nomUsuari, contrasenya:req.session.usuari.contrasenya},{campanyes: 1},function(err, usuari) {
		   res.render('admin', { title: 'Administració', campanyes: usuari.campanyes });
		});
	});
  
   
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};