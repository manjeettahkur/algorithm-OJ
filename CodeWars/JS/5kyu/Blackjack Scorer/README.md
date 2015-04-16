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



## Solutions
### 1-My Answer
