## Instructions
Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).

This function takes one parameter which is an array of strings that represent each card in the hand. Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"

It returns a number which is the score of the hand. Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.

Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Examples:

```
scoreHand(["A"]); //=> 11
scoreHand(["A", "J"]); //=> 21
scoreHand(["A", "10", "A"]); //=> 12
scoreHand(["5", "3", "7"]); //=> 15
scoreHand(["5", "4", "3", "2", "A", "K"]); //=> 25
```

## 题目分析
创建一个函数，输出手里牌组合出来最接近21的点数。

参数是一个数组，可选的值为"2",...,"10", "J", "Q", "K", "A"， 输出牌里组合起来最接近21的点数。花牌当中，J,Q,K当做点数10处理，A当做点数1或者11处理。

### 思路
优先将数字和除了A部分相加起来，因为这是固定的。最后再去加A,A优先以最小情况的加，如果是最后一个，需要搏一搏，所以先加大的情况看看，不行再加小的。。。

## Solutions
### 1-My Answer
见solutions.js

### 2-Best Practices
```
/**
 * @param cards An array of strings representing each card
 * @returns number Score of the hand
 */
function scoreHand(cards){
  var aces = 0;
  return cards.map(function(x){
        if(["J","Q","K"].indexOf(x) !== -1) return 10;
        else if (x === "A") {aces++; return 11;}
        else return Number(x);
    }).reduce(function(a,b){
        while(aces>0 && a+b>21) {
        b -= 10; aces--;
        }
        return a + b}
    );
}
```

### 3-Clever
```
function scoreHand(cards) {
  var aces = 0
    , score = cards.reduce(function (s, c) {
        if (c === 'A') { aces++; return s + 11 }
        return /\d/.test(c) ? s + parseInt(c) : s + 10
      }, 0)
  while (aces-- && score > 21) score -= 10
  return score
}
```

牛逼啊！