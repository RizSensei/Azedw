import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppProvider";
import { useTheme } from "@emotion/react";

const CartModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    wishlistItems,
    cartItems,
    handleAddToWishlist,
    handleAddToCart,
    cartItemsCount,
  } = useContext(AppContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const style = {
    position: "absolute",
    top: "50%",
    right: "0%",
    transform: isMobile ? "translate(-8%, -45%)" : "translate(-20%, -50%)",
    width: isMobile ? 350 : 400,
    bgcolor: "background.paper",
    p: 4,
    border: 0,
  };

  return (
    <>
      <Button sx={{ postion: "relative" }} onClick={handleOpen}>
        <ShoppingBagOutlinedIcon />
        <Typography
          sx={{
            position: "absolute",
            top: "0px",
            left: "26px",
            width: "20px",
            height: "20px",
            backgroundColor: "red",
            color: "white",
            fontSize: "15px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cartItemsCount}
        </Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ height: "300px", overflowY: "scroll" }}>
            {cartItems?.map((item, index) => (
              <Card key={index} sx={{ display: "flex", boxShadow: 0, mb: 1 }}>
                <Box sx={{ height: "80px" }}>
                  <CardMedia
                    sx={{ height: "full", width: "80px", objectFit: "cover" }}
                    component="img"
                    image={item.image}
                    alt={item.title}
                  />
                </Box>
                <CardContent>
                  <Typography sx={{ fontSize: "15px" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "600" }}>
                    $ {item.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography
              sx={{ fontWeight: "600", color: "gray", textAlign: "center" }}
            >
              SubTotal: $
              {cartItems?.reduce((prevValue, currValue) => {
                return prevValue + currValue.quantity * currValue.price;
              }, 0)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
            <div style={{ width: "100%" }}>
              <Link to="/cart">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 1,
                    width: "100%",
                    borderRadius: "0%",
                  }}
                >
                  VIEW CART
                </Button>
              </Link>
            </div>

            <div style={{ width: "100%" }}>
            <Link to="/checkout">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  py: 1,
                  width: "100%",
                  borderRadius: "0%",
                }}
              >
                CHECKOUT
              </Button>
            </Link>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CartModal;
