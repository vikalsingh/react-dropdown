var express = require('express');
var http = require('http');
var app = express();
const cors = require('cors');

var bodyParser = require('body-parser');
var aa = bodyParser.urlencoded({extended: false});


var mysql = require('mysql');
app.set('port', process.env.PORT || 5000);
app.use(cors());
var con = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	database :'curdnode'
});

app.post('/getstate', aa, function(req, res){
	const country_id = req.body.country_id;
	console.log(country_id);
	const query = `select * from state where country_id = ${country_id}`;
	con.query(query, function(err, result){
		console.log(result);
		return res.json(result);
	});
});

app.post('/getdistrict', function(req, res){
	const state_id = req.body.state_id;
	const query = `select * from district where state_id = ${state_id}`;
	con.query(query, function(err, result){
		console.log(result);
		return res.json(result);
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listing on port "+app.get('port'));
})