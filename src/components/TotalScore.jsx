import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <>
      <Container className="leftside">
          <h1>{score}</h1>
          <p>Total Score</p>
        </Container>

        <div className="rightside">
          
        </div>
    </>
  )
}

export default TotalScore


const Container = styled.div `

    padding-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1{
      font-size: 100px;
      height: 128px;
    }


`