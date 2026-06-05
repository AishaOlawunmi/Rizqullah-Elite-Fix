import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Wrench, Layers, CheckCircle, Star, ArrowRight, Droplets, Shield, Clock, Search, ClipboardCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "About Us", id: "about" },
  { label: "Our Work", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  // Use document.documentElement.scrollTo for iOS Safari compatibility
  document.documentElement.scrollTo({ top, behavior: "smooth" });
  window.scrollTo({ top, behavior: "smooth" });
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function QuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, phone, service, message } = form;
    const text = `Hello Rizqullah Elite Fix! 👋\n\nI'd like a free quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service needed:* ${service || "Not specified"}\n*Job details:* ${message || "Not specified"}\n\nPlease get back to me. Thank you!`;
    window.open(`https://wa.me/2348124918887?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  const inputClass = "w-full bg-white/5 border border-white/20 focus:border-[#F6A623] focus:outline-none text-white placeholder-white/40 rounded-xl px-5 py-4 font-sans text-base transition-colors";

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-5">
      <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-1">Request a Quote</h3>
      <p className="text-[#A8C8E0] text-sm font-sans -mt-3">We'll reply on WhatsApp within minutes.</p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#A8C8E0] text-xs font-bold uppercase tracking-widest mb-2 block">Your Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Aisha Bello"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-[#A8C8E0] text-xs font-bold uppercase tracking-widest mb-2 block">Phone Number *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="e.g. 08012345678"
            type="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="text-[#A8C8E0] text-xs font-bold uppercase tracking-widest mb-2 block">Service Needed *</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className={inputClass + " cursor-pointer"}
        >
          <option value="" disabled className="bg-[#1B2D45]">Select a service...</option>
          <option value="Plumbing Installation" className="bg-[#1B2D45]">Plumbing Installation</option>
          <option value="Tiling" className="bg-[#1B2D45]">Tiling</option>
          <option value="Plumbing & Tiling" className="bg-[#1B2D45]">Plumbing & Tiling</option>
          <option value="Repair / Maintenance" className="bg-[#1B2D45]">Repair / Maintenance</option>
          <option value="Other" className="bg-[#1B2D45]">Other</option>
        </select>
      </div>

      <div>
        <label className="text-[#A8C8E0] text-xs font-bold uppercase tracking-widest mb-2 block">Describe the Job</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us a bit about what you need — location, type of work, any details..."
          className={inputClass + " resize-none"}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-3 ${
          submitted
            ? "bg-green-500 text-white"
            : "bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45]"
        }`}
      >
        {submitted ? (
          <>
            <CheckCircle className="w-6 h-6" /> Opening WhatsApp...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send via WhatsApp
          </>
        )}
      </motion.button>
      <p className="text-white/30 text-xs font-sans text-center">Tapping the button opens WhatsApp with your details pre-filled.</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#1B2D45] text-white py-3 px-6 md:px-12 shadow-lg border-b-4 border-[#2B6CB0]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 cursor-pointer">
            <img src="/rizqullah-logo.jpg" alt="Rizqullah Elite Fix Logo" className="h-14 w-auto object-contain rounded-md bg-white/5" />
            <span className="text-xs font-sans tracking-widest text-[#A8C8E0] uppercase hidden sm:block">RC 3788971</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all cursor-pointer ${
                  activeSection === id
                    ? "bg-[#F6A623] text-[#1B2D45]"
                    : "text-white hover:text-[#F6A623]"
                }`}
              >
                {label}
              </button>
            ))}
            <Button
              className="ml-4 bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45] font-black uppercase tracking-widest rounded-full px-6 py-2 h-auto cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-[#2B6CB0]/40 mt-3"
            >
              <div className="flex flex-col py-3 gap-1">
                {NAV_LINKS.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => { scrollToSection(id); setMenuOpen(false); }}
                    className={`text-left px-5 py-3 rounded-xl text-base font-bold uppercase tracking-wide transition-all cursor-pointer ${
                      activeSection === id
                        ? "bg-[#F6A623] text-[#1B2D45]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => { scrollToSection("contact"); setMenuOpen(false); }}
                  className="mt-2 mx-2 bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45] font-black uppercase tracking-widest rounded-full px-6 py-3 text-base cursor-pointer transition-colors"
                >
                  Get a Quote
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-gradient-to-br from-[#1B2D45] to-[#2B6CB0] overflow-hidden text-white min-h-[90vh] flex items-center">
        {/* Decorative Arcs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[40px] border-[#A8C8E0]/10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full border-[20px] border-[#F6A623]/20 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <FadeIn>
              <div className="inline-block bg-[#F6A623] text-[#1B2D45] font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(246,166,35,0.5)]">
                Professional Plumbing & Tiling
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 drop-shadow-lg">
                YOUR <span className="text-[#A8C8E0]">ELITE</span><br />
                SOLUTION FOR<br />
                <span className="text-[#F6A623]">YOUR HOME</span>
              </h2>
              <p className="text-lg md:text-xl text-[#A8C8E0] mb-8 max-w-lg font-sans font-light leading-relaxed">
                Expert craftsmanship, reliable service, and premium finishes for residential and commercial properties across Ogun State.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45] font-black uppercase tracking-widest text-lg h-14 px-8 rounded-full shadow-lg shadow-[#F6A623]/30 cursor-pointer" onClick={() => scrollToSection("contact")}>
                  Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold uppercase tracking-widest text-lg h-14 px-8 rounded-full cursor-pointer" onClick={() => scrollToSection("services")}>
                  Our Services
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center relative">
            <FadeIn delay={0.2} className="relative">
              {/* Photo Frame Styling */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full p-3 bg-gradient-to-tr from-[#2B6CB0] to-[#F6A623] shadow-2xl z-10">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#1B2D45] bg-[#1B2D45] relative">
                   <img src="/rizqullah-flyer.jpg" alt="Rizqullah Elite Fix Flyer" className="w-full h-full object-cover object-center opacity-90" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D45]/80 to-transparent"></div>
                </div>
              </div>
              
              {/* Badges */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute top-10 -left-6 md:-left-12 bg-[#1B2D45] text-white p-4 rounded-full border-4 border-[#F6A623] shadow-xl z-20 flex items-center justify-center w-20 h-20 md:w-24 md:h-24"
              >
                <Droplets className="h-8 w-8 md:h-10 md:w-10 text-[#A8C8E0]" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute bottom-10 -right-6 md:-right-12 bg-[#1B2D45] text-white p-4 rounded-full border-4 border-[#2B6CB0] shadow-xl z-20 flex items-center justify-center w-20 h-20 md:w-24 md:h-24"
              >
                <Layers className="h-8 w-8 md:h-10 md:w-10 text-[#F6A623]" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#1B2D45] border-y border-[#2B6CB0]/30 py-8 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#2B6CB0]/30">
          <FadeIn delay={0.1}>
            <div className="text-3xl md:text-5xl font-black text-[#F6A623]">100%</div>
            <div className="text-xs md:text-sm text-[#A8C8E0] uppercase tracking-widest mt-1">Satisfaction</div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-3xl md:text-5xl font-black text-[#F6A623]">24/7</div>
            <div className="text-xs md:text-sm text-[#A8C8E0] uppercase tracking-widest mt-1">Support</div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-3xl md:text-5xl font-black text-[#F6A623]">Elite</div>
            <div className="text-xs md:text-sm text-[#A8C8E0] uppercase tracking-widest mt-1">Quality</div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-3xl md:text-5xl font-black text-[#F6A623] flex items-center justify-center"><Star className="fill-current h-8 w-8 mr-1"/><Star className="fill-current h-8 w-8 mr-1"/><Star className="fill-current h-8 w-8 mr-1"/></div>
            <div className="text-xs md:text-sm text-[#A8C8E0] uppercase tracking-widest mt-1">Rated</div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-[#A8C8E0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#2B6CB0]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#2B6CB0] font-bold uppercase tracking-[0.2em] text-sm">Expert In</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#1B2D45] mt-2 mb-6">OUR SERVICES</h2>
            <div className="w-24 h-2 bg-[#F6A623] mx-auto rounded-full"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Plumbing Card */}
            <FadeIn delay={0.1}>
              <div className="group relative bg-[#1B2D45] rounded-3xl p-10 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full border border-[#2B6CB0]/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2B6CB0] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-[#A8C8E0]/10 rounded-full group-hover:border-[#F6A623]/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Droplets className="h-10 w-10 text-[#2B6CB0]" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4">PLUMBING</h3>
                  <p className="text-[#A8C8E0] mb-8 font-sans text-lg font-light leading-relaxed">
                    Comprehensive plumbing solutions for residential and commercial spaces. From new installations to emergency repairs.
                  </p>
                  <ul className="space-y-4 font-sans text-white">
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#F6A623] shrink-0" /> Water pipe installation & repair</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#F6A623] shrink-0" /> Bathroom & kitchen fittings</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#F6A623] shrink-0" /> Leak detection & fixing</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#F6A623] shrink-0" /> Water heater installations</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Tiling Card */}
            <FadeIn delay={0.3}>
              <div className="group relative bg-white rounded-3xl p-10 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full border-2 border-[#1B2D45]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8C8E0] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-[#1B2D45]/10 rounded-full group-hover:border-[#2B6CB0]/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#1B2D45] rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(27,45,69,0.2)]">
                    <Layers className="h-10 w-10 text-[#F6A623]" />
                  </div>
                  <h3 className="text-4xl font-black text-[#1B2D45] mb-4">TILING</h3>
                  <p className="text-[#1B2D45]/80 mb-8 font-sans text-lg font-light leading-relaxed">
                    Precision tiling that transforms your space. We handle all materials with an eye for perfect alignment and beautiful layouts.
                  </p>
                  <ul className="space-y-4 font-sans text-[#1B2D45] font-medium">
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#2B6CB0] shrink-0" /> Floor & wall tile installation</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#2B6CB0] shrink-0" /> Bathroom & kitchen remodeling</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#2B6CB0] shrink-0" /> Ceramic, porcelain & natural stone</li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-[#2B6CB0] shrink-0" /> Custom decorative layouts</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square bg-[#A8C8E0]/40 rounded-full blur-3xl"></div>
             <div className="relative grid grid-cols-2 gap-4">
                <FadeIn delay={0.1} className="mt-8">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-square bg-[#1B2D45] flex items-center justify-center p-8 text-center relative group hover:-translate-y-2 transition-transform">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="relative z-10">
                        <Wrench className="w-16 h-16 text-[#F6A623] mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h4 className="text-white font-black text-2xl uppercase">Expert<br/>Tools</h4>
                     </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-[#2B6CB0] flex items-center justify-center p-8 text-center relative group hover:-translate-y-2 transition-transform">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="relative z-10">
                        <Shield className="w-16 h-16 text-white mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h4 className="text-white font-black text-2xl uppercase">Reliable<br/>Service</h4>
                     </div>
                  </div>
                </FadeIn>
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <FadeIn>
              <span className="text-[#2B6CB0] font-bold uppercase tracking-[0.2em] text-sm">Why Choose Us</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#1B2D45] mt-2 mb-6 leading-tight">
                ELITE STANDARDS.<br />
                <span className="text-[#F6A623]">FLAWLESS EXECUTION.</span>
              </h2>
              <p className="text-lg text-[#1B2D45]/70 font-sans mb-8 leading-relaxed">
                At Rizqullah Elite Fix, we don't just fix problems; we engineer solutions. With years of experience serving Ogun State, we've built our reputation on reliability, precision, and an unwavering commitment to quality.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B2D45] flex items-center justify-center shrink-0">
                    <Star className="text-[#F6A623] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#1B2D45] uppercase">Premium Craftsmanship</h4>
                    <p className="text-[#1B2D45]/70 font-sans mt-1">Every joint, every tile, every fitting is executed with meticulous attention to detail.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B2D45] flex items-center justify-center shrink-0">
                    <Clock className="text-[#F6A623] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#1B2D45] uppercase">On-Time Delivery</h4>
                    <p className="text-[#1B2D45]/70 font-sans mt-1">We respect your time. Our team arrives promptly and completes work efficiently.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#2B6CB0] font-bold uppercase tracking-[0.2em] text-sm">How We Work</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#1B2D45] mt-2 mb-6">OUR PROCESS</h2>
            <div className="w-24 h-2 bg-[#F6A623] mx-auto rounded-full"></div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#2B6CB0]/20 via-[#F6A623]/50 to-[#2B6CB0]/20 z-0"></div>
            
            <FadeIn delay={0.1} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#1B2D45] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-[#F6A623]" />
              </div>
              <h4 className="text-xl font-black text-[#1B2D45] uppercase mb-2">1. Inspection</h4>
              <p className="text-[#1B2D45]/70 font-sans">We assess the site, identify requirements, and provide a transparent consultation.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#2B6CB0] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-black text-[#1B2D45] uppercase mb-2">2. Planning</h4>
              <p className="text-[#1B2D45]/70 font-sans">Material selection and clear timeline mapping for zero surprises.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#F6A623] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6">
                <Wrench className="w-10 h-10 text-[#1B2D45]" />
              </div>
              <h4 className="text-xl font-black text-[#1B2D45] uppercase mb-2">3. Execution</h4>
              <p className="text-[#1B2D45]/70 font-sans">Precision installation by our elite team with minimal disruption.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#1B2D45] rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-6">
                <Star className="w-10 h-10 text-[#A8C8E0]" />
              </div>
              <h4 className="text-xl font-black text-[#1B2D45] uppercase mb-2">4. Review</h4>
              <p className="text-[#1B2D45]/70 font-sans">Final quality check to ensure everything meets our elite standards.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR WORK / PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#0f1926] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border-[40px] border-[#2B6CB0]/10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-[#F6A623] font-bold uppercase tracking-[0.2em] text-sm">Real Jobs. Real Results.</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">OUR WORK</h2>
            <div className="w-24 h-2 bg-[#F6A623] mx-auto rounded-full mb-6"></div>
            <p className="text-[#A8C8E0] font-sans text-lg max-w-2xl mx-auto">Every project is handled with precision and care. Here's a look at what we deliver on the ground.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/job-plumbing-1.jpg", label: "Pipe Installation", category: "Plumbing" },
              { src: "/job-plumbing-2.jpg", label: "External Water Line", category: "Plumbing" },
              { src: "/job-plumbing-3.jpg", label: "On-Site Precision Work", category: "Plumbing" },
              { src: "/job-tiling-1.jpg", label: "Bathroom Tiling & Plumbing", category: "Tiling" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden border-2 border-[#2B6CB0]/30 hover:border-[#F6A623] transition-all duration-300 shadow-xl aspect-[3/4]">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D45]/90 via-[#1B2D45]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-[#F6A623] text-[#1B2D45] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">{item.category}</span>
                    <p className="text-white font-bold text-base leading-tight">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <p className="text-[#A8C8E0] font-sans text-base">
              Want results like these? <button onClick={() => scrollToSection("contact")} className="text-[#F6A623] font-bold underline underline-offset-4 hover:text-white transition-colors cursor-pointer">Get in touch today.</button>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-[#1B2D45] relative overflow-hidden">
        <div className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] rounded-full border-[60px] border-[#2B6CB0]/20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full border-[30px] border-[#F6A623]/10 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-14">
            <span className="text-[#F6A623] font-bold uppercase tracking-[0.2em] text-sm">Free Consultation</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
              GET A FREE <span className="text-[#F6A623]">QUOTE</span>
            </h2>
            <div className="w-24 h-2 bg-[#F6A623] mx-auto rounded-full mb-4"></div>
            <p className="text-[#A8C8E0] font-sans text-lg max-w-xl mx-auto">
              Fill in your details and we'll get back to you on WhatsApp within minutes.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* QUOTE FORM */}
            <FadeIn delay={0.1}>
              <QuoteForm />
            </FadeIn>

            {/* CONTACT CARDS */}
            <div className="flex flex-col gap-5">
              <FadeIn delay={0.2}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#F6A623]/20 border border-[#F6A623]/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#F6A623]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg uppercase mb-1">Call Us</h4>
                    <a href="tel:+2348124918887" className="text-[#A8C8E0] hover:text-white font-sans transition-colors block">+234 812 491 8887</a>
                    <a href="tel:+234110428843" className="text-[#A8C8E0] hover:text-white font-sans transition-colors block mt-0.5">+234 110 428 843</a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#F6A623]/20 border border-[#F6A623]/40 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#F6A623]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg uppercase mb-1">Email Us</h4>
                    <a href="mailto:rizqullahplumbingengineering22@gmail.com" className="text-[#A8C8E0] hover:text-white font-sans text-sm transition-colors break-all">
                      rizqullahplumbingengineering22@gmail.com
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#F6A623]/20 border border-[#F6A623]/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#F6A623]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg uppercase mb-1">Find Us</h4>
                    <p className="text-[#A8C8E0] font-sans text-sm leading-relaxed">18, Uncle Standby Odusanya st, Makun Sagamu.<br/>05, Folani str Ode Saapade, Remo Ogun State.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <a
                  href="https://wa.me/2348124918887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ea855] rounded-2xl p-7 transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-white font-black text-lg uppercase">Chat on WhatsApp</p>
                    <p className="text-white/80 font-sans text-sm">We reply fast — usually within minutes</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f1926] text-white py-12 px-6 md:px-12 border-t-4 border-[#F6A623]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img src="/rizqullah-logo.jpg" alt="Rizqullah Elite Fix Logo" className="h-20 w-auto object-contain rounded-xl bg-white/10 p-1 hidden sm:block" />
            <div>
              <h3 className="text-2xl font-black tracking-wider uppercase">RIZQULLAH <span className="text-[#F6A623]">ELITE FIX</span></h3>
              <p className="text-[#A8C8E0] font-sans text-sm mt-2">Your Elite Solution for Plumbing & Tiling</p>
              <p className="text-white/50 font-sans text-xs mt-1">RC 3788971</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://instagram.com/rizqullahelitefix" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1B2D45] border border-[#2B6CB0] flex items-center justify-center hover:bg-[#2B6CB0] hover:border-white transition-all text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/rizqullahelitefix" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1B2D45] border border-[#2B6CB0] flex items-center justify-center hover:bg-[#2B6CB0] hover:border-white transition-all text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/rizqullahelitefix" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1B2D45] border border-[#2B6CB0] flex items-center justify-center hover:bg-[#2B6CB0] hover:border-white transition-all text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-white/40 font-sans text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Rizqullah Elite Fix. All rights reserved.</p>
          <div className="flex gap-4 text-xs">
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/2348124918887?text=Hello%20Rizqullah%20Elite%20Fix%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 px-5 py-4 font-bold text-sm uppercase tracking-wide overflow-hidden group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">Chat with Us</span>
      </motion.a>
    </div>
  );
}
