import React from 'react';
import { Box, Typography, Container, IconButton, Grid, Link } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email, LocationOn } from '@mui/icons-material';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/rizkyngrh23', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/rizkyngrh23', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/rizkyngrh23', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: 'Home', url: '/home' },
    { label: 'Profile', url: '/profile' },
    { label: 'Projects', url: '/projects' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(100, 255, 218, 0.2)',
        py: { xs: 4, md: 6 },
        mt: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: 1, md: 2 },
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                Rizky Portfolio
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  maxWidth: { xs: '100%', md: 300 },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                GIS Specialist & Software Developer passionate about creating innovative solutions and exploring new technologies.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'rgba(100, 255, 218, 0.1)',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    color: '#64ffda',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(100, 255, 218, 0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(100, 255, 218, 0.3)',
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
                color: '#64ffda',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, md: 1 } }}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    py: 0.5,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': {
                      color: '#64ffda',
                      transform: 'translateX(5px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 1,
                      background: '#64ffda',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::before': {
                      width: '100%',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
                color: '#64ffda',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
                <Email sx={{ color: '#64ffda', fontSize: { xs: 18, md: 20 } }} />
                <Link
                  href="mailto:rizkynugraha999@gmail.com"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    wordBreak: 'break-all',
                    '&:hover': { color: '#64ffda' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  rizkynugraha999@gmail.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
                <LocationOn sx={{ color: '#64ffda', fontSize: { xs: 18, md: 20 } }} />
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                >
                  Indonesia
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: { xs: 3, md: 4 },
            mt: { xs: 3, md: 4 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', md: '1rem' },
              '& span': {
                background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              },
            }}
          >
            &copy; {new Date().getFullYear()} <span>Rizky Portfolio</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
