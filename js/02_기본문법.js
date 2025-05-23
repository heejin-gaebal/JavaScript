// 변수와 자료형
// 전역 변수 선언
function f01(){
    var x1 = "지역변수_전 함수안에 있어용";
    let x2 = "상식적 변수";
    const x3 = "final";
    
    console.log(x2);
    
    /*  
        var :선언과 출력이 반대면 실행은 되어도 정의가 안됨 (에러X)
             임의로 var타입 변수 발생 - 사용 잘 안함
        let  선언과 출력이 반대면 실행이 안됨 (에러O)
    */
}
// f01();
//================================================
x = 5;
function f02(){
    x = 10;
    console.log(x);
}

function f03(){
    console.log(x);
}

// f02();
// f03();
//f03 먼저 호출하면 x=5를 가져와서 5,10 | f02 먼저 호출하면 x = 10 되어서 10,10

//==자료형==============================================
function f04(){
    let name = "히진이";
    let age = 15;
    let height = 160.5;
    let isAdult = true;
    let hobbis = ['영화','전시','여행','공연','뮤지컬'];
    let eat = function(){
        console.log("우마이!!!");
    };
    let job = null;
    
    //typeof 변수의 자료형 타입을 확인
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof height);
    console.log(typeof isAdult);
    console.log(typeof hobbis);     //배열이므로 객체타입 
    console.log(typeof eat);        //함수 타입
    console.log(eat);       eat();  //변수의 함수호출
    console.log(typeof job);        //undefined(초기화가 안된 변수)
}
// f04();

//==형변환==============================================
function f05(){
    //[자바스크립트의 버그]
    // let a = 1+'2'; = 12
    // let a = '1'+2+3; = 123
    // let a = 1+2+'3'; = 33
    // let a = 3*5; = 15
    // let a = '3'*5; = 15
    // let a = 5-2; = 3
    // let a = '5'-2; = 3 
    
    // let a = 0 == "0"; = true
    // let a = 0==[]; = true
    // let a = "0" == []; = false

    // let a = 'hello' * 3; = NaN(not a number)

    // let a = 2 + Number(3);

    // let a = 1 == '1'; true 
    // let a = 1 === '1'; false 
    console.log(a);
}
// f05();

//==제어문==============================================
function f06(){
    let a = [10,20,30,40,50];
    
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);
    console.log(a[4]);

    for(let i in a){    //인덱스 추출
        console.log(i);
        console.log(a[i]);
    }

    for(let i of a){    //배열의 값 추출
        console.log(i);
    }

}
f06();

















