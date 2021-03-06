var Author = require('../models/author');

exports.author_list = function(req, res){
  Author.find().sort([['family_name', 'ascending']]).exec(
    function (err, list_authors){
      if(err) {
        return next(err)
      }
      res.render('author_list')
    }
  );
};

exports.author_detail = function(req, res){
  res.send('Author detail');
};

exports.author_create_get = function(req, res){
  res.send('Author Create GET ');
};

exports.author_create_post = function(req, res){
  res.send('Author Create POST');
};


exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};


exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};


exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
