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

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Delivery of Digital Goods</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Marketgrid Agency provides digital services and products. Therefore, no physical shipping is required.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Turnaround Times</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Estimated turnaround times for productized services are listed on the respective service pages or in your project proposal. "Delivery" is defined as the moment we send the initial drafts, final digital files, or live links to the email address associated with your account.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">File Access</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Completed digital assets (such as logos, brand guidelines, and ad creatives) are delivered securely via cloud storage links (e.g., Google Drive or Dropbox) or directly via email. Clients are responsible for downloading and backing up their files within 30 days of final delivery, after which the hosting links may expire.
        </p>
      </motion.div>
    </main>
  );
}