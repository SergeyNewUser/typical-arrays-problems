
exports.min = function min(array) {

  if (arguments.length === 0) return 0;
  if (array.length === 0) return 0;

  array.sort(function (a, b) {
    return a - b;

  })
  return array[0];
}


exports.max = function max(array) {
  if (arguments.length === 0) return 0;
  if (array.length === 0) return 0;
  array.sort(function (a, b) {
    return b - a;
  })
  return array[0];
}


exports.avg = function avg(array) {
  if (arguments.length === 0) return 0;
  if (array.length === 0) return 0;

  sum = array.reduce((total, elements) => total + elements, 0);
  sum = sum / array.length;
  return sum;

}

