// properties (props)
// 부모 컴포넌트에서 자식 컴포넌트로 전달된 속성 값, 컴포넌트 함수의 인자로 전달

import React from "react";
import FormInput from "../../../components/Input";
import { css, styled } from "styled-components";
import { flexCenter } from "../../../styles/common";
import TDButton from "../../../components/Button";

const SignForm = ({ signFormState }) => {
  // signFormState = SIGN-UP 회원가입
  // signFormState = SIGN-IN 로그인

  // 공용 컴포넌트
  // Button.js / input.js

  return (
    <Form>
      <FormInput
        label={"이메일"}
        placeholder={"email"}
        containerStyle={{
          width: "100%",
        }}
      />
      <FormInput
        label={"비밀번호"}
        placeholder={"password"}
        containerStyle={{
          width: "100%",
        }}
      />
      <TDButton variant={"primary"} size={"full"}>
        회원가입
      </TDButton>
    </Form>
  );
};
export default SignForm;

const Form = styled.form`
  background-color: "#f000000";
  ${flexCenter}
  flex-direction: column;
  padding: 32px;
  font-family: "Orbit-Regular";
`;
