import React, { useEffect, useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './Search.module.css'

const Search = React.memo(props => {
    const {onLoadingIngredients} = props;
    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();

    useEffect(()=> {
        const timer = setTimeout(()=>{
            if(enteredFilter === inputRef.current.value){
                
                const query = enteredFilter.length === 0 
                    ? '' 
                    : `?orderBy="title"&equalTo="${enteredFilter}"`;
                fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/ingredients.json' + query)
                .then(response => response.json())
                .then(data => {
                    const loadedIngredientes = [];
                    for(const ing in data){
                        loadedIngredientes.push({
                            id: ing,
                            title: data[ing].title,
                            amount: data[ing].amount
                        });
                    }
        
                    onLoadingIngredients(loadedIngredientes);
                });
            }

            return ()=>{
                clearTimeout(timer);
            }
        },500);

    },[enteredFilter, onLoadingIngredients, inputRef])

    return (
        <section className={classes.search}>
            <Card>
                <div className={classes["search-input"]}>
                    <label>Filter by Title</label>
                    <input 
                        type="text"
                        value={enteredFilter}
                        onChange={event => setEnteredFilter(event.target.value)}
                        ref={inputRef}
                    />
                </div>
            </Card>
        </section>
    );
})

export default Search;