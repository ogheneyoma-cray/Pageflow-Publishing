"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-100"
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-50 text-slate-900 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between p-6 border-b border-slate-900/10">
              <h2 className="font-display text-2xl font-bold">Your Cart ({totalItems})</h2>
              <button onClick={closeCart} className="p-2 rounded-full hover:bg-slate-900/10 transition-colors">
                <X size={24} />
              </button>
            </header>

            <div className="grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center text-slate-700 h-full flex flex-col justify-center items-center">
                  <p className="text-lg">Your cart is empty.</p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <li key={item.id} className="flex gap-4 items-start">
                      <div className="grow">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-slate-700">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border border-slate-900/10 rounded-full">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-slate-900/10 rounded-l-full disabled:opacity-50" disabled={item.quantity <= 1}><Minus size={14} /></button>
                            <span className="px-3 text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-slate-900/10 rounded-r-full"><Plus size={14} /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-slate-700 hover:text-red-500 transition-colors p-2">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <footer className="p-6 border-t border-slate-900/10 space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <button className="w-full bg-emerald-500 text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-emerald-600 transition-all rounded-full">
                  Proceed to Checkout
                </button>
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}