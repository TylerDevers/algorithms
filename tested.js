function pairwise(arr, arg) {
    var arrCpy = Array.from(arr); //copy arr to modify as needed.
    //console.log(arrCpy);
    var elementResult= [];//store the elements that pass the test here
    var indexResult = [];// store the index value of elements that pass test here.
    var counter; //use to add index values at end
    //iterate over arrCpy twice to make sure intial elements don't get left out
    for (var i = 0; i < arrCpy.length; i++){
        //2nd iteration allows each element to be compared to entire array
        //if test passes, push element to result, then delete elements that were used from arrCpy
        arrCpy.forEach(function(x){
            var set = [];
            var sum = arrCpy[i] + x; 
            if (sum == arg) {
                //set = [arrCpy[i], x];
                elementResult.push(arrCpy[i]);
                elementResult.push(x);
                delete arrCpy[i];
                delete arrCpy[arrCpy.indexOf(x)];
                //console.log(arrCpy);
            }
        });
    }
    indexResult = elementResult.map(function(x){
        //note: return index values if arr, since arrCpy has been modified.
        return arr.indexOf(x);
    });
    
    counter = indexResult.reduce(function(a, b){
       return a + b; 
    });
    
    
    console.log(arr, ' index : ' + indexResult,' element : ' + elementResult,'counter '+ counter);
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