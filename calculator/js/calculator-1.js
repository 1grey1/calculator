const calc = (number1, operator, number2) => {
    number1 = Number(number1);
    number2 = Number(number2);
    let result;

    if (operator === ADDITION_OPERATOR) {
        result = number1 + number2;

    } else if (operator === SUBTRACTION_OPERATOR) {
        result = number1 - number2;

    } else if (operator === MULTIPLICATION_OPERATOR) {
        result = number1 * number2;

    } else if (operator === DEVISION_OPERATOR) {
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            result = 'Делить на ноль нельзя';
        }

    } else {
        result = 'Оператора не существует';
    }

    return result;
}
