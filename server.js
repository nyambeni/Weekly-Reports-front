
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT');
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', function(req, res){
	return res.send({error: false, message: "Welcome"});
	
});


var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'report'
});

dbConn.connect();

app.get('/reports', function(req, res){
	
	dbConn.query('SELECT * FROM report', function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Report table is empty";
			}else{
				 message = "Retrieve reports";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});


app.listen(8080, function(){
	console.log('Node is running on port 8080');
});
module.exports = app;
