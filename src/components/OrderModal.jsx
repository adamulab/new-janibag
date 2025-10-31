import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Send } from "lucide-react";

/**
 * Slide-up Order Drawer (dark translucent overlay)
 *
 * - Slide from bottom (mobile-first)
 * - Dark translucent overlay (bg-black/60)
 * - Sticky footer with total + send button
 * - Floating label inputs using peer/label technique
 *
 * Replace phoneNumber variable if needed.
 */

const items = [
  { id: 1, name: "Pure Ginger Powder (250gms)", price: 3000 },
  { id: 2, name: "Tumeric Powder (250gms)", price: 1500 },
  { id: 3, name: "Authentic Pineapple 25cl", price: 1100 },
  { id: 4, name: "Authentic Pineapple 50cl", price: 2200 },
  { id: 5, name: "Watermelon Mix 25cl", price: 1100 },
  { id: 6, name: "Watermelon Mix 50cl", price: 2200 },
  { id: 7, name: "Watermelon & Apple 25cl", price: 1100 },
  { id: 8, name: "Watermelon & Apple 50cl", price: 2200 },
  { id: 9, name: "Rich Carrot 25cl", price: 1500 },
  { id: 10, name: "Rich Carrot 50cl", price: 3000 },
  { id: 11, name: "Mellow Watermelon 50cl", price: 2000 },
  { id: 12, name: "Celery Drink 50cl", price: 2500 },
  { id: 13, name: "Beetroot 35cl", price: 3000 },
  { id: 14, name: "Beetroot 50cl", price: 5000 },
  { id: 15, name: "Sweet Hibiscus Zobo 25cl", price: 750 },
  { id: 16, name: "Sweet Hibiscus Zobo 50cl", price: 1500 },
  { id: 17, name: "Tangy Tamarind 25cl", price: 750 },
  { id: 18, name: "Tangy Tamarind 50cl", price: 1500 },
  { id: 19, name: "Orange Juice", price: 2000 },
  { id: 20, name: "African Star Apple (Agbalumo)", price: 3000 },
  { id: 21, name: "Strawberry Smoothie", price: 3000 },
  { id: 22, name: "Mango Delight", price: 3000 },
  { id: 23, name: "Chin Chin", price: 700 },
  { id: 24, name: "Milky Chin Chin", price: 600 },
  { id: 25, name: "Skin Glow Package 10 Bottles", price: 30000 },
  { id: 26, name: "Skin Glow Package 25 Bottles", price: 60000 },
  { id: 27, name: "Sweet Tooth Package 10 Bottles", price: 25000 },
  { id: 28, name: "Sweet Tooth Package 25 Bottles", price: 45000 },
  { id: 29, name: "Curry spice (250gms)", price: 1500 },
  { id: 30, name: "Ginger, Garlic, and Onion (250gms)", price: 2000 },
  { id: 31, name: "Ginger and Garlic Power (250gms)", price: 2000 },
  { id: 32, name: "Yaji Mix (250gms)", price: 1500 },
];

export default function OrderModal({ onClose }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // disable body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleItem = (item) => {
    const ex = selectedItems.find((i) => i.id === item.id);
    if (ex) {
      setSelectedItems((prev) => prev.filter((p) => p.id !== item.id));
    } else {
      setSelectedItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setSelectedItems((prev) =>
      prev
        .map((it) =>
          it.id === id
            ? { ...it, quantity: Math.max(1, it.quantity + delta) }
            : it
        )
        .filter((it) => it.quantity > 0)
    );
  };

  const totalPrice = selectedItems.reduce(
    (s, it) => s + it.price * it.quantity,
    0
  );

  const sendOrder = () => {
    if (!name || !phone || !address || selectedItems.length === 0) {
      alert(
        "Please complete name, phone, address and select at least one item."
      );
      return;
    }

    const orderDetails = selectedItems
      .map((it) => `• ${it.name} x${it.quantity} - ₦${it.price * it.quantity}`)
      .join("\n");

    const message = `Janiba Ginger Order Request
---------------------------
${orderDetails}

Total: ₦${totalPrice}
Name: ${name}
Phone: ${phone}
Address: ${address}
`;

    // Replace with your phone number (country code, no +)
    const phoneNumber = "2348187050789";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed left-0 right-0 bottom-0 z-50"
        aria-modal="true"
      >
        <div className="mx-auto max-w-3xl">
          <div className="bg-purewhite rounded-t-2xl shadow-2xl overflow-hidden relative">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-maincolor/10 flex items-center justify-center text-maincolor">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 12h18"
                      stroke="#1DA568"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 6h18"
                      stroke="#1DA568"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 18h18"
                      stroke="#1DA568"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-darkgray">
                    Place Your Order
                  </div>
                  <div className="text-xs text-gray-500">
                    Select items & send via WhatsApp
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 rounded-md text-darkgray hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* content (scrollable) */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item) => {
                  const selected = selectedItems.find((s) => s.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item)}
                      className={`flex items-center justify-between gap-3 p-3 rounded-lg transition-shadow border ${
                        selected
                          ? "bg-maincolor/5 border-maincolor"
                          : "bg-white border-gray-100"
                      } hover:shadow-sm`}
                    >
                      <div className="flex-1 text-left">
                        <div className="font-medium text-darkgray">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          ₦{item.price}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {selected ? (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, -1);
                              }}
                              className="p-1 rounded-md bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <div className="w-6 text-center">
                              {selected.quantity}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, +1);
                              }}
                              className="p-1 rounded-md bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </>
                        ) : (
                          <div className="text-sm text-gray-400">Add</div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Form inputs */}
              <div className="space-y-3">
                <div className="relative">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    Whatsapp Number (eg. 080xxxxxxx)
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-0"
                    rows={3}
                    placeholder=" "
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    Delivery Address
                  </label>
                </div>
              </div>
            </div>

            {/* Sticky footer with total + send */}
            <div className="border-t p-4 bg-white/60 backdrop-blur-md sticky bottom-0">
              <div className="flex items-center justify-between gap-3 max-w-3xl mx-auto">
                <div>
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-xl font-semibold text-maincolor">
                    ₦{totalPrice}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={sendOrder}
                    className="inline-flex items-center gap-2 bg-maincolor text-white px-4 py-2 rounded-full shadow hover:brightness-105 transition"
                  >
                    <Send size={16} />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="px-3 py-2 text-sm rounded-md border"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
