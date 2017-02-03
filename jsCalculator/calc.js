//displays values after button click
function calc(num) {
    calculator.screen.value += num;
    console.log("I'm working");
}

//evaluates whatever is on the display
function crunchNumbers() {
    result = eval(calculator.screen.value);
    calculator.screen.value = result;
    
}


