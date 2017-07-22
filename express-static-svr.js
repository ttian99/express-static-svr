var express = require('express');
var fs = require('fs');
var path = require('path');

var cfg = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
var app = express();

var realPath = path.join(__dirname, cfg.dir);

app.use('/root', express.static(realPath));
app.listen(cfg.port);
console.info('~_~ static svr is listen on: ' + cfg.port + ' ~_~ ');
    