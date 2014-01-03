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