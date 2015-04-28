function convertBits(a, b){
    var sa = a.toString(2).split('').reverse(),
        sb = b.toString(2).split('').reverse();
    
    var i =0, length = Math.max(sa.length, sb.length), result = 0;
    
    
    for (i = 0; i < length; i++) {
        if (sa[i] === undefined) sa[i] = 0;
        if (sb[i] === undefined) sb[i] = 0;
    }
    
    sa.reverse();
    sb.reverse();

    
    sa.map(function(ele, index) {
        if (sa[index] != sb[index]) result++;
    })
    return result;
}