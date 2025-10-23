import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import Scorebox from './Scorebox'
import RollDice from './RollDice'
import { Button } from '../styled/Button'
import GameRules from './GameRules'

const GameStart = () => {


  const [score, setscore] = useState(0);

  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [Error, setError] = useState("");
  const [rules, setrules] = useState(false);


    const generateRandonNumber = (min, max) => {
       return(Math.floor(Math.random() * (max - min) ) + min);
    }

    const rollDice = () => {
        if(!selectedNumber){
          setError("You have not selected any number")
          return;
        };
        

        const randomNumber = generateRandonNumber(1, 7);

        setcurrentDice((prev) => randomNumber);



        if(selectedNumber == randomNumber){
          setscore((prev) => prev + randomNumber);
        }
        else{
          setscore((prev) => prev - 2)
        }

        setselectedNumber(undefined);
    }

    const resetScore = () => {
      setscore(0);
    }

    const togglerules = () =>{
      setrules((prev) => !prev);
    }


    



  return (
    <div className='AllGameStart'>

      
      <MainContainer>
        <div className="topSection">
          <TotalScore score={score}/>
          <Scorebox selectedNumber={selectedNumber} setselectedNumber={setselectedNumber} error = {Error} setError ={setError} />
        </div>

      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={togglerules} >{rules ? "Hide" : "Show"} rules</Button>
      </div>
    
      {rules && <GameRules /> }
      </MainContainer>
      
    </div>
  )
}

export default GameStart


const MainContainer = styled.div `
  padding: 20px;
  .topSection{
    display: flex;

    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }


`



