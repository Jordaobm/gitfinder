import React, { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ContextThemeData {
    toggleTheme(): void;
    theme:DefaultTheme;
}

const ContextTheme = createContext<ContextThemeData>({} as ContextThemeData);

const ContextThemeProvider: React.FC = ({ children }) => {

    const [theme, setTheme] = useState(()=>{
        const localTheme = localStorage.getItem('@gitfinder:theme');
        if(localTheme){
            const parsed = JSON.parse(localTheme);
            return parsed;
        }
        return light
    });

    const toggleTheme = useCallback(() => {
        setTheme(theme.title === 'light' ? dark : light);
    }, [theme.title])

    localStorage.setItem('@gitfinder:theme', JSON.stringify(theme))

    return (
        <ContextTheme.Provider value={{ toggleTheme, theme }}>
            <ThemeProvider theme={theme}>
                {children}
                <GlobalStyle/>
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}

function useContextTheme():ContextThemeData {
    const context = useContext(ContextTheme);
    return context
}

export {useContextTheme, ContextThemeProvider}