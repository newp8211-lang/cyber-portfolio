export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image_url?: string;
  demo_url?: string;
  repo_url?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  category: string;
  name: string;
  icon_name?: string;
  level: number; // 1 to 5
}

export interface SiteMetadata {
  name: string;
  title: string;
  handle: string;
  status: string;
  location: string;
  clearance: string;
  bio: string;
  resume_url: string;
  pgp_fingerprint: string;
  email: string;
  github: string;
  linkedin: string;
}

export const initialSiteMetadata: SiteMetadata = {
  name: 'Security Operator',
  title: 'Cybersecurity Analyst & Systems Specialist',
  handle: 'OPERATOR_01',
  status: 'ACTIVE_DEFENSE // SYSTEM_ONLINE',
  location: 'NODE_SECURE // ENCRYPTED',
  clearance: 'LEVEL-3 SECURITY PRIVILEGES',
  bio: 'Specializing in cyber defense, threat intelligence, and systems auditing. All operational logs and mission archives are synchronized live with the secure database.',
  resume_url: '',
  pgp_fingerprint: 'AWAITING_KEY_GENERATION // PGP_VAULT',
  email: '',
  github: '',
  linkedin: '',
};

export const initialSkills: Skill[] = [
  // Offensive Security
  { id: '1', category: 'Offensive Security', name: 'Penetration Testing', icon_name: 'Crosshair', level: 5 },
  { id: '2', category: 'Offensive Security', name: 'Metasploit & Burp Suite', icon_name: 'Terminal', level: 5 },
  { id: '3', category: 'Offensive Security', name: 'OWASP Top 10 Auditing', icon_name: 'ShieldAlert', level: 4 },
  { id: '4', category: 'Offensive Security', name: 'Red Team Operations', icon_name: 'Flame', level: 4 },

  // Defensive Sec & SIEM
  { id: '5', category: 'Defensive Sec & SIEM', name: 'Splunk & Elastic SIEM', icon_name: 'Activity', level: 5 },
  { id: '6', category: 'Defensive Sec & SIEM', name: 'Snort / Suricata IDS/IPS', icon_name: 'Eye', level: 4 },
  { id: '7', category: 'Defensive Sec & SIEM', name: 'Wazuh & EDR Deployment', icon_name: 'ShieldCheck', level: 5 },
  { id: '8', category: 'Defensive Sec & SIEM', name: 'Incident Response / DFIR', icon_name: 'FileSearch', level: 4 },

  // Network & Infrastructure
  { id: '9', category: 'Network & Infrastructure', name: 'Wireshark & Packet Analysis', icon_name: 'Radio', level: 5 },
  { id: '10', category: 'Network & Infrastructure', name: 'Firewalls, VLANs & VPNs', icon_name: 'Network', level: 5 },
  { id: '11', category: 'Network & Infrastructure', name: 'Zero-Trust Architecture', icon_name: 'Lock', level: 4 },
  { id: '12', category: 'Network & Infrastructure', name: 'Linux Hardening (CIS)', icon_name: 'Server', level: 5 },

  // Tools & Automation
  { id: '13', category: 'Tools & Automation', name: 'Python Security Scripting', icon_name: 'Code2', level: 5 },
  { id: '14', category: 'Tools & Automation', name: 'Bash & PowerShell SecOps', icon_name: 'Cpu', level: 5 },
  { id: '15', category: 'Tools & Automation', name: 'Docker & Kubernetes Security', icon_name: 'Boxes', level: 4 },
  { id: '16', category: 'Tools & Automation', name: 'CI/CD DevSecOps (SonarQube)', icon_name: 'GitBranch', level: 4 },
];

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Aegis SIEM - Threat Detection Pipeline',
    description: 'Autonomous SIEM pipeline ingestion engine that correlates Suricata IDS telemetry and Windows Event Logs to detect pass-the-hash and lateral movement behaviors in sub-second latency.',
    tags: ['Python', 'Elasticsearch', 'Suricata', 'Docker', 'Sigma Rules'],
    repo_url: 'https://github.com',
    demo_url: 'https://demo.nexus',
    featured: true,
  },
  {
    id: '2',
    title: 'GhostTrap - Automated Honeynet & Canary System',
    description: 'Distributed deception grid featuring high-interaction SSH and SMB canaries. Captures live attacker payloads, extracts IoCs (Indicators of Compromise), and syncs with threat intel feeds.',
    tags: ['Go', 'eBPF', 'Threat Intelligence', 'FastAPI', 'Tailscale'],
    repo_url: 'https://github.com',
    demo_url: 'https://demo.nexus',
    featured: true,
  },
  {
    id: '3',
    title: 'Vulnerability Scanner & Remediation Orchestrator',
    description: 'Asynchronous subnet scanner auditing for weak SSH ciphers, misconfigured S3 buckets, and exposed TLS certificates with automated Jira remediation ticket generation.',
    tags: ['Rust', 'Nmap Lib', 'Cloud Security', 'OWASP', 'PostgreSQL'],
    repo_url: 'https://github.com',
    demo_url: 'https://demo.nexus',
    featured: false,
  },
  {
    id: '4',
    title: 'Secure Enclave - End-to-End Encrypted Vault',
    description: 'Zero-knowledge credentials vault leveraging AES-256-GCM and WebCrypto API, fortified against memory dumps and side-channel timing attacks with hardware token MFA integration.',
    tags: ['TypeScript', 'Next.js', 'WebCrypto', 'Supabase', 'FIDO2/WebAuthn'],
    repo_url: 'https://github.com',
    demo_url: 'https://demo.nexus',
    featured: false,
  },
];

export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  year?: string;
  badgeId?: string;
  badge_id?: string;
  status?: string;
  credential_url?: string;
  image_url?: string;
}

export const initialCertifications: Certification[] = [
  {
    name: 'OSCP (Offensive Security Certified Professional)',
    issuer: 'OffSec',
    status: 'ACTIVE_VERIFIED',
    year: '2025',
    badgeId: 'OS-83921',
  },
  {
    name: 'CompTIA Security+ CE (SY0-701)',
    issuer: 'CompTIA',
    status: 'ACTIVE_VERIFIED',
    year: '2024',
    badgeId: 'COMP0010293',
  },
  {
    name: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    status: 'ACTIVE_VERIFIED',
    year: '2025',
    badgeId: 'AWS-SEC-4912',
  },
  {
    name: 'BTL1 (Blue Team Level 1)',
    issuer: 'Security Blue Team',
    status: 'ACTIVE_VERIFIED',
    year: '2024',
    badgeId: 'SBT-BTL1-817',
  },
];

