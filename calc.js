let firstNumber = '';
let secondNumber = '';
let operation = '';
const operations = ['-', '+', 'X', '/'];

export function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

export function processKey(key) {
    if (key === 'ac') {
        clearAll();
        return;
    }
    
    if (!isNaN(key) || key === '.') {
        if (operation) {
            secondNumber += key;
        } else {
            firstNumber += key;
        }
    } else if (operations.includes(key)) {
        if (secondNumber) {
            performOperation();
            secondNumber = '';
        }
        operation = key;
    } else if (key === '=') {
        performOperation();
    }
}

function performOperation() {
    switch (operation) {
        case '+':
            firstNumber = String(Number(firstNumber) + Number(secondNumber));
            break;
        case '-':
            firstNumber = String(Number(firstNumber) - Number(secondNumber));
            break;
        case 'X':
            firstNumber = String(Number(firstNumber) * Number(secondNumber));
            break;
        case '/':
            if (Number(secondNumber) === 0) {
                firstNumber = 'Ошибка';
            } else {
                firstNumber = String(Number(firstNumber) / Number(secondNumber));
            }
            break;
        default:
            firstNumber = 'Ошибка';
    }

    operation = '';
    secondNumber = '';
}

export function getCurrentFirstNumber() {
    return firstNumber;
}

export function getCurrentSecondNumber() {
    return secondNumber;
}

export function getCurrentOperation() {
    return operation;
}
