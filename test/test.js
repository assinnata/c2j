var c2j = require("../index.js");

c2j("foobar", function(success, jconf){
	if(success && jconf["a"] == 33 && jconf.foobar == "raboof" )
		console.log("test success");
	else
		console.log("test failed");
});