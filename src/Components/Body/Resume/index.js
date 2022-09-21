import React from 'react'
// import SocialContact from '../../Comman/Sco-contat/Index'
import "./resume.css"
const Resume = () => {
    return (
        <div className="resume">
             <center><h1 className="work-resume">Eduction <div className="line2" ></div></h1></center>
            <div className="resume-top">
            <div className="vn-resume">
              <div className="v-resume">

            
                 <div className="text-data">
                     <div className="uni1">Savitribai Phule Pune University</div>
                     <div className="mcs"> Master of Computer Science</div>
                </div>
                <div className="year"> 2019-2021</div>
                
                </div> <br /><br />
                <div className="v-resume">

            
<div className="text-data">
    <div className="uni1">Dr. Babasaheb Ambedkar Marathwada University</div>
    <div className="mcs"> Bachelor of Computer Science</div>
</div>
<div className="year1"> 2016-2019</div>

</div>


               
                </div>
                 
                 <div className="about-photo">
                    <img src={require("../../../Asset/resume-guy-img.png")}
                    className="picture" 
                    />

                 </div>
                 
                
                 </div>
            
               {/* <SocialContact /> */}
            </div>
   
      
    )
}

export default Resume
