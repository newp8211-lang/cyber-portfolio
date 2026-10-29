import HomeClient from '@/components/HomeClient';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { 
  initialSiteMetadata, 
  Project, 
  Skill, 
  SiteMetadata,
  Certification 
} from '@/data/portfolioData';

// Revalidate immediately on each request so updates in Supabase dashboard appear live
export const dynamic = 'force-dynamic';

export default async function Home() {
  let projects: Project[] = [];
  let skills: Skill[] = [];
  let metadata: SiteMetadata = initialSiteMetadata;
  let certifications: Certification[] = [];
  let isLiveDatabase = false;

  if (isSupabaseConfigured && supabase) {
    try {
      const [projectsRes, skillsRes, metadataRes, certsRes] = await Promise.all([
        supabase.from('projects').select('*').order('created_at', { ascending: false }),
        supabase.from('skills').select('*').order('level', { ascending: false }),
        supabase.from('site_metadata').select('*').limit(1).maybeSingle(),
        supabase.from('certifications').select('*').order('created_at', { ascending: false }),
      ]);

      if (projectsRes.data) {
        projects = projectsRes.data as Project[];
        isLiveDatabase = true;
      }

      if (skillsRes.data) {
        skills = skillsRes.data as Skill[];
        isLiveDatabase = true;
      }

      if (metadataRes.data) {
        metadata = {
          ...initialSiteMetadata,
          ...metadataRes.data,
        };
        isLiveDatabase = true;
      }

      if (certsRes.data) {
        certifications = certsRes.data as Certification[];
        isLiveDatabase = true;
      }
    } catch {
      isLiveDatabase = false;
    }
  }

  return (
    <HomeClient
      metadata={metadata}
      skills={skills}
      projects={projects}
      certifications={certifications}
      isLiveDatabase={isLiveDatabase}
    />
  );
}
