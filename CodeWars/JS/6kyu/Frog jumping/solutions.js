function solution(a) {
  var steps = 0, n = 0;
  if (!a[0]) return -1;
  
  while (a[n]) {
    n += a[n];
    steps++;
    if (steps > 100) return -1;
  }
  return steps;
}