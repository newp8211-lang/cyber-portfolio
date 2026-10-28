-- Enable RLS
alter table auth.users enable row level security;

-- PROJECTS TABLE
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  tags text[] default '{}',
  image_url text,
  demo_url text,
  repo_url text,
  user_id uuid references auth.users(id) default auth.uid()
);

alter table public.projects enable row level security;

create policy "Public projects are viewable by everyone."
  on public.projects for select
  using ( true );

create policy "Users can insert their own projects."
  on public.projects for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own projects."
  on public.projects for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own projects."
  on public.projects for delete
  using ( auth.uid() = user_id );

-- SKILLS TABLE
create table public.skills (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  category text not null, -- e.g., 'Networking', 'Security', 'Tools'
  name text not null,
  icon_name text not null, -- references lucide-react icon names
  level integer default 1, -- 1-5 scale
  user_id uuid references auth.users(id) default auth.uid()
);

alter table public.skills enable row level security;

create policy "Public skills are viewable by everyone."
  on public.skills for select
  using ( true );

create policy "Users can manage their own skills."
  on public.skills for all
  using ( auth.uid() = user_id );

-- SITE METADATA TABLE
create table public.site_metadata (
  id uuid default gen_random_uuid() primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  bio text,
  status text default 'Open for Opportunities',
  resume_url text,
  user_id uuid references auth.users(id) default auth.uid()
);

alter table public.site_metadata enable row level security;

create policy "Public metadata is viewable by everyone."
  on public.site_metadata for select
  using ( true );

create policy "Users can manage their own metadata."
  on public.site_metadata for all
  using ( auth.uid() = user_id );

-- STORAGE POLICIES (Assuming buckets 'projects' and 'resumes' exist)
-- Note: Buckets must be created in the Supabase Dashboard.

-- Policy to allow public access to files
-- Run this in the Storage SQL Editor or manually add policies
-- create policy "Public Access"
--   on storage.objects for select
--   using ( bucket_id in ('projects', 'resumes') );

-- create policy "Authenticated Uploads"
--   on storage.objects for insert
--   with check ( auth.role() = 'authenticated' );
