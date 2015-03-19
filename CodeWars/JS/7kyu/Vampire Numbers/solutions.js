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