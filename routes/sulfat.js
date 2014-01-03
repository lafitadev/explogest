/**
 * New node file
 */
exports.sulfat = function(req, res){
  if(req.session.validat){
    res.render('sulfat', { title: 'Sulfat' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};