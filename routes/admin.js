/**
 * New node file
 */
exports.admin = function(req, res){
  if(req.session.validat){
	res.render('admin', { title: 'Administració' });
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
	res.render('admin', { title: 'Administració' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};

exports.parcela = function(req, res){
  if(req.session.validat){
	res.render('admin', { title: 'Administració' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};