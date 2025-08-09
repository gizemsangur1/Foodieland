import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import LeftImg from "../../../public/inbox.svg";  
import RightImg from "../../../public/inbox2.svg"; 

export default function Inbox() {
  return (
    <Grid
      container
      sx={{
        position: "relative", 
        padding: "80px 20px",
        backgroundColor: "#E7F9FD",
        textAlign: "center",
        margin: "30px 20px",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden" 
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Image src={LeftImg} alt="left decoration" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <Image src={RightImg} alt="right decoration" />
      </Box>

      <Typography sx={{ fontSize: "48px", fontWeight: 600, width: "100%" }}>
        Deliciousness to your inbox
      </Typography>
      <Typography sx={{ fontSize: "16px", opacity: 0.6, width: "100%" }}>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim
      </Typography>
      <Grid
        sx={{
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          margin: "70px 0",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          sx={{
            backgroundColor: "transparent",
            "& fieldset": { border: "none" },
          }}
        />
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            padding: "10px 25px",
          }}
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
}
