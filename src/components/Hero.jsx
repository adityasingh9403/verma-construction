import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Hammer, HardHat, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 w-full">
        <div className="flex flex-col items-center text-center">

          {/* --- TOP LOGO SECTION (Maximum Visibility & Responsive) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mb-6 md:mb-8 w-full flex justify-center px-2" // Padding kam kar di gayi hai
          >
            {/* Logo Glow Effect - Isko thoda aur wide kiya hai */}
            <div className="absolute inset-0 bg-[#f59e0b] blur-[60px] md:blur-[100px] opacity-25 rounded-full" />

            <img
              src="/verma_logo.png"
              alt="Verma Prime Logo"
              className="relative w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-500"
              style={{
                // Mobile: 160px (h-40) | Tablet: 240px (h-60) | Desktop: 320px+ (h-80)
                height: "clamp(160px, 25vw, 350px)"
              }}
            />
          </motion.div>

          {/* Main Title - Fully Responsive with Fluid Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-black text-[#0f172a] leading-[0.9] sm:leading-[0.85] mb-8 md:mb-10 tracking-tighter"
            style={{
              // Isse font-size mobile par chota aur desktop par bada automatically hoga
              fontSize: "clamp(2.5rem, 12vw, 8rem)"
            }}
          >
            <span className="block">ENGINEERING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#0f172a] block">
              LEGACIES.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            From conceptual blueprints to architectural masterpieces.
            <span className="text-[#0f172a] font-bold"> Verma Prime Properties & Construction </span>
            combines modern tech with 25 years of unshakeable trust.
          </motion.p>

          {/* Action Buttons & Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-10 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center max-w-2xl">
              <button className="flex-1 bg-[#0f172a] text-white px-12 py-6 font-black text-xl flex items-center justify-center gap-4 hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all duration-300 shadow-[0_20px_40px_rgba(15,23,42,0.3)] group rounded-xl">
                VIEW PROJECTS
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>

              <button className="flex-1 bg-white border-4 border-[#0f172a] text-[#0f172a] px-12 py-6 font-black text-xl flex items-center justify-center gap-4 hover:bg-slate-50 transition-all rounded-xl">
                GET A QUOTE
              </button>
            </div>

            {/* Floating Stats Board */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 bg-white p-8 rounded-2xl shadow-2xl border-b-8 border-[#f59e0b] w-full max-w-5xl">
              <div className="text-center">
                <p className="text-4xl font-black text-[#0f172a]">500+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div className="text-center border-l border-slate-100">
                <p className="text-4xl font-black text-[#f59e0b]">25+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Years Exp.</p>
              </div>
              <div className="text-center border-l border-slate-100">
                <p className="text-4xl font-black text-[#0f172a]">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Safety</p>
              </div>
              <div className="text-center border-l border-slate-100">
                <div className="flex justify-center text-[#f59e0b] mb-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Rated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;