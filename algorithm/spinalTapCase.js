//uses includes, replace, split, join  --  regex example at bottom
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //first replace all spaces with dashes
  while (str.includes(" ")){
    str = str.replace(" ", "-");
  }
  
  //next replace all underscores
  while (str.includes("_")){
    str = str.replace("_", "-");
  }
  
  //now change to array and check for uppercase, if uppercase exists and character before it is 
  //not a dash, put a dash in front of it.
  var arr = str.split("");
  for (var i = 1; i<arr.length; i++){
    if (arr[i] == arr[i].toUpperCase() && arr[i] != " "  && arr[i] != "-" && (arr[i-1] != " ") && arr[i-1]!= "-"){
      arr[i] = arr[i].replace(arr[i], "-" + arr[i]);
    }
  }
  str = arr.join("");
  str = str.toLowerCase();
  
  return str;
}

spinalCase('This Is Spinal Tap');

//////////////////////regex/////////////////////////////////
//using regex
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');
