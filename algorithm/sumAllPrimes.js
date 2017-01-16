//noprotect
//primeBelow pushes prime numbers <= val into arr array 
function primeBelow(val){
  var arr = []; //store prime numbers here
  //test all numbers between 2 and val for prime
  var notPrime;
  for (var numTest = 2; numTest <= val; numTest++){
    notPrime = false;
    //divide i by all numbers below i. 
    //If any division has zero remainder, its not prime.
    for (var i = 2; i<=numTest; i++){ 
      if (numTest%i === 0 && numTest != i){
        notPrime = true;
      }
    }
    //if the prime test is passed, push the value to arr
    if (notPrime === false) {
      arr.push(numTest);
    }
  }
  return arr;
}

//sumPrimes call the primeBelow function and sums all prime values below num
function sumPrimes(num){
  var sum = 0;
  var arrPrime = primeBelow(num);
  arrPrime.map(function(val){
      sum += val;
  });
  console.log(arr, sum);
  return sum;
}

sumPrimes(977);
