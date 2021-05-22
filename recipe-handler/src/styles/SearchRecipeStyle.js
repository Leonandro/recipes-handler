import styled from "styled-components";
import SearchSVG from '../assets/Search.svg'


export const SearchRecipeCard = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.5%;
    border: 2px solid;
    border-radius: 4px;
    width: 30%;
    padding: 0.4%;
    &:hover {
      background-color: #1289A7;
    }
`

export const SearchRecipeButton = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 4px;
    padding: 3%;
    font-size: 50px;
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
`

export const SearchIcon = styled.img.attrs(() => ({
    src: SearchSVG,
    alt: "Search Icon",
  }))`
    margin-left: 3%;
  `;