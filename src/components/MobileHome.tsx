import React from 'react';
import { Box, Typography, Container, Button, Avatar, Chip, Card, CardContent, Divider, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Code, TrendingUp, Star, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const MobileHome: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  const quickStats = [
    { label: 'Projects', value: '20+', icon: <Code />, color: '#64ffda' },
    { label: 'Experience', value: '1+', icon: <TrendingUp />, color: '#ff6b6b' },
    { label: 'Technologies', value: '10+', icon: <Star />, color: '#4fc3f7' },
  ];

  const featuredWorks = [
    {
      title: 'Urban Heat Mapping',
      type: 'GIS Analysis',
      description: 'Landsat-8 satellite imagery analysis for urban heat island phenomenon',
      color: '#68d391',
    },
    {
      title: 'WhatsApp Sticker Tool',
      type: 'Web App',
      description: 'Custom sticker creation and management platform',
      color: '#25d366',
    },
    {
      title: 'ML Bias Correction',
      type: 'Machine Learning',
      description: 'CNN-based environmental data accuracy enhancement',
      color: '#ffb74d',
    },
  ];

  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/rizkyngrh23', color: '#333' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://linkedin.com/in/rizkyngrh23', color: '#0077b5' },
    { icon: <Email />, label: 'Email', url: 'mailto:rizkynugraha999@gmail.com', color: '#ea4335' },
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 2, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Avatar
            src="/profile.jpeg"
            alt="Rizky Profile"
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 3,
              border: '3px solid rgba(100, 255, 218, 0.5)',
              boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)',
            }}
          />
          
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              fontSize: '1.8rem',
            }}
          >
            Rizky Nugraha
          </Typography>
          
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              mb: 2,
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            GIS Specialist & Full-Stack Developer
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
            <Chip
              label="Available for Work"
              size="small"
              sx={{
                background: 'rgba(100, 255, 218, 0.15)',
                color: '#64ffda',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                fontWeight: 600,
              }}
            />
          </Box>
        </motion.div>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ flex: 1 }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${stat.color}30`,
                  borderRadius: 2,
                  p: 1.5,
                  minHeight: 90,
                }}
              >
                <Box sx={{ color: stat.color, mb: 0.5 }}>
                  {React.cloneElement(stat.icon, { fontSize: 'medium' })}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: stat.color, fontSize: '1.2rem', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                  {stat.label}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Box>

      <Card sx={{ mb: 4, background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="h6" sx={{ color: '#64ffda', mb: 1.5, fontWeight: 700 }}>
            About Me
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              mb: 2,
              fontSize: '0.9rem',
            }}
          >
            Passionate GIS specialist creating innovative geospatial solutions. I bridge technology 
            and real-world problems through web mapping, spatial analysis, and environmental modeling.
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {['GIS', 'React', 'Python', 'QGIS'].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  background: 'rgba(100, 255, 218, 0.1)',
                  color: '#64ffda',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  fontSize: '0.7rem',
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#64ffda',
            textAlign: 'center',
          }}
        >
          Featured Works
        </Typography>
        
        <Stack spacing={2}>
          {featuredWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderLeft: `4px solid ${work.color}`,
                  '&:active': {
                    transform: 'scale(0.98)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {work.title}
                    </Typography>
                    <Chip
                      label={work.type}
                      size="small"
                      sx={{
                        background: `${work.color}20`,
                        color: work.color,
                        fontSize: '0.65rem',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Box>

      <Card sx={{ mb: 4, background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="h6" sx={{ color: '#64ffda', mb: 2, fontWeight: 700, textAlign: 'center' }}>
            Let's Connect
          </Typography>
          
          <Stack spacing={1.5}>
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                href={social.url}
                target="_blank"
                variant="outlined"
                startIcon={social.icon}
                fullWidth
                sx={{
                  borderColor: `${social.color}50`,
                  color: social.color,
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                  py: 1.2,
                  '&:hover': {
                    borderColor: social.color,
                    background: `${social.color}10`,
                  },
                }}
              >
                {social.label}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          href="/projects"
          fullWidth
          sx={{
            background: 'linear-gradient(45deg, #64ffda 30%, #4fc3f7 90%)',
            color: '#000',
            fontWeight: 700,
            py: 1.5,
            fontSize: '1rem',
            '&:hover': {
              background: 'linear-gradient(45deg, #4fc3f7 30%, #64ffda 90%)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Explore My Work
        </Button>
      </Box>

      <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      <Box sx={{ textAlign: 'center', pb: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Rizky Portfolio
        </Typography>
      </Box>
    </Container>
  );
};

export default MobileHome;
