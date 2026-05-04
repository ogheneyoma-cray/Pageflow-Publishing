"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
          We’d Love to Hear From You
        </h1>
        <p className="text-[#4A2545]/70 text-lg text-center leading-relaxed mb-12">
          Whether you need help finding your perfect foundation shade, have a question about an order, or just want to share your latest makeup look, the Cosmolite team is here for you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-4 text-[#4A2545]/70 text-lg">
              <li><strong>Email:</strong> hello@cosmolitebeauty.com</li>
              <li><strong>Customer Care Hours:</strong> Monday – Friday, 9 AM – 5 PM (EST)</li>
            </ul>
          </div>

          <div className="bg-[#4A2545]/5 p-8 rounded-2xl border border-[#4A2545]/10">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-transparent border border-[#4A2545]/20 rounded-lg px-4 py-3 text-[#4A2545] focus:outline-none focus:border-[#FF85A1]" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border border-[#4A2545]/20 rounded-lg px-4 py-3 text-[#4A2545] focus:outline-none focus:border-[#FF85A1]" placeholder="Your Email" required />
              </div>
              <div>
                <label htmlFor="order" className="block text-sm font-bold mb-2">Order Number (Optional)</label>
                <input type="text" id="order" className="w-full bg-transparent border border-[#4A2545]/20 rounded-lg px-4 py-3 text-[#4A2545] focus:outline-none focus:border-[#FF85A1]" placeholder="Order Number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border border-[#4A2545]/20 rounded-lg px-4 py-3 text-[#4A2545] focus:outline-none focus:border-[#FF85A1]" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FF85A1] text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#e67791] transition-all rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}