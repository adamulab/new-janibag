import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Logo from "../assets/janiba-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  return (
    <header className="w-full  font-light sticky top-0 z-50 shadow-lg">
      {/* === Top contact bar === */}
      <div className="flex justify-between items-center bg-maincolor text-white text-sm px-8 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <a href="tel:+2348187050789" className="flex items-center gap-2">
            <Phone size={18} />
            <span className="hidden sm:inline">+234 (818) 705 0789</span>
          </a>
        </div>

        <div className="text-xs sm:text-sm font-medium">RC No: 2020935</div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:info@janibaginger.com"
            className="flex items-center gap-2"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">info@janibaginger.com</span>
          </a>

          <a
            href="https://wa.me/2348187050789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-gray-200 transition"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Chat</span>
          </a>
        </div>
      </div>

      {/* === Main Nav Section === */}
      <div className="bg-white flex justify-between items-center px-8 py-4 relative z-50">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Janiba Ginger Logo" className="w-[180px]" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm uppercase">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/products", label: "Products" },
            { to: "/videos", label: "Videos" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative group tracking-wide ${
                  isActive
                    ? "text-maincolor font-semibold"
                    : "text-maincolor/90"
                }`
              }
            >
              {label}
              <span
                className={`h-[2px] bg-maincolor absolute left-0 -bottom-0.5 transition-all duration-500 ease-out group-hover:w-full ${
                  location.pathname === to ? "w-full" : "w-0"
                }`}
              ></span>
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            to="/products"
            className="hidden lg:inline-block px-5 py-2.5 rounded-full bg-white text-maincolor font-medium shadow hover:bg-gray-100 transition"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center space-y-1"
            onClick={toggleMenu}
          >
            <span
              className={`h-0.5 w-6 bg-maincolor transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-maincolor transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-maincolor transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* === Mobile Menu === */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-[100%] left-0 w-full bg-maincolor text-white flex flex-col items-center gap-5 py-8 shadow-lg lg:hidden"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/products", label: "Products" },
              { to: "/videos", label: "Videos" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-wide hover:text-gray-200 transition"
              >
                {label}
              </Link>
            ))}

            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-full bg-white text-maincolor font-semibold shadow"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
