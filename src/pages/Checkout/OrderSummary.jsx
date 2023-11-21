import {
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/features/userSlice";

const OrderSummary = () => {
  const cart = useSelector(selectCart);
  const total = cart.data.cart?.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity * currValue.price;
  }, 0);
  const delivery_charge = (15.00).toFixed(2);
  const discount = parseFloat(0.2 * total).toFixed(2);
  const total_exc_tax = parseFloat(total - discount).toFixed(2);
  const tax = parseFloat(0.15 * total_exc_tax).toFixed(2);
  const total_with_tax = (parseFloat(total_exc_tax) + parseFloat(tax)).toFixed(
    2
  );
  const coupon_discount = parseFloat(0.07 * total_with_tax).toFixed(2);
  const total_with_coupon_discount = (
    total_with_tax - parseFloat(0.07 * total_with_tax)
  ).toFixed(2);
  const saving = (parseFloat(total) - parseFloat(total_with_tax)).toFixed(2);
  const saving_coupon_code = (parseFloat(total) - parseFloat(total_with_coupon_discount)).toFixed(2);

  const couponCodeLists = ["X20yup", "G56pol"];
  const [couponCode, setCouponCode] = useState("");
  const [isValidCode, setIsValidCode] = useState(false);

  const handleCouponCodeApply = () => {
    let code = couponCodeLists?.find((code) => code === couponCode);
    if (code) {
      setIsValidCode(true);
    } else {
      console.log("No discount");
    }
  };

  return (
    <Box sx={{ px: 2, width: "40%" }}>
      <Typography sx={{ fontWeight: "600", mb: 1 }}>Order Summary</Typography>
      <Stack divider={<Divider />} rowGap={1}>
        <Box sx={{ color: "gray", fontSize: "12px" }}>
          {cart.data.cart?.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{
                  width: "80%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                x{item.quantity} &nbsp; {item.title}
              </Typography>
              <Typography>${item.quantity * item.price}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ color: "gray" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Delivery</Typography>
            <Typography>${delivery_charge}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Discount</Typography>
            <Typography sx={{ color:'red' }}>${discount}</Typography>
          </Box>
        </Box>
        <Box sx={{ color: "gray" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Total (exc tax)</Typography>
            <Typography> ${total_exc_tax} </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Tax</Typography>
            <Typography> ${tax}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            label="Coupon Code - 7% Discount"
            value={couponCode}
            disabled={isValidCode ? true : false}
            onChange={(e) => setCouponCode(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ReceiptOutlinedIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Button
            variant="text"
            onClick={() => handleCouponCodeApply()}
            disabled={isValidCode ? true : false}
          >
            {!isValidCode ? (
              <Typography>Apply</Typography>
            ) : (
              <CheckOutlinedIcon />
            )}
          </Button>
        </Box>
        {isValidCode ? <Box sx={{ display: "flex", justifyContent: "space-between", color:'gray' }}>
            <Typography>Coupon Discount</Typography>
            <Typography>${coupon_discount}</Typography>
          </Box> : null}
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Order Total</Typography>
            {!isValidCode ? (
              <Typography sx={{ fontWeight: "600" }}>
                ${total_with_tax}
              </Typography>
            ) : (
              <Typography sx={{ fontWeight: "600" }}>
                ${total_with_coupon_discount}
              </Typography>
            )}
          </Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              border: "2px solid green",
              color: "green",
              bgcolor: "#edf9f3",
            }}
          >
            <Typography>Your total saving on this order</Typography>
            {
                isValidCode ? <Typography> ${saving_coupon_code}</Typography>:<Typography> ${saving}</Typography>
            }
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderSummary;
