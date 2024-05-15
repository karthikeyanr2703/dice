import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RulesProvider from "./RulesProvider";
import img1 from "../../public/dice/dice_1.png";
import img2 from "../../public/dice/dice_2.png";
import img3 from "../../public/dice/dice_3.png";
import img4 from "../../public/dice/dice_4.png";
import img5 from "../../public/dice/dice_5.png";
import img6 from "../../public/dice/dice_6.png";

function GamePlay() {
  let [score, setScore] = useState(0);
  let [selectedNumber, setSelectedNumber] = useState();
  let [currentDice, setCurrentDice] = useState(1);
  let [error, setError] = useState("");
  let [showRules, setShowRules] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6];

  let click = () => {
    setShowRules((prev) => !prev);
  };

  let randNum = (min, max) => {
    if (selectedNumber === undefined) {
      setError("You have not selected a number");
      return;
    }

    let randomNumber = Math.random();
    let scaledNumber = randomNumber * (max - min + 1);
    let result = Math.floor(scaledNumber) + min;
    console.log(randomNumber, scaledNumber, result);
    setCurrentDice(result);

    if (selectedNumber === result) {
      setScore((prev) => prev + result);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <TopContainer>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </TopContainer>
      <BottomContainer>
        <div id="card">
          <div id="img">
            <img
              src={images[currentDice - 1]}
              alt={`Dice ${currentDice}`}
              onClick={() => randNum(1, 6)}
            />
          </div>
          <p>Click on dice to roll</p>
          <button
            id="btn1"
            onClick={() => {
              setScore(0);
            }}
          >
            Reset Score
          </button>
          <button id="btn2" onClick={click}>
            {showRules ? "Hide" : "Show"} Rules
          </button>
        </div>
        <RulesContainer>
          {showRules && <RulesProvider />}
        </RulesContainer>
      </BottomContainer>
    </MainContainer>
  );
}

export default GamePlay;

let MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

let TopContainer = styled.div`
  width: 100vw;
  padding: 0 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }
`;

let BottomContainer = styled.div`
  height: calc(100vh - 171.33px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  #card {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
  }

  #card #img {
    width: 190px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #card #img img {
    width: 190px;
    cursor: pointer;
  }

  #card p {
    font-size: 25px;
    font-weight: bolder;
    text-transform: capitalize;
  }

  #card #btn1,
  #card #btn2 {
    width: 120px;
    outline: none;
    padding: 8px 6px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 4px;
    font-size: 15px;
    white-space: nowrap;
    font-weight: bold;
  }

  #card #btn1 {
    color: black;
    background-color: white;
  }

  #card #btn2 {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  
    gap: 15px;
    #card {
      width: 400px;
    }

    #card #img {
      width: 150px;
      height: 150px;
    }

    #card #img img {
      width: 150px;
    }

    #card p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    
    gap: 15px;
    #card {
      width: 300px;
    }

    #card #img {
      width: 120px;
      height: 120px;
    }

    #card #img img {
      width: 120px;
    }

    #card p {
      font-size: 18px;
    }
  }
`;

let RulesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
 
 
`;
