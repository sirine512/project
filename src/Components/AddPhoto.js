import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPhoto } from '../redux/toursSlice'

const AddPhoto = ({setShowModal,photo}) => {
    const [newPhoto, setNewPhoto] = useState({photo:""})
    const dispatch=useDispatch()
  return (
    <div className='addModal'>
        <div className='modal'>
        <button id='closeModal' onClick={()=>setShowModal(false)}>X</button>
        <input value={newPhoto.photo} type="text" placeholder='Photo URL...' id='inputBox' onChange={(e)=>setNewPhoto({...newPhoto,photo:e.target.value})}/>
       <button id='add' onClick={()=>{dispatch(addPhoto({...newPhoto,id:Math.floor(Math.random()*1000000000)}))
       setNewPhoto({photo:""}); setShowModal(false)}}> Add</button></div>
    </div>
  )
}
export default AddPhoto
