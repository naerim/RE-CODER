/*로그인 완료 페이지*/
import React from "react";
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

const TextDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #7408ba;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  margin-bottom: 20%;
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

const LoginDone = ({ match }) => {
    return (
        <MainTemplate>
            <TextDiv>{match.params.id}님이 로그인 하셨습니다!</TextDiv>
            <ButtonDiv>
                <Link to={"/"}>
                    <Button>로그아웃</Button>
                </Link>
            </ButtonDiv>
        </MainTemplate>
    );
};

export default LoginDone;