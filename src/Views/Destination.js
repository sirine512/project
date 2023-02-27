import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TourCard from '../Components/TourCard'

const Destination = () => {
  const destinations=useSelector(store=>store.destination)
  const tours=useSelector(store=>store.tours)
  const {id}=useParams()
  return (
    <div className='destination'>
     {destinations.filter(destination => destination.id === parseInt(id)).map(destination => (
      <div key={destination.id} className='destination-header'>
        <img src={destination.img} alt={destination.name} />
        <div id='destination-header-content'>
        <h1>{destination.destination}</h1>
        <p>{destination.desc}</p></div>
      </div>
     ))}
     <div className='tours'>
        {tours.filter(tour => tour.destinationId === parseInt(id)).map((tour, i) => (
       <TourCard key={i} tour={tour} />
        ))}
      </div>
  </div>
  )
}

export default Destination
