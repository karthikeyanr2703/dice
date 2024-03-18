import React from 'react'
import styled from 'styled-components'

function TotalScore({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}
let ScoreContainer = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    /* background-color: lightskyblue; */
    h1{
        font-size: 90px;
    }
    p{
        font-size: 23px;
        font-weight: bolder;
        white-space: nowrap;
    }
`

export default TotalScore