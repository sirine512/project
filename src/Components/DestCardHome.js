import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'
const DestCardHome = ({dest}) => {
  return (
    <Link to={`/destination/${dest.id}`}  className='cardHome'>
    <img src={dest.img1} />
<div id='contentPop'>
<h3>{dest.destination}</h3>
<p>{dest.desc}</p>
</div>
</Link>
  )
}

export default DestCardHome
