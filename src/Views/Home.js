import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DestCardHome from '../Components/DestCardHome'
import TourCard from '../Components/TourCard'
import '../Style/style.css'
const Home = () => {
  const[showVideo,setShowVideo]=useState(false)
  const destinations=useSelector(store=>store.destination)
  const tours=useSelector(store=>store.tours)
  return (
    <>
    <div className='header'>
      <div id='header-content'>
        <p> Discover Your Best Destinations</p>
      <h1>The World Is Yours</h1>
      <button id='discover' onClick={()=> setShowVideo(true)}>Discover Now</button>
      {showVideo && <div className='showVideo'> 
      <button id='close' onClick={()=>setShowVideo(false)}>X</button>
      <iframe width="648" height="365" src="https://www.youtube.com/embed/7g3a_GqPo5E" frameborder="0" autoplay allowfullscreen></iframe></div>}
      </div>
    </div>
    <div className='popDest'>
      <div className='popDestCont'>
    <h1 id='pop'>Popular Destinations</h1></div>
    <div className='destHome'>
      {destinations.slice(0,3).map((dest,i) => (
        <DestCardHome key={i} dest={dest} />
      ))}
    </div>
    </div>
    <div className='popularTours'>
      <h1>Popular Tours</h1>
      <Link to={'/tours'}  id='view'>View All Tours</Link>
<div className='tourshome'>
  
</div>
    </div>
    </>
  )
}

export default Home
