import React, { useEffect, useState } from "react";

const Pagination = ({ productsList, setFilteredProducts }) => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [recordsPerPage] = useState(10);
    // const indexOfLastRecord = currentPage * recordsPerPage;
    // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentProducts = productsList.slice(
    //   indexOfFirstRecord,
    //   indexOfLastRecord
    // );
    // const nPages = Math.ceil(productsList.length / recordsPerPage);
    
    // useEffect(() => {
    //   setFilteredProducts(currentProducts);
    // }, []);
    // console.log(currentProducts)

  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  // const goToNextPage = () => {
  //   if (currentPage != nPages) setCurrentPage(currentPage + 1);
  // };

  // const goToPrevPage = () => {
  //   if (currentPage != 1) setCurrentPage(currentPage - 1);
  // };


  return (
    <>
      {/* <ul className="py-5 flex justify-end space-x-5">
        <li className="page-item">
          <a onClick={goToPrevPage} href="#" className="page-link">
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNum) => (
          <li
            key={pageNum}
            className={`page-item ${
              currentPage == pageNum ? "text-blue-500 font-semibold" : ""
            }`}
          >
            <a onClick={() => setCurrentPage(pageNum)} href="#">
              {pageNum}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={goToNextPage} href="#" className="page-link">
            Next
          </a>
        </li>
      </ul> */}
    </>
  );
};

export default Pagination;
