var fibArr = [0,1]; //will hold all values of array

//fibLoop fills the fibArr
function fibLoop(x){
  for (var n =2; n<=x; n++){
    fibArr[n] = fibArr[n-1] + fibArr[n-2];
  }
}

function sumFibs(num) {
  var sum = 0; //will hold the final value
  fibLoop(num); //call fibLoop to fill fibArr
  fibArr.map(function(val){
    if (val%2 !== 0 && val <= num){ // adds only odd values
      sum += val;
    }
  });
  return sum;
}

sumFibs(4);

//////////////////////test example/////////////////////////////////
// will find the fibonacci number at the x position
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 - fib sequence
var fibLoop = function(x){
	//declare/initialize variables for equation. 
	var a = 0, b = 1, f = 1;
	//now loop, where f = a+b, then increase a + b
	// loop starts at 2, since 1st and 2nd fib values are 0 1 from above
	// i = 2 is actually third value due to zero indexing of the loop
	for (var i = 2; i<=x; i++){  
		f = a +b; //f is the sum of two values before it
		a = b; // a takes the value of b
		b = f; // b takes the value of a
	}
    console.log(f);
	return f;
}

fibLoop(4);

// needs work below
//using recursion, which calls itself
var fibRecursive = function(n) {
	if (n<=2) {
		return 1;
	} else {
		//
		return this.fibRecursive(n-1) + fibRecursive(n-2);
	}
}
