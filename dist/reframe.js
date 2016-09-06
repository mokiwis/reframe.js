var Reframe = (function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// Reframe.js
// - runs for 1 iframe (does not assume multiple iframes)
// - does not deal with src, so it will repaint
// - it's an element wrap with a fluid size `thinger`
var Reframe = function Reframe(iframe) {
  classCallCheck(this, Reframe);

  this.frame = document.querySelector(iframe);
  if (!this.frame) return;
  var frameHeight = this.frame.offsetHeight;
  var frameWidth = this.frame.offsetWidth;
  console.log(this.frame, frameHeight, frameWidth);
  var wrapper = document.createElement('div');
  var divAdded = false;
  if (frameHeight === frameWidth) {
    wrapper.style.paddingTop = '100%';
  } else if (frameHeight > frameWidth) {
    wrapper.style.paddingTop = frameWidth / frameHeight * 100 + ' + %';
  } else {
    wrapper.style.paddingTop = frameHeight / frameWidth * 100 + ' + %';
  }
  wrapper.className += 'js-responsive-iframe';
  this.frame.removeAttribute('height');
  this.frame.removeAttribute('width');
  this.frame.removeAttribute('style');
  if (!divAdded) {
    this.frame.parentNode.insertBefore(wrapper, this.frame);
    divAdded = true;
  }
  this.frame.parentNode.removeChild(this.frame);
  wrapper.appendChild(this.frame);
};

return Reframe;

}());