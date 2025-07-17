import React from 'react';
import { Box, Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      position: 'relative',
    }}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(100, 255, 218, 0.05) 0%, transparent 30%)
          `,
          zIndex: -2,
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
      
      <Fab
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          background: 'linear-gradient(45deg, #64ffda 30%, #4fc3f7 90%)',
          color: '#000',
          zIndex: 1000,
          '&:hover': {
            background: 'linear-gradient(45deg, #4fc3f7 30%, #64ffda 90%)',
            transform: 'scale(1.1)',
          },
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpward />
      </Fab>
    </Box>
  );
};

export default MobileLayout;
