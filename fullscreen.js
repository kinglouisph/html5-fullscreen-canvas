"use strict";

//clear screen: ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;





window.onresize = function() {
  ctx.canvas.width  = window.innerWidth * 0.8;
  ctx.canvas.height = window.innerHeight;
};
