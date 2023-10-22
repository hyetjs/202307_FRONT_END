// 비구조화 할당 === 구조 분해
// 객체나 배열을 해체하여 각각의 속성 혹은 요소 하나하나를 변수로 선언

const seongyong = {
  age: 20,
  hegith: 190,
};

// const age = seongyong.age
// const height = seongyong.hegith
// 하나 하나 객체의 속성을 변수로 지정하긴 힘드니까 구조를 부숴버리자

const { age: seongyongAge, height: seongyongHeight } = seongyong;
// const {}를 통해 {}안에 key를 작성하면 객체의 구조 분해 할당 가능

const SignForm = ({ signFormState }) => {
  // const {signFormState} = props
};

SignForm({
  signFormState: "SIGN-IN",
});

const [age, height] = [20, 190];
// const [state, setState] = useState()

// 안쓰는 요소나 인자 처리 방법
// const [, height] = [20, 190];
// (_, age) => {}
