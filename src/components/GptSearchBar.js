import React, { useRef } from 'react'
import { LANGUAGE } from '../utils/lang';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS, getSearchMovieApi, GPT_QUERY } from '../utils/constants';
import { addGptMovies } from '../utils/store/slices/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector(store => store.appConfig.lang);
  const searchTxt = useRef('');

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const searchResult =  await fetch(getSearchMovieApi(movie), API_OPTIONS);
    const searchResultJson = await searchResult.json();
    return searchResultJson;
  }; 

  const handleGptSearchClick = async () => {
    // console.log('search text', searchTxt.current.value);
    const gptQuery = GPT_QUERY + searchTxt.current.value;

    /*const gptResultsCompletion =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log('gptResultsCompletion', gptResultsCompletion)
    */

    const dummyResult = 'Andaz Apna Apna, 3 Idiots,  Phir Hera Pheri, Garam Masala, Dhamaal';
    const movieResult = dummyResult.split(',').map(m => m.trim());
    //console.log(movieResult);

    const result = await Promise.all(movieResult.map(m => searchMovieTMDB(m)));
    //console.log(result)

    dispatch(addGptMovies({moviesNames: movieResult, seachResult: result}));
  }

  return (
    <div className='flex justify-center items-center h-3/6'>
        <form onSubmit={(e) => e.preventDefault()} 
              className='bg-black flex gap-3 p-8 rounded-md w-6/12'>
            <input ref={searchTxt} className='flex-1 p-2 rounded-md' type='text' placeholder= {LANGUAGE[selectedLang]?.searchPlaceholder} />
            <button className="border border-black bg-red-600 text-white rounded-md p-2 px-4" onClick={handleGptSearchClick}>
                  {LANGUAGE[selectedLang]?.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;