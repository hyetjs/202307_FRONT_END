/*
자판기라는 함수를 정의
자판기는 처음에 실행되었을 때 자판기가 가동되었습니다 출력
잔돈이 0원이면 음료수 명을 출력
잔돈이 있으면 음료수 명과 잔돈을 함께 출력
단, 없는 메뉴를 선택하면 존재하지 않는 상품입니다.
만약 투입금액이 선택한 음료수 값보다 적을 경우 금액이 부족합니다. 출력
최소 금액보다 적은 금액을 투입했을 때는 금액을 잘못 투입하셨습니다. 금액 반환 출력

함수의 인자는 투입 금액(coin) 상품명인 (product)

메뉴 
솔의눈 300
비타 500
콜라 1000
*/

/*
출력값
-- 공통 --
console.log("자판기가 가동되었습니다") -- 무조건 실행

-- 성공 --
console.log (product) -- 만약에 coin === price
console.log (product, coin-price) -- 만약에 price < coin

-- 실패 --
console.log(존재하지 않는 상품입니다) -- 만약에 product in product, !price
//객체의 값이 있는지 없는지 검사하기 위해서 특정 키의 값이 있는지 확인하거나 in으로 찾을 수 있다
console.log(금액이 부족합니다) -- 만약에 price > coin
console.log(금액을 잘못 투입하셨습니다) -- 만약에 coin < 300

입력값
coin, 상품명
price -> 특정 집단에서 특정 키를 갖고있는 값을 구한다
         ------ 객체
*/
let menu = {
  솔의눈: 300,
  비타: 500,
  콜라: 1000,
};

function 자판기(coin, product) {
  console.log("자판기가 가동되었습니다");

  const price = menu[product];
  const charge = coin - price;

  if (!price) return console.log("존재하지 않는 상품입니다");
  if (price > coin) return console.log("금액이 부족합니다");
  if (coin < 300) return console.log("금액을 잘못 투입하셨습니다", coin);
  if (charge === 0) return console.log(product);
  console.log(product, charge);
}
자판기(1000, "솔의눈");

function addNum(coin, product) {
  console.log("자판기가 가동되었습니다");
  if (coin === menu[product]) {
    console.log(product);
  } else if (coin > menu[product]) {
    console.log(product, coin - menu[product]);
  } else if (coin < menu[product]) {
    console.log("금액이 부족합니다");
  } else if (coin < 300) {
    console.log("금액을 잘못 입력했습니다");
  } else if (!menu[product]) {
    console.log("존재하지 않는 상품입니다");
  }
}
addNum(300, "솔의눈");

// 객체에 접근하는 방법을 잘 몰랐다 menu[product] 이런식으로 접근 가능
// 함수 호출할 때 "솔의눈" key 값을 스트링으로 접근했어야 되는데 그냥 접근
// 위에꺼 강사님 코드 아래꺼 내코드

// // 1)
// var nums = [100, 200, 300, 400, 500];
// nums.splice(3, 2);
// console.log(nums);

// // 2)
// var arr = [200, 100, 300];
// arr.splice(2, 0, 10000);
// console.log(arr);

// 3) 4번

// 4) 2번

// 5) 4번

// 6) 2번

// 7) 3번, 5번

// 8) 84

// 9)
// let year = "2019";
// let month = "04";
// let day = "26";
// let hour = " 11";
// let minute = "34";
// let second = "27";

// let date = [year, month, day].join("/");
// let time = [hour, minute, second].join(":");

// let result = date.concat(time);

// console.log(result);

// 2019/04/26 11:34:27

// for(i=1;i<=10;i++){
//     let sum = '';
//     if(i%2===1){
//         sum += '*'
//         console.log(sum);
//     }
// }

// for(let i = 1; i <= 5; i++){
//     let sum = '';
//     for(let j = 1; j <= i; j++){
//         sum += '*';
//     }
//     console.log(sum);
// }

// for(i=1;i<=10;i++){
//     for(j=1;j<=10;j++){
//         if(j===10){
//         console.log("br")
//         }
//     }
//     console.log(i)
// }
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);