import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchAutoComplete = () => {
  const { productsList } = useContext(ProductContext);
  const items = productsList;

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      navigate(`/menu/${id}`);
      setSearchText("");
    }
  };

  const formatResult = (item) => {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <div style={{ aspectRatio: "square" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ height: 60, width: 60, objectFit: "scale-down" }}
            />
          </div>

          <div className="flex flex-col">
            <span style={{ display: "block", textAlign: "left" }}>
              {item.title}
            </span>
            <span style={{ display: "block", textAlign: "left" }}>
              {item.price}
            </span>
          </div>
        </Stack>
      </>
    );
  };
  return (
    <div style={{ width: 400 }}>
      <form onSubmit={() => handleSubmit(id)}>
        <ReactSearchAutocomplete
          items={items}
          fuseOptions={{ keys: ["title"] }}
          formatResult={formatResult}
        />
      </form>
    </div>
  );
};

export default SearchAutoComplete;
