-- ==============================================================================
-- CYBER-PORTFOLIO SUPABASE SCHEMA
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ==============================================================================

-- 1. PROJECTS TABLE
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  tags text[] default '{}',
  image_url text,
  demo_url text,
  repo_url text,
  featured boolean default false,
  user_id uuid references auth.users(id) default null
);

alter table public.projects enable row level security;

-- Drop policy if exists and re-create for public read
drop policy if exists "Public projects are viewable by everyone." on public.projects;
create policy "Public projects are viewable by everyone."
  on public.projects for select
  using ( true );

-- 2. SKILLS TABLE
create table if not exists public.skills (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  category text not null, -- 'Offensive Security', 'Defensive Sec & SIEM', 'Network & Infrastructure', 'Tools & Automation'
  name text not null,
  icon_name text not null, -- references lucide-react icon names, e.g. 'Terminal', 'Crosshair', 'ShieldCheck'
  level integer default 1 check (level between 1 and 5), -- 1-5 scale
  user_id uuid references auth.users(id) default null
);

alter table public.skills enable row level security;

drop policy if exists "Public skills are viewable by everyone." on public.skills;
create policy "Public skills are viewable by everyone."
  on public.skills for select
  using ( true );

-- 3. SITE METADATA TABLE
create table if not exists public.site_metadata (
  id uuid default gen_random_uuid() primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text default 'Alex Vance',
  title text default 'Cybersecurity Analyst & DevSecOps Engineer',
  handle text default 'GHOST_OPERATOR',
  status text default 'ACTIVE_DEFENSE // OPEN_FOR_MISSIONS',
  location text default 'Grid 41.8781° N, 87.6298° W [Chicago, IL]',
  clearance text default 'LEVEL-3 SECURITY PRIVILEGES',
  bio text,
  resume_url text,
  pgp_fingerprint text,
  email text,
  github text,
  linkedin text,
  user_id uuid references auth.users(id) default null
);

alter table public.site_metadata enable row level security;

drop policy if exists "Public metadata is viewable by everyone." on public.site_metadata;
create policy "Public metadata is viewable by everyone."
  on public.site_metadata for select
  using ( true );

-- 4. CERTIFICATIONS TABLE
create table if not exists public.certifications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  issuer text not null,
  year text not null,
  badge_id text,
  user_id uuid references auth.users(id) default null
);

alter table public.certifications enable row level security;

drop policy if exists "Public certifications are viewable by everyone." on public.certifications;
create policy "Public certifications are viewable by everyone."
  on public.certifications for select
  using ( true );

-- ==============================================================================
-- STORAGE BUCKETS
-- You can create these in the Supabase Dashboard under Storage -> New Bucket:
-- 1. 'projects' (Public Bucket: ON)
-- 2. 'resumes'  (Public Bucket: ON)
-- ==============================================================================
