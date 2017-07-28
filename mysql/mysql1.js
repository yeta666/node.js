var mysql = require("mysql");
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

connection.connect();

connection.query('SELECT * FROM documents', function(error, results, fields){
	if(error){
		throw error;
	}
	console.log(results);
});