import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Topbar from "../../components/Topbar/Topbar";
import FilterColumn from "./FilterColumn";
import ProductColumn from "./ProductColumn/ProductColumn";
import { Box } from "@mui/material";
import { ProductContext } from "../../context/ProductProvider";

const Category = () => {
const {productsList,filteredProducts,setFilteredProducts} = useContext(ProductContext)
  return (
    <Layout>
      <Topbar text='Category' />
      <Box sx={{ display:{xs:'block', md:'flex'}, py:5, px: {xs:5, md:10} }}>
        <FilterColumn productsList={productsList} setFilteredProducts={setFilteredProducts}/>
        <ProductColumn filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      </Box>
    </Layout>
  );
};

export default Category;
