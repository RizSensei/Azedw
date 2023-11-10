import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ClientQuote = () => {
  return (
    <Box sx={{ height:'100vh', position:'relative', mb:5 }}>
        <CardMedia
                sx={{ height: '100%', mb:1 }}
                image="https://images.pexels.com/photos/157928/young-man-male-handsome-model-attractive-157928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="image"
              />
              <Box sx={{ position:'absolute', top:'50px', right:'15%' }}>
                <Typography sx={{ color:'white', fontWeight:'600', fontSize:'50px' }}>Client's Quote</Typography>
                <Typography sx={{ color:'white', mb:5 }}>Travelling salesman and above it there hung a picture</Typography>
                <Card sx={{ bgcolor:'white', width:'500px', p:5 }}>
                    <Typography sx={{ mb:1 }}>
                    "Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and"
                    </Typography>
                    <Typography sx={{ fontWeight:'500' }}>--- JHON SMITH</Typography>
                </Card>
              </Box>
    </Box>
  )
}

export default ClientQuote