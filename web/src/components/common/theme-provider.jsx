import React, { createContext } from 'react';
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", preference);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
