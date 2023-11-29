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
// import { GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";
import React, { useContext, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AppContext } from "../../context/AppProvider";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";
import { ToastContainer } from "react-toastify";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierContainer,
  MagnifierZoom,
  MagnifierPreview,
} from "@niklasmaki/react-image-magnifiers";

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
      <ToastContainer />
      <Box sx={{ display: "flex", px: 2, pt: 7, pb: 15 }}>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* <Magnifier
            imageSrc={image}
            style={{ width: "400px" }}
            imageAlt={title}
            largeImageSrc={image}
          /> */}

          <SideBySideMagnifier
            imageSrc={image}
            imageAlt={title}
            largeImageSrc={image}
            style={{ width: "350px" }}
            zoomContainerBorder="none"
            overlayBoxOpacity={0.8}
            overlayOpacity={0.5}
            fillAvailableSpace={false}
            fillGapLeft={20}
            fillGapRight={20}
            fillGapTop={20}
            fillGapBottom={20}
          />

          {/* <MagnifierContainer style={{ width:'100%' }}>
            <div style={{ width: "300px" }}>
              <MagnifierPreview imageSrc={image} />
            </div>
            <div>
              <MagnifierZoom style={{ height: "400px" }} imageSrc={image} />
            </div>
          </MagnifierContainer> */}
        </Box>
        <Box sx={{ width: { xs: "100%", md: "80%" }, display: "flex" }}>
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

                {user?.isAuthenticated ? (
                  <Box sx={{ display: "flex" }}>
                    {wishlistItems.some((item) => item.id === product.id) ? (
                      <Button
                        variant="text"
                        startIcon={<FavoriteBorderIcon />}
                        sx={{
                          // bgcolor: "white",
                          color: "red",
                          border: 0,
                        }}
                      ></Button>
                    ) : (
                      <Button
                        onClick={() => handleAddToWishlist(product)}
                        variant="text"
                        startIcon={<FavoriteBorderIcon />}
                        sx={{
                          color: "black",
                          border: 0,
                          p: 0,
                          "&:hover": {
                            color: "red",
                            bgcolor: "white",
                            // bgcolor: "red",
                          },
                        }}
                      ></Button>
                    )}
                  </Box>
                ) : null}
              </Stack>

              <Typography fontSize={14} sx={{ color: "gray", mb: 3 }}>
                {description}
              </Typography>

              <Box sx={{ mb: 3 }}>
                {cartItems?.some((item) => item.id === product.id) ? (
                  <Button
                    // disabled
                    variant="contained"
                    sx={{
                      bgcolor: "#22c55e",
                      color: "white",
                      fontWeight: "600",
                    }}
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
                )}
              </Box>
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
