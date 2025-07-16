import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box, CircularProgress } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const Home = React.lazy(() => import('./components/Home'));
const Profile = React.lazy(() => import('./components/Profile'));
const Projects = React.lazy(() => import('./components/Projects'));
const Articles = React.lazy(() => import('./components/Articles'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#ff6b6b',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
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
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
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
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            '& .MuiInputBase-root': {
              fontSize: '0.875rem',
            },
            '& .MuiInputLabel-root': {
              fontSize: '0.875rem',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box
          sx={{
            background: 'radial-gradient(ellipse at top, rgba(100, 255, 218, 0.1), transparent), radial-gradient(ellipse at bottom, rgba(255, 107, 107, 0.1), transparent), linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            minHeight: '100vh',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)
              `,
              zIndex: -1,
            },
          }}
        >
          <Navbar />
          <Box sx={{ pt: { xs: 7, md: 8 } }}>
            <Suspense 
              fallback={
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  minHeight: '50vh' 
                }}>
                  <CircularProgress color="primary" />
                </Box>
              }
            >
              <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Box>
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
