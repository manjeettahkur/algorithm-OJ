## Descriptions
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parenthese!

## 问题描述
给定一个字符数组，按照电话号码的规则进行拼接。使用正则进行匹配，用匹配出的分组进行替换。

## Solutions
### 1-my answer

```

```

### 2-Best Practices

```
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}
```