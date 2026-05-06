"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>
        <p className="text-slate-700 text-lg mb-8"><strong>Effective Date:</strong> Date</p>

        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Pageflow Publishing offers a 14-day satisfaction guarantee on all ebook purchases.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">1. Satisfaction Guarantee</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          If a title does not deliver the value its description promises, you may request a refund within 14 days of purchase.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">2. Technical Issues</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          If a file is corrupted or cannot be opened, please contact contact@PageflowPublishing.com. We will attempt to resolve the issue before issuing a refund.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">3. Exceptions</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Due to the nature of digital goods, refunds are generally not issued once a download link has been extensively accessed unless the product is defective.
        </p>
      </motion.div>
    </main>
  );
}