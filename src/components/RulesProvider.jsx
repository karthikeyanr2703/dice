import React from 'react'
import styled from 'styled-components'

function RulesProvider() {
  return (
    <Container>
        <h2>Rules</h2>
        <p>🎲 Select any number.</p>
        <p>🎲 Click on dice image.</p>
        <p>🎲 After clicking on the dice if selected number is equal to dice number you will get same point on dice and if you get wrong guess 2 points will be deducted.</p>
    </Container>
  )
}

let Container = styled.div`
  width: 400px;
  border-radius: 5px;
  background-color: antiquewhite;
  padding: 10px;
  margin-right: 30px;

  h2 {
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 800;
    text-align: center;
  }

  p {
    font-size: 22px;
    font-weight: 500;
    user-select: none;
    padding: 3px;
    text-align: start;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 300px;
    height: fit-content;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    padding: 8px;
    height: fit-content;
    margin-bottom: 40px;
  

    h2 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
  }
`

export default RulesProvider
