var balls = document.getElementsByClassName("ball");
var layers = document.getElementsByClassName("layer");

document.onmousemove = function () {
  var x = event.clientX;
  var y = event.clientY;
  x = (x * 100) / window.innerWidth;
  y = (y * 100) / window.innerHeight;
  x += "%";
  y += "%";
  for (var i = 0; i < 2; i++) {
    balls[i].style.top = y;
    balls[i].style.left = x;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

document.onmouseleave = function () {
  for (i = 0; i < 2; i++) {
    layers[i].style.height = "120px";
    balls[i].style.top = "50%";
    balls[i].style.transform = "translate(-50%,-50%)";
    balls[i].style.left = "50%";
  }
};

document.onmouseenter = function () {
  for (i = 0; i < 2; i++) {
    layers[i].style.height = "0";
  }
};
