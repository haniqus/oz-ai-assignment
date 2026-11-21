# CSS

## 1. CSS 기본 개념

### CSS(Cascading Style Sheets)

- **정의:** HTML 요소의 모양과 배치를 지정하는 스타일 언어
- **HTML:** 페이지의 구조와 의미를 구성
- **CSS:** 색상, 크기, 정렬, 여백, 위치 등 디자인 담당

| 구분 | 주요 내용 | 예시 |
| --- | --- | --- |
| 글자 | 색상, 크기, 굵기, 글꼴 | `color`, `font-size`, `font-weight`, `font-family` |
| 공간 | 내부·외부 여백, 테두리 | `padding`, `margin`, `border` |
| 배치 | 정렬, 표시 방식 | `text-align`, `display` |
| 레이아웃 | 요소들의 배치 구조 | Flex, Grid |
| 반응형 디자인 | 화면 크기에 따라 레이아웃 변경 | Responsive design |

### Cascading / Inheritance / Overriding

- **Cascading(캐스케이딩):** 여러 CSS 규칙이 겹칠 때 최종 적용할 스타일을 결정하는 과정
- **Inheritance(상속):** 부모 요소에 지정한 일부 속성이 자식 요소에 전달되는 것
- **Overriding(덮어쓰기):** 기존 스타일보다 우선하는 선언으로 값을 다시 지정하는 것

```html
<div style="color: blue;">
    <p>파란색 글자</p>
    <p style="color: red;">빨간색 글자</p>
</div>
```

- 부모 `<div>`의 `color: blue` → 첫 번째 `<p>`에 **상속**
- 두 번째 `<p>`의 `color: red` → 부모에게 상속받을 색상보다 **직접 지정한 빨간색** 우선
- `color`, `font-family` 등은 주로 상속되는 속성
- `margin`, `padding`, `border` 등은 일반적으로 상속되지 않음

> **구분:** Cascading은 스타일 충돌을 해결하는 전체 규칙, Inheritance는 부모의 속성값이 자식에게 전달되는 현상.

---

## 2. CSS 기본 문법과 작성 방식

### 기본 구조

```css
selector {
    property: value;
    property: value;
}
```

| 구성 | 의미 | 예시 |
| --- | --- | --- |
| Selector(선택자) | 스타일을 적용할 HTML 요소 지정 | `header`, `.red`, `#contents` |
| Property(속성) | 변경할 디자인 항목 | `font-size` |
| Value(값) | 속성에 지정할 값 | `x-large` |
| `:` | 속성과 값 구분 | `color: red` |
| `;` | 선언 구분 | `color: red;` |

```css
header {
    font-size: x-large;
    font-weight: bold;
}
```

- `header` 태그의 글자 크기 확대 + 굵게 표시
- CSS 주석: `/* 주석 내용 */`
- CSS에서 `//`는 일반적인 주석 문법이 아님

### ① Inline CSS

- HTML 시작 태그의 `style` 속성에 직접 CSS 작성
- 특정 요소 하나를 꾸미기에는 편리하지만, 반복되는 스타일을 관리하기 어려움

```html
<body>
    <div style="text-align: center;">
        <header style="font-size: x-large; font-weight: bold;">변하은</header>
        <main>백엔드 개발자</main>
        <footer style="font-size: x-small;">Copyright &#169; 변하은</footer>
    </div>
</body>
```

| 스타일 | 적용 위치 | 결과 |
| --- | --- | --- |
| `text-align: center` | 부모 `<div>` | 내부 텍스트 전체 가운데 정렬 |
| `font-size: x-large` | `<header>` | 이름 크게 표시 |
| `font-weight: bold` | `<header>` | 이름 굵게 표시 |
| `font-size: x-small` | `<footer>` | 저작권 문구 작게 표시 |

**공통 스타일은 부모에 한 번, 개별 스타일은 필요한 자식에 적용.**

### ② Internal CSS

- HTML `<head>` 내부의 `<style>` 태그에 CSS 작성
- 선택자를 이용해 여러 요소에 스타일 적용 가능

```html
<head>
    <style>
        #contents {
            text-align: center;
        }
        header {
            font-size: x-large;
            font-weight: bold;
        }
        footer {
            font-size: x-small;
        }
    </style>
</head>
```

- HTML 내용과 CSS 규칙을 분리할 수 있지만, 같은 HTML 파일 안에서 관리하는 방식
- 위 코드의 `#contents`는 `id="contents"`인 요소에 적용

### ③ External CSS

- CSS를 별도의 `.css` 파일에 작성하고 HTML에서 연결하는 방식
- 여러 HTML 페이지에서 동일한 스타일을 재사용하기 편리함

```html
<!-- HTML 파일의 <head> 안 -->
<link rel="stylesheet" href="./style.css">
```

```css
/* style.css */
#contents {
    text-align: center;
}
header {
    font-size: x-large;
    font-weight: bold;
}
```

| 방식 | CSS 작성 위치 | 특징 |
| --- | --- | --- |
| Inline | HTML 태그의 `style` 속성 | 요소별 직접 지정 |
| Internal | HTML의 `<style>` | 한 문서 안에서 규칙 관리 |
| External | 별도 `style.css` | 파일 분리·재사용·유지보수 |

> **주의:** `.css` 파일 안에는 `<style>`과 `</style>` 태그를 작성하지 않음. 해당 태그는 HTML에서 사용하는 태그이기 때문에 CSS 파일에 넣으면 에디터에서 오류가 표시될 수 있음.

---

## 3. CSS 선택자(Selector)

### 기본 선택자

| 종류 | 작성법 | 적용 대상 |
| --- | --- | --- |
| 전체 선택자 | `*` | 모든 요소 |
| 태그 선택자 | `header` | 모든 `<header>` 요소 |
| 클래스 선택자 | `.red` | `class="red"`인 요소들 |
| ID 선택자 | `#contents` | `id="contents"`인 요소 |

```html
<div id="contents">
    <header class="red">변하은</header>
    <main>백엔드 개발자</main>
    <footer class="red">Copyright © 변하은</footer>
</div>
```

```css
#contents {
    text-align: center;
}
.red {
    color: red;
}
header {
    font-size: x-large;
    font-weight: bold;
}
footer {
    font-size: x-small;
}
```

**실행 결과**

- `#contents` → 전체 텍스트 가운데 정렬
- `.red` → 이름과 저작권 문구를 빨간색으로 표시
- `header` → 이름 크게·굵게 표시
- `footer` → 저작권 문구 작게 표시

### `id`와 `class` 차이

- **ID:** 한 문서 안에서 특정 요소를 고유하게 구분할 때 사용. 같은 ID를 여러 요소에 반복하지 않는 것이 원칙
- **Class:** 공통 스타일을 여러 요소에 적용할 때 사용. 하나의 요소에 여러 클래스 지정 가능
- CSS에서 ID는 `#`, 클래스는 `.`으로 시작
- `.red`가 올바른 클래스 선택자이며, `. red`처럼 중간에 띄어쓰면 안 됨

### 관계 선택자

| 선택자 | 의미 |
| --- | --- |
| `div p` | `<div>` 내부의 모든 자손 `<p>` |
| `div > p` | `<div>`의 바로 아래 자식 `<p>` |
| `div + p` | `<div>` 바로 뒤에 위치한 형제 `<p>` |
| `div ~ p` | `<div>` 뒤에 있는 모든 형제 `<p>` |

- **자손:** 내부에 여러 단계로 중첩된 요소까지 포함
- **자식:** 바로 한 단계 아래 요소만 포함
- 선택자 연습: [CSS Diner](https://flukeout.github.io/)

### 선택자 우선순위(Specificity)

같은 요소에 여러 CSS 규칙이 적용되면 우선순위에 따라 최종 스타일 결정.

**일반적인 우선순위:** Inline style > ID > Class > Tag

```html
<header id="name" class="red" style="color: green;">변하은</header>
```

```css
header { color: black; }
.red { color: red; }
#name { color: blue; }
```

- 최종 글자색: **초록색** (`style="color: green;"`)
- Inline style을 제거하면 `#name`의 **파란색** 적용
- ID 규칙도 제거하면 `.red`의 **빨간색** 적용
- 선택자의 우선순위가 같다면 일반적으로 **나중에 작성한 선언**이 적용됨
- `!important` 등의 예외도 있으므로 위 순서는 기본적인 비교 기준

---

## 4. CSS 박스 모델(Box Model)

HTML 요소는 기본적으로 사각형 박스 영역을 가짐.

**안쪽 → 바깥쪽:** Content → Padding → Border → Margin

| 구성 | 의미 | 관련 속성 |
| --- | --- | --- |
| **Content** | 실제 텍스트·이미지 등 내용 영역 | `width`, `height` |
| **Padding** | Content와 Border 사이의 안쪽 여백 | `padding` |
| **Border** | Content와 Padding을 둘러싼 테두리 | `border` |
| **Margin** | Border 바깥의 요소 간 여백 | `margin` |

### 박스 모델 실습

```html
<div id="out">
    <div id="box">BOX</div>
</div>
```

```css
#out {
    background-color: skyblue;
}
#box {
    background-color: orange;
    background-clip: content-box;
    border: 1px solid black;
    padding: 20px;
}
```

- `#out`: 바깥 컨테이너의 하늘색 배경
- `#box`: `BOX` 텍스트를 담는 내부 요소
- `padding: 20px`: 내용과 테두리 사이에 20px 여백 생성
- `border: 1px solid black`: 검은색 1px 실선 테두리
- `background-clip: content-box`: **주황색 배경을 Content 영역에만 표시**
- 따라서 Padding 부분에는 내부 요소의 주황색이 칠해지지 않고, 바깥의 하늘색 배경이 비쳐 보임

### Border 구성

```css
border: 1px solid black;
/* 두께  선 종류  색상 */
```

| 값 | 모양 |
| --- | --- |
| `solid` | 실선 |
| `dashed` | 파선 |
| `dotted` | 점선 |

- `border`는 CSS에서 대부분의 요소에 적용 가능
- HTML의 `<table border="1">`은 과거에 사용하던 테이블 테두리 속성
- 현재는 `border: 1px solid black;`처럼 CSS로 테두리를 지정하는 방식이 일반적

### Width / Height / Margin 추가

```css
#box {
    font-size: xx-large;
    background-color: orange;
    background-clip: content-box;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    width: 80px;
    height: 100px;
}
```

- `font-size: xx-large`: 글자 크기 증가
- `width: 80px`, `height: 100px`: Content의 너비와 높이 지정(기본 `box-sizing: content-box` 기준)
- `padding: 20px`: 상·하·좌·우 안쪽 여백 20px
- `margin: 20px`: 상·하·좌·우 바깥 여백 20px
- Padding/Margin/Width/Height를 주석 처리하면 박스 크기와 `BOX`의 위치가 달라짐

**실제 박스 크기 계산 (`content-box` 기준)**

```text
가로 = Content 80 + Padding 40 + Border 2 = 122px
세로 = Content 100 + Padding 40 + Border 2 = 142px
```

- Margin은 테두리 밖 공간이므로 위 122×142px 크기에 포함되지 않음
- `box-sizing: border-box` 사용 시 `width`/`height`가 Padding과 Border까지 포함하는 크기를 나타냄

### Padding과 Margin 구분

- `padding`: 박스 **안쪽** 공간 확보 → 테두리와 내용 사이 거리 증가
- `margin`: 박스 **바깥쪽** 공간 확보 → 주변 요소와의 간격 증가
- `margin-top: 240px`: 해당 요소의 위쪽 바깥 여백을 240px로 지정

---

## 5. 프로필 페이지 스타일 실습

### HTML 구조

```html
<body>
    <div id="contents">
        <header>변하은</header>
        <main>백엔드 개발자</main>
        <div id="exp">경력</div>
        <footer>Copyright &#169; 변하은</footer>
    </div>
</body>
```

- `#contents`: 전체 콘텐츠를 묶는 컨테이너
- `header`: 이름 표시
- `main`: 직무 표시
- `#exp`: 경력 표시
- `footer`: 저작권 정보 표시

### CSS 적용

```css
#contents {
    text-align: center;
}
header {
    font-size: x-large;
    font-weight: bold;
    background-color: orange;
}
main {
    background-color: skyblue;
    padding: 20px;
}
#exp {
    background-color: olive;
}
footer {
    font-size: x-small;
    background-color: beige;
    margin-top: 240px;
}
```

| 요소 | 적용 스타일 | 결과 |
| --- | --- | --- |
| `#contents` | `text-align: center` | 전체 텍스트 가운데 정렬 |
| `header` | 크기, 굵기, 주황 배경 | 이름 강조 |
| `main` | 하늘색 배경, `padding: 20px` | 직무 영역 내부에 여백 생성 |
| `#exp` | 올리브색 배경 | 경력 영역 구분 |
| `footer` | 작은 글씨, 베이지색 배경, `margin-top: 240px` | 위 요소와 넓게 떨어져 배치 |

**확인할 점**

- `padding`을 늘리면 해당 영역의 **내용과 테두리 사이 공간**이 커짐
- `footer`의 `margin-top`을 늘리면 **앞 요소와의 간격**이 커짐
- `footer` 앞에 경력 영역을 추가하면 요소 순서에 따라 Footer의 위치도 달라짐
- `background-color`를 주석 처리하면 해당 배경색만 사라짐
- `font-family`는 글꼴 지정에 사용: `font-family: Arial, sans-serif;`

---

## 6. External CSS 파일 분리

### 파일 구조

```text
프로젝트 폴더/
├── resume.html
└── style.css
```

**resume.html**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="contents">
        <header>변하은</header>
        <main>백엔드 개발자</main>
        <div id="exp">경력</div>
        <footer>Copyright &#169; 변하은</footer>
    </div>
</body>
</html>
```

**style.css**

```css
#contents {
    text-align: center;
}
header {
    font-size: x-large;
    font-weight: bold;
}
main {
    padding: 20px;
}
#exp {
    background-color: olive;
}
footer {
    font-size: x-small;
    margin-top: 240px;
}
```

- `<link rel="stylesheet" href="./style.css">`: 현재 HTML 파일 위치를 기준으로 `style.css` 연결
- `rel="stylesheet"`: 연결할 파일이 스타일시트임을 나타냄
- `href="./style.css"`: CSS 파일의 상대 경로 지정
- HTML은 구조, CSS는 스타일을 담당하도록 분리

**연결 오류 점검**

1. HTML과 CSS 파일이 같은 폴더에 있는지 확인
2. `href` 경로와 실제 파일명(`style.css`) 확인
3. CSS 파일에 `<style>` 태그를 넣지 않았는지 확인
4. 저장 후 브라우저 새로고침 또는 Live Preview 확인
5. `#contents`와 `id="contents"`처럼 선택자 이름이 일치하는지 확인

---

## 7. Font Awesome 아이콘 적용

### Font Awesome

- 웹 페이지에서 사용할 아이콘을 제공하는 CSS 기반 라이브러리
- 외부 CSS 파일을 불러온 뒤 지정된 클래스 이름으로 아이콘 표시
- 공식 사이트: [Font Awesome](https://fontawesome.com/)

**① HTML `<head>`에 라이브러리 연결**

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
>
<link rel="stylesheet" href="./style.css">
```

**② GitHub 링크와 아이콘 추가**

```html
<a href="https://github.com/haniqus" id="github">
    <i class="fa-brands fa-github"></i> GitHub
</a>
```

- `<a>`: 클릭 가능한 링크
- `href`: 이동할 주소
- `id="github"`: 링크에 스타일을 지정할 때 사용 가능한 식별자
- `fa-brands`: 브랜드 아이콘 계열
- `fa-github`: GitHub 아이콘 지정
- `<i>` 태그 자체가 GitHub 로고를 생성하는 것은 아님 → **Font Awesome CSS + 클래스**가 핵심

```css
#github {
    color: black;
    text-decoration: none;
}
```

- `color`: 링크 텍스트와 아이콘의 색상 지정
- `text-decoration: none`: 링크의 밑줄 제거
- 외부 라이브러리 URL에 접근할 수 있어야 아이콘이 정상 표시됨

---

## 8. Display와 HTML 요소의 역할

### `display: block` / `display: inline`

| 구분 | `block` | `inline` |
| --- | --- | --- |
| 배치 | 새로운 줄에서 시작 | 같은 줄에 이어서 배치 |
| 너비 | 기본적으로 가용 너비를 채움 | 내용만큼 차지 |
| `width`, `height` | 지정 가능 | 일반적으로 직접 적용되지 않음 |
| 대표 태그 | `<div>`, `<p>`, `<header>` | `<span>`, `<a>`, `<strong>` |

```html
<div>첫 번째</div>
<div>두 번째</div>
<span>첫 번째</span>
<span>두 번째</span>
```

- `<div>` 두 개 → 각각 다른 줄
- `<span>` 두 개 → 같은 줄에 이어서 배치
- `display`는 CSS로 변경 가능하므로 태그 자체와 배치 방식은 구별해야 함

### `<div>`와 `<p>`의 차이

- `<div>`: 여러 HTML 요소를 묶는 **범용 컨테이너**
- `<p>`: **하나의 문단**을 나타내는 요소
- 둘 다 기본적으로 `display: block`이지만 의미와 허용되는 자식 요소가 다름
- `<p>` 내부에 `<header>`, `<main>`, `<footer>`를 넣는 구조는 올바르지 않음
- 이름·직무·저작권 정보를 한 번에 묶어 스타일을 적용하려면 `<div>` 사용

---

## 9. 핵심 정리

| 개념 | 기억할 내용 |
| --- | --- |
| CSS | HTML 요소의 디자인과 배치 담당 |
| Cascading | 중복된 스타일 규칙 중 최종 적용값 결정 |
| Inheritance | 부모의 일부 스타일이 자식에게 전달 |
| Inline / Internal / External | 태그 안 / HTML `<style>` 안 / 별도 CSS 파일 |
| `#id` / `.class` | 고유 요소 선택 / 공통 그룹 선택 |
| 선택자 우선순위 | 일반적으로 Inline > ID > Class > Tag |
| Content | 실제 내용 영역 |
| Padding | 테두리 안쪽 여백 |
| Border | 요소의 테두리 |
| Margin | 테두리 바깥 여백 |
| `background-clip: content-box` | 배경을 Content 영역에만 표시 |
| `box-sizing: border-box` | 지정한 크기에 Padding·Border 포함 |
| `display: block` | 새 줄에서 시작하는 배치 방식 |
| External CSS | HTML의 `<link>`로 외부 CSS 연결 |
| Font Awesome | 외부 아이콘 스타일시트 + 클래스 사용 |

**자주 헷갈리는 부분**

- `.red` ≠ `#red` → 클래스 선택자와 ID 선택자는 다름
- `padding` ≠ `margin` → 안쪽 여백과 바깥쪽 여백
- `width: 80px` ≠ 항상 전체 박스 너비 80px → `box-sizing`과 Padding/Border 확인
- HTML의 `border="1"` ≠ CSS의 `border: 1px solid black;` → 표현 대상은 비슷하지만 작성 방식과 활용 범위가 다름
- `style.css` 파일에는 **CSS 규칙만** 작성하며 `<style>` 태그는 사용하지 않음
