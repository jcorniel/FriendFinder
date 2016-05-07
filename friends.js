var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Data
// ===========================================================
{
  "name":"Joel",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
}


// Routes
// ===========================================================
app.get('/', function(req, res){
	res.send("")
})




// Listener
// ===========================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
