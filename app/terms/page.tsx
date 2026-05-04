"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Agreement to Terms</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          By accessing our website and purchasing our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using our site and services.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Intellectual Property Rights</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Upon final payment for any design or digital asset, Marketgrid Agency transfers the full copyright and ownership of the final delivered files to the client. Marketgrid Agency retains the right to display the completed work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed prior to project commencement.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Client Responsibilities</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Clients are expected to provide timely feedback, necessary brand assets, and approvals. Delays in client feedback may result in extended project timelines. Marketgrid Agency is not responsible for missed deadlines caused by client unresponsiveness.
        </p>
      </motion.div>
    </main>
  );
}