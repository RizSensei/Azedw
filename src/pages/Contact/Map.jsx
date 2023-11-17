import { Box } from '@mui/material'
import React from 'react'

const Map = () => {
  return (
    <Box sx={{ height: {xs:"50vh", md:"100vh"}, width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.15656930384!2d85.31535457425431!3d27.71245172526845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b2c0aed2d%3A0x426741e3dcfefb7a!2sLondon%20Pub!5e0!3m2!1sen!2snp!4v1699071130389!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </Box>
  )
}

export default Map