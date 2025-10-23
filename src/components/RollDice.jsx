import React from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {

     


    

    



  return (
    <>
      <Rollmaincontainer>
         <div onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
         </div>
        <h3>Click on Dice to roll</h3>
      </Rollmaincontainer>
    </>
  )
}

export default RollDice

const Rollmaincontainer = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 200px;
            cursor: pointer;
        }
    }
    
`