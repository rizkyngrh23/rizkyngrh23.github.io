import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getTheme = (mode: ThemeMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#ff6b6b',
    },
    background: {
      default: mode === 'dark' ? '#0a0a0a' : '#ffffff',
      paper: mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#000000',
      secondary: mode === 'dark' ? '#b0b0b0' : '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width: 900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      '@media (max-width: 900px)': {
        fontSize: '2rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width: 900px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '12px 28px',
          boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)',
          transition: 'all 0.3s ease',
          '@media (max-width: 600px)': {
            fontSize: '0.875rem',
            padding: '10px 20px',
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 25px rgba(100, 255, 218, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: mode === 'dark' 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '@media (max-width: 600px)': {
            borderRadius: 16,
          },
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)',
          },
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
