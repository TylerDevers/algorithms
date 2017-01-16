//uses shift(), while()

function dropElements(arr, func) {
  // Drop them elements.
  //constantly check the value of arr[0] against the function.
  //if arr[0] is not true, remove arr[0] and check again
  while (!func(arr[0])){
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
