// let c = 7;
// {
//   let b = 5;
//   console.log(b, c);
//   {
//     let a = 5;
//     let c = 3;
//     console.log(a, b, c);
//   }
// }

let c = 7; // 전역변수

function fa() {
  let b = 5;
  console.log(c, b);
  function fb() {
    let a = 5;
    let c = 3;
    console.log(a, b, c);
  }
  fb();
}
fa();
