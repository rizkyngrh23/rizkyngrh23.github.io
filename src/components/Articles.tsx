import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'Getting Started with Node.js',
      description: 'An introductory guide to building your first Node.js application.',
      link: '/Article/node_article.html'
    },
    {
      title: 'Building APIs',
      description: 'Learn how to build a simple RESTful API using Node.js and Express.',
      link: '/Article/building-api.html'
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      description: 'A deep dive into asynchronous programming in JavaScript.',
      link: '/Article/async_js.html'
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Articles
          </Typography>
        </motion.div>
      </Box>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{article.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{article.description}</Typography>
                  <Link href={article.link} target="_blank" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    Read more
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
