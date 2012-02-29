var crypto = require('crypto');
		
//clone object
module.exports.cloneObject = cloneObject;

function cloneObject(obj) {
	var clone = {};
	for(var i in obj) {
		if(typeof(obj[i])=="object")
			clone[i] = cloneObject(obj[i]);
		else
			clone[i] = obj[i];
	}
	return clone;
}

// genergate sha1 function
module.exports.sha1 = function (input){
	var sha1 = crypto.createHash('sha1');
	sha1.update(input);
	return sha1.digest('hex');
}
