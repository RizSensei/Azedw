import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  // console.log(productsList)
  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch data from api
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProductsList(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Unable to fetch data");
      }
    };
    fetchProductsData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsList,
        setProductsList,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
