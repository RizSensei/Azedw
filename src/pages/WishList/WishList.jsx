import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import { AppContext } from "../../context/AppProvider";
import { Box, useMediaQuery } from "@mui/material";
import WishlistDesktop from "./WishlistDesktop";
import WishlistMobile from "./WishlistMobile";
import { useTheme } from "@emotion/react";

const WishList = () => {
  const {
    handleAddToCart,
    wishlistItems,
    setWishlistItems,
    setWishlistItemsCount
  } = useContext(AppContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  const onDeleteClick = (deleteWishlistItem) => {
    const newWishlistItems = wishlistItems.filter(
      (wishlistItem) => wishlistItem !== deleteWishlistItem
    );
    setWishlistItems(newWishlistItems);

    setWishlistItemsCount((prevValue) => prevValue - 1);
  };

  return (
    <Layout>
      <Topbar text="My Wishlist" />
      <Box sx={{ p: 10 }}>
        {!isMobile ? 
        <WishlistDesktop handleAddToCart={handleAddToCart} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} onDeleteClick={onDeleteClick}/>
        :
        <WishlistMobile handleAddToCart={handleAddToCart} wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} onDeleteClick={onDeleteClick}/>
        }
      </Box>
    </Layout>
  );
};

export default WishList;
