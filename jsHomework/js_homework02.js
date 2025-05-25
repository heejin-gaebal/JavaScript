function login(){
    const userid = document.querySelector("#id");
    alert(userid.value + "님, 안녕하세요☆");
    
    const ment = document.querySelector(".changeMent");
    ment.innerHTML = userid.value+"을 위한 상품을 확인하세요"
    console.log(ment);
}

function newPro(){
    const newPro = document.querySelector(".product_box ul");
    newPro.innerHTML = "<li>[NEW] 루쥬 코코 플래쉬</li> <li>[NEW] 레 베쥬 쿠션</li> <li>[NEW] 루쥬 알뤼르 벨벳</li>"

    //버튼 on|off
    const onOff1 = document.querySelector("#new");
    const onOff2 = document.querySelector("#best");
    onOff1.classList.add("on");
    onOff2.classList.remove("on");
}

function bestPro(){
    const bestPro = document.querySelector(".product_box ul");
    bestPro.innerHTML = "<li>[BEST] 31 le rouge</li> <li>[BEST] 레 심볼즈 드 샤넬</li> <li>[BEST] 레드 까멜리아</li>"
    
    //버튼 on|off
    const onOff1 = document.querySelector("#new");
    const onOff2 = document.querySelector("#best");
    onOff1.classList.remove("on");
    onOff2.classList.add("on");
    console.log("베스트상품");
}

function colorFunc(){
    const colorFunc = document.querySelector("#search");
    const palette = document.querySelector(".colorPic");

    palette.style.backgroundColor = colorFunc.value;

    console.log(palette);
}



















