## Description
Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

Example 1:

```
var exampleArray = [[1, 0, 0, 0],
                   [0, 1, 0, 0],
                   [0, 0, 1, 0],
                   [0, 0, 0, 1]]

diagonalSum(exampleArray) // => 4
```

Example 2:

```
var exampleArray = [[1, 0, 0, 0, 0],
                   [0, 1, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 1, 0],
                   [0, 0, 0, 0, 1]]

diagonalSum(exampleArray) // => 5
```

## 题目理解
就是给一个矩形的二维数组，n*n形，求正对角线上的和。直接的思路就是取数组的长度，然后求对角线上元素之和。

高级一点的，还是要学会使用`Array`提供的,`reduce`, `some`, `map`等方法。


## Solutions
### 1-简单直接
```
function diagonalSum(matrix){
  //...
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j <matrix[i].length; j++) {
        if (j == i) sum += matrix[i][j];
    }
  }

  return sum;
}
```

### 2-Best Practices
```
function diagonalSum(matrix){
  var sum = 0;
  
  for(var i = 0, width = matrix.length; i < width; i++) {
    sum += matrix[i][i];
  }
  
  return sum;
}
```
