function insert(){
    //로컬스토리지에서 넘버값 지정 
    if(localStorage.getItem("seq") === null){
        localStorage.setItem("seq",0)
    }

    //배열 준비 (로컬스토리지에서 가져온 데이터)
    const boardStr = localStorage.getItem("board");
    let boardArry = JSON.parse(boardStr);
    if(boardArry === null){
        boardArry = [];
    }
    console.log(boardArry);

    //객체에 넣을 값 준비
    //제목 값 가져오기
    const title = document.querySelector("input[name=title]").value;
    //내용 값 가져오기
    const content = document.querySelector("textarea[name=content]").value;

    let no = localStorage.getItem("seq");
    localStorage.setItem("seq", ++no);
    //로컬스토리지는 문자열로 저장되므로 숫자타입으로 형변환
    const date = new Date();

    //객체 만들기
    const vo = {
        title,
        content,
        date,
        no, //나중에 키값 추가 될수 있으므로 ,는 남겨도됨
    }
    console.log(vo);

    //객체 배열에 담기
    boardArry.push(vo)

    //로컬 스토리지에 저장 - json형식의 문자열로 변환
    localStorage.setItem("board", JSON.stringify(boardArry));
}

function selectList(){
    //로컬스토리지 값 가져오기
    const boardStr = localStorage.getItem("board");
    const boardArry = JSON.parse(boardStr);

    // const list = document.querySelector("#board-list");

    // list.innerHTML = ""; //싹 비워준다

    // for(let vo of boardArry){
    //     const no = vo.no;
    //     const title = vo.title;
    //     const content = vo.content;
    //     const date = vo.date;

    //     // ${}으로 변수지정하면 값 가져올 수 있음 대신 문자열은 "" 이 아닌 `(백틱)으로 감싸야함
    //     list.innerHTML += `<h3> ${no} | ${title} | ${content} | ${date} </h3>`;
    // }    

    //테이블에 데이터 넣기
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for(let vo of boardArry){
        const no = vo.no;
        const title = vo.title;
        const content = vo.content;
        const date = vo.date;
        tbody.innerHTML += `<tr onclick = "selectOne(this);">
        <td>${no}</td>
        <td>${title}</td>
        <td>${content}</td>
        <td>${date}</td>
        <td><button onclick="deleteBoard(${no});">삭제</button></td>
        </tr>`;
        //onclick="deleteBoard(${no});" 변수no를 넣어서 바로 인자값으로 넘겨줄 수있음
    }
}

//어떤 요소에 이벤트가 실행될때 그 부모에게 전파되고 그 부모요소에 전파가되는 경우 - Event Bubbling
//어떤 요소에 이벤트가 실행될때 밑으로 점점 전파가되는 경우 - Event Capturing

function selectOne(x){
    //이벤트가 발생한 요소에 대해 단건 상세조회

    //이벤트 발생한 요소(tr)태그 얻기
    //tr태그 내 게시글 번호 얻기
    const no = x.children[0].innerHTML //tr 자식 td의 0번째
    //번호 이용해서 로컬스토리지에서 꺼내기
    const boardStr = localStorage.getItem("board");
    const boardArry = JSON.parse(boardStr);

    for(let vo of boardArry){
        if(vo.no == no){
            //모달창에 데이터 넣기
            document.querySelector("#no").innerHTML = vo.no;
            document.querySelector("#title").innerHTML = vo.title;
            document.querySelector("#date").innerHTML = vo.date;
            document.querySelector("#content").innerHTML = vo.content;

            //모달창 생성 모달+오버레이
            const modal = document.querySelector("#modal");
            modal.classList.add("active");
            
            const overlay = document.querySelector("#overlay");
            overlay.classList.add("active");
        }
    }
}

function deleteBoard(no){
    // 버튼 -> td -> tr(부모) -> 자식들 -> 첫번째td -> 넘버    
    // const no = x.parentNode.parentNode.children[0].innerHTML;

    const boardStr = localStorage.getItem("board");
    const boardArry = JSON.parse(boardStr);

    for(let i=0; i<boardArry.length; i++){
        if(boardArry[i].no == no){
            boardArry.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("board", JSON.stringify(boardArry));

    selectList();
    //-------------------------------------------------------------------------------------
    //x.closet으로 tr찾아가기
}

function closeModal(x){ //호출하는 함수의 인자값을 받아와서 x로 표현
    x.classList.remove("active");
    //아예 함수호출을 overlay에 두고 그 자신을 가리키게 함

    // const overlay = document.querySelector("#overlay");
    // overlay.classList.remove("active");
}
