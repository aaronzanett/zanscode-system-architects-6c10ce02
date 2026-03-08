import type { Partner, Service, SaaSProduct, ConsultationRequest, TeamMember, Project, ProjectTask, Client, FinanceRecord, ProductFeature, Document } from '@/types/admin';

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

export const SEED_TEAM: TeamMember[] = [
  { id: 't1', name: 'Andi Prasetyo', email: 'andi@zanscode.com', role: 'owner', department: 'Executive', phone: '+62 812-3456-7890', status: 'active', joinedAt: '2024-01-01T08:00:00Z' },
  { id: 't2', name: 'Siti Rahayu', email: 'siti@zanscode.com', role: 'manager', department: 'Operations', phone: '+62 813-4567-8901', status: 'active', joinedAt: '2024-03-15T08:00:00Z' },
  { id: 't3', name: 'Budi Santoso', email: 'budi@zanscode.com', role: 'developer', department: 'Engineering', phone: '+62 814-5678-9012', status: 'active', joinedAt: '2024-04-01T08:00:00Z' },
  { id: 't4', name: 'Maya Putri', email: 'maya@zanscode.com', role: 'designer', department: 'Design', phone: '+62 815-6789-0123', status: 'active', joinedAt: '2024-05-10T08:00:00Z' },
  { id: 't5', name: 'Rizky Firmansyah', email: 'rizky@zanscode.com', role: 'developer', department: 'Engineering', phone: '+62 816-7890-1234', status: 'active', joinedAt: '2024-06-20T08:00:00Z' },
  { id: 't6', name: 'Dewi Lestari', email: 'dewi@zanscode.com', role: 'marketing', department: 'Marketing', phone: '+62 817-8901-2345', status: 'on-leave', joinedAt: '2024-07-01T08:00:00Z' },
  { id: 't7', name: 'Fajar Nugroho', email: 'fajar@zanscode.com', role: 'developer', department: 'Engineering', phone: '+62 818-9012-3456', status: 'active', joinedAt: '2024-08-15T08:00:00Z' },
  { id: 't8', name: 'Lina Marlina', email: 'lina@zanscode.com', role: 'finance', department: 'Finance', phone: '+62 819-0123-4567', status: 'active', joinedAt: '2024-09-01T08:00:00Z' },
  { id: 't9', name: 'Hendra Wijaya', email: 'hendra@zanscode.com', role: 'developer', department: 'Engineering', phone: '+62 821-1234-5678', status: 'inactive', joinedAt: '2024-10-10T08:00:00Z' },
  { id: 't10', name: 'Ratna Sari', email: 'ratna@zanscode.com', role: 'designer', department: 'Design', phone: '+62 822-2345-6789', status: 'active', joinedAt: '2025-01-05T08:00:00Z' },
];

export const SEED_PROJECTS: Project[] = [
  { id: 'pr1', title: 'E-Commerce Platform Redesign', description: 'Complete overhaul of the storefront UI/UX', assignee: 'Budi Santoso', status: 'in-progress', priority: 'high', deadline: '2026-04-15', createdAt: '2026-01-05T08:00:00Z' },
  { id: 'pr2', title: 'Mobile App v2.0', description: 'New features and performance improvements for mobile', assignee: 'Rizky Firmansyah', status: 'in-progress', priority: 'urgent', deadline: '2026-03-30', createdAt: '2026-01-10T08:00:00Z' },
  { id: 'pr3', title: 'Client Portal Development', description: 'Self-service portal for clients to track projects', assignee: 'Fajar Nugroho', status: 'backlog', priority: 'medium', deadline: '2026-05-20', createdAt: '2026-01-20T08:00:00Z' },
  { id: 'pr4', title: 'Internal Dashboard Analytics', description: 'Real-time analytics dashboard for internal metrics', assignee: 'Budi Santoso', status: 'review', priority: 'high', deadline: '2026-03-15', createdAt: '2026-02-01T08:00:00Z' },
  { id: 'pr5', title: 'API Gateway Migration', description: 'Migrate legacy APIs to new gateway architecture', assignee: 'Rizky Firmansyah', status: 'backlog', priority: 'medium', deadline: '2026-06-01', createdAt: '2026-02-10T08:00:00Z' },
  { id: 'pr6', title: 'Marketing Website Refresh', description: 'Update landing pages with new branding', assignee: 'Maya Putri', status: 'completed', priority: 'low', deadline: '2026-02-28', createdAt: '2026-01-15T08:00:00Z' },
  { id: 'pr7', title: 'Payment Integration', description: 'Integrate multiple payment providers', assignee: 'Fajar Nugroho', status: 'in-progress', priority: 'urgent', deadline: '2026-03-20', createdAt: '2026-02-05T08:00:00Z' },
  { id: 'pr8', title: 'Data Pipeline Optimization', description: 'Optimize ETL pipelines for faster processing', assignee: 'Budi Santoso', status: 'backlog', priority: 'low', deadline: '2026-07-01', createdAt: '2026-02-20T08:00:00Z' },
];

export const SEED_TASKS: ProjectTask[] = [
  { id: 'tk1', projectId: 'pr1', title: 'Design new product page layout', assignee: 'Maya Putri', status: 'done', priority: 'high', createdAt: '2026-01-06T08:00:00Z' },
  { id: 'tk2', projectId: 'pr1', title: 'Implement responsive cart component', assignee: 'Budi Santoso', status: 'in-progress', priority: 'high', createdAt: '2026-01-08T08:00:00Z' },
  { id: 'tk3', projectId: 'pr1', title: 'Add checkout flow animations', assignee: 'Rizky Firmansyah', status: 'todo', priority: 'medium', createdAt: '2026-01-10T08:00:00Z' },
  { id: 'tk4', projectId: 'pr2', title: 'Fix push notification crashes', assignee: 'Rizky Firmansyah', status: 'in-progress', priority: 'high', createdAt: '2026-01-12T08:00:00Z' },
  { id: 'tk5', projectId: 'pr2', title: 'Implement biometric login', assignee: 'Fajar Nugroho', status: 'todo', priority: 'medium', createdAt: '2026-01-15T08:00:00Z' },
  { id: 'tk6', projectId: 'pr4', title: 'Build chart components', assignee: 'Budi Santoso', status: 'done', priority: 'high', createdAt: '2026-02-02T08:00:00Z' },
  { id: 'tk7', projectId: 'pr4', title: 'Connect real-time data feeds', assignee: 'Fajar Nugroho', status: 'in-progress', priority: 'high', createdAt: '2026-02-05T08:00:00Z' },
  { id: 'tk8', projectId: 'pr7', title: 'Setup Stripe webhook handlers', assignee: 'Fajar Nugroho', status: 'in-progress', priority: 'high', createdAt: '2026-02-06T08:00:00Z' },
  { id: 'tk9', projectId: 'pr7', title: 'Add Midtrans payment provider', assignee: 'Rizky Firmansyah', status: 'todo', priority: 'medium', createdAt: '2026-02-08T08:00:00Z' },
  { id: 'tk10', projectId: 'pr3', title: 'Design client dashboard wireframes', assignee: 'Maya Putri', status: 'todo', priority: 'medium', createdAt: '2026-01-22T08:00:00Z' },
];

export const SEED_CLIENTS: Client[] = [
  { id: 'cl1', name: 'Ahmad Fauzi', company: 'PT Maju Sejahtera', email: 'ahmad@majusejahtera.co.id', phone: '+62 811-1111-1111', status: 'active', dealValue: 75000, notes: 'Long-term manufacturing client', lastContact: '2026-03-05', createdAt: '2025-06-01T08:00:00Z' },
  { id: 'cl2', name: 'Linda Wijaya', company: 'Tokoku Digital', email: 'linda@tokoku.co.id', phone: '+62 812-2222-2222', status: 'active', dealValue: 35000, notes: 'E-commerce platform rebuild', lastContact: '2026-03-07', createdAt: '2025-07-15T08:00:00Z' },
  { id: 'cl3', name: 'Dr. Suharto', company: 'Rumah Sakit Harapan', email: 'suharto@rsharapan.co.id', phone: '+62 813-3333-3333', status: 'active', dealValue: 120000, notes: 'EHR implementation completed', lastContact: '2026-02-20', createdAt: '2025-08-10T08:00:00Z' },
  { id: 'cl4', name: 'Rini Susanti', company: 'Bank Nusantara', email: 'rini@banknusantara.co.id', phone: '+62 814-4444-4444', status: 'active', dealValue: 200000, notes: 'Core banking modernization', lastContact: '2026-03-06', createdAt: '2025-09-20T08:00:00Z' },
  { id: 'cl5', name: 'Pak Darmawan', company: 'Sekolah Pintar', email: 'darmawan@sekolahpintar.id', phone: '+62 815-5555-5555', status: 'lead', dealValue: 15000, notes: 'Interested in LMS solution', lastContact: '2026-02-28', createdAt: '2025-10-05T08:00:00Z' },
  { id: 'cl6', name: 'Yusuf Hakim', company: 'Trans Logistik', email: 'yusuf@translogistik.co.id', phone: '+62 816-6666-6666', status: 'prospect', dealValue: 40000, notes: 'Fleet management proposal sent', lastContact: '2026-03-01', createdAt: '2025-11-12T08:00:00Z' },
  { id: 'cl7', name: 'Mega Sari', company: 'Media Kreatif Co', email: 'mega@mediakreatif.com', phone: '+62 817-7777-7777', status: 'active', dealValue: 18000, notes: 'CMS project ongoing', lastContact: '2026-03-04', createdAt: '2025-12-01T08:00:00Z' },
  { id: 'cl8', name: 'Bambang Irawan', company: 'GovTech Solutions', email: 'bambang@govtech.go.id', phone: '+62 818-8888-8888', status: 'lead', dealValue: 150000, notes: 'Government portal tender', lastContact: '2026-03-08', createdAt: '2026-01-20T08:00:00Z' },
  { id: 'cl9', name: 'Rina Kartika', company: 'Warung Nusantara', email: 'rina@warungnusantara.id', phone: '+62 819-9999-9999', status: 'prospect', dealValue: 12000, notes: 'POS system inquiry', lastContact: '2026-03-03', createdAt: '2026-02-01T08:00:00Z' },
  { id: 'cl10', name: 'Hadi Pranoto', company: 'Kebun Raya Agri', email: 'hadi@kebunraya.co.id', phone: '+62 821-0000-0000', status: 'inactive', dealValue: 60000, notes: 'Project archived - budget constraints', lastContact: '2026-01-15', createdAt: '2025-08-20T08:00:00Z' },
];

export const SEED_FINANCE: FinanceRecord[] = [
  { id: 'f1', type: 'income', category: 'Project', description: 'E-Commerce Platform - Phase 1', amount: 25000, date: '2026-01-15', invoiceNumber: 'INV-2026-001', status: 'paid', createdAt: '2026-01-15T08:00:00Z' },
  { id: 'f2', type: 'income', category: 'Project', description: 'Mobile App v2.0 - Deposit', amount: 15000, date: '2026-01-20', invoiceNumber: 'INV-2026-002', status: 'paid', createdAt: '2026-01-20T08:00:00Z' },
  { id: 'f3', type: 'expense', category: 'Salary', description: 'Team salaries - January', amount: 18000, date: '2026-01-31', status: 'paid', createdAt: '2026-01-31T08:00:00Z' },
  { id: 'f4', type: 'expense', category: 'Infrastructure', description: 'Cloud hosting - AWS', amount: 2500, date: '2026-02-01', status: 'paid', createdAt: '2026-02-01T08:00:00Z' },
  { id: 'f5', type: 'income', category: 'Consulting', description: 'Bank Nusantara - Advisory', amount: 10000, date: '2026-02-10', invoiceNumber: 'INV-2026-003', status: 'paid', createdAt: '2026-02-10T08:00:00Z' },
  { id: 'f6', type: 'expense', category: 'Marketing', description: 'Google Ads campaign', amount: 3000, date: '2026-02-15', status: 'paid', createdAt: '2026-02-15T08:00:00Z' },
  { id: 'f7', type: 'income', category: 'SaaS', description: 'Dashboard Pro subscriptions - Feb', amount: 8500, date: '2026-02-28', invoiceNumber: 'INV-2026-004', status: 'paid', createdAt: '2026-02-28T08:00:00Z' },
  { id: 'f8', type: 'expense', category: 'Salary', description: 'Team salaries - February', amount: 18000, date: '2026-02-28', status: 'paid', createdAt: '2026-02-28T08:00:00Z' },
  { id: 'f9', type: 'income', category: 'Project', description: 'Payment Integration - Milestone 1', amount: 12000, date: '2026-03-05', invoiceNumber: 'INV-2026-005', status: 'pending', createdAt: '2026-03-05T08:00:00Z' },
  { id: 'f10', type: 'expense', category: 'Office', description: 'Office rent - March', amount: 2000, date: '2026-03-01', status: 'paid', createdAt: '2026-03-01T08:00:00Z' },
  { id: 'f11', type: 'income', category: 'Consulting', description: 'RS Harapan - Final payment', amount: 30000, date: '2026-03-10', invoiceNumber: 'INV-2026-006', status: 'overdue', createdAt: '2026-03-01T08:00:00Z' },
  { id: 'f12', type: 'expense', category: 'Software', description: 'Figma + GitHub licenses', amount: 800, date: '2026-03-01', status: 'paid', createdAt: '2026-03-01T08:00:00Z' },
];

export const SEED_PRODUCT_FEATURES: ProductFeature[] = [
  { id: 'pf1', product: 'Dashboard Pro', title: 'Real-time data refresh', description: 'Auto-refresh dashboard data every 30 seconds', type: 'feature', status: 'released', priority: 'high', version: '2.1.0', createdAt: '2025-11-01T08:00:00Z' },
  { id: 'pf2', product: 'Dashboard Pro', title: 'Export to PDF', description: 'Allow users to export dashboards as PDF reports', type: 'feature', status: 'in-development', priority: 'medium', version: '2.2.0', createdAt: '2026-01-10T08:00:00Z' },
  { id: 'pf3', product: 'ChatFlow', title: 'Multi-language support', description: 'Support for Bahasa, English, and Mandarin', type: 'feature', status: 'planned', priority: 'high', createdAt: '2026-02-01T08:00:00Z' },
  { id: 'pf4', product: 'ChatFlow', title: 'Message threading broken', description: 'Thread replies not appearing under parent message', type: 'bug', status: 'in-development', priority: 'critical', version: '1.5.1', createdAt: '2026-02-15T08:00:00Z' },
  { id: 'pf5', product: 'ScheduleX', title: 'Google Calendar sync', description: 'Two-way sync with Google Calendar', type: 'feature', status: 'testing', priority: 'high', version: '1.3.0', createdAt: '2026-01-20T08:00:00Z' },
  { id: 'pf6', product: 'ScheduleX', title: 'Timezone display incorrect', description: 'Events show wrong time for UTC+7 users', type: 'bug', status: 'in-development', priority: 'high', version: '1.2.5', createdAt: '2026-02-20T08:00:00Z' },
  { id: 'pf7', product: 'StoreFront', title: 'Inventory management module', description: 'Track stock levels and auto-reorder thresholds', type: 'feature', status: 'planned', priority: 'high', createdAt: '2026-02-10T08:00:00Z' },
  { id: 'pf8', product: 'Dashboard Pro', title: 'Improve chart rendering speed', description: 'Optimize canvas rendering for large datasets', type: 'improvement', status: 'testing', priority: 'medium', version: '2.2.0', createdAt: '2026-02-25T08:00:00Z' },
  { id: 'pf9', product: 'PayEase', title: 'Multi-currency support', description: 'Accept IDR, USD, SGD, MYR payments', type: 'feature', status: 'planned', priority: 'high', createdAt: '2026-03-01T08:00:00Z' },
  { id: 'pf10', product: 'TeamHub', title: 'File sharing limit increase', description: 'Raise file upload limit from 10MB to 50MB', type: 'improvement', status: 'released', priority: 'low', version: '0.9.2', createdAt: '2026-01-05T08:00:00Z' },
];

export const SEED_DOCUMENTS: Document[] = [
  { id: 'd1', title: 'Employee Onboarding Guide', category: 'sop', content: 'Step-by-step guide for onboarding new team members including tool setup, account creation, and first-week checklist.', author: 'Siti Rahayu', updatedAt: '2026-02-15T08:00:00Z', createdAt: '2025-06-01T08:00:00Z' },
  { id: 'd2', title: 'Code Review Standards', category: 'sop', content: 'Guidelines for conducting code reviews including checklist items, approval process, and quality standards.', author: 'Budi Santoso', updatedAt: '2026-01-20T08:00:00Z', createdAt: '2025-07-10T08:00:00Z' },
  { id: 'd3', title: 'Privacy Policy Template', category: 'legal', content: 'Standard privacy policy template for client projects covering data collection, usage, and GDPR compliance.', author: 'Andi Prasetyo', updatedAt: '2026-03-01T08:00:00Z', createdAt: '2025-04-15T08:00:00Z' },
  { id: 'd4', title: 'Service Level Agreement', category: 'legal', content: 'SLA template defining uptime guarantees, response times, and support tiers for client agreements.', author: 'Andi Prasetyo', updatedAt: '2025-12-10T08:00:00Z', createdAt: '2025-05-20T08:00:00Z' },
  { id: 'd5', title: 'Dashboard Pro API Documentation', category: 'product', content: 'Complete API reference for Dashboard Pro including authentication, endpoints, webhooks, and rate limits.', author: 'Fajar Nugroho', updatedAt: '2026-02-28T08:00:00Z', createdAt: '2025-09-01T08:00:00Z' },
  { id: 'd6', title: 'ChatFlow Integration Guide', category: 'product', content: 'How to integrate ChatFlow with websites, mobile apps, and third-party platforms via SDK and REST API.', author: 'Rizky Firmansyah', updatedAt: '2026-01-15T08:00:00Z', createdAt: '2025-10-10T08:00:00Z' },
  { id: 'd7', title: 'Company Brand Guidelines', category: 'general', content: 'Brand identity guidelines including logo usage, color palette, typography, and tone of voice.', author: 'Maya Putri', updatedAt: '2026-02-01T08:00:00Z', createdAt: '2025-03-01T08:00:00Z' },
  { id: 'd8', title: 'Deployment Checklist', category: 'sop', content: 'Pre-deployment and post-deployment checklist for production releases.', author: 'Budi Santoso', updatedAt: '2026-03-05T08:00:00Z', createdAt: '2025-08-15T08:00:00Z' },
  { id: 'd9', title: 'Client Proposal Template', category: 'general', content: 'Standard proposal template including project scope, timeline, pricing, and terms.', author: 'Siti Rahayu', updatedAt: '2026-01-10T08:00:00Z', createdAt: '2025-06-20T08:00:00Z' },
  { id: 'd10', title: 'Incident Response Plan', category: 'sop', content: 'Procedures for handling security incidents, outages, and data breaches.', author: 'Andi Prasetyo', updatedAt: '2026-02-20T08:00:00Z', createdAt: '2025-11-01T08:00:00Z' },
];
