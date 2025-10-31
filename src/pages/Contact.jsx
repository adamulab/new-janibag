import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Store,
  Twitter,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import ContactImage from "../assets/contactimage.png";
import OrderButton from "../components/OrderButton";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

function Contact() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contact-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen bg-whitesmokecolor text-darkgray py-16"
      >
        <Helmet>
          <title>Contact Us | Janiba Ginger Ltd.</title>
          <meta
            name="description"
            content="Janiba Ginger Limited (RC No: 2020935) is an export-oriented company providing premium ginger-based products and fruit juices from Nigeria to global markets."
          />
          <meta
            name="keywords"
            content="Ginger, Ginger Fruits, Kaduna Ginger, Spices, African Ginger, Pastries in Kaduna, Ginger in Kaduna, Nigerian Ginger"
          />
        </Helmet>

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-maincolor">Contact</span> Us
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              We’d love to hear from you. Reach out for inquiries, partnerships,
              or to place an order.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={ContactImage}
                alt="Contact Janiba Ginger"
                className="w-full h-[550px] object-cover rounded-3xl brightness-75"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
                  Let’s Connect
                </h2>
              </div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Location */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-maincolor mb-3">
                  <MapPin size={20} /> Location
                </h3>
                <p className="text-gray-700">
                  National Assembly Quarters, Apo, Abuja.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-maincolor mb-3">
                  <Mail size={20} /> Email
                </h3>
                <p className="text-gray-700">info@janibaginger.com</p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-maincolor mb-3">
                  <Phone size={20} /> Phone
                </h3>
                <p className="text-gray-700">+234 (818) 705 0789</p>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <p className="text-gray-600 mb-3 font-medium">
                  Connect with us:
                </p>
                <div className="flex justify-center flex-wrap gap-4 text-maincolor">
                  <a
                    href="https://twitter.com/JanibaGinger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-maincolor/40 px-3 py-2 rounded-xl hover:bg-maincolor hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Twitter size={18} /> X
                  </a>
                  <a
                    href="https://instagram.com/janibaginger?igsh=bDBrbDR6OW1pOWhr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-maincolor/40 px-3 py-2 rounded-xl hover:bg-maincolor hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Instagram size={18} /> Instagram
                  </a>
                  <a
                    href="https://facebook.com/share/16NYYPWttf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-maincolor/40 px-3 py-2 rounded-xl hover:bg-maincolor hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Facebook size={18} /> Facebook
                  </a>
                  <a
                    href="https://ufv9.adj.st/?adjust_deeplink=glovoapp://open?link_type=store&store_id=488812&adjust_t=s321jkn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-maincolor/40 px-3 py-2 rounded-xl hover:bg-maincolor hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Store size={18} /> Glovo
                  </a>
                  <OrderButton />
                </div>
              </div>

              {/* Email Actions */}
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <h3 className="text-md font-medium text-gray-700 mb-4">
                  For Enquiries or Orders, click below:
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    to="mailto:info@janibaginger.com?subject=General Enquiries!"
                    className="bg-maincolor text-white py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300"
                  >
                    General Enquiries
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Contact;
