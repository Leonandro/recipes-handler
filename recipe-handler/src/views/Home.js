import { Link, useHistory } from "react-router-dom"
import React, { useState, useEffect }  from 'react';
import {HomeContainer} from '../styles/HomeStyle';
import Header from '../components/Header';
import ListRecipes from '../components/ListRecipes';
import AddRecipe from '../components/AddRecipe';
import SearchRecipe from '../components/SearchRecipe';
import useRecipes from '../components/recipesHook';
import {db} from '../firebase'

export const Home = () => {
    const history = useHistory();

    const { recipes, renderData, handleNewRecipe } = useRecipes();

    useEffect(renderData, []);


    function goToAddForm () {
        history.push("/addrecipeform");
    }

    function goToSearchPage () {
        history.push("/searchrecipepage");
    }


    return(
        < HomeContainer>
            <Header/>
            <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
                <AddRecipe clickHandler={goToAddForm}/>
                <SearchRecipe clickHandler={goToSearchPage}/>
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                <h2>Below, we show all the recipes we found in your kitchen.</h2>
                <ListRecipes data={recipes}/>
            </div>
        </HomeContainer>
    )
}