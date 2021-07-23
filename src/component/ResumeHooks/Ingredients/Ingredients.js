import React, { useCallback, useMemo, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search'
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const initialIngredienteState = {
    ingredients: [],
    isLoading: false,
    error: null
}

const ingredientReducer = (state, actions) =>{
    switch(actions.type){
        case 'SET':
            return {
                ...state,
                ingredients: actions.ingredients
            }
        case 'ADD':
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    actions.ingredient
                ]
            }
        case 'DELETE':
            return {
                ...state,
                ingredients: state.ingredients.filter(ing => ing.id !== actions.id)
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: actions.isLoading
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: actions.error
            }
        default:
            throw new Error("Unknown ActionType");
    }
}

const Ingredients = () => {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, initialIngredienteState);

    // const [ingredients, setIngredients] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState()

    //We commented this peace of code because we are already doing this fetch in the Search component
    // useEffect(()=>{
    //     fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/ingredients.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const ingredientsLoaded = [];
    //         for(const ing in data){
    //             ingredientsLoaded.push({
    //                 id: ing,
    //                 title: data[ing].title,
    //                 amount: data[ing].amount
    //             });
    //         }

    //         setIngredients(ingredientsLoaded);
    //     });
    // },[])

    const filterIngredientsHandler = useCallback(filteredIngredients =>{
        // setIngredients(filteredIngredients);
        dispatch({type:'SET', ingredients:filteredIngredients})
    },[]);

    const addIngredientsHandler = useCallback(ingredient => {
        // setIsLoading(true);
        dispatch({type:'SET_IS_LOADING',isLoading:true})
        fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/ingredients.json',{
            method: 'POST',
            body: JSON.stringify(ingredient),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response => {
            // setIsLoading(false);
            dispatch({type:'SET_IS_LOADING',isLoading:false})
            return response.json();
        }).then(responseData => {
            // setIngredients(prevIngredient => [
            //     ...prevIngredient, 
            //     {
            //         id: responseData.name,
            //         ...ingredient
            //     }
            // ]);
            dispatch({type:'ADD',ingredient:{
                id: responseData.name,
                ...ingredient
            }})
        });

    },[]);

    const removeItem = useCallback((id) => {
        // setIsLoading(true)
        dispatch({type:'SET_IS_LOADING',isLoading:true})
        fetch(`https://react-http-64b0d-default-rtdb.firebaseio.com/ingredients/${id}.json`,{
            method: 'DELETE'
        }).then(response => {
            console.log("Success");
            if(response.ok){
                // setIngredients(prevIngredient => prevIngredient.filter(ig => ig.id !== id));
                dispatch({type:'DELETE',id: id});
            }
            else
                alert(`Deleting ${id} failed!`);
        }).catch(error => {
            console.log("Error");
            // setError("Something went wrong!");
            dispatch({type:'SET_ERROR', error:"Something went wrong!"})
        }).finally(() => {
            // setIsLoading(false);
            dispatch({type:'SET_IS_LOADING',isLoading:false})
        });
    },[]);

    const clearError = useCallback(( ) =>{
        // setError(null);
        dispatch({type:'SET_ERROR', error:null})

    },[]);

    const {ingredients} = userIngredients;
    const ingredientList = useMemo(()=>{
        return <IngredientList 
            ingredients={ingredients} 
            onRemoveItem={removeItem}
        />
    },[ingredients,removeItem])

    return (
        <div className="App">
            <br />
            {userIngredients.error && <ErrorModal onClose={clearError}>{userIngredients.error}</ErrorModal>}
            <IngredientForm 
                onAddIngredient={addIngredientsHandler} 
                loading={userIngredients.isLoading}
            />

            <section>
                <Search onLoadingIngredients={filterIngredientsHandler}/>
                {ingredientList}
            </section>
            <br />
        </div>
    );
}

export default Ingredients;