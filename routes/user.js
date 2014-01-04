exports.validar = function(req, res){
	var result = dbObject.collection('usuaris').find({nomUsuari: req.body.nomUsuari, contrasenya: req.body.contrasenya});
	
	result.toArray(function(err, items) {
		if(items.length > 0){
			req.session.usuari = items[0];
			req.session.validat = true;
		}
		res.render('index');
	});

};

exports.registrar = function(req, res){
	  dbObject.collection('usuaris').insert(req.body, function(err, records) {
	    if (err) throw err;
	  });
 
	res.render('missatge', { missatge: 'Usuari registrat amb exit' });
};

exports.desconectar = function(req, res){
	req.session.validat = false;
	res.render('index');
};