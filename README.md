# KOST_Front_Project

KOSTA 프론트엔드 부트캠프 개인 프로젝트 모음 (HTML · CSS · JavaScript)

## 프로젝트

| 폴더 | 내용 |
|---|---|
| `TodoList/` | 할 일 목록 — 전체출력 / 추가 / 체크(수정) / 삭제 / 검색 |
| `fruits_shop_temp/` | 과일 쇼핑몰 — 상품 검색 / 정렬 / 채소 3개씩 더보기 |

## 배운 점

### TodoList

**map() 콜백은 모든 경우에 return해야 한다**
- 문제: 체크박스를 두 번째 누르면 `Cannot read properties of undefined (reading 'id')`
- 원인: `map` 콜백에서 return을 빠뜨려 `mockData`가 `[undefined, ...]`로 바뀜
- 해결: 일치하면 `{ ...ele, isDone: !ele.isDone }`, 아니면 `ele`를 반환

**checkbox 상태는 value가 아니라 checked 속성**
- 문제: 다시 그릴 때마다 체크가 풀림
- 해결: `${isDone ? "checked" : ""}`로 속성 자체를 넣고 빼기

**getTime()은 숫자, getMonth()는 0부터**
- `getTime()` 결과는 밀리초 숫자 → `new Date(숫자)`로 되돌려야 `toLocaleString()` 사용 가능
- `getMonth()`는 0~11 → 화면에 보여줄 때 +1

**속성 값은 문자열이다**
- 버튼의 `name`에 넣은 id는 문자열 → 숫자 id와 `===` 비교 전에 `parseInt()`로 변환

**잘못된 CSS 값은 줄 전체가 무시된다**
- `display: flex column;` → 방향은 `flex-direction`으로 따로 지정
- `font: 14px;` → `font` 축약형은 글꼴 이름이 필수, 크기만 바꿀 땐 `font-size`

### Fruits Shop

**sort()는 원본 배열을 바꾼다**
- 문제: 검색어가 비면 `fruits` 원본 배열 자체가 정렬됨
- 원인: `sort()`는 새 배열을 만들지 않고 원본을 직접 변경
- 해결: `[...fruits]`로 복사한 뒤 정렬

**가드 절로 중복 조건 없애기**
- 문제: `veggiePage >= veggies.length`를 두 번 확인
- 해결: 함수 앞에서 alert 후 바로 `return` → 아래 코드는 남은 상품이 있을 때만 실행

**input 요소 ≠ 입력값**
- `searchBox === ""`는 요소와 문자열 비교라 항상 false → `searchBox.value`
