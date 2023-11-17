import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  ListItemIcon,
  OutlinedInput,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const ShippingDetails = () => {
  const [shippedValue, setShippedValue] = useState("");

  const handleShippedValueChange = (event) => {
    setShippedValue(event.target.value);
  };

  return (
    <Box sx={{ px: 10, width: "60%" }}>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={shippedValue}
        onChange={handleShippedValueChange}
        sx={{ rowGap: 2 }}
      >
        <FormControlLabel
          value="Get it delivered in only 30 minutes"
          control={<Radio />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <DeliveryDiningOutlinedIcon />
              </ListItemIcon>
              <Typography
                sx={{ fontWeight: "600", fontSize: "14px", color: "gray" }}
              >
                Get it delivered in only 30 minutes
              </Typography>
            </div>
          }
          sx={{
            border: "2px solid gray",
            borderRadius: "5px",
            display: "flex",
            alignContent: "center",
          }}
        />

        <FormControlLabel
          value="Pickup available in 3 stores near you"
          control={<Radio />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <StorefrontOutlinedIcon />
              </ListItemIcon>
              <Typography
                sx={{ fontWeight: "600", fontSize: "14px", color: "gray" }}
              >
                Pickup available in 3 stores near you
              </Typography>
            </div>
          }
          sx={{
            border: "2px solid gray",
            borderRadius: "5px",
            display: "flex",
            alignContent: "center",
          }}
        />
      </RadioGroup>

      <Box sx={{ mt: 3 }}>
        <Typography sx={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>
          Shipping Address
        </Typography>
        <FormControl size="small" sx={{ width: "75%" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <BorderColorOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontWeight: "600", fontSize: "14px", color: "gray", mb:2 }}>
          Payment Information
        </Typography>
        <Box sx={{ display: "flex", columnGap: "2" }}>
          <Button variant="outlined" size="small">
            <img src="src/images/esewa.png" alt="esewa"/>
          </Button>
          <Button variant="outlined" size="small">
          <img src="src/images/khalti.png" alt="khalti" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShippingDetails;
