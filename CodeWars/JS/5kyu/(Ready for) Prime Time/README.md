## Instructions
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

For example:

```
prime(11);
```

Should return an array that looks like this:

```
[2,3,5,7,11]
```


## 题目分析
素数，除了1和其自身，不发被其他数字整出的数（不包含1）。题目的意思就是给出一个最大素数，返回一个从0开始的素数列表。

使用的算法就是查找素数的素数筛选法，就是从1开始的、某一范围内的正整数从小到大顺序排列， 1不是素数，首先把它筛掉。剩下的数中选择最小的数是素数，然后去掉它的倍数。依次类推，直到筛子为空时结束。

## Solutions
### 1-My Answer
简单的一个函数判断是否是素数，另外循环遍历整个数组，依次判断，然后输出

### 2-Best Practices

```
// Generate an array containing every prime number between 0 and the num specified (inclusive)
function prime(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) {
    for (var j = 0; j <= primes.length; j++)
      if (i % primes[j] === 0) continue loop;
    primes.push(i);
  }
  return primes;
}
```

## 参考资料
- [维基百科: 素数](https://zh.wikipedia.org/wiki/%E7%B4%A0%E6%95%B0)
- [浅析求素数算法](http://www.cnblogs.com/luluping/archive/2010/03/03/1677552.html)