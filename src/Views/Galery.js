import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import AddPhoto from '../Components/AddPhoto'


const Galery = () => {
  const[showModal,setShowModal]=useState(false)
  const tours=useSelector(store=>store.tours)
  return (
    <>
      <div className='galeryHeader'>
        <h1>Share Your Adventure </h1> 
      </div>
      <div className='photos'>
      {tours.map(tour=> <div className='sharedPhoto'> <img src={tour.photo} alt='sharedPhoto'/></div>)}
      <div className='addPhoto' onClick={()=> setShowModal(true)} >
        <img src='https://cdn-icons-png.flaticon.com/128/1665/1665731.png'/>
      </div>
      {showModal && <AddPhoto  setShowModal={setShowModal}/>}
      </div>
    </>
  )
}

export default Galery
