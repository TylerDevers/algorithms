
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    //if arr1 contains arr2[item]
      //add arr1 quantity to arr2[item]
    // else push arr1 to arr2
    //return arr2
    
    //look at each inner array of the new Inventory
    arr2.forEach(function (newStock){
      var newStockItem = newStock[1]; //isolates the item name of the new inventory
      //look at each inner array of the old inventory
      arr1.forEach(function (oldStock) {
        //if the old inv includes the new item, add the new item count to the old item count
        if (oldStock.includes(newStockItem)){
          console.log(newStockItem + ' is here');
          oldStock[0] = oldStock[0] + newStock[0];
          console.log(oldStock);
        } else {
          
          console.log(newStockItem + ' is not here');
        }
      });
    });
    //console.log(arr1);
}

// Example inventory lists
var curInv = [
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

updateInventory(curInv, newInv);
