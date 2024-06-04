const display = document.getElementById('display');

function button(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function trignometric_logaramitic(func) {
    if (display.value === '0') {
        display.value = func + '(';
    } else {
        display.value += func + '(';
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(replaceFunctions(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function replaceFunctions(value) {
    value = value.replace(/√/g, 'Math.sqrt');
    value = value.replace(/sin/g, 'Math.sin');
    value = value.replace(/cos/g, 'Math.cos');
    value = value.replace(/tan/g, 'Math.tan');
    value = value.replace(/log/g, 'Math.log10');
    return value;
}
