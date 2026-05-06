"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Smartphone, PenTool, Mail, Clock, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <BookOpen size={28} />,
    title: "Premium Ebook Library",
    desc: "A hand-picked selection of titles across business, technology, and fiction.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Expert Digital Formatting",
    desc: "Every file is optimized for Kindle, Apple Books, and standard e-readers.",
  },
  {
    icon: <PenTool size={28} />,
    title: "Author Partnership Programs",
    desc: "Empowering independent voices with global distribution and editorial support.",
  },
];

const whyChooseUs = [
  { title: "Instant Gratification", desc: "Purchase and download your next great read in seconds—no shipping, no waiting." },
  { title: "Universal Compatibility", desc: "Our ebooks are delivered in PDF, EPUB, and MOBI formats for flawless cross-device performance." },
  { title: "Vetted Excellence", desc: "We champion quality over quantity, ensuring every title meets rigorous editorial and formatting standards." },
];

const process = [
  { step: "1", title: "Explore", desc: "Browse our intuitive catalog by genre, author, or professional objective." },
  { step: "2", title: "Purchase", desc: "Use our secure, lightning-fast checkout process to claim your title." },
  { step: "3", title: "Download", desc: "Receive your instant download links immediately via email and your dashboard." },
  { step: "4", title: "Immerse", desc: "Open the file on any device and start your next literary journey." },
];

const libraryCategories = [
  { title: "Business & Strategy", desc: "Actionable frameworks for founders and leaders." },
  { title: "Technology & Digital Skills", desc: "Practical guides for the modern professional." },
  { title: "Fiction & Escapism", desc: "Immersive worlds that demand to be read in one sitting." }
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
    <main className="bg-slate-50 text-slate-900 font-body">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Where Every Story Finds Its Flow.
          </h1>
          <p className="text-slate-700 max-w-2xl text-lg mb-10 leading-relaxed">
            Discover a curated sanctuary of premium ebooks designed for the modern reader. From transformative business guides to gripping literary journeys, Pisired delivers extraordinary knowledge instantly to your favorite device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-emerald-500 text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-emerald-600 transition-all inline-flex justify-center items-center gap-2 rounded-full"
            >
              Browse the Library <ArrowRight size={16} />
            </Link>
            <Link
              href="/releases"
              className="bg-transparent border border-slate-900/20 text-slate-900 px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-slate-900/5 transition-all inline-flex justify-center items-center gap-2 rounded-full"
            >
              View New Releases
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          A Digital Haven for Knowledge Seekers.
        </h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          At Pisired, we believe that incredible ideas should be accessible without barriers. We bridge the gap between visionary authors and passionate readers by providing a high-quality, digital-first platform. Our mission is to provide professional, well-structured ebooks that deliver real value, allowing your personal and professional growth to flow effortlessly across the digital landscape.
        </p>
        
        <h3 className="font-display text-3xl font-bold mt-12 mb-4">
          Empowering Authors, Inspiring Readers.
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          Pisired was founded with a singular vision: to break down the traditional barriers of publishing and connect brilliant minds directly with their audience. We recognized a need for a publisher that cared as much about the reading experience—typography, formatting, and cross-device compatibility—as it did about the content itself.
        </p>
        <p className="text-slate-700 text-lg leading-relaxed">
          Today, we are a thriving hub for diverse voices, handling the technical intricacies of digital publishing so our authors can focus on their craft. We are proud to be a 100% digital, eco-friendly company, celebrating the sustainable nature of screen-based reading while delivering uncompromised quality.
        </p>
      </motion.section>

      {/* OUR SERVICES */}
      <section className="bg-slate-900/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Digital Solutions.
            </h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              We offer a curated ecosystem designed for seamless reading and professional publishing.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-slate-900/10 p-6 hover:border-slate-900/30 transition-all group rounded-2xl bg-white shadow-sm hover:shadow-md"
              >
              <div className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{c.desc}</p>
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
        The <span className="text-emerald-500">Cosmolite Standard</span>
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
              <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-900/5 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            From Discovery to Download in 4 Steps
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-slate-900/10 pb-8 last:border-0">
                <span className="font-display text-5xl font-bold text-emerald-500/30 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR LIBRARY */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Professional Knowledge & Extraordinary Stories.
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Find your next favorite read using our intuitive filters. From heart-pounding thrillers to deep-dive guides into AI and personal finance, our library is built for those who take reading seriously.
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {libraryCategories.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PUBLISH & CONTACT */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Weave Your Story With Pisired.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Are you an author seeking a partner who understands the digital landscape? We offer more than just a platform; we offer a path to global visibility. Our team provides expert developmental editing, bespoke cover design, and distribution to major retailers including Amazon and Apple Books. We empower your voice and maximize your book’s potential in the competitive digital market.
            </p>
            <Link
              href="/publish"
              className="bg-white text-slate-900 px-8 py-3 font-bold tracking-widest uppercase text-sm hover:bg-slate-100 transition-all inline-flex justify-center items-center rounded-full"
            >
              Publish With Us
            </Link>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Get in Touch.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Whether you need technical support for a purchase, have a question about our library, or are an author interested in publishing, our team is here to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <Mail className="text-emerald-400" />
                <span>info@pisire.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Phone className="text-emerald-400" />
                <span>+234 817 107 7143</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Clock className="text-emerald-400" />
                <span>Monday – Friday, 9:00 AM to 6:00 PM</span>
              </div>
            </div>
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
          Ready to Turn the Digital Page?
        </h2>
        <p className="text-slate-700 max-w-xl mx-auto mb-10 text-lg">
          Join our community of lifelong learners and readers today. Sign up for our newsletter to receive 15% off your first purchase and exclusive weekly recommendations.
        </p>
        <button
        className="bg-emerald-500 text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-emerald-600 transition-all inline-block rounded-full"
        >
          Claim My 15% Off
        </button>
      </motion.section>

    </main>
  );
}