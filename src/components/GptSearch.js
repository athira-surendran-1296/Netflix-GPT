import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div style={{ backgroundImage: `url(${BG_URL})` }} className="bg-cover bg-center h-screen w-full">
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearch