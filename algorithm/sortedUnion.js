/*uses .from .map .includes */
//combines all aarguments into one array, then pushed unique values into result array.
function uniteUnique(arr) {
  var argArr = Array.from(arguments); //turns arr agruments into one array
  var result = [];//for storing answers after iterating over the argument array
  
  //using map to iterate over argArr elements instead of writing another foor loop...
  argArr.map(function(innerArray){
    //now iterate over the arrays within the argArr...
    for (var i = 0; i<innerArray.length; i++){
      if (!result.includes(innerArray[i])){ //if innerArray value  notin result array, push it
        result.push(innerArray[i]);
      }
    }    
  });
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
