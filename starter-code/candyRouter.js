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
// edit
router.put('/:id', function(req,res){
var objId = req.params.id;
for (i=0; i<candies.length;i++){
	if(objId == candies[i].id){
		candies[i].name = req.body.name;
		candies[i].color = req.body.color;
	}
}
res.json(candies[i]);
});

// Delete
router.delete('/:id', function(req,res){
	var current = req.params.id;
	for(i=0; i<candies.length;i++){
	if (current==candies[i].id) {
		candies.splice(i,1);

	}
}
res.json(candies);

	console.log("message:deleted");
});


module.exports = router;