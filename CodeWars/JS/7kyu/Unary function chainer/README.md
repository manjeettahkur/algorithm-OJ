## Unary function chainer

## Description
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

`chained([a,b,c,d])(input)`

Should yield the same result as:

`d(c(b(a(input))))`


### 理解
传入一个函数数组，返回一个按照数组依次调用的函数。应该需要对数组进行map之类的操作。

## Solutions
### 1-简单粗暴版本

```
function chained(functions) {
  //FIXME
  return function(input) {
    for (var i = 0; i < functions.length; i++) {
        input = functions[i](input);
    }

    return input;
  }
}
```

### 2-Best Practices
```
function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}
```