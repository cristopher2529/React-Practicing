import React, { useCallback, useEffect, useState } from 'react';
import classes from './HTTPRequest.module.css';

import MovieList from '../../component/Movies/MoviesList';
import AddMovie from '../../component/Movies/AddMovie';

const HTTPRequest = () => {

    const [movies,setMovies] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState(null)

   
    
    // const dummyMovies = [
    //     {
    //       id: 1,
    //       title: 'Some Dummy Movie',
    //       openingText: 'This is the opening text of the movie',
    //       releaseDate: '2021-05-18',
    //     },
    //     {
    //       id: 2,
    //       title: 'Some Dummy Movie 2',
    //       openingText: 'This is the second opening text of the movie',
    //       releaseDate: '2021-05-19',
    //     },
    //   ];

    const fetchMoviesHandler = () => {
          fetch('https://swapi.dev/api/films/').then(response => {
            console.log("FetchData Response ",response);
            return response.json();
          }).then(jsonResponse => {
              console.log("FetchData JSONResponse ",jsonResponse);
              const transformedMovies = jsonResponse.results.map(movieData => {
                  return {
                  'id': movieData.episode_id,
                  'title': movieData.title,
                  'openingText': movieData.opening_crawl,
                  'releaseDate': movieData.release_Date
                }
            })
              setMovies(transformedMovies)
          });
      }

    const fetchMoviesHandlerAsync = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            // const response = await fetch('https://swapi.dev/api/films/');
            const response = await fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/movies.json');
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            const data = await response.json();
            // console.log(data);

            const loadedMovies = []
            for(const key in data){
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                });
            }

            setMovies(loadedMovies)

            // const transformedMovies = data.results.map(movieData => {
            //     return {
            //         'id': movieData.episode_id,
            //         'title': movieData.title,
            //         'openingText': movieData.opening_crawl,
            //         'releaseDate': movieData.release_Date
            //     }
            // })
            // setMovies(transformedMovies)
        } catch (error) {
            setError(error.message)
        }

        setIsLoading(false)
    },[])

    useEffect(() => {
        fetchMoviesHandlerAsync()
    },[fetchMoviesHandlerAsync])

    const addMovieHandler = async movie => {
        // console.log(movie);
        setIsLoading(true);
        try {
            const response = await fetch('https://react-http-64b0d-default-rtdb.firebaseio.com/movies.json',{
                method:'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-type':'application/json'
                }
            })
    
            const data = await response.json();
            // console.log(data);
            fetchMoviesHandlerAsync()
            
        } catch (error) {
            setError(error.message)
        }

        setIsLoading(false)
    }

    let content = <h1>Found no movies.</h1>
    if(error)
        content = <h1>{error}</h1>
    else if(isLoading)
        content = <h1>Loading</h1>
    else if(movies.length > 0 )
        content = <MovieList movies={movies}/>
    


    return(
        <React.Fragment >
            <section className={classes.section}>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section className={classes.section}>
                <button className={classes.button} onClick={fetchMoviesHandlerAsync}>Fetch Movies</button>
            </section>
            <section className={classes.section}>
                {content}
                {/* {!isLoading && movies.length > 0  && <MovieList movies={movies}/>}
                {!isLoading && !error && movies.length === 0 && <h1>Found no movies.</h1>}
                {!isLoading && error && <h1>{error}</h1>}
                {isLoading && <h1>Loading...</h1>} */}
            </section>
        </React.Fragment>
    )
}

export default HTTPRequest;