## Description
Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

    Assume: 0 <= n < 1000000000

           1  ->           "1"
          10  ->          "10"
         100  ->         "100"
        1000  ->       "1,000"
       10000  ->      "10,000"
      100000  ->     "100,000"
     1000000  ->   "1,000,000"
    35235235  ->  "35,235,235"

## 解题思路


## Solutions
### 1-my answer
```
function groupByCommas(n) {
  return String(n).split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("");
}
```
### 2-Best Practices
```
function groupByCommas(n) {
  return String(n).replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g,',$1');
} 
```