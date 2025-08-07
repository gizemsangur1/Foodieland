import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function FeaturedRecipe() {
  return (
    <Grid>
      <Grid container sx={{ display: "flex",margin:"50px",justifyContent:"center",alignItems:"center",backgroundColor:"blue",borderRadius:"35px"}}>
        <Grid
          size={6}
          sx={{
            backgroundColor: "#E7FAFE",
			padding:"10px",
          }}
        >
			<Button sx={{backgroundColor:"white",color:"black",borderRadius:"35px"}}>Hot Recipes</Button>
			<Typography sx={{fontSize:"64px",fontWeight:"semi bold"}}>Spicy delicious <br/> chicken wings</Typography>
			<Typography sx={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </Typography>

		</Grid>
        <Grid size={6}></Grid>
      </Grid>
    </Grid>
  );
}
