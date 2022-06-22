import React from 'react'
import { useEffect, useState } from 'react';
import Character from './Character';

const PageContent = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <>
      <div className='character-list'>
        {characters.map(character => (
          <Character character={character} />
        ))}
      </div>
    </>
  )
}
}

export default PageContent