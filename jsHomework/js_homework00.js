// - `id="title"`인 요소를 선택하여 콘솔창에 출력
const titleFind = document.querySelector("#title");
console.log(titleFind);

// - `class="btn"`인 요소를 모두 선택하여 콘솔창에 출력
const btnFind = document.querySelector(".btn");
console.log(btnFind);

// - `button` 태그 중 첫 번째 버튼만 선택하여 콘솔창에 출력
const firstButton = document.querySelector(".buttons button:first-child");
console.log(firstButton);

// - 모든 `button` 태그 선택하여 콘솔창에 출력
const allButton = document.querySelectorAll("button");
console.log(allButton[0]);
console.log(allButton[1]);

// - `#loginForm` 안에 있는 `input` 태그들만 선택하여 콘솔창에 출력
const onlyInput = document.querySelectorAll("#loginForm input");
console.log(onlyInput[0]);
console.log(onlyInput[1]);

// - `name="userId"` 속성을 가진 `input` 요소를 선택하여 콘솔창에 출력
const userInfo = document.querySelector("[name=userId]");
console.log(userInfo);

// - ~~로그인 버튼(`로그인` 글자를 가진 버튼)의 텍스트를 콘솔창에 출력~~
const login = document.querySelector(".primary");
console.log(login.innerText);