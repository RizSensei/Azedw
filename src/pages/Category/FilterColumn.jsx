import React, { useEffect, useMemo, useState } from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useTheme } from "@emotion/react";

const FilterColumn = ({ productsList, setFilteredProducts }) => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  const filter = useMemo(() => {
    return productsList.filter((product) => product.title.toLowerCase().includes(searchedProduct.toLowerCase()));
  },[searchedProduct])

  useEffect(() => {
    setFilteredProducts(filter);
  }, [filter]);

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const handleCategoryFilter = (selectedCategory) => {
    console.log(selectedCategory)
    const filter = productsList.filter(
      (product) => product.category == selectedCategory
    );
    setSelectedCategory(selectedCategory);
    setFilteredProducts(filter);
  };

  return (
    <>
      <Box>
        <FormControl variant="standard" sx={{ mb: 3, width:'100%' }}>
          <Input
            id="input-with-icon-adornment"
            placeholder="Search Product...."
            value={searchedProduct}
            onChange={(e) => setSearchedProduct(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Box>
          {!isMobile ? (
            <>
              <Typography sx={{ fontWeight: "600" }} gutterBottom>
                Filter by categories
              </Typography>
              <List>
                {categories?.map((category, index) => (
                  <ListItem
                    key={index}
                    sx={{ p: 0 }}
                    value={category}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    <ListItemButton
                      sx={{
                        bgcolor: category === selectedCategory ? "gray" : "",
                        color:
                          category === selectedCategory ? "white" : "black",
                        "&:hover": {
                          bgcolor: category === selectedCategory ? "gray" : "",
                          color:
                            category === selectedCategory ? "white" : "black",
                        },
                        borderRadius: "2px",
                      }}
                    >
                      <ListItemText secondary={category} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <FormControl variant="standard" sx={{ mb: 3, minWidth: "100%" }}>
              <InputLabel>Categories</InputLabel>
              <Select 
                value={selectedCategory}
                onChange={(e) => handleCategoryFilter(e.target.value)}
              >
                {categories?.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
      </Box>
    </>
  );
};

export default FilterColumn;
