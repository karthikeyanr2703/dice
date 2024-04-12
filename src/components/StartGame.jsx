import React from "react";
import { useState } from "react";
import styled from "styled-components";
import homeImg from "../../public/dice/dices.png";

let Container = styled.div`
  width: 100vw;
  height: 100vh;

  /* background-color: lightseagreen; */
  display: flex;
  align-items: center;
  justify-content: center;

  #content {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #content h1 {
    font-size: 80px;
    margin-bottom: 12px;
    text-transform: uppercase;
    white-space: nowrap;
  }
  #content #textContainer {
    width: 100%;
    text-align: end;
  }
  #content #btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #heroImage img {
    width: 470px;
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
  font-size: 16px;
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: border 0.08s linear;

  &:hover {
    background-color: white;
    color: black;
    font-weight: 700;
    font-size: 16px;
    border: 2px solid black;
  }
`;

function StartGame({ toggle }) {
  return (
    <Container>
      <div id="heroImage">
        <img src={homeImg} />
      </div>
      <div id="content">
        <div id="textContainer">
          {" "}
          <h1>Dice Game</h1>
        </div>
        <div id="btnContainer">
          {" "}
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
}

export default StartGame;
