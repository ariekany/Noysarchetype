import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

// Global state for theme sharing
let globalTheme: Theme = (typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme) : 'system') || 'system';
const listeners = new Set<(theme: Theme) => void>();

function notifyListeners() {
  listeners.forEach(listener => listener(globalTheme));
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(globalTheme);
  const [isDark, setIsDarkState] = useState(false);

  const getIsDark = (t: Theme) => {
    if (t === 'system') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return t === 'dark';
  };

  const applyTheme = (t: Theme) => {
    const dark = getIsDark(t);
    setIsDarkState(dark);
    
    if (typeof document !== 'undefined') {
      if (dark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-bs-theme', 'light');
      }
    }
  };

  useEffect(() => {
    const handleChange = (newTheme: Theme) => {
      setThemeState(newTheme);
      applyTheme(newTheme);
    };

    listeners.add(handleChange);
    applyTheme(globalTheme);

    // Watch system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (globalTheme === 'system') applyTheme('system');
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    
    return () => {
      listeners.delete(handleChange);
      mediaQuery.removeEventListener('handleSystemChange', handleSystemChange);
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    globalTheme = newTheme;
    localStorage.setItem('theme', newTheme);
    notifyListeners();
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return { theme, setTheme, toggleTheme, isDark };
}
