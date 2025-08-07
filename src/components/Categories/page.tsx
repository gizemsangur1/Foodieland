import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Breakfast from "../../../public/breakfast.svg"
import Vegan from "../../../public/vegan.svg"
import Meat from "../../../public/meat.svg"
import Lunch from "../../../public/lunch.svg"
import Dessert from "../../../public/dessert.svg"
import Choco from "../../../public/choco.svg"
import Image from "next/image";


const cats = [
  { name: "Breakfast", src: Breakfast ,color:"#708246"},
  { name: "Vegan", src: Vegan,color:"#6CC63F" },
  { name: "Meat", src: Meat ,color:"#CC261B"},
  { name: "Dessert", src: Dessert,color:"#F09E00" },
  { name: "Lunch", src: Lunch ,color:"#000000"},
  { name: "Chocolate", src: Choco,color:"#000000" },
];

function hexToRGBA(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export default function Categories() {
  return (
    <Grid container sx={{ width: "100%", display: "flex", p: { xs: 2, md: 5 },justifyContent:"space-between" }}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "space-between",marginBottom:"60px" }}>
        <Typography sx={{fontSize:"48px",fontWeight:600}}>Categories</Typography>
        <Button sx={{ backgroundColor: "#E7FAFE",padding:"10px 18px",borderRadius:"20px" }}>
          <Typography sx={{color:"black",fontSize:"16px",fontWeight:600}}>View All Categories </Typography>
        </Button>
      </Grid>
		 {cats.map((item,index)=>(
		<Grid  key={index} sx={{textAlign:"center",background: `linear-gradient(to bottom, rgba(255,255,255,1), ${hexToRGBA(item.color, 0.2)})`,borderRadius:"20px",padding:"20px 35px"}}>
			<Image src={item.src} alt="categories"/>
			<Typography sx={{fontSize:"18px",fontWeight:600,marginTop:"15px"}}>{item.name}</Typography>
		</Grid>
	  ))}
	 
    </Grid>
  );
}
