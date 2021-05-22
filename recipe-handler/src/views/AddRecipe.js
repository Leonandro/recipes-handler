import React from 'react';
import { AddRecipeFormContainer } from '../styles/AddRecipeFormStyle';
import useRecipes from '../components/recipesHook';
import * as yup from "yup";
import { Formik } from 'formik';

export const AddRecipe = () => {

    const { handleNewRecipe } = useRecipes();

    const schema = yup.object().shape({
        recipeName: yup.string().required('The name of the recipe is required').min(3, 'The name of the recipe must have at least 3 letters'),
        recipeText: yup.string().required('The recipe is required').min(10, 'The recipe must have at least 10 letters')
    });


    return(
        <AddRecipeFormContainer>
       
            <div id="form__body">

                <Formik initialValues={{recipeName: '', recipeCalories: null, recipeText: ''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        handleNewRecipe({
                            recipeName: values.recipeName,
                            recipeCalories: values.recipeCalories,
                            recipeText: values.recipeText
                        })
                        alert('Nova receita cadastrada')
                    }}
                    >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => 
                    
                    (
                        <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                            <p id="formTitle">Please, input your recipe</p>
                            <div id="form-group-1">
                                <label id="form__label-1">Type the name of your recipe</label>
                                <input id="form__input-1" name="recipeName" placeholder="Ex: 10 Thousand Labels Cake"  onChange={handleChange} onBlur={handleBlur} value={values.recipeName} />
                                <div id="error-1">{(errors.recipeName && touched.recipeName) ? errors.recipeName : null} </div>
                            </div>

                            <div id="form-group-2">
                                <label id="form__label-2">Type the amount of the carbohydrates</label>
                                <input id="form__input-2" name="recipeCalories" inputMode="numeric" placeholder="Ex: 10000" onChange={handleChange} onBlur={handleBlur} value={values.recipeCalories} />
                            </div>

                            <div id="form-group-3">
                                <label id="form__label-3">Type how to do this recipe</label>
                                <input id="form__input-3" name="recipeText" placeholder="Ex: Boil 350ml of water, put the lamen inside, wait 3 minutes then, season."  onChange={handleChange} onBlur={handleBlur} value={values.recipeText} />
                                <div id="error-3">{(errors.recipeText && touched.recipeText) ? errors.recipeText : null} </div>
                            </div>

                            <button id="btn__container" type="submit">Submit!</button>
                        </form>
                    )
                    }
                </Formik>
            
            </div>
        </AddRecipeFormContainer>
        )
}