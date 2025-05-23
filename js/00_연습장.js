//h1 태그 js로 가져오고, 콘솔로그로 출력
// const tag = document.querySelector("h1");
// tag.style.backgroundColor = "pink";
// console.log(tag);

//id가 target인 요소를 js로 가져와서 배경 변경
// const a = document.querySelector("#target");
// a.style.backgroundColor = "skyblue";

//class가 kh인 요소를 js로 가져와서 배경 변경
// const b = document.querySelector(".kh");
// b.style.backgroundColor = "lightgreen";

// const x = document.querySelectorAll("ul>li")
// x[0].style.backgroundColor = "green"; 
// x[1].style.backgroundColor = "brown"; 
// x[2].style.backgroundColor = "blue"; 
// console.log(x);


/*
//문서에서 요소가져오기. input태그중 name속성이 userId인 태그 출력
const y = document.querySelector("input[name=userId]");
console.log(y);

//문서에서 요소가져오기. div태그 가져와서 출력
const z = document.querySelector("div") ;
console.log(z);



function f01(){
    //요소에 클래스 추가
    z.classList.add("box");
    
}
function f02(){
    //요소에 클래스 제거
    z.classList.remove("box");
}
function f03(){
    //요소에 클래스 추가/삭제
    z.classList.toggle("box");
}
*/


//input에 색상입력하고 버튼 클릭하면 박스 색상변경
function changeBoxColor(){
    //khInput변수에 input요소 할당
    const khInput = document.querySelector("#kh-color");
    //str변수에 input값을 할당
    const str = khInput.value;
    //요소 가져와서 변수에 담기
    const abc = document.querySelector("#kh-div");
    // 변수에 담긴 요소의 배경색을 변수str로 변경
    abc.style.backgroundColor = str; 
}