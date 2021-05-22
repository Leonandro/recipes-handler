import React from 'react';
import { useEffect, useState } from 'react';
import useRecipes from '../components/recipesHook';
import { ViewRecipeContainer } from '../styles/ViewRecipeStyle';


export const ViewRecipe = ({ match }) => {
    const recipeName = match.params.name;

    const { recipes, renderData } = useRecipes();
    const [correspondRecipes, setCorrespondRecipes] = useState([]);
    
    const filterRecipes = () => {
        if(recipeName !== ''){
            const matchedRecipes = recipes.filter(item => {
                return item.name.includes(recipeName)})
        
            if(matchedRecipes) {
                setCorrespondRecipes(matchedRecipes)
            }
        }
    }

    useEffect(renderData, []);
    useEffect(filterRecipes, [recipes]);

    return(
        <div>
            {correspondRecipes[0] ? 
                <ViewRecipeContainer>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                        <div id="ViewRecipeBody">
                            <p className="Title">Name</p>
                            {correspondRecipes[0].name}
                            <div className="Line" />

                            <p className="Title">Calories</p>
                            {correspondRecipes[0].calorias}
                            <div className="Line" />

                            <p className="Title">Recipe</p>
                            {correspondRecipes[0].recipe}
                            <div className="Line" />
                        </div>
                    
                    </div>  
                </ViewRecipeContainer>
                
                :
                null
            }
        </div>
       
    )
}