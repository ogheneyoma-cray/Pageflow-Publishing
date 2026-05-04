"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Introduction</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Marketgrid Agency ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage our digital services.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Information Collection</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          We collect personal data that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This includes names, email addresses, phone numbers, and business details entered into contact forms. We also automatically collect analytics data, such as IP addresses and browsing behavior, via cookies to improve site performance.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Use of Information</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Your data is strictly used to provide, operate, and maintain our services; improve our website; and communicate with you regarding your projects, invoices, or marketing updates (if you have opted in). We do not sell your personal data to third-party data brokers.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Data Security</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet-based service is 100% secure, and we cannot guarantee absolute security.
        </p>
      </motion.div>
    </main>
  );
}