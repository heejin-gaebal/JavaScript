function f01(){
    //요소노드 생성, 텍스트노드 생성
    const a = document.createElement("h1");
    const b = document.createTextNode("환영합니당~");
    console.log(a);
    console.log(b);

    //a노드 안에 자식으로 b노드 추가
    a.appendChild(b);

    //생성한 노드를 바디태그 자식으로 넣기
    const body = document.querySelector("body");
    body.appendChild(a);
}

function f02(){
    const imgTag = document.createElement("img");
    console.log(imgTag);

    imgTag.src = "https://dummyimage.com/600x400/000/fff&text=zzz";

    const body = document.querySelector("body");
    body.appendChild(imgTag);
}

function f03(){
    const x = document.querySelector("h1");
    x.remove();
}





