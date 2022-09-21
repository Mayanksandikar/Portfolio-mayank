import React from 'react'
// import Separator from '../../Comman/sperotor/Index'
import {ProjectData } from '../../Data/Projects'
import ProjectCard from './Project-Card'

import './project.css'
const Projects = () => {
    const data = ProjectData

    return (
        <div className="projects">
            {/* <Separator /> */}
            <label className="section-title"></label>
            <center><h1 className="section-title">Project <div className="line3" ></div></h1></center>

          
        <div className="ff"> 
            {data.map((project) =>{
                return <ProjectCard project={project}/>
            })}
        </div>
            
        </div>
    )
}

export default Projects
