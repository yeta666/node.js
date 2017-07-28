var fs = require("fs");

fs.stat('input.txt', function(err, stats){
	if (err) {
       return console.error(err);
   }
	console.log(stats);
	console.log("读取文件属性信息成功！");
	console.log(stats.isFile());
	console.log(stats.isDirectory());
	console.log(stats.isBlockDevice());
	console.log(stats.isCharacterDevice());
	console.log(stats.isSymbolicLink());
	console.log(stats.isFIFO());
	console.log(stats.isSocket());
});
