import {
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ListFormat = ({ filteredProducts, isMobile }) => {
  return (
    <List sx={{ width: "100%" }}>
      {filteredProducts?.map((product) => (
        <ListItem key={product.id} sx={{ mb: 2 }}>
          <ListItemAvatar>
            <Card style={{
                  width: 200,
                  height: 250,
                  overflow: "hidden",
                  boxShadow: "none",
                }}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={product.image}
                alt={product.title}
                style={{ objectFit: "scale-down" }}
                // sx={{
                //   objectFit: "fit",
                //   p: 1,
                //   cursor: "pointer",
                //   "&:hover + .icon-box": {
                //     display: "block",
                //   },
                // }}
              />
            </Card>
          </ListItemAvatar>
          <ListItemText sx={{ px: { xs: 2, md: 10 } }}>
            <Typography sx={{ mb: 1 }} fontWeight={500}>
              {product.title}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
              <Typography fontWeight={500}>$ {product.price}</Typography>
              <Typography
                fontWeight={500}
                sx={{ color: "gray", textDecoration: "line-through" }}
              >
                $ {product.price * 1.5}
              </Typography>
            </Stack>
            <Typography sx={{ color:'gray', fontSize:'13px' }}>
                {product.description}
              </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ListFormat;
