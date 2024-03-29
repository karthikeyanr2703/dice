import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({selectedNumber,setSelectedNumber,error,setError}) {
  let arr = [1, 2, 3, 4, 5, 6];
 

  return (
    <MainContainer>
       <p id="error">{error}</p>
      <SelectorContainer>
       
        {arr.map((val) => (
          <Box
            isSelecting={val === selectedNumber}
            key={val}
            id={val}
            onClick={() => {
              setSelectedNumber(val);
              setError("")
            }}
          >
            {val}
          </Box>
        ))}
      </SelectorContainer>
      <TextContainer>
        <h2>Select Number</h2>
      </TextContainer>
    </MainContainer>
  );
}

export default NumberSelector;
let MainContainer = styled.main`
  width: 347.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #error{
    font-size: 18px;
    color: red;
    font-weight: 600;
    white-space: nowrap;
    padding-bottom: 5px;
    user-select: none;
  }
`;
let TextContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

let SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5px;
`;
let Box = styled.div`
  height: 55px;
  width: 55px;
  border: 2px solid black;
  font-size: 20px;
  font-weight: bolder;
  color: ${(props) => (props.isSelecting ? "white" : "black")};
  background-color: ${(props) => (props.isSelecting ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
