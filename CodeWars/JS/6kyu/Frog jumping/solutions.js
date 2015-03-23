function solution(a) {
  //Your code here
  var aLen = a.length;
  var sum = 0;

  if (aLen < 1) return -1;
  for (var i = 0; i < aLen; i++) {
    sum += a[i];
    if (sum > aLen) return i+1;
  }

  return -1;
}