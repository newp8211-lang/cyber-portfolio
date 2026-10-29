import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Cyber-Operations & Security Engineering Portfolio | Alex Vance',
  description: 'Specializing in Threat Intelligence, SIEM Engineering, Penetration Testing, and DevSecOps Infrastructure Hardening.',
  keywords: ['Cybersecurity', 'SOC Analyst', 'Penetration Testing', 'SIEM', 'DevSecOps', 'Information Security', 'Defensive Security'],
  authors: [{ name: 'Alex Vance' }],
  openGraph: {
    title: 'Cyber-Operations & Security Engineering Portfolio',
    description: 'Specializing in Threat Intelligence, SIEM Engineering, Penetration Testing, and Cloud Hardening.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={clsx(
        inter.variable,
        mono.variable,
        "bg-slate-950 text-slate-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen flex flex-col font-sans"
      )}>
        {/* Top Cyber Navigation Bar */}
        <Navbar statusText="ONLINE" />

        {/* Main Content Area */}
        <main className="flex-1 container mx-auto px-4 py-8 relative">
          {/* Cyber Grid Background Effect */}
          <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-8 mt-16 bg-slate-950 font-mono">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              <p className="text-slate-400 font-semibold tracking-wide">
                SECURE_SYSTEMS // CYBER_DEFENSE_NEXUS
              </p>
              <p className="mt-1">
                © {new Date().getFullYear()} Alex Vance. Zero-Trust Architecture Applied.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-slate-400">
              <a href="#about" className="hover:text-emerald-400 transition-colors">/ABOUT</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">/PROJECTS</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">/CONTACT</a>
              <span className="text-emerald-500/60 font-mono">NODE_US_EAST_01</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
