import { Typography } from "@mui/material";
import React from "react";

const FooterTypo = ({text}) => {
  return (
    <Typography variant="body2" fontWeight="300"  sx={{ mb: 1 }}>
      {text}
    </Typography>
  );
};

export default FooterTypo;
