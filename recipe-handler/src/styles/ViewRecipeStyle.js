
import styled from "styled-components";

export const  ViewRecipeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    & #ViewRecipeBody {
        width: 60%;
        text-align: center;
        
    }
    & .Title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }
    & .Line {
        margin-top: 2%;
        border-bottom: 1px solid;
        
    }
  
`