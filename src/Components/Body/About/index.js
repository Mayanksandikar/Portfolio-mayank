import React from 'react'
// import SocialContact from '../../Comman/Sco-contat/Index'
import "./about.css"
const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                 <div className="about-info">
                 Hi, I am Mayank Sandikar.
                    <br />
                   <span className="end-front"> A Front-end Developer. </span><br /><br />
                   <div className="download">
                    <a download href= {require('../../../Asset/mayank.pdf')}>
                        download CV
                    </a>
                    </div>
                 </div>
               
                 <div className="about-photo">
                    <img src={require("../../../Asset/banner-guy.png")}
                    className="picture" 
                    />

                 </div>
            
            </div>
      {/* <SocialContact /> */}
        </div>
    )
}

export default About
