import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Mobile = ({product}) => {
  const { title, image, description, price, rating } = product;
  return (
    <Box sx={{ p: 3 }}>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <CardMedia
              component="img"
              height="100%"
              image={image}
              alt={title}
              sx={{
                objectFit: "fit",
                p: 1,
              }}
            />
          </Box>
          <Box></Box>
        </Box>
  )
}

export default Mobile