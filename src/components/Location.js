import React from 'react'

const Location = (location) => {
  return (
    <div className="location-info">
      <h3>Location:</h3>
      <p>Name: {location?.location?.name}</p>
      <p>Type: {location?.location?.type}</p>
      <p>Dimension: {location?.location?.dimension}</p>
      <p># of Residents: {location?.location?.residents?.length}</p>
    </div>
  )
}

export default Location