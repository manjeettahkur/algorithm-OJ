## Unary function chainer

## Description
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

`chained([a,b,c,d])(input)`

Should yield the same result as:

`d(c(b(a(input))))`


### 理解
传入一个函数数组，返回一个按照数组依次调用的函数。感觉需要用到一点递归的思想。