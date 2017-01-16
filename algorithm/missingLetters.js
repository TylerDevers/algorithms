function fearNotLetter(str) {
  //check if letter is missing in order
  var strCharCode = str.charCodeAt(0);
  var result;    // used to store final value for iterations
  
  for (var i = 0; i<str.length; i++){ 
    //if the value matches, return undefined
    if (str.charCodeAt(i) == strCharCode){
      console.log("it is equal");
      console.log(str.charCodeAt(i), strCharCode);
      strCharCode++;
      result = undefined;
      //if the value does not match, return the number that is missing
    } else {
      console.log("it is not equal");
      result = String.fromCharCode(strCharCode);
    }
  }
  
  return result;
}

fearNotLetter("abce");
