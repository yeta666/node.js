/**
 * 处理访问主页请求
 */
function index(req, res){
	res.send("index");
}

exports.index = index;