"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
          Get in Touch.
        </h1>
        <p className="text-slate-700 text-lg text-center leading-relaxed mb-12">
          Whether you need technical support for a purchase, have a question about our library, or are an author interested in publishing, our team is here to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-4 text-slate-700 text-lg">
              <li><strong>Email:</strong> contact@PageflowPublishing.com</li>
              <li><strong>Support Hours:</strong> Monday – Friday, 9:00 AM to 6:00 PM</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-900/10 shadow-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-transparent border border-slate-900/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-transparent border border-slate-900/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500" placeholder="Your Email" required />
              </div>
              <div>
                <label htmlFor="order" className="block text-sm font-bold mb-2">Order Number (Optional)</label>
                <input type="text" id="order" className="w-full bg-transparent border border-slate-900/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500" placeholder="Order Number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-transparent border border-slate-900/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-emerald-600 transition-all rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}