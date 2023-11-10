import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ul className="navigation_menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <Typography
                color={"black"}
                variant="h4"
                component="div"
                sx={{ fontWeight: 800 }}
              >
                AZEDW
              </Typography>
              <li>
                <Link to="/menu">Category</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Box>
  )
}

export default NavigationMenu