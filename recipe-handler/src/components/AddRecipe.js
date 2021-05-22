
import React from 'react';
import {AddRecipeCard, AddRecipeButton, AddIcon} from '../styles/AddRecipeStyle';

const AddRecipe = ({clickHandler}) => {
    return (
      <AddRecipeCard onClick={clickHandler}>
            <AddRecipeButton>ADD <AddIcon/></AddRecipeButton>
      </AddRecipeCard>
    );

}


export default AddRecipe;