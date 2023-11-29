import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const WishlistDesktop = ({ wishlistItems, handleAddToCart, onDeleteClick }) => {
  return wishlistItems.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {wishlistItems?.map((item, index) => (
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
              <TableCell>
                <img
                  src={item.image}
                  alt={item.title}
                  height="90px"
                  width="90px"
                />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingBagOutlinedIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src="https://www.shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png" alt="" />
    </Box>
  );
};

export default WishlistDesktop;
