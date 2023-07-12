import React from 'react'
import './header.css'

const Header = () => {

    // Active Link
    const navlink = document.querySelectorAll('.nav__link')

    function activeLink() {
        navlink.forEach((item) => item.classList.remove('active-link'))
        this.classList.add('active-link')
    }

    navlink.forEach((item) => item.addEventListener('click', activeLink))

    return (
        <>
            <nav className='nav'>
                <ul className='nav__list'>
                    <a href='#home' className='nav__link active-link' >
                        <i className="ri-home-5-line"></i>
                        <span className='nav__name'>
                            Home
                        </span>
                    </a>
                    <a href='#about' className='nav__link'>
                        <i className="ri-user-line"></i>
                        <span className='nav__name'>
                            About
                        </span>
                    </a>
                    <a href='#skills' className='nav__link'>
                        <i className="ri-shield-star-line"></i>
                        <span className='nav__name'>
                            Skills
                        </span>
                    </a>
                    <a href='#portfolio' className='nav__link'>
                        <i className="ri-image-line"></i>
                        <span className='nav__name'>
                            Portfolio
                        </span>
                    </a>
                    <a href='#contact' className='nav__link'>
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
