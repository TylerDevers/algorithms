function translatePigLatin(str) {
  var vowel = "AEIOUaeiou";
  var strArr = str.split('');
  
  // if first character of str is a vowel add 'way'
  if (vowel.match(strArr[0])){
    str = str+"way";
  //  if first two letters are consonants, move them to end and add 'ay'
  } else if (!vowel.match(strArr[0]) && !vowel.match(strArr[1])){
      strArr.push(strArr[0]);
      strArr.shift();
      strArr.push(strArr[0]);
      strArr.shift();
      str = strArr.join('')+"ay";
  // if only the first letter is a consonant, move it to the end and add 'ay'  
  } else if (!vowel.match(strArr[0])) {
      strArr.push(strArr[0]);
      strArr.shift();
      str = strArr.join('')+"ay";
    
  }
  return str;
}
translatePigLatin("consonant");
