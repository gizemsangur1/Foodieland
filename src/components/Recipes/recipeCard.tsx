import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";

type Props = {
  recipename: string;
  time: string;
  category: string;
  image: StaticImageData;
  background:string;
};

export default function RecipeCard({
  recipename,
  time,
  category,
  image,
  background,
}: Props) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        background:background=="gradient"?"linear-gradient(to bottom, rgba(255,255,255,1), #E7F9FD)":"white",
        textAlign: "center",
        margin: "20px 40px",
		display:"flex"
      }}
	  flexDirection="column"
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt={recipename}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ padding:background=="gradient"?"10px 20px" : "10px 0", textAlign: "start", mt: 2 }}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
          {recipename}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, margin:"20px 0" }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <TimerIcon sx={{ fontSize: "16px" }} /> {time}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <RestaurantIcon sx={{ fontSize: "16px" }} /> {category}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
