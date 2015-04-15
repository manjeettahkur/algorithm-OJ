function toCamelCase(str){
    var re = /[A-Za-z]+/g;
    var match;
    var arr = [];
    while (match = re.exec(str)) {
        arr.push(match[0]);
    }
    
    arr.forEach(function (ele, index) {
        if (index != 0) {
            arr[index] = ele[0].toUpperCase() + ele.substr(1);
        }
    });
    return arr.join('');
}