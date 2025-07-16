import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { AutoStories, Close } from '@mui/icons-material';
import { useState } from 'react';

const Articles: React.FC = () => {
  const [expandedImages, setExpandedImages] = useState<{ [key: number]: boolean }>({});
  const [modalImage, setModalImage] = useState<string | null>(null);

  const toggleImageExpansion = (index: number) => {
    setExpandedImages(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openImageModal = (imageSrc: string, event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    setModalImage(imageSrc);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };
  const featuredWorks = [
    {
      title: 'Urban Heat Island Mapping',
      description: 'Analysis of the correlation between vegetation density and urban heat island phenomenon in Bandung city using Landsat-8 satellite imagery. The project involved creating comprehensive maps of urban heat distribution and vegetation density through raster calculator tools in ArcMap, followed by point-based correlation analysis in Excel.',
      image: '/UHI-map.png',
      technologies: ['ArcMap', 'Landsat-8', 'Excel'],
      category: 'Urban Climate',
      color: '#68d391',
      year: '2022',
    },
    {
      title: 'Flood Vulnerability Assessment',
      description: 'Comprehensive flood vulnerability mapping using weighted overlay analysis incorporating multiple environmental factors including infiltration rates, slope gradients, land use/land cover patterns, and hydrological characteristics. The methodology combines spatial analysis techniques to identify high-risk flood zones for urban planning applications.',
      image: '/Peta%20Rawan%20Banjir.png',
      technologies: ['ArcGIS', 'Spatial Analysis', 'Weighted Overlay'],
      category: 'Disaster Risk',
      color: '#4fc3f7',
      year: '2023',
    },
    {
      title: 'Sea Surface Temperature Anomaly Visualization',
      description: 'Advanced visualization and analysis of sea surface temperature anomalies using NOAA oceanographic datasets. The project involved comprehensive data processing and statistical analysis in MATLAB to identify temperature patterns, seasonal variations, and climate anomalies across different oceanic regions.',
      image: '/sea%20surface.png',
      technologies: ['MATLAB', 'NOAA Data', 'Statistical Analysis'],
      category: 'Ocean Climate',
      color: '#ffb74d',
      year: '2023',
    },
  ];

  const pastWorks = [
    {
      title: 'Land Use Land Cover Analysis',
      description: 'Conducted comprehensive land capability assessment utilizing advanced geospatial analysis techniques in QGIS to evaluate diverse land cover classifications and determine optimal land use suitability. Implemented sophisticated weighted scoring methodologies incorporating critical environmental parameters including slope gradient analysis, soil texture classification, infiltration rate modeling, and soil depth stratification to support evidence-based land management decision-making.',
      image: '/LULC.png',
      technologies: ['QGIS', 'Spatial Analysis', 'Scoring Method'],
      category: 'Land Assessment',
      year: '2023',
    },
    {
      title: 'Topographic Wetness Index Analysis',
      description: 'Executed advanced hydrological modeling project during BRIN internship, focusing on topographic profile generation and contour line analysis for Sungai Lisai watershed. Implemented Topographic Wetness Index (TWI) calculations to quantify spatial water content distribution patterns. Integrated multi-source datasets including high-resolution DEM from DEMNAS and Landsat 8 satellite imagery, utilizing sophisticated spatial analysis tools such as hillshade modeling and automated contour generation, with raster calculator algorithms for precise TWI computations.',
      image: '/TWI.png',
      technologies: ['GIS', 'DEMNAS', 'Landsat 8', 'Raster Calculator'],
      category: 'Hydrology',
      year: '2023',
    },
    {
      title: 'AutoCAD Drafting Project',
      description: 'Developed precision technical drawings utilizing AutoCAD software with Google Earth satellite imagery as georeferenced base mapping. Implemented accurate scale calibration to ensure real-world dimensional consistency and spatial accuracy. Applied comprehensive CAD drafting techniques including geometric construction tools, advanced shape modification functions (fillet, trim, offset), and professional technical drawing standards to create detailed engineering documentation and spatial planning layouts.',
      image: '/CAD.png',
      technologies: ['AutoCAD', 'Google Earth', 'Technical Drawing'],
      category: 'CAD Design',
      year: '2024',
    },
    {
      title: 'Machine Learning Regression Bias Correction',
      description: 'Developed a deep learning solution using Convolutional Neural Networks (CNN) to enhance model data accuracy by correcting biases and improving alignment with observed datasets. The project involved transforming model outputs with initially poor performance (near-zero R-squared values) into highly accurate predictions with significantly improved R-squared metrics. Applied advanced machine learning techniques for predictive modeling and forecasting applications in environmental data analysis.',
      image: '/nmme.png',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Machine Learning'],
      category: 'Data Science',
      year: '2024',
    },
    {
      title: 'Railway Infrastructure Asset Management',
      description: 'Executed comprehensive data cleansing operations on kilometer post markers and conducted systematic inventory management of railway tracks and yards infrastructure. Implemented advanced geospatial location functions for attribute population and integration within the rail reliability management system. Developed condition assessment protocols based on material specifications and predefined threshold parameters to support strategic railway maintenance planning and operational efficiency.',
      image: '/image.png',
      technologies: ['GIS', 'Asset Management', 'Infrastructure Planning'],
      category: 'Transportation',
      year: '2025',
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
            Featured GIS Works
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
            Innovative geospatial solutions, web mapping applications, and spatial data analysis projects
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {featuredWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: 420, md: 480 },
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${work.color} 0%, #64ffda 100%)`,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(100, 255, 218, 0.15)',
                      border: '1px solid rgba(100, 255, 218, 0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 180, md: 220 },
                      backgroundImage: `url(${work.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
                      },
                    }}
                  />

                  <CardContent sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AutoStories sx={{ color: work.color, fontSize: { xs: 20, md: 24 } }} />
                        <Chip
                          label={work.category}
                          size="small"
                          sx={{
                            background: `${work.color}20`,
                            color: work.color,
                            border: `1px solid ${work.color}40`,
                            fontWeight: 600,
                            fontSize: { xs: '0.7rem', md: '0.75rem' },
                            height: { xs: 24, md: 28 },
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                        }}
                      >
                        {work.year}
                      </Typography>
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
                      {work.title}
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
                      {work.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {work.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: '#64ffda',
                            border: '1px solid rgba(100, 255, 218, 0.2)',
                            fontSize: '0.7rem',
                            height: 20,
                          }}
                        />
                      ))}
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
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Box sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              background: 'linear-gradient(45deg, #64ffda 30%, #4fc3f7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Past Works & Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
              mb: 4,
            }}
          >
            A collection of previous GIS projects and geospatial solutions
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {pastWorks.map((work, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + 0.8 }}
              >
                <Card
                  onClick={() => toggleImageExpansion(index)}
                  sx={{
                    height: expandedImages[index] ? 'auto' : '100%',
                    minHeight: expandedImages[index] ? 'auto' : { xs: 380, md: 420 },
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(100, 255, 218, 0.1)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      '& .project-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    className="project-image"
                    onClick={(e) => openImageModal(work.image, e)}
                    sx={{
                      height: expandedImages[index] ? { xs: 200, md: 250 } : { xs: 60, md: 80 },
                      backgroundImage: `url(${work.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: expandedImages[index] 
                          ? 'linear-gradient(45deg, rgba(100, 255, 218, 0.05) 0%, rgba(79, 195, 247, 0.05) 100%)'
                          : 'linear-gradient(45deg, rgba(100, 255, 218, 0.2) 0%, rgba(79, 195, 247, 0.2) 100%)',
                        transition: 'all 0.4s ease',
                      },
                      '&:hover::after': {
                        background: 'linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%)',
                      },
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full image of ${work.title} project`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openImageModal(work.image, e);
                      }
                    }}
                  />

                  <CardContent sx={{ 
                    p: { xs: 2, md: 2.5 }, 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: expandedImages[index] ? 'flex-start' : 'space-between',
                    minHeight: expandedImages[index] ? 'auto' : { xs: '200px', md: '220px' }
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                      <Chip
                        label={work.category}
                        size="small"
                        sx={{
                          background: 'rgba(100, 255, 218, 0.1)',
                          color: '#64ffda',
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                          fontWeight: 500,
                          fontSize: '0.65rem',
                          height: 22,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 500,
                          fontSize: '0.7rem',
                        }}
                      >
                        {work.year}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'text.primary',
                        lineHeight: 1.3,
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                      }}
                    >
                      {work.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        lineHeight: 1.5,
                        height: expandedImages[index] ? 'auto' : { xs: '120px', md: '140px' },
                        overflow: expandedImages[index] ? 'visible' : 'hidden',
                        display: expandedImages[index] ? 'block' : '-webkit-box',
                        WebkitLineClamp: expandedImages[index] ? 'none' : { xs: 6, md: 7 },
                        WebkitBoxOrient: expandedImages[index] ? 'unset' : 'vertical',
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                      }}
                    >
                      {work.description}
                    </Typography>

                    {!expandedImages[index] && <Box sx={{ flexGrow: 1 }} />}

                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: expandedImages[index] ? 2 : 'auto' }}>
                      {work.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(79, 195, 247, 0.1)',
                            color: '#4fc3f7',
                            border: '1px solid rgba(79, 195, 247, 0.15)',
                            fontSize: '0.65rem',
                            height: 18,
                          }}
                        />
                      ))}
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
            Explore More GIS Projects
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
            Discover more of my geospatial development work, including web mapping solutions, spatial data analysis, and GIS applications.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Web GIS"
              sx={{
                background: 'rgba(100, 255, 218, 0.1)',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                color: '#64ffda',
              }}
            />
            <Chip
              label="Spatial Analysis"
              sx={{
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid rgba(255, 107, 107, 0.3)',
                color: '#ff6b6b',
              }}
            />
            <Chip
              label="Data Visualization"
              sx={{
                background: 'rgba(79, 195, 247, 0.1)',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                color: '#4fc3f7',
              }}
            />
            <Chip
              label="Environmental Mapping"
              sx={{
                background: 'rgba(255, 183, 77, 0.1)',
                border: '1px solid rgba(255, 183, 77, 0.3)',
                color: '#ffb74d',
              }}
            />
          </Box>
        </Box>
      </motion.div>

      <Modal
        open={!!modalImage}
        onClose={closeImageModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={closeImageModal}
            sx={{
              position: 'absolute',
              top: -40,
              right: -40,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          <Box
            component="img"
            src={modalImage || ''}
            alt="Full size image"
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default Articles;
