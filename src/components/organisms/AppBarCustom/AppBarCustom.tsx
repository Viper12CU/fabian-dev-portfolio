"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { links } from '@utils/AppBarLinks';
import Link from 'next/link';
import { Button, Slide } from '@mui/material';
import { titleStyle } from './styles';
import { useEffect, useState } from 'react';
import theme from '@/theme';
import { usePathname } from 'next/navigation';

// Molecules
import NavBar from '@molecules/NavBar';
import { navClick } from '@utils/controllers';




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [show, setShow] = useState(false);
  const isHome : boolean = usePathname() == "/"

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <Slide direction='down' in={show || !isHome}>
    <AppBar elevation={0} position={isHome ? "fixed" : "sticky"}  sx={
      {
        bgcolor: theme.palette.background.default,

      }
    }>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}  >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ ...titleStyle, display: { xs: "none", md: "flex" } }}
          >
            Developen´s Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {links.map((link) => (
                <MenuItem key={link.label} onClick={handleCloseNavMenu}>
                  <Link key={link.href} href={link.href} passHref style={{ textDecoration: 'none' }}>
                    <Typography sx={{ textAlign: 'center', color:theme.palette.text.primary }}>{link.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="body1"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ ...titleStyle, display: { md: "none", xs: "flex" } }}
          >
            Developen´s Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavBar />
          </Box>
          <Box>
            {/* Poner la ruta */}
            <Button 
            variant="contained" 
            color={'secondary'} 
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={() => navClick("/contactame") }
            >
              Contactame
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Slide>
  );
}
export default ResponsiveAppBar;
