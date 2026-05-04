"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          The Story Behind Marketgrid
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Founded by a team of digital natives, Marketgrid Agency was built on a simple premise: businesses need marketing that makes sense. We saw too many companies struggling with fragmented branding—great websites with terrible copy, or beautiful logos with zero traffic. We established Marketgrid to be the all-in-one partner that aligns brilliant design with aggressive marketing strategies.
        </p>
        
        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-[#0052CC]">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          Our mission is to democratize high-level marketing and design for businesses of all sizes. By offering transparent, productized services, we remove the guesswork from agency partnerships. We exist to help you communicate your value clearly, reach your ideal customers, and grow your bottom line.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-[#0052CC]">Our Core Values</h2>
        <ul className="text-brand-gray text-lg leading-relaxed mb-12 space-y-4 list-disc list-inside">
          <li><strong>Radical Transparency:</strong> No hidden fees, no jargon-filled reports. Just honest communication and clear deliverables.</li>
          <li><strong>Data-Backed Creativity:</strong> We let data inform our strategies and creativity fuel our execution.</li>
          <li><strong>Continuous Evolution:</strong> The digital landscape changes daily. We stay ahead of the curve so your brand never falls behind.</li>
        </ul>
      </motion.div>
    </main>
  );
}