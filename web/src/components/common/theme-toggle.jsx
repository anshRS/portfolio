import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './theme-provider';
import './theme.css'

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    }, [isDarkMode])

    return (
        <div onClick={toggleTheme} className='toggle'>
            { 
                isDarkMode 
                    ? <i class="ri-sun-line toggle__icon"></i> 
                    : <i class="ri-moon-line toggle__icon"></i>
            }
        </div>
    );
};

export default ThemeToggle;
