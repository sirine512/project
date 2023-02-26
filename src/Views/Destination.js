import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Destination = () => {
    const destinations =useSelector(store=>store.destination)
    const {id}=useParams()
  return (
    destinations.filter(destination=>destination.id===parseInt(id)).map(destination=>
    <div>
        <img src={destination.img}/>
    </div>)
  )
}

export default Destination
