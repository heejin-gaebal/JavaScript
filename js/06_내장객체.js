// Object
console.log("============== Object ==============");
const obj01 = new Object();
obj01.title = "어벤져스";
obj01.price = 2000;

const result = obj01 instanceof Object; //타입확인
console.log(result);

console.log(obj01.hasOwnProperty("title")); 
//해당 속성이 있는지 확인

//Number
console.log("============== Number ==============");
const num1 = new Number(3.14); 
console.log(num1 instanceof Number);

//String
console.log("============== String ==============");
// 문자열.bold();
// 문자열.italics();
// 문자열.fontcolor();
// 문자열.link();

//Date
console.log("============== Date ==============");
const date01 = new Date();
console.log(date01);

const date02 = new Date('1994-11-30T18:30:15');
console.log(date02);
console.log(date02.getFullYear());










