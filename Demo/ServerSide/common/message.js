/*
 * Server side message 
 * Auther : Ryou(46517115@qq.com)
 */

exports.index 	=  {
    err404 : 'Sorry! The resource can not be found!',
    err500 : 'Sorry! Server error happend!',
};

exports.status 	=  {
  success        :10000,    // request success
  err404         :10404,    // request success
  err500         :10500,    // request success
  
  login_error    :10001,     // user name or user password invalid
};