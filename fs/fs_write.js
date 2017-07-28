var fs = require("fs");

//写入文件内容（覆盖）
fs.writeFile('input.txt', '我是通过写入的文件内容！', function(err) {
	console.log("准备写入文件");
	if(err) {
		return console.error(err);
	}

	console.log("数据写入成功！");
	console.log("--------我是分割线-------------")
	
	//读取文件内容
	fs.readFile('input.txt', function(err, data) {
		if(err) {
			return console.error(err);
		}

		console.log(data.toString());
	});
});