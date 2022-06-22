import React from 'react'
import { useEffect, useState } from 'react';
import Character from './Character';

const PageContent = () => {
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(
        (result) => {
          setCharacters(result.results);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
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