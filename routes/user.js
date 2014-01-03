
/*
 * GET users listing.
 */

exports.validar = function(req, res){
	console.log('Usuari Validat');
	res.render('missatge', { validat: 'true', missatge: 'Usuari validat amb exit' });
};

exports.registrar = function(req, res){
	console.log('Registra Usuari');
	res.render('missatge', { missatge: 'Usuari registrat amb exit' });
};