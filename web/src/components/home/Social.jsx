import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href={`mailto:${process.env.REACT_APP_YOUR_EMAIL}`} className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="ri-mail-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/anshrs" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://github.com/anshRS" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill"></i>
            </a>
        </div>
    )
}

export default Social
