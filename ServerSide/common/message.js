/*
 * Server side message class
 * Auther : Ryou(46517115@qq.com)
 */

exports.index 	=  {
    err404 : 'Sorry! The resource can not be found!',
    err500 : 'Sorry! Server error happend!',
};

exports.status 	=  {
  success        :10000,    // request success
  
  session_timeout:10001,    // session timeout
  login_error    :10002,     // user name or user password invalid
};