import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OrderButton from "../components/OrderButton";
import { ShoppingCart } from "lucide-react";

import Agbalumo from "../assets/products/p-agbalumo.jpg";
import JollyBanana from "../assets/products/p-banana.jpg";
import Beetroot from "../assets/products/p-beetroot.jpg";
import Hibiscus from "../assets/products/p-hibiscus.jpg";
import Orange from "../assets/products/p-orange.jpg";
import Pineapple from "../assets/products/p-pineapple.jpg";
import RichCarrot from "../assets/products/p-rich-carrot.jpg";
import Strawberry from "../assets/products/p-strawberry.jpg";
import Tamarind from "../assets/products/p-tamarind.jpg";
import Watermelon from "../assets/products/p-watermelon.jpg";
import WatermelonAndApple from "../assets/products/p-watermelon-and-apple.jpg";
import Celery from "../assets/products/p-celery.jpg";
import ChinChin from "../assets/products/p-chin-chin.jpg";
import MilkyChin from "../assets/products/p-milky-chin-chin.jpg";
import ProductImage from "../assets/juices.jpeg";

// Product list
const productList = [
  {
    id: 1,
    item1: "Authentic Pineapple 25cl",
    item1Price: "1,100",
    item2: "Authentic Pineapple 50cl",
    item2Price: "2,200",
    ingredients: "Pineapple, Lemon, Mint, and Ginger.",
    image: Pineapple,
  },
  {
    id: 2,
    item1: "Watermelon Mix 25cl",
    item1Price: "1,100",
    item2: "Watermelon Mix 50cl",
    item2Price: "2,200",
    ingredients: "Watermelon, Ginger, Mint, Beetroot, Pineapple and Orange.",
    image: Watermelon,
  },
  {
    id: 3,
    item1: "Watermelon & Apple 25cl",
    item1Price: "1,100",
    item2: "Watermelon & Apple 50cl",
    item2Price: "2,200",
    ingredients: "Watermelon, Ginger, Mint, and Apple.",
    image: WatermelonAndApple,
  },
  {
    id: 4,
    item1: "Rich Carrot 25cl",
    item1Price: "1,500",
    item2: "Rich Carrot 50cl",
    item2Price: "3,000",
    ingredients:
      "Carrot, Ginger, Turmeric, Apple, Lemon, English Pear, and Mint.",
    image: RichCarrot,
  },
  {
    id: 5,
    item1: "Celery 50cl",
    item1Price: "2,500",
    ingredients:
      "Celery, Ginger, Apple, English Pear, Cucumber, Lemon, and Mint.",
    image: Celery,
  },
  {
    id: 6,
    item1: "Beetroot 35cl",
    item1Price: "3,000",
    item2: "Beetroot 50cl",
    item2Price: "5,000",
    ingredients:
      "Beetroot, Apple, English Pear, Ginger, Mint, Strawberry, and Pomegranate.",
    image: Beetroot,
  },
  {
    id: 7,
    item1: "Sweet Hibiscus Zobo 25cl",
    item1Price: "750",
    item2: "Sweet Hibiscus Zobo 50cl",
    item2Price: "1,500",
    ingredients: "Hibiscus Flower, Ginger, Cloves, and Pineapple.",
    image: Hibiscus,
  },
  {
    id: 8,
    item1: "Tangy Tamarind 25cl",
    item1Price: "750",
    item2: "Tangy Tamarind 50cl",
    item2Price: "1,500",
    ingredients: "Tamarind, Ginger, Cloves, and Pineapple.",
    image: Tamarind,
  },
  {
    id: 9,
    item1: "Orange Juice",
    item1Price: "2,000",
    ingredients: "Oranges.",
    image: Orange,
  },
  {
    id: 10,
    item1: "African Star Apple (Agbalumo Drink)",
    item1Price: "3,000",
    ingredients: "Agbalumo, Yoghurt, Pineapple, and Apple.",
    image: Agbalumo,
  },
  {
    id: 11,
    item1: "Strawberry Smoothie",
    item1Price: "3,000",
    ingredients: "Strawberry, Greek Yoghurt, Honey, Fresh Milk.",
    image: Strawberry,
  },
  {
    id: 12,
    item1: "Mango Delight",
    item1Price: "3,000",
    ingredients: "Mango, Pineapple, and Watermelon.",
    image: ProductImage,
  },
  {
    id: 13,
    item1: "Chin Chin",
    item1Price: "700",
    ingredients: "Coconut and Pineapple Flavor.",
    image: ChinChin,
  },
  {
    id: 14,
    item1: "Milky Chin Chin",
    item1Price: "600",
    ingredients: "Flour, Milk.",
    image: MilkyChin,
  },
  {
    id: 15,
    item1: "Ginger Powder",
    item1Price: 3000,
    ingredients: "Pure Ginger",
    image: "https://i.ibb.co/0YktGqN/product-ginger.jpg",
  },
  {
    id: 16,
    item1: "Ginger Garlic & Onions",
    item1Price: 2000,
    ingredients: "Garlic, Ginger, and Onions",
    image: "https://i.ibb.co/7nRZGDv/product-ginger-garlic.jpg",
  },
  {
    id: 17,
    item1: "Turmeric Powder",
    item1Price: 1500,
    ingredients: "Pure Tumeric",
    image: "https://i.ibb.co/wwDM4nw/product-tumeric.jpg",
  },
  {
    id: 18,
    item1: "Curry Spice",
    item1Price: 2000,
    ingredients: "Pure Curry",
    image: "",
  },
  {
    id: 19,
    item1: "Yaji Mix",
    item1Price: 1500,
    ingredients: "Pepper, Ginger, and Spices",
    image: "",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Our Products | Janiba Ginger Ltd.</title>
        <meta
          name="description"
          content="Explore Janiba Ginger Ltd.'s range of natural ginger products – from spice-rich drinks to nutritious powders and pastries."
        />
      </Helmet>

      <motion.section
        className="bg-purewhite text-darkgray py-20 px-6 md:px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-darkgray tracking-tight">
              <span className="text-maincolor">Our </span>Products
            </h2>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
              From refreshing drinks to aromatic spices — Janiba Ginger brings
              you health-conscious delights crafted from the finest Nigerian
              ginger.
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            variants={containerVariants}
          >
            {productList.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.item1}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-left space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-semibold text-gray-800 text-base">
                      {item.item1}
                    </span>
                    <span className="font-bold text-maincolor">
                      ₦{item.item1Price}
                    </span>
                  </div>

                  {item.item2 && (
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-semibold text-gray-800 text-base">
                        {item.item2}
                      </span>
                      <span className="font-bold text-maincolor">
                        ₦{item.item2Price}
                      </span>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-lg p-3 mt-2">
                    <h4 className="text-sm uppercase font-semibold text-maincolor mb-1">
                      Ingredients
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.ingredients}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          >
            <OrderButton />
            <Link
              to="https://ufv9.adj.st/?adjust_deeplink=glovoapp://open?link_type=store&store_id=488812&adjust_t=s321jkn"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 font-semibold text-maincolor bg-[#FFC042] hover:bg-[#FFC042]/80"
            >
              <ShoppingCart size={18} />
              Order Via GLOVO
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
