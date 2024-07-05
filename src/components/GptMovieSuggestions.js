import React from 'react'
import { useSelector } from 'react-redux'
import MoveList from './MovieList'

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector(store=> store.gpt);
  if(!movieNames) return movieNames;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movieName,index)=><MoveList key={movieName} title={movieName} movies={movieResults[index]}/>)}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestions