/*메인페이지*/
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

const MainTitle = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
  color: #6408ba;
  font-weight: bold;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Main = () => {
    return (
        <MainTemplate>
            <MainTitle>RE: Coder</MainTitle>
            <br/>
            <ButtonDiv>
                <Link to="login">
                    <Button>로그인</Button>
                </Link>
            </ButtonDiv>
            <ButtonDiv>
                <Link to="signUp">
                    <Button>회원가입</Button>
                </Link>
            </ButtonDiv>
            <br/>
        </MainTemplate>
    );
};

export default Main;