import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import OrderButton from "./OrderButton";
import { ShoppingCart } from "lucide-react";

const images = [
  {
    src: "https://i.ibb.co/4TbrnNS/hero1.png",
    label: "Our Super Healthy Amazing Products",
  },
  { src: "https://i.ibb.co/rKPcDBh/hero2.png", label: "Pineapple Juice" },
  { src: "https://i.ibb.co/Z1KsHRf/hero3.png", label: "Jolly Banana Juice" },
  { src: "https://i.ibb.co/XtX9k33/hero4.png", label: "Watermelon Juice" },
  {
    src: "https://i.ibb.co/LzS9w6qQ/milky-chin-chin.png",
    label: "Milky Chin Chin",
  },
  { src: "https://i.ibb.co/SBdvSJh/hero7.png", label: "Turmeric Powder" },
  { src: "https://i.ibb.co/3mGHjfzZ/chin-chin.png", label: "Chin Chin" },
  { src: "https://i.ibb.co/gjCwstm/hero8.png", label: "Ginger Garlic Powder" },
  { src: "https://i.ibb.co/zGnpb64/hero9.png", label: "Ginger Powder" },
];

function Card({ src, label, style, i }) {
  const float = {
    initial: { opacity: 0, scale: 0.9, y: 40, rotate: -6 + (i % 6) },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: -3 + (i % 3),
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={float}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ scale: 1.05, rotate: 0, y: -8 }}
      className="absolute w-40 sm:w-48 md:w-56 group cursor-pointer"
      style={style}
    >
      <div className="relative">
        <img
          src={src}
          alt={label}
          className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1 }}
          className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-xs md:text-sm py-2 rounded-b-xl font-medium opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [batchIndex, setBatchIndex] = useState(0);
  const [batchSize, setBatchSize] = useState(3);

  // Adjust batch size by screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBatchSize(2);
      else setBatchSize(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Loop batches
  useEffect(() => {
    const interval = setInterval(() => {
      setBatchIndex(
        (prev) => (prev + 1) % Math.ceil(images.length / batchSize)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [batchSize]);

  const start = batchIndex * batchSize;
  const currentBatch = images.slice(start, start + batchSize);

  return (
    <section className="pt-24 relative overflow-hidden h-[85vh]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-maincolor text-purewhite border border-gray-300">
            Janiba Ginger Limited
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-darkgray leading-tight">
            Boldly Natural. Premium Ginger-Infused Goodness.
          </h1>
          <p className="mt-4 text-gray-700 max-w-lg">
            Rooted in Nigeria’s rich soil, Janiba Ginger crafts premium drinks,
            spices, oils, and pastries infused with the finest ginger. From farm
            to finish, we grow, process, and deliver world-class ginger for
            culinary, pharmaceutical, and industrial needs — export-ready and
            locally available.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="https://ufv9.adj.st/?adjust_deeplink=glovoapp://open?link_type=store&store_id=488812&adjust_t=s321jkn"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 font-semibold text-maincolor bg-[#FFC042] hover:bg-[#FFC042]/50"
            >
              <ShoppingCart size={18} />
              Order Via GLOVO
            </Link>
            <OrderButton />
          </div>
        </div>

        {/* Right Collage */}
        <div className="relative flex justify-center md:justify-end items-center h-96 md:h-[450px] overflow-visible">
          <div className="relative w-[280px] sm:w-[350px] md:w-[500px] h-full">
            <AnimatePresence>
              {currentBatch.map((img, i) => {
                const offset = i * 130; // spacing between cards
                const style = {
                  left: `${offset}px`,
                  top: `${i * 80}px`,
                  zIndex: i + 1,
                };
                return (
                  <Card
                    key={`${batchIndex}-${i}`}
                    src={img.src}
                    label={img.label}
                    style={style}
                    i={i}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
