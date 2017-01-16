
function updateInventory(oldInv, newInv) {
  //add new array to update the inventory.
  var finalInv = [];
  //interate over both arrays checking if they match, if they do, add
  //qty together, and push to finalInv
  /* sudo code
   * oldInv.forEach(item) {
   *  newInv.forEach (item) {
   *    if (old(item) == new(item) {
   *      old(qty) = old(qty) + new(qty)
   *      finalInv.push(old(qty, item)
   *      remove old(item) and new(item)
   *    }
   *  }
   * }  
   * finalInv.concat(oldInv and newInv)
   * finalInv.sort(alphabetically)
   */ 
  for (var i = 0; i < oldInv.length; i++){ //itereate over oldInv
    for (var x = 0; x < newInv.length; x++) {//iterate over newInv
      var oldItem = oldInv[i]; //sets subArray to clear names
      var newItem = newInv[x];
      //compare new items to old items. If they are the same, add their
      //qty together and push to finalInv. Then delete like items from 
      //both oldInv and newInv.
      if (oldItem[1] == newItem[1]) {
        //console.log(oldItem);
        oldItem[0] = oldItem[0] + newItem[0]; //adds items together
        finalInv.push(oldItem); //push like items
        oldInv.splice(i,1); //delete like items.
        newInv.splice(x,1);
      };
    };
  };
  finalInv = finalInv.concat(oldInv);
  finalInv = finalInv.concat(newInv);
  
  //now sort alphabetically
  finalInv.sort(function(item1, item2){
      item1 = item1[1]; //sets arguments to second element (name)
      item2 = item2[1];
      if (item1 < item2) { //compares unicode values of string names
          return -1;
      } else if (item1 > item2) {
          return 1;
      }
      
      return 0; 
  });

  console.log(finalInv);
}

// Example inventory lists
var oldInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(oldInv, newInv);

