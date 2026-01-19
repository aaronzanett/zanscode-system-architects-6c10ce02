import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.howWeWork': 'Cara Kerja',
    'nav.about': 'Tentang',
    'nav.saas': 'SaaS',
    'nav.contact': 'Kontak',
    'nav.cta': 'Diskusikan Bisnis Anda',

    // Hero
    'hero.headline.part1': 'Solusi Sistem Bisnis',
    'hero.headline.part2': 'Terpercaya untuk Pertumbuhan',
    'hero.subtitle': 'Zanscode membantu bisnis serius merancang sistem digital yang scalable, terstruktur, dan siap untuk tumbuh bersama bisnis Anda.',
    'hero.cta.primary': 'Diskusikan Bisnis Anda',
    'hero.cta.secondary': 'Lihat Cara Kerja Kami',
    'hero.metric.without': 'Tanpa Zanscode',
    'hero.metric.with': 'Dengan Zanscode',
    'hero.customers': 'Klien Kami',
    'hero.security': 'Keamanan Terjamin',
    'hero.team': 'Tim Anda',
    'hero.trust.enterprise': 'Enterprise-grade Architecture',
    'hero.trust.custom': 'Tailored Business Systems',
    'hero.trust.support': 'Long-term Technical Partnership',

    // Trust
    'trust.title': 'Dibangun untuk Bisnis yang Berkembang',
    'trust.subtitle': 'Kami bermitra dengan perusahaan yang siap berinvestasi dalam sistem yang tepat.',
    'trust.scalable.title': 'Arsitektur Skalabel',
    'trust.scalable.desc': 'Sistem yang tumbuh bersama bisnis Anda',
    'trust.business.title': 'Pendekatan Bisnis',
    'trust.business.desc': 'Teknologi yang melayani kebutuhan bisnis',
    'trust.secure.title': 'Aman & Terawat',
    'trust.secure.desc': 'Kode bersih yang mudah dikelola',
    'trust.partner.title': 'Kemitraan Jangka Panjang',
    'trust.partner.desc': 'Kami adalah mitra, bukan vendor',

    // Problem
    'problem.title': 'Apakah Bisnis Anda Mengalami Ini?',
    'problem.subtitle': 'Banyak bisnis yang berkembang terjebak dengan sistem yang tidak lagi berfungsi.',
    'problem.1.title': 'Proses Manual & Tidak Efisien',
    'problem.1.desc': 'Tim menghabiskan waktu berjam-jam untuk tugas berulang yang seharusnya bisa diotomatisasi.',
    'problem.2.title': 'Sistem Terputus & Silo Data',
    'problem.2.desc': 'Informasi tersebar di berbagai platform yang tidak terhubung.',
    'problem.3.title': 'Sistem Tidak Bisa Berkembang',
    'problem.3.desc': 'Infrastruktur saat ini tidak dapat menangani pertumbuhan bisnis.',
    'problem.4.title': 'Kesan Digital Tidak Profesional',
    'problem.4.desc': 'Kehadiran online yang tidak mencerminkan kualitas bisnis Anda.',

    // Solution
    'solution.title': 'Pendekatan Zanscode',
    'solution.subtitle': 'Kami tidak langsung coding. Kami memahami bisnis Anda terlebih dahulu.',
    'solution.1.step': '01',
    'solution.1.title': 'Pahami Bisnis',
    'solution.1.desc': 'Kami mendalami alur kerja, tantangan, dan tujuan bisnis Anda.',
    'solution.2.step': '02',
    'solution.2.title': 'Rancang Arsitektur',
    'solution.2.desc': 'Kami merancang blueprint sistem yang tepat untuk kebutuhan Anda.',
    'solution.3.step': '03',
    'solution.3.title': 'Bangun Sistem Bersih',
    'solution.3.desc': 'Kami membangun dengan kode yang bersih, skalabel, dan terawat.',
    'solution.4.step': '04',
    'solution.4.title': 'Optimasi & Kembangkan',
    'solution.4.desc': 'Kami terus mengoptimasi seiring pertumbuhan bisnis Anda.',

    // Services
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Solusi sistem yang dirancang untuk dampak bisnis nyata.',
    'services.1.title': 'Sistem Bisnis Kustom',
    'services.1.desc': 'Platform operasional yang dibangun khusus untuk alur kerja bisnis Anda.',
    'services.2.title': 'Website Enterprise',
    'services.2.desc': 'Kehadiran digital premium yang mencerminkan kredibilitas bisnis Anda.',
    'services.3.title': 'Pengembangan SaaS',
    'services.3.desc': 'Produk perangkat lunak skalabel untuk pasar atau penggunaan internal.',
    'services.4.title': 'Scaling & Improvement',
    'services.4.desc': 'Tingkatkan dan kembangkan sistem yang sudah ada.',
    'services.viewMore': 'Lihat Selengkapnya',
    // Process
    'process.title': 'Proses Kami',
    'process.subtitle': 'Pendekatan terstruktur untuk hasil yang terukur.',
    'process.1': 'Discovery',
    'process.2': 'Planning',
    'process.3': 'Design & Architecture',
    'process.4': 'Development',
    'process.5': 'Testing & Optimization',
    'process.6': 'Growth & Scaling',

    // CTA
    'cta.title': 'Siap Membangun Sistem yang Tepat?',
    'cta.subtitle': 'Mari diskusikan bagaimana sistem yang tepat dapat mengubah operasional bisnis Anda.',
    'cta.button': 'Jadwalkan Diskusi Sistem',

    // Footer
    'footer.tagline': 'Mitra Solusi Sistem untuk Bisnis yang Berkembang',
    'footer.navigation': 'Navigasi',
    'footer.services': 'Layanan',
    'footer.legal': 'Legal & Dukungan',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat & Ketentuan',
    'footer.getInTouch': 'Hubungi Kami',
    'footer.copyright': '© 2024 Zanscode. Semua hak dilindungi.',

    // Services Page
    'services.page.title': 'Layanan',
    'services.page.subtitle': 'Solusi sistem strategis untuk bisnis yang serius berkembang.',
    'services.comparison.title': 'Zanscode vs Vendor Web Biasa',
    'services.comparison.subtitle': 'Perbedaan antara mitra sistem dan vendor template.',
    'services.comparison.zanscode': 'Zanscode',
    'services.comparison.typical': 'Vendor Biasa',
    'services.comparison.1.zanscode': 'Sistem kustom berdasarkan alur kerja bisnis',
    'services.comparison.1.typical': 'Template dengan sedikit kustomisasi',
    'services.comparison.2.zanscode': 'Arsitektur skalabel untuk pertumbuhan',
    'services.comparison.2.typical': 'Solusi cepat tanpa perencanaan jangka panjang',
    'services.comparison.3.zanscode': 'Discovery bisnis mendalam',
    'services.comparison.3.typical': 'Langsung ke desain tanpa pemahaman bisnis',
    'services.comparison.4.zanscode': 'Kemitraan jangka panjang',
    'services.comparison.4.typical': 'Proyek selesai, hubungan berakhir',
    'services.cta': 'Konsultasi Gratis',

    // How We Work Page
    'howwework.title': 'Cara Kerja Kami',
    'howwework.subtitle': 'Kami memulai dengan memahami bisnis — bukan langsung coding.',
    'howwework.1.title': 'Business Discovery',
    'howwework.1.desc': 'Kami melakukan wawancara mendalam dengan tim Anda untuk memahami operasional, tantangan, dan tujuan bisnis.',
    'howwework.2.title': 'Workflow Mapping',
    'howwework.2.desc': 'Kami memetakan alur kerja yang ada dan mengidentifikasi titik-titik masalah yang perlu diperbaiki.',
    'howwework.3.title': 'System Blueprint',
    'howwework.3.desc': 'Kami merancang arsitektur sistem yang tepat berdasarkan kebutuhan dan tujuan bisnis Anda.',
    'howwework.4.title': 'Development & Optimization',
    'howwework.4.desc': 'Kami membangun sistem dengan standar kualitas tinggi dan melakukan optimasi berkelanjutan.',
    'howwework.5.title': 'Long-term Partnership',
    'howwework.5.desc': 'Kami tetap bermitra untuk memastikan sistem terus berkembang seiring pertumbuhan bisnis Anda.',
    'howwework.emphasis': 'Kami memulai dengan memahami bisnis — bukan coding.',

    // About Page
    'about.title': 'Tentang Zanscode',
    'about.subtitle': 'Mitra solusi sistem untuk bisnis yang serius berkembang.',
    'about.philosophy.title': 'Filosofi Kami',
    'about.philosophy.desc': 'Zanscode lahir dari keyakinan bahwa bisnis membutuhkan lebih dari sekadar website. Bisnis membutuhkan sistem yang benar-benar bekerja — sistem yang memahami alur kerja, mendukung pertumbuhan, dan menciptakan efisiensi nyata.',
    'about.why.title': 'Mengapa Kami Ada',
    'about.why.desc': 'Terlalu banyak bisnis yang terjebak dengan solusi template yang tidak memahami kebutuhan unik mereka. Kami ada untuk mengubah itu — untuk membangun sistem yang benar-benar sesuai dengan cara bisnis Anda bekerja.',
    'about.values.title': 'Nilai-Nilai Kami',
    'about.values.1.title': 'Kejelasan di Atas Kompleksitas',
    'about.values.1.desc': 'Sistem yang sederhana untuk digunakan, powerful dalam fungsinya.',
    'about.values.2.title': 'Skalabilitas di Atas Jalan Pintas',
    'about.values.2.desc': 'Investasi dalam fondasi yang benar untuk pertumbuhan jangka panjang.',
    'about.values.3.title': 'Dampak Bisnis di Atas Fitur',
    'about.values.3.desc': 'Setiap keputusan didasarkan pada nilai bisnis yang nyata.',

    // SaaS Page
    'saas.title': 'Ekosistem SaaS Zanscode',
    'saas.subtitle': 'Produk perangkat lunak yang kami bangun untuk memecahkan masalah bisnis nyata.',
    'saas.coming': 'Segera Hadir',
    'saas.vision.title': 'Visi Produk Kami',
    'saas.vision.desc': 'Zanscode tidak hanya membangun sistem untuk klien — kami juga membangun produk SaaS yang lahir dari pemahaman mendalam tentang tantangan bisnis. Setiap produk dirancang untuk memberikan nilai nyata dan dapat diskalakan.',
    'saas.product1.title': 'ZansFlow',
    'saas.product1.desc': 'Platform manajemen workflow untuk tim yang berkembang.',
    'saas.product2.title': 'ZansAnalytics',
    'saas.product2.desc': 'Business intelligence dashboard untuk keputusan berbasis data.',
    'saas.product3.title': 'ZansConnect',
    'saas.product3.desc': 'Integrasi sistem terpusat untuk operasional yang seamless.',

    // Contact Page
    'contact.title': 'Diskusikan Bisnis Anda',
    'contact.subtitle': 'Ini adalah konsultasi bisnis, bukan formulir pemesanan. Kami ingin memahami tantangan dan tujuan Anda.',
    'contact.form.company': 'Nama Perusahaan',
    'contact.form.industry': 'Industri',
    'contact.form.problems': 'Tantangan Bisnis Saat Ini',
    'contact.form.problems.placeholder': 'Ceritakan tentang masalah operasional atau sistem yang Anda hadapi...',
    'contact.form.goals': 'Tujuan Sistem',
    'contact.form.goals.placeholder': 'Apa yang ingin Anda capai dengan sistem yang tepat?',
    'contact.form.budget': 'Range Budget (Opsional)',
    'contact.form.budget.select': 'Pilih range budget',
    'contact.form.budget.1': 'IDR 50-100 Juta',
    'contact.form.budget.2': 'IDR 100-250 Juta',
    'contact.form.budget.3': 'IDR 250-500 Juta',
    'contact.form.budget.4': 'IDR 500 Juta+',
    'contact.form.submit': 'Kirim Permintaan Konsultasi',
    'contact.next.title': 'Apa yang Terjadi Selanjutnya?',
    'contact.next.1': 'Tim kami akan meninjau permintaan Anda dalam 1-2 hari kerja.',
    'contact.next.2': 'Kami akan menghubungi Anda untuk menjadwalkan sesi discovery.',
    'contact.next.3': 'Dalam sesi tersebut, kami akan menggali lebih dalam tentang bisnis Anda.',
    'contact.next.4': 'Setelah memahami kebutuhan Anda, kami akan menyiapkan proposal sistem.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About',
    'nav.saas': 'SaaS',
    'nav.contact': 'Contact',
    'nav.cta': 'Discuss Your Business',

    // Hero
    'hero.headline.part1': 'Trusted Business System',
    'hero.headline.part2': 'Solution for Growth',
    'hero.subtitle': 'Zanscode helps serious businesses design scalable, structured digital systems ready to grow with your business.',
    'hero.cta.primary': 'Discuss Your Business',
    'hero.cta.secondary': 'See How We Work',
    'hero.metric.without': 'Without Zanscode',
    'hero.metric.with': 'With Zanscode',
    'hero.customers': 'Our Clients',
    'hero.security': 'Secured Protection',
    'hero.team': 'Your Team',
    'hero.trust.enterprise': 'Enterprise-grade Architecture',
    'hero.trust.custom': 'Tailored Business Systems',
    'hero.trust.support': 'Long-term Technical Partnership',

    // Trust
    'trust.title': 'Built for Growing Businesses',
    'trust.subtitle': 'We partner with companies ready to invest in the right systems.',
    'trust.scalable.title': 'Scalable Architecture',
    'trust.scalable.desc': 'Systems that grow with your business',
    'trust.business.title': 'Business-Driven Approach',
    'trust.business.desc': 'Technology that serves business needs',
    'trust.secure.title': 'Secure & Maintainable',
    'trust.secure.desc': 'Clean code that\'s easy to manage',
    'trust.partner.title': 'Long-term Partnership',
    'trust.partner.desc': 'We are partners, not vendors',

    // Problem
    'problem.title': 'Is Your Business Experiencing This?',
    'problem.subtitle': 'Many growing businesses are stuck with systems that no longer work.',
    'problem.1.title': 'Manual & Inefficient Processes',
    'problem.1.desc': 'Teams spend hours on repetitive tasks that could be automated.',
    'problem.2.title': 'Disconnected Systems & Data Silos',
    'problem.2.desc': 'Information scattered across unconnected platforms.',
    'problem.3.title': 'Systems That Cannot Scale',
    'problem.3.desc': 'Current infrastructure cannot handle business growth.',
    'problem.4.title': 'Unprofessional Digital Presence',
    'problem.4.desc': 'Online presence that doesn\'t reflect your business quality.',

    // Solution
    'solution.title': 'The Zanscode Approach',
    'solution.subtitle': 'We don\'t jump into coding. We understand your business first.',
    'solution.1.step': '01',
    'solution.1.title': 'Understand the Business',
    'solution.1.desc': 'We dive deep into your workflows, challenges, and business goals.',
    'solution.2.step': '02',
    'solution.2.title': 'Design the Architecture',
    'solution.2.desc': 'We design the right system blueprint for your needs.',
    'solution.3.step': '03',
    'solution.3.title': 'Build Clean Systems',
    'solution.3.desc': 'We build with clean, scalable, and maintainable code.',
    'solution.4.step': '04',
    'solution.4.title': 'Optimize & Scale',
    'solution.4.desc': 'We continuously optimize as your business grows.',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'System solutions designed for real business impact.',
    'services.1.title': 'Custom Business Systems',
    'services.1.desc': 'Operational platforms built specifically for your business workflows.',
    'services.2.title': 'Enterprise Websites',
    'services.2.desc': 'Premium digital presence that reflects your business credibility.',
    'services.3.title': 'SaaS Development',
    'services.3.desc': 'Scalable software products for market or internal use.',
    'services.4.title': 'Scaling & Improvement',
    'services.4.desc': 'Upgrade and scale your existing systems.',
    'services.viewMore': 'View More',

    // Process
    'process.title': 'Our Process',
    'process.subtitle': 'A structured approach for measurable results.',
    'process.1': 'Discovery',
    'process.2': 'Planning',
    'process.3': 'Design & Architecture',
    'process.4': 'Development',
    'process.5': 'Testing & Optimization',
    'process.6': 'Growth & Scaling',

    // CTA
    'cta.title': 'Ready to Build the Right System?',
    'cta.subtitle': 'Let\'s discuss how the right system can transform your business operations.',
    'cta.button': 'Schedule System Discussion',

    // Footer
    'footer.tagline': 'System Solution Partner for Growing Businesses',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.legal': 'Legal & Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.getInTouch': 'Get in Touch',
    'footer.copyright': '© 2024 Zanscode. All rights reserved.',

    // Services Page
    'services.page.title': 'Services',
    'services.page.subtitle': 'Strategic system solutions for businesses serious about growth.',
    'services.comparison.title': 'Zanscode vs Typical Web Vendors',
    'services.comparison.subtitle': 'The difference between a system partner and a template vendor.',
    'services.comparison.zanscode': 'Zanscode',
    'services.comparison.typical': 'Typical Vendors',
    'services.comparison.1.zanscode': 'Custom systems based on business workflows',
    'services.comparison.1.typical': 'Templates with minor customization',
    'services.comparison.2.zanscode': 'Scalable architecture for growth',
    'services.comparison.2.typical': 'Quick fixes without long-term planning',
    'services.comparison.3.zanscode': 'Deep business discovery',
    'services.comparison.3.typical': 'Jump straight to design without understanding',
    'services.comparison.4.zanscode': 'Long-term partnership',
    'services.comparison.4.typical': 'Project done, relationship ends',
    'services.cta': 'Free Consultation',

    // How We Work Page
    'howwework.title': 'How We Work',
    'howwework.subtitle': 'We start with understanding the business — not coding.',
    'howwework.1.title': 'Business Discovery',
    'howwework.1.desc': 'We conduct in-depth interviews with your team to understand operations, challenges, and business goals.',
    'howwework.2.title': 'Workflow Mapping',
    'howwework.2.desc': 'We map existing workflows and identify pain points that need improvement.',
    'howwework.3.title': 'System Blueprint',
    'howwework.3.desc': 'We design the right system architecture based on your business needs and goals.',
    'howwework.4.title': 'Development & Optimization',
    'howwework.4.desc': 'We build systems with high quality standards and continuous optimization.',
    'howwework.5.title': 'Long-term Partnership',
    'howwework.5.desc': 'We remain partners to ensure the system continues to evolve as your business grows.',
    'howwework.emphasis': 'We start with understanding the business — not coding.',

    // About Page
    'about.title': 'About Zanscode',
    'about.subtitle': 'System solution partner for businesses serious about growth.',
    'about.philosophy.title': 'Our Philosophy',
    'about.philosophy.desc': 'Zanscode was born from the belief that businesses need more than just websites. They need systems that truly work — systems that understand workflows, support growth, and create real efficiency.',
    'about.why.title': 'Why We Exist',
    'about.why.desc': 'Too many businesses are stuck with template solutions that don\'t understand their unique needs. We exist to change that — to build systems that truly fit the way your business works.',
    'about.values.title': 'Our Values',
    'about.values.1.title': 'Clarity Over Complexity',
    'about.values.1.desc': 'Systems that are simple to use, powerful in function.',
    'about.values.2.title': 'Scalability Over Shortcuts',
    'about.values.2.desc': 'Investing in the right foundation for long-term growth.',
    'about.values.3.title': 'Business Impact Over Features',
    'about.values.3.desc': 'Every decision is based on real business value.',

    // SaaS Page
    'saas.title': 'Zanscode SaaS Ecosystem',
    'saas.subtitle': 'Software products we build to solve real business problems.',
    'saas.coming': 'Coming Soon',
    'saas.vision.title': 'Our Product Vision',
    'saas.vision.desc': 'Zanscode doesn\'t just build systems for clients — we also build SaaS products born from deep understanding of business challenges. Every product is designed to deliver real, scalable value.',
    'saas.product1.title': 'ZansFlow',
    'saas.product1.desc': 'Workflow management platform for growing teams.',
    'saas.product2.title': 'ZansAnalytics',
    'saas.product2.desc': 'Business intelligence dashboard for data-driven decisions.',
    'saas.product3.title': 'ZansConnect',
    'saas.product3.desc': 'Centralized system integration for seamless operations.',

    // Contact Page
    'contact.title': 'Discuss Your Business',
    'contact.subtitle': 'This is a business consultation, not an order form. We want to understand your challenges and goals.',
    'contact.form.company': 'Company Name',
    'contact.form.industry': 'Industry',
    'contact.form.problems': 'Current Business Challenges',
    'contact.form.problems.placeholder': 'Tell us about the operational or system problems you\'re facing...',
    'contact.form.goals': 'System Goals',
    'contact.form.goals.placeholder': 'What do you want to achieve with the right system?',
    'contact.form.budget': 'Budget Range (Optional)',
    'contact.form.budget.select': 'Select budget range',
    'contact.form.budget.1': 'USD 3,000-7,000',
    'contact.form.budget.2': 'USD 7,000-17,000',
    'contact.form.budget.3': 'USD 17,000-35,000',
    'contact.form.budget.4': 'USD 35,000+',
    'contact.form.submit': 'Submit Consultation Request',
    'contact.next.title': 'What Happens Next?',
    'contact.next.1': 'Our team will review your request within 1-2 business days.',
    'contact.next.2': 'We\'ll contact you to schedule a discovery session.',
    'contact.next.3': 'In that session, we\'ll dig deeper into your business.',
    'contact.next.4': 'After understanding your needs, we\'ll prepare a system proposal.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to access language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
