## Sum of (Two) Squares
We are asking for a function to take a positive integer value, and return a list of all positive integer pairs whose values - when squared- sum to the given integer.

For example, given the parameter 25, the function could return two pairs of 5,0 and 3,4 because 5^2 + 0^2 = 25 and 3^2 + 4^2 = 25.

We might express that in pseudo-code like this:

```
allSquaredPairs(25) == [[5,0],[3,4]];
```

Here are the requirements:
- The return value should be a two dimensional array of positive integer pairs in any order.
- A parameter value that is not the sum of any two squares should simply return an empty array
- We will consider 5,0 and 0,5 to be equal pairs, disregarding the order. Do not list the same pair twice.
- The upper bound of the parameter value will be 2,147,483,647

## 解读
此题输入项为一个整数，要求计算出可通过平方和得到次数的整数对。比如25, 可分解为: [[0,5], [3,4]]。

逻辑上需要简化循环的次数，减少计算量。

## 解题思路
先讨论出最大可利用的整数范围，`Math.sqrt(num/2)`。然后从0开始遍历，计算出剩余的数值，看是否是一个整数的平方。
