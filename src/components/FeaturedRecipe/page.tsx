"use client";
import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";
import Food from "../../../public/food.svg";
import Image from "next/image";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function FeaturedRecipe() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        container
        sx={{
          borderRadius: "35px",
          overflow: "hidden",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundColor: "#E7FAFE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            px: 5,
            py: 6,
          }}
        >
          <Button
            disableRipple
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "35px",
              width: "fit-content",
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "14px",
              boxShadow: 1,
            }}
          >
            Hot Recipes
          </Button>

          <Typography
            sx={{ fontSize: "48px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Spicy delicious <br /> chicken wings
          </Typography>

          <Typography sx={{ fontSize: "16px", color: "#555", maxWidth: "90%" }}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
          <Grid sx={{ display: "flex" }}>
            <Button
              disableRipple
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                color: "black",
                borderRadius: "35px",
                width: "fit-content",
                px: 2.5,
                py: 1,
                textTransform: "none",
                fontSize: "14px",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                30 Minutes
              </Typography>
            </Button>
            <Button
              disableRipple
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                color: "black",
                borderRadius: "35px",
                width: "fit-content",
                px: 2.5,
                py: 1,
                textTransform: "none",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                Chicken
              </Typography>
            </Button>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  borderRadius: "35px",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "blue",
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: 800 }}>
                  John Smith
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  7 Aug 2025
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Button sx={{backgroundColor:"black",borderRadius:"15px",padding:"20px 25px",color:"white"}}>
                <Typography sx={{fontSize:"14px",fontWeight:600,marginRight:"15px"}}>View Recipes </Typography> <PlayCircleFilledIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            position: "relative",
            minHeight: 400,
          }}
        >
          <Image
            src={Food}
            alt="food"
            width={660}
            height={640}
            style={{
              objectFit: "contain",
            }}
            priority
          />
        </Grid>
      </Grid>
    </Box>
  );
}
