import React from 'react';
import { Box, Typography, Container, Link, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Me
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="body1">
            Feel free to reach out to me via email at <Link href="mailto:rizkynugraha999@gmail.com">rizkynugraha999@gmail.com</Link> or connect with me on social media:
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center', p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
              <CardContent>
                <Link href="https://www.linkedin.com/in/rizkyngrh23" target="_blank" sx={{ textDecoration: 'none' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="50" height="50" />
                  <Typography variant="body2">LinkedIn</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center', p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
              <CardContent>
                <Link href="https://github.com/rizkyngrh23" target="_blank" sx={{ textDecoration: 'none' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="50" height="50" />
                  <Typography variant="body2">GitHub</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: 'center', p: 2, backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: 3 }}>
              <CardContent>
                <Link href="https://web.facebook.com/rizki.nugraha.7169" target="_blank" sx={{ textDecoration: 'none' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width="50" height="50" />
                  <Typography variant="body2">Facebook</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
