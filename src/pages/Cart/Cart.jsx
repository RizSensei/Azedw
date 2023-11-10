import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import CartTable from "./CartTable";
import { AppContext } from "../../context/AppProvider";
import { Box, List, ListItem } from "@mui/material";

const Cart = () => {
  const {
    cartItems,setCartItems,setCartItemsCount
  } = useContext(AppContext);

  return (
    <Layout>
      <Topbar text="Cart" />
      <Box>
        <CartTable cartItems={cartItems} setCartItems={setCartItems} setCartItemsCount={setCartItemsCount}/>
      </Box>
    </Layout>
  );
};

export default Cart;
