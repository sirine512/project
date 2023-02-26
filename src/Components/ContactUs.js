import React from 'react'
import '../Style/style.css'

const ContactUs = ({setShowContact}) => {
  return (
    <div className="showContact">
    <button id='close-btn' onClick={()=>setShowContact(false)}>X</button>

    </div>
  )
}

export default ContactUs
