import {  Grid, Typography } from "@mui/material";
import React from "react";
import Burger from "../../../public/burger.svg";
import RecipeCard from "./recipeCard";
import Image from "next/image";
import ads from "../../../public/Ads.svg"

export default function Recipes() {
  const recipes = [
    {
      name: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      image: Burger,
    },
    {
      name: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      category: "Fish",
      image: Burger,
    },
    {
      name: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      category: "Breakfast",
      image: Burger,
    },
    {
      name: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      category: "Healthy",
      image: Burger,
    },
    {
      name: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      category: "Meat",
      image: Burger,
    },
    {
      name: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      category: "Sweet",
      image: Burger,
    },
    {
      name: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      category: "Snack",
      image: Burger,
    },
    {
      name: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      category: "Noodles",
      image: Burger,
    },
  ];

  return (
    <div id="recipes">
      <Grid container sx={{ marginTop: "150px" }}>
        <Grid size={12} sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "48px", fontWeight: 600 }}>
            Simple and Tasty Recipes
          </Typography>
          <Typography sx={{ fontSize: "16px", margin: "40px 0" }}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut <br /> labore et dolore magna aliqut enim ad
            minim{" "}
          </Typography>
        </Grid>
        {recipes.map((item, index) => (
          <React.Fragment key={index}>
            {index % 5 === 0 && index !== 0 && (
              <Grid size={{xs:6,md:4}} sx={{display:"flex",width:"100%",padding:"10px"}}>
                <Image src={ads} alt="ads" width={450} height={400}/>
              </Grid>
            )}

            <Grid size={{xs:6,md:4}} sx={{display:"flex"}}>
              <RecipeCard
                recipename={item.name}
                time={item.time}
                category={item.category}
                image={item.image}
                background="gradient"
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
