import styled from "styled-components";

export const  AddRecipeFormContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    & #form__body {
        width: 60%;
    }
    & #form-group-1 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }
    & #form-group-2{
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }
    & #form-group-3 {
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }
    & #form__input-1 {
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
    }
    & #form__input-2 {
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
    }
    & #form__input-3 {
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
    }
    & #formTitle {
        font-size: 2em;
        font-weight: bold;
    }
    & #btn__container {
        align-self: center
    }
    & #form__label-1 {
        align-self: center;
    }
    & #form__label-2 {
        align-self: center;
    }
    & #form__label-3 {
        align-self: center;
    }
    & #error-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: red;
    }
    & #error-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: red;
    }
    & #error-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: red;
    }
`