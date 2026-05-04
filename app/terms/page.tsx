"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">1. Acceptance of Terms</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          By accessing and shopping on the Cosmolite Beauty website, you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">2. Intellectual Property</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          All content on this site, including logos, images, text, and graphics, is the exclusive property of Cosmolite Beauty and is protected by copyright laws. You may not reproduce or distribute any content without our express written permission.
        </p>

        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">3. Product Descriptions and Accuracy</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          We strive to display product colors and textures as accurately as possible. However, due to varying monitor displays, we cannot guarantee that the color you see matches the exact color of the product.
        </p>
        
        <h2 className="text-2xl font-bold text-[#FF85A1] mt-10 mb-4">4. Limitation of Liability</h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed mb-8">
          Cosmolite Beauty shall not be liable for any adverse reactions resulting from the use of our products. Please review the ingredient lists carefully, especially if you have known allergies, and perform a patch test before full application.
        </p>
      </motion.div>
    </main>
  );
}