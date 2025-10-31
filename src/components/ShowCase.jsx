import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BGVideos from "../assets/videos/clipped-janiba-bmo.mp4";

export default function Showcase() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-darkgray text-purewhite">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={BGVideos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Janiba Ginger Ltd.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
        >
          Ginger-Powered Wellness, Delivered Globally.
          <br className="hidden sm:block" />
          Experience Janiba’s healthy fruit juice revolution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-maincolor text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Our Products
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
