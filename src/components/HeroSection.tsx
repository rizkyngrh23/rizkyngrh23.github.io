import React from 'react';
import { Box, Typography, Container, Button, Grid, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward, Visibility, Star } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'GIS', 'MongoDB'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 30% 40%, rgba(100, 255, 218, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 107, 107, 0.15) 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite',
          zIndex: 0,
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'rotate(0deg) translate(0, 0)' },
          '33%': { transform: 'rotate(1deg) translate(-20px, -20px)' },
          '66%': { transform: 'rotate(-1deg) translate(20px, -20px)' },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Chip
                  icon={<Star />}
                  label="Available for work"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    background: 'rgba(100, 255, 218, 0.1)',
                    border: '1px solid rgba(100, 255, 218, 0.3)',
                    color: '#64ffda',
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    '& .MuiChip-icon': { color: '#64ffda' },
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
                    fontWeight: 800,
                    lineHeight: { xs: 1.2, md: 1.1 },
                    mb: { xs: 1, md: 2 },
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      position: 'relative',
                    }}
                  >
                    Rizky
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.5rem' },
                    fontWeight: 600,
                    color: 'text.secondary',
                    mb: { xs: 2, md: 3 },
                    lineHeight: 1.3,
                  }}
                >
                  GIS Specialist & Software Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    color: 'text.secondary',
                    mb: { xs: 3, md: 4 },
                    maxWidth: { xs: '100%', md: 600 },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    px: { xs: 1, md: 0 },
                  }}
                >
                  Passionate about creating innovative solutions that bridge the gap between 
                  geographic information systems and modern web technologies. Let's build 
                  something amazing together!
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.8, md: 1 }, mb: { xs: 3, md: 4 }, px: { xs: 1, md: 0 } }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'text.primary',
                          fontWeight: 500,
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                          height: { xs: 28, md: 32 },
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.1)',
                            borderColor: 'rgba(100, 255, 218, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 2, md: 3 }, 
                  flexDirection: { xs: 'column', sm: 'row' },
                  px: { xs: 1, md: 0 },
                  alignItems: { xs: 'stretch', sm: 'center' },
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: 'linear-gradient(45deg, #64ffda 30%, #00bfa5 90%)',
                      color: '#000',
                      fontWeight: 700,
                      px: { xs: 4, md: 4 },
                      py: { xs: 1.5, md: 1.5 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      flex: { xs: '1', sm: 'none' },
                      minHeight: { xs: 48, md: 56 },
                      borderRadius: { xs: 3, md: 2 },
                      '&:hover': {
                        background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(100, 255, 218, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get In Touch
                  </Button>
                  
                  <Button
                    component={Link}
                    to="/projects"
                    variant="outlined"
                    size="large"
                    endIcon={<Visibility />}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'text.primary',
                      fontWeight: 600,
                      px: { xs: 4, md: 4 },
                      py: { xs: 1.5, md: 1.5 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      flex: { xs: '1', sm: 'none' },
                      minHeight: { xs: 48, md: 56 },
                      borderRadius: { xs: 3, md: 2 },
                      '&:hover': {
                        borderColor: '#64ffda',
                        background: 'rgba(100, 255, 218, 0.1)',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Projects
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  order: { xs: -1, md: 0 },
                  mb: { xs: 4, md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: { xs: '-15px', md: '-20px' },
                      left: { xs: '-15px', md: '-20px' },
                      right: { xs: '-15px', md: '-20px' },
                      bottom: { xs: '-15px', md: '-20px' },
                      background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
                      borderRadius: '50%',
                      opacity: 0.2,
                      animation: 'pulse 2s ease-in-out infinite',
                      zIndex: -1,
                    },
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
                      '50%': { transform: 'scale(1.1)', opacity: 0.1 },
                    },
                  }}
                >
                  <Avatar
                    src="/profile.jpeg"
                    alt="Rizky Profile"
                    sx={{
                      width: { xs: 200, sm: 250, md: 350 },
                      height: { xs: 200, sm: 250, md: 350 },
                      border: '4px solid rgba(100, 255, 218, 0.3)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 25px 50px rgba(100, 255, 218, 0.2)',
                      },
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
