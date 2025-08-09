import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramPost from "../InstagramPost/page";
import Post1 from "../../../public/post.png";
import { Instagram } from "@mui/icons-material";

export default function CheckoutPage() {
  return (
    <Grid
      container
      sx={{
        margin: "60px 0",
        display: "flex",
        textAlign: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ margin: "30px 0" }}>
        <Typography sx={{ fontSize: "48px", fontWeight: 500 }}>
          Check out @foodieland on Instagram
        </Typography>
        <Typography sx={{ fontSize: "16px", opacity: 0.6, marginTop: "10px" }}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore <br /> magna aliqut enim ad
          minim{" "}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          padding: "10px 50px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1), #E7F9FD)",
			marginTop:"40px"
        }}
      >
        <Grid size={12}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px 50px",
        }}>
          <InstagramPost
            text="The vegetables dishes need to have certain vitamin for those people"
            image={Post1}
          />
          <InstagramPost
            text="Sweet food can bring someon into happiness as long as they don’t eat to much"
            image={Post1}
          />
          <InstagramPost
            text="What are you doing before start cooking? prepare the  tools or ingredients?"
            image={Post1}
          />
          <InstagramPost
            text="Steak never be wrong, it’s suitable for you who want romantic dinner"
            image={Post1}
          />
        </Grid>

        <Grid size={12}>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              padding: "18px 20px",
			  margin:"50px 0"
            }}
          >
            Visit Our Instagram <Instagram />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
