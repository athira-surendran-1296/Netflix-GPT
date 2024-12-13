import React, { useRef } from 'react'
import { LANGUAGE } from '../utils/lang';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS, getSearchMovieApi, GPT_QUERY } from '../utils/constants';

const GptSearchBar = () => {
  const selectedLang = useSelector(store => store.appConfig.lang);
  const searchTxt = useRef('');

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(getSearchMovieApi(movie), API_OPTIONS);
    const json = await data.json();
    return json.results;
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

    const dummyResult = 'Don, Sholay, Kio Mil Gaya, Zindagi Na Milegi Dobara, Golmal';
    const movieResult = dummyResult.split(',');
    console.log(movieResult);
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