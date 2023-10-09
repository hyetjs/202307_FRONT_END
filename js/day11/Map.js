const errors = new Map([
  [404, "Not Found"],
  [400, "Bad Request"],
  [401, "UnAuthorized"],
  [403, "Forbidden"],
  [500, "Network Error"],
]);

// http response status code
// browser --------> server
//         request
//         <--------
//         response

// 400번대 client error
// 500번대 server error

for (let error of errors) {
  console.log(error);
  // [400, 'Bad Request']
}

// 객체 -> 맵
let object = {};
let map = new Map(Object.entries(object));
// 맵 -> 객체
Object.fromEntries(map);
