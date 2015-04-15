## Instructions
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

```
// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
```

## 题目分析
完善函数，完成将输入的字符串转换为驼峰形式字符串输出。

思路上面，我是想通过正则匹配，确定好分组，然后对每个分组的首字母进行大写处理，最后拼接输出。这里就有两个点需要克服:

1. 如何通过正则获取到分组
2. 如何对每个分组首字母大写

### 获取分组
先确定好正则表达式，通常正则表达式对象的`exec`方法，配合while循环，获取匹配项。

### 首字母大写
对于数组的遍历，尽量使用`forEach`这样的语法，修改原数组的内容，还是通过index索引匹配。

## solutions
### 1-My Answer
见答案

### 2-Best Practices
```
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
```

```
function toCamelCase(str) {
  return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
}
```


### 3-Clever
```
function toCamelCase(str){
  return str.split(/[-_]/).reduce(function(s, word){
    return s+word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
  });
}
```

```
function toCamelCase(str){
  return str.split(/[_-]/).map(function(v,i){ return i==0?v:v.charAt(0).toUpperCase()+v.slice(1) }).join('');
}
```