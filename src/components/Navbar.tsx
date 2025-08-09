import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/Foodieland..svg";
import Facebook from "../../public/facebook.svg";
import Twitter from "../../public/twitter.svg";
import Insta from "../../public/insta.svg";


const navbar = [
  { route: "/", name: "Home" },
  { route: "#recipes", name: "Recipes" },
  { route: "#", name: "Blog" },
  { route: "#", name: "Contact" },
  { route: "#", name: "About Us" },
];

const socials = [
  { name: "twitter", src: Twitter},
  { name: "facebook", src: Facebook},
  { name: "insta", src: Insta },
];

export default function Navbar() {
  return (
    <Grid
      container
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Grid size={3} sx={{display:"flex",justifyContent:"center"}}>
        <Image src={Logo} height={100} width={100} alt="logo" />
      </Grid>
      <Grid
        size={5}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {navbar.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            style={{ textDecoration: "none",scrollBehavior:"smooth" }}
          >
            <Typography sx={{ fontWeight: "medium", fontSize: "16px" }}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Grid size={4} sx={{display:"flex",justifyContent:"center"}} >
        {socials.map((item, index) => (
          <Link
            href="#"
            key={index}
            style={{ textDecoration: "none",margin:"10px" }}
          >
            <Image src={item.src} width={15} height={15} alt="social"/>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
