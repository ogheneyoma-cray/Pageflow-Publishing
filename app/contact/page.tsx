"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Let’s Connect
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          Have a question about sizing, an existing order, or just want to share how much you love your new shoes? The Walkzen team is always here to help you put your best foot forward. Reach out using the details below or via our direct contact form.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">Customer Support Details</h2>
        <div className="text-brand-gray text-lg leading-relaxed mb-12 space-y-2">
          <p><strong>Email:</strong> support@walkzenfootwear.com</p>
          <p><strong>Customer Care Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM (EST)</p>
          <p>Please allow up to 24 hours for our team to respond to your inquiry.</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="font-display text-2xl font-bold mb-6">Send us a message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full text-white focus:outline-none focus:border-brand-teal transition-colors" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full text-white focus:outline-none focus:border-brand-teal transition-colors" />
            </div>
            <input type="text" placeholder="Order Number (Optional)" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full text-white focus:outline-none focus:border-brand-teal transition-colors" />
            <textarea placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-lg p-3 w-full text-white focus:outline-none focus:border-brand-teal transition-colors"></textarea>
            <button type="submit" className="bg-brand-teal text-brand-dark px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-brand-teal-light transition-all rounded-lg w-full">
              Submit Message
            </button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}