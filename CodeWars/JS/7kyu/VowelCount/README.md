# Vowel Count

## Description
Return the number(count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this kata.

找出给定字符串中的元音字母个数。

## Solutions
我最开始想到的是获取字符串中的每个字符，进行对比判断。后面也想到了要利用正则表达式。

## Answer
### 1
```
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

### 2
```
 for (var n = 0, i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) n++
  }
  
  return n
}
```