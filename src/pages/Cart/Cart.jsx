import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import CartTable from "./CartTable";
import { AppContext } from "../../context/AppProvider";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { checkout } from "../../redux/features/userSlice"

const Cart = () => {
  const {
    cartItems,setCartItems,setCartItemsCount
  } = useContext(AppContext);

  const dispatch = useDispatch();

  const handleCartToCheckout = () =>{
    dispatch(
      checkout({
        cart: cartItems.map((item) => ({
          title: item.title,
            price: item.price,
            quantity: item.quantity,
        }))
      })
    )
  }

  return (
    <Layout>
      <Topbar text="Cart" />
      <Box>
        <CartTable cartItems={cartItems} setCartItems={setCartItems} setCartItemsCount={setCartItemsCount} handleCartToCheckout={handleCartToCheckout}/>
      </Box>
    </Layout>
  );
};

export default Cart;
