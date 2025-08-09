import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Learnmore from "../../../public/learnmore.svg";
import Image from "next/image";

export default function LearnMore() {
  return (
    <Grid container sx={{ margin: "100px " }}>
      <Grid size={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
        <Typography sx={{fontSize:"48px",fontWeight:500,margin:"20px 0",top:"35%"}}>Everyone can be <br/> a chef in their own kitchen</Typography>
        <Typography sx={{fontSize:"16px",opacity:0.6,margin:"20px 0"}}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br/> eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </Typography>
		<Button sx={{backgroundColor:"black",color:"white",padding:"15px 30px",borderRadius:"20px",margin:"30px 0",width:"30%"}}>Learn More</Button>
      </Grid>
      <Grid size={6}>
        <Image
          src={Learnmore}
          alt="learn more"
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </Grid>
    </Grid>
  );
}
