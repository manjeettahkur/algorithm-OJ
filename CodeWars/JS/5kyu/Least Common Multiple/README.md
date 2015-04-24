## Description
Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.

## 题目分析
写一个函数，求出所有参数的最小公倍数。

求两个数的最小公倍数是好操作的，借助最大公约数即可。方法如下:

```
function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
}

function lcm(a,b) {
    return a*b / gcd(a,b);
}
```

多个数字的话，就两个先处理，再当做第一个参数传递下去，正好可以使用`Array.reduce`方法。

## Solutions
### 1-My Anwser
见solutions.js

### 2-Best Practices
```
var lcm = function () {
  function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};
```

