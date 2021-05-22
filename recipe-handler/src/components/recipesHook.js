import { useState } from 'react'
import {db} from '../firebase'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);

  //Catch all the recipes on the dataBase
  const renderData = async () => {
    const snapshot = await db.collection("recipes").get();
      const loadingData = [];
      snapshot.forEach((doc) => {
        loadingData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setRecipes(loadingData);
      //console.log(recipes); 
  }

  //Add a new recipe on the dataBase
  const handleNewRecipe = async (newRecipe) => {

    if(newRecipe){
      await db.collection("recipes").add({
        name: newRecipe.recipeName,
        calorias: newRecipe.recipeCalories,
        recipe: newRecipe.recipeText
    })

      renderData();
    }
  }


  return { recipes, renderData, handleNewRecipe }
}