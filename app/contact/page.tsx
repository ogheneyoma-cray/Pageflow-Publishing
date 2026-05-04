"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Let’s Build Something Great Together
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-16 max-w-3xl">
          Whether you need a quick SEO audit, a complete brand overhaul, or just want to chat about your digital strategy, the Marketgrid team is here to help. Reach out to us, and let's map out your next big win.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6 text-[#0052CC]">Direct Contact</h2>
            <ul className="text-brand-gray text-lg leading-relaxed space-y-6">
              <li><strong className="block text-white mb-1">Email:</strong> hello@marketgridagency.com</li>
              <li><strong className="block text-white mb-1">Phone:</strong> +1 (555) 123-4567</li>
              <li><strong className="block text-white mb-1">Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold mb-6 text-[#0052CC]">Send Us a Message</h2>
            <p className="text-brand-gray text-base leading-relaxed mb-8">
              Fill out the form below with your project details, and one of our lead strategists will get back to you within 24 hours to schedule a discovery call.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0052CC] transition-colors" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0052CC] transition-colors" />
              <textarea rows={5} placeholder="Project Details" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0052CC] transition-colors"></textarea>
              <button type="submit" className="bg-[#FF7143] text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#e5653c] transition-all rounded-full w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
}