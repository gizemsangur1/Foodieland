import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../../public/Foodieland..svg";
import Link from "next/link";
import Facebook from "../../public/facebook.svg";
import Twitter from "../../public/twitter.svg";
import Insta from "../../public/insta.svg";

const navbar = [
  { route: "#recipes", name: "Recipes" },
  { route: "#", name: "Blog" },
  { route: "#", name: "Contact" },
  { route: "#", name: "About Us" },
];

const socials = [
  { name: "twitter", src: Twitter },
  { name: "facebook", src: Facebook },
  { name: "insta", src: Insta },
];

export default function Footer() {
  return (
    <Grid container sx={{ padding: "40px" }}>
      <Grid size={6}>
        <Image src={Logo} alt="logo" />
        <Typography sx={{ fontSize: "16px", opacity: 0.6 }}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
        </Typography>
      </Grid>
      <Grid
        size={6}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        {navbar.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            style={{ textDecoration: "none", scrollBehavior: "smooth" }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", marginLeft: "40px" }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Grid>
      <Divider sx={{ width: "100%", margin: "40px 0" }} />

      <Grid
        size={8}
        sx={{
          display: "flex",
          textAlign: "center",
          marginTop: 4,
          justifyContent: "end",
        }}
      >
        <Typography sx={{ fontSize: "18px", opacity: 0.8 }}>
          © 2020 Flowbase. Powered by{" "}
        </Typography>
        <Typography sx={{ color: "#FF7967", fontSize: "18px" }}>
          {" "}
          Webflow{" "}
        </Typography>
      </Grid>
      <Grid
        size={4}
        sx={{
          display: "flex",
          textAlign: "center",
          marginTop: 4,
          justifyContent: "end",
        }}
      >
        {socials.map((item, index) => (
          <Link
            href="#"
            key={index}
            style={{ textDecoration: "none", margin: "10px" }}
          >
            <Image src={item.src} width={15} height={15} alt="social" />
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}

{
  /* GİZEM ŞANGÜR */
}
