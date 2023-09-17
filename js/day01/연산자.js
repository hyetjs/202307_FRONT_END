5 == 5; //true
5 == "5"; //true, 데이터 타입은 다르지만, 값이 같다
5 == 8; //false
false == "0"; //true
false == "false" //false
false == undefined //false
false == null; //false
null == undefined //true
null === undefined; //false null과 undefined은 값은 같지만, 데이터 타입은 다르다
5 === 5; //true
5 === "5"; //false

//false는 0이라는 값이 있고 null과 undefined는 값이 아예 없는 상태
//그래서 false와 null,undefined는 값만 비교했을때도 false다
//
//숫자는 기계어로 따지면 값이 같다 


NaN === NaN; //false
//NaN은 JS에서 유일하게 자기 자신과 일치하지 않는 값
//특정한 값이 NaN인지 판단하기 위해 비교를 했을 것
//기본적으로 내장되어 있는 isNaN 함수(기능)을/를 통해 NaN 유무를 판단할 수 있다
// ex) isNaN(a)

0 === -0; // true

//달라?, 완벽히 일치하지 않아? 응 달라(true), 아니 똑같아(false)
5 != 8; // true
5 != 5; // false
5 != "5"; //false
5 !== 8; // true
5 !== 5; // false
5 !== "5"; // true

//실무에서는 동등비교와 일치 비교만을 사용하고 
//완벽히 일치한지 다른지를 보기위해서만 사용, 값이 같고 다르고 확인하는 용도

//값이 다른지 확인 -> !== 
//값이 같은지 확인 -> ===