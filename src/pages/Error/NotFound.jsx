import { Box, Button } from "@mui/material";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1700211761~exp=1700212361~hmac=68225f5ac7e8e57509aad12bf7c9b35eb7f3282efdac4c9dcf4a62384e3a0b0c"
        alt="404_IMAGE"
        height={"70%"}
      />
      <Link to ="/">
        <Button
          variant="contained"
          sx={{ fontSize: "12px", fontWeight: "600" }}
          endIcon={<ArrowForwardOutlinedIcon />}
        >
          Back to HomePage
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
