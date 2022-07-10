import styled, { css, keyframes } from "styled-components";
import MuiButton from '@mui/material/Button';



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const Title = styled.h1.attrs((props)=>({
  className: props.size === "large" ? "display-3" : ""
}))`
  padding: 4rem;
  background-color: azure;
  color: pink;
  text-align: center;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /* color: ${(props) => (props.primary ? "white" : "palevioletred")}; */

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  animation: ${rotate} 2s linear infinite;


  ${(props)=>css`ƒ
      background: ${props.primary ? "palevioletred" : "white"};
  
  `}

  /* color: ${(styledProps) => {
    console.log("styledProps", styledProps);
    return styledProps.primary ? "yellow" : "green";
  }} */

  color: ${(styledProps) => {
    console.log("styledProps", styledProps);

    switch (styledProps.color) {
      case "red":
        return "red";
      case "green":
        return "green";
      case "yellow":
        return "yellow";
      default:
        return "black";
    }
  }};
`;

export const ButtonSpecial = styled(MuiButton)`
background-color: white !important;
`;



export const InputCheckbox = styled.input.attrs({ type: "checkbox"
 })`
 background-color: red;
 
 `;
