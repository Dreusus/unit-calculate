let firstNumber = '';  // первое число
let secondNumber = ''; // второе число
let operation = '';    // операция
let isOperationFinished = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['-', '+', 'X', '/'];

const display = document.querySelector('.calc-screen p');

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    isOperationFinished = false;
    display.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    const key = event.target.textContent;

    if (digits.includes(key)) {
        if (key === '.' && (firstNumber.includes('.') || secondNumber.includes('.'))) {
            return;
        }

        if (isOperationFinished) {
            clearAll();
        }

        if (!operation) {
            firstNumber += key;
            display.textContent = firstNumber;
        } else {
            secondNumber += key;
            display.textContent = secondNumber;
        }

        return;
    }

    if (operations.includes(key)) {
        if (firstNumber && secondNumber) {
            // автоматически производим расчет
            calculate();
            secondNumber = '';
            firstNumber = display.textContent;
        }
        operation = key;
        return;
    }

    if (key === '=') {
        calculate();
        isOperationFinished = true;
    }
};

function calculate() {
    let result;

    switch (operation) {
        case "+":
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case "-":
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case "X":
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case "/":
            if (secondNumber === '0') {
                display.textContent = 'Ошибка';
                clearAll();
                return;
            }
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }

    display.textContent = result.toString();
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}
