import React from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = props => {

  const {addToSavedList} = props.addToSavedList;

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        console.log(props.movies),
        <MovieDetails key={movie.id} movie={movie} addToSavedList={props.addToSavedList}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const movie = props.movie;
  const {addToSavedList} = props.addToSavedList;
  
  return (
    <Link to={`/movies/${movie.id}`}>
        <MovieCard movie={movie} addToSavedList = {addToSavedList}></MovieCard>
    </Link>
    
  );
}

export default MovieList;
