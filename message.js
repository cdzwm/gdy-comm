// name: msg.js
// function:
//		parse and create messages from message data stream.
//

var msg_begin = "GDY_MSG_BEGIN{"
	,msg_end = "}GDY_MSG_END";

var msg_re_begin = "GDY_MSG_BEGIN\{("
	,msg_re_body = ".*?"
	,msg_re_end=")\}GDY_MSG_END"
	,msg_re = new RegExp(msg_re_begin + msg_re_body + msg_re_end, "g");

// parseMessae function
// ignore non-message data
exports.parseMessage = function(msg_data, mq){
	var msg_text, last_pos = 0;
	try{
		while((msg_text = msg_re.exec(msg_data)) != null){
			mq.push(JSON.parse(msg_text[1]));
			last_pos = msg_text.index + msg_text[0].length;
		}
	}
	catch(e){
	}
	return last_pos;
}

exports.new = function(cmd){
	var message = {cmd: cmd};
	return message;
}

exports.pack = function(msg){
		return msg_begin + JSON.stringify(msg) + msg_end;
}

exports.msgBegin = function(){
	return msg_begin;
}
exports.msgEnd = function(){
	return msg_end;
}

exports.msgReBegin = function(){
	return exports.msgBegin().replace(/([\[\]$()*+.?\\^{|}])/g,'\\$1');
}

exports.msgReEnd = function(){
	return exports.msgEnd();
}

exports.newRespMessage = function(msg){
	var m = exports.new(msg.cmd + "_resp");
	return m;
}
