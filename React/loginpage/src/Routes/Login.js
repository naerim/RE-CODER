/*로그인 페이지*/
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainTemplate = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 6rem;
  border-radius: 4px;
  height: 350px;
  overflow: hidden;
  background: white;
`;

const LoginTitle = styled.div`
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
`;

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onsetId = (e) => {
        setId(e.target.value);
    };

    const onsetPassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <MainTemplate>
            <LoginTitle>로그인</LoginTitle>
            <InputDiv>
                <Input
                    value={id}
                    placeholder="아이디를 입력하세요"
                    onChange={onsetId}
                />
            </InputDiv>
            <InputDiv>
                <Input
                    type="password"
                    value={password}
                    placeholder="비밀번호를 입력하세요"
                    onChange={onsetPassword}
                />
            </InputDiv>

            <ButtonDiv>
                <Link to={`LoginDone/${id}`}>
                    <Button>확인</Button>
                </Link>
            </ButtonDiv>
        </MainTemplate>
    );
};

export default Login;