
/* 
    const action = {
        type: "INCREMENT" || "DECREMENT"
        payload: {
            count: number
        }
    }
*/

export const countReducer = (state, action) => {
    switch (action.type){
        case "INCREMENT":
            return state + action.payload.count;
        case "DECREMENT":
            return state - action.payload.count;
        default:
            return state;
    }
}
// +,- setState(count + 1) --> 다른 폴더로 따로 뺐구나
// 다른 폴더로 뺐으니까 +버튼을 눌렀을 때 다른 폴더에 값을 전달해줘야 안다
// 전달 매개체를 이용하여 사용자가 무엇을 했는지 전달 해주는구나