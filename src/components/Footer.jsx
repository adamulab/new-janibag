import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import Logo from "../assets/janiba-logo.png";
import OrderButton from "./OrderButton";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-darkgray text-whitesmokecolor pt-20 pb-10 z-10 isolate">
      {/* Scroll To Top */}
      <div className="absolute top-4 right-4">
        <button
          onClick={scrollToTop}
          className="p-2 bg-maincolor rounded-full hover:bg-secondarycolor transition-all"
        >
          <ArrowUp className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <img src={Logo} alt="Janiba Logo" className="w-44 mb-4" />
          <h2 className="text-lg font-semibold text-secondarycolor mb-2 uppercase">
            About Us
          </h2>
          <p className="text-sm leading-relaxed text-gray">
            <strong>Janiba Ginger Limited</strong> (RC No: 2020935) is an
            agro-allied business specializing in the production and processing
            of root crops, notably ginger rhizomes — crafting natural,
            flavourful ginger-infused drinks, spices, oils, and pastries for
            Nigeria and beyond.
          </p>
        </motion.div>

        {/* Quick Links & Orders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <h2 className="text-lg font-semibold text-secondarycolor mb-3 uppercase">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-maincolor transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-maincolor transition-all"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/videos"
                className="hover:text-maincolor transition-all"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-maincolor transition-all"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8">
            <p className="text-sm mb-3 text-secondarycolor uppercase">
              Connect with us:
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/JanibaGinger"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="w-5 h-5 hover:text-maincolor transition-all" />
              </a>
              <a
                href="https://wa.me/08187050789"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-5 h-5 hover:text-maincolor transition-all" />
              </a>
              <a
                href="https://www.instagram.com/janibaginger/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-maincolor transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact & Location */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-lg font-semibold text-secondarycolor mb-2 uppercase">
              Location
            </h2>
            <p className="flex items-start gap-2 text-sm">
              <MapPin className="text-maincolor w-4 h-4 mt-1" />
              National Assembly Quarters, Apo, Abuja.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondarycolor mb-2 uppercase">
              Email
            </h2>
            <p className="flex items-center gap-2 text-sm">
              <Mail className="text-maincolor w-4 h-4" />
              info@janibaginger.com
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-secondarycolor mb-2 uppercase">
              Phone
            </h2>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="text-maincolor w-4 h-4" />
              +234 (818) 705 0789
            </p>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray mt-10 border-t border-gray/20 pt-6">
        © {new Date().getFullYear()} Janiba Ginger Limited. All Rights Reserved.
        | Developed by{" "}
        <span className="text-maincolor font-medium">
          <Link to="https://adamucreates.vercel.app" target="_blank">
            AdamuCreates
          </Link>
        </span>
      </div>

      {/* Floating Glovo Button */}
      <a
        href="https://ufv9.adj.st/?adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D488812&adjust_t=s321jkn"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2  bg-[#FFC042] hover:bg-[#FFC042]/50 hover:text-secondarycolor text-black px-4 py-2 rounded-xl shadow-lg border border-dashed border-maincolor transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 95 32"
          class="w-24 h-auto"
          data-v-3cae43e0=""
          data-v-4ab15648=""
        >
          <path
            fill="#00A082"
            d="M0 20.944v-.062C0 14.947 4.527 9.917 10.894 9.917c3.169 0 5.28.758 7.211 2.152.363.273.755.787.755 1.514 0 1-.814 1.848-1.84 1.848-.483 0-.845-.211-1.147-.425-1.358-.998-2.836-1.666-5.13-1.666-3.892 0-6.85 3.424-6.85 7.482v.06c0 4.363 2.867 7.573 7.182 7.573 1.992 0 3.802-.636 5.1-1.605v-3.967H12.01c-.905 0-1.659-.698-1.659-1.606 0-.909.754-1.636 1.66-1.636h5.885c1.055 0 1.87.817 1.87 1.879v5.663c0 1.06-.422 1.818-1.298 2.363-1.811 1.212-4.346 2.302-7.513 2.302C4.345 31.848 0 27.123 0 20.944m23.093-9.905a1.8 1.8 0 0 1 1.81-1.818c1.026 0 1.842.818 1.842 1.818v18.78c0 1.03-.816 1.817-1.841 1.817a1.8 1.8 0 0 1-1.811-1.817v-18.78zm19.817 12.54v-.06c0-2.818-2.021-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.858 5.119 2.957 0 4.828-2.302 4.828-5.058m-13.337 0v-.06c0-4.575 3.62-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.621 8.33-8.54 8.33-4.86 0-8.449-3.725-8.449-8.269m26.105 8.209h-.18c-.997 0-1.661-.637-2.083-1.607l-5.31-12.206c-.092-.273-.212-.575-.212-.908 0-.91.815-1.757 1.81-1.757.996 0 1.51.574 1.811 1.333l4.104 10.6 4.164-10.66c.271-.636.755-1.273 1.72-1.273.996 0 1.78.757 1.78 1.757 0 .333-.12.697-.21.878L57.76 30.18c-.423.94-1.087 1.607-2.083 1.607m22.274-8.208v-.06c0-2.818-2.02-5.15-4.888-5.15-2.927 0-4.798 2.302-4.798 5.089v.06c0 2.787 2.022 5.119 4.86 5.119 2.955 0 4.826-2.302 4.826-5.058m-13.337 0v-.06c0-4.575 3.621-8.361 8.51-8.361 4.888 0 8.479 3.725 8.479 8.3v.06c0 4.544-3.62 8.33-8.54 8.33-4.858 0-8.449-3.725-8.449-8.269"
            class="glovo-logo__text--green"
            data-v-3cae43e0=""
          ></path>{" "}
          <path
            fill="#00A082"
            d="m90.661 9.961-.2.28-2.751 3.897-2.748-3.89-.201-.282a3.648 3.648 0 0 1 2.949-5.781 3.65 3.65 0 0 1 2.95 5.776M87.711.639c-3.956 0-7.171 3.23-7.171 7.199 0 1.511.468 2.962 1.351 4.195l.19.266 3.735 5.288s.455.747 1.448.747h.892c.995 0 1.448-.747 1.448-.747l3.732-5.289.19-.266a7.155 7.155 0 0 0 1.352-4.195c0-3.969-3.217-7.198-7.17-7.198M85.692 21.58v-.014c0-1.076.851-1.966 2-1.966 1.15 0 1.994.876 1.994 1.952v.014c0 1.067-.852 1.957-2.008 1.957-1.14 0-1.986-.875-1.986-1.943"
            class="glovo-logo__balloon--green"
            data-v-3cae43e0=""
          ></path>
        </svg>
        <span className="text-xs font-semibold">Buy on Glovo</span>
      </a>
    </footer>
  );
}
