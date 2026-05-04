"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">1. Returns & Exchanges</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          We want you to love your Cosmolite Beauty products. If you are not completely satisfied, we accept returns and exchanges within 30 days of your purchase date.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">2. Condition of Items</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          To be eligible for a return, products must be gently used (less than 20% consumed) or unused and in their original packaging. Tools and accessories (like brushes and sponges) must be completely unopened and unused for hygiene reasons.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">3. Refund Process</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          To initiate a return, please email hello@cosmolitebeauty.com with your order number. Once your return is received and inspected, we will process your refund to the original method of payment within 5-7 business days. Original shipping costs are non-refundable.
        </p>
      </motion.div>
    </main>
  );
}