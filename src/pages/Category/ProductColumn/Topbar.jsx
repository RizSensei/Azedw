import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { ContactlessOutlined } from "@mui/icons-material";

const Topbar = ({ format, handleFormatChange, sortingValue, handleSortingChange }) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Typography>Results</Typography>

      <Box sx={{ display: { xs: "flex" } }}>
        <ToggleButtonGroup
          value={format}
          size="small"
          sx={{ mr: 2 }}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value="grid">
            <GridViewOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="list">
            <ViewListOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <FormControl sx={{ minWidth: {xs:250, md:300} }}>
          <Select size="small" value={sortingValue} onChange={(e) => handleSortingChange(e.target.value)}>
            <MenuItem value={0}>Sort by Default</MenuItem>
            <MenuItem value={1}>Sort by popularity</MenuItem>
            <MenuItem value={2}>Sort by average rating</MenuItem>
            <MenuItem value={3}>Sort by newness</MenuItem>
            <MenuItem value={4}>Sort by price: low to high</MenuItem>
            <MenuItem value={5}>Sort by price: high to low</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Topbar;
