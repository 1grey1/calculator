function calc() {
    const number1 = prompt('Введите первый операнд (число):');
    const operator = prompt('Введите оператор: "+"; "-"; "*"; "/":');
    const number2 = prompt('Введите второй операнд (число):');

    if (operator === '+') {
        const stringSum = Number(number1) + Number(number2);
        console.log('Ответ: ' + stringSum);
    }
    
    if (operator === '-') {
        const stringSubtraction = Number(number1) - Number(number2);
        console.log('Ответ: ' + stringSubtraction);
    }
    
    if (operator === '*') {
        const stringMultiplication = Number(number1) * Number(number2);
        console.log('Ответ: ' + stringMultiplication);
    }
    
    if (operator === '/' && number2 !== '0') {
        const stringDivision = Number(number1) / Number(number2);
        console.log('Ответ: ' + stringDivision);
    } else if (operator === '/' && number2 === '0') {
        console.log('Ошибка в вычислении');
    }
}

calc();
