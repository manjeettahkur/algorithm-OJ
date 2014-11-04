# uniquePush - No Dupes!

## Description
Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.


## Solutions
题意是参数为一个arr和obj，判断obj的合法性以及是否唯一，如果合法且唯一，则追加到arr中。

这一题我是直接forEach遍历，但是更好的解法如下：

### Anwser 1
```
function uniquePush(arr, obj) {
  if (obj.phoneNumber && !arr.some(function (entry) { return entry.phoneNumber == obj.phoneNumber })) 
    return arr.push(obj);
}
```

### Anwser 2
```
//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
  return !obj.phoneNumber || arr.some(function(e) {
    return e.phoneNumber == obj.phoneNumber;
  }) ? false : (arr.push(obj), arr);
}
```