import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Reels from "../assets/videos/janiba-ginger-reels.mp4";
import RefreshingDrinks from "../assets/refreshing-drinks.jpg";
import AromaticSpices from "../assets/aromatic-spices.jpg";
import EssentialOils from "../assets/essential-oils.jpg";
import HealthyPastries from "../assets/health-conscious-pastries.jpg";

const productsList = [
  {
    id: 1,
    title: "Refreshing Drinks",
    content:
      "Our ginger-infused drinks are crafted to refresh, energize, and support wellness. Made with natural ingredients and the rich zest of Nigerian ginger, these beverages are a healthy alternative to sugary sodas — perfect for hydration, digestion, and boosting immunity.",
    image: RefreshingDrinks,
  },
  {
    id: 2,
    title: "Aromatic Spices",
    content:
      "Janiba’s line of aromatic ginger spices delivers bold flavor and therapeutic warmth. Carefully dried and ground from premium ginger rhizomes, our spices elevate everyday meals with a touch of natural heat and cultural authenticity.",
    image: AromaticSpices,
  },
  {
    id: 3,
    title: "Health-Conscious Pastries",
    content:
      "We bake wholesome pastries infused with ginger and other natural ingredients — delivering a delicious fusion of taste and nutrition. Perfect for guilt-free snacking or healthy indulgence, our pastries combine traditional flavors with modern health values.",
    image: HealthyPastries,
  },
  {
    id: 4,
    title: "Essential Oils",
    content:
      "Our cold-extracted ginger essential oils are rich in natural compounds known for their soothing, anti-inflammatory, and energizing properties. Ideal for aromatherapy, massage, and holistic wellness routines.",
    image: EssentialOils,
  },
];

export default function About() {
  const [animateNow, setAnimateNow] = useState(false);

  useEffect(() => {
    // Trigger animations immediately on mount
    setAnimateNow(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Janiba Ginger Ltd.</title>
        <meta
          name="description"
          content="Janiba Ginger Limited is a proudly Nigerian agro-allied company dedicated to processing and transforming premium ginger into value-added wellness products for local and global markets."
        />
      </Helmet>

      <section className="bg-purewhite text-darkgray">
        {/* Intro Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={animateNow ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] lg:h-[550px] object-cover rounded-2xl"
            >
              <source src={Reels} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={animateNow ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-darkgray tracking-tight"
              >
                <span className="text-maincolor">Janiba Ginger </span>Limited
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={animateNow ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-3 text-gray-700 max-w-2xl mx-auto text-base md:text-lg"
              >
                Ginger-Powered Wellness, Grown from the Heart of Nigeria.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={animateNow ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="leading-relaxed"
            >
              <strong>Janiba Ginger Limited</strong> (RC No: 2020935) is a
              proudly Nigerian agro-allied company dedicated to the cultivation
              and transformation of root crops — with a primary focus on the
              ginger rhizome. We produce high-quality, natural ginger-infused
              drinks, spices, oils, and health-conscious pastries.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={animateNow ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="leading-relaxed"
            >
              Our mission is to elevate the Nigerian ginger to global standards,
              crafting bold, authentic products that promote health, celebrate
              culture, and empower communities through innovation and
              sustainability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={animateNow ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="leading-relaxed"
            >
              We are more than a ginger brand — we are champions of wellness,
              cultural pride, and agricultural transformation across Nigeria and
              beyond.
            </motion.p>
          </div>
        </div>

        {/* Product Highlights */}
        <div className="max-w-7xl mx-auto px-6 md:px-4 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={animateNow ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-maincolor uppercase underline underline-offset-4 mb-12"
          >
            Our Products Include
          </motion.h2>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
            {productsList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={animateNow ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="flex items-center gap-6 bg-gradient-to-br from-maincolor to-black text-whitesmokecolor p-6 rounded-2xl shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-full border-4 border-white object-cover"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-purewhite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-whitesmokecolor text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
