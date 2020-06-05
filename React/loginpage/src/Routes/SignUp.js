/*회원가입 페이지*/
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UseInfo from "../Hooks/UseInfo";
import { UserConsumer } from "../Contexts/User";

const MainTemplate = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 6rem;
  border-radius: 4px;
  height: 400px;
  overflow: hidden;
  background: white;
`;

const SignUpTitle = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
  color: #6408ba;
  font-weight: bold;
  font-size: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  margin: 3%;
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
`;

const Button = styled.button`
  background: #5408ba;
  color: white;
  border: none;
  font-size: 1rem;
  width: 250px;
  height: 30px;

  &:hover {
    background: #4408ba;
  }

  &:disabled {
    background: gray;
  }
`;

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: red;
`;

const SignUp = () => {
  const [name, onSetName] = UseInfo("");
  const [confirm, onSetConfirm] = UseInfo("");

  return (
    <UserConsumer>
      {({ state, action }) => (
        <MainTemplate>
          <SignUpTitle>회원가입</SignUpTitle>
          <InputDiv>
            <Input
              value={name}
              placeholder="이름을 입력하세요"
              onChange={onSetName}
            />
          </InputDiv>
          <InputDiv>
            <Input
              value={state.id}
              placeholder="아이디를 입력하세요"
              onChange={action.onSetId}
            />
          </InputDiv>
          <InputDiv>
            <Input
              type="password"
              value={state.password}
              placeholder="비밀번호를 입력하세요"
              onChange={action.onSetPassword}
            />
          </InputDiv>
          <InputDiv>
            <Input
              type="password"
              value={confirm}
              placeholder="비밀번호 확인"
              onChange={onSetConfirm}
            />
          </InputDiv>
          {state.password !== confirm && confirm && <CheckDiv>비밀번호가 일치하지 않습니다.</CheckDiv>}
          <ButtonDiv>
            <Link to={`SignUpDone/${name}`}>
              <Button
                disabled={!name || !state.id || !state.password || !confirm || state.password !== confirm}
              >
                확인
              </Button>
            </Link>
          </ButtonDiv>
        </MainTemplate>
      )}
    </UserConsumer>
  );
};

export default SignUp;
