var express = require("express");
var server = express();
var index = require("./index");
var user = require("./user");

//静态资源
server.use(express.static('html'));

//访问"/"
server.get('/', function(req, res){
	index.index(req, res);
});

//访问"/user"
server.get('/user', function(req, res){
	user.user(req, res);
});

//获取所有用户信息
server.get('/user/get', function(req, res){
	user.get(req, res);
});

//根据ID获取用户信息
server.get('/user/getByID', function(req, res){
	user.getByID(req, res);
});

//新增用户信息
server.post('/user/add', function(req, res){
	user.add(req, res);
});

//修改用户信息
server.post('/user/update', function(req, res){
	user.update(req, res);
});

//根据ID删除用户信息
server.post('/user/delete', function(req, res){
	user.deletee(req, res);
});

//启动服务器
server.listen(8888, function(){
	console.log("服务器启动，监听8888端口。");
});