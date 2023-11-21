import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const WishlistMobile = ({ wishlistItems, setWishlistItems, onDeleteClick, handleAddToCart }) => {
  return (
    <>
      {wishlistItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={item.image} alt="" height="100px" />
            <Stack
              sx={{
                ml: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontWeight: "400", fontSize: "15px" }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>$ {item.price}</Typography>
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
            <Button variant="outlined" onClick={() => handleAddToCart(item)}>
              <ShoppingBagOutlinedIcon />
            </Button>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default WishlistMobile;
