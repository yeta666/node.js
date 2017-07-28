/**
 * 与用户信息有关的请求处理
 */

//获取数据库连接
var connection = require("./connection").getConnection();

//返回用户信息列表页
function user(req, res){
	res.redirect("./user.html");
}

//获取所有用户信息
function get(req, res){
	connection.query('SELECT ID, Name, Age FROM user', function(error, results, fields){
		if(error){
			return console.error(error);
		}
		res.send(results);
	});
}

//根据ID获取用户信息
function getByID(req, res){
	var query = req.query;
	var ID = query.ID;
	if(!ID){
		return res.send("ID不能为空！");
	}
	var sql = "SELECT ID, Name, Age FROM user Where ID = ? LIMIT 1";
	var params = [];
	params.push(ID);
	connection.query(sql, params, function(error, results, fields){
		if(error){
			return console.error(error);
		}
		res.send(results);
	});
}

//新增用户信息
function add(req, res){
	var query = req.query;
	var Name = query.Name;
	var Age = query.Age;
	if(!Name || !Age){
		return res.send("Name和Age不能为空！");
	}
	var sql = "INSERT INTO user(Name, Age) VALUES(?, ?)";
	var params = [];
	params.push(Name);
	params.push(Age);
	connection.query(sql, params, function(error, results, fields){
		if(error){
			return console.error(error);
		}
		var ret;
		if(results.affectedRows = 1){
			ret = "新增成功！";
		}else{
			ret = "新增失败！";
		}
		res.send(ret);
	});
}

//修改用户信息
function update(req, res){
	var query = req.query;
	var ID = query.ID;
	var Name = query.Name;
	var Age = query.Age;
	if(!ID || !Name || !Age){
		return res.send("修改信息不全！");
	}
	var sql = "UPDATE user SET Name = ?, Age = ? WHERE ID = ?";
	var params = [];
	params.push(Name);
	params.push(Age);
	params.push(ID);
	connection.query(sql, params, function(error, results, fields){
		if(error){
			return console.error(error);
		}
		var ret;
		if(results.affectedRows = 1){
			ret = "修改成功！";
		}else{
			ret = "修改失败！";
		}
		res.send(ret);
	});
}

//根据ID删除用户信息
function deletee(req, res){
	var query = req.query;
	var IDs = query.IDs;
	if(!IDs){
		return res.send("没有获取到要删除的IDs！");
	}
	var IDsArr = IDs.split(",");
	var sql = "Delete From user WHERE ID = ?";
	var ret = true;
	for(var i = 0; i < IDsArr.length; i++){
		connection.query(sql, IDsArr[i], function(error, results, fields){
			if(error){
				return console.error(error);
			}
			if(results.affectedRows != 1){
				ret = false;
			}
		});
	}
	if(ret){
		res.send("删除成功！");
	}else{
		res.send("删除失败！");
	}
}

//暴露接口
exports.user = user;
exports.get = get;
exports.getByID = getByID;
exports.add = add;
exports.update = update;
exports.deletee = deletee;


