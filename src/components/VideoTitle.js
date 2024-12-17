import React from 'react'
import { PLAY } from '../utils/constants';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-16 lg:pt-60 px-6 md:px-12 absolute md:bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-xl md:text-5xl font-bold text-white'>{title}</h1>
        <p className='hidden md:block py-6 text-lg w-11/12 text-white'>{overview}</p>
        <div className='mt-1 flex gap-2'>
            <button className='bg-white text-black p-1 md:p-3 px-5 md:px-10 rounded-sm bg-opacity-80 border border-black flex gap-2 hover:bg-opacity-50'> 
                <img className='pt-1 w-5' src={PLAY} />
                <span className='text-lg font-bold'>Play</span>
            </button>
            <button className='hidden md:block bg-gray-400 text-white p-1 md:p-3 px-3 md:px-6 rounded-sm bg-opacity-40 border border-gray-400 text-lg hover:bg-opacity-5'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;