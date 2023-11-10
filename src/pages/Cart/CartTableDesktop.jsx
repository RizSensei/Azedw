import { Box, Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react'

const CartTableDesktop = ({cartItems,setCartItems,onDecreaseClick,onIncreaseClick,onDeleteClick}) => {
  return (
    <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
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
                        <img
                          src={item.image}
                          alt={item.title}
                          height="90px"
                          width="90px"
                        />
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <TextField
                          value={item.quantity}
                          size="small"
                          sx={{ width: "40px" }}
                        />
                        <ButtonGroup variant="contained" orientation="vertical">
                          <Button
                            onClick={() => onDecreaseClick(item)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </Button>
                          <Button onClick={() => onIncreaseClick(item)}>
                            +
                          </Button>
                        </ButtonGroup>
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
            <Typography variant="h5" sx={{ fontWeight: "600", color: "gray" }}>
              Total: $
              {cartItems?.reduce((prevValue, currValue) => {
                return prevValue + currValue.quantity * currValue.price;
              }, 0)}
            </Typography>
          </Box>
        </>
  )
}

export default CartTableDesktop