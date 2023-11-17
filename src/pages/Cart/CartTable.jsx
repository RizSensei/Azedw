import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CartTableDesktop from "./CartTableDesktop";
import CartTableMobile from "./CartTableMobile";

const CartTable = ({ cartItems, setCartItems, setCartItemsCount,handleCartToCheckout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  const onDecreaseClick = (item) => {
    let arr = [...cartItems];
    let index = arr.findIndex((e) => e.id === item.id);

    if (index > -1) {
      arr[index].quantity = arr[index].quantity - 1;
      setCartItems(arr);
    }
  };

  const onIncreaseClick = (item) => {
    let arr = [...cartItems];
    let index = arr.findIndex((e) => e.id === item.id);

    if (index > -1) {
      arr[index].quantity = arr[index].quantity + 1;
      setCartItems(arr);
    }
  };

  const onDeleteClick = (deleteCartItem) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem !== deleteCartItem
    );
    setCartItems(newCartItems);

    setCartItemsCount((prevValue) => prevValue - 1);
  };

  return (
    <Box sx={{ p: { xs: 1, md: 10 } }}>
      {!isMobile ? (
        <CartTableDesktop cartItems={cartItems} setCartItems={setCartItems} onDecreaseClick={onDecreaseClick} onIncreaseClick={onIncreaseClick} onDeleteClick={onDeleteClick} handleCartToCheckout={handleCartToCheckout}/>
      ) : (
        <CartTableMobile cartItems={cartItems} setCartItems={setCartItems} onDecreaseClick={onDecreaseClick} onIncreaseClick={onIncreaseClick} onDeleteClick={onDeleteClick}/>
      )}
    </Box>
  );
};

export default CartTable;
