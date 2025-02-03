import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CircularProgress, Button, Collapse } from '@mui/material';
import { motion } from 'framer-motion';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch('https://api.github.com/users/rizkyngrh23/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      });
  }, []);

  const toggleDetails = (name: string) => {
    setShowDetails(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {repositories.map((repo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{repo.name}</Typography>
                    <Collapse in={showDetails[repo.name]}>
                      <Typography variant="body2" sx={{ mb: 2, textAlign: 'justify' }}>{repo.description}</Typography>
                    </Collapse>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button
                        onClick={() => toggleDetails(repo.name)}
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: 'none' }}
                      >
                        {showDetails[repo.name] ? 'Hide Details' : 'Show Details'}
                      </Button>
                      <Button
                        href={repo.html_url}
                        target="_blank"
                        variant="outlined"
                        color="secondary"
                        sx={{ textTransform: 'none' }}
                      >
                        View on GitHub
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Projects;
