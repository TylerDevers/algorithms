function myReplace(str, before, after) {
  var newStr; //store final str
  var beforeArr = before.split(''); //before as array
  var afterArr = after.split(''); //after as array
  
  //check if first character of before is uppercase, if true capitalize after
  if (beforeArr[0] == beforeArr[0].toUpperCase()){
    afterArr[0] = afterArr[0].toUpperCase();
    console.log(afterArr[0]);
    after = afterArr.join('');
  } else {
    console.log("lower case confirmed");
  }
  
  newStr = str.replace(before, after);
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
