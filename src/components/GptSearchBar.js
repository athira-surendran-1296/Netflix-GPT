import React from 'react'
import { LANGUAGE } from '../utils/lang';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const selectedLang = useSelector(store => store.appConfig.lang);
  return (
    <div className='flex justify-center items-center h-3/6'>
        <form className='bg-black flex gap-3 p-8 rounded-md w-6/12'>
            <input className='flex-1 p-2 rounded-md' type='text' placeholder= {LANGUAGE[selectedLang]?.searchPlaceholder} />
            <button className="border border-black bg-red-600 text-white rounded-md p-2 px-4">
                  {LANGUAGE[selectedLang]?.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;