// 콘솔창 사칙연산 계산기
// 예시: 1+2*3 / 1 + 2 * 3 / 1+ 2 *3

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(expression) {
    let numbers = [];
    let operators = [];
    let number = "";

    // 1. 공백은 건너뛰고 숫자와 연산자를 분리
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (char === " ") {
            continue;
        }

        if (char === "+" || char === "-" || char === "*" || char === "/") {
            // 숫자가 없는 위치에 연산자가 오면 잘못된 계산식
            if (number === "") {
                return "잘못된 계산식입니다.";
            }
            if (isNaN(Number(number))) {
                return "잘못된 숫자입니다.";
            }
            numbers.push(Number(number));
            operators.push(char);
            number = "";
        } else {
            number += char;
        }
    }

    if (number === "" || isNaN(Number(number))) {
        return "잘못된 계산식입니다.";
    }
    numbers.push(Number(number));

    if (operators.length === 0) {
        return numbers[0];
    }

    // 2. 곱셈과 나눗셈 먼저 계산
    let i = 0;
    while (i < operators.length) {
        if (operators[i] === "*" || operators[i] === "/") {
            if (operators[i] === "/" && numbers[i + 1] === 0) {
                return "0으로 나눌 수 없습니다.";
            }

            if (operators[i] === "*") {
                numbers[i] = multiply(numbers[i], numbers[i + 1]);
            } else {
                numbers[i] = divide(numbers[i], numbers[i + 1]);
            }

            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
        } else {
            i++;
        }
    }

    // 3. 덧셈과 뺄셈 계산
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            result = add(result, numbers[i + 1]);
        } else {
            result = subtract(result, numbers[i + 1]);
        }
    }

    return result;
}

function start() {
    let expression = prompt("계산식을 입력하세요. (예: 1 + 2 * 3)");

    if (expression === null || expression.trim() === "") {
        alert("계산식을 입력해주세요.");
        return;
    }

    let result = calculate(expression);

    alert("결과: " + result);
}