import React from "react";
import Logo from "./assets/logo5.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  }

  body {
    // color: white;
    font-family: 'Roboto', sans-serif;
  }
`;

const MyDiv = styled.div`
  margin: 2em;
  border: 1px solid black;
  // box-shadow: 1px 1px 1px black;
  background-color: white;
  border-radius: 15px;
  width: 500px;
`;

const TitleBut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MyImg = styled.img`
  width: 500px;
  height: 500px;
`;

const MyP = styled.p`
  margin: 5px 5px 25px;
  width: 480px;
  font-size: 20px;
`;

const LilP = styled.p`
  margin: 5px 5px 0px;
  width: 480px;
  font-size: 15px;
`;

const MyTitle = styled.h1`
  margin: 5px;
  font-size: 40px;
`;

const MyButton = styled.button`
  border-radius: 8px;
  left: auto;
  right: auto;
  margin: 15px;
  font-size: $descFontSize;
  background-color: white;
  padding: 10px;
`;

function App() {
  return (
    <>
      <MyDiv>
        <GlobalStyle />
        <MyImg src={Logo} alt="" />
        <div>
          <TitleBut>
            <MyTitle>The cube (2023)</MyTitle>
            <MyButton>Spin it !</MyButton>
          </TitleBut>
          <MyP>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            libero, enim aperiam non illum similique cupiditate, sunt obcaecati,
            nihil vero a dicta! Eius, expedita voluptate.
          </MyP>
          <LilP>
            @CopyRight Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Soluta libero.
          </LilP>
        </div>
      </MyDiv>
    </>
  );
}

export default App;
