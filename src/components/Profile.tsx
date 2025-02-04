import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const technologies = [
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'QGIS', src: '/qgis.png' },
    { name: 'ArcGIS', src: '/arcgis.png' },
    { name: 'ArcGIS Pro', src: '/arcgis_pro.png' },
    { name: 'AutoCAD', src: '/autocad.png' },    
  ];

  const experiences = [
    {
      title: 'Research Intern at National Research and Innovation Agency',
      description: 'Assisted in processing satellite-derived data using machine learning and conducted fieldwork for AWS installation.',
    },
    {
      title: 'GIS Analyst Intern at MAPID',
      description: 'Collected, analyzed, and interpreted geographic data using GIS software to support decision-making.',
    },
    {
      title: 'Project Intern at Proforest',
      description: 'Supported mapping activities and landscape initiatives, automated HCS patch analysis, and assisted with GIS-based data preparation.',
    },
    {
      title: 'Web GIS Developer',
      description: 'Developed web-based GIS applications and tools for spatial data visualization and analysis.',
    },
  ];

  const certifications = [
    'Certified JavaScript Developer (example)',
    'Certified Python Programmer (example)',
    'Certified Web Developer (example)',
  ];

  const hobbies = [
    'Exploring new programming languages and frameworks',
    'Contributing to open-source projects',
    'Reading tech blogs and books',
    'Playing video games',
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(18, 18, 18, 0.8))', borderRadius: 2, boxShadow: 3 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Profile
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar
            alt="Profile Picture"
            src="/profile.jpeg"
            sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 }, margin: '0 auto', marginBottom: 2, border: '4px solid white', boxShadow: 3 }}
          />
          <Typography variant="body1">
            I'm a learning developer with vast experience in programming languages especially JavaScript and web development. I enjoy learning new things and taking on challenging projects.
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Technologies I Use
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {technologies.map((tech, index) => (
              <Grid item key={index} xs={6} sm={4} md={2}>
                <Card sx={{ textAlign: 'center', p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
                  <CardContent>
                    <img src={tech.src} alt={tech.name} width="50" height="50" />
                    <Typography variant="body2">{tech.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Experience
          </Typography>
          <Grid container spacing={2}>
            {experiences.map((exp, index) => (
              <Grid item key={index} xs={12}>
                <Card sx={{ p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6">{exp.title}</Typography>
                    <Typography variant="body2">{exp.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Education
          </Typography>
          <Card sx={{ p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="body1">
                <strong>Bachelor's degree in Meteorology</strong>
              </Typography>
              <Typography variant="body2">IPB University</Typography>
              <Typography variant="body2">Gained a strong foundation in GIS and programming.</Typography>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Certifications
          </Typography>
          <Grid container spacing={2}>
            {certifications.map((cert, index) => (
              <Grid item key={index} xs={12}>
                <Card sx={{ p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="body2">{cert}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Hobbies
          </Typography>
          <Card sx={{ p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="body1">In my free time, I enjoy:</Typography>
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>
                    <Typography variant="body2">{hobby}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Profile;
