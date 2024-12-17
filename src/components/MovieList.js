import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  
  return (
    <div className='p-5'>
      <h1 className='text-white py-3 text-xl font-bold'>{title}</h1>
      <div className='md:px-3'>
        <div className='flex gap-3 overflow-y-auto'>
          {
            movies && movies.map(movie => <MovieCard key={movie.id} {...movie}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList;