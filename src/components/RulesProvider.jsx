import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

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

h2{
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 800;
  text-align: center;
}
p{
    font-size: 22px;
    font-weight: 500;
    user-select: none;
    padding: 4px;
    text-align: start;
}

    
`

export default RulesProvider
