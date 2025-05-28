function  f01(){
    // const x = new Object();
    const x= {};
    x["book title"] = "해리포터"; //띄어쓰기/공백 포함시 이 표현식 사용
    x.price = 5000;

    console.log(x["book title"]);
    console.log(x.price);
}

function  f02(){
    //객체 생성
    const x= {};

    //속성 추가
    x.name = "히지니";
    x.age = 26;
    x.hello = () => {
        console.log("앗뇽");
    };
    console.log(x);
    x.hello();
}

function  f03(){
    //객체 생성
    const x = {};
    //속성 추가
    x.title = "이누야샤";
    x.price = 3000;
    //속성 출력
    console.log(x.title);
    console.log(x.price);

    for(let temp in x){
        console.log(x[temp]);
    }
}

function f04(){
    //객체 생성하면서 속성 추가
    const x = {
        title : "원피스",
        price : 4000
    };
    //객체의 속성 삭제
    x.price = null;
    x.price = undefined;
    delete x.price;

    //객체 출력
    console.log(x);
}

function generateBook(){
    const x = {};
    x.title = "마법의 돌";
    x.price = 100;
    return x;
}

function Book(){
    this.title = "반지의 제왕";
    this.price = 1000;
}

function f06(){
    // const result = generateBook();
    const result = new Book();
    console.log(result);
}












