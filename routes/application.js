var form = require('../form.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('application', form);
};

