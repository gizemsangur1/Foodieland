import { Grid, Typography } from "@mui/material";
import React from "react";

export default function CheckoutPage() {
  return (
    <Grid
      container
      sx={{
        marginTop: "60px",
        display: "flex",
        textAlign: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ margin: "20px 0" }}>
        <Typography sx={{ fontSize: "48px", fontWeight: 500 }}>
          Check out @foodieland on Instagram
        </Typography>
        <Typography sx={{ fontSize: "16px" ,opacity:0.6,marginTop:"10px"}}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore <br /> magna aliqut enim ad
          minim{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
