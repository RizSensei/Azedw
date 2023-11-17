import React from 'react'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';

const CartTableMobile = ({cartItems,setCartItems,onDecreaseClick,onIncreaseClick,onDeleteClick}) => {
  return (
    <>
          {cartItems.map((item,index) => (
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
                <Stack direction="row" spacing={2}>
                  <IconButton
                    size="small"
                    onClick={() => onDecreaseClick(item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </IconButton>
                  <TextField value={item.quantity} size="small" sx={{ width: "44px" }} />
                  <IconButton
                    size="small"
                    onClick={() => onIncreaseClick(item)}
                  >
                    +
                  </IconButton>
                </Stack>
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

export default CartTableMobile