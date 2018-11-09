(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		//var scale = 1 / devicePixelRatio;
//		document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=' + scale +
//			', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
	  docEl.style.fontSize = 100 * (clientWidth  / 750) + 'px';
	};

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  recalc();
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);