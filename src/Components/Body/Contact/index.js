import React from 'react'
import { useState } from "react";

// import SocialContact from '../../Comman/Sco-contat/Index'
import "./contact.css"
const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
     console.log("data")
    
    }
    return (
        <div className="contact">
            <center><h2 className="contant-me ">Contact me <div className="line1" ></div> </h2> </center>
            <div className="let-contact">
                 <div className="contact-info">
                     <h2 className="head-contact">Let's connect</h2>
                     <div className="contact-contect">
                     Want to get in touch?  Contact me on any of the platform 
                     </div><br/>
                     <div className="contact-space">
                     <div className="icons-conact">
                     <img src={require("../../../Asset/email.png")}
                    className="picture2" 
                    /> 
                               
                     </div>
                     <div className="icons-conact2">
                     mayanksandikar191098@gmail.com
                     </div>
                     

                     </div> <br />
                     <div className="contact-space2">
                     <div className="icons-conact">
                     <img src={require("../../../Asset/phone-call.png")}
                    className="picture2" 
                    /> 
                               
                     </div>
                     <div className="icons-conact2">9527023361
                     </div>
                     

                     </div>
                     
                    
                 </div>
                 
                 <div className="contact-form">
                 <h2 className="heading-send">Send me a message</h2>
                     
                     <form className="form-good"  onSubmit={handleSubmit}>
                     <label>First & Last Name <span className="start">* </span>   </label> <br /> <br />
        <input
         className="input-gol"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     <br /> <br /> 
      <label>Phone number <span className="start">* </span>  </label> <br /> <br />
        <input
         className="input-gol"

          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
     <br /> <br /> 
      <label>Email address Message <span className="start">* </span>   </label> <br /> <br />
        <input
          type="text" 
         className="input-gol"

          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    <br /> <br />
      <label>Message <span className="start">* </span>   </label> <br /><br />
        <input
          type="text"
         className="input-gol"

          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /><br /><br />
       
       <center>  <label className="but-c" type="submit" >
         <input 
         type ="submit"
         type="submit"
         className="but-c"
         /></label></center> 



                     </form>
                

                 </div>
            
            </div>
      {/* <SocialContact /> */}
        </div>
    )
}

export default Contact
