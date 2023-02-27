import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'
const DestCard = ({dest}) => {
  return (

    <div className='cardDest'>
        <img src={dest.img}/>
    <div className='destinationContent'>
    <div id='cardCont'>
    <h1>{dest.destination}</h1>
    <h2>{dest.desc}</h2>
    <Link to={`/destination/${dest.id}`}  id='view'>View Tours</Link>
    </div></div>
    </div>
  )
}

export default DestCard
