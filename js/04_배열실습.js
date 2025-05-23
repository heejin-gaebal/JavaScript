function arrayTest1(){
    //레이블 태그 가져오고 | 태그 안에 있는 글자 얻기
    const a = document.querySelector("#la1").innerText; 
    const b = document.querySelector("#la2").innerText; 
    const c = document.querySelector("#la3").innerText; 
    const d = document.querySelector("#la4").innerText; 
    
    const arr1 = a.split(",");
    const arr2 = b.split(",");
    const arr3 = c.split(",");
    const arr4 = d.split(",");
    
    const allArr =  arr1.concat(arr2, arr3, arr4)
    //인풋태그의 value얻기
    x = document.querySelector("input[id=text]");

    //배열에서 x의 인덱스번호 갖기
    if(allArr.indexOf(x.value) != -1){
        console.log(x.value+"는 " + allArr.indexOf(x.value)+"번째 입니다.");
    }else{
        alert("존재하지 않습니다");
    }
}

//--------------------------------------------------------------------------------------

function reverseTest(){
    const a = document.querySelector("#stringla1").innerText; 
    const b = document.querySelector("#stringla2").innerText; 
    
    const arr1 = a.split(' ').reverse();
    const arr2 = b.split(' ').reverse();
    
    const allArr = arr1.concat(arr2);
    const c = document.querySelector("#print");
    
    c.innerText = allArr.join("");

    console.log(allArr.join(""));
}
// reverseTest();

//--------------------------------------------------------------------------------------

const questArr = [];
function input(){
    //input변수에 input요소 할당
    const quest = document.querySelector("#strInput");

    //배열에 input값을 할당
    questArr.push(quest.value);
    console.log(questArr);
    questArr.sort();    
}
function print(){
    const place = document.querySelector("#print2");
    place.innerText = questArr.slice().reverse();
}

//--------------------------------------------------------------------------------------

function arrayTest3(){
    let food = ["피자", "치킨", "당근", "햄버거", "떡볶이"]

    const removeFood = document.querySelector("#remove")
    const addFood = document.querySelector("#add");
    
    const index1 = food.indexOf(removeFood.value);

    if(index1 !== 1){
        food.splice(index1,1);
    }

    food.push(addFood.value);

    console.log(food);
}