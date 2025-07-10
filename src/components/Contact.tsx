import React from 'react';
import { Box, Typography, Container, Link, Grid, Card, CardContent, Button, TextField, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, Twitter, Email, LocationOn, Send, Phone } from '@mui/icons-material';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'rizkynugraha999@gmail.com',
      link: 'mailto:rizkynugraha999@gmail.com',
      color: '#ea4335',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: 'Indonesia',
      link: null,
      color: '#64ffda',
    },
    {
      icon: <Phone />,
      label: 'Available',
      value: 'Open to opportunities',
      link: null,
      color: '#ff6b6b',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rizkyngrh23',
      color: '#0077b5',
      description: 'Connect professionally',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/rizkyngrh23',
      color: '#333',
      description: 'View my repositories',
    },
    {
      icon: <Twitter />,
      label: 'Twitter',
      url: 'https://twitter.com/rizkyngrh23',
      color: '#1da1f2',
      description: 'Follow for updates',
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
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              px: { xs: 1, md: 0 },
              lineHeight: 1.6,
            }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#64ffda',
                  fontSize: { xs: '1.75rem', md: '2.125rem' },
                }}
              >
                Contact Information
              </Typography>
              
              <Grid container spacing={3}>
                {contactMethods.map((method, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div
                      variants={fadeInVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 3,
                          p: { xs: 1.5, md: 2 },
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 10px 30px rgba(100, 255, 218, 0.15)',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: { xs: '12px !important', md: '16px !important' } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
                            <Box
                              sx={{
                                p: { xs: 1, md: 1.5 },
                                borderRadius: 2,
                                background: `${method.color}20`,
                                color: method.color,
                                display: 'flex',
                                alignItems: 'center',
                                minWidth: { xs: 40, md: 48 },
                                minHeight: { xs: 40, md: 48 },
                              }}
                            >
                              {method.icon}
                            </Box>
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  mb: 0.5,
                                  fontSize: { xs: '1rem', md: '1.25rem' },
                                }}
                              >
                                {method.label}
                              </Typography>
                              {method.link ? (
                                <Link
                                  href={method.link}
                                  sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                    '&:hover': { color: method.color },
                                    transition: 'color 0.3s ease',
                                    wordBreak: 'break-all',
                                  }}
                                >
                                  {method.value}
                                </Link>
                              ) : (
                                <Typography 
                                  variant="body2" 
                                  color="text.secondary"
                                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
                                >
                                  {method.value}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div variants={fadeInVariants}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#64ffda',
                  fontSize: { xs: '1.75rem', md: '2.125rem' },
                }}
              >
                Send Message
              </Typography>

              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  p: { xs: 2, md: 4 },
                }}
              >
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(100, 255, 218, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#64ffda',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#64ffda',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: 'text.secondary', fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(100, 255, 218, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#64ffda',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#64ffda',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(100, 255, 218, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#64ffda',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#64ffda',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(100, 255, 218, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#64ffda',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        '&.Mui-focused': {
                          color: '#64ffda',
                        },
                      },
                    }}
                  />
                  
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      background: 'linear-gradient(45deg, #64ffda 30%, #00bfa5 90%)',
                      color: '#000',
                      fontWeight: 700,
                      py: { xs: 1.2, md: 1.5 },
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      borderRadius: 2,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(100, 255, 218, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <motion.div
            variants={fadeInVariants}
            transition={{ delay: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 }, mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#64ffda',
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.125rem' },
              }}
            >
              Connect With Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
                px: { xs: 2, md: 0 },
              }}
            >
              Follow me on social media for updates and insights
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {socialLinks.map((social, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={fadeInVariants}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none' }}
                  >
                    <Card
                      sx={{
                        height: { xs: 140, md: 160 },
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 10px 30px ${social.color}30`,
                          border: `1px solid ${social.color}50`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box
                          sx={{
                            color: social.color,
                            mb: { xs: 1, md: 2 },
                            '& svg': { fontSize: { xs: 32, md: 40 } },
                          }}
                        >
                          {social.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 1,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                          }}
                        >
                          {social.label}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                        >
                          {social.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
