let angleMode = 'deg'; // Default to degrees

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function appendDot() {
    const display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function appendFunction(func) {
    const display = document.getElementById('display');
    if (['sin', 'cos', 'tan'].includes(func)) {
        if (angleMode === 'deg') {
            display.value = `${func}((${display.value}) * (Math.PI / 180))`;
        } else {
            display.value = `${func}(${display.value})`;
        }
    } else {
        display.value = `${func}(${display.value})`;
    }
}

function appendPower() {
    const display = document.getElementById('display');
    display.value += '**';
}

function appendConstant(constant) {
    const display = document.getElementById('display');
    display.value += constant;
}

function toggleAngleMode() {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    alert(`Angle mode switched to ${angleMode.toUpperCase()}`);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
