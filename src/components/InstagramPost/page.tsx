import { MoreHoriz } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import like from "../../../public/like.svg";
import comment from "../../../public/comment.svg";
import send from "../../../public/send.svg";
import save from "../../../public/save.svg";
import pagination from "../../../public/pagination.svg";

type Props = {
  text: string;
  image: StaticImageData;
};

export default function InstagramPost({
  text,
  image,
}: Props) {
  return (
    <Grid container sx={{ borderRadius: "5px", padding: "10px" }}>
      <Grid
        size={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "blue",
              borderRadius: "50%",
              margin: "10px",
            }}
          ></div>
          <Grid sx={{ marginLeft: "10px", textAlign: "start" }}>
            <Typography sx={{ fontSize: "11px", fontWeight: 600 }}>
              Foodieland.
            </Typography>
            <Typography sx={{ fontSize: "8px" }}>Tokyo, Japan</Typography>
          </Grid>
        </Grid>

        <MoreHoriz />
      </Grid>
      <Grid size={12}>
        <Image
          alt="post"
          src={image}
          style={{
            width: "100%",
            height: "100%", 
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        size={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Grid>
          <Image src={like} alt="icon" style={{ marginRight: "10px" }} />
          <Image src={comment} alt="icon" style={{ marginRight: "10px" }} />
          <Image src={send} alt="icon" style={{ marginRight: "10px" }} />
        </Grid>
        <Grid>
          <Image src={pagination} alt="icon" />
        </Grid>
        <Grid>
          <Image src={save} alt="icon" />
        </Grid>
      </Grid>
      <Grid size={12} sx={{display:"flex",alignItems:"center",padding:"0 10px"}}>
		<div style={{backgroundColor:"black",width:"20px",height:"20px",borderRadius:"50%"}}></div>
		<Typography sx={{fontSize:"10px",marginLeft:"10px"}}>Liked by <b>craig_love </b> and <b>44,686</b></Typography>
	  </Grid>
      <Grid size={12} sx={{textAlign:"start",paddingLeft:"10px",marginTop:"10px"}}>
		<Typography sx={{fontSize:"10px"}}><b>Foodieland.</b> {text}</Typography>
	  </Grid>
    </Grid>
  );
}
