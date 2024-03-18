import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  let [score,setScore]= useState(0);
  let [selectedNumber, setSelectedNumber] = useState();
  let [currentDice, setCurrentDice] = useState(1);
  let [error,setError] = useState("");
  let [showRules,setShowRules] = useState(false)
let click = () => {
  (()=>{setShowRules((prev)=>!prev) })()


}
  let randNum = (min, max) => {
    if (selectedNumber=== undefined){
      setError("You have not selected a number");
      return
    }
    
    let randomNumber = Math.random();

    let scaledNumber = randomNumber * (max - min + 1);
    let result = Math.floor(scaledNumber) + min;
    console.log(randomNumber, scaledNumber, result);
    setCurrentDice((prev)=> result)
    if(selectedNumber===result){
      setScore((prev)=> prev+result)

    }
    else{
      setScore((prev)=> prev-2)
    }
    setSelectedNumber(undefined)
  };
  return (
    <main>
      <TopContainer>
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}  error={error} setError={setError}/>
      </TopContainer>
      <BottomContainer>
        <div id="card">
          <div id="img">
            <img src={`/public/dice/dice_${currentDice}.png`} alt="diceImage" onClick={()=>randNum(1,6)} />
          </div>
          <p>Click on dice to roll</p>
          <button id="btn1" onClick={()=>{
            setScore(0)
          }}>Reset Score</button>
          <button id="btn2" onClick={click}>{showRules?"Hide":"Show"} Rules</button>
        <RulesContainer>
        {showRules &&  (<Rules/>)}
        </RulesContainer>
          
        </div>
      </BottomContainer>
    </main>
  );
}

export default GamePlay;
let RulesContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
right:400px;
top: 500px;
`

let BottomContainer = styled.div`
  height: calc(100vh - 171.33px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aquamarine; */
  #card {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
  }
  #card{
   #img{
    width: 190px;
    height: 190px;
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: center;
   }
  }
  #card  {
    #img{
      img{
        width: 190px;
    cursor: pointer;
      }

    }
  }
  #card  {
    p{
      font-size: 25px;
    font-weight: bolder;
    text-transform: capitalize;
    }
   
  }
  #card{

  #btn1{
    width: 120px;
    outline: none;
    padding: 8px 6px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 4px;
    color: black;
    background-color: white;
    font-size: 15px;
    white-space: nowrap;
    font-weight: bold;
  }
  }
  #card  {
    #btn2{
      width: 120px;
    outline: none;
    padding: 8px 6px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 4px;
    background-color: black;
    color: white;
    font-size: 15px;
    white-space: nowrap;
    font-weight: bold;
    }
  }
`;
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
`;
