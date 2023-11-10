import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../../../styles/headerStyles.css";
import CartModal from "./CartModal";
import { AppContext } from "../../../context/AppProvider";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/userSlice";

const TrackerButtons = () => {
  const user = useSelector(selectUser);

  const { wishlistItemsCount } = useContext(AppContext);

  return (
    <Box
      sx={{
        display: "flex",
        "& svg": {
          cursor: "pointer",
          mr: 2,
        },
      }}
    >
      <Tooltip title="Profile" placement="top">
        <Link to="/account">
          <Button>
            <Person2OutlinedIcon />
          </Button>
        </Link>
      </Tooltip>

      {user ? <Tooltip title="Wishlist" placement="top">
        <Link to="/wishlist">
          <Button sx={{ position: "relative" }}>
            <FavoriteBorderIcon />
            <Typography
              sx={{
                position: "absolute",
                top: "0px",
                left: "26px",
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                color: "white",
                fontSize: "15px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {wishlistItemsCount}
            </Typography>
          </Button>
        </Link>
      </Tooltip> : null}

      {/* <Tooltip title="Cart" placement="top"> */}
        <CartModal/>
      {/* </Tooltip> */}
    </Box>
  );
};

export default TrackerButtons;
