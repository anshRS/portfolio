import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="ri-medal-line about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Fresher</span>
            </div>

            <div className="about__box">
                <i className="ri-briefcase-line about__icon"></i>                
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">Projects</span>
            </div>

            <div className="about__box">
                <i className="ri-funds-line about__icon"></i>                
                <h3 className="about__title">GitHub</h3>
                <span className="about__subtitle">250+ Contributions</span>
            </div>
        </div>
    )
}

export default Info
