const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
var mysql = require('mysql');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var con = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'ourdesignz',
	database :'curdnode'
});

app.set('port', process.env.PORT || 4200);

app.post('/getstate', function(req, res){
	const country_id = req.body.country_id;
	
	const query = `select * from state where country_id = ${country_id}`;
	con.query(query, function(err, result){
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
});