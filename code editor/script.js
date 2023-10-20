"strict";
var html = document.querySelector("#html");
var css = document.querySelector("#css");
var javascript = document.querySelector("#javascript");
var output = document.querySelector("#output");

function myfunction() {
  output.contentDocument.body.innerHTML = ` <style>${css.value} </style>  ${html.value}`;
  output.contentWindow.eval(javascript.value);
}

html.addEventListener("keyup", myfunction);
css.addEventListener("keyup", myfunction);
javascript.addEventListener("keyup", myfunction);
console.log('dalia')
