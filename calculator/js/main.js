const number1 = Number(prompt('Введите первый операнд (число):'));
const operator = prompt('Введите оператор: "+"; "-"; "*"; "/":');
const number2 = Number(prompt('Введите второй операнд (число):'));

const result = calc(number1, operator, number2);
alert(result);
