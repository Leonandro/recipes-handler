import styled from "styled-components";
import SearchSVG from '../assets/Search-very-small.svg'

export const  SearchPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    & #searchPageBody {
        width: 60%;
    }
    & #inputGroup {
        display: flex;
        flex-direction: row;
    }
    & #PageInput{
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
        margin-bottom: 10%;
        width: 80%;
    }
    & #PageButton {
        align-items: center;
        border: 2px solid;
        border-radius: 5px;
        width: 10%;
        margin-left: 2%;
        margin-bottom: 10%;
        padding-top: 0.1%;
        cursor: pointer;
    }
    & #PageButton:hover {
        background-color: #A3CB38;
    }
    & #formTitle {
        font-size: 2em;
        font-weight: bold;
    }
  
`

export const SearchIcon = styled.img.attrs(() => ({
    src: SearchSVG,
    alt: "Search Icon",
  }))`
  `;