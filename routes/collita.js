/**
 * New node file
 */
exports.collita = function(req, res){
  if(req.session.validat){
    res.render('collita', { title: 'Collita' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
};