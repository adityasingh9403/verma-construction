import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopView from './components/ScrollToTopView';

// Page Components
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Process from './pages/Process';

// Scroll To Top Logic - Isko alag file mein bhi rakh sakte hain
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopView />
      <ScrollToTop />
      
      {/* Min-h-screen ensure karta hai ki footer hamesha bottom mein rahe 
         chahe content kam hi kyun na ho.
      */}
      <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-[#fcfcfc]">

        <Navbar />

        <main className="flex-grow"> 
          <Routes>
            {/* Default Route: Site khulte hi Home page dikhega */}
            <Route path="/" element={<Home />} />
            
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />

            {/* Logo click ya galat URL par hamesha Home par bhej dega */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* WhatsApp Button - Sticky on all pages */}
        <div className="fixed bottom-6 right-6 z-[999] group">
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border-r-4 border-[#f59e0b] shadow-xl">
            Consult with Rakesh Verma
          </span>
          
          <a
            href="https://wa.me/919993816314"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all flex items-center justify-center animate-bounce hover:animate-none scale-100 hover:scale-110 active:scale-90"
          >
            <MessageCircle size={32} fill="currentColor" className="text-white" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;