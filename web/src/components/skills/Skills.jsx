import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
// import Core from './Core'
import Ai from './Al'

const Skills = () => {    

    return (
        <section className="skills section" id="skills"> 
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical strengths</span>

            {/* <Core /> */}

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Tools />
                <Ai />
            </div>
        </section>
    )
}

export default Skills
