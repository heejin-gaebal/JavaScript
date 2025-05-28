function f01(){
    // window.open("https://www.naver.com", "abc", "width=300, height=300"); 
    //링크 넣어서 원하는 새 웹페이지 오픈 | 이름을 넣어줄수 있다 | 창크기 설정

    window.setInterval (() =>{
        console.log("hello!!!!");
    }, 3000); //3초후 이벤트 발생
}

function f02(){
    console.log(location);

    //새로고침
    // location.reload(); 
    //링크 넣어서 원하는 웹페이지를 현재창에서 오픈
    // location.href="https://google.com"; 
    // location.assign("https://google.com"); //할당
    location.replace("https://google.com");   //대체(기록안남음)


}

function f03(){
    console.log(history.back());
}


const btn04 = document.querySelector("#btn04");
btn04.onclick = () => {
    console.log(navigator);
}


const btn05 = document.querySelector("#btn05");
btn05.onclick = () => {
    console.log(screen);
};
















