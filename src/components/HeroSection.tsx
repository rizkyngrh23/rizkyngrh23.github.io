import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        background: 'url(/path/to/your/background.jpg) no-repeat center center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{ py: 10 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" component="p">
            Discover my projects, articles, and more.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default HeroSection;
