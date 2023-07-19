import React, { useEffect, useState } from 'react'
import './header.css'

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home')    

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {                    
                    setActiveNav('#'+ sectionId);
                    
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    
    
    return (
        <>
            <nav className='nav'>
                <ul className='nav__list'>
                    <a
                        href='#home'
                        onClick={() => setActiveNav('#home')}
                        className={
                            activeNav === '#home'
                                ? 'nav__link active-link'
                                : 'nav__link'
                        }
                    >
                        <i className="ri-home-5-line"></i>
                        <span className='nav__name'>
                            Home
                        </span>
                    </a>
                    <a
                        href='#about'
                        onClick={() => setActiveNav('#about')}
                        className={
                            activeNav === '#about'
                                ? 'nav__link active-link'
                                : 'nav__link'
                        }>
                        <i className="ri-user-line"></i>
                        <span className='nav__name'>
                            About
                        </span>
                    </a>
                    <a
                        href='#skills'
                        onClick={() => setActiveNav('#skills')}
                        className={
                            activeNav === '#skills'
                                ? 'nav__link active-link'
                                : 'nav__link'
                        }>
                        <i className="ri-shield-star-line"></i>
                        <span className='nav__name'>
                            Skills
                        </span>
                    </a>
                    <a
                        href='#portfolio'
                        onClick={() => setActiveNav('#portfolio')}
                        className={
                            activeNav === '#portfolio' || activeNav === '#achievements' || activeNav === '#qualification'
                                ? 'nav__link active-link'
                                : 'nav__link'
                        }>
                        <i className="ri-image-line"></i>
                        <span className='nav__name'>
                            Portfolio
                        </span>
                    </a>
                    <a
                        href='#contact'
                        onClick={() => setActiveNav('#contact')}
                        className={
                            activeNav === '#contact' || activeNav === '#footer'
                                ? 'nav__link active-link'
                                : 'nav__link'
                        }>
                        <i className="ri-mail-open-line"></i>
                        <span className='nav__name'>
                            Contact
                        </span>
                    </a>

                    <svg className='indicator' width="94" height="56" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="47" cy="28" rx="24" ry="28" />
                        <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z" />
                        <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z" />
                    </svg>
                </ul>
            </nav>
        </>
    )
}

export default Header
