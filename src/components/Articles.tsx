import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Link, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { AutoStories, Schedule, ArrowForward } from '@mui/icons-material';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'Getting Started with Node.js',
      description: 'An introductory guide to building your first Node.js application with best practices and real-world examples.',
      link: '/Article/node_article.html',
      readTime: '5 min read',
      category: 'Backend',
      color: '#68d391',
    },
    {
      title: 'Building RESTful APIs',
      description: 'Learn how to build scalable and secure RESTful APIs using Node.js and Express framework.',
      link: '/Article/building-api.html',
      readTime: '8 min read',
      category: 'API Development',
      color: '#4fc3f7',
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      description: 'A comprehensive deep dive into asynchronous programming patterns, promises, and async/await in JavaScript.',
      link: '/Article/async_js.html',
      readTime: '10 min read',
      category: 'JavaScript',
      color: '#ffb74d',
    },
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
            Technical Articles
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              px: { xs: 2, md: 0 },
            }}
          >
            Insights, tutorials, and deep dives into web development, GIS, and modern programming practices
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: 280, md: 320 },
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${article.color} 0%, #64ffda 100%)`,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)',
                      border: '1px solid rgba(100, 255, 218, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                      <AutoStories sx={{ color: article.color, fontSize: { xs: 20, md: 24 } }} />
                      <Chip
                        label={article.category}
                        size="small"
                        sx={{
                          background: `${article.color}20`,
                          color: article.color,
                          border: `1px solid ${article.color}40`,
                          fontWeight: 600,
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          height: { xs: 24, md: 28 },
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                        lineHeight: 1.3,
                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {article.description}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule sx={{ fontSize: { xs: 14, md: 16 }, color: 'text.secondary' }} />
                        <Typography 
                          variant="caption" 
                          color="text.secondary"
                          sx={{ fontSize: { xs: '0.7rem', md: '0.75rem' } }}
                        >
                          {article.readTime}
                        </Typography>
                      </Box>
                      
                      <Link
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: article.color,
                          textDecoration: 'none',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            gap: 1,
                            '& .arrow-icon': {
                              transform: 'translateX(3px)',
                            },
                          },
                        }}
                      >
                        Read Article
                        <ArrowForward 
                          className="arrow-icon"
                          sx={{ 
                            fontSize: { xs: 14, md: 16 },
                            transition: 'transform 0.3s ease',
                          }} 
                        />
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 6,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#64ffda',
            }}
          >
            Want to Read More?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            I regularly publish articles about web development, GIS technologies, and software engineering best practices.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="JavaScript"
              sx={{
                background: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                color: '#64ffda',
              }}
            />
            <Chip
              label="Node.js"
              sx={{
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                color: '#ff6b6b',
              }}
            />
            <Chip
              label="GIS Development"
              sx={{
                background: 'rgba(79, 195, 247, 0.1)',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                color: '#4fc3f7',
              }}
            />
            <Chip
              label="Web Development"
              sx={{
                background: 'rgba(255, 183, 77, 0.1)',
                border: '1px solid rgba(255, 183, 77, 0.3)',
                color: '#ffb74d',
              }}
            />
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Articles;
