import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { Box, Button, ButtonGroup } from "@mui/material";

const Pagination = () => {
  const { productsList, setFilteredProducts } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentProducts = productsList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(productsList.length / recordsPerPage);

  useEffect(() => {
    setFilteredProducts(currentProducts);
  }, [currentPage]);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage != nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage != 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Box sx={{ display:'flex', justifyContent:'flex-end', mt:5 }}>
      <ButtonGroup variant="text" size="small">
        <Button onClick={goToPrevPage}  className="page-link" sx={{ color:'gray' }}>Prev</Button>
        {
          pageNumbers.map((pageNum) => (
             <Button key={pageNum} 
             onClick={() => setCurrentPage(pageNum)}  
             sx={{ bgcolor:(currentPage == pageNum ? 'gray': 'white' ),
             color:(currentPage == pageNum ? 'white': 'gray' )}}>{pageNum}</Button>
          ))
        }
        <Button onClick={goToNextPage} className="page-link" sx={{ color:'gray' }}>Next</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
