var socket = io();
socket.on('chat message', function(msg){//emitできたときに
	console.log(msg);
  });