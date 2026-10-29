'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  statusText?: string;
}

export default function Navbar({ statusText = 'ONLINE' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '/ABOUT', href: '#about' },
    { label: '/SKILLS', href: '#skills' },
    { label: '/PROJECTS', href: '#projects' },
    { label: '/CREDENTIALS', href: '#credentials' },
    { label: '/CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-mono text-emerald-500 font-bold text-lg tracking-tighter hover:text-emerald-400 transition-colors"
        >
          <div className="w-8 h-8 rounded bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <span>CYBER_OPS</span>
          <span className="animate-pulse">_</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider font-semibold text-slate-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Status Badge & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              STATUS: {statusText}
            </span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 py-4 space-y-3 font-mono text-sm animate-in fade-in duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded hover:bg-slate-900 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
