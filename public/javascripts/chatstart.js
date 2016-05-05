var socket = io();
socket.on('chat message', function(msg){
  alert("参加者が増えました");
  });