import React from "react";
import { useState } from "react";
import styled from "styled-components";
import homeImg from "../../public/dice/dices.png";

let Container = styled.div`
  width: 100vw;
  height: 100vh;

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

  @media screen and (max-width: 768px) {
    
    /* For medium devices */
    flex-direction: column;
    #content #btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    #heroImage img {
      width: 280px; /* Adjust size for medium devices */
    }
  }

  @media screen and (max-width: 480px) {
    /* For small devices */

    flex-direction: column;
    gap: 60px;
    #heroImage img {
      width: 260px; /* Adjust size for small devices */
    }
    #content #btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    #content h1 {
      font-size: 44px; /* Adjust font size for small devices */
    }
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

  @media screen and (max-width: 480px) {
    /* Adjust button size for small devices */
    width: 150px;
    height: 30px;
    font-size: 14px;
  }
`;

function StartGame({ toggle }) {
  return (
    <Container>
      <div id="heroImage">
        <img src={homeImg} alt="Dice Game" />
      </div>
      <div id="content">
        <div id="textContainer">
          <h1>Dice Game</h1>
        </div>
        <div id="btnContainer">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
}

export default StartGame;
