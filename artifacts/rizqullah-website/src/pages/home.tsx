import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Wrench, Layers, CheckCircle, Star, ArrowRight, Droplets, Shield, Clock, Search, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";


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

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#1B2D45] text-white py-3 px-6 md:px-12 shadow-lg border-b-4 border-[#2B6CB0]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/rizqullah-logo.jpg" alt="Rizqullah Elite Fix Logo" className="h-14 w-auto object-contain rounded-md bg-white/5" />
            <span className="text-xs font-sans tracking-widest text-[#A8C8E0] uppercase hidden sm:block">RC 3788971</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 font-display text-lg tracking-wide uppercase">
            <a href="#services" className="hover:text-[#F6A623] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#F6A623] transition-colors">About Us</a>
            <a href="#process" className="hover:text-[#F6A623] transition-colors">Process</a>
            <Button className="bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45] font-black uppercase tracking-widest rounded-full px-6 py-2 h-auto text-lg cursor-pointer" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Quote
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
              <Phone className="h-6 w-6" />
            </Button>
          </div>
        </div>
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
                <Button className="bg-[#F6A623] hover:bg-[#d98b16] text-[#1B2D45] font-black uppercase tracking-widest text-lg h-14 px-8 rounded-full shadow-lg shadow-[#F6A623]/30 cursor-pointer" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold uppercase tracking-widest text-lg h-14 px-8 rounded-full cursor-pointer" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' })}>
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

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-[#1B2D45] relative overflow-hidden">
        {/* Large Decorative Arc */}
        <div className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] rounded-full border-[60px] border-[#2B6CB0]/20 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              READY FOR AN <span className="text-[#F6A623]">ELITE UPGRADE?</span>
            </h2>
            <p className="text-xl text-[#A8C8E0] font-sans max-w-2xl mx-auto mb-12">
              Don't settle for less when it comes to your property. Contact Rizqullah Elite Fix today for a consultation and quote.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <FadeIn delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors h-full flex flex-col justify-center">
                <Phone className="w-10 h-10 text-[#F6A623] mb-6" />
                <h4 className="text-white font-black text-xl mb-2 uppercase">Call Us</h4>
                <a href="tel:+2348124918887" className="text-[#A8C8E0] hover:text-white font-sans font-medium transition-colors block">+234 812 491 8887</a>
                <a href="tel:+234110428843" className="text-[#A8C8E0] hover:text-white font-sans font-medium transition-colors block mt-1">+234 110 428 843</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors h-full flex flex-col justify-center">
                <Mail className="w-10 h-10 text-[#F6A623] mb-6" />
                <h4 className="text-white font-black text-xl mb-2 uppercase">Email Us</h4>
                <a href="mailto:rizqullahplumbingengineering22@gmail.com" className="text-[#A8C8E0] hover:text-white font-sans font-medium break-words text-sm transition-colors">
                  rizqullahplumbingengineering22<br/>@gmail.com
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors h-full flex flex-col justify-center">
                <MapPin className="w-10 h-10 text-[#F6A623] mb-6" />
                <h4 className="text-white font-black text-xl mb-2 uppercase">Visit Us</h4>
                <p className="text-[#A8C8E0] font-sans text-sm mb-2">18, Uncle Standby Odusanya st.<br/>Makun Sagamu.</p>
                <p className="text-[#A8C8E0] font-sans text-sm">05, Folani str Ode Saapade,<br/>Remo Ogun State.</p>
              </div>
            </FadeIn>
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
