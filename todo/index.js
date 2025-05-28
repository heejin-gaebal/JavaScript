const todoArry = []; //함수 실행과 무관하게 배열을 생성
function addTodo(){
    //content 입력받기
    const content = document.querySelector("input[name=content]").value;
    //manager 입력받기
    const manager = document.querySelector("input[name=manager]").value;
    //content + manager 객체 만들기
    const obj = {
        //키값은 알아서 문자열 처리가 되므로 이 표현식도 가능
        content : content, 
        manager : manager //{content: '화분에 물주기', manager: '박희진'}
    };
    //객체를 배열에 넣기
    todoArry.push(obj);
    console.log(todoArry);
}

function enrollTodo(){
    // //input 태그 가져오기
    // const inputTag = document.querySelector("input[type=text]");
    // //value값 꺼내기
    // const v = inputTag.value;
    //로컬스토리지 배열 저장  key | value
    const jsonStr = JSON.stringify(todoArry); //JSON 형식의 문자열로 변환해준다.
    localStorage.setItem("todo", jsonStr);    
}

function selectTodo(){
    //로컬스토리지에 있는 key의 value값 가져오기 
    const result = localStorage.getItem("todo") 
    //str -> array 
    const arry = JSON.parse(result)  //JSON 형식의 문자열 -> JS객체(또는 배열)에 맞게 변환
    console.log(arry); // console확인 : ['밥', '참치', '김치', '참기름']

    //화면에서 todo 조회
    for(let obj of arry){
        console.log(obj);

        // h3태그에 자식추가 (개체)
        const h3Tag = document.createElement("h3");
        h3Tag.innerText = obj.manager + " | " + obj.content;
        //appendChild하고 문자열이 안되는 이유는 노드만 가져다 쓸 수 있는데 
        //여기서 노드는 태그명 / TextNode를 갖다쓸 수 있다
        
        // 자식을 추가할 h3태그 
        const list = document.querySelector("#todo-list");
        list.appendChild(h3Tag);
    }
}



















































