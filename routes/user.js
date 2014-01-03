
/*
 * GET users listing.
 */

exports.validar = function(req, res){
	console.log('Usuari Validat');
	req.session.validat = true;
	res.render('index');
};

exports.registrar = function(req, res){
	console.log('Registra Usuari');
	res.render('missatge', { missatge: 'Usuari registrat amb exit' });
};

exports.desconectar = function(req, res){
	console.log('Desconectar Usuari');
	req.session.validat = false;
	res.render('index');
};