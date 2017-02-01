function calcDisplay(num) {
    calc.screen.value = calc.screen.value + num;
}

function crunchNumbers() {
    var result = eval(calc.screen.value);
    calc.screen.value = result;
}
