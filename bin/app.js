'use strict';

require('babel-register');

let express = require('express');
let morgan = require('morgan');
let path = require('path');

let server = express();

let port = 5000;

server.use(morgan('dev'));

server.use('/assets', express.static('build'));

server.use('/', function(req, res, next){
    res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(port, function(){
    console.log('\nListening on port ' + port);
});
