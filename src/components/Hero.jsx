import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Construction Image */}
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional Construction Site"
          className="w-full h-full object-cover scale-110" // halka scale taaki edges blur mein clean rahein
        />
        
        {/* Overlay 1: Dynamic Blur Layer */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[6px]" />
        
        {/* Overlay 2: Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />
        
        {/* Texture Pattern (Subtle touch) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full mt-10">
        <div className="flex flex-col items-center text-center">

          {/* --- TOP LOGO SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mb-6 md:mb-10 w-full flex justify-center px-2"
          >
            {/* Logo Glow */}
            <div className="absolute inset-0 bg-[#f59e0b] blur-[80px] opacity-30 rounded-full" />

            <img
              src="/verma_logo.png"
              alt="Verma Prime Logo"
              className="relative w-auto object-contain drop-shadow-2xl"
              style={{
                height: "clamp(150px, 22vw, 320px)"
              }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-black text-[#0f172a] leading-[0.9] sm:leading-[0.85] mb-8 md:mb-10 tracking-tighter"
            style={{
              fontSize: "clamp(2.8rem, 12vw, 8rem)"
            }}
          >
            <span className="block drop-shadow-sm">ENGINEERING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#d97706] to-[#0f172a] block">
              LEGACIES.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-800 mb-12 max-w-3xl leading-relaxed font-bold bg-white/20 backdrop-blur-sm p-4 rounded-2xl md:bg-transparent md:backdrop-blur-none"
          >
            From conceptual blueprints to architectural masterpieces.
            <span className="text-[#0f172a] font-black underline decoration-[#f59e0b] decoration-4 underline-offset-4"> Verma Prime Properties </span>
            combines modern tech with 25 years of trust.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-12 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center max-w-2xl px-4">
              <button className="flex-1 bg-[#0f172a] text-white px-10 py-5 font-black text-lg flex items-center justify-center gap-3 hover:bg-[#f59e0b] hover:text-[#0f172a] transition-all duration-300 shadow-2xl group rounded-2xl">
                VIEW PROJECTS
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>

              <button className="flex-1 bg-white/80 backdrop-blur-md border-4 border-[#0f172a] text-[#0f172a] px-10 py-5 font-black text-lg flex items-center justify-center gap-3 hover:bg-[#0f172a] hover:text-white transition-all rounded-2xl shadow-xl">
                GET A QUOTE
              </button>
            </div>

            {/* Floating Stats Board */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-b-8 border-[#f59e0b] w-full max-w-5xl">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-black text-[#0f172a]">500+</p>
                <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mt-2">Success Projects</p>
              </div>
              <div className="text-center border-l-2 border-slate-100">
                <p className="text-3xl md:text-5xl font-black text-[#f59e0b]">25+</p>
                <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mt-2">Years of Trust</p>
              </div>
              <div className="text-center border-l-2 border-slate-100">
                <p className="text-3xl md:text-5xl font-black text-[#0f172a]">100%</p>
                <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mt-2">Safety Record</p>
              </div>
              <div className="text-center border-l-2 border-slate-100 flex flex-col items-center justify-center">
                <div className="flex text-[#f59e0b] mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">Top Rated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;