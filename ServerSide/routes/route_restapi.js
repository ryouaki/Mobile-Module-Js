/*
 * Server restapi entry route
 * Auther : Ryou(46517115@qq.com)
 */
var express = require('express')
  , adminRoute = express()
  , message = require('../common/message')
  , fs=require("fs")
  , utils = require('../common/utils');

restapiRoute.use('/', function(req, res, next) {
  if((req.session==undefined || req.session.session_id==undefined) && 
      req.originalUrl != '/admin/login') {
    if(req.path == '/') 
      res.render('index', {title:message.title});
    else 
      res.json({status:message.status.session_timeout});
  } else {
      next();
  }
});

restapiRoute.get('/', function(req, res, next){
  utils.LOG('/');
  res.render('index', {title:message.title});
});

/*
 * login route
 */
restapiRoute.post('/login', function(req, res, next) {
  utils.LOG('/login');
  var user = req.body;
  global.db.collection("user").findOne({
    "user_name" : user.name,
    "user_pswd" : user.pass
  }, function(err, data) {
    if (data == undefined || data == null) {
      res.json({status:message.status.login_error});
    } else {
      req.session.session_id = data._id;
      res.json({status:message.status.success});
    }
  });
});

restapiRoute.get('/logout', function(req, res, next) {
  utils.LOG('/logout');
  req.session.session_id = null
  res.render('index', {title:message.title});
});

/*
 * home route
 */
restapiRoute.get('/main', function(req, res, next) {
  utils.LOG('/main');
  global.db.collection("config").find().toArray().then(function(data){
      res.json({status:message.status.success, result:data});
  });
});

module.exports = restapiRoute;