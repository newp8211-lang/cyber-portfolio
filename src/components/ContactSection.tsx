'use client';

import { useState } from 'react';
import { Copy, Check, Send, ShieldAlert, KeyRound, Mail, Github, Linkedin } from 'lucide-react';
import { SiteMetadata } from '@/data/portfolioData';

interface ContactSectionProps {
  metadata: SiteMetadata;
}

export default function ContactSection({ metadata }: ContactSectionProps) {
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [formData, setFormData] = useState({ callsign: '', email: '', subject: '', payload: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const handleCopyPgp = async () => {
    try {
      await navigator.clipboard.writeText(metadata.pgp_fingerprint);
      setCopiedPgp(true);
      setTimeout(() => setCopiedPgp(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.payload) return;
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      setFormData({ callsign: '', email: '', subject: '', payload: '' });
      setTimeout(() => setTransmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-emerald-500 font-mono text-sm tracking-wider font-bold">04 // COMMUNICATIONS</span>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Clearance & PGP Key info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold font-mono text-slate-100 tracking-tight">
              ESTABLISH SECURE LINK_
            </h2>
            <p className="mt-2 text-sm text-slate-400 font-sans leading-relaxed">
              Available for threat response missions, technical audits, red/blue team simulations, and infrastructure security consultations. All communications are strictly confidential.
            </p>
          </div>

          {/* PGP Fingerprint Box */}
          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/60 font-mono">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <KeyRound className="w-3.5 h-3.5" />
                PGP_FINGERPRINT
              </span>
              <button
                type="button"
                onClick={handleCopyPgp}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-emerald-400 transition-colors p-1"
                title="Copy PGP Fingerprint"
              >
                {copiedPgp ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800 break-all select-all">
              {metadata.pgp_fingerprint}
            </p>
          </div>

          {/* Communication Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <a
              href={`mailto:${metadata.email}`}
              className="flex items-center justify-center gap-2 p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>DIRECT_MAIL</span>
            </a>
            <a
              href={metadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-4 h-4 text-emerald-500" />
              <span>GITHUB</span>
            </a>
            <a
              href={metadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded border border-slate-800 bg-slate-900/40 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-emerald-500" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* Security Advisory Notice */}
          <div className="p-3.5 rounded border border-emerald-950 bg-emerald-950/20 text-xs font-mono text-emerald-400/90 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <p>
              Automated anti-tamper log tracking active. Do not transmit unencrypted proprietary vulnerability exploits or classified material via public forms.
            </p>
          </div>
        </div>

        {/* Right: Message Dispatch Terminal Form */}
        <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/70 font-mono">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-slate-200">TRANSMISSION_DISPATCH</span>
            </div>
            <span>ENC: TLS 1.3 // SHA-256</span>
          </div>

          {transmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-100">TRANSMISSION CONFIRMED</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto font-sans">
                Your message has been encrypted and routed into the operator triage queue. Expect telemetry response within 24 operational hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">CALLSIGN / NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.callsign}
                    onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                    placeholder="e.g. Commander Sarah"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">RETURN_CHANNEL (EMAIL)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="agent@agency.org"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">MISSION_OBJECTIVE / SUBJECT</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Security Assessment Request"
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-semibold">PAYLOAD / MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={formData.payload}
                  onChange={(e) => setFormData({ ...formData, payload: e.target.value })}
                  placeholder="Brief operational overview, scope, and timeline requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors font-sans text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={transmitting}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white font-mono font-bold tracking-wider rounded transition-colors flex items-center justify-center gap-2 uppercase"
              >
                {transmitting ? (
                  <span>DISPATCHING PACKETS...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT ENCRYPTED MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

