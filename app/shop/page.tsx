"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

const productsData = [
  { name: "Luminous Foundation", shortDesc: "Medium-to-full coverage radiant foundation.", fullDesc: "A lightweight, buildable foundation that blurs imperfections while leaving a dewy, skin-like finish. Infused with hyaluronic acid for all-day hydration. Available in 40 inclusive shades.", price: "$38.00", sku: "CB-FND-01", category: "Makeup" },
  { name: "Cosmic Glow Highlighter", shortDesc: "Liquid highlighter for a glass-skin finish.", fullDesc: "Achieve an otherworldly glow with our pearl-infused liquid highlighter. Blends seamlessly into the skin or over makeup for a lit-from-within radiance.", price: "$28.00", sku: "CB-HLT-01", category: "Makeup" },
  { name: "Velvet Matte Lipstick", shortDesc: "Highly pigmented, non-drying matte lip color.", fullDesc: "A long-wearing matte lipstick that delivers bold color in a single swipe. Enriched with shea butter and Vitamin E to keep lips soft and nourished all day.", price: "$22.00", sku: "CB-LIP-01", category: "Makeup" },
  { name: "Supernova Lip Gloss", shortDesc: "High-shine, non-sticky plumping gloss.", fullDesc: "Get fuller, glass-like lips with our peptide-infused gloss. Features a sheer pink tint and ultra-reflective micro-shimmer that never feels sticky.", price: "$19.00", sku: "CB-GLS-01", category: "Makeup" },
  { name: "Stardust Blush Palette", shortDesc: "Trio of blendable, buildable powder blushes.", fullDesc: "Three universally flattering pink and peach shades in one sleek compact. Finely milled for a smooth application that melts into the skin.", price: "$34.00", sku: "CB-BLS-01", category: "Makeup" },
  { name: "Gravity-Defying Mascara", shortDesc: "Volumizing and lengthening waterproof mascara.", fullDesc: "Lift, curl, and multiply your lashes with our zero-clump formula. The hourglass brush catches every lash for dramatic, all-day volume that won't flake.", price: "$25.00", sku: "CB-MSC-01", category: "Makeup" },
  { name: "Precision Liquid Eyeliner", shortDesc: "Smudge-proof, ultra-black felt tip liner.", fullDesc: "Draw the perfect wing with absolute control. Our waterproof, ultra-black formula glides on smoothly and stays put for up to 24 hours.", price: "$20.00", sku: "CB-EYE-01", category: "Makeup" },
  { name: "Radiance Reset Serum", shortDesc: "Vitamin C brightening daily skin serum.", fullDesc: "Formulated with 15% pure Vitamin C and antioxidants. This powerful daily serum brightens dullness, evens skin tone, and protects against environmental stressors.", price: "$45.00", sku: "CB-SRM-01", category: "Skincare" },
  { name: "Celestial Cloud Cleanser", shortDesc: "Gentle, foaming makeup remover and cleanser.", fullDesc: "A sulfate-free foaming cleanser that effortlessly melts away waterproof makeup, dirt, and oil without stripping the skin's natural moisture barrier.", price: "$26.00", sku: "CB-CLN-01", category: "Skincare" },
  { name: "Dew Drop Moisturizer", shortDesc: "Lightweight, gel-cream face hydration.", fullDesc: "A refreshing, fast-absorbing gel-cream that floods the skin with plumping hydration. Perfect for prepping the skin before makeup application.", price: "$32.00", sku: "CB-MOI-01", category: "Skincare" },
  { name: "Flawless Finish Setting Spray", shortDesc: "Weightless, 16-hour makeup setting mist.", fullDesc: "Lock in your look with our micro-fine mist. Controls shine, melts makeup into the skin for a natural finish, and ensures your glam lasts from day to night.", price: "$29.00", sku: "CB-SET-01", category: "Makeup" },
  { name: "Pro-Blend Brush Set", shortDesc: "7-piece vegan synthetic makeup brush collection.", fullDesc: "Everything you need for a flawless face. Includes a foundation buffer, powder brush, blush brush, and four precision eye brushes in a chic travel pouch.", price: "$55.00", sku: "CB-BRS-01", category: "Tools" }
];

export default function ShopPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (productData: typeof productsData[0]) => {
    const priceAsNumber = parseFloat(productData.price.replace('$', '').replace(/,/g, ''));
    const product: Product = {
      id: productData.sku,
      name: productData.name,
      price: priceAsNumber,
      sku: productData.sku,
      shortDesc: productData.shortDesc,
      category: productData.category,
    };
    addToCart(product);
  };

  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Shop Our Collection
        </h1>
        <p className="text-[#4A2545]/70 text-lg text-center mb-16 max-w-2xl mx-auto">
          High-performance formulas. Cruelty-free ingredients. Discover the cosmetics that elevate your beauty routine.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.sku} className="border border-[#4A2545]/10 rounded-2xl p-8 bg-[#4A2545]/2 hover:bg-[#4A2545]/5 hover:border-[#4A2545]/30 transition-all flex flex-col">
              <div className="text-[#4A2545] text-sm font-bold tracking-widest uppercase mb-2">
                {product.category}
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-[#4A2545]/70 text-sm mb-4 italic">{product.shortDesc}</p>
              <p className="text-[#4A2545]/70 text-sm leading-relaxed mb-6 grow">
                {product.fullDesc}
              </p>
              <div className="mt-auto border-t border-[#4A2545]/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <span className="text-xs text-[#4A2545]/50 uppercase tracking-wider">{product.sku}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF85A1]/10 text-[#FF85A1] hover:bg-[#FF85A1] hover:text-white transition-colors py-3 rounded-lg font-bold text-sm uppercase tracking-wider"
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