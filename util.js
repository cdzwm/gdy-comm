//clone object
global.cloneObject = function(obj) {
	var clone = {};
	for(var i in obj) {
		if(typeof(obj[i])=="object")
			clone[i] = cloneObject(obj[i]);
		else
			clone[i] = obj[i];
	}
	return clone;
}

global.setP = function(){
	var that1 = arguments[0];
	var that2 = arguments[1];

	for(var i=2;i<arguments.length;i++){
		that1[arguments[i]] = that2[arguments[i]];
	}
}
