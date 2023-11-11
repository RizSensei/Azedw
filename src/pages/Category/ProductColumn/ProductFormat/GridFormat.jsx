import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const GridFormat = ({filteredProducts, user, handleAddToWishlist, handleAddToCart}) => {
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
      {filteredProducts?.map((product) => (
        <Grid item key={product.id} xs={6} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflowY: "hidden",
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
              </Card>
              <CardContent
                        className="icon-box"
                        sx={{
                          position: "absolute",
                          bottom: "20px",
                          // bottom: "-90px",
                          width: "100%",
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Link to={`/menu/${product.id}`}>
                            <IconButton icon={<VisibilityOutlinedIcon />} />
                          </Link>

                          {user ? (
                            <IconButton
                              icon={
                                <FavoriteBorderIcon
                                  onClick={() => handleAddToWishlist(product)}
                                />
                              }
                            />
                          ) : null}

                          <IconButton
                            icon={
                              <ShoppingBagOutlinedIcon
                                onClick={() => handleAddToCart(product)}
                              />
                            }
                          />
                        </Box>
                      </CardContent>
            </Box>

            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom>
                {product.title.substring(0, 20)}
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                $ {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridFormat;
