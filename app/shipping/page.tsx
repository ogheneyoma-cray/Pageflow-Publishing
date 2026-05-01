"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Shipping Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Order Processing and Dispatch</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our warehouse team works diligently to pack and ship your orders. All standard orders are processed within 1-2 business days. During peak holiday seasons or promotional periods, processing times may be slightly extended.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Delivery Options and Tracking</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We offer Standard Shipping (3-5 business days) and Expedited Shipping (1-2 business days) at checkout. Once your order leaves our facility, you will receive an email containing a tracking number so you can monitor your shoes`` journey to your doorstep. We currently ship domestically, with plans to expand internationally soon.
          </p>
        </section>
      </motion.div>
    </main>
  );
}