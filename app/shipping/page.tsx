"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Shipping Policy
        </h1>
        <p className="text-slate-700 text-lg mb-8"><strong>Digital Delivery Only</strong></p>

        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Pageflow Publishing deals exclusively in digital products; therefore, no physical shipping applies.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">1. Instant Access</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Upon successful payment, you will receive instant access to your files via an on-screen link and a backup email.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">2. Formats</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          All ebooks are delivered in EPUB and PDF formats to ensure compatibility across all reading devices.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">3. Support</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          If you do not receive your link within 30 minutes, please check your spam folder or contact contact@PageflowPublishing.com.
        </p>
      </motion.div>
    </main>
  );
}