import React from 'react'
import About from './About/index'
import AboutMe from './Cool.js/index'
import './body.css'
import Contact from './Contact/index'
import Project from './Projects/Index'
import Skill from './Skill/index'
import Work from './Work/index'
import Resume from './Resume'
import Footer from './Footer'

const Body = () => {
    return (
        <div className="body">
            <section id="about" >
                <About />
            </section>
            <section id="aboutme" >
                <AboutMe />
            </section>
            <section id="skill"> <Skill /> </section>
            <section id="project"> <Project /> </section>

       <section id="resume"> < Resume /> </section>
            <section id="work"> <Work /> </section>
           
            <section id="contact"> <Contact /> </section>
            <section id="footer"> <Footer /> </section>
        </div>
    )
}

export default Body
