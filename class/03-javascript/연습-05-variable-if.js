// 데이터 타입, 연산자 실습
1 + 1
// 2
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!true
// false
!false
// true


// 조건문 실습
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined
if(profile.age >= 20 ) {
    console.log("성인입니다");
} else if(profile.age >= 8) {
    // ↑ 코드 최적화(몇ms라도 줄일 수 있음)
    console.log("학생입니다");
} else if(profile.age > 0) {
    console.log("어린이입니다");
} else {
    // 에러 핸들링
    console.log("잘못 입력하셨습니다");
}
// VM990:4 학생입니다


// 반복문 실습
const fruites = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스캣"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
]
// undefined
for(let i = 0; i < fruites.length; i++) {
    console.log(fruites[i].number + " " + fruites[i].title);
}
// VM1233:2 1 레드향
// VM1233:2 2 샤인머스캣
// VM1233:2 3 산청딸기
// VM1233:2 4 한라봉
// VM1233:2 5 사과
// VM1233:2 6 애플망고
// VM1233:2 7 딸기
// VM1233:2 8 천혜향
// VM1233:2 9 과일선물세트
// VM1233:2 10 귤
// undefined
for(let i = 0; i < fruites.length; i++) {
    console.log(`${fruites[i].number} ${fruites[i].title}`);
}
// VM1254:2 1 레드향
// VM1254:2 2 샤인머스캣
// VM1254:2 3 산청딸기
// VM1254:2 4 한라봉
// VM1254:2 5 사과
// VM1254:2 6 애플망고
// VM1254:2 7 딸기
// VM1254:2 8 천혜향
// VM1254:2 9 과일선물세트
// VM1254:2 10 귤
// undefined
for(let i = 0; i < fruites.length; i++) {
    console.log(`과일 차트 ${fruites[i].number}위는 ${fruites[i].title}입니다.`);
}
// VM1288:2 과일 차트 1위는 레드향입니다.
// VM1288:2 과일 차트 2위는 샤인머스캣입니다.
// VM1288:2 과일 차트 3위는 산청딸기입니다.
// VM1288:2 과일 차트 4위는 한라봉입니다.
// VM1288:2 과일 차트 5위는 사과입니다.
// VM1288:2 과일 차트 6위는 애플망고입니다.
// VM1288:2 과일 차트 7위는 딸기입니다.
// VM1288:2 과일 차트 8위는 천혜향입니다.
// VM1288:2 과일 차트 9위는 과일선물세트입니다.
// VM1288:2 과일 차트 10위는 귤입니다.


// 수학 객체
// 실무에서 인증번호 생성하는 방법
Math.floor( Math.random() * 1000000 )
// 252089
String ( Math.floor( Math.random() * 1000000 ) )
// '817505'
String ( Math.floor( Math.random() * 1000000 ) ).padStart(6, "0") // <- 6자리가 안되면 앞에서부터 0을 추가
// '312635'
String ( Math.floor( Math.random() * 1000000 ) ).padStart(6, "0")
// '015695'
let result = String ( Math.floor( Math.random() * 1000000 ) ).padStart(6, "0")
// undefined
result
// '902912'
result
// '902912'