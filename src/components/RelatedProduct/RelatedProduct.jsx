import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "../../pages/Category/ProductColumn/IconButton";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import { AppContext } from "../../context/AppProvider";

const RelatedProduct = ({ product, productsList }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const user = useSelector(selectUser);

  const { handleAddToWishlist, handleAddToCart } = useContext(AppContext);

  const related_products = productsList
    ?.filter((item) => item.category === product.category)
    .slice(0, 4);

  return (
    <Box sx={{ px: 15 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "500", mb: 5 }}
      >
        Related Product
      </Typography>
      {
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          {related_products?.map((product) => (
            <Grid item key={product.id} xs={6} sm={6} md={3}>
              <Card
              style={{ width: 200,
                height: 250, }}
                sx={{
                  position: "relative", 
                  overflowY: "hidden" ,
                  boxShadow: "none",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  "&:hover  .icon-box": {
                    transform: "translateY(-100px)",
                  },
                }}
              >
                  <CardMedia
                    component="img"
                    height="100%"
                  width="100%"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      objectFit: "scale-down",
                      p: 1,
                      cursor: "pointer",
                    }}
                  />
                  <CardContent
                    className="icon-box"
                    sx={{
                      position: "absolute",
                      bottom: "-90px",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Link to={`/menu/${product.id}`}>
                        <IconButton
                          icon={<VisibilityOutlinedIcon fontSize="1rem" />}
                        />
                      </Link>

                      {user.isAuthenticated ? (
                        <IconButton
                          icon={
                            <FavoriteBorderIcon
                              fontSize="1rem"
                              onClick={() => handleAddToWishlist(product)}
                            />
                          }
                        />
                      ) : null}

                      <IconButton
                        icon={
                          <ShoppingBagOutlinedIcon
                            fontSize="1rem"
                            onClick={() => handleAddToCart(product)}
                          />
                        }
                      />
                    </Box>
                  </CardContent>
              </Card>

              <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom>{product.title}</Typography>
                  <Typography sx={{ fontWeight: "600" }}>
                    $ {product.price}
                  </Typography>
                </CardContent>
            </Grid>
          ))}
        </Grid>
      }
    </Box>
  );
};

export default RelatedProduct;
