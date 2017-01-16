
function checkCashRegister(price, cash, cid) {
  var change = cash - price; //calc change  
  var dollars = 0, cents = 0; //used to store pennies/decimal value  
  var drawer = 0; //stores the total vlaue of cid
  var returnChange = []; //array that will hold the returned change
  
  //store pennies seperate from dollars.
  if (change != Math.round(change)){
    cents = change - Math.floor(change);
    //round cents to two decimals
    cents = Math.round(cents*100)/100;
    dollars = Math.floor(change);
  }
  
  //find actual total value of drawer
  cid.forEach(function(element){
      drawer += element[1];    
  });
  drawer = (Math.round(drawer*100))/100;
  
  dollars = 173;
  //compare change to drawer value
  if (drawer < change) {
      return "insufficient funds";
  } else if (drawer == change) {
      return "Closed";
  } else {
      //return change in coin and bills, sorted in highest to lowest order
      console.log('find that change!');
      //if dollars is zero, skip all and compare cents to coins.
      //note that using true lets me use conditionals within the case!
      while (dollars > 0) {
        switch(true) {
          case (dollars/100 >= 1):
            console.log(' yes, Hundreds work');
            if (cid[8][1]
            dollars -= 100;
            console.log(dollars);
            break;
          case (dollars/50 >= 1):
            console.log('fifties work');
            dollars -= 50;
            break;
          case (dollars/20 >= 1):
            console.log('twenties work');
            if (dollars/20
            dollars -= 20;
            break;
          case (dollars/10 >= 1):
            console.log('tens work');
            dollars -= 10;
            break;
          case (dollars/5 >=1 ):
            console.log('fives work');
            dollars -= 5;
            break;
          case (dollars/1 >= 1):
            console.log('ones work');
            dollars -= 1;
            break;
          default:
            console.log('must be coins');
            break;
        } 
      }
      //if dollars is greater that twenties, us all twenties then go compare whats left to tens. etc
  }
  
  console.log(dollars);
    
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(18.15, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
/*
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
