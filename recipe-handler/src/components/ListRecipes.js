import React from 'react';
import {CustomList, CustomCard} from '../styles/ListRecipesStyle';
import { useHistory } from 'react-router-dom';

const ListRecipes = ({data}) =>  {
    const history = useHistory();

    const navToRecipe = (recipeName) => {
      history.push(`/viewrecipe/${recipeName}`)
    }
    return (
      <CustomList>
          {data.map(function(item) {
              return <CustomCard onClick={() => navToRecipe(item.name)}>{item.name}</CustomCard>;
          })}
      </CustomList>
    );
}


export default ListRecipes;