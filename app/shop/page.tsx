"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";

export default function ShopPage() {
  const { addToCart } = useCart();
  const [ngnRate, setNgnRate] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((d) => setNgnRate(d.rates.NGN))
      .catch(() => setNgnRate(1600));
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Browse Our Library
        </h1>
        <p className="text-slate-700 text-lg text-center mb-16 max-w-2xl mx-auto">
          Discover professional knowledge and extraordinary stories. All titles are available for instant digital delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.sku} className="border border-slate-900/10 rounded-2xl p-8 bg-white hover:bg-slate-50 hover:border-slate-900/30 transition-all flex flex-col shadow-sm">
              <div className="text-emerald-500 text-sm font-bold tracking-widest uppercase mb-2">
                {product.category}
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-slate-700 text-sm mb-4 italic">{product.shortDesc}</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 grow">
                {product.fullDesc}
              </p>
              <div className="mt-auto border-t border-slate-900/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    {ngnRate && (
                      <span className="block text-xs text-slate-500 mt-0.5">
                        ≈ ₦{(product.price * ngnRate).toLocaleString("en-NG", { maximumFractionDigits: 0 })}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-700/50 uppercase tracking-wider">{product.sku}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors py-3 rounded-lg font-bold text-sm uppercase tracking-wider"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}