/**
 * Mobile-Module-JS Demo
 * Auther : Ryou ( 46517115@qq.com )
 */
var express = require('express')
  , message = require('./common/message')
  , api = require('./routes/route_restapi')
  , http = require('http')
  , path = require('path')
  , utils = require('./common/utils')
  , bodyParser = require('body-parser');

var app = express();
var db = null;

// all environments
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));

app.all('*', function(req, res, next) {
  /*
   * Can be access by another domain.
   */
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/api', api);

app.use(function(req, res, next) {
  utils.ERR(req.originalUrl);
  res.status(404).json({status:message.status.err404});
});

app.use(function(err, req, res, next) {
  utils.ERR(err.stack);
  res.status(500).json({status:message.status.err500});
});

// Start the application after the database connection is ready
http.createServer(app).listen(app.get('port'), function() {
  utils.LOG('Express server listening on port ' + app.get('port'));
});
