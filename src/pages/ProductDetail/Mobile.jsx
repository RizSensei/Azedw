import {
  Box,
  Button,
  CardMedia,
  ListItem,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import { AppContext } from "../../context/AppProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ToastContainer } from "react-toastify";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";

const Mobile = ({ product,productsList }) => {
  const { title, image, description, price, rating } = product;

  const { cartItems, wishlistItems, handleAddToWishlist, handleAddToCart } =
    useContext(AppContext);

  const user = useSelector(selectUser);
  return (
    <>
      <ToastContainer />
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

          <Box sx={{ width: { xs: "100%", md: "80%" }, display: "flex" }}>
            <ListItem>
              <ListItemText sx={{ px: 2 }}>
                <Typography sx={{ mb: 1 }} variant="h5" fontWeight={500}>
                  {title}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                  <Typography
                    fontWeight={500}
                    // variant="h6"
                  >
                    $ {price}
                  </Typography>
                  <Typography
                    // variant="h6"
                    fontWeight={500}
                    sx={{ color: "gray", textDecoration: "line-through" }}
                  >
                    ${price * 1.5}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mb: 2, justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography fontWeight={500}>
                      <Rating name="read-only" value={rating.rate} readOnly />
                    </Typography>
                    <Typography>({rating.count} Customer review)</Typography>
                  </Box>

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
        <Box></Box>
      </Box>

      {/* related products */}
      <RelatedProduct product={product} productsList={productsList} />
    </>
  );
};

export default Mobile;
