import React from 'react'
// import Separator from '../../Comman/sperotor/Index'
import { SkillsData } from '../../Data/Skill'
import SkillCard from './SkillCard'
import './skill.css'
const Skill = () => {
        const  data =SkillsData

    return (
        <div className="skills">
            {/* <Separator /> */}
          <center> <h1 className="section-title">Skills<div className="line4" ></div></h1></center> 
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section"> 
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map(( skill )=> {
                                return(
                                    <SkillCard  skill= {skill} />
                                )
                                   
                        

                                
                            })}
                        </div>

                        </div>
                    )
                })}

            </div>
            
        </div>
    )
}

export default Skill
