import React from 'react'
import './moile.css'

function Mobile ({ isOpen,setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon"  onClick={()=> setIsOpen(!isOpen)}>
            <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
        <a href="#Aboutme">
        Aboutme
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skill">Skill</a>
      </div>
      <div className="mobile-option">
        <a href="#project">project</a>
      </div>
      <div className="mobile-option">
        <a href="contact">Contact </a>
      </div>

            </div>
            
        </div>
    )
}

export default Mobile
