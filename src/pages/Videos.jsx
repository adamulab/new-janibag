import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import YoutubeEmbed from "../components/YoutubeEmbed";

const embedItems = [
  {
    id: 1,
    text: "PpRRH5WSpPc?si=9CcJ_8ZEv1osonfy",
    title: "Maiden Edition of Janiba Ginger Show",
  },
  {
    id: 2,
    text: "-92_4ZWSDlc?si=5I36YKyaYDBJHWVc",
    title: "Janiba Ginger at CTL Academy, Gwarimpa - Abuja",
  },
  {
    id: 3,
    text: "OPQv7H2vgjY?si=kRq80praldGb4fuG",
    title: "Janiba Ginger Easter Celebration",
  },
  {
    id: 4,
    text: "OlO_e_I6PuI?si=xGrk8103R12h0pi4",
    title: "Janiba Ginger - Valentine Package",
  },
  {
    id: 5,
    text: "zoRiu2XYlSU?si=5IkEe72BgWdTUJuH",
    title: "HAUSA: Ingantaciyar Lemu Mara Siga daga Janiba Ginger",
  },
  {
    id: 6,
    text: "xNeyeXNjlrQ?si=ZgvNpqunGy7bc5p6",
    title: "Eid Mubarak from Janiba Ginger Limited",
  },
  {
    id: 7,
    text: "ITx7EbPpxZA?si=RpnzJf0Re3DMZyrA",
    title: "At the She Leads Women Event",
  },
  {
    id: 8,
    text: "zDbZZF2pGqw?si=wyF0p1CH03WpYWlT",
    title: "Janiba Ginger is now on GLOVO",
  },
  { id: 9, text: "LUBmIi66mJk?si=FXOOYvNFX-4-SmXm", title: "Janiba Showcase" },
  {
    id: 10,
    text: "4GzP8G8oLtQ?si=nEyqHjmSWYdWeNCV",
    title: "Janiba Showcase in Pictures",
  },
  {
    id: 11,
    text: "zDrJMivuc9g?si=xU93m6wv9SeXFZTo",
    title: "Janiba Ginger: Order NOW",
  },
  {
    id: 12,
    text: "Miw5NyS-1J4?si=R9Pcsw2gS64emA_p",
    title: "Living Healthy e2 – Rich Carrot Juice",
  },
  {
    id: 13,
    text: "FLZouNtfksM?si=3TU1sVc4OclTevna",
    title: "Living Healthy e1 – Beetroot Juice",
  },
  {
    id: 14,
    text: "vjwzIyKhz0g?si=DI_auchirV556sUu",
    title: "Introducing Pick and Mix",
  },
  {
    id: 15,
    text: "ZX9iN2Cl-ko?si=mqEDR-xGcWbDbMxq",
    title: "Janiba Ginger Juice Bar in Abuja",
  },
  {
    id: 16,
    text: "hXfCa2D86-c?si=5ybqTAssn8EeFKnL",
    title: "Janiba and Friends - B.H.S. Jos",
  },
];

function Videos() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateNow, setAnimateNow] = useState(false);

  const handleShowMore = () =>
    setVisibleCount((prev) => Math.min(prev + 3, embedItems.length));
  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const nextVideo = () =>
    setActiveIndex((prev) => (prev + 1) % embedItems.length);
  const prevVideo = () =>
    setActiveIndex(
      (prev) => (prev - 1 + embedItems.length) % embedItems.length
    );
  const isAllVisible = visibleCount >= embedItems.length;

  useEffect(() => {
    // Trigger animation immediately on mount
    setAnimateNow(true);
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Video Gallery | Janiba Ginger Ltd.</title>
        <meta
          name="description"
          content="Explore Janiba Ginger Ltd.'s video gallery — a celebration of nature, flavor, and wellness through our events, campaigns, and health stories."
        />
      </Helmet>

      <section className="w-full bg-gradient-to-b from-white to-whitesmokecolor py-16 px-6 md:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={animateNow ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-6 uppercase"
          >
            <span className="text-maincolor">Our Video</span> Gallery
          </motion.h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Dive into the Janiba world — see how we blend tradition, innovation,
            and wellness across our events and healthy lifestyle stories.
          </p>

          {/* Responsive Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {embedItems.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={animateNow ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <YoutubeEmbed embedId={item.text} />
                  <button
                    onClick={() => openModal(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-medium opacity-0 hover:opacity-100 transition duration-300"
                  >
                    ▶ Watch
                  </button>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-md font-semibold text-maincolor">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {!isAllVisible && (
            <div className="flex justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="bg-maincolor text-white hover:bg-secondarycolor font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
              >
                Load More
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Modal Drawer */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl overflow-hidden max-h-[85vh]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="relative p-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-maincolor text-white p-2 rounded-full hover:bg-secondarycolor transition"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 pb-8">
                <YoutubeEmbed
                  embedId={embedItems[activeIndex].text}
                  className="w-full h-[60vh] rounded-xl overflow-hidden"
                />
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={prevVideo}
                    className="flex items-center gap-2 text-maincolor hover:text-secondarycolor transition"
                  >
                    <ChevronLeft /> Previous
                  </button>
                  <h4 className="font-semibold text-gray-700 text-center">
                    {embedItems[activeIndex].title}
                  </h4>
                  <button
                    onClick={nextVideo}
                    className="flex items-center gap-2 text-maincolor hover:text-secondarycolor transition"
                  >
                    Next <ChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Videos;
