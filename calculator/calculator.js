let number1 = prompt('Введите первый операнд (число):');
let operator = prompt('Введите оператор: "+"; "-"; "*"; "/":');
let number2 = prompt('Введите второй операнд (число):');

function sum(value) {
    return 'Сложение: ' + value;
}

function subtraction(value) {
    return 'Вычетание: ' + value;
}

function multiplication(value) {
    return 'Умножение: ' + value;
}

function division(value) {
    return 'Деление: ' + value;
}

if (operator === '+') {
    const stringSum = sum(Number(number1) + Number(number2));
    console.log(stringSum);
}

if (operator === '-') {
    const stringSubtraction = subtraction(Number(number1) - Number(number2));
    console.log(stringSubtraction);
}

if (operator === '*') {
    const stringMultiplication = multiplication(Number(number1) * Number(number2));
    console.log(stringMultiplication);
}

if (operator === '/' && number2 !== '0') {
    const stringDivision = division(Number(number1) / Number(number2));
    console.log(stringDivision);
} else if (operator === '/' && number2 === '0') {
    console.log('Ошибка в вычислении');
}
