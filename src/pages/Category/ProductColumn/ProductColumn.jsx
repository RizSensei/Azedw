import {
  Box,
  Typography,
  Divider,
  CardContent,
  Icon,
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Topbar from "./Topbar";
import IconButton from "./IconButton";
import { ToastContainer, toast } from "react-toastify";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { AppContext } from "../../../context/AppProvider";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/userSlice";

const  ProductColumn = ({ filteredProducts, setFilteredProducts }) => {

  const user = useSelector(selectUser);
  
  const {
    handleAddToWishlist,
    handleAddToCart,
  } = useContext(AppContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [format, setFormat] = useState("grid");
  const handleFormatChange = (e, value) => {
    if (value !== null) {
      setFormat(value);
    }
  };

  const [sortingValue, setSortingValue] = useState(0);
  
  const handleSortingChange = (value) => {
    setSortingValue(value);
    switch (value) {
      case 2:
        const HighToLowProductRating = [...filteredProducts].sort(
          (a, b) => a.rating.rate - b.rating.rate
        );
        return setFilteredProducts(HighToLowProductRating);
      case 4:
        const lowToHighProducts = [...filteredProducts].sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
        return setFilteredProducts(lowToHighProducts);
      case 5:
        const highToLowProducts = [...filteredProducts].sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        return setFilteredProducts(highToLowProducts);
    }
  };

  return (
    <>
      <Box sx={{ px: { xs: 0, md: 10 } }} width="100%">
        <Topbar
          format={format}
          handleFormatChange={handleFormatChange}
          sortingValue={sortingValue}
          handleSortingChange={handleSortingChange}
        />
        <ToastContainer />
        <Divider sx={{ mb: 2 }} />
        <Box>
          {format == "grid" ? (
            <Grid
              container
              rowSpacing={5}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            >
              {filteredProducts?.map((product) => (
                <Grid item key={product.id} xs={6} sm={6} md={4}>
                  <Card
                    sx={{
                      boxShadow: "none",
                    }}
                  >
                    <Box sx={{ position: "relative", overflowY:'hidden' }} height={isMobile ? 200 : 300}>
                      <CardMedia
                        component="img"
                        height={isMobile ? 200 : 300}
                        image={product.image}
                        alt={product.title}
                        sx={{
                          objectFit: "fit",
                          p: 1,
                          cursor: "pointer",
                          // transition: "transform 0.3s",
                          // '&:hover + .icon-box' : {
                          //   transform: "translateY(-100px)"
                          // }
                        }}
                      />
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

                         { user ? 
                         <IconButton
                            icon={
                              <FavoriteBorderIcon
                                onClick={() => handleAddToWishlist(product)}
                              /> }
                          />
                          :
                           null}

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
                      <Typography gutterBottom>{product.title}</Typography>
                      <Typography sx={{ fontWeight: "600" }}>
                        $ {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : format == "list" ? (
            <List sx={{ width: "100%" }}>
              {filteredProducts?.map((product) => (
                <ListItem key={product.id} sx={{ mb: 2 }}>
                  <ListItemAvatar>
                    <CardMedia
                      component="img"
                      height={isMobile ? 200 : 300}
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: "fit",
                        p: 1,
                        cursor: "pointer",
                        "&:hover + .icon-box": {
                          display: "block",
                        },
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText sx={{ px: {xs:2, md:10} }}>
                    <Typography sx={{ mb: 1 }} fontWeight={500}>
                      {product.title}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <Typography fontWeight={500}>
                        $ {product.price}
                      </Typography>
                      <Typography
                        fontWeight={500}
                        sx={{ color: "gray", textDecoration: "line-through" }}
                      >
                        $ {product.price * 1.5}
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default ProductColumn;
