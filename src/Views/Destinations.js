import React from 'react'
import { useSelector } from 'react-redux'
import DestCard from '../Components/DestCard'
import '../Style/style.css'

const Destinations = () => {
  const destinations=useSelector(store=>store.destination)
  return (
    <>
    <div className='destHeader'>

    </div>
    <div className='destCards'>
      {destinations.map((dest,i) => (
        <DestCard key={i} dest={dest} />
      ))}
    </div></>
  )
}

export default Destinations
