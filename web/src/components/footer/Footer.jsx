import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <section id='footer'>
            <footer className="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">Ansh Raj Sharma</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Projects</a>
                        </li>

                        <li>
                            <a href="#achievements" className="footer__link">Achievements</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a href={`mailto:${process.env.REACT_APP_YOUR_EMAIL}`} className="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <i className="ri-mail-line"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/anshrs" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>
                        <a href="https://github.com/anshRS" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <i className="ri-github-fill"></i>
                        </a>
                    </div>

                    <span className='footer__copy'>
                        &#169; Ansh Raj Sharma. All rights reserved
                    </span>
                </div>
            </footer>
        </section>
    )
}

export default Footer
