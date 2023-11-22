import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  ListItemText,
  Rating,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AppContext } from "../../context/AppProvider";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";
import { ToastContainer } from "react-toastify";

const Desktop = ({ product, productsList }) => {
  const { title, image, description, price, rating } = product;

  const { cartItems, wishlistItems, handleAddToWishlist, handleAddToCart } =
    useContext(AppContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const user = useSelector(selectUser);

  return (
    <>
    <ToastContainer/>
      <Box sx={{ display: "flex", p: 10 }}>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt={title}
            sx={{
              objectFit: "scale-down",
              p: 1,
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex" }}>
          <ListItem>
            <ListItemText sx={{ px: 10 }}>
              <Typography sx={{ mb: 1 }} variant="h3" fontWeight={500}>
                {title}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Typography fontWeight={500} variant="h6">
                  $ {price}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  sx={{ color: "gray", textDecoration: "line-through" }}
                >
                  ${price * 1.5}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Typography fontWeight={500}>
                  <Rating name="read-only" value={rating.rate} readOnly />
                </Typography>
                <Typography>({rating.count} Customer review)</Typography>
              </Stack>

              <Typography fontSize={14} sx={{ color: "gray", mb: 3 }}>
                {description}
              </Typography>


              <Box sx={{ mb: 3 }}>
                {cartItems?.some((item) => item.id === product.id) ? (
                    <Button
                      // disabled
                      variant="contained"
                      sx={{ bgcolor: "#22c55e", color: "white", fontWeight:'600' }}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="contained"
                      sx={{ bgcolor: "black", color: "white" }}
                    >
                      Add To Cart
                    </Button>
                  )
                }
              </Box>

                <>
                {user?.isAuthenticated ? (
                <Box sx={{ display: "flex" }}>
                  {wishlistItems.some((item) => item.id === product.id) ? (
                    <Button
                      variant="outlined"
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        bgcolor: "red",
                        color: "white",
                        border: 0,
                      }}
                    >
                      <Typography>In Wishlist</Typography>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleAddToWishlist(product)}
                      variant="outlined"
                      startIcon={<FavoriteBorderIcon />}
                      sx={{
                        color: "black",
                        border: 0,
                        "&:hover": {
                          color: "white",
                          bgcolor: "red",
                        },
                      }}
                    >
                      <Typography>Add To Wishlist</Typography>
                    </Button>
                  )}
                </Box>
              ) : null}
                </>
              
            </ListItemText>
          </ListItem>
        </Box>
      </Box>

      {/* related products */}
      <RelatedProduct product={product} productsList={productsList} />
    </>
  );
};

export default Desktop;
