export interface Partner {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  createdAt: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface AboutContent {
  id: string;
  title: string;
  description: string;
  mission?: string;
  vision?: string;
  updatedAt: string;
}

export interface SaaSProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  status: 'active' | 'coming-soon' | 'beta';
  createdAt: string;
}

export interface ContactInfo {
  id: string;
  email: string;
  whatsapp: string;
  instagram: string;
  updatedAt: string;
}

export interface ConsultationRequest {
  id: string;
  company: string;
  industry: string;
  problems: string;
  goals: string;
  budget: string;
  status: 'new' | 'in-progress' | 'completed' | 'archived';
  createdAt: string;
}
