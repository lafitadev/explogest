/**
 * New node file
 */
exports.abonament = function(req, res){
  if(req.session.validat){
    res.render('abonament', { title: 'Abonament' });
  }else{
    res.render('index', { title: 'exploGEST' });
  }
  
};