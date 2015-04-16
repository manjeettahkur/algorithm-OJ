/**
 * @param cards An array of strings representing each card
 * @returns number Score of the hand
 */
function scoreHand(cards) {
    var numbers = [],
        letters = [],
        result = 0;
    cards.forEach(function(ele, i) {
        if (ele >= 0 && ele <= 10) {
            numbers.push(ele);
        } else {
            letters.push(ele);
        }
    });
    number = numbers.sort();
    letters = letters.sort().reverse();

    numbers.forEach(function(ele, i) {
        result += ele - 0;
    });
    letters.forEach(function(ele, i) {
        if (ele === "J" || ele === "Q" || ele === "K") {
            result += 10;
        } else {
            if (i != letters.length - 1) {
                result += 1;
            } else {
                if (result + 11 <= 21) {
                    result += 11;
                } else {
                    result += 1;
                }
            }

        }
    });

    return result;
}
