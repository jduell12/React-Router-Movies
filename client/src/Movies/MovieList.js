import React from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom'
import MovieCard from './MovieCard'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  const {url} = useRouteMatch();
  
  return (
    <Link to={`/movies/${movie.id}`}>
        <MovieCard movie={movie}></MovieCard>
    </Link>
    
  );
}

export default MovieList;
