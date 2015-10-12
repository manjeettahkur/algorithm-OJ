function allSquaredPairs(num) {
  var solutions = [], max = Math.sqrt(num / 2);
  for (var a = 0; a <= max ; a++) {
    var b = Math.sqrt(num - a*a);
    if (b == (b | 0)) solutions.push([a,b]);
  }
  return solutions;
}