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
       <h1 id='pop'>Popular Destinations</h1>
       <Link to={'/destinations'}  id='viewDestinations'>View All Destinations</Link>
        <p>Discover new cultures, cuisines, and experiences as you journey to the world's most breathtaking destinations.</p>
      </div>
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
        {tours.slice(0,4).map((tour,i) => (
        <TourCard tour={tour} />
        ))}
      </div>
    </div>

    <div className='services'>
      <div className='sevice'> 
       <h1>TOURIST GUIDE</h1>
       <p>We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people with all necessary information any time he needs. This service is similar to Customer Support with emphasis on travelling.</p>
      </div>
      <div className='sevice'> 
       <h1>FLIGHTS TICKETS</h1>
       <p>You can book tickets on any plane online via our booking system. Here you have an opportunity to select your transport operator. Our representatives will help you with the details.</p>
      </div>
      <div className='sevice'> 
       <h1>BEST HOTELS</h1>
       <p>We guarantee the best hotels and very comfortable rooms, which will be appreciated by every traveller. You will be absolutely happy with the hotel and will have a wonderful vacation there.</p>
      </div>
    </div>

    <div className='post'></div>
    <div className='photosHome'>
      <h1>Best Shared Photos</h1>
      <Link to={'/galery'}  id='viewPhotos'>View All Photos</Link>
      <div className='photos' style={{marginTop:'-50px'}}>
      {tours.slice(0,6).map(tour=> <div className='sharedPhoto' > <img src={tour.photo} alt='sharedPhoto'/></div>)}
      </div>
    </div>

    </>
  )
}

export default Home
