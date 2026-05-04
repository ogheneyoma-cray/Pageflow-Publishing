"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">1. Introduction</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          Welcome to Cosmolite Beauty. We are committed to protecting your personal information and ensuring your experience on our website is safe and secure. This Privacy Policy details how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">2. Information We Collect</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          We collect information you provide directly to us when making a purchase, signing up for our newsletter, or contacting customer service. This includes your name, email address, shipping address, and payment information. We also collect automated technical data like IP addresses and browsing behavior.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">3. How We Use Your Data</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          Your data is used strictly to process and fulfill your orders, provide customer support, improve our website functionality, and (if opted-in) send you marketing communications regarding new products and promotions. We do not sell your personal data to third parties.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">4. Cookies</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          Our site uses cookies to enhance your shopping experience, remember items in your cart, and analyze site traffic. You can adjust your browser settings to decline cookies, though this may impact site functionality.
        </p>
      </motion.div>
    </main>
  );
}