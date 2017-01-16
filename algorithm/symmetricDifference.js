//uses Array.from, forEach, includes, push, reduce
//I have created the symmetricDiff function within the sym function. 
//symDif takes the symmetrical difference of two arrays, and pushes it to a result var.
//symDif is then used as a callback function for the reduce method, to work over many arrays
function sym(args) {
  //turn args into an array of the arguments
  var arr = Array.from(arguments);
  
  //make a function that will find symmetric diff of two arrays
  function symmetricDiff(a,b){ // takes array A and array B as arguments
    var result = []; // holds the values that are symmetrically diff
    //iterate over a, if a's values are not in b, or in result. push to result.
    a.forEach(function(val){
      if (!b.includes(val) && !result.includes(val)){
        result.push(val);
      }
    });
    //iterate over b, if b's values are not in A or in result, push val to result.
    b.forEach(function(val){
      if (!a.includes(val) && !result.includes(val)){
        result.push(val);
      }
    });
    return result;
  }
  //apply symmetricDiff to multiple arrays by calling it as the callback function for arr.reduce()
  return arr.reduce(symmetricDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
