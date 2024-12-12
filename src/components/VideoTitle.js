import React from 'react'
import { PLAY } from '../utils/constants';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-48 px-12 absolute bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-5xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/2 text-white'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black p-3 px-10 rounded-sm bg-opacity-80 border border-black flex gap-2 hover:bg-opacity-50'> 
                <img className='pt-1 w-5' src='https://icons.veryicon.com/png/o/internet--web/web-video-clip/play-332.png' />
                <span className='text-lg font-bold'>Play</span>
            </button>
            <button className='bg-gray-400 text-white p-3 px-6 rounded-sm bg-opacity-40 border border-gray-400 text-lg hover:bg-opacity-5'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;