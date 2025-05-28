const btn01 = document.querySelector("#btn01");
btn01.onclick = () => {
    console.log("고전 이벤트 모델");
}


function handleBtnClick(){
    console.log("인라인 이벤트 모델");
}

const btn03 = document.querySelector("#btn03");
btn03.addEventListener("click", ()=>{
    console.log("표준 이벤트 모델");
});


const btn04 = document.querySelector("#btn04");
btn04.addEventListener("click", f01);
//이벤트 객체를 넣으면서 호출

function f01(evt){
    console.log("f01><");
    console.log(evt.target);
    console.log(this);
}

function test01(){
    const x = confirm("네이버로 갈까요?");
    return x;
}







