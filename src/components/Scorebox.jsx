import React from 'react'
import styled from 'styled-components'

const Scorebox = ({selectedNumber, setselectedNumber, error, setError}) => {

const arrNumber = [1,2,3,4,5,6];



console.log(selectedNumber)


const seterrorhandler = (value) => {
  setselectedNumber(value);
  setError("");
}

  return (
    
    <>
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className="boxflex">
        {
        arrNumber.map((value, i) => (
        <Box
          isSelected = {value == selectedNumber}
          onClick={() => seterrorhandler(value)} key={i}>{value}

        </Box>
        ))}
      </div>
      <p className='selectNumberText'>Select Number</p>
    </NumberSelectorContainer>
      

      
      
    </>
  )
}

export default Scorebox

const Box = styled.div`
    height: 72px;
    width: 72px;
    background-color: blue;
    border: 1px solid black;
    display: grid;
    place-items: center; 
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected? "black" : "white"};
    color: ${(props) => props.isSelected? "white" : "black"};
`

const NumberSelectorContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: end;


  .boxflex{
    display: flex;
    gap: 24px;
  }
  .selectNumberText{
    font-size: 20px;
    font-weight: 27px;
  }
  .error{
    color: red;

  }
`