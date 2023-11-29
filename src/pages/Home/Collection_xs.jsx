import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Stack, Typography } from "@mui/material";

const Collection_xs = ({ images,isMobile }) => {
  return (
    <div style={{paddingRight:10, paddingLeft:10, marginTop:10 }}>
      <Swiper
        
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.5}
        navigation
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} fullWidth >
            <Box sx={{ position: "relative" }}  fullWidth >
            <img src={img.image} alt={img.title} height={400} />

              <Stack
                orientation="vertical"
                sx={{
                  bgcolor: "white",
                  p: 2,
                  position: "absolute",
                  bottom: 50,
                  left: 50,
                }}
              >
                <Typography sx={{ fontWeight: "600",fontSize: "12px" }}>{img.title}</Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "10px",
                    textDecoration: "underline",
                  }}
                >
                  SHOP NOW
                </Typography>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Collection_xs;
