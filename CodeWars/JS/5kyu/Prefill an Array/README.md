## Instructions
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

- v can be anything (primitive or otherwise)
- if v is ommited, fill the array with undefined
- if n is 0, return an empty array
- if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError

When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples：

```
prefill(3,1) --> [1,1,1]

prefill(2,"abc") --> ['abc','abc']

prefill("1", 1) --> [1]

prefill(3, prefill(2,'2d'))
 --> [['2d','2d'],['2d','2d'],['2d','2d']]

prefill("xyz", 1)
 --> throws TypeError with message "xyz is invalid"
```

## 题目分析
创建一个函数，根据参数生成重复数组。但是要做一些校验功能。

第一个参数n，需要满足:
- 如果n为0,返回空数组
- 如果n是除了**整数**或者**字符串整数**以外其他格式，抛出一个TypeError错误，格式为`<n> is invalid`

第二个v参数，需要满足:
- 如果不传，以`undefined`填充
- v可以是任何形式

那么需要考虑的两点就是：
- 如何校验n是正整数
- 如果快速构建重复的数组

### 如何校验n是正整数
通过类型检查:
```
if (Object.prototype.toString.call(n).indexOf('Number') != -1 || Object.prototype.toString.call(n).indexOf('String') != -1) {
    if (!(n % 2 == 0 || n % 2 == 1) || n<0) {
        throw new TypeError(n+" is invalid");
    }
} else {
    throw new TypeError(n+" is invalid");
}
```

更好的办法我觉得是通过正则表达式，`/\D/g.test(n) || n < 0`

### 如何快速构建重复数组
使用循环遍历的话会超时，不如使用`Array.map`，并且构建数组通过`Array.apply(null, { length: n })` or `Array.apply(0,new Array(n))` or `Array(nn).join().split(',')`


## Solutions
### 1-My Answer
见solutions.js

### 2-Best Practices
```
if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
  return Array.apply(null, Array(+num)).map(function (d,i) { return value })
}
```

### 3-Clever
```
function prefill(n, v) {
  if (/\D/g.test(n) || n < 0) {throw new TypeError(n + ' is invalid')}
  return Array.apply(null, new Array(parseInt(n, 10))).map(function() {return v;});
}
```