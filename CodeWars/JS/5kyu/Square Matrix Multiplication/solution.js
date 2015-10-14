function matrixMultiplication(a, b){
  //TODO
  var matrixLength = a.length;
  var i = 0, j = 0, k = 0, result = [];

  for (i = 0; i < matrixLength; i++) {
    result[i] = new Array;
    for(j = 0; j < matrixLength; j++) {
        result[i][j] = 0;
        for (k = 0; k < matrixLength; k++) {
            result[i][j] += (a[i][k] * b[k][j]);
        }
    }
  }

  return result;
}