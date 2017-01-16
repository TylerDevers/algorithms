
function findElement(arr, func) {
  var result; //holds final value
  
  //iterate over arr and apply func to each value. return the first value
  //then break the loop
  for (var i =0; i<arr.length; i++){
    if (func(arr[i])){
      result = arr[i];
      break;
    }
  }
  return result;

}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
