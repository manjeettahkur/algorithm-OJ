## Description
Write a function convertBits to determine the number of bits required to convert positive integer A to positive integer B.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

```
 31  0 0 0 1 1 1 1 1
 14  0 0 0 0 1 1 1 0
---  ---------------
bit  7 6 5 4 3 2 1 0
```

Thus 31 and 14 should return 2.

## 题目分析
比较两个正数的二进制，看有几位不相同。

解法先求出二进制，长度补充相同，再进行比较。

## Solutions
### 1-My Answer
见solutions.js

### 2-Best Practices
```
function convertBits(a, b){
  var x = a ^ b, count = 0;
  do { count += x & 1 } while (x >>= 1);
  return count;
}
```

利用位运算先求出位数不同的数。

### 3-Clever
```
return ((a^b).toString(2).match(/1/g)||[]).length
```