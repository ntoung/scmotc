var form = require('../form.json');
/*
 * GET home page.
 */

console.log(form);

exports.view = function(req, res){
  res.render('index', form);
};