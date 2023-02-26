import React from 'react'
import '../Style/style.css'
const DestCardHome = ({dest}) => {
  return (
    <div className='cardHome'>
    <img src={dest.img1} />
<div id='contentPop'>
<h3>{dest.destination}</h3>
<p>{dest.desc}</p>
</div>
</div>
  )
}

export default DestCardHome
