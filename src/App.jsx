import React, { useState } from 'react'
import Startgame from './components/Startgame/Startgame';
import GameStart from './components/GameStart';


const App = () => {


const [isGameStart, setIsGameStart] = useState(false);

const ToggleGame = () => {
  setIsGameStart((prev) => !prev);
}



  return (
    <>
     
     {isGameStart ? <GameStart/> : <Startgame toggle = {ToggleGame} />}
    </>
  )
}

export default App



