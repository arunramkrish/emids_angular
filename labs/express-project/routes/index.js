var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/postComment', function(req, res, next) {
  res.send({"status":"Success"});
});

var posts = [];

router.post('/posts', function(req,res,next) {
	console.log(req.body);
	var post = req.body;
	post.id = posts.length + 1;
	
	posts.push(post);
	
	res.send(post);
});

router.get('/posts', function(req,res,next) {
	res.send(posts);
});

module.exports = router;
