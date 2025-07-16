import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CircularProgress, Button, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch, Code, Star, ForkRight } from '@mui/icons-material';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('https://api.github.com/users/rizkyngrh23/repos?sort=updated&per_page=12');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Vue: '#4FC08D',
      React: '#61dafb',
      PHP: '#4F5D95',
    };
    return colors[language] || '#64ffda';
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 2, md: 2 },
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              maxWidth: { xs: '100%', md: 600 },
              mx: 'auto',
              px: { xs: 2, md: 0 },
            }}
          >
            Explore my latest work and open-source contributions on GitHub
          </Typography>
        </Box>
      </motion.div>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress
            size={60}
            sx={{
              color: '#64ffda',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              },
            }}
          />
        </Box>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {repositories.map((repo, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  variants={fadeInVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      minHeight: { xs: 320, md: 380 },
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${getLanguageColor(repo.language)} 0%, #64ffda 100%)`,
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: { xs: 2.5, md: 3 }, 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: '#64ffda',
                            textDecoration: 'none',
                            lineHeight: 1.3,
                            flex: 1,
                            mr: 1,
                          }}
                          component={Link}
                          href={repo.html_url}
                          target="_blank"
                        >
                          {repo.name}
                        </Typography>
                        <Code sx={{ color: 'text.secondary', fontSize: { xs: 18, md: 20 } }} />
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        {repo.language && (
                          <Chip
                            label={repo.language}
                            size="small"
                            sx={{
                              background: `${getLanguageColor(repo.language)}20`,
                              color: getLanguageColor(repo.language),
                              border: `1px solid ${getLanguageColor(repo.language)}40`,
                              fontWeight: 600,
                              fontSize: { xs: '0.7rem', md: '0.75rem' },
                              height: { xs: 24, md: 28 },
                            }}
                          />
                        )}
                        {repo.topics?.slice(0, 2).map((topic) => (
                          <Chip
                            key={topic}
                            label={topic}
                            size="small"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: 'text.secondary',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          />
                        ))}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          mb: 2,
                          flexGrow: 1,
                          minHeight: '60px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {repo.description || 'No description available.'}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Star sx={{ fontSize: 16, color: '#64ffda' }} />
                          <Typography variant="caption" color="text.secondary">
                            {repo.stargazers_count}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <ForkRight sx={{ fontSize: 16, color: '#64ffda' }} />
                          <Typography variant="caption" color="text.secondary">
                            {repo.forks_count}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 2 }}>
                        <Button
                          href={repo.html_url}
                          target="_blank"
                          variant="contained"
                          size="small"
                          endIcon={<Launch />}
                          sx={{
                            width: '100%',
                            background: 'linear-gradient(45deg, #64ffda 30%, #00bfa5 90%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)',
                              transform: 'translateY(-1px)',
                            },
                          }}
                        >
                          View Project
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            href="https://github.com/rizkyngrh23"
            target="_blank"
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            sx={{
              px: 4,
              py: 1.5,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '1.1rem',
              '&:hover': {
                borderColor: '#64ffda',
                background: 'rgba(100, 255, 218, 0.1)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            View More on GitHub
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Projects;
