import { useState } from 'react'
import styled from "styled-components";
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';




function App() {
  let [isGameStarted, setIsGameStarted] =useState(false);
  let toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted? <GamePlay/>: <StartGame toggle={toggleGamePlay}/>}
   {/* <StartGame/> */}

 
    </>
  )
}

export default App
