import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  illustration?: 'services' | 'process' | 'about' | 'saas' | 'contact';
}

// Abstract SVG illustrations for each page type
const illustrations = {
  services: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="80" className="fill-secondary/10" />
      <circle cx="280" cy="100" r="50" className="fill-accent/15" />
      <circle cx="140" cy="200" r="40" className="fill-primary/10" />
      <rect x="180" y="120" width="80" height="60" rx="8" className="fill-secondary/20" />
      <rect x="200" y="140" width="40" height="20" rx="4" className="fill-secondary/30" />
      <path d="M160 180 L180 160 L200 175 L220 155 L240 170" className="stroke-secondary/40" strokeWidth="3" strokeLinecap="round" />
      <rect x="250" y="80" width="60" height="40" rx="6" className="fill-accent/20" />
      <circle cx="280" cy="100" r="10" className="fill-accent/30" />
      <rect x="120" y="180" width="50" height="35" rx="6" className="fill-primary/15" />
      <path d="M130 195 L145 185 L160 200" className="stroke-primary/30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="80" r="30" className="fill-secondary/20" />
      <circle cx="200" cy="150" r="35" className="fill-secondary/25" />
      <circle cx="300" cy="80" r="30" className="fill-secondary/20" />
      <circle cx="150" cy="220" r="28" className="fill-accent/20" />
      <circle cx="280" cy="200" r="32" className="fill-accent/15" />
      <path d="M130 80 L165 120" className="stroke-secondary/30" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M235 130 L270 95" className="stroke-secondary/30" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M185 175 L165 200" className="stroke-secondary/30" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      <path d="M230 165 L260 185" className="stroke-accent/30" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      <rect x="85" y="65" width="30" height="30" rx="4" className="fill-none stroke-secondary/40" strokeWidth="2" />
      <polygon points="200,130 215,160 185,160" className="fill-secondary/30" />
      <rect x="140" y="205" width="20" height="30" rx="3" className="fill-accent/25" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="150" r="90" className="fill-secondary/8" />
      <circle cx="200" cy="150" r="60" className="fill-secondary/12" />
      <circle cx="200" cy="150" r="30" className="fill-secondary/20" />
      <path d="M120 100 C150 80, 250 80, 280 100" className="stroke-accent/30" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 150 C100 100, 150 60, 200 60" className="stroke-secondary/25" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 4" />
      <path d="M300 150 C300 100, 250 60, 200 60" className="stroke-secondary/25" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 4" />
      <circle cx="130" cy="200" r="20" className="fill-accent/20" />
      <circle cx="270" cy="200" r="20" className="fill-accent/20" />
      <rect x="185" y="220" width="30" height="20" rx="4" className="fill-primary/15" />
    </svg>
  ),
  saas: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="130" y="80" width="140" height="100" rx="10" className="fill-secondary/15" />
      <rect x="145" y="95" width="110" height="70" rx="6" className="fill-secondary/10" />
      <rect x="155" y="105" width="40" height="25" rx="3" className="fill-accent/25" />
      <rect x="205" y="105" width="40" height="25" rx="3" className="fill-secondary/25" />
      <rect x="155" y="135" width="90" height="20" rx="3" className="fill-secondary/20" />
      <circle cx="300" cy="120" r="40" className="fill-accent/15" />
      <path d="M285 120 L300 110 L300 130 Z" className="fill-accent/30" />
      <rect x="80" y="180" width="80" height="60" rx="8" className="fill-primary/12" />
      <rect x="90" y="195" width="60" height="8" rx="2" className="fill-primary/20" />
      <rect x="90" y="210" width="45" height="8" rx="2" className="fill-primary/15" />
      <rect x="90" y="225" width="55" height="8" rx="2" className="fill-primary/20" />
      <path d="M200 190 L200 250" className="stroke-secondary/20" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M270 160 L200 190" className="stroke-accent/20" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M130 180 L200 190" className="stroke-primary/20" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="80" width="160" height="120" rx="12" className="fill-secondary/15" />
      <path d="M130 95 L200 145 L270 95" className="stroke-secondary/30" strokeWidth="3" strokeLinecap="round" />
      <path d="M130 185 L170 150" className="stroke-secondary/20" strokeWidth="2" strokeLinecap="round" />
      <path d="M270 185 L230 150" className="stroke-secondary/20" strokeWidth="2" strokeLinecap="round" />
      <circle cx="320" cy="100" r="25" className="fill-accent/20" />
      <circle cx="320" cy="100" r="12" className="fill-accent/30" />
      <circle cx="80" cy="180" r="30" className="fill-primary/12" />
      <rect x="68" y="170" width="24" height="20" rx="3" className="fill-primary/20" />
      <circle cx="300" cy="220" r="35" className="fill-secondary/10" />
      <path d="M285 220 L300 205 L315 220 L300 235 Z" className="fill-secondary/20" />
      <path d="M200 210 L200 260" className="stroke-secondary/15" strokeWidth="2" />
      <path d="M180 240 L220 240" className="stroke-secondary/15" strokeWidth="2" />
    </svg>
  ),
};

export function PageHeader({ title, subtitle, illustration = 'services' }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-background overflow-hidden">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/3 to-secondary/8" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
      
      {/* Radial glow on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/8 via-secondary/4 to-transparent rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="flex items-center justify-between gap-8">
          {/* Text content */}
          <div className="max-w-2xl flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight animate-fade-up">
              {title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed animate-fade-up-delay-1">
              {subtitle}
            </p>
          </div>
          
          {/* Illustration */}
          <div className="hidden lg:block w-[340px] h-[260px] flex-shrink-0 animate-fade-up-delay-1">
            {illustrations[illustration]}
          </div>
        </div>
      </div>
    </section>
  );
}
