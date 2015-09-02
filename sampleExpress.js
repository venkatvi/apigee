var express = require('express'); // top 5 modules in node
var app = express();
app.listen('1337');
app.get('/hello', function(req, res){
	res.send('hi there 2');
});
app.get('/today', function(req,res){
	res.json({today: new Date()});
});
app.use('/', express.static(__dirname));