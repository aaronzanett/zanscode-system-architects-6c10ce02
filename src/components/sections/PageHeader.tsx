interface PageHeaderProps {
  title: string;
  subtitle: string;
  illustration?: 'services' | 'process' | 'about' | 'saas' | 'contact';
}

// Descriptive SVG illustrations for each page type
const illustrations = {
  services: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server/System Integration */}
      <rect x="140" y="60" width="120" height="80" rx="8" className="fill-secondary/20 stroke-secondary/40" strokeWidth="2" />
      <rect x="155" y="75" width="90" height="12" rx="2" className="fill-secondary/30" />
      <rect x="155" y="95" width="70" height="8" rx="2" className="fill-secondary/25" />
      <rect x="155" y="110" width="50" height="8" rx="2" className="fill-secondary/20" />
      <circle cx="250" cy="80" r="6" className="fill-accent/50" />
      <circle cx="250" cy="100" r="6" className="fill-secondary/40" />
      
      {/* Connected Services */}
      <rect x="60" y="160" width="80" height="60" rx="6" className="fill-accent/15 stroke-accent/30" strokeWidth="2" />
      <rect x="72" y="175" width="56" height="8" rx="2" className="fill-accent/30" />
      <rect x="72" y="190" width="40" height="6" rx="2" className="fill-accent/20" />
      
      <rect x="260" y="160" width="80" height="60" rx="6" className="fill-primary/12 stroke-primary/25" strokeWidth="2" />
      <rect x="272" y="175" width="56" height="8" rx="2" className="fill-primary/25" />
      <rect x="272" y="190" width="40" height="6" rx="2" className="fill-primary/18" />
      
      {/* Connection Lines */}
      <path d="M200 140 L100 160" className="stroke-secondary/30" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M200 140 L300 160" className="stroke-secondary/30" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M140 190 L260 190" className="stroke-accent/25" strokeWidth="2" strokeDasharray="6 4" />
      
      {/* Gear Icon */}
      <circle cx="320" cy="80" r="25" className="fill-secondary/10" />
      <circle cx="320" cy="80" r="15" className="stroke-secondary/40" strokeWidth="3" fill="none" />
      <circle cx="320" cy="80" r="5" className="fill-secondary/40" />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Step 1 - Discovery */}
      <circle cx="80" cy="80" r="28" className="fill-secondary/20 stroke-secondary/40" strokeWidth="2" />
      <text x="80" y="86" textAnchor="middle" className="fill-secondary/70 text-sm font-bold">01</text>
      
      {/* Step 2 - Planning */}
      <circle cx="180" cy="80" r="28" className="fill-secondary/25 stroke-secondary/45" strokeWidth="2" />
      <text x="180" y="86" textAnchor="middle" className="fill-secondary/70 text-sm font-bold">02</text>
      
      {/* Step 3 - Development */}
      <circle cx="280" cy="80" r="28" className="fill-secondary/30 stroke-secondary/50" strokeWidth="2" />
      <text x="280" y="86" textAnchor="middle" className="fill-secondary/80 text-sm font-bold">03</text>
      
      {/* Connection arrows */}
      <path d="M108 80 L152 80" className="stroke-secondary/40" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M208 80 L252 80" className="stroke-secondary/40" strokeWidth="2" />
      
      {/* Document/Checklist */}
      <rect x="60" y="140" width="70" height="90" rx="6" className="fill-accent/15 stroke-accent/30" strokeWidth="2" />
      <rect x="72" y="155" width="46" height="6" rx="1" className="fill-accent/35" />
      <rect x="72" y="168" width="38" height="6" rx="1" className="fill-accent/25" />
      <rect x="72" y="181" width="42" height="6" rx="1" className="fill-accent/30" />
      <rect x="72" y="194" width="30" height="6" rx="1" className="fill-accent/20" />
      
      {/* Code Window */}
      <rect x="165" y="140" width="90" height="90" rx="6" className="fill-secondary/15 stroke-secondary/30" strokeWidth="2" />
      <rect x="165" y="140" width="90" height="18" rx="6" className="fill-secondary/25" />
      <circle cx="178" cy="149" r="4" className="fill-red-400/60" />
      <circle cx="190" cy="149" r="4" className="fill-yellow-400/60" />
      <circle cx="202" cy="149" r="4" className="fill-green-400/60" />
      <rect x="175" y="168" width="50" height="5" rx="1" className="fill-secondary/30" />
      <rect x="175" y="180" width="65" height="5" rx="1" className="fill-accent/35" />
      <rect x="175" y="192" width="40" height="5" rx="1" className="fill-secondary/25" />
      
      {/* Handshake/Partnership */}
      <circle cx="320" cy="185" r="40" className="fill-primary/10 stroke-primary/20" strokeWidth="2" />
      <path d="M295 185 L310 175 L325 185 L340 175" className="stroke-primary/40" strokeWidth="3" strokeLinecap="round" />
      <path d="M300 195 L320 205 L340 195" className="stroke-primary/30" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mission/Target */}
      <circle cx="200" cy="130" r="70" className="stroke-secondary/20" strokeWidth="2" fill="none" />
      <circle cx="200" cy="130" r="50" className="stroke-secondary/30" strokeWidth="2" fill="none" />
      <circle cx="200" cy="130" r="30" className="stroke-secondary/40" strokeWidth="2" fill="none" />
      <circle cx="200" cy="130" r="12" className="fill-secondary/50" />
      
      {/* Arrow hitting target */}
      <path d="M280 50 L212 118" className="stroke-accent/50" strokeWidth="3" strokeLinecap="round" />
      <polygon points="212,118 220,112 218,122" className="fill-accent/50" />
      
      {/* Team/People Icons */}
      <circle cx="100" cy="220" r="20" className="fill-secondary/20" />
      <circle cx="100" cy="205" r="10" className="fill-secondary/30" />
      <path d="M80 235 Q100 250 120 235" className="stroke-secondary/30" strokeWidth="2" fill="none" />
      
      <circle cx="200" cy="240" r="22" className="fill-accent/15" />
      <circle cx="200" cy="223" r="11" className="fill-accent/25" />
      <path d="M178 258 Q200 275 222 258" className="stroke-accent/25" strokeWidth="2" fill="none" />
      
      <circle cx="300" cy="220" r="20" className="fill-primary/15" />
      <circle cx="300" cy="205" r="10" className="fill-primary/25" />
      <path d="M280 235 Q300 250 320 235" className="stroke-primary/25" strokeWidth="2" fill="none" />
      
      {/* Connection between team */}
      <path d="M120 220 L178 235" className="stroke-secondary/20" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M222 235 L280 220" className="stroke-secondary/20" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  ),
  saas: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud Shape */}
      <ellipse cx="200" cy="90" rx="80" ry="45" className="fill-secondary/15 stroke-secondary/30" strokeWidth="2" />
      <ellipse cx="140" cy="100" rx="40" ry="25" className="fill-secondary/12" />
      <ellipse cx="260" cy="100" rx="40" ry="25" className="fill-secondary/12" />
      
      {/* Dashboard/Analytics */}
      <rect x="100" y="150" width="200" height="120" rx="8" className="fill-background stroke-secondary/30" strokeWidth="2" />
      <rect x="100" y="150" width="200" height="25" rx="8" className="fill-secondary/15" />
      <circle cx="118" cy="162" r="5" className="fill-accent/50" />
      <circle cx="134" cy="162" r="5" className="fill-secondary/40" />
      
      {/* Chart bars */}
      <rect x="120" y="230" width="20" height="25" rx="2" className="fill-accent/40" />
      <rect x="150" y="210" width="20" height="45" rx="2" className="fill-secondary/35" />
      <rect x="180" y="195" width="20" height="60" rx="2" className="fill-accent/50" />
      <rect x="210" y="220" width="20" height="35" rx="2" className="fill-secondary/40" />
      <rect x="240" y="200" width="20" height="55" rx="2" className="fill-accent/45" />
      <rect x="270" y="185" width="20" height="70" rx="2" className="fill-secondary/50" />
      
      {/* Upward trend line */}
      <path d="M130 245 L160 225 L190 210 L220 235 L250 215 L280 190" className="stroke-accent/60" strokeWidth="3" strokeLinecap="round" fill="none" />
      
      {/* Data flow lines */}
      <path d="M200 135 L200 150" className="stroke-secondary/40" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M150 120 L150 150" className="stroke-secondary/30" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M250 120 L250 150" className="stroke-secondary/30" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Email/Message */}
      <rect x="100" y="60" width="160" height="110" rx="10" className="fill-secondary/15 stroke-secondary/35" strokeWidth="2" />
      <path d="M105 70 L180 120 L255 70" className="stroke-secondary/40" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M105 160 L150 125" className="stroke-secondary/25" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M255 160 L210 125" className="stroke-secondary/25" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Chat Bubbles */}
      <rect x="280" y="70" width="90" height="50" rx="8" className="fill-accent/20 stroke-accent/35" strokeWidth="2" />
      <polygon points="290,120 280,135 305,120" className="fill-accent/20 stroke-accent/35" strokeWidth="2" />
      <rect x="292" y="85" width="60" height="6" rx="2" className="fill-accent/40" />
      <rect x="292" y="98" width="45" height="6" rx="2" className="fill-accent/30" />
      
      {/* Phone/Call */}
      <circle cx="100" cy="220" r="35" className="fill-primary/12 stroke-primary/25" strokeWidth="2" />
      <path d="M85 205 Q85 215 90 220 Q95 225 100 225 L105 230 Q115 235 120 230 L125 225 Q130 220 125 210 L120 205 Q115 200 105 205 L100 210 Q95 215 90 210 L85 205" className="fill-primary/30" />
      
      {/* Location Pin */}
      <path d="M320 180 Q320 200 300 230 Q280 200 280 180 Q280 165 300 165 Q320 165 320 180" className="fill-secondary/20 stroke-secondary/35" strokeWidth="2" />
      <circle cx="300" cy="185" r="10" className="fill-secondary/40" />
      
      {/* Connection dots */}
      <circle cx="200" cy="200" r="4" className="fill-secondary/40" />
      <path d="M135 220 L196 200" className="stroke-secondary/25" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M204 200 L280 200" className="stroke-secondary/25" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  ),
};

export function PageHeader({ title, subtitle, illustration = 'services' }: PageHeaderProps) {
  return (
    <section className="relative pt-28 pb-8 bg-white overflow-hidden">
      {/* Aurora-like gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-secondary/3 to-primary/8" />
      
      {/* Soft aurora blobs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-gradient-radial from-secondary/12 via-secondary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-radial from-primary/8 via-secondary/4 to-transparent rounded-full blur-3xl" />
      
      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/50 to-background" />
      
      <div className="container-wide relative z-10">
        <div className="flex items-center justify-between gap-6">
          {/* Text content */}
          <div className="max-w-2xl flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground tracking-tight animate-fade-up">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-1">
              {subtitle}
            </p>
          </div>
          
          {/* Illustration */}
          <div className="hidden lg:block w-[320px] h-[240px] flex-shrink-0 animate-fade-up-delay-1">
            {illustrations[illustration]}
          </div>
        </div>
      </div>
    </section>
  );
}