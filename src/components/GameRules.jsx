import React from 'react'
import styled from 'styled-components'

const GameRules = () => {
    
  return (
    <>
      <Rules>
        <div className="rulesContent">
          <h1>How to play dice game</h1>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
          <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
      </Rules>
    </>
  )
}

export default GameRules




const Rules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .rulesContent{
    background-color: #FBF1F1;
    padding: 20px;
    

    p{
      font-size: 16px;
    }
  }
    
`