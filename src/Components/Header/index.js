import React, { useState } from 'react'
import './Hwder.css'
import Mobile from './Mobile/index'
import Web from './Web/index'
function Header() {

    const[isOpen,setIsOpen]=useState(false)
    return (
        <div className="header"> 
            <div className="myname"> Mayank Sandikar </div>

            <div className="menu">
                <div className="web-menu">
               
                
                    <Web />
                </div>


                <div className="mobile-menu">
                    <div onClick ={() => setIsOpen(!isOpen)} >
                    <i class="fa-solid fa-bars"></i>

                    </div>
                    {isOpen && <Mobile isOpen={ isOpen } setIsOpen={setIsOpen}  />}
                </div>
            </div>
        </div>
    )
}

export default Header
