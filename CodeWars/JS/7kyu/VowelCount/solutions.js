function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for (var i = str.length; i--;) {
        if (isVowels(str.charAt(i))) vowelsCount++;
  }
  return vowelsCount;
}

function isVowels(char) {
    return 'aeiou'.indexOf(char) != -1? true: false;
}