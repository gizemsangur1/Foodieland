import Image from "next/image";
import styles from "./page.module.css";
import FeaturedRecipe from "@/components/FeaturedRecipe/page";
import Categories from "@/components/Categories/page";
import Recipes from "@/components/Recipes/page";
import LearnMore from "@/components/LearnMore/page";
import CheckoutPage from "@/components/Checkout/page";
import TryRecipes from "@/components/TryRecipes/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <FeaturedRecipe />
      <Categories />
      <Recipes/>
      <LearnMore/>
      <CheckoutPage/>
      <TryRecipes/>
    </div>
  );
}
