function telephoneCheck(str) {
  // Good luck!
  var result, regex;
  //checks for:
  //zero or 1 one, \s or not, (3numbs) or 3numbs, dash or space or neither, 3 numbs, dash or space or
  //neither, 4 numbs.  Note, this code did not work without the anchors ^ $
  regex = /^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/g;
  result = str.match(regex);
  if (result === null){
    return false;
  } else {
    return true;
  }

} 
telephoneCheck("555-555-5555");
