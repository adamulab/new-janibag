import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Send } from "lucide-react";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const toggleItem = (item) => {
    const exists = selectedItems.find((i) => i.id === item.id);
    if (exists) {
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
    (sum, it) => sum + it.price * it.quantity,
    0
  );

  const sendOrder = () => {
    if (!name || !phone || !address || selectedItems.length === 0) {
      alert("Please fill in all fields and select at least one item.");
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
Address: ${address}`;

    const phoneNumber = "2348187050789";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="fixed left-0 right-0 bottom-0 z-[9999]"
      >
        <div className="mx-auto max-w-3xl">
          <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b bg-white sticky top-0 z-10">
              <h3 className="text-lg font-semibold text-darkgray">
                Place Your Order
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-darkgray hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item) => {
                  const selected = selectedItems.find((s) => s.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item)}
                      className={`flex items-center justify-between gap-3 p-3 rounded-lg border transition-all ${
                        selected
                          ? "bg-maincolor/10 border-maincolor"
                          : "bg-white border-gray-200"
                      }`}
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
                              className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                            >
                              <Minus size={14} />
                            </button>
                            <div className="w-6 text-center font-medium">
                              {selected.quantity}
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateQuantity(item.id, +1);
                              }}
                              className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                            >
                              <Plus size={14} />
                            </button>
                          </>
                        ) : (
                          <span className="text-sm text-gray-400">Add</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* User Info */}
              <div className="space-y-3">
                <div className="relative">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:border-maincolor focus:ring-0"
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
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:border-maincolor focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                  >
                    WhatsApp Number (e.g. 080xxxxxxx)
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="peer block w-full px-3 pt-4 pb-2 border rounded-md bg-gray-50 focus:border-maincolor focus:ring-0"
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

            {/* Sticky Footer */}
            <div className="border-t p-4 bg-white/70 backdrop-blur-md sticky bottom-0 z-20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-xl font-semibold text-maincolor">
                    ₦{totalPrice}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={sendOrder}
                    className="inline-flex items-center gap-2 bg-maincolor text-white px-4 py-2 rounded-full shadow hover:brightness-110 transition"
                  >
                    <Send size={16} />
                    Send via WhatsApp
                  </button>
                  <button
                    onClick={onClose}
                    className="px-3 py-2 text-sm rounded-md border hover:bg-gray-100"
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
