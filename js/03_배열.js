function f01(){
    // let x = [];
    // let x = new Array();
    // let x = new Array(3);
    // let x = new Array("사과","딸기","바나나");
    // let x = ["자바","오라클","jdbc"];
    let x = ["자바",123,true,"오라클","100",3];
    let y = ["Spring","React","JPA","AWS"];

    // let result = x1.indexOf("자바");
    // let result = x.concat(y);
    // let result = x.join("#"); //자바#123#true #을 구분자로 사용
    // let result = x.reverse();
    // console.log(x[0]); = true
    // console.log(x[1]); = 123
    // console.log(x[2]); = 자바 ...

    // let result = x.sort(); ['100', 123, 3, true, '오라클', '자바']
    // let result = x.push("vagrant"); 
    // console.log(x); = ['자바', 123, true, '오라클', '100', 3, 'vagrant']
    // console.log(result); 7 (배열개수 반환)
    // let result = x.pop(); 
    // console.log(x); = ['자바', 123, true, '오라클', '100']
    // console.log(result); = 3 (pop으로 꺼낸 요소 반환)
    
    // let result = x.slice(2); 2 이상으로 다 출력
    // let result = x.slice(2,4); 2이상 4미만 출력

    // let result = x.splice(2,1); 2번째요소 하나를 잘라내기
    // let result = x.splice(2,3); 2번째요소 3개 잘라내기
    // let result = x.splice(2,3,"민트초코", "하와이안피자");
    // console.log(x); = ['자바', 123, '민트초코', '하와이안피자', 3] 2번째에서 3개 잘라내고 요소 추가
    // console.log(result); = [true, '오라클', '100'] 잘라낸것 출력
    // let result = x.splice(2,0,"민트초코", "하와이안피자");
    // console.log(x); = ['자바', 123, '민트초코', '하와이안피자', true, '오라클', '100', 3]
    // console.log(result); = []

    let result = x.splice(2,0,[111,222,333]);

    console.log(x);
    console.log(result);
}
f01();
