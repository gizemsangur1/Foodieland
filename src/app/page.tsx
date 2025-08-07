import Image from "next/image";
import styles from "./page.module.css";
import FeaturedRecipe from "@/components/FeaturedRecipe/page";

export default function Home() {
  return (
    <div className={styles.page}>
   <FeaturedRecipe/>
    </div>
  );
}
