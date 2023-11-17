import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  IconButton,
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
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartTableDesktop = ({
  cartItems,
  setCartItems,
  onDecreaseClick,
  onIncreaseClick,
  onDeleteClick,
  handleCartToCheckout
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right" sx={{ fontWeight:"600" }}>Image</TableCell>
              <TableCell sx={{ fontWeight:"600" }}>Product</TableCell>
              <TableCell align="right" sx={{ fontWeight:"600" }}>Price</TableCell>
              <TableCell align="right" sx={{ fontWeight:"600" }}>Quantity</TableCell>
              <TableCell align="right" sx={{ fontWeight:"600" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          {cartItems.length > 0 ? (
            <TableBody>
              {cartItems?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Button
                      onClick={() => onDeleteClick(item)}
                      sx={{
                        color: "red",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Card
                      style={{
                        width: 80,
                        height: 120,
                        overflow: "hidden",
                        boxShadow: "none",
                      }}
                    >
                      <CardMedia
                        sx={{
                          height: "100%",
                          width: "100%",
                          objectFit: "scale-down",
                        }}
                        component="img"
                        image={item.image}
                        alt={item.title}
                      />
                    </Card>
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2}>
                      <IconButton
                        size="small"
                        onClick={() => onDecreaseClick(item)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </IconButton>
                      <TextField
                        value={item.quantity}
                        size="small"
                        sx={{ width: "44px" }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => onIncreaseClick(item)}
                      >
                        +
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    ${item.price * item.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                p: 10,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: "gray" }}
              >
                No items in the cart
              </Typography>
            </Box>
          )}
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
        <Box>
          <Typography sx={{ fontWeight: "600", color: "gray" }}>
            Total: $
            {cartItems?.reduce((prevValue, currValue) => {
              return prevValue + currValue.quantity * currValue.price;
            }, 0)}
          </Typography>
          <Link to="/checkout">
            <Button
              variant="contained"
              sx={{
                bgcolor: "gray",
                color: "white",
                py: 1,
                width: "100%",
                borderRadius: "0%",
              }}
              onClick={handleCartToCheckout}
            >
              Proceed to Checkout
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CartTableDesktop;
