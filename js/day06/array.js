// const mapArr = [1, 2, 3, 4, 5];
// mapArr.map((el) => el + 1); // [2, 3, 4, 5, 6]

// /*
// mapArr.map((el) => {
// return el + 1
// })
// 한 줄일때는 위에 처럼 작성가능
// */

// const filterArr = [1, 2, 3, 4, 5, 6];
// const evenArr = filterArr.filter((el) => el % 2 === 0); // [ 2, 4, 6 ]

// const posts = [
//   {
//     id: 1,
//     title: "title-1",
//     content: "content-1",
//     isLiked
//   },
//   {
//     id: 2,
//     title: "title-2",
//     content: "content-2",
//     isLiked: false,
//   },
// ];
// const findPost = posts.find(post);
// findPost.isLiked = true,
// console.log(posts);

// const deletPost = posts.filter((post) => post.id !== 1)
// console. log(deletPost)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceResult = numArr.reduce((sum, n) => {
  return sum + n;
},0);
console.log(reduceResult)
// reduce ((누적값,현재요소)=>{})
// sum의 기본값은 첫번째 요소인 1이며,n의 기본값은 다음요소인 2부터 시작
// sum에도 기본값을 줄 수 있음 sum에 기본값이 들어가면 n은 첫번째 요소인 1부터 시작
