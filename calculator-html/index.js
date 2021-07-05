
const display = document.getElementById("screen");
let digits = "";
let currentNumber = [];
let result = 0;
let operator = 0;


function numbers(num) {
    if (digits.length < 15) {
        digits += num;
        toNumber();
        showNumber();
    }
}

function addComa() {
    if (digits.length < 15 && !digits.includes('.')) {
        digits += '.';
        toNumber();
        showNumber();
    }
}

function del() { 
    digits = digits.slice(0, digits.length - 1);
    toNumber();
    showNumber();
}

function equalTo() { 
    if (operator !== 0) {
        operar();
        currentNumber = result;
        showResult();
        operator = 0;

    } else {
        result = currentNumber;
        showResult();
    }
    digits = ""; 

}

function allClear() { 
    digits = "";
    showNumber();
    operator = 0;
    result = 0;
    currentNumber = 0;
}

function toNumber() { 
    if (digits !== "") {
        currentNumber = parseFloat(digits)
    } else {
        currentNumber = 0;
    }
}

function showNumber() { 
    display.textContent = digits;
}

function showResult() { 
    display.textContent = result;
}

function sum() { 
    if (operator === 0) { 
        operator = 1;
        result = currentNumber;
    } else { 
        operar();
        operator = 1;
    }
    digits = "";
    currentNumber = 0; 

function subtract() {
    if (operator === 0) { 
        operator = 2;
        result = currentNumber;
    } else { 
        operar();
        operator = 2;
    }
    digits = "";
    currentNumber = 0; 
}

function multiply() { 
    if (operator === 0) { 
        result = currentNumber;
    } else { 
        operar();
        operator = 3;
    }
    digits = "";
    currentNumber = 1; 

function divide() { 
    if (operator === 0) { 
        operator = 4;
        result = currentNumber;
    } else { 
        operar();
        operator = 4;
    }
    digits = "";
    currentNumber = 1; 
}

function operar() { 
    switch (operator) { 
        case 1:
            result += currentNumber;
            break;

        case 2: 
            result -= currentNumber;
            break;

        case 3: 
            result *= currentNumber;
            break;

        case 4: 
            result /= currentNumber;
            break;

        default:

            break;
    }
    showResult();
}