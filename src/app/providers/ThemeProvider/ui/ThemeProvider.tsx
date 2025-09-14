import {
    FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC<ThemeProviderProps> = ({ children, initialTheme = Theme.LIGHT }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const [prevTheme, setPrevTheme] = useState<Theme | null>(null);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        if (prevTheme) {
            document.getElementById('root').classList.remove(prevTheme);
        }
        setPrevTheme(theme);
        document.getElementById('root').classList.add(theme);
    }, [theme, prevTheme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
