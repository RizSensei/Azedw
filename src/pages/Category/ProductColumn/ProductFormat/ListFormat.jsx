import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const ListFormat = ({ filteredProducts, isMobile,handleAddToWishlist,
  handleAddToCart,user }) => {
  return (
    <List sx={{ width: "100%" }}>
      {filteredProducts?.map((product) => (
        <ListItem key={product.id} sx={{ mb: 2 }}>
          <ListItemAvatar>
          <Box
              sx={{
                position: "relative",
                translate: 'transform 0.3s ease',
                overflowY: "hidden",
                '&:hover':{
                  cursor:'pointer'
                },
                '&:hover  .icon-box' : {
                  transform: 'translateY(-100px)'
                }
              }}
            >
            <Card style={{
                  width: 200,
                  height: 250,
                  overflow: "hidden",
                  boxShadow: "none",
                }}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={product.image}
                alt={product.title}
                style={{ objectFit: "scale-down" }}
              />
              <CardContent
                  className="icon-box"
                  sx={{
                    position: "absolute",
                    // bottom: "20px",
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
            </Box>
          </ListItemAvatar>
          <ListItemText sx={{ px: { xs: 2, md: 10 } }}>
            <Typography sx={{ mb: 1 }} fontWeight={500}>
              {product.title}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
              <Typography fontWeight={500}>$ {product.price}</Typography>
              <Typography
                fontWeight={500}
                sx={{ color: "gray", textDecoration: "line-through" }}
              >
                $ {product.price * 1.5}
              </Typography>
            </Stack>
            <Typography sx={{ color:'gray', fontSize:'13px' }}>
                {product.description}
              </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ListFormat;
