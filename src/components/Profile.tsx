import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Card, CardContent, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { School, Work, Star, Code, Hub, Psychology, BarChart, Public } from '@mui/icons-material';

const Profile: React.FC = () => {
  const technologies = [
    { name: 'Python', level: 62, color: '#3776AB' },
    { name: 'HTML', level: 98, color: '#E34F26' },
    { name: 'CSS', level: 94, color: '#1572B6' },
    { name: 'JavaScript', level: 83, color: '#F7DF1E' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Java', level: 39, color: '#ED8B00' },
    { name: 'Spring Boot', level: 25, color: '#6DB33F' },
    { name: 'Express.js', level: 79, color: '#404D59' },
    { name: 'MongoDB', level: 51, color: '#47A248' },
    { name: 'PostgreSQL', level: 67, color: '#336791' },
    { name: 'Git', level: 87, color: '#F05032' },
    { name: 'Docker', level: 37, color: '#2496ED' },
  ];

  const experiences = [
    {
      title: 'Research Intern',
      company: 'National Research and Innovation Agency',
      period: '2023 - 2024',
      description: 'Assisted in processing satellite-derived data using machine learning and conducted fieldwork for AWS installation.',
      color: '#64ffda',
    },
    {
      title: 'GIS Analyst Intern',
      company: 'MAPID',
      period: '2023',
      description: 'Collected, analyzed, and interpreted geographic data using GIS software to support decision-making.',
      color: '#ff6b6b',
    },
    {
      title: 'Project Intern',
      company: 'Proforest',
      period: '2022 - 2023',
      description: 'Supported mapping activities and landscape initiatives, automated HCS patch analysis, and assisted with GIS-based data preparation.',
      color: '#4fc3f7',
    },
    {
      title: 'Web GIS Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Developed web-based GIS applications and tools for spatial data visualization and analysis.',
      color: '#ab47bc',
    },
  ];

  const achievements = [
    'Contributed to 20+ open-source projects',
    'Published research on satellite data processing',
    'Developed GIS applications for environmental monitoring',
    'Completed various freelance projects',
  ];

  const interests = [
    { name: 'Open Source Development', icon: <Hub /> },
    { name: 'Geographic Information Systems', icon: <Public /> },
    { name: 'Machine Learning', icon: <Psychology /> },
    { name: 'Data Visualization', icon: <BarChart /> },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Avatar
            src="/profile.jpeg"
            alt="Rizky Profile"
            sx={{
              width: { xs: 120, sm: 150, md: 200 },
              height: { xs: 120, sm: 150, md: 200 },
              mx: 'auto',
              mb: { xs: 3, md: 4 },
              border: '6px solid rgba(100, 255, 218, 0.3)',
              boxShadow: '0 20px 40px rgba(100, 255, 218, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 25px 50px rgba(100, 255, 218, 0.3)',
              },
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            About Rizky
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              maxWidth: 800,
              mx: 'auto',
              mb: { xs: 3, md: 4 },
              px: { xs: 2, md: 0 },
              lineHeight: 1.6,
            }}
          >
            GIS Specialist & Software Developer passionate about bridging the gap between 
            geographic technology and modern web development
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: { xs: 1, md: 2 }, 
            flexWrap: 'wrap',
            px: { xs: 2, md: 0 },
          }}>
            <Chip
              label="🌍 GIS Expert"
              sx={{
                background: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                color: '#64ffda',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                height: { xs: 28, md: 32 },
              }}
            />
            <Chip
              label="💻 Full Stack Developer"
              sx={{
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                color: '#ff6b6b',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                height: { xs: 28, md: 32 },
              }}
            />
            <Chip
              label="🚀 Open Source Contributor"
              sx={{
                background: 'rgba(79, 195, 247, 0.1)',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                color: '#4fc3f7',
                fontWeight: 600,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                height: { xs: 28, md: 32 },
              }}
            />
          </Box>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#64ffda',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: { xs: '1.5rem', md: '3rem' },
                }}
              >
                <School sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} /> Education & Achievements
              </Typography>
              
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  mb: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#64ffda',
                    mb: 2,
                  }}
                >
                  Bachelor's Degree in Meteorology
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
                  IPB University
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gained a strong foundation in GIS, data analysis, and programming. 
                  Specialized in satellite data processing and environmental monitoring.
                </Typography>
              </Card>

              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#ff6b6b',
                    mb: 3,
                  }}
                >
                  Key Achievements
                </Typography>
                <Grid container spacing={1}>
                  {achievements.map((achievement, index) => (
                    <Grid item xs={12} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          mb: 1,
                        }}
                      >
                        <Star sx={{ color: '#64ffda', fontSize: 20 }} />
                        <Typography variant="body2" color="text.secondary">
                          {achievement}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div variants={fadeInVariants} style={{ width: '100%' }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#64ffda',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Code /> Technical Skills
              </Typography>
              
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: 4,
                }}
              >
                <Grid container spacing={3}>
                  {technologies.map((tech, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        variants={fadeInVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                              }}
                            >
                              {tech.name}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={tech.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: tech.color,
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 6,
                  textAlign: 'center',
                  color: '#64ffda',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Work /> Professional Experience
              </Typography>
              
              <Grid container spacing={4}>
                {experiences.map((exp, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div
                      variants={fadeInVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: 'rgba(255, 255, 255, 0.02)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: exp.color,
                          },
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: `0 15px 35px ${exp.color}30`,
                            border: `1px solid ${exp.color}50`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: exp.color,
                              mb: 1,
                            }}
                          >
                            {exp.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                              mb: 1,
                            }}
                          >
                            {exp.company}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              mb: 2,
                              fontStyle: 'italic',
                            }}
                          >
                            {exp.period}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.6,
                            }}
                          >
                            {exp.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 6,
                  textAlign: 'center',
                  color: '#64ffda',
                }}
              >
                Interests & Passions
              </Typography>
              
              <Grid container spacing={4}>
                {interests.map((interest, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      variants={fadeInVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          minHeight: 180,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          background: 'rgba(255, 255, 255, 0.02)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 3,
                          textAlign: 'center',
                          p: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 15px 35px rgba(100, 255, 218, 0.15)',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: '#64ffda',
                            mb: 2,
                            '& svg': { fontSize: 48 },
                          }}
                        >
                          {interest.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            textAlign: 'center',
                          }}
                        >
                          {interest.name}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Profile;
