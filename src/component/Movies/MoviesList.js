import React from 'react';
import classes from './MoviesList.module.css';

import Movie from './Movie';

const MoviesList = props => {
    
    return <ul className={classes["movie-list"]}>
        {props.movies.map(movie => (<Movie 
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release}
            openingText={movie.openingText}
        />))}
    </ul>
}

export default MoviesList;