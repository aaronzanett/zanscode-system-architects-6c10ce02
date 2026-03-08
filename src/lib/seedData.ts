import type { Partner, Service, SaaSProduct, ConsultationRequest, TeamMember } from '@/types/admin';

export const SEED_PARTNERS: Partner[] = [
  { id: 'p1', name: 'TechVenture Indonesia', logo: '', website: 'https://techventure.id', createdAt: '2025-01-15T08:00:00Z' },
  { id: 'p2', name: 'CloudNine Solutions', logo: '', website: 'https://cloudnine.co', createdAt: '2025-02-10T08:00:00Z' },
  { id: 'p3', name: 'DataPulse Analytics', logo: '', website: 'https://datapulse.io', createdAt: '2025-03-05T08:00:00Z' },
  { id: 'p4', name: 'GreenTech Corp', logo: '', website: 'https://greentech.com', createdAt: '2025-03-20T08:00:00Z' },
  { id: 'p5', name: 'FinServe Digital', logo: '', website: 'https://finserve.co.id', createdAt: '2025-04-01T08:00:00Z' },
  { id: 'p6', name: 'MediaMax Group', logo: '', website: 'https://mediamax.id', createdAt: '2025-04-15T08:00:00Z' },
  { id: 'p7', name: 'Nexus Innovations', logo: '', website: 'https://nexusinnovations.com', createdAt: '2025-05-01T08:00:00Z' },
  { id: 'p8', name: 'AgroSmart Systems', logo: '', website: 'https://agrosmart.id', createdAt: '2025-05-20T08:00:00Z' },
  { id: 'p9', name: 'HealthBridge Tech', logo: '', website: 'https://healthbridge.co', createdAt: '2025-06-10T08:00:00Z' },
  { id: 'p10', name: 'EduConnect Platform', logo: '', website: 'https://educonnect.id', createdAt: '2025-06-25T08:00:00Z' },
  { id: 'p11', name: 'LogiTrans Solutions', logo: '', website: 'https://logitrans.co.id', createdAt: '2025-07-05T08:00:00Z' },
  { id: 'p12', name: 'CyberGuard Security', logo: '', website: 'https://cyberguard.io', createdAt: '2025-07-18T08:00:00Z' },
];

export const SEED_SERVICES: Service[] = [
  { id: 's1', icon: 'Code', title: 'Custom Software Development', description: 'End-to-end software development tailored to your business requirements.', createdAt: '2025-01-10T08:00:00Z' },
  { id: 's2', icon: 'Cloud', title: 'Cloud Infrastructure', description: 'Scalable cloud solutions on AWS, GCP, and Azure for enterprise needs.', createdAt: '2025-01-20T08:00:00Z' },
  { id: 's3', icon: 'Shield', title: 'Cybersecurity Consulting', description: 'Comprehensive security audits and penetration testing services.', createdAt: '2025-02-05T08:00:00Z' },
  { id: 's4', icon: 'Smartphone', title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android.', createdAt: '2025-02-15T08:00:00Z' },
  { id: 's5', icon: 'BarChart3', title: 'Data Analytics & BI', description: 'Transform raw data into actionable business intelligence insights.', createdAt: '2025-03-01T08:00:00Z' },
  { id: 's6', icon: 'Brain', title: 'AI & Machine Learning', description: 'Custom AI solutions including NLP, computer vision, and predictive models.', createdAt: '2025-03-12T08:00:00Z' },
  { id: 's7', icon: 'Globe', title: 'Web Development', description: 'Modern, responsive websites and web applications built with latest tech.', createdAt: '2025-04-01T08:00:00Z' },
  { id: 's8', icon: 'Briefcase', title: 'IT Consulting', description: 'Strategic IT planning and digital transformation advisory services.', createdAt: '2025-04-15T08:00:00Z' },
  { id: 's9', icon: 'Database', title: 'Database Management', description: 'Database design, optimization, and migration services.', createdAt: '2025-05-01T08:00:00Z' },
  { id: 's10', icon: 'Workflow', title: 'Process Automation', description: 'Automate repetitive business processes with RPA and workflow tools.', createdAt: '2025-05-20T08:00:00Z' },
];

export const SEED_SAAS: SaaSProduct[] = [
  { id: 'sa1', icon: 'LayoutDashboard', title: 'Dashboard Pro', description: 'All-in-one analytics dashboard for real-time business metrics.', status: 'active', createdAt: '2025-01-05T08:00:00Z' },
  { id: 'sa2', icon: 'MessageSquare', title: 'ChatFlow', description: 'AI-powered customer support chatbot with multi-channel integration.', status: 'active', createdAt: '2025-02-10T08:00:00Z' },
  { id: 'sa3', icon: 'FileText', title: 'DocuSign Lite', description: 'Simplified document signing and management platform.', status: 'beta', createdAt: '2025-03-15T08:00:00Z' },
  { id: 'sa4', icon: 'Calendar', title: 'ScheduleX', description: 'Smart scheduling and appointment management system.', status: 'active', createdAt: '2025-04-01T08:00:00Z' },
  { id: 'sa5', icon: 'ShoppingCart', title: 'StoreFront', description: 'E-commerce platform with inventory and order management.', status: 'coming-soon', createdAt: '2025-04-20T08:00:00Z' },
  { id: 'sa6', icon: 'Users', title: 'TeamHub', description: 'Team collaboration and project management workspace.', status: 'beta', createdAt: '2025-05-10T08:00:00Z' },
  { id: 'sa7', icon: 'CreditCard', title: 'PayEase', description: 'Payment processing and invoicing solution for SMBs.', status: 'coming-soon', createdAt: '2025-06-01T08:00:00Z' },
  { id: 'sa8', icon: 'BarChart', title: 'InsightIQ', description: 'Marketing analytics and campaign performance tracker.', status: 'active', createdAt: '2025-06-15T08:00:00Z' },
];

export const SEED_CONSULTATIONS: ConsultationRequest[] = [
  { id: 'c1', company: 'PT Maju Sejahtera', industry: 'Manufacturing', problems: 'Legacy systems causing production delays', goals: 'Modernize production line with IoT integration', budget: '$50,000 - $100,000', status: 'new', createdAt: '2026-01-10T08:00:00Z' },
  { id: 'c2', company: 'Tokoku Digital', industry: 'E-Commerce', problems: 'Poor mobile experience and slow checkout', goals: 'Increase mobile conversion by 40%', budget: '$20,000 - $50,000', status: 'in-progress', createdAt: '2026-01-15T08:00:00Z' },
  { id: 'c3', company: 'Rumah Sakit Harapan', industry: 'Healthcare', problems: 'Paper-based patient records system', goals: 'Implement electronic health records', budget: '$100,000+', status: 'completed', createdAt: '2026-01-20T08:00:00Z' },
  { id: 'c4', company: 'Bank Nusantara', industry: 'Finance', problems: 'Outdated core banking system', goals: 'Digital transformation of banking services', budget: '$100,000+', status: 'in-progress', createdAt: '2026-02-01T08:00:00Z' },
  { id: 'c5', company: 'Sekolah Pintar', industry: 'Education', problems: 'No online learning platform', goals: 'Build LMS with video conferencing', budget: '$10,000 - $20,000', status: 'new', createdAt: '2026-02-10T08:00:00Z' },
  { id: 'c6', company: 'Kebun Raya Agri', industry: 'Agriculture', problems: 'Manual crop monitoring', goals: 'Implement smart farming with sensors', budget: '$50,000 - $100,000', status: 'archived', createdAt: '2026-02-15T08:00:00Z' },
  { id: 'c7', company: 'Trans Logistik', industry: 'Logistics', problems: 'Inefficient fleet management', goals: 'GPS tracking and route optimization', budget: '$20,000 - $50,000', status: 'new', createdAt: '2026-02-20T08:00:00Z' },
  { id: 'c8', company: 'Media Kreatif Co', industry: 'Media', problems: 'Content management scattered across tools', goals: 'Unified CMS with workflow automation', budget: '$10,000 - $20,000', status: 'in-progress', createdAt: '2026-03-01T08:00:00Z' },
  { id: 'c9', company: 'Warung Nusantara', industry: 'F&B', problems: 'No POS or inventory system', goals: 'Cloud POS with multi-branch support', budget: '$10,000 - $20,000', status: 'new', createdAt: '2026-03-05T08:00:00Z' },
  { id: 'c10', company: 'GovTech Solutions', industry: 'Government', problems: 'Slow public service delivery', goals: 'Digitize citizen services portal', budget: '$100,000+', status: 'new', createdAt: '2026-03-08T08:00:00Z' },
];
