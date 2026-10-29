'use client';

import { useState } from 'react';
import { 
  Project, 
  Skill, 
  SiteMetadata, 
  Certification 
} from '@/data/portfolioData';
import ProjectCard from '@/components/ProjectCard';
import ContactSection from '@/components/ContactSection';
import DynamicSkillIcon from '@/components/DynamicSkillIcon';
import { 
  FolderGit2, 
  Radio, 
  Cpu, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Database,
  ExternalLink
} from 'lucide-react';

interface HomeClientProps {
  metadata: SiteMetadata;
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  isLiveDatabase: boolean;
}

export default function HomeClient({ 
  metadata, 
  skills, 
  projects, 
  certifications, 
  isLiveDatabase 
}: HomeClientProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('All');
  const [selectedProjectTag, setSelectedProjectTag] = useState<string>('All');
  const [activeCliTab, setActiveCliTab] = useState<'status' | 'dossier' | 'network'>('status');

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category).filter(Boolean)))];
  
  const filteredSkills = selectedSkillCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedSkillCategory);

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags || [])))];

  const filteredProjects = selectedProjectTag === 'All'
    ? projects
    : projects.filter(p => (p.tags || []).includes(selectedProjectTag));

  return (
    <div className="space-y-24">
      {/* 00 // HERO SECTION */}
      <section className="pt-8 pb-16 flex flex-col items-center text-center space-y-8 relative">
        {/* Supabase status indicator badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-[11px] font-mono text-slate-400">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>DATA_FEED: {isLiveDatabase ? 'SUPABASE_LIVE_CLUSTER' : 'OFFLINE_STANDBY'}</span>
        </div>

        {/* Pulse Beacon Header */}
        <div className="relative">
          <div className="absolute -inset-1 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <h1 className="relative text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-slate-100 to-slate-400 font-mono">
            SYSTEM_ONLINE
          </h1>
        </div>

        {/* Identity & Subheading */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-900/60 bg-emerald-950/30 text-emerald-400 font-mono text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{`${metadata.handle} // ${metadata.clearance}`}</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold font-mono text-slate-200">
            {metadata.name} — <span className="text-emerald-400">{metadata.title}</span>
          </h2>

          <p className="text-sm md:text-base text-slate-400 font-mono leading-relaxed">
            &gt; {metadata.bio}
          </p>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl font-mono text-xs">
          <div className="p-3 rounded border border-slate-800 bg-slate-900/50 flex flex-col items-center">
            <span className="text-slate-500 text-[10px]">OPERATIONAL STATUS</span>
            <span className="text-emerald-400 font-bold mt-1">NOMINAL // READY</span>
          </div>
          <div className="p-3 rounded border border-slate-800 bg-slate-900/50 flex flex-col items-center">
            <span className="text-slate-500 text-[10px]">ENCRYPTION STANDARD</span>
            <span className="text-slate-200 font-bold mt-1">AES-256-GCM</span>
          </div>
          <div className="p-3 rounded border border-slate-800 bg-slate-900/50 flex flex-col items-center">
            <span className="text-slate-500 text-[10px]">SECURITY CLEARANCE</span>
            <span className="text-emerald-400 font-bold mt-1">LEVEL-3 AUTH</span>
          </div>
          <div className="p-3 rounded border border-slate-800 bg-slate-900/50 flex flex-col items-center">
            <span className="text-slate-500 text-[10px]">RESPONSE LATENCY</span>
            <span className="text-slate-200 font-bold mt-1">&lt; 14MS PING</span>
          </div>
        </div>

        {/* Quick Action Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
          <a
            href="#projects"
            className="px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>ACCESS_PROJECT_VAULT</span>
          </a>
          <a
            href="#skills"
            className="px-5 py-3 rounded border border-slate-700 bg-slate-900/60 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-200 font-semibold transition-all flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>CAPABILITIES_MATRIX</span>
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded border border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400 hover:text-slate-200 font-semibold transition-all flex items-center gap-2"
          >
            <Radio className="w-4 h-4 text-emerald-500" />
            <span>ESTABLISH_LINK</span>
          </a>
        </div>
      </section>

      {/* 01 // ABOUT SECTION */}
      <section id="about" className="py-12 scroll-mt-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-emerald-500 font-mono text-sm tracking-wider font-bold">01 // DOSSIER & PROFILE</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/60 font-mono space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs text-slate-400 font-bold">OPERATIVE_DATA</span>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                  {isLiveDatabase ? 'SYNCHRONIZED' : 'LOCAL'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500">OPERATOR_ID:</span>
                  <p className="text-slate-200 font-bold">{metadata.name} [{metadata.handle}]</p>
                </div>
                <div>
                  <span className="text-slate-500">PRIMARY_ROLE:</span>
                  <p className="text-emerald-400">{metadata.title}</p>
                </div>
                <div>
                  <span className="text-slate-500">LOCATION_COORDINATES:</span>
                  <p className="text-slate-300">{metadata.location}</p>
                </div>
                <div>
                  <span className="text-slate-500">MISSION_STATUS:</span>
                  <p className="text-slate-300">{metadata.status}</p>
                </div>
              </div>

              <p className="pt-2 text-xs font-sans text-slate-400 leading-relaxed border-t border-slate-800/80">
                {metadata.bio}
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-3 rounded border border-slate-700 bg-slate-800/50 hover:border-emerald-500/60 hover:text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2 transition-colors text-slate-200"
                >
                  <span>REQUEST VERIFIED CLEARANCE / RESUME</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Mission Stats */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="p-4 rounded border border-slate-800 bg-slate-900/40">
                <p className="text-2xl font-black text-emerald-400">{projects.length}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Live Projects</p>
              </div>
              <div className="p-4 rounded border border-slate-800 bg-slate-900/40">
                <p className="text-2xl font-black text-slate-200">{skills.length}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Skills Logged</p>
              </div>
              <div className="p-4 rounded border border-slate-800 bg-slate-900/40">
                <p className="text-2xl font-black text-emerald-400">{certifications.length}</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Certifications</p>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Simulator (7 cols) */}
          <div className="lg:col-span-7 rounded-lg border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 ml-2 font-semibold">ghost-terminal: ~ (bash)</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveCliTab('status')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeCliTab === 'status' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  system_check.sh
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCliTab('dossier')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeCliTab === 'dossier' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  clearance.log
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCliTab('network')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeCliTab === 'network' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  netstat -an
                </button>
              </div>
            </div>

            {/* Terminal Output Body */}
            <div className="p-5 space-y-4 min-h-[320px] bg-slate-950/90 text-slate-300">
              {activeCliTab === 'status' && (
                <div className="space-y-2">
                  <p className="text-slate-500">&gt; executing /usr/bin/security-daemon audit --verbose</p>
                  <p className="text-emerald-400">[OK] Kernel Hardening: CIS Benchmark Level 2 Active</p>
                  <p className="text-emerald-400">[OK] Intrusion Detection: Suricata IDS / IPS Live Monitoring</p>
                  <p className="text-emerald-400">[OK] SIEM Connector: Supabase Telemetry Stream Synchronized</p>
                  <p className="text-emerald-400">[OK] Live Vault: {projects.length} Verified Mission Archives Detected</p>
                  <p className="text-slate-400">[INFO] Database status: {isLiveDatabase ? 'ONLINE (Remote Cluster Synchronized)' : 'LOCAL_STANDBY'}.</p>
                  <p className="text-emerald-500 font-bold">&gt;&gt; PERIMETER INTEGRITY: 100% SECURE</p>
                </div>
              )}

              {activeCliTab === 'dossier' && (
                <div className="space-y-2">
                  <p className="text-slate-500">&gt; cat /sec/clearance_manifest.gpg | gpg --decrypt</p>
                  <p className="text-slate-400">[GPG] Decrypted with Session Key</p>
                  <p className="text-slate-200">OPERATOR: {metadata.name} [Callsign: {metadata.handle}]</p>
                  <p className="text-slate-300">SPECIALIZATION: {metadata.title}</p>
                  <p className="text-slate-300">LOCATION: {metadata.location}</p>
                  <p className="text-emerald-400">[CLEARANCE] {metadata.clearance}</p>
                </div>
              )}

              {activeCliTab === 'network' && (
                <div className="space-y-2">
                  <p className="text-slate-500">&gt; netstat -tulnp | grep -E &apos;LISTEN|ESTABLISHED&apos;</p>
                  <p className="text-slate-400">Proto Recv-Q Send-Q Local Address           Foreign Address         State</p>
                  <p className="text-emerald-400">tcp        0      0 127.0.0.1:9092          0.0.0.0:*               LISTEN (kafka-telemetry)</p>
                  <p className="text-emerald-400">tcp        0      0 10.0.4.15:51413         10.0.1.200:443          ESTABLISHED (tls-guard)</p>
                  <p className="text-emerald-400">tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN (ed25519-only)</p>
                  <p className="text-slate-400">udp        0      0 0.0.0.0:51820           0.0.0.0:*               LISTEN (wireguard-mesh)</p>
                  <p className="text-slate-500">&gt;&gt; Database feed connected via TLS 1.3 encrypted tunnel</p>
                </div>
              )}

              <div className="pt-4 flex items-center gap-2 text-emerald-400">
                <span>guest@cyber-ops:~$</span>
                <span className="animate-pulse">▌</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // SKILLS SECTION */}
      <section id="skills" className="py-12 scroll-mt-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-emerald-500 font-mono text-sm tracking-wider font-bold">02 // CAPABILITIES & ARSENAL</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {skills.length > 0 ? (
          <>
            {/* Category Filters */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedSkillCategory(category)}
                    className={`px-3 py-1.5 rounded transition-all ${
                      selectedSkillCategory === category
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-950/60'
                        : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700'
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
            )}

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded bg-slate-800 border border-slate-700/60">
                        <DynamicSkillIcon name={skill.icon_name} />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {(skill.category || 'General').split(' ')[0]}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold font-mono text-slate-200">{skill.name}</h4>
                  </div>

                  {/* Skill Proficiency Level Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>MASTERY</span>
                      <span className="text-emerald-400 font-bold">{skill.level || 3} / 5</span>
                    </div>
                    <div className="flex gap-1 h-1.5">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <div
                          key={lvl}
                          className={`flex-1 rounded-sm ${
                            lvl <= (skill.level || 3) ? 'bg-emerald-500' : 'bg-slate-800'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State when no skills in Supabase */
          <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-900/30 text-center font-mono space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-300">CAPABILITIES_MATRIX: AWAITING_FEED</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No skills registered yet. Insert rows into the <span className="text-emerald-400 font-bold">skills</span> table in your Supabase Table Editor to display your capabilities here.
            </p>
          </div>
        )}
      </section>

      {/* 03 // PROJECTS SECTION */}
      <section id="projects" className="py-12 scroll-mt-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-emerald-500 font-mono text-sm tracking-wider font-bold">03 // MISSIONS & PROJECTS VAULT</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {projects.length > 0 ? (
          <>
            {/* Tag Filters */}
            {allTags.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedProjectTag(tag)}
                    className={`px-3 py-1.5 rounded transition-all ${
                      selectedProjectTag === tag
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          /* Empty State when no projects in Supabase */
          <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-900/30 text-center font-mono space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-300">MISSIONS_VAULT: ARCHIVE_EMPTY</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No projects recorded yet. Insert rows into the <span className="text-emerald-400 font-bold">projects</span> table in your Supabase Table Editor to display your missions here.
            </p>
          </div>
        )}
      </section>

      {/* 04 // CREDENTIALS & CERTIFICATIONS */}
      <section id="credentials" className="py-12 scroll-mt-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-emerald-500 font-mono text-sm tracking-wider font-bold">04 // CREDENTIALS & CLEARANCES</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => {
              const badge = cert.badge_id || cert.badgeId || 'VERIFIED';
              const uniqueKey = cert.id || `${cert.name}-${cert.year || 'credential'}`;
              const certUrl = cert.credential_url || cert.image_url;
              const isPdf = Boolean(certUrl && certUrl.toLowerCase().includes('.pdf'));

              return (
                <div
                  key={uniqueKey}
                  className="p-5 rounded-lg border border-slate-800 bg-slate-900/60 font-mono relative overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <Award className="w-6 h-6 text-emerald-400" />
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                        <CheckCircle2 className="w-3 h-3" />
                        {cert.status || 'VERIFIED'}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 font-sans">{cert.issuer}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      {cert.year && <span>YEAR: {cert.year}</span>}
                      <span className="text-slate-400 font-mono ml-auto">{badge}</span>
                    </div>
                    {certUrl && (
                      <a
                        href={certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full py-1.5 px-2 rounded bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 text-emerald-400 text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{isPdf ? 'VIEW_PDF_CERTIFICATE' : 'VERIFY_CREDENTIAL'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State when no certifications in Supabase */
          <div className="p-8 rounded-lg border border-dashed border-slate-800 bg-slate-900/30 text-center font-mono space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-300">CREDENTIALS_VAULT: NO_ENTRIES_RECORDED</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No certifications recorded yet. Insert rows into the <span className="text-emerald-400 font-bold">certifications</span> table in your Supabase Table Editor to display your verified credentials here.
            </p>
          </div>
        )}
      </section>

      {/* 05 // CONTACT TRANSMISSION */}
      <ContactSection metadata={metadata} />
    </div>
  );
}
