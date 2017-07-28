function Hello(){
	var name;
	this.setName = function(_name){
		name = _name;
	};
	this.sayHello = function(){
		console.log("hello " + name);
	};
};
module.exports = Hello;
