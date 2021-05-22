
import styled from "styled-components";
import AddSVG from '../assets/Plus.svg'

export const AddRecipeCard = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.5%;
    border: 2px solid;
    border-radius: 4px;
    width: 30%;
    padding: 0.4%;
    &:hover {
      background-color: #A3CB38;
    }
`

export const AddRecipeButton = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 4px;
    font-size: 50px;
    padding: 3%;    
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
`

export const AddIcon = styled.img.attrs(() => ({
    src: AddSVG,
    alt: "Add Icon",
  }))`
    margin-left: 3%;
  `;