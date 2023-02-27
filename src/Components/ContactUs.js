import React from 'react'
import '../Style/style.css'

const ContactUs = ({setShowContact}) => {
  return (
    <div className="showContact">
      <div className='contactContent'>
    <button id='close-btn' onClick={()=>setShowContact(false)}>X</button>
    </div>

    </div>
  )
}

export default ContactUs
