import React from 'react';
import classes from './FavoriteItem.module.css';

import Card from './Card';

const FavoriteItem = props =>{
    return <Card style={{ marginBottom: '1rem' }}>
        <div className={classes["favorite-item"]}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </div>
    </Card>;
}

export default FavoriteItem;