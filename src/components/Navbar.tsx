import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'Profile', path: '/profile' },
    { label: 'Projects', path: '/projects' },
    { label: 'GIS Works', path: '/articles' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box
      sx={{ 
        width: { xs: 300, sm: 320 },
        background: 'rgba(26, 26, 26, 0.98)',
        backdropFilter: 'blur(20px)',
        height: '100%',
        borderLeft: '1px solid rgba(100, 255, 218, 0.2)',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: { xs: 3, sm: 4 }, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Typography variant="h6" sx={{ 
          color: '#64ffda', 
          fontWeight: 700,
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
        }}>
          Rizky Portfolio
        </Typography>
      </Box>
      <List sx={{ pt: 2, px: 1 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label}
            component={Link} 
            to={item.path}
            sx={{
              mx: 2,
              mb: 1.5,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              minHeight: 56,
              '&:hover': {
                background: 'rgba(100, 255, 218, 0.15)',
                transform: 'translateX(8px)',
                boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)',
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  color: 'text.primary',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Avatar
            sx={{
              mr: { xs: 1.5, md: 2 },
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            R
          </Avatar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&:hover': {
                opacity: 0.8,
              },
              transition: 'opacity 0.3s ease',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Rizky Portfolio
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #64ffda 30%, #ff6b6b 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&:hover': {
                opacity: 0.8,
              },
              transition: 'opacity 0.3s ease',
              display: { xs: 'block', sm: 'none' },
            }}
          >
            Rizky
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                mx: 0.5,
                px: 3,
                py: 1,
                borderRadius: 3,
                fontWeight: 500,
                fontSize: '1rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(100, 255, 218, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(100, 255, 218, 0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)',
                },
                '&:hover::before': {
                  width: '80%',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton 
            color="inherit" 
            edge="start" 
            onClick={toggleDrawer(true)}
            sx={{
              borderRadius: 2,
              p: { xs: 1.2, sm: 1.5 },
              background: 'rgba(100, 255, 218, 0.05)',
              border: '1px solid rgba(100, 255, 218, 0.1)',
              '&:hover': {
                background: 'rgba(100, 255, 218, 0.15)',
                borderColor: 'rgba(100, 255, 218, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' } }} />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: 'transparent',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
