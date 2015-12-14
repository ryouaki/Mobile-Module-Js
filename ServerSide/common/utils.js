/*
 * Server side util class
 * Auther : Ryou(46517115@qq.com)
 */
function logDataTime() {
	var date = new Date();
	var month = date.getMonth() + 1;
	var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return date.getFullYear()+"-"+month+"-"+date.getDate()+"-"+hour+"-"+minute+"-"+second+"-"+date.getMilliseconds();
}

exports.LOG = function(msg) {
	if(LOG_FLG == "ALL"||LOG_FLG == "LOG")
		console.log(logDataTime()+" LOG: "+msg);
};

exports.ERR = function(msg) {
	if(LOG_FLG == "ALL"||LOG_FLG == "ERR")
		console.error(logDataTime()+" ERR: "+msg);
};

exports.secret = function(len) {
	len = len || 32;
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 
	var maxPos = $chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
 	return pwd;
};

exports.logDataTime = logDataTime;

LOG_FLG = "ALL";