import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const WishlistMobile = ({wishlistItems,setWishlistItems,onDeleteClick}) => {
  return (
    <>
          {wishlistItems.map((item,index) => (
            <Box key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  height="100px"
                  style={{ borderRadius: "10px", border: "1px solid gray" }}
                />
                <Stack
                  sx={{
                    ml: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "400" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    $ {item.price}
                  </Typography>
                </Stack>
              </Box>
              <Stack
                sx={{
                  diplay: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => onDeleteClick(item)}
                  size="small"
                  sx={{ color: "red", fontSize: "8px" }}
                >
                  Remove
                </Button>
              </Stack>
            </Box>
          ))}
        </>
  )
}

export default WishlistMobile