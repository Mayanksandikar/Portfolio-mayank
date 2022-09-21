import React from 'react'
import Skill from '../Skill'
// import SocialContact from '../../Comman/Sco-contat/Index'
import "./cool.css"
const Cool = () => {
    return (
        <div className="about1">
          <center><h1 className="me1">AboutMe<div className="line1" ></div></h1>
          
          </center>  
            <div className="about-top1">
           
            <div className="about-photo1">
                    <img src={require("../../../Asset/about-me-guy.png")}
                    className="picture1" 
                    />

                 </div>
                 <div className="about-info1">
                 I'm a web designer & front-end developer. I'm interested in designing web, mobile & tablet interfaces. I also have skill like make a single page application.
               <br/>   <br/>  <br/> 
               {/* <div className="box1">
               Languages/Library/Technology
               <div className="techskill">
             
               </div>

                     </div> */}
                 </div>
               
                 
                
            
            </div>
           

      {/* <SocialContact /> */}
        </div>
    )
}

export default Cool
