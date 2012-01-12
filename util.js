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

global.setProperty = function(obj1, pa1, obj2, pa2){
	if( Array.isArray(pa1) || Array.isArray(pa2) )
		return false;
	if( typeof(obj1) != "object" || typeof(obj2) != "object" )
		return false;
	
	if( pa1.length != pa2.length )
		return false;

	for(var i in pa1 ){
		obj1[pa1[i]] = obj2[pa2[i]];
	}
}
