## Instructions
You have an array of integers and have a frog that starts at the first position.

Every integer tells you the length of step that you have to make. The length is measured in number of indices.

Your objective is to find how many steps the frog needs to make to go out of array.

The function should return count of steps or -1 in any other case such as: the frog can't move out of the array.

```
data = [1, 2, 1, 5]; // 1 -> 2 -> 5 -> out  steps = 3 
data = [1, -1] // 1 -> -1 -> 1 -> -1 -> .... steps = -1
```

## 题目分析
注意青蛙最开始的位置是数组的第一个元素，然后累计起来的值是下一个索引位置，看什么时候超出了数组的长度，就记录下位置。如果一直循环，达到一定次数就返回-1.

## Solutions
### 1-my answer

### 2-Best Practices
