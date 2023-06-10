let reset = confirm('Начать решение?');

while (reset != false) {
    const number1 = Number(prompt('Введите первый операнд (число):'));
    const operator = prompt('Введите оператор: "+"; "-"; "*"; "/":');
    const number2 = Number(prompt('Введите второй операнд (число):'));
    
    const result = calc(number1, operator, number2);
    alert('Ответ: ' + result);

    reset = confirm('Хотите ли повторить действие?');
}
