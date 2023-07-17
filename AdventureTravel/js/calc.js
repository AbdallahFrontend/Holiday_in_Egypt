const result = document.querySelector('.result');
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATORS = ['+', '-', '*', '/', '%'];

function insert(num) {
    result.value += num;
}

function clearField() {
    if (result.value.length === 0) return;
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    result.value = '';
}

function calculate() {
    if (result.value === '') return;
    const expression = result.value;
    if (!isValidExpression(expression)) {
        alert('Invalid expression!');
        return;
    }
    result.value = getResult(expression);
}

// الدالة التالية تقوم بالتحقق من صحة عمليات الرياضية بعد الإدخال
function isValidExpression(expression) {
    const lastInput = expression[expression.length - 1];
    if (OPERATORS.includes(lastInput)) {
        return false;
    }
    const arr = expression.split('').filter(char => char !== '.');
    if (isNaN(arr[arr.length - 1]) || isNaN(arr[0])) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0 && !OPERATORS.includes(arr[i])) {
            return false;
        }
    }
    return true;
}

// الدالة التالية تقوم بحساب النتيجة بعد التحقق من صحتها
function getResult(expression) {
    let i = 0;
    let n1 = 0;
    let n2 = 0;
    let operator = '';
    let result = 0;
    let lastOperator = '';
    while (i < expression.length) {
        if (NUMBERS.includes(expression[i])) {
            if (operator === '') {
                n1 = n1 * 10 + parseInt(expression[i]);
            } else {
                n2 = n2 * 10 + parseInt(expression[i]);
            }
        } else if (OPERATORS.includes(expression[i])) {
            if (i === 0 && expression[i] === '-') {
                n1 = 0;
                operator = '-';
                i++;
                continue;
            }
            if (operator !== '') {
                result = calculateExpression(n1, n2, operator);
                n1 = result;
                n2 = 0;
                operator = '';
            }
            operator = expression[i];
            lastOperator = operator;
        } else if (expression[i] === '.') {
            if (operator === '') {
                n1 += parseFloat(expression.slice(i));
                break;
            } else {
                n2 += parseFloat(expression.slice(i));
                break;
            }
        }
        i++;
    }
    if (operator !== '') {
        return calculateExpression(n1, n2, operator);
    }
    return n1;
}

// الدالة التالية تقوم بحساب العمليات الرياضية البسيطة بين رقمين
function calculateExpression(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return 0;
    }
}