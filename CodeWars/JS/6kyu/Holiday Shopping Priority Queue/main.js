/*
 var giftList = new HolidayPriorityQueue();
 var length;

 Test.assertEquals(giftList.buyGift(), '');

 length = giftList.addGift( { gift: 'Water gun', priority: 1 } );
 Test.assertEquals(length, 1, 'Incorrect queue length');
 Test.assertEquals(giftList.buyGift(), 'Water gun');
 */

/*
 思考用什么保存对象，并且快速索引到。用数组的话，下标索引最快
 保存对象的应该是一个数组
 add的时候，根据priority每次插入元素的时候，进行一次排序
 buy的时候，直接pop出最后一个数组
 整个对象的长度就是数组的length
 */
function HolidayPriorityQueue(){
  //Priority queue Constructor
  this.giftArray = [];
}

HolidayPriorityQueue.prototype.addGift = function(gift){
  //Insert gift into priority queue and return new length
    var priority = gift.priority;
    var giftArrayLength = this.giftArray.length;

    if (giftArrayLength == 0) {
        this.giftArray.push(gift);
    } else {
        for (var i = giftArrayLength; i--;) {
            var tmpPriority = this.giftArray[i].priority;
            if (i == giftArrayLength-1 && priority < tmpPriority) {
              this.giftArray.push(gift);
              this.giftArray.reverse();
            }
            if (priority > tmpPriority) {
                if ( i == giftArrayLength-1) {
                    this.giftArray.push(gift);
                } else {
                  if (priority == this.giftArray[i+1].priority) break;
                   var rightArray = this.giftArray.splice(i+1);
                   this.giftArray[this.giftArray.length++] = gift;
                   for (var j = 0; j < rightArray.length; j++) {
                       this.giftArray[this.giftArray.length++] = rightArray[j];
                   }
                }
                break;
            }
        }
    }
    
    return this.giftArray.length;
}

HolidayPriorityQueue.prototype.buyGift = function(){
  //Return gift with highest priority (lowest integer value)
  var giftArrayLength = this.giftArray.length;
  if (giftArrayLength == 0) {
    return '';
  }
  this.giftArray.reverse();
  var result = this.giftArray.pop();
  this.giftArray.reverse();
  return result.gift;
}

var giftList = new HolidayPriorityQueue();
/*
giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3

console.log("giftList:", giftList);

console.log(giftList.buyGift()); // => returns 'Water gun'
console.log(giftList.buyGift()); // => returns 'Roller Skates'
console.log(giftList.buyGift()); // => returns 'Toy truck'
 */
