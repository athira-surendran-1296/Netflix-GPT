import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants';

const MovieCard = ({title, poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='flex-shrink-0 flex-grow-0 basis-auto'>
      {/* <div>{title}</div> */}
      <div>
        <img className='w-40' alt={title} src={IMAGE_CDN_URL + poster_path} />
      </div>
    </div>
  )
}

export default MovieCard;