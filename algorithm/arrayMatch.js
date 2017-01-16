function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var finalObj;  //for storing final objects
  var sourceKeys = Object.keys(source); // for accessing source key names
  
  //iterate over collection
  arr = collection.filter(function(element){  //filter will check every element within collection array
    for (var i = 0; i<sourceKeys.length; i++){
      //return false if not a match
      if (!element.hasOwnProperty(sourceKeys[i])){
        finalObj = false; //can't use return statement here, else loop will exit.
        console.log(finalObj);
        //return false;        
      } else if (element.hasOwnProperty(sourceKeys[i]) && element[sourceKeys[i]] == source[sourceKeys[i]] ){
        finalObj = true;
        console.log(finalObj);
        //return true;
      }
    } //the filter runs the loop, assigns boolean to finalObj. if true, object is kept 
    return finalObj;
  }); 
  //console.log(finalObj);
  //console.log(arr);
  // Only change code above this line

}

whatIsInAName([{ "a": 1, "b": 2 }, 
{ "a": 1 }, 
{ "a": 1, "b": 2, "c": 2 }], 
{ "a": 1, "c": 2 })
