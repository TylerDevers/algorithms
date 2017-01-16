
function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  counter = 0; //controls to do..while loop
  
  do {
    //apply modifies concat function
    arr = [].concat.apply([], arr);
    counter++;
  } while (counter<5);
  
  return arr;
  
}

steamrollArray([1, [2], [3, [[4]]]]);
/* I like this one better
 * function steamrollArray(arr) {
var newArray = [];
var flatten = function(arg) {
  if(!Array.isArray(arg)){
    newArray.push(arg);
  } else {
    for(var a in arg) {
      flatten(arg[a]);
    }
  }
};
*/
