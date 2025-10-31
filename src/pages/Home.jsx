import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import Showcase from "../components/ShowCase";
import WhyChooseUs from "../components/WhyChooseUs";
import JanibaGingerPriceMenu from "../components/JanibaGingerPriceMenu";

const sampleProducts = [
  {
    title: "Fresh Ginger (Root)",
    desc: "Premium unprocessed ginger available in bulk.",
    img: "/images/placeholder-1.jpg",
  },
  {
    title: "Ginger Powder",
    desc: "Dried & milled ginger for food & pharma.",
    img: "/images/placeholder-2.jpg",
  },
  {
    title: "Processed Extracts",
    desc: "Essential oils & concentrated extracts.",
    img: "/images/placeholder-3.jpg",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Showcase />
      <JanibaGingerPriceMenu />
      <WhyChooseUs />
    </motion.div>
  );
}
