"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>
        <p className="text-slate-700 text-lg mb-8"><strong>Effective Date:</strong> Date</p>

        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          By accessing PageflowPublishing.com, you agree to these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">1. License</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          On purchase, you receive a personal, non-transferable license for personal, non-commercial use.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">2. Intellectual Property</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          All content—including text, frameworks, and designs—is the property of Pageflow Publishing or its authors.
        </p>

        <h2 className="text-2xl font-bold text-emerald-500 mt-10 mb-4">3. Prohibited Actions</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          You may not redistribute, resell, or upload Pageflow files to file-sharing platforms.
        </p>
      </motion.div>
    </main>
  );
}