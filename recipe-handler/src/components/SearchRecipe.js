import React from 'react';
import {SearchRecipeCard, SearchRecipeButton, SearchIcon} from '../styles/SearchRecipeStyle'

const SearchRecipe = ({clickHandler}) =>  { 
  
    return (
      <SearchRecipeCard onClick={clickHandler}>
          <SearchRecipeButton>SEARCH <SearchIcon/> </SearchRecipeButton>
      </SearchRecipeCard>
    );
}


export default SearchRecipe;