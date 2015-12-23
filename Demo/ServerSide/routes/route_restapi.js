/*
 * Server restapi entry route
 * Auther : Ryou(46517115@qq.com)
 */
var express = require('express')
  , restapiRoute = express()
  , message = require('../common/message')
  , fs=require("fs")
  , utils = require('../common/utils');

/*
 * login route
 */
restapiRoute.post('/login', function(req, res, next) {
  utils.LOG('/login');
  var user = req.body;
  if(user.username == 'admin' && user.password == 'admin') {
    res.json({status:message.status.success});
  } else {
    res.json({status:message.status.login_error});
  }
});

module.exports = restapiRoute;