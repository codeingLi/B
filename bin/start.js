#!/usr/bin/env node
var debug = require('debug')('my-application');
var conf = require("../config.js");
var app = require('../app');
//TODO 代理访问更慢了。nginx也是一样的.
//var httpProxy=require('http-proxy');
//httpProxy.createProxyServer({target:'http://localhost:'+conf.appport}).listen(80);

app.listen(conf.appport, function () {
    var date = new Date();
    var log = '\n';
    log += '------------------------------------------------------------\n';
    log += '\tExpress server listening on port ' + conf.appport + '\n';
    log += '\tStart time：' + date + '\n';
    log += '\tEnvironment：' + app.settings.env + '\n';
    log += '\tDB Connetion port：' + conf.port + '\n';
    log += '\tLog Level：' + conf.logger_level + '\n';
    log += '------------------------------------------------------------\n';
    console.log(log);
});
