let month = 2;
////switch는 값, 1f는 t/‡의 조건식
//switch는 분기가 많이 생성되는 것이 아니라면 자주 사용하지 않습니다. 가독성이 좋지 않기 때든 //단 분기가 여러개인 경우는 1f 보다는 switch가 가독성이 더 좋은 편
// break가 없으면 조건과 맞는 실행문 부터 끝까지 실행된다
// 2월 3월 4월 잘못입력하셨습니다
switch(month){
    case 1 : 
    console.log("1월");
    break;
    case 2 : 
    console.log("2월");
    break; //탈출문, 대신하여 return을 사용할 수 있음, 그러나 단순 종료를 위해서는 break
    case 3 : 
    console.log("3월");
    break;
    case 4 : 
    console.log("4월");
    break;  
    default :
    console.log("잘못입력하셨습니다");
}