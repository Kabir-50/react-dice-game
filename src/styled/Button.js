import styled from 'styled-components'



export const Button = styled.button`
   
   border-radius: 5px;
   padding: 10px 67px;
   gap: 10px;
   background-color: black;
   color: white;
   border: 1px solid transparent;;
   font-size: 16px;
   /* margin-left: 200px; */
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