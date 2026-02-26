import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, HardHat, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // "Home" removed from here as requested
  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLinkStyle = "text-[#0f172a] font-black border-b-[3px] border-[#f59e0b] pb-1";
  const normalLinkStyle = "text-[#475569] hover:text-[#0f172a] font-bold pb-1 border-b-[3px] border-transparent transition-all";

  return (
    <nav className="bg-white w-full sticky top-0 z-[100] shadow-md border-t-4 border-[#f59e0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo Section - Image & Text Combined */}
          <div className="flex-shrink-0 z-[110]">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsOpen(false)}
            >
              {/* Logo Image */}
              <img
                src="/verma_logo.png"
                alt="Verma Prime Logo"
                className="h-10 w-auto md:h-14 transition-transform group-hover:scale-105 active:scale-95"
              />

              {/* Brand Text */}
              <div className="flex flex-col justify-center border-l-2 border-gray-200 pl-3">
                <h3 className="text-lg md:text-xl font-black text-[#0f172a] uppercase tracking-tighter leading-tight flex flex-col">
                  VERMA
                  <span className="text-[#f59e0b] text-[10px] md:text-xs tracking-[0.2em] -mt-1">
                    PRIME PROPERTIES
                  </span>
                </h3>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => isActive ? activeLinkStyle : normalLinkStyle}
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:+919993816314"
              className="bg-[#f59e0b] text-[#0f172a] px-5 py-2.5 rounded font-black flex items-center gap-2 hover:bg-[#0f172a] hover:text-white transition-all shadow-sm"
            >
              <Phone size={18} fill="currentColor" />
              CONTACT
            </a>
          </div>

          {/* Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0f172a] p-2 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[100] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="h-full overflow-y-auto px-4 py-8 bg-gray-50">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-6 py-5 rounded-xl text-xl font-bold transition-all ${isActive ? 'bg-[#0f172a] text-white shadow-lg' : 'text-[#0f172a] hover:bg-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <ChevronRight className={isActive ? 'text-[#f59e0b]' : 'opacity-20'} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-8 px-2">
            <a
              href="tel:+919993816314"
              className="w-full bg-[#f59e0b] text-[#0f172a] text-center py-5 rounded-xl font-black text-2xl block shadow-md"
              onClick={() => setIsOpen(false)}
            >
              FREE QUOTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;