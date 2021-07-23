import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './IngredientForm.module.css'
import LoadingIndicator from '../UI/LoadingIndicator';
const IngredientForm = React.memo(props => {
    const [form, setForm] = useState({
        title:'',
        amount:''
    });

    const inputChangeHandler = (elem, event) =>{
        const newState = {
            ...form,
            [elem]:event.target.value
        }
        setForm(newState);
    }

    const submitHandler = event =>{
        event.preventDefault();
        props.onAddIngredient({
            title: form.title,
            amount: form.amount
        });
    }

    return (
        <section className={classes["ingredient-form"]}>
            <Card>
            <form onSubmit={submitHandler}>
                <div className={classes["form-control"]}>
                    <label htmlFor="title">Name</label>
                    <input 
                        type="text" 
                        id="title"
                        value={form.title}
                        onChange={inputChangeHandler.bind(null,'title')} />
                </div>
                <div className={classes["form-control"]}>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={form.amount}
                        onChange={inputChangeHandler.bind(null,'amount')}/>
                </div>
                <div className={classes["ingredient-form__actions"]}>
                    <button type="submit">Add Ingredient</button>
                    {props.loading && <LoadingIndicator />}
                </div>
            </form>
            </Card>
        </section>
    );
})


export default IngredientForm;