'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const THEME_KEY = 'mavi-theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== 'undefined' ? localStorage.getItem(THEME_KEY) : null;
    const preferred = stored === 'dark' || stored === 'light' ? stored : 'light';
    setThemeState(preferred);
    document.documentElement.classList.toggle('dark', preferred === 'dark');
  }, []);

  function setTheme(value) {
    const next = value === 'dark' ? 'dark' : 'light';
    setThemeState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, next);
      document.documentElement.classList.toggle('dark', next === 'dark');
    }
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = { theme, setTheme, toggleTheme, mounted };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
