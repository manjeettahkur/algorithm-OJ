## Instructions
Vampire Numbers

Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
    # 6 and 21 would be valid 'fangs' for a vampire number as the 
    # digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
    # 110 is not a vampire number since there are three 1's in the
    # multiplicands, but only two 1's in the product

Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

## 题目解析
所谓的“吸血鬼数字”， 就是两个乘数的每一位，正好都在结果数字中。且应该结果数字正好由乘数组成。

我的想法是:先用一个数组保存乘数的每一位，然后计算结果去用整则匹配每一位，如果没找到就返回false,全部找到就返回true.

几个返回true的条件：

- 结果位数和乘数位数之和一致
- 负号也算作包含的判断
- 结果包含所有乘数数字数字
- 乘数所有数字也都要在结果中


## Solutions
### 1-my answer

```
var vampire_test = function(a, b){
    var sa = String(a).replace('-','').split('');
    var sb = String(b).replace('-','').split('');
    var sab = sa.concat(sb);
    var sr = String(a*b).replace('-','').split('');

    if (sr.length != sa.length + sb.length) return false;
    if (a < 0 && b < 0) return false;

    return sr.every(function(ele,index,arr) {
        return sab.indexOf(ele) != -1;
    }) && sab.every(function(ele, index, arr) {
        return sr.indexOf(ele) != -1;
    });
}
```

### 2-Best Practices

```
function vampire_test(a, b){
  return sortStr(a + '' + b) == sortStr(a * b + '');
}

function sortStr(v){ return v.split('').sort().join('') }
```

尼玛，排个序确实有利于判断！！！！！

