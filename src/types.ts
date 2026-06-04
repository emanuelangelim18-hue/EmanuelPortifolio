export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  repoUrl: string;
  tags: string[];
  language: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  url: string;
  status: 'concluido' | 'em_andamento';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
