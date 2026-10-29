import React from 'react';
import {
  Crosshair,
  Terminal,
  ShieldAlert,
  Flame,
  Activity,
  Eye,
  ShieldCheck,
  FileSearch,
  Radio,
  Network,
  Lock,
  Server,
  Code2,
  Cpu,
  Boxes,
  GitBranch,
  Shield,
  Key,
  Bug,
  Database,
  Search,
  Zap,
  Cloud,
  Layers,
  Globe,
  Wifi,
  FileCode,
  HardDrive
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  crosshair: Crosshair,
  terminal: Terminal,
  shieldalert: ShieldAlert,
  flame: Flame,
  activity: Activity,
  eye: Eye,
  shieldcheck: ShieldCheck,
  filesearch: FileSearch,
  radio: Radio,
  network: Network,
  lock: Lock,
  server: Server,
  code: Code2,
  code2: Code2,
  cpu: Cpu,
  boxes: Boxes,
  gitbranch: GitBranch,
  shield: Shield,
  key: Key,
  bug: Bug,
  database: Database,
  search: Search,
  zap: Zap,
  cloud: Cloud,
  layers: Layers,
  globe: Globe,
  wifi: Wifi,
  filecode: FileCode,
  harddrive: HardDrive,
  // Aliases for user convenience in Supabase
  python: Code2,
  linux: Server,
  pentest: Crosshair,
  pentesting: Crosshair,
  security: ShieldCheck,
  siem: Activity,
  ids: Eye,
  ips: ShieldAlert,
  wireshark: Radio,
  networking: Network,
  firewall: Lock,
  docker: Boxes,
  kubernetes: Layers,
  web: Globe,
};

interface DynamicSkillIconProps {
  name?: string;
  className?: string;
}

export default function DynamicSkillIcon({ name, className = "w-5 h-5 text-emerald-400" }: DynamicSkillIconProps) {
  if (!name) {
    return <Shield className={className} />;
  }

  const cleanKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const IconComponent = iconMap[cleanKey] || Shield;

  return <IconComponent className={className} />;
}
