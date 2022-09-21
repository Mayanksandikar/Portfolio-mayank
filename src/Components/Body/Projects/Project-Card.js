import React from 'react'
import Projects from './Index'
import "./Project-card.css" 
const ProjectCard = ( { project }) => {
    return (
        <div className="project-card">  
                <a className= "project-link" href={project.demo} target="_blank">  <img src={project.image} className="project-photo" /></a>

             <div className="project-info">

                <label className="project-title" > { project.title } </label> 
      
            </div> 
            
                
        </div>
    )
}

export default ProjectCard
