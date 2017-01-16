
//uses forEach()

//checks if value is truthy, that is, when value is converted to boolean via 
//type coercion, does it evaluate to true or false.
function truthCheck(collection, pre) {
  // Is everyone being true?
  var result = true;
  //if any name: evaluates to false, change result to false.
  collection.forEach(function(name){
    if (!name[pre]){ //note that calling pre variable requires [] notation, dot will not work
      result = false;
    }
  });
  console.log(result);
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
