import React from 'react';
import { Box, Typography, Container, Link, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const recentBlogPosts = [
    {
      title: 'Getting Started with Node.js',
      description: 'An introductory guide to building your first Node.js application.',
      link: 'Article/node_article.html'
    },
    {
      title: 'Building APIs',
      description: 'Learn how to build a simple RESTful API using Node.js and Express.',
      link: 'Article/building-api.html'
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      description: 'A deep dive into asynchronous programming in JavaScript.',
      link: 'Article/async_js.html'
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const Section: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay }}
        style={{ marginBottom: '4rem' }}
      >
        {children}
      </motion.div>
    );
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
            Welcome to Rizky Portfolio Website
          </Typography>
        </motion.div>
      </Box>
      <Section>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Home
          </Typography>
          <Typography variant="body1">
            Hi, I'm Rizky! Welcome to my website. I'm a passionate developer who loves coding and building projects.
          </Typography>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            I am a GIS specialist and newbie software developer with a strong background in web development and a keen interest in learning new technologies. I enjoy solving complex problems and working on innovative projects.
          </Typography>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Interests
          </Typography>
          <Typography variant="body1">
            In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest trends in technology. I also love reading books, and playing video games.
          </Typography>
        </Box>
      </Section>
      <Section delay={0.6}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">Building Server for Newbie</Typography>
                  <Typography variant="body2">Server setup guide.</Typography>
                  <Link href="https://github.com/rizkyngrh23/building-server-for-newbie" target="_blank" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">Cipher Hub</Typography>
                  <Typography variant="body2">Encryption tools.</Typography>
                  <Link href="https://github.com/rizkyngrh23/cipher-hub" target="_blank" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">Teralink Generator</Typography>
                  <Typography variant="body2">Generate download links.</Typography>
                  <Link href="https://github.com/rizkyngrh23/teralink-generator" target="_blank" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">NMME CNN Training</Typography>
                  <Typography variant="body2">Train CNN models.</Typography>
                  <Link href="https://github.com/rizkyngrh23/nmme-cnn-training" target="_blank" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Section>
      <Section delay={0.8}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Recent Blog Posts
          </Typography>
          <Grid container spacing={4}>
            {recentBlogPosts.slice(0, 3).map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body2">{post.description}</Typography>
                    <Link href={post.link} sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Read more
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>
    </Container>
  );
};

export default Home;
