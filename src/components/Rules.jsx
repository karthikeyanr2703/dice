import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function Rules() {
  return (
    <Container>
        <h2>Rules</h2>
        <p>Be Alert</p>
        <p>Be Cool</p>
        <p>Be Confident</p>

    </Container>
  )
}

export default Rules
let Container = styled.div`
width: 400px;
border-radius: 5px;
background-color: antiquewhite;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;


p{
    font-size: 22px;
    font-weight: 500;
    user-select: none;
}

    
`