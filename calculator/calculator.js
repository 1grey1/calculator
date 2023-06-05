const number1 = prompt('Введите первый операнд (число):');
const operator = prompt('Введите оператор: "+"; "-"; "*"; "/":');
const number2 = prompt('Введите второй операнд (число):');

function calc() {

    if (operator === '+') {
        const stringSum = Number(number1 + number2);
        return alert('Ответ: ' + stringSum);
    }
    
    if (operator === '-') {
        const stringSubtraction = Number(number1 - number2);
        return alert('Ответ: ' + stringSubtraction);
    }
    
    if (operator === '*') {
        const stringMultiplication = Number(number1 * number2);
        return alert('Ответ: ' + stringMultiplication);
    }
    
    if (operator === '/' && number2 !== '0') {
        const stringDivision = Number(number1 / number2);
        return alert('Ответ: ' + stringDivision);
    } else if (operator === '/' && number2 === '0') {
        return 'Ошибка в вычислении';
    }
}

calc();
