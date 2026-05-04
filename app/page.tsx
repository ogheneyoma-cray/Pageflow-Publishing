"use client";

import Link from "next/link";
import { ArrowRight, Droplets, Palette, Sparkles, Brush } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <Droplets size={28} />,
    title: "Complexion",
    desc: "Flawless foundations, concealers, and setting sprays that feel like a second skin.",
  },
  {
    icon: <Palette size={28} />,
    title: "Color & Artistry",
    desc: "High-impact lipsticks, blushes, and eye products for limitless self-expression.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Skincare Prep",
    desc: "Nourishing serums and moisturizers that create the perfect canvas.",
  },
  {
    icon: <Brush size={28} />,
    title: "Tools",
    desc: "Pro-grade, vegan brushes and sponges for seamless application.",
  },
];

const whyChooseUs = [
  { title: "Skin-First Formulas", desc: "Infused with active ingredients like hyaluronic acid, Vitamin C, and peptides." },
  { title: "Inclusive Shade Ranges", desc: "Beauty is for everyone. Our complexion products cater to all undertones." },
  { title: "Conscious Packaging", desc: "We are committed to reducing our carbon footprint with recyclable and refillable packaging options." },
];

const process = [
  { step: "1", title: "Prep", desc: "Cleanse and hydrate with our Skincare Prep line to create a smooth, glowing base." },
  { step: "2", title: "Perfect", desc: "Apply our Luminous Foundation and Cosmic Glow Highlighter for a flawless, lit-from-within look." },
  { step: "3", title: "Play", desc: "Add a pop of color with our Velvet Matte Lipsticks and Stardust Blushes to complete your vibe." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-[#FFF0F5] text-[#4A2545] font-body">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(255, 133, 161, 0.15) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Unleash Your Cosmic Glow.
          </h1>
          <p className="text-[#4A2545]/70 max-w-2xl text-lg mb-10 leading-relaxed">
            Discover high-performance, cruelty-free cosmetics designed to celebrate your unique beauty. From radiant skincare to bold color, step into your light with Cosmolite Beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-[#FF85A1] text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#e67791] transition-all inline-flex justify-center items-center gap-2 rounded-full"
            >
              Shop New Arrivals <ArrowRight size={16} />
            </Link>
            <Link
              href="/shop"
              className="bg-transparent border border-[#4A2545]/20 text-[#4A2545] px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#4A2545]/5 transition-all inline-flex justify-center items-center gap-2 rounded-full"
            >
              Discover Your Shade
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Beauty Without Compromise.
        </h2>
        <p className="text-[#4A2545]/70 text-lg leading-relaxed">
          At Cosmolite Beauty, we believe makeup should be an extension of your personality, not a mask. Born from a desire for clean, highly pigmented, and skin-loving formulas, our products are crafted to enhance your natural radiance. We are proudly 100% cruelty-free, vegan, and formulated for every skin tone and type.
        </p>
      </motion.section>

      {/* OUR SERVICES */}
      <section className="bg-[#4A2545]/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
              Curated for Your Routine
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-[#4A2545]/10 p-6 hover:border-[#4A2545]/30 transition-all group rounded-2xl bg-[#4A2545]/2 hover:bg-[#4A2545]/5"
              >
              <div className="text-[#4A2545] mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-[#4A2545]/70 leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
        The <span className="text-[#4A2545]">Cosmolite Standard</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {whyChooseUs.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-[#4A2545]/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#4A2545]/5 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            Your 3-Step Radiance Routine
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-[#4A2545]/10 pb-8">
                <span className="font-display text-5xl font-bold text-[#4A2545]/60 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-[#4A2545]/70 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Join the Cosmolite Community
        </h2>
        <p className="text-[#4A2545]/70 max-w-xl mx-auto mb-10 text-lg">
          Subscribe to our newsletter to receive 15% off your first order, exclusive early access to new drops, and pro beauty tips.
        </p>
        <button
          className="bg-[#FF85A1] text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#e67791] transition-all inline-block rounded-full"
        >
          Claim My 15% Off
        </button>
      </motion.section>

    </main>
  );
}