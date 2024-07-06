import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className='md:w-screen h-screen object-cover' src={BG_IMAGE} alt='logo'/>
    </div>
    <div className=''>    
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearch