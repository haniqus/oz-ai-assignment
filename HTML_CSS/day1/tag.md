# HTML 태그(Tag) 학습 정리 — Day 01

> **학습 주제:** Front-end 기초와 HTML 문서 구조, 주요 태그 및 속성(Attribute) 사용법  
> **학습 목표:** HTML 태그를 이용해 제목, 문단, 목록, 표, 이미지, 링크, 입력 폼을 구성하고 브라우저에서 확인하기

이번 수업에서는 HTML과 CSS의 기본 문법을 익히고, 이후 Bootstrap 등을 활용해 간단한 웹 화면을 만드는 데 필요한 HTML 기초를 공부했다. 특히 **태그(Tag)**로 웹 문서의 구조를 만들고, **속성(Attribute)**으로 각 요소의 동작과 표시 방식을 지정하는 방법을 실습했다.

---

## 1. HTML이란?

**HTML(HyperText Markup Language)**은 웹페이지의 **구조와 의미를 표현하는 마크업 언어**다. 브라우저는 서버에서 받은 HTML을 해석(Rendering)하여 사용자에게 웹페이지로 보여준다.

- **HyperText:** 다른 문서나 페이지로 연결되는 링크를 포함할 수 있는 텍스트
- **Markup:** 태그를 사용해 문서의 제목, 문단, 목록 등 구조를 표시하는 방식
- **Language:** 이러한 문서 구조를 작성하기 위한 규칙

웹페이지를 요청하고 보여주는 과정을 간단히 정리하면 다음과 같다.

1. 사용자가 브라우저에 웹페이지 주소를 입력한다.
2. 브라우저가 사용자를 대신해 서버에 **HTTP 요청**을 보낸다. 예를 들어 페이지를 조회할 때 `GET` 요청을 사용할 수 있다.
3. 서버가 HTML 문서 등을 **HTTP 응답(Response)**으로 보낸다. HTML은 응답의 **Body**에 포함될 수 있다.
4. 브라우저가 HTML을 해석하고 화면에 **렌더링(Rendering)**한다.

따라서 웹 브라우저의 중요한 역할은 **① HTTP 요청을 보내고 응답받기, ② 받은 HTML을 화면에 렌더링하기**라고 정리할 수 있다.

## 2. HTML 기본 구조와 태그의 관계

### 2-1. HTML 문서의 기본 형태

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello, HTML!
</body>
</html>
```

| 구성 요소 | 역할 |
| --- | --- |
| `<!DOCTYPE html>` | 이 문서가 HTML5 형식임을 브라우저에 알리는 선언 |
| `<html> ... </html>` | HTML 문서 전체를 감싸는 최상위 요소 |
| `lang="en"` | 문서의 주 언어가 영어임을 나타내는 속성. 한국어 문서라면 `lang="ko"` 사용 가능 |
| `<head> ... </head>` | 페이지 제목, 문자 인코딩, 화면 설정 등 문서의 부가 정보 |
| `<body> ... </body>` | 브라우저 화면에 실제로 표시되는 콘텐츠 |

일반적인 태그는 `<태그명>내용</태그명>`처럼 **여는 태그와 닫는 태그**가 한 쌍이다. 반면 `<meta>`, `<br>`, `<hr>`, `<img>`, `<input>`처럼 별도의 닫는 태그를 쓰지 않는 요소도 있다.

### 2-2. `head`, `meta`, `title` 이해하기

`<head>`에는 웹페이지에 대한 설정 및 설명 정보를 작성한다. 보통 `<head>` 안의 내용은 페이지 본문에 그대로 보이지 않는다.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
```

- **`<meta>`:** 브라우저 등에 웹페이지에 관한 정보를 전달하는 태그
- **`charset="UTF-8"`:** 한글, 영어, 특수문자 등을 올바르게 해석할 수 있도록 문자 인코딩 지정
- **`name="viewport"`:** 화면이 표시되는 영역(Viewport)의 설정을 지정
- **`width=device-width`:** Viewport 너비를 기기의 화면 너비에 맞춤
- **`initial-scale=1.0`:** 페이지를 처음 표시할 때 기본 확대 비율을 1배로 설정
- **`<title>`:** 브라우저 탭에 나타나는 문서 제목. 본문에 나타나는 제목과는 다름

### 2-3. 태그의 중첩 구조: 부모와 형제

HTML은 태그 안에 다른 태그를 넣을 수 있으며, 이를 **중첩(Nesting)**이라고 한다. 이러한 중첩으로 문서에 계층 구조가 만들어진다.

```html
<body>
    <h1>제목</h1>
    <p>내용</p>
</body>
```

- `<body>`는 `<h1>`과 `<p>`의 **부모(Parent)** 요소다.
- `<h1>`과 `<p>`는 같은 부모 아래 있으므로 서로 **형제(Sibling)** 요소다.
- `<h1>`과 `<p>`는 `<body>`의 **자식(Child)** 요소다.

HTML을 작성할 때는 태그를 올바른 순서로 열고 닫는 것이 중요하다.

## 3. VS Code에서 HTML 작성 및 미리보기

실습에서는 `base.html`, `paragraph.html`, `list.html`, `table.html`, `image.html`, `anchor.html`, `form.html` 등의 파일을 만들어 태그를 확인했다.

- HTML 파일에서 `!` 입력 후 **Enter 또는 Tab**을 누르면 Emmet 기능으로 기본 HTML 구조를 생성할 수 있다. (에디터 설정에 따라 작동 방식이 다를 수 있음)
- `html` 등을 입력하고 자동완성 제안을 선택하면 관련 태그 구조를 빠르게 작성할 수 있다.
- **Live Preview** 확장 프로그램을 이용하면 VS Code 안에서 HTML 코드를 작성하면서 웹페이지 결과를 확인할 수 있다.
- HTML 주석은 `<!-- 주석 내용 -->`처럼 작성한다. VS Code에서는 Mac 기준 **`Cmd + /`** 단축키로 주석을 적용하거나 해제할 수 있다.

```html
<!-- 이 부분은 화면에 표시하지 않는 설명용 주석 -->
<h1>HTML 실습</h1>
```

> 주의: HTML 주석은 `<!-- -->`을 사용한다. Python의 `#` 주석과는 문법이 다르다.

## 4. 문단과 줄바꿈: `<p>`, `<br>`

HTML 코드에서 단순히 Enter를 눌러 줄을 바꾸더라도 브라우저 화면에서는 일반적으로 줄바꿈이 그대로 반영되지 않는다. 따라서 의도에 맞는 태그를 사용해야 한다.

### 4-1. `<br>`: 같은 흐름에서 줄바꿈

```html
<body>
    Hello, HTML!<br>
    Hello, HTML!<br>
    Hello, HTML!
</body>
```

**화면 결과**

```text
Hello, HTML!
Hello, HTML!
Hello, HTML!
```

`<br>`은 **Line Break**를 의미하며, 줄바꿈을 넣는 태그다. 별도의 `</br>`은 필요하지 않다.

### 4-2. `<p>`: 독립된 문단 작성

```html
<body>
    <p>Hello, HTML!</p>
    <p>Hello, HTML!</p>
    <p>Hello, HTML!</p>
</body>
```

`<p>`는 **Paragraph(문단)**를 의미한다. 각 문장을 별도의 문단으로 구분하며, 브라우저 기본 스타일에 따라 문단 사이에 간격이 생긴다.

**차이점:** `<br>`은 단순 줄바꿈에 사용하고, 내용이 각각 독립된 문단이라면 `<p>`를 사용한다.

## 5. 제목과 구분선: `<h1>`~`<h6>`, `<hr>`

### 5-1. 제목 태그(Heading)

제목 태그는 `<h1>`부터 `<h6>`까지 있으며, 숫자가 작을수록 상위 수준의 제목을 의미한다.

```html
<body>
    <!-- heading -->
    <h1>One</h1>
    <p>Hello, HTML!</p>

    <!-- horizontal line -->
    <hr>

    <h2>Two</h2>
    <p>Hello, HTML!</p>

    <hr>

    <h3>Three</h3>
    <p>Hello, HTML!</p>
</body>
```

- `<h1>`: 가장 상위 수준의 제목
- `<h2>`: 그다음 수준의 제목
- `<h3>` ~ `<h6>`: 순서대로 더 하위 수준의 제목
- `<hr>`: 내용의 주제적 구분을 나타내는 가로 구분선

제목 태그는 단순히 글자 크기를 바꾸는 용도보다 **문서의 제목과 하위 제목 구조를 표현하는 목적**으로 사용하는 것이 적절하다.

## 6. 목록: `<ul>`, `<ol>`, `<li>`

목록을 작성할 때는 목록의 성격에 따라 순서 없는 목록과 순서 있는 목록을 구분한다.

### 6-1. `<ul>`: 순서 없는 목록

`ul`은 **Unordered List**, `li`는 **List Item**을 의미한다.

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
```

**화면 결과**

- Apple
- Banana
- Cherry

### 6-2. `<ol>`: 순서 있는 목록

`ol`은 **Ordered List**를 의미한다.

```html
<ol>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ol>
```

**화면 결과**

1. Apple
2. Banana
3. Cherry

### 6-3. 속성(Attribute)으로 목록 표시 방식 변경

태그의 시작 부분에 속성을 추가하면 요소의 특징이나 동작을 설정할 수 있다.

```html
<ol type="a">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ol>
```

위 코드는 기본 숫자 `1, 2, 3` 대신 **`a, b, c`** 형태로 항목을 표시한다.

> 정리: 태그는 요소의 **종류와 구조**를 나타내고, 속성은 요소의 **추가 설정**을 지정한다.

## 7. 표: `<table>`, `<tr>`, `<th>`, `<td>`

표(Table)는 데이터를 **행(Row)**과 **열(Column)**로 나누어 표현한다. 각 행과 열이 만나는 부분은 **셀(Cell)**이다.

| 태그 | 역할 |
| --- | --- |
| `<table>` | 표 전체를 감싸는 태그 |
| `<thead>` | 표의 헤더 영역 |
| `<tbody>` | 표의 본문 데이터 영역 |
| `<tr>` | 표의 한 행(Table Row) |
| `<th>` | 제목 역할을 하는 헤더 셀(Table Header) |
| `<td>` | 일반 데이터를 담는 셀(Table Data) |

### 7-1. 기본 표 작성 (`table.html`)

```html
<body>
    <!-- 테이블 -->
    <table>
        <!-- 테이블 헤더 -->
        <thead>
            <tr>
                <th>ID</th>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>

        <!-- 테이블 바디 -->
        <tbody>
            <tr>
                <td>1</td>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>2</td>
                <td>bob</td>
                <td>30</td>
            </tr>
            <tr>
                <td>3</td>
                <td>chris</td>
                <td>40</td>
            </tr>
        </tbody>
    </table>
</body>
```

**화면 결과에 해당하는 데이터**

| ID | 이름 | 나이 |
| --- | --- | --- |
| 1 | alex | 20 |
| 2 | bob | 30 |
| 3 | chris | 40 |

헤더와 데이터의 개수를 맞춰서 각 행의 셀을 작성해야 한다. 참고로 `<table>` 태그만 썼을 때는 브라우저 기본 스타일에 따라 표의 테두리가 보이지 않을 수 있다.

### 7-2. Table Header가 2행인 경우

한 개의 큰 제목 아래 여러 개의 세부 제목이 필요할 때는 **`rowspan`과 `colspan`**을 활용해 셀을 병합한다.

- `rowspan="2"`: 셀을 **세로로 2개 행**에 걸쳐 배치
- `colspan="2"`: 셀을 **가로로 2개 열**에 걸쳐 배치

```html
<table border="1">
    <thead>
        <tr>
            <th rowspan="2">이름</th>
            <th colspan="2">시험 점수</th>
        </tr>
        <tr>
            <th>중간고사</th>
            <th>기말고사</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>김철수</td>
            <td>85</td>
            <td>90</td>
        </tr>
        <tr>
            <td>이영희</td>
            <td>95</td>
            <td>88</td>
        </tr>
    </tbody>
</table>
```

여기서는 **`시험 점수`**가 중간고사와 기말고사를 묶는 상위 헤더다. 반면 **`이름`**은 두 헤더 행에 걸쳐 한 번만 표시된다. (`border="1"`은 테두리를 쉽게 확인하기 위한 실습용 설정이며 실제 스타일링은 CSS로 하는 것이 일반적이다.)

## 8. 이미지: `<img>`와 `src`, `alt`

이미지를 웹페이지에 표시하려면 `<img>` 태그를 사용한다.

```html
<body>
    <img src="./IMG_2067.JPG" alt="Mudo">
</body>
```

- **`src`(Source):** 이미지 파일의 경로 또는 주소를 지정
- **`./IMG_2067.JPG`:** 현재 HTML 파일이 있는 위치를 기준으로 찾는 이미지 경로
- **`alt`(Alternative Text):** 이미지가 표시되지 않을 때 대신 제공할 설명. 스크린 리더 등 접근성 측면에서도 중요

수업에서는 [Unsplash](https://unsplash.com/) 같은 이미지 사이트를 이용해 파일을 내려받고, HTML에서 이미지 경로를 지정하는 방법을 다뤘다.

예를 들어 HTML 파일과 이미지 파일이 같은 폴더라면 `src="./IMG_2067.JPG"`처럼 작성할 수 있다. 파일명이나 폴더 경로가 일치하지 않으면 이미지가 나타나지 않을 수 있다.

> 이번 과제의 `tag.md`에는 실제 이미지 파일을 삽입하지 않고, `<img>` 태그의 사용법만 코드로 정리했다.

## 9. 링크: `<a>`와 `href`

`<a>`는 다른 웹페이지나 문서로 이동할 수 있는 **하이퍼링크(Anchor)**를 만드는 태그다.

```html
<body>
    <a href="https://google.com">구글</a>로 이동
</body>
```

- **`href`(Hypertext Reference):** 클릭했을 때 이동할 주소를 지정하는 속성
- `<a>`와 `</a>` 사이의 텍스트: 사용자가 클릭할 수 있는 링크의 표시 내용

위 예제에서 **`구글`**이라는 글자를 클릭하면 Google 사이트로 이동한다.

새 탭에서 링크를 열고 싶을 때는 다음과 같이 작성할 수 있다.

```html
<a href="https://google.com" target="_blank" rel="noopener noreferrer">구글 새 탭에서 열기</a>
```

## 10. 입력 폼: `<form>`, `<input>`, `<button>`

`<form>`은 사용자가 입력한 데이터를 **제출(Submit)**하기 위한 HTML 요소다. 입력받은 데이터를 서버로 전송할 때 주로 사용한다.

### 10-1. `input`의 `type`에 따라 달라지는 입력 방식

```html
<input type="text" placeholder="일반 텍스트">
<input type="email" placeholder="이메일">
<input type="password" placeholder="비밀번호">
<input type="search" placeholder="검색어">
```

| `type` | 특징 |
| --- | --- |
| `text` | 일반 텍스트를 입력 |
| `email` | 이메일 형식 입력을 지원하며, 폼 제출 시 형식 검사에 사용될 수 있음 (`@` 등 확인) |
| `password` | 입력한 문자를 화면에서 가려서 표시 |
| `search` | 검색어 입력용. 브라우저에 따라 입력 내용을 지우는 `×` 버튼 제공 |

`placeholder`는 입력창에 아무것도 입력하지 않았을 때 보이는 **안내 문구**다.

### 10-2. Google 검색 폼 만들기 (`form.html`)

```html
<body>
    <!-- GET 요청의 Query Parameter: ?key=value, 예: ?q=python -->
    <form action="https://google.com/search">
        <input type="search" name="q" placeholder="검색어 입력">
        <button>입력</button><br>
    </form>
</body>
```

각 요소의 역할은 다음과 같다.

- **`<form>`:** 입력 요소를 묶고 데이터를 제출하는 영역
- **`action="https://google.com/search"`:** 폼을 제출할 목적지 URL
- **`<input>`:** 사용자가 값을 입력하는 요소
- **`type="search"`:** 검색어에 맞는 입력창 사용
- **`name="q"`:** 서버에 전달할 데이터의 **이름(Key)**을 `q`로 설정
- **`placeholder="검색어 입력"`:** 입력창에 안내 문구 표시
- **`<button>`:** 폼을 제출하는 버튼. `form` 내부의 기본 버튼은 일반적으로 제출 버튼으로 작동

### 10-3. GET 요청과 Query Parameter

수업에서 작성한 폼에는 `method` 속성이 없으므로 **기본적으로 GET 방식**으로 제출된다.

검색창에 `python`을 입력하고 제출하면 다음과 같은 주소 형태가 만들어진다.

```text
https://google.com/search?q=python
```

여기서 `?q=python`은 **Query String**이며, `q=python`은 **Query Parameter**의 한 쌍이다.

| URL 구성 | 의미 |
| --- | --- |
| `https://google.com/search` | 검색 요청을 보낼 주소 (`action`) |
| `?` | URL에서 Query String이 시작됨을 표시 |
| `q` | 입력 요소의 `name` 값, 즉 데이터의 이름(Key) |
| `=` | 이름과 값을 구분 |
| `python` | 사용자가 입력한 값(Value) |

즉, `name="q"`인 입력창에 `python`을 적었기 때문에 **`q=python`**으로 전달되는 것이다.

Query Parameter가 여러 개라면 일반적으로 `?key1=value1&key2=value2`처럼 `&`로 구분할 수 있다.

### 10-4. GET과 POST 구분

이번 수업에서는 주로 **GET 방식의 폼 제출**을 실습했고, 다음 수업에서 **POST 방식**을 다룰 예정이라고 필기했다.

- **GET:** 검색이나 조회처럼 데이터를 요청할 때 자주 사용하며, 폼 데이터가 일반적으로 URL의 Query String에 포함된다.
- **POST:** 서버에 데이터를 전달하여 등록·생성 등 처리를 요청할 때 자주 사용한다. 단, POST 자체가 항상 무언가를 생성한다는 뜻은 아니다.

> 이번 실습의 핵심은 사용자가 입력한 값이 `input`의 `name`을 통해 Query Parameter가 되고, 폼의 `action`에 지정한 주소로 전달된다는 점이다.

---

## 11. 오늘 배운 주요 태그 및 속성 요약

| 분류 | 태그/속성 | 핵심 역할 |
| --- | --- | --- |
| HTML 문서 | `<!DOCTYPE html>`, `<html>` | HTML 문서의 형식 및 전체 구조 |
| 설정 정보 | `<head>`, `<meta>`, `<title>` | 인코딩, 화면 설정, 탭 제목 |
| 본문 | `<body>` | 웹페이지에 표시할 콘텐츠 |
| 문단/줄바꿈 | `<p>`, `<br>` | 문단 작성, 줄바꿈 |
| 제목/구분 | `<h1>`~`<h6>`, `<hr>` | 제목의 계층 구조, 구분선 |
| 목록 | `<ul>`, `<ol>`, `<li>` | 순서 없는 목록, 순서 있는 목록, 목록 항목 |
| 표 | `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | 표의 영역, 행, 헤더 셀, 데이터 셀 |
| 표 병합 | `rowspan`, `colspan` | 세로/가로 셀 병합 |
| 이미지 | `<img>`, `src`, `alt` | 이미지 표시, 경로 지정, 대체 설명 |
| 링크 | `<a>`, `href` | 다른 페이지로 연결 |
| 입력 폼 | `<form>`, `<input>`, `<button>` | 사용자 입력과 제출 |
| 폼 속성 | `action`, `method`, `type`, `name`, `placeholder` | 제출 URL·방식, 입력 종류·이름·안내 문구 |
| 주석 | `<!-- -->` | 화면에 표시하지 않는 코드 설명 |

## 12. 학습 내용 정리

오늘 실습을 통해 HTML은 단순히 화면에 글자를 출력하는 것이 아니라 **태그의 중첩과 속성을 이용해 웹페이지의 구조와 의미를 표현하는 언어**라는 점을 이해했다.

특히 `<p>`와 `<br>`은 모두 줄을 나누어 보이게 할 수 있지만 **문단 구분과 단순 줄바꿈이라는 역할이 다르다**는 점을 확인했다. 또한 목록과 표를 만들 때는 `<ul>`, `<ol>`, `<table>`, `<tr>`, `<th>`, `<td>` 등 요소를 올바르게 조합해야 하며, 헤더가 여러 행으로 구성될 때는 `rowspan`, `colspan`을 활용할 수 있다는 것을 배웠다.

마지막으로 `<form>` 실습에서는 `action`이 제출할 주소를 지정하고, `<input name="q">`가 사용자가 입력한 검색어를 `?q=python`과 같은 **Query Parameter** 형태로 전달하는 과정을 이해했다. 앞으로 HTML 구조 위에 CSS를 적용하고 Bootstrap 등을 활용하면 더 완성도 있는 웹페이지를 만들 수 있을 것이다.
