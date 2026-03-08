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

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'manager' | 'developer' | 'designer' | 'marketing' | 'finance';
  department: string;
  phone: string;
  avatar?: string;
  status: 'active' | 'on-leave' | 'inactive';
  joinedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: 'backlog' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  deadline: string;
  createdAt: string;
}

export interface ProjectTask {
  id: string;
  projectId: string;
  title: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: 'lead' | 'prospect' | 'active' | 'inactive';
  dealValue: number;
  notes: string;
  lastContact: string;
  createdAt: string;
}

export interface FinanceRecord {
  id: string;
  type: 'income' | 'expense';
  category: string;
  description: string;
  amount: number;
  date: string;
  invoiceNumber?: string;
  status: 'paid' | 'pending' | 'overdue';
  createdAt: string;
}

export interface ProductFeature {
  id: string;
  product: string;
  title: string;
  description: string;
  type: 'feature' | 'bug' | 'improvement';
  status: 'planned' | 'in-development' | 'testing' | 'released';
  priority: 'low' | 'medium' | 'high' | 'critical';
  version?: string;
  createdAt: string;
}

export interface Document {
  id: string;
  title: string;
  category: 'sop' | 'legal' | 'product' | 'general';
  content: string;
  author: string;
  updatedAt: string;
  createdAt: string;
}
