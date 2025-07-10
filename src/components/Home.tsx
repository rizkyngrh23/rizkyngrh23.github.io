import React from 'react';
import { Box, Typography, Container, Link, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowForward, AutoStories, Code, TrendingUp, Star } from '@mui/icons-material';

const Home: React.FC = () => {
  const stats = [
    { label: 'Projects', value: '20+', icon: <Code /> },
    { label: 'Years Experience', value: '1+', icon: <TrendingUp /> },
    { label: 'Technologies', value: '10+', icon: <Star /> },
  ];

  const featuredProjects = [
    {
      title: 'WhatsApp Sticker',
      description: 'A tool for creating and managing WhatsApp stickers with custom designs and animations.',
      link: 'https://github.com/rizkyngrh23/whatsapp-sticker',
      tags: ['WhatsApp', 'Sticker', 'Node.js'],
      color: '#25d366',
    },
    {
      title: 'Shopee Flash Sale Bot',
      description: 'Automated bot for Shopee flash sales with smart purchasing algorithms and notifications.',
      link: 'https://github.com/rizkyngrh23/shopee-flashsale-bot',
      tags: ['Automation', 'Bot', 'E-commerce'],
      color: '#ee4d2d',
    },
    {
      title: 'DeployMate',
      description: 'Zero-config CI/CD tool for automatic deployment to Vercel, Netlify, and DigitalOcean.',
      link: 'https://github.com/rizkyngrh23/DeployMate',
      tags: ['CI/CD', 'Deployment', 'DevOps'],
      color: '#4fc3f7',
    },
    {
      title: 'Teralink Generator',
      description: 'Web application for generating direct download links from Terabox URLs with ease.',
      link: 'https://github.com/rizkyngrh23/teralink-generator',
      tags: ['Utility', 'Node.js', 'API'],
      color: '#ff9800',
    },
  ];

  const recentBlogPosts = [
    {
      title: 'Getting Started with Node.js',
      description: 'An introductory guide to building your first Node.js application with best practices.',
      link: 'Article/node_article.html',
      readTime: '5 min read',
    },
    {
      title: 'Building RESTful APIs',
      description: 'Learn how to build scalable RESTful APIs using Node.js and Express framework.',
      link: 'Article/building-api.html',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      description: 'A deep dive into asynchronous programming patterns and best practices in JavaScript.',
      link: 'Article/async_js.html',
      readTime: '10 min read',
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
        transition={{ duration: 0.6, delay }}
        style={{ marginBottom: '6rem' }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
      <Section>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar
              src="/profile.jpeg"
              alt="Rizky"
              sx={{
                width: { xs: 100, sm: 120, md: 150 },
                height: { xs: 100, sm: 120, md: 150 },
                mx: 'auto',
                mb: { xs: 3, md: 4 },
                border: '4px solid rgba(100, 255, 218, 0.3)',
                boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)',
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
              Welcome to My Digital Space
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 400,
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              I'm Rizky, a passionate GIS specialist and software developer creating innovative solutions 
              that bridge technology and real-world problems.
            </Typography>
          </motion.div>
        </Box>
      </Section>

      <Section delay={0.2}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <motion.div variants={fadeInVariants}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: { xs: 3, md: 4 },
                      minHeight: { xs: 140, md: 180 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 35px rgba(100, 255, 218, 0.15)',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: '#64ffda',
                        mb: { xs: 1, md: 2 },
                        '& svg': { fontSize: { xs: 32, md: 40 } },
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: '#64ffda',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '3rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="text.secondary"
                      sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Section>

      <Section delay={0.4}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                color: '#64ffda',
                fontSize: { xs: '1.8rem', md: '3rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                mb: { xs: 3, md: 4 },
                textAlign: { xs: 'center', md: 'left' },
                px: { xs: 1, md: 0 },
              }}
            >
              I am a dedicated GIS specialist and software developer with expertise in creating 
              web-based geographic solutions. My journey combines the precision of geospatial 
              analysis with the creativity of modern web development, resulting in applications 
              that make complex data accessible and actionable.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: { xs: 0.8, md: 1 }, 
              mb: { xs: 3, md: 4 },
              justifyContent: { xs: 'center', md: 'flex-start' },
              px: { xs: 1, md: 0 },
            }}>
              {['Geographic Information Systems', 'Web Development', 'Data Visualization', 'Machine Learning'].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    background: 'rgba(100, 255, 218, 0.1)',
                    border: '1px solid rgba(100, 255, 218, 0.3)',
                    color: '#64ffda',
                    fontWeight: 500,
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    height: { xs: 28, md: 32 },
                  }}
                />
              ))}
            </Box>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-start' },
              px: { xs: 1, md: 0 },
            }}>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForward />}
                href="/profile"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'text.primary',
                  fontWeight: 600,
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.2, md: 1.5 },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    borderColor: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                mt: { xs: 4, md: 0 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: { xs: -15, md: -20 },
                  background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
                  borderRadius: 4,
                  opacity: 0.1,
                  zIndex: -1,
                },
              }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#64ffda', 
                    mb: 2,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Current Focus
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  Working on innovative GIS solutions, exploring machine learning applications 
                  in geospatial analysis, and contributing to open-source projects that make 
                  geographic data more accessible to developers and researchers worldwide.
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section delay={0.6}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            color: '#64ffda',
          }}
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                variants={fadeInVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
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
                      background: project.color,
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 35px ${project.color}30`,
                      border: `1px solid ${project.color}50`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: project.color,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            color: 'text.secondary',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        />
                      ))}
                    </Box>
                    <Link
                      href={project.link}
                      target="_blank"
                      sx={{
                        color: project.color,
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        marginTop: 'auto',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      View Project <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section delay={0.8}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            color: '#64ffda',
          }}
        >
          Recent Articles
        </Typography>
        <Grid container spacing={4}>
          {recentBlogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                variants={fadeInVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(100, 255, 218, 0.15)',
                      border: '1px solid rgba(100, 255, 218, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AutoStories sx={{ color: '#64ffda', mr: 1 }} />
                      <Chip
                        label={post.readTime}
                        size="small"
                        sx={{
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid rgba(100, 255, 218, 0.3)',
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {post.description}
                    </Typography>
                    <Link
                      href={post.link}
                      sx={{
                        color: '#64ffda',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        marginTop: 'auto',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Read Article <ArrowForward sx={{ fontSize: 16 }} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Home;
