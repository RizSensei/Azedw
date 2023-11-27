import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const GridFormat = ({
  filteredProducts,
  user,
  handleAddToWishlist,
  handleAddToCart,
}) => {
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
      {filteredProducts?.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                translate: "transform 0.3s ease",
                overflow: "hidden",
                "&:hover": {
                  cursor: "pointer",
                },
                "&:hover  .icon-box": {
                  bottom: "50%", 
                  transform: "translate(-50%, 50%)", 
                },
              }}
            >
              <Card
                style={{
                  width: 200,
                  height: 250,
                  overflow: "hidden",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  alt="Image"
                  height="100%"
                  width="100%"
                  image={product.image}
                  style={{ objectFit: "scale-down" }}
                />
                <CardContent
                  className="icon-box"
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
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
            </Box>

            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom fontWeight={600}>
                {product.title.substring(0, 20)}...
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ mb: 1, justifyContent: "center" }}
              >
                <Typography fontWeight={500}>$ {product.price}</Typography>
                <Typography
                  fontWeight={500}
                  sx={{ color: "gray", textDecoration: "line-through" }}
                >
                  $ {(product.price * 1.5).toFixed(2)}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridFormat;
