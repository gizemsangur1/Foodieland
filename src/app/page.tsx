import Image from "next/image";
import styles from "./page.module.css";
import FeaturedRecipe from "@/components/FeaturedRecipe/page";
import Categories from "@/components/Categories/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <FeaturedRecipe />
      <Categories />
    </div>
  );
}
