var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	console.log(req.body);
	res.json(candies);
});

// Fill out the rest of the routes here
// show
router.get('/:id', function(req,res) {
var index = req.params.id;
for (i=0; i<candies.length; i++){
	if (candies[i].id==index){
		res.json(candies[i]);

		}
	}
});
// create
router.post('/', function(req,res) {
	candies.push(req.body);
	res.json(req.body);
});


module.exports = router;