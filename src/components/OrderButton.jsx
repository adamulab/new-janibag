import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import OrderModal from "./OrderModal";

export default function OrderButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 bg-white text-maincolor px-5 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 font-semibold"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ShoppingCart size={18} />
        Order Via WhatsApp
      </motion.button>

      {open && <OrderModal onClose={() => setOpen(false)} />}
    </>
  );
}
