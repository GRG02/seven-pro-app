import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CssBaseline, AppBar, Box, Typography, Button, Avatar, Popover, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material'
import Home from './pages/Home'

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'
import InfoIcon from '@mui/icons-material/Info';

import Logo from './../src/assets/logo.png'
import ShowPro from './pages/ShowPro';
import AboutUs from './pages/AboutUs';

function App() {

  const [isDrawer, setIsDrawer] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <CssBaseline />
      <Box sx={{ ...universal, height: '100%', bgcolor: '' }}>
        <Box sx={{ height: '4.5rem' }}>
          <AppBar sx={{ bgcolor: 'white', height: '4.5rem', display: 'flex', flexDirection: 'row', alignItems: 'center', ...universal, }}>
            <Box sx={appbar_container}>
              {/* <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={() => setIsDrawer(true)}>
                <MenuIcon sx={{ color: 'green' }} />
              </IconButton> */}
              <Avatar variant='square' sx={{ width: '10rem', height: '100%' }} src={Logo} />
              <IconButton sx={{ ...appbar_bt, ml: 'auto' }} onClick={() => { navigate('/') }}>
                <HomeIcon />
                <Typography>หน้าหลัก</Typography>
              </IconButton>
              <IconButton sx={{ ...appbar_bt }} onClick={() => { navigate('/aboutus') }}>
                <InfoIcon />
                <Typography sx={{ ml: 1 }}>เกี่ยวกับเรา</Typography>
              </IconButton>
              {/* <IconButton sx={appbar_bt}>
                <MenuIcon />
                <Typography>หน้าหลัก</Typography>
              </IconButton>
              <IconButton sx={appbar_bt}>
                <MenuIcon />
                <Typography>หน้าหลัก</Typography>
              </IconButton>
              <IconButton sx={{ ...appbar_bt, ml: 'auto' }}>
                <AccountCircleIcon />
                <Typography>DevMode</Typography>
              </IconButton> */}
            </Box>
          </AppBar>
        </Box>

        {/* <Drawer anchor="left" open={isDrawer} onClose={() => setIsDrawer(false)}>
          <Box sx={{ width: 500 }} role="presentation" onClick={() => setIsDrawer(false)}>

            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary="หน้าแรก" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary="เกี่ยวกับ" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary="DevMode" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer> */}

        <Box>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/showpro/:poster_id' element={<ShowPro />} />
            <Route path='/aboutus/' element={<AboutUs />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App

const universal = {
  px: {
    xs: '1rem',
    sm: '2rem',
    md: '10rem',
    lg: '20rem',
    xl: '25rem',
  },
  width: '100%',
}

const appbar_container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
}

const appbar_bt = {
  flexDirection: 'column',
  alignItems: 'center',
}