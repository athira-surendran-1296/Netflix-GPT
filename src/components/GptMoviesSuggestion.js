import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMoviesSuggestion = () => {
  const { moviesNames, seachResult } = useSelector(store => store.gpt);

  if(!moviesNames) return null;

  return (
    <div className='p-4 bg-black text-white'>
      {moviesNames.map((movie, idx) => <MovieList key={movie} title={movie} movies={seachResult[idx].results} />)}
    </div>
  )
}

export default GptMoviesSuggestion;