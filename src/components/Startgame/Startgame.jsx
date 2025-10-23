import React from 'react'
import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <>
      <Container>
        <div className="img">
            <img src="\images\dices 1.png" alt="" />
        </div>
        <div className="btn">
            <h1 className='text1'>Dice Game</h1>
            <Button1 onClick={toggle}>Play Now</Button1>
        </div>
      </Container>
    </>
  )
}

export default Startgame

const Container = styled.div`
    max-width: 1182px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;

    .btn{
        .text1{
            width: 528;
            height: 144;
            font-size: 70px;
        }
    }

`

const Button1 = styled.button`
   
   border-radius: 5px;
   padding: 10px 67px;
   gap: 10px;
   background-color: black;
   color: white;
   border: 1px solid transparent;;
   font-size: 16px;
   margin-left: 200px;
   transition: 0.4s background ease-in;

   &:hover{
    scale: 0.96;
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
   }

`
