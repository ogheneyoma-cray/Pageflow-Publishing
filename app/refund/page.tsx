"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Digital Services and Products</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Due to the digital and labor-intensive nature of our services (design, marketing strategy, development), Marketgrid Agency generally does not offer refunds once work has commenced.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Cancellation Before Project Commencement</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          If you purchase a productized service and request a cancellation before any design, strategic, or development work has begun (typically within 24 hours of purchase), you are eligible for a full refund minus a 5% payment processing fee.
        </p>

        <h2 className="text-2xl font-bold text-[#0052CC] mt-10 mb-4">Milestone Rejections</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          For larger custom projects, we work on a milestone basis. If you are dissatisfied with a specific milestone, you must notify us in writing before approving it. Once a deliverable is approved and final files are sent or campaigns are launched, no refunds will be issued for that milestone.
        </p>
      </motion.div>
    </main>
  );
}