"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-slate-700 text-lg mb-8"><strong>Effective Date:</strong> Date</p>

        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Pisired respects your privacy and is committed to protecting your personal data. This policy outlines how we collect and use your information when you visit pisire.com.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">1. Data Collection</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          We collect names, email addresses, and billing information necessary to process transactions.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">2. Data Usage</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          Your information is used to deliver digital products, provide technical support, and improve website functionality.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">3. Security</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          We implement industry-standard security measures to prevent unauthorized access or disclosure of your data.
        </p>
      </motion.div>
    </main>
  );
}