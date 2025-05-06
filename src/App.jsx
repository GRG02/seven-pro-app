import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CssBaseline, AppBar, Box, Typography, Button, Avatar, Popover, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'
import Home from './pages/home'
import { Css } from '@mui/icons-material';

function App() {

  const [isDrawer, setIsDrawer] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <CssBaseline />
      <Box sx={universal}>
        <Box sx={{ height: '4.5rem' }}>
          <AppBar sx={{ bgcolor: 'white', height: '4.5rem', display: 'flex', flexDirection: 'row', alignItems: 'center', ...universal }}>
            <Box sx={container}>
              <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={() => setIsDrawer(true)}>
                <MenuIcon sx={{ color: 'green' }} />
              </IconButton>
              <Avatar variant='square' sx={{ width: '10rem', height: '100%', display: { xs: 'none', md: 'block' } }} src='./../src/assets/logo.png'></Avatar>
              <IconButton sx={appbar_bt}>
                <HomeIcon />
                <Typography>หน้าหลัก</Typography>
              </IconButton>
              <IconButton sx={appbar_bt}>
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
              </IconButton>
            </Box>
          </AppBar>
        </Box>

        <Drawer anchor="left" open={isDrawer} onClose={() => setIsDrawer(false)}>
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
        </Drawer>

        <Box>
          <Routes>
            <Route path='/' element={<Home />} />
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
  }
}

const container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
  // bgcolor: 'blue'
}

const appbar_bt = {
  flexDirection: 'column',
  alignItems: 'center',
}