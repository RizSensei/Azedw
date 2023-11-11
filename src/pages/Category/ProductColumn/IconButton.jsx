import { Icon } from "@mui/material";
import React from "react";

const IconButton = ({icon, onClick}) => {
  return (
    <Icon
      sx={{
        fontSize:'10px',
        height: "38px",
        width: "38px",
        p: 1,
        bgcolor: "white",
        color:'black',
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mr: 1,
        border:'black',
        boxShadow: "1px 1px 1px black",
         '&:hover':{
            color:'white',
            bgcolor: 'gray',
            cursor: 'pointer'
        }
      }}
      onClick={onClick}
    >
      {icon}
    </Icon>
  );
};

export default IconButton;
