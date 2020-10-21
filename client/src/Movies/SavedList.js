import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom'

const SavedList = props => (


  <div className="saved-list">
    <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
      ))}
      <Link to="/">Home</Link>
  </div>
)

export default SavedList;
