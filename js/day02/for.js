// for(let i = 0, i < 10; i++){
//     console.log(`현재숫자는 ${i + 1}입니다`);
// }
//i < 10 false
// i = 10 -> false, i = 9; 0~9 -> 10번 실행
//10번 반복,1~10까지 출력

//중첩 반복문
//고등학교(1~3학년, 9반)
// for(let i = 1, i < 10; i++){
//     console.log(`1학년 ${i}반`);
// }
// for(let i = 1, i < 10; i++){
//     console.log(`2학년 ${i}반`);
// }
// for(let i = 1, i < 10; i++){
//     console.log(`3학년 ${i}반`);
// }

//중첩
// for(let i = 1; i < 4; i++){
//     //1,2,3
//     for(let j = 1; j < 10; j++){
//         //1~9
//         console.log(`${i}학년 ${j}반`)
//     }
// }
//27

// let count = 0;
// while(count < 3){
//     console.log(count); //0,1,2
//     count++; //1,2,3
// }

for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}