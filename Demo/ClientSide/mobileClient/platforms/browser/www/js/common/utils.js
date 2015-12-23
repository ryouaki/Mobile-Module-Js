/*
 * Module : utils.js
 * Auther : Ryou(46517115@qq.com)
 * This is the utils module.It will be load at the first time when the app 
 * launch.
 */
function addEventTouchStart(el, callback) {
  if(el.ontouchstart != undefined) {
    el.ontouchstart = callback;
  } else if(el.onmousedown != undefined) {
    el.onmousedown = callback;
  } else {
    el.onclick = callback;
  }
}