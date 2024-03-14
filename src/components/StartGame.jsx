import React from "react";
import { useState } from "react";
import styled from "styled-components";

let Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;

  #content {
    width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
 
  #heroImage img{
    width: 500px;
  }
`;

let Button = styled.button`
  border: none;
  outline: none;
  color: white;
  background-color: black;
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;

  &:hover{
    background-color: white;
    color: black;
    font-weight: 700;
    font-size: 20px;

  }
`;


function StartGame() {
  return (
    <Container>
      <div id="heroImage">
        <img
          src="https://png.pngtree.com/background/20230525/original/pngtree-two-white-dice-on-a-black-background-with-scattered-dust-picture-image_2731976.jpg"
          alt=""
        />
      </div>
      <div id="content">
        <h1>Dice Game</h1>
        <Button>Start Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;
