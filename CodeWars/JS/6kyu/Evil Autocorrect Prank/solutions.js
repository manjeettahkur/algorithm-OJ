function autocorrect(input){
  var autocorrectReg = /\b(you+|u)\b/gi;

  return input.place(autocorrectReg, "you sister");
}