import React, { useEffect, useState } from 'react'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material'
import {
  Home,
  MenuBook,
  Visibile,
  Cancel,
  MoreVert,
  Visibility,
} from '@mui/icons-material'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import ViewTickets from './viewTickets'
import { typography } from '@mui/system'

export default function SideNavigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const paths = ['/', '/home', '/viewTickets', '/bookTickets', '/cancelTickets']

  const [sideNav, setSideNav] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (paths.includes(location.pathname) && location.pathname !== '/') {
      setSideNav(true)
    } else {
      setSideNav(false)
    }
  }, [paths, location.pathname])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const navigation = [
    { path: '/home', icon: <Home /> },
    { path: '/bookTickets', icon: <MenuBook /> },
    { path: '/viewTickets', icon: <Visibility /> },
    { path: '/cancelTickets', icon: <Cancel /> },
  ]

  const drawer = (
    <div>
      <Box display="flex" flexDirection="column" sx={{ height: '100%' }}>
        {/* Adjusted to remove extra space */}
        <IconButton
          onClick={handleMenuToggle}
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <MoreVert />
        </IconButton>
        <Divider />
        <List style={{ paddingTop: 0 }}>
          {/* Conditionally render icons based on menuOpen state */}
          {menuOpen &&
            navigation.map((item, i) => {
              if (
                localStorage.getItem('isAdmin') === 'false' &&
                item.path === '/viewTickets'
              ) {
                return <></>
              }
              return (
                <ListItem key={i} disablePadding>
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              )
            })}
        </List>
      </Box>
    </div>
  )

  return (
    <div>
      {sideNav && (
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '40px' },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </div>
  )
}
