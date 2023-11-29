import React from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const CartTableMobile = ({
  cartItems,
  setCartItems,
  onDecreaseClick,
  onIncreaseClick,
  onDeleteClick,
}) => {
  return (
    <>
      {cartItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            mb: 1,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              style={{
                width: 80,
                height: 120,
                display:'flex',
                justifyContent:'center'
              }}
            >
              <img
                src={item.image}
                alt=""
                height="100%"
                width="100%"
                style={{ objectFit: "scale-down" }}
              />
            </Box>

            <Stack
              sx={{
                ml: 1,
                display: "flex",
              }}
            >
              <Typography sx={{ fontWeight: "400" }}>{item.title}</Typography>
              <Typography sx={{ fontSize: "12px" }}>$ {item.price}</Typography>
            </Stack>
          </Box>
          <Stack
            sx={{
              display: "flex",
              // justifyContent: "space-between",
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
              <TextField
                value={item.quantity}
                size="small"
                sx={{ width: "44px" }}
              />
              <IconButton size="small" onClick={() => onIncreaseClick(item)}>
                +
              </IconButton>
            </Stack>
            <Button
              onClick={() => onDeleteClick(item)}
              size="small"
              sx={{ color: "red", fontSize: "8px", mt: 2 }}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default CartTableMobile;
