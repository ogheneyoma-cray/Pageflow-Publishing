"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 text-center leading-tight">
          Empowering Authors, Inspiring Readers.
        </h1>
        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <p>
            Pageflow Publishing was founded with a singular vision: to break down the traditional barriers of publishing and connect brilliant minds directly with their audience. We recognized a need for a publisher that cared as much about the reading experience—typography, formatting, and cross-device compatibility—as it did about the content itself.
          </p>
          <p>
            Today, we are a thriving hub for diverse voices, handling the technical intricacies of digital publishing so our authors can focus on their craft. We are proud to be a 100% digital, eco-friendly company, celebrating the sustainable nature of screen-based reading while delivering uncompromised quality.
          </p>
        </div>
      </motion.div>
    </main>
  );
}