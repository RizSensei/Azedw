import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import {
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { ProductContext } from "../../context/ProductProvider";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const ProductDetail = () => {
  const { productsList } = useContext(ProductContext);

  const { id } = useParams();
  const product = productsList.find((product) => product.id === parseInt(id));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  if (!product) {
    // Handle the case where the product is not found
    return (
      <Layout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Product not found
          </Typography>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      {!isMobile ? (
        <Desktop product={product}/>
      ) : (
        <Mobile  product={product}/>
      )}
    </Layout>
  );
};

export default ProductDetail;
