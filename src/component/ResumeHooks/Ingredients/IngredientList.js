import React from 'react';
import classes from './IngredientList.module.css';

const IngredientList = React.memo(props => {

    return (
        <section className={classes["ingredient-list"]}>
            <h2>Loaded Ingredients</h2>
            <ul>
                {props.ingredients.map(ig => (
                    <li key={ig.id} onClick={props.onRemoveItem.bind(null, ig.id)}>
                        <span>{ig.title}</span>
                        <span>{ig.amount}x</span>
                    </li>
                ))}
            </ul>
        </section>
    );
});

export default IngredientList;