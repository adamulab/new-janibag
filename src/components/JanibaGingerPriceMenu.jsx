import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import OrderButton from "./OrderButton";

// ✅ Import all your images here as before
import Pineapple from "../assets/products/pineapple.jpeg";
import Watermelon from "../assets/products/watermelon.jpeg";
import WatermelonAndApple from "../assets/products/watermelon-and-apple.jpeg";
import RichCarrot from "../assets/products/rich-carrot.jpeg";
import Celery from "../assets/products/celery.jpeg";
import Beetroot from "../assets/products/beetroot.jpeg";
import Hibiscus from "../assets/products/hibiscus.jpeg";
import Tamarind from "../assets/products/tamarind.jpeg";
import Orange from "../assets/products/orange.jpeg";
import Agbalumo from "../assets/products/agbalumo.jpeg";
import Strawberry from "../assets/products/strawberry.jpeg";
import ChinChin from "../assets/products/chin-chin.jpeg";
import MilkyChin from "../assets/products/milky-chin-chin.jpeg";
import ProductImage from "../assets/juices.jpeg";

const menuPrices = [
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
    item2: "",
    item2Price: "",
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
    item2: "",
    item2Price: "",
    ingredients: "Oranges.",
    image: Orange,
  },
  {
    id: 10,
    item1: "African Star Apple (Agbalumo Drink)",
    item1Price: "3,000",
    item2: "",
    item2Price: "",
    ingredients: "Agbalumo, Yoghurt, Pineapple, and Apple.",
    image: Agbalumo,
  },
  {
    id: 11,
    item1: "Strawberry Smoothie",
    item1Price: "3,000",
    item2: "",
    item2Price: "",
    ingredients: "Strawberry, Greek Yoghurt, Honey, Fresh Milk.",
    image: Strawberry,
  },
  {
    id: 12,
    item1: "Mango Delight",
    item1Price: "3,000",
    item2: "",
    item2Price: "",
    ingredients: "Mango, Pineapple, and Watermelon.",
    image: ProductImage,
  },
  {
    id: 13,
    item1: "Chin Chin",
    item1Price: "700",
    item2: "",
    item2Price: "",
    ingredients: "Coconut and Pineapple Flavor.",
    image: ChinChin,
  },
  {
    id: 14,
    item1: "Milky Chin Chin",
    item1Price: "600",
    item2: "",
    item2Price: "",
    ingredients: "Flour, Milk.",
    image: MilkyChin,
  },
];

const JanibaGingerPriceMenu = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-12 lg:px-20">
      <div className="mb-16 text-center">
        <div className="relative text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-darkgray tracking-tight"
          >
            <span className="text-maincolor">Janiba Ginger </span>Price Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-3 text-gray-700 max-w-2xl mx-auto text-base md:text-lg"
          >
            Taste the purity, feel the freshness — every sip is crafted with
            care.
          </motion.p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {menuPrices.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 * index, duration: 0.4 },
            }}
            viewport={{ once: true }}
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
              {[
                item.item1 && { name: item.item1, price: item.item1Price },
                item.item2 && { name: item.item2, price: item.item2Price },
              ]
                .filter(Boolean)
                .map((product, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <span className="font-semibold text-gray-800 text-base">
                      {product.name}
                    </span>
                    <span className="font-bold text-maincolor">
                      ₦{product.price}
                    </span>
                  </div>
                ))}

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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.6 },
        }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
      >
        <OrderButton />
        <Link
          to="https://ufv9.adj.st/?adjust_deeplink=glovoapp://open?link_type=store&store_id=488812&adjust_t=s321jkn"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 font-semibold text-maincolor bg-[#FFC042] hover:bg-[#FFC042]/50"
        >
          <ShoppingCart size={18} />
          Order Via GLOVO
        </Link>
      </motion.div>
    </div>
  );
};

export default JanibaGingerPriceMenu;
