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

function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
  }
}