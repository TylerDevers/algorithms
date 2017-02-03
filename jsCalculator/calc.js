
function calculatorDisplay(num) {
    //calculator.screen.value = calculator.screen.value + num;
    var answer = document.getElementById('display').value;
    answer = answer += num;
}

function crunchNumbers() {
    var result = eval(calculator.screen.value);
    calculator.screen.value = result;
}
