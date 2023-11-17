import { Box, Divider, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import Topbar from "./Topbar";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../../../context/AppProvider";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/userSlice";
import GridFormat from "./ProductFormat/GridFormat";
import ListFormat from "./ProductFormat/ListFormat";
import Pagination from "../../../components/Pagination/Pagination";

const ProductColumn = ({ filteredProducts, setFilteredProducts }) => {
  const user = useSelector(selectUser);

  const { handleAddToWishlist, handleAddToCart } = useContext(AppContext);

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
            <GridFormat
              filteredProducts={filteredProducts}
              user={user}
              handleAddToWishlist={handleAddToWishlist}
              handleAddToCart={handleAddToCart}
            />
          ) : format == "list" ? (
            <ListFormat
              user={user}
              filteredProducts={filteredProducts}
              isMobile={isMobile}
              handleAddToWishlist={handleAddToWishlist}
              handleAddToCart={handleAddToCart}
            />
          ) : null}
          <Pagination />
        </Box>
      </Box>
    </>
  );
};

export default ProductColumn;
