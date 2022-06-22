import React, {useState, useEffect} from 'react'
import Location from './Location'

const Character = (character) => {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null);
  const [location, setLocation] = useState([]);

  const locationUrl = character.character.location.url;

  useEffect(() => {
    fetch(locationUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setLocation(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])
  
  const buttonClick = () =>{
    setIsOpen(!isOpen)
  }




  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className={isOpen ? 'character open' : 'character closed'} onClick={buttonClick}>
        <h2>{character?.character?.name}</h2>
        <div className="character-info">
          <img src={character?.character?.image} alt="" />
          <div>
            <p>Status: <span className={character?.character?.status === "Alive" ? "alive" : "dead"}>{character?.character?.status}</span></p>
            <p>Species: {character?.character?.species} {character?.character?.species === "Alien" ? "👽" : "🕺"}</p>
            <Location location={location}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Character