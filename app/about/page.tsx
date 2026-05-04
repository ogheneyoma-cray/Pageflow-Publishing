"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 text-center leading-tight">
          Illuminating the World of Beauty
        </h1>
        <div className="space-y-8 text-[#4A2545]/70 text-lg leading-relaxed">
          <p>
            Cosmolite Beauty was founded with a clear vision: to bridge the gap between high-glamour artistry and clean, skin-nourishing ingredients. We noticed the beauty industry often forced consumers to choose between vibrant pigment and formulas that were safe for sensitive skin. We decided to create both.
          </p>
          
          <div>
            <h2 className="font-display text-3xl font-bold text-[#4A2545] mb-4">Our Mission</h2>
            <p>
              To empower individuals to express their authentic selves through high-quality, accessible, and ethically made cosmetics.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-[#4A2545] mb-4">Our Commitment</h2>
            <p>
              We never test on animals, and we rigorously vet our supply chain to ensure every ingredient is ethically sourced. We are dedicated to continuous innovation, pushing the boundaries of what clean makeup can achieve. When you wear Cosmolite, you wear confidence.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}