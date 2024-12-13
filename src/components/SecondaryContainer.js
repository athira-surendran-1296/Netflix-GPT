import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movies)
  return (
    <div className='relative -mt-56 bg-gradient-to-t from-black'>
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies?.popularMovies} />
      <MovieList title={'Top Rated'} movies={movies?.topRatedMovies} />
    </div>
  )
}

export default SecondaryContainer;