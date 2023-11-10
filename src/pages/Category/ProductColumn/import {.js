import {
  Box,
  Typography,
  Select,
  MenuItem,
  Divider,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Icon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import Topbar from "./Topbar";
import IconButton from "./IconButton";
import { ToastContainer, toast } from "react-toastify";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { AppContext } from "../../../context/AppProvider";
// import { useTheme } from "@emotion/react";


const ProductColumn = ({ filteredProducts}) => {
  const {
    handleAddToWishlist,
    handleAddToCart,
  } = useContext(AppContext);
  const theme = useTheme();


  return (
    <>
      <Box sx={{ px: {xs:0, md:10} }} width="100%">
        <Topbar />
        <ToastContainer />
        <Divider sx={{ mb: 5 }} />
        <Box>
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
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height={useMediaQuery(theme.breakpoints.down("md")) ? 200 : 300}
                      image={product.image}
                      alt={product.title}
                      sx={{
                        objectFit: "fit",
                        p: 1,
                        cursor: "pointer",
                        "&:hover + .icon-box": {
                          display: "block"
                        },
                      }}
                    />
                    <CardContent
                      className="icon-box"
                      sx={{
                        position: "absolute",
                        bottom: "20px",
                        width: "100%",
                        display: "none",
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                       
                        <IconButton icon={<VisibilityOutlinedIcon />}/>
                        <IconButton icon={<FavoriteBorderIcon onClick={() => handleAddToWishlist(product)}/>}/>
                        <IconButton icon={<ShoppingBagOutlinedIcon onClick={() => handleAddToCart(product)}/>}/>
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
        </Box>
      </Box>
    </>
  );
};

export default ProductColumn;
