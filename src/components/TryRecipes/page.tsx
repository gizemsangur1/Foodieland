import { Grid, Typography } from "@mui/material";
import React from "react";
import RecipeCard from "../Recipes/recipeCard";
import Burger from "../../../public/burger.svg";

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

export default function TryRecipes() {
  return (
    <Grid container sx={{ margin: "100px 0 50px 0" }}>
      <Grid
        size={6}
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "48px", fontWeight: 600 }}>
          Try this delicious recipe <br /> to make your day
        </Typography>
      </Grid>
      <Grid
        size={6}
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "16px", opacity: 0.6 }}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor
          <br /> incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </Typography>
      </Grid>
	  <Grid container sx={{margin:"50px 0"}}>
		{recipes.map((item, index) => (
        <Grid key={index} size={{ xs: 6, md: 3 }} sx={{ display: "flex" }}>
          <RecipeCard
            recipename={item.name}
            time={item.time}
            category={item.category}
            image={item.image}
            background="none"
          />
        </Grid>
      ))}
	  </Grid>
      
    </Grid>
  );
}
