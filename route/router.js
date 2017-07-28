function route(pathname, response) {
	console.log("About to route a request for " + pathname);

	if(pathname == "/hello") {
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("hello");
		response.end();
	}else{
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("what are you talking about!");
		response.end();
	}
}

exports.route = route;