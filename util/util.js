var util = require('util');

function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}

Base.prototype.showName = function() {
	console.log(this.name);
};

Base.prototype.age = 20;

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();

objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
console.log(objSub.age);
objSub.showName();
//objSub.sayHello(); 
console.log(objSub);