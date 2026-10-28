export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <div className="relative">
        <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25 animate-pulse"></div>
        <h1 className="relative text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-slate-200">
          SYSTEM_ONLINE
        </h1>
      </div>

      <p className="max-w-2xl text-lg text-slate-400 font-mono">
        &gt; Cyber-Operations Portfolio initialized.<br />
        &gt; Awaiting module configurations...
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-lg">
        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded hover:border-emerald-500/50 transition-colors group">
          <h3 className="text-emerald-500 font-mono mb-2 group-hover:text-emerald-400">&gt; PROJECTS_VAULT</h3>
          <p className="text-sm text-slate-500">Access limited. Authenticate to view secure archives.</p>
        </div>
        <div className="p-6 border border-slate-800 bg-slate-900/50 rounded hover:border-emerald-500/50 transition-colors group">
          <h3 className="text-emerald-500 font-mono mb-2 group-hover:text-emerald-400">&gt; CREDENTIALS</h3>
          <p className="text-sm text-slate-500">Verifying certifications and clearance levels.</p>
        </div>
      </div>
    </div>
  );
}
