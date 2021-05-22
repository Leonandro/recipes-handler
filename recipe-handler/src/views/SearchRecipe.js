
import React from 'react';
import { useEffect, useState } from 'react';

import { SearchPageContainer, SearchIcon } from '../styles/SearchRecipePageStyle';
import ListRecipes from '../components/ListRecipes';
import useRecipes from '../components/recipesHook';


export const SearchRecipe = () => {
    const { recipes, renderData } = useRecipes();
    const [correspondRecipes, setCorrespondRecipes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(renderData, []);

    const filterRecipes = () => {
        if(inputValue !== ''){
            const matchedRecipes = recipes.filter(item => {
                let searchLowerCase = inputValue.toLowerCase();
                let recipeLowerCase = item.name.toLowerCase();
                return recipeLowerCase.includes(searchLowerCase)})
            if(matchedRecipes) {
                setCorrespondRecipes(matchedRecipes)
            }
        }
    }

    return(
        <SearchPageContainer>
            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <div id="searchPageBody">
                    <p id="formTitle">Please, enter the name of the recipe that you're looking for</p>
                    <div id="inputGroup">
                        <input id="PageInput" 
                                    placeholder="Ex: 10 Thousand Labels Cake"
                                    name="inputValue"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    ></input>
                        <button id="PageButton" onClick={filterRecipes}> <SearchIcon/> </button>
                    </div>
                    <h2>Below, we show all the recipes that matches the searched name</h2>
                </div>
            <ListRecipes data={correspondRecipes}></ListRecipes>
            </div>
    </SearchPageContainer>
    )
}