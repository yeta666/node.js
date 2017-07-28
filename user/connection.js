/**
 * 获取数据库连接
 */
function getConnection(){
	var mysql = require("mysql");
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'test'
	});
	connection.connect();
	return connection;
}
exports.getConnection = getConnection;

