// Util Tool Function, Created by JH

// 1.在[min, max]区间范围内生成随机数
let random = function(min, max) {
  min = min < 0 ? Math.abs(min) : min;
  if(!max) {
  	max = min;
  	min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}

// 2.随机生成字体颜色
let randomColor = function() {
  return [random(0, 255), random(0, 255), random(0, 255)];
}

module.exports = {
	random,
	randomColor
}