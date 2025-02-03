import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', py: 3, mt: 4 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 2 }}>
          <IconButton href="https://github.com/rizkyngrh23" target="_blank" color="inherit">
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/rizkyngrh23" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://twitter.com/rizkyngrh23" target="_blank" color="inherit">
            <Twitter />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Rizky Portfolio Website
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
