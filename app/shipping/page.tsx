"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Shipping Policy
        </h1>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">1. Order Processing</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          All orders are processed and shipped within 1-2 business days (excluding weekends and holidays). You will receive a confirmation email with tracking information once your package has shipped.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">2. Domestic Shipping (US)</h2>
        <div className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Standard Shipping (3-5 business days): $5.95</li>
            <li>Expedited Shipping (2-day): $12.00</li>
          </ul>
          <p>Free Standard Shipping is applied automatically on all orders over $50.</p>
        </div>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">3. International Shipping</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          We currently ship to select international destinations. International shipping rates and delivery times vary by location and are calculated at checkout. Please note that international customers are responsible for any customs duties, taxes, or import fees applied by their respective countries.
        </p>
      </motion.div>
    </main>
  );
}