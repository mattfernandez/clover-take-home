import React, {useState, useEffect} from 'react'
import Location from './Location'

const Character = (character) => {
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState([]);

  const locationUrl = character.character.location.url;

  useEffect(() => {
    fetch(locationUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLocation(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  const buttonClick = () =>{
    setIsOpen(!isOpen)
  }




  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={isOpen ? 'character open' : 'character closed'} onClick={buttonClick}>
        <h2>{character?.character?.name}</h2>
        <div className="character-info">
          <img src={character?.character?.image} alt="" />
          <div>
            <p>Status: <span class={character?.character?.status === "Alive" ? "alive" : "dead"}>{character?.character?.status}</span></p>
            <p>Species: {character?.character?.species} {character?.character?.species === "Alien" ? "👽" : "🕺"}</p>
            {/* <div className="location-info">
              <h3>Location:</h3>
              <p>Name: {location?.name}</p>
              <p>Type: {location?.type}</p>
              <p>Dimension: {location?.dimension}</p>
              <p># of Residents: {location?.residents?.length}</p>
            </div> */}
            <Location location={location}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Character