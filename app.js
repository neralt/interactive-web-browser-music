var express = require('express');
var socket_io    = require( "socket.io" );//ソケット用

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var io           = socket_io();//ソケット用
app.io           = io;//ソケット用

//osc
var osc = require('oscsocket');//osc用
var sock = new osc.OSCSocket();

var msgOSC = new osc.OSCMessage();
msgOSC.address = "/osc/";
msgOSC.addArgument("i", 2000);
msgOSC.addArgument("s", "String value." );

sock.send( msgOSC, 8000 , "localhost" );
// socket.io 
app.io.on('connection', function(socket){  //表面系でio();した時に発生する。
  socket.on('osc x', function(msg){//chat massageが来たら、発動。msgにメッセージが入ってる。
    io.emit('osc x', msg);
    console.log(msg);
//osc
    var msgOSC = new osc.OSCMessage();
    msgOSC.address = "/osc/";
    msgOSC.addArgument("f", msg/680);
    sock.send( msgOSC, 8000 , "localhost" );

  });

  socket.on('osc y', function(msg){//chat massageが来たら、発動。msgにメッセージが入ってる。
    io.emit('osc y', msg);
    console.log("y"+msg);
//osc
    var msgOSC = new osc.OSCMessage();
    msgOSC.address = "/oscy/";
    msgOSC.addArgument("f", msg/800);
    sock.send( msgOSC, 8000 , "localhost" );
  });
});





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
