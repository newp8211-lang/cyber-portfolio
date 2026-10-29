import { Project } from '@/data/portfolioData';
import { ExternalLink, Github, Shield, Terminal, FileText, Download } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const displayId = project.id.length > 8 
    ? project.id.slice(0, 8).toUpperCase() 
    : project.id.padStart(3, '0');

  const tags = Array.isArray(project.tags) ? project.tags : [];
  const isPdf = Boolean(project.image_url && project.image_url.toLowerCase().includes('.pdf'));

  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-emerald-500/60 hover:bg-slate-900/90 transition-all duration-300">
      {/* Corner cyber accent line */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute transform rotate-45 bg-emerald-500/20 w-12 h-2 -top-1 -right-4 group-hover:bg-emerald-500/50 transition-colors"></div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 font-semibold">
              MISSION_REF: #{displayId}
            </span>
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              <Shield className="w-3 h-3" />
              PRIORITY_ALPHA
            </span>
          )}
        </div>

        {/* Project Visual / Document Preview */}
        {project.image_url && (
          isPdf ? (
            <div className="p-3.5 mb-4 rounded-lg border border-emerald-900/50 bg-emerald-950/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <FileText className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-mono font-bold text-slate-200 truncate">VERIFIED_CREDENTIAL_DOC.PDF</p>
                  <p className="text-[10px] font-mono text-emerald-400/80">Coursera / Authorized Certificate</p>
                </div>
              </div>
              <a
                href={project.image_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold shrink-0 flex items-center gap-1 transition-colors"
              >
                <span>OPEN_PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ) : (
            <div className="relative w-full h-44 mb-4 rounded overflow-hidden border border-slate-800 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )
        )}

        <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs">
        {project.repo_url && (
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>SOURCE_CODE</span>
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors ml-auto"
          >
            <span>LIVE_SIMULATION</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        {/* If no repo or demo but PDF is present, provide direct link in footer as well */}
        {!project.repo_url && !project.demo_url && project.image_url && (
          <a
            href={project.image_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>VIEW_ATTACHMENT</span>
          </a>
        )}
      </div>
    </div>
  );
}
