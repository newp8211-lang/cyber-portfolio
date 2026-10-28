import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'; // Using JetBrains Mono for that terminal feel
import './globals.css';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Cyber-Operations Portfolio | [Your Name]',
  description: 'IT Portfolio & Security Research Lab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(
        inter.variable,
        mono.variable,
        "bg-slate-950 text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen flex flex-col"
      )}>
        {/* Top Navigation Bar - Cyber-Ops Style */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2 font-mono text-emerald-500 font-bold text-lg tracking-tighter">
              <span className="text-xl">_&gt;</span>
              <span>CYBER_OPS</span>
              <span className="animate-pulse">_</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-emerald-400 transition-colors">/ABOUT</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">/SKILLS</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">/PROJECTS</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">/CONTACT</a>
            </nav>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-900/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Status: ONLINE
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 container mx-auto px-4 py-8 relative">
          {/* Grid Background Effect */}
          <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-6 mt-auto bg-slate-950">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
            <p>© {new Date().getFullYear()} SECURE_SYSTEMS. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <span>ID: GHOST-UNIT</span>
              <span>LOC: ENCRYPTED</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
