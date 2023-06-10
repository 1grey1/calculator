const calc = (number1, operator, number2) => {
    number1 = Number(number1);
    number2 = Number(number2);
    let result;

    switch (operator) {
        case ADDITION_OPERATOR:
            result = number1 + number2;
            break;
        case SUBTRACTION_OPERATOR:
            result = number1 - number2;
            break;
        case MULTIPLICATION_OPERATOR:
            result = number1 * number2;
            break;
        case DEVISION_OPERATOR:
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = 'Делить на ноль нельзя'
            }
            break;
        default:
            result = 'Оператора не существует';
            break;
    }

    return result;
}
