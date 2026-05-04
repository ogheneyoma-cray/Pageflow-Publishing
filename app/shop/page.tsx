"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

const productsData = [
  { name: "Basic Logo Design", shortDesc: "Minimalist logo design concept.", fullDesc: "Get a professional, clean logo to kickstart your brand. Includes 2 initial concepts, 2 rounds of revisions, and final delivery in high-resolution PNG, JPG, and vector formats.", price: "$250.00", sku: "MG-LD-001", category: "Branding" },
  { name: "Complete Brand Identity", shortDesc: "Full branding suite and guidelines.", fullDesc: "A comprehensive branding package including primary and secondary logos, color palette, typography selection, business card design, and a 10-page brand guideline PDF.", price: "$950.00", sku: "MG-BI-002", category: "Branding" },
  { name: "5-Page Business Website", shortDesc: "Custom-designed WordPress website.", fullDesc: "Perfect for small businesses. Includes a custom-designed Homepage, About, Services, Blog, and Contact page. Fully responsive, SEO-optimized, and built on WordPress.", price: "$1,500.00", sku: "MG-WD-003", category: "Web Design" },
  { name: "E-Commerce Store Setup", shortDesc: "Fully functional WooCommerce store.", fullDesc: "Launch your online store with a customized WooCommerce setup. Includes payment gateway integration, up to 20 product uploads, and a responsive shopping cart experience.", price: "$2,800.00", sku: "MG-EC-004", category: "Web Design" },
  { name: "Comprehensive SEO Audit", shortDesc: "Deep dive into your website's SEO.", fullDesc: "Find out what's holding your site back. We provide a comprehensive PDF report covering technical SEO, on-page optimization, backlink profile, and actionable growth steps.", price: "$350.00", sku: "MG-SA-005", category: "Digital Marketing" },
  { name: "Monthly Local SEO Package", shortDesc: "Ongoing SEO for local businesses.", fullDesc: "Dominate local search results. Includes Google My Business optimization, local citation building, on-page keyword targeting, and monthly performance reporting.", price: "$600.00", sku: "MG-LS-006", category: "Digital Marketing" },
  { name: "Social Media Starter Kit", shortDesc: "Profile setup and 10 custom posts.", fullDesc: "Establish a professional social media presence. We set up two profiles (e.g., Instagram & LinkedIn) and provide 10 branded post templates with copywriting to get you started.", price: "$450.00", sku: "MG-SM-007", category: "Social Media" },
  { name: "Monthly Social Management", shortDesc: "Full-service social media handling.", fullDesc: "Let us manage your community. Includes 3 posts per week across two platforms, daily community engagement, custom graphics, and a monthly analytics review.", price: "$1,200.00", sku: "MG-MM-008", category: "Social Media" },
  { name: "PPC Campaign Setup", shortDesc: "Google Ads or Meta Ads buildout.", fullDesc: "Maximize your ad spend. Includes competitor research, keyword/audience targeting, ad copywriting, and tracking pixel setup for one campaign.", price: "$750.00", sku: "MG-PC-009", category: "Paid Ads" },
  { name: "Email Marketing Template", shortDesc: "Custom Mailchimp/Klaviyo template.", fullDesc: "A reusable, brand-aligned email template designed for conversions. Optimized for mobile devices and thoroughly tested across major email clients.", price: "$200.00", sku: "MG-EM-010", category: "Design" },
  { name: "Website Copywriting (Per Page)", shortDesc: "Conversion-focused web copy.", fullDesc: "Engage your audience with compelling words. We write up to 500 words of SEO-friendly, conversion-focused copy for a single web page.", price: "$150.00", sku: "MG-CW-011", category: "Copywriting" },
  { name: "UI/UX App Audit", shortDesc: "Expert review of your app's design.", fullDesc: "Improve your user retention. Our design team will review your application's user interface and experience, providing a detailed report on usability issues and design enhancements.", price: "$500.00", sku: "MG-UX-012", category: "Design" }
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
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Shop Our Collection
        </h1>
        <p className="text-brand-gray text-lg text-center mb-16 max-w-2xl mx-auto">
          Clear deliverables. Transparent pricing. Select the digital growth solutions that fit your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.sku} className="border border-white/10 rounded-2xl p-8 bg-white/2 hover:bg-white/5 hover:border-[#0052CC]/50 transition-all flex flex-col">
              <div className="text-[#0052CC] text-sm font-bold tracking-widest uppercase mb-2">
                {product.category}
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-brand-gray text-sm mb-4 italic">{product.shortDesc}</p>
              <p className="text-brand-gray text-sm leading-relaxed mb-6 grow">
                {product.fullDesc}
              </p>
              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <span className="text-xs text-brand-gray/50 uppercase tracking-wider">{product.sku}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF7143]/10 text-[#FF7143] hover:bg-[#FF7143] hover:text-white transition-colors py-3 rounded-lg font-bold text-sm uppercase tracking-wider"
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