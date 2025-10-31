import React from "react";
import { motion } from "framer-motion";
import Rooted from "../assets/rooted.jpg";
import Diverse from "../assets/diverse.jpg";
import Innovation from "../assets/innovation.jpg";

export default function WhyChooseUs() {
  const cards = [
    {
      img: Rooted,
      title: "Rooted in Quality, Backed by Nature",
      text: "We harness the unique strength of Nigerian-grown ginger — globally renowned for its potency and purity — to create premium, all-natural products that promote wellness and flavor without compromise.",
      color: "from-maincolor to-darkgray text-whitesmokecolor",
    },
    {
      img: Diverse,
      title: "Diverse Ginger-Infused Offerings",
      text: "From refreshing drinks and aromatic spices to essential oils and healthy pastries, our products are crafted to meet modern health needs while celebrating African agricultural excellence.",
      color: "from-white to-gray text-maincolor",
    },
    {
      img: Innovation,
      title: "Innovation with Integrity",
      text: "At Janiba Ginger, we blend tradition with innovation — ensuring every product is sustainably made, thoughtfully processed, and proudly delivered to both local and global markets.",
      color: "from-maincolor to-darkgray text-whitesmokecolor",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gray overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-maincolor/5 pointer-events-none"></div>

      {/* Section Header */}
      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-darkgray tracking-tight"
        >
          Why Choose <span className="text-maincolor">Janiba Ginger</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 text-gray-700 max-w-2xl mx-auto text-base md:text-lg"
        >
          A brand built on nature, innovation, and trust — proudly Nigerian,
          globally admired.
        </motion.p>
      </div>

      {/* Card Grid */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -8 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center bg-gradient-to-b ${card.color} transition-all duration-300`}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg mb-6"
            />
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-3">
              {card.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
