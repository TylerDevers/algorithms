
function permAlone(str) {

  var permArr = []; //store new permutations as subarrays
  var result = 0;
  var arr = str.split("");
  var regex = /([a-z])\1+/;
  // call the generate function, store permutations in permArr 
  generate(arr.length, arr);
  
  //join the inner elements of permArr subarrays
  for (var subArr in permArr) {
      permArr[subArr] = permArr[subArr].join("");
  }
  
  //use regex and .test to look for repeating letters.
  console.log(regex.test("aa"));
  for (var el in permArr) {
      if(!regex.test(permArr[el])){
      result++;  
      }
  }
  
  //console.log(result);
  return result;
  
  function generate(n, arr) {
  /* create every permutation from the elements in the array
    using Heap's algorithm
    
    Heap's algorithm
    generate (n, arr)
        if n = 1
            output arr
        else
            for i = 0; i < n; i += 1
                generate (n - 1, arr)

                if n is even
                    swap(arr[i], arr[n - 1])
                else
                    swap(arr[0], arr[n - 1])
  */   
      //Generate the permutation for a given n (amount of elements) and a given array
      //If only 1 element, just output the array
      if (n == 1) {
          //console.log(arr);
          permArr.push(arr.slice(0));
          //return;
      }
      //use recursion and a counter to generate permutations.
      //number of recursions will equal the length of the string/arr
      for (var i = 0; i < n; i++) {
          generate(n - 1, arr);

          // If n is even
          if (n % 2 === 0) {
              swap(arr, i, n - 1);
          } else {
              swap(arr, 0, n - 1);
          }
      }
      
  }
  //helper function to swap arr elements
  function swap(arr, a, b) {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
  }
  
}

permAlone('aab');

