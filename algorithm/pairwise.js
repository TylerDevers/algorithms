function pairwise(arr, arg) {
    
    //store the elements/index values that pass the test here
    var elementResult = [], indexResult = [], counter; 
    
    //check for empty array and return 0 if it is empty.
    if (arr.length === 0){
        return 0;
    } else {
        //iterate over arr twice. Use break to return only the first values/lowest values found
        for (var i = 0; i < arr.length; i++){
            //2nd iteration allows each element to be compared to entire array
            //if test passes, push element/indices to results arrays used
            for (var y = 0; y < arr.length; y++) {
                // if index is the same, skip it, otherwise I am comparing a value to itself
                if (i != y) { 
                    var sum = arr[i] + arr[y];
                    //if sum of elements == arg, & indice of elements I and Y haven't been pushed 
                    //to indexResults,
                    if (sum == arg && indexResult.indexOf(i) == -1 && indexResult.indexOf(y) == -1) {
                        elementResult.push(arr[i], arr[y]); //push element values to array
                        indexResult.push(i, y); //push index values to array
                        //stop looking after the first match, else I will be reusing elements.
                        break; 
                    }
                }
            }
        }
    }
    //add the values of indexResult and store sum in counter
    counter = indexResult.reduce(function(a,b){
        return a+ b;
    });
    
    console.log('elementResult ', elementResult);
    console.log('indexResult ', indexResult);
    console.log('counter ', counter);
    return counter;
    
}

pairwise([1, 4, 2, 3, 0, 5], 7);

/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Run tests (ctrl + enter)
  Reset	  Help	  Bug

7

pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.
*/