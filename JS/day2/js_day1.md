# Day 05. JavaScript — 기초 문법부터 함수까지

> 2026.11.25 | JavaScript 기본 문법 · Node.js · 변수 · 자료형 · 연산자 · 조건문 · 반복문 · 배열/객체 · 함수

## 1. JavaScript란?

JavaScript는 웹페이지에 동작을 추가하는 프로그래밍 언어다. HTML이 구조를 만들고, CSS가 화면을 꾸미고, JavaScript는 버튼 클릭이나 입력 처리, 화면 변경 같은 동작을 담당한다. JavaScript는 브라우저에서 실행할 수도 있고, **Node.js**를 이용해 브라우저 없이 터미널에서도 실행할 수 있다.

### JavaScript 실행 방법

**① 브라우저 개발자 도구(Console)**

브라우저에서 개발자 도구를 열고 Console에 코드를 입력하면 바로 실행 결과를 확인할 수 있다.

```javascript
console.log(1 + 2); // 3
```

**② HTML에 `<script>` 작성**

```html
<script>
    console.log("Hello");
</script>
```

**③ HTML과 JS 파일을 분리**

`js.html`에서 별도의 `app.js`를 연결하는 방식이다. HTML은 화면 구조, JS는 동작을 맡도록 파일을 분리할 수 있다.

```html
<body>
    <h1>Hello, JS</h1>
    <script src="./app.js"></script>
</body>
```

```javascript
// app.js
console.log("hello from app.js");
```

**④ Node.js로 실행**

터미널에서 해당 파일이 있는 폴더로 이동한 다음 실행한다.

```bash
node -v
node app.js
```

`node app.js`는 `app.js` 파일을 실행하는 명령어다. `MODULE_NOT_FOUND`가 발생하면 현재 폴더나 파일 이름부터 확인한다.

```bash
pwd  # 현재 폴더
ls   # 현재 폴더의 파일 목록
```

- **Node.js**: 브라우저 밖에서도 JavaScript를 실행할 수 있게 해주는 환경
- **npm**: Node.js에서 패키지를 관리하는 도구
- **`console.log()`**: 값을 터미널이나 브라우저 Console에 출력하는 기능
- `//`: 한 줄 주석. 코드 설명을 작성할 때 사용한다.

---

## 2. 변수(Variable)와 상수(Constant)

변수는 값을 저장해 두었다가 다시 사용할 수 있게 하는 이름이다. 변수를 사용할 때는 **선언**과 **할당**을 구분한다.

- **선언(Declaration)**: 변수를 사용할 이름을 정함
- **할당(Assignment)**: 변수에 값을 넣음
- **재할당(Reassignment)**: 기존 변수에 다른 값을 다시 넣음

```javascript
let age = 20;    // 선언과 할당
age = 30;        // 재할당
console.log(age); // 30
```

`let`은 변수를 **처음 선언할 때만** 붙인다. 이미 선언한 변수에 다른 값을 넣을 때는 변수명만 쓰면 된다.
### 선언만 먼저 하고 나중에 할당하기

```javascript
let username;
console.log(username); // undefined

username = "alex";
console.log(username); // alex
```

JavaScript에서는 값을 넣지 않은 채 변수부터 선언할 수 있다. 이때 변수의 값은 `undefined`다. Python도 변수명에 값을 할당해 사용한다는 점은 비슷하지만, Python에서는 `let` 같은 선언 키워드를 쓰지 않는다.

### `let`과 `const`

```javascript
let count = 1;
count = 2; // 가능

const pi = 3.141592;
// pi = 3.15; // 오류: const는 재할당 불가
```

| 키워드 | 특징 | 사용 상황 |
|---|---|---|
| `let` | 값 재할당 가능 | 값이 변해야 할 때 |
| `const` | 같은 변수에 다른 값을 재할당할 수 없음 | 값이 바뀌지 않아야 할 때 |

`const`는 재할당을 막는 것이지, 객체나 배열 내부의 모든 변경까지 막는 것은 아니다.

```javascript
const user = { age: 20 };
user.age = 21; // 가능
// user = { age: 22 }; // 재할당이므로 불가
```

**이름 짓기:** JavaScript 변수명은 보통 `userName`, `learningRate`처럼 camelCase를 쓴다. `LEARNING_RATE`처럼 대문자와 밑줄을 쓰면 보통 변하지 않는 설정값이라는 의미로 사용한다. 다만 대문자로 작성했다고 자동으로 값이 고정되는 것은 아니고 `const` 같은 선언 방식이 실제 재할당 여부를 결정한다.

### 머신러닝의 Parameter와 Hyperparameter

변수와 상수 개념을 머신러닝에 연결해서 보면 다음과 같다.

- **Parameter(파라미터)**: 학습을 통해 찾아내는 값. 대표적으로 Weight(가중치), Bias(편향)가 있다. 학습하면서 Loss가 작아지도록 조정된다.
- **Hyperparameter(하이퍼파라미터)**: 학습 방식이나 모델 구조를 정하는 설정값. Learning Rate, Epoch, Batch Size 등이 있다. 보통 한 번의 학습 설정 안에서 정해 두고, 실험할 때 바꿔 가며 비교한다.
---

## 3. 자료형(Data Type)

JavaScript는 값에 따라 자료형이 정해진다. `typeof`를 사용하면 어떤 자료형인지 확인할 수 있다.

| 자료형 | 의미 | 예시 |
|---|---|---|
| `number` | 숫자(정수와 실수 모두) | `10`, `3.14` |
| `string` | 문자열 | `"alex"`, `'hello'` |
| `boolean` | 참/거짓 | `true`, `false` |
| `null` | 비어 있음을 직접 표시한 값 | `null` |
| `undefined` | 아직 값이 정해지지 않은 상태 | `let score;` |

### 3-1. Number

Python은 `int`와 `float`로 나누지만, JavaScript에서는 일반적인 정수와 실수를 모두 `number`로 다룬다.

```javascript
let a = 10;
let b = 3.14;

console.log(a + b);    // 13.14
console.log(typeof a); // number
console.log(typeof b); // number
```

### 3-2. String

문자열은 큰따옴표 `" "`나 작은따옴표 `' '`로 감싼다.

```javascript
let username = "alex";
let message = 'hello';

console.log(username);        // alex
console.log(typeof username); // string
```

### 3-3. Boolean

조건이 참인지 거짓인지 나타내는 값이다.

```javascript
let isStudent = true;
let hasTicket = false;

console.log(isStudent);        // true
console.log(typeof hasTicket); // boolean
```

### 3-4. `null`과 `undefined`

```javascript
let selectedUser = null; // 일부러 비어 있다고 지정
let score;               // 값을 아직 할당하지 않음

console.log(selectedUser);        // null
console.log(score);               // undefined
console.log(typeof selectedUser); // object
console.log(typeof score);        // undefined
```

- `null`: 값을 비워 놓았다고 직접 표시한다. Python의 `None`과 비슷한 역할이다.
- `undefined`: 값을 할당하지 않은 변수를 읽거나, 값을 반환하지 않는 JavaScript 함수를 호출했을 때 볼 수 있다.
- `typeof null`이 `object`인 것은 JavaScript에 오래전부터 남아 있는 특징이다.

```javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

---

## 4. 연산자(Operator)

연산자는 값을 계산하거나 비교할 때 사용하는 기호다. 연산 결과는 다른 변수에 저장하거나 조건문에 바로 사용할 수 있다.

### 4-1. 산술 연산자

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (더하기)
console.log(a - b); // 7  (빼기)
console.log(a * b); // 30 (곱하기)
console.log(a / b); // 3.333... (나누기)
console.log(Math.floor(a / b)); // 3 (내림한 몫)
console.log(a % b); // 1 (나머지)
```

`Math.floor()`는 숫자를 아래쪽 정수로 내리는 함수다. 양수끼리 나눌 때는 몫을 구할 때 자주 활용할 수 있다. `%`는 나머지를 구하는 연산자다.

### 4-2. 비교 연산자

비교 연산자의 결과는 `true` 또는 `false`다.

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false
```

- **표현식(Expression)**: 평가했을 때 하나의 값이 나오는 코드. 예: `10 > 5`, `a + b`
- **구문(Statement)**: 프로그램의 동작을 구성하는 코드. 예: `if`문, `for`문

### 4-3. 동등 비교와 일치 비교

```javascript
console.log(10 == 10);    // true
console.log(10 != 10);    // false
console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(null === null); // true
```

| 연산자 | 의미 |
|---|---|
| `=` | 할당: 오른쪽 값을 왼쪽 변수에 넣음 |
| `==` | 필요하면 타입을 변환한 뒤 비교 |
| `===` | 타입을 자동 변환하지 않고 비교(기본 권장) |
| `!=` | 동등하지 않은지 비교 |
| `!==` | 타입 변환 없이 일치하지 않는지 비교 |

`console.log(a) = console.log(b)`처럼 `=`로 코드 두 개를 연결할 수는 없다. `=`는 같은 의미라는 표시가 아니라 할당 연산자다. 두 반환값이 같은지 확인하려면 `a === b`처럼 비교한다.

### 4-4. 논리 연산자

여러 조건을 하나의 조건으로 합칠 때 사용한다.

```javascript
let age = 20;
let hasId = true;

console.log(age >= 19 && hasId); // true
console.log(age < 20 || !hasId); // false
console.log(!hasId);             // false
```

- `&&`(AND): 조건이 둘 다 참이어야 참
- `||`(OR): 조건 중 하나라도 참이면 참
- `!`(NOT): 참/거짓을 반대로 바꿈

### 4-5. 문자열 연결(Concatenation)

문자열끼리 `+`를 사용하면 내용을 이어 붙인다.

```javascript
let firstName = "Alex";
let lastName = "Kim";

console.log(firstName + " " + lastName); // Alex Kim
console.log(10 + "20"); // "1020"
```

JavaScript에서는 `+`에 문자열이 포함되면 숫자가 문자열로 변환되어 연결될 수 있다. 그래서 계산인지 문자열 연결인지 확인해야 한다.

---

## 5. 조건문 `if / else if / else`

조건에 따라 다른 코드를 실행할 때 사용한다. 조건이 `true`인 첫 번째 분기를 실행하면 그 뒤의 `else if`, `else`는 넘어간다.

```javascript
let age = 15;

if (age <= 8) {
    console.log("어린이입니다.");
} else if (age <= 19) {
    console.log("학생입니다.");
} else {
    console.log("어른입니다.");
}
// 학생입니다.
```

### Truthy / Falsy

JavaScript는 조건문에 꼭 `true`, `false`만 넣는 것이 아니라 다른 값도 참/거짓처럼 판단할 수 있다.

**Falsy 값 6개:** `false`, `0`, `""`, `null`, `undefined`, `NaN`

그 외의 값은 대부분 Truthy로 판단한다. 예를 들어 `1`, `-1`, `"0"`, `" "`, 빈 배열 `[]`, 빈 객체 `{}`는 Truthy다.

```javascript
if (1) {
    console.log("실행됨");
}

if ("") {
    console.log("실행 안 됨");
}
```

### 실습: 최종 합격 판정

점수 70 이상, 출석률 80 이상, 과제 제출 완료면 합격이다. 다만 점수가 90 이상이면 출석률은 무시하고 합격할 수 있지만, 과제 제출은 필요하다.

```javascript
let score = 88;
let attendance = 75;
let submitted = true;

if (submitted && ((score >= 70 && attendance >= 80) || score >= 90)) {
    console.log("최종 합격");
} else {
    console.log("불합격");
}
// 불합격
```

---

## 6. 반복문 `for`와 `while`

같은 작업을 여러 번 처리할 때 사용한다. Python의 `for ... in range()`를 생각하면 이해하기 쉽다.
### 6-1. `for`문

```javascript
for (let x = 0; x < 10; x++) {
    console.log(x);
}
// 0부터 9까지 출력
```

기본 구조는 `for (초기값; 조건식; 증감식)`이다.

1. `let x = 0`으로 시작
2. `x < 10`이 참이면 내부 코드를 실행
3. `x++`로 1 증가
4. 다시 조건을 검사하고 반복
5. 조건이 거짓이 되면 종료

`x++`는 `x += 1`과 같은 의미로 1 증가시킨다. `x += 2`는 2씩 증가시킨다.

```javascript
// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1~20 중 짝수만 출력
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### 6-2. `while`문

조건이 참인 동안 계속 실행한다. 반복 횟수가 미리 정해져 있지 않을 때도 활용할 수 있다.

```javascript
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
// 0, 1, 2
```

`i++`처럼 조건을 언젠가 거짓으로 만드는 코드가 없으면 무한 반복될 수 있다. Node.js에서 출력할 때는 `print()`보다 `console.log()`를 사용한다.

---

## 7. 배열(Array)

배열은 여러 값을 **순서대로 묶어 두는 자료형**이다. Python의 `list`와 비슷하다. 배열의 위치는 `index`로 접근하며 **0부터 시작**한다.

```javascript
let numbers = [10, 20, 30, "hello", true];

console.log(numbers[0]);    // 10
console.log(numbers[1]);    // 20
console.log(numbers[2]);    // 30
console.log(numbers.at(-1)); // true (마지막 요소)
console.log(numbers[5]);    // undefined (범위 밖)
```

배열에는 서로 다른 자료형을 함께 넣을 수도 있다. 다만 같은 종류의 데이터를 모아 두면 이후에 다루기 편하다.

### 배열 반복하기

**① `for...of`: 값이 필요한 경우**

```javascript
let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
}
```

**② 일반 `for`: index가 필요한 경우**

```javascript
for (let i = 0; i < scores.length; i++) {
    console.log(i, scores[i]);
}
```

**③ `entries()`: index와 값을 함께 받을 때**

```javascript
for (const [i, score] of scores.entries()) {
    console.log(i, score);
}
```

**④ `forEach()`: 각 요소에 같은 작업을 할 때**

```javascript
scores.forEach(score => {
    console.log(score);
});
```

`forEach()` 안에서는 일반 반복문처럼 `break`나 `continue`로 반복을 제어할 수 없다. `=>`는 화살표 함수 문법이며, 이 부분은 함수를 더 공부할 때 연결해서 이해하면 된다.

### 실습: 배열 합계 구하기

```javascript
let values = [10, 20, 30, 40];
let sum = 0;

for (const value of values) {
    sum += value;
}

console.log(sum); // 100
```

---

## 8. 객체(Object)와 Map

배열이 **순서**로 값을 구분한다면, 객체는 각 값에 붙인 **이름(key)**으로 구분한다. Python의 `dict`와 비슷하다.

### 8-1. Object

```javascript
let alex = {
    name: "alex",
    age: 20
};

console.log(alex.name);    // alex
console.log(alex["name"]); // alex
console.log(alex["age"]);  // 20

alex["age"] += 1;
console.log(alex.age);     // 21
```

객체 내부에서는 `name: "alex"`처럼 **콜론 `:`으로 key와 값을 연결**하고, 속성 사이에는 쉼표 `,`를 사용한다. 일반 변수 할당의 `=`와 구분해야 한다.

```javascript
let user = {
    name: "Alex",
    age: 25,
    email: "alex@test.com"
};

for (const key in user) {
    console.log(key, user[key]);
}
```

`for...in`은 객체의 key를 순회할 때 사용한다.

### 8-2. Array vs. Object

| 자료형 | 구분하는 기준 | 주로 쓰는 상황 |
|---|---|---|
| Array | 위치(index) | 점수 목록, 상품 목록 |
| Object | 이름(key) | 한 사람의 이름·나이·이메일 |

**JSON(JavaScript Object Notation)**은 JavaScript 객체 표기법에서 나온 데이터 형식이다. 웹에서 데이터를 주고받을 때 자주 사용한다.

### 8-3. Map

Map도 key-value 형태로 데이터를 관리하지만 객체와는 별도의 자료구조다. 다양한 자료형을 key로 사용할 수 있다.

```javascript
const userMap = new Map();
userMap.set("name", "Alex");
userMap.set("age", 20);

console.log(userMap.get("name")); // Alex
console.log(userMap.size);        // 2

for (const [key, value] of userMap) {
    console.log(key, value);
}
```

---

## 9. 함수(Function)

함수는 반복해서 사용할 작업을 하나로 묶어 둔 코드다. 수학에서 입력에 따라 출력이 결정되는 함수를 떠올리면 이해하기 쉽다. 프로그래밍에서는 계산뿐 아니라 출력이나 다른 작업을 실행할 수도 있다.

기본 흐름은 **정의 → 호출 → 실행 → 종료(반환)**이다.
### 9-1. 함수 정의와 호출

```javascript
function add(n1, n2) {
    return n1 + n2;
}

let result = add(10, 30);
console.log(result); // 40
```

- `function`: 함수를 정의할 때 사용하는 키워드
- `add`: 함수 이름
- `n1`, `n2`: **매개변수(Parameter)**. 함수 안에서 사용할 입력 변수
- `10`, `30`: **인자(Argument)**. 함수를 호출할 때 실제로 전달한 값
- `return n1 + n2`: 계산 결과를 함수 밖으로 돌려주고 함수를 종료

함수는 정의했다고 바로 실행되는 것이 아니라, `add(10, 30)`처럼 **호출**해야 실행된다.

### 9-2. `console.log()`와 `return`의 차이

`console.log()`는 값을 **화면에 보여주는 것**이고, `return`은 값을 **함수 밖으로 전달하는 것**이다.

```javascript
function hello1() {
    console.log("Hello!");
}

let result1 = hello1(); // Hello! 출력
console.log(result1);   // undefined
```

`hello1()`을 실행하면서 `Hello!`가 화면에 출력된다. 하지만 함수에 `return`이 없기 때문에 `result1`에는 `undefined`가 저장된다. Python에서는 이런 상황의 반환값이 `None`이다.

```javascript
function hello2() {
    return "Hello!";
}

let result2 = hello2(); // 이 줄 자체는 출력 없음
console.log(result2);   // Hello!
```

여기서 `result2 = hello2()`는 먼저 `hello2()`를 실행한 다음, **반환된 값**을 `result2`에 저장한다. 변수에 값을 넣는 코드라도 오른쪽에 함수 호출이 있다면 함수는 실행된다.

| 함수 내부 | 호출 시 화면 출력 | 변수에 저장되는 반환값 |
|---|---|---|
| `console.log("Hello!")` | `Hello!` | `undefined` |
| `return "Hello!"` | 없음 | `"Hello!"` |
| `console.log("Hi!"); return "Hello!"` | `Hi!` | `"Hello!"` |

### 9-3. `return`을 만나면 함수가 종료됨

```javascript
function test() {
    console.log("A");
    return "B";
    console.log("C"); // 실행되지 않음
}

let result = test(); // A 출력
console.log(result); // B 출력
```

`return`은 값을 반환하는 동시에 함수 실행을 끝낸다. 뒤에 코드가 더 있어도 실행되지 않는다.
### 9-4. 함수를 변수에 저장하기: `add` vs. `add()`

이 부분은 **함수 자체를 전달하는 것**과 **함수를 실행해서 나온 값을 전달하는 것**의 차이다.

```javascript
function add(n1, n2) {
    return n1 + n2;
}

let result1 = add(10, 30); // 호출한 뒤 반환값 40 저장
let result2 = add;         // add 함수 자체를 저장

console.log(result1);       // 40
console.log(result2(10, 20)); // 30
console.log(add(10, 20));     // 30
```

| 코드 | 의미 |
|---|---|
| `add` | 함수 자체를 가리킴 |
| `add()` | 인자 없이 함수를 호출 |
| `add(10, 20)` | 인자를 전달해서 함수를 호출 |
| `let result = add` | 함수 자체를 result에 저장 |
| `let result = add(10, 20)` | 함수의 반환값을 result에 저장 |

`add()`를 인자 없이 호출하면 `n1`, `n2`가 `undefined`이므로 이 예제의 덧셈 결과는 `NaN`이다. 따라서 `let result = add();`는 함수를 저장하는 코드가 아니다.
반환값을 한 번 출력하고 다시 사용할 일이 없다면 다음처럼 바로 작성할 수도 있다.

```javascript
console.log(add(10, 30)); // 40
```

반대로 값을 이후 계산에 또 사용할 거라면 변수에 저장하면 된다.

```javascript
let result = add(10, 30);
console.log(result);
console.log(result + 10); // 50
```

### 9-5. 함수를 다른 함수에 전달하기

JavaScript에서는 함수를 하나의 값처럼 다룰 수 있어서, 다른 함수의 인자로 전달할 수도 있다.

```javascript
function sayHello() {
    console.log("hello");
}

function run(fn) {
    fn();
}

run(sayHello); // hello
```

`run(sayHello)`는 함수 자체를 전달하고, `run` 안의 `fn()`이 호출할 때 실제로 실행된다. `run(sayHello())`는 `sayHello()`를 **먼저 실행**해서 그 반환값을 전달한다. 이 예제에서는 반환값이 `undefined`라서 `fn()`을 호출할 수 없게 된다.

### 9-6. 함수 실습

**① 두 숫자의 합**

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(3, 7)); // 10
```

**② 점수에 따른 합격 여부**

```javascript
function checkPass(score) {
    if (score >= 60) {
        return "합격";
    } else {
        return "불합격";
    }
}

console.log(checkPass(75)); // 합격
console.log(checkPass(50)); // 불합격
```

**③ 점수 배열의 평균**

```javascript
function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

console.log(getAverage([80, 85, 92, 97])); // 88.5
```

배열을 함수의 인자로 받고, `for...of`로 값을 하나씩 더한 뒤, 합계를 배열 길이로 나눈다. 배열이 비어 있으면 0을 반환하도록 먼저 처리했다.

---

## 10. 오늘 배운 문법 연결하기

이번 내용은 각각 따로 쓰이기도 하지만 실제로는 함께 사용한다. 예를 들어 점수 목록을 배열로 저장하고, 반복문으로 평균을 구한 다음, 조건문으로 합격 여부를 판단할 수 있다.

```javascript
const scores = [80, 85, 92, 97];

function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

const average = getAverage(scores);
console.log("평균:", average); // 평균: 88.5

if (average >= 60) {
    console.log("합격");
} else {
    console.log("불합격");
}
```

위 예제에서는 `const`로 배열을 저장하고, 함수 안에서 `let sum`을 사용해 합계를 업데이트한다. `return`은 평균값을 함수 밖으로 전달하고, `if`문은 평균값에 따라 다른 메시지를 출력한다.

## 11. 핵심 정리

| 개념 | 기억할 내용 |
|---|---|
| `let` | 처음 변수 선언할 때 사용, 재할당 가능 |
| `const` | 재할당 불가 |
| `undefined` | 값이 아직 없거나 함수가 반환값을 지정하지 않은 상태 |
| `null` | 값이 비어 있음을 직접 지정 |
| `===` | 타입 변환 없이 비교할 때 기본으로 사용 |
| `&&`, `\|\|`, `!` | AND, OR, NOT |
| `for` | 시작값·조건식·증감식을 기준으로 반복 |
| `while` | 조건이 참인 동안 반복 |
| Array | index(0부터 시작)로 값에 접근 |
| Object | key를 이용해 값에 접근 |
| `function` | 재사용할 코드를 정의 |
| `console.log()` | 값을 출력 |
| `return` | 값을 반환하고 함수를 종료 |
| `add` / `add()` | 함수 자체 / 함수 실행 |

> **오늘의 핵심:** `=` 오른쪽을 먼저 평가한 뒤 그 결과를 왼쪽 변수에 저장한다. 함수 호출이 오른쪽에 있으면 함수가 먼저 실행되고, `console.log()`는 출력만 하며 `return`이 실제 반환값을 결정한다.

