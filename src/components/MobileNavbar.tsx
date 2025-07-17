import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Avatar, Badge, Fab } from '@mui/material';
import { Menu, Close, Home, Person, Work, Article, ContactMail, Brightness4, NotificationsActive } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMobile) return null;

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/', color: '#64ffda', description: 'Welcome space' },
    { text: 'Profile', icon: <Person />, path: '/profile', color: '#ff6b6b', description: 'About me' },
    { text: 'Projects', icon: <Work />, path: '/projects', color: '#4fc3f7', description: 'My work' },
    { text: 'GIS Works', icon: <Article />, path: '/articles', color: '#ffb74d', description: 'Case studies' },
    { text: 'Contact', icon: <ContactMail />, path: '/contact', color: '#81c784', description: 'Get in touch' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(item => item.path === location.pathname);
    return currentItem?.text || 'Rizky Digital';
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(100, 255, 218, 0.15)' 
            : '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #64ffda 50%, transparent 100%)',
            opacity: isScrolled ? 1 : 0,
            transition: 'opacity 0.3s ease',
          },
        }}
      >
        <Toolbar sx={{ minHeight: '64px !important', px: 2 }}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                color: '#64ffda',
                background: 'rgba(100, 255, 218, 0.1)',
                '&:hover': {
                  background: 'rgba(100, 255, 218, 0.2)',
                  boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Menu />
            </IconButton>
          </motion.div>
          
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1.2rem',
                  lineHeight: 1,
                }}
              >
                {getCurrentPageTitle()}
              </Typography>
            </motion.div>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary', 
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: 0.5,
              }}
            >
              {menuItems.find(item => item.path === location.pathname)?.description || 'Portfolio'}
            </Typography>
          </Box>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #64ffda, #4fc3f7)',
                      border: '2px solid #0a0a0a',
                    }}
                  />
                </motion.div>
              }
            >
              <Avatar
                src="/profile.jpeg"
                alt="Profile"
                sx={{
                  width: 40,
                  height: 40,
                  border: '2px solid rgba(100, 255, 218, 0.4)',
                  boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: '2px solid rgba(100, 255, 218, 0.8)',
                    boxShadow: '0 6px 25px rgba(100, 255, 218, 0.4)',
                  },
                }}
              />
            </Badge>
          </motion.div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.98) 0%, rgba(26, 26, 26, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            border: 'none',
          },
        }}
      >
        <Box sx={{ p: 3, textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', right: 16, top: 16, color: '#64ffda' }}
          >
            <Close />
          </IconButton>
          
          <Avatar
            src="/profile.jpeg"
            alt="Profile"
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 2,
              border: '3px solid rgba(100, 255, 218, 0.3)',
            }}
          />
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0.5,
            }}
          >
            Rizky Nugraha
          </Typography>
          
          <Typography variant="caption" color="text.secondary">
            GIS Specialist & Developer
          </Typography>
        </Box>

        <List sx={{ px: 2, py: 2 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onHoverStart={() => setActiveHover(item.text)}
              onHoverEnd={() => setActiveHover(null)}
            >
              <ListItem
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  background: location.pathname === item.path 
                    ? `linear-gradient(135deg, ${item.color}20 0%, ${item.color}35 100%)` 
                    : 'transparent',
                  border: location.pathname === item.path 
                    ? `1px solid ${item.color}50` 
                    : '1px solid transparent',
                  '&:hover': {
                    background: activeHover === item.text 
                      ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)`
                      : 'rgba(100, 255, 218, 0.05)',
                    border: `1px solid ${item.color}40`,
                  },
                  transition: 'all 0.3s ease',
                  '&::before': location.pathname === item.path ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '60%',
                    background: item.color,
                    borderRadius: '0 2px 2px 0',
                  } : {},
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === item.path ? item.color : 'text.secondary',
                    minWidth: 40,
                    transition: 'all 0.3s ease',
                    transform: activeHover === item.text ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: location.pathname === item.path ? 700 : 500,
                          color: location.pathname === item.path ? item.color : 'text.primary',
                          fontSize: '1rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {item.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                          fontStyle: 'italic',
                          opacity: activeHover === item.text || location.pathname === item.path ? 1 : 0.7,
                          transition: 'opacity 0.2s ease',
                          display: 'block',
                          marginTop: '2px',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  }
                />
                
                {location.pathname === item.path && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: item.color,
                        boxShadow: `0 0 12px ${item.color}80`,
                      }}
                    />
                  </motion.div>
                )}
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Fab
                size="small"
                sx={{
                  background: 'linear-gradient(45deg, #64ffda 30%, #4fc3f7 90%)',
                  color: '#0a0a0a',
                  boxShadow: '0 4px 20px rgba(100, 255, 218, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 30px rgba(100, 255, 218, 0.5)',
                  },
                }}
                aria-label="theme toggle"
              >
                <Brightness4 />
              </Fab>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Badge badgeContent={3} color="error">
                <Fab
                  size="small"
                  sx={{
                    background: 'linear-gradient(45deg, #ff6b6b 30%, #ffd93d 90%)',
                    color: '#0a0a0a',
                    boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 30px rgba(255, 107, 107, 0.5)',
                    },
                  }}
                  aria-label="notifications"
                >
                  <NotificationsActive />
                </Fab>
              </Badge>
            </motion.div>
          </Box>
          
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
            © 2025 Rizky Digital Space
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
