function addTogether() {
  //declare variables and check if numbers
  var x = checkIfNumber(arguments[0]), y = checkIfNumber(arguments[1]);
  
  //function that checks argument for the number type
  function checkIfNumber(val) {
    if (typeof val === 'number') {
      return val;
    } else
      return undefined;
  }
  
  //function that adds two values together
  function sum(a,b){
    console.log(a+b);
    return a+b;
  }
  
  //if there are two arguments that are not undefined, sum them and return them
  if (arguments.length == 2) {
    if (x === undefined || y === undefined) {
      return undefined;
    } else {
      return sum(x,y);
    }
  //if only one argument, take nextStep to incorporate next 'needed' arg.
  } else {
    if (x) {
      var nextStep = function(newArgument) {
        if (checkIfNumber(newArgument) === undefined) {
          return undefined;
        } else {
          return sum(x, newArgument);
        }
      };
      //call the nextStep to evaluate the arguments
      return nextStep;
    }
  }
}
addTogether(2,3);
