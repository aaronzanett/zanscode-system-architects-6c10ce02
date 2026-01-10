import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Layers, Headphones, Database, Cloud } from 'lucide-react';

// Floating icon component with gentle animation
const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0,
  duration = 8
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
  duration?: number;
}) => (
  <div 
    className={`absolute ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon className="w-full h-full" strokeWidth={1} />
  </div>
);

// Premium abstract tech visual component
const AbstractTechVisual = () => (
  <div className="relative w-full h-full min-h-[560px] flex items-center justify-center">
    {/* Radial glow behind visual */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[400px] h-[400px] bg-gradient-to-br from-secondary/12 via-accent/8 to-transparent rounded-full blur-[80px]" />
    </div>
    
    {/* Main glassmorphism card - premium depth */}
    <div className="absolute w-[280px] h-[340px] rounded-[28px] bg-gradient-to-br from-white/70 via-white/50 to-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.1)_inset] transform rotate-3 translate-x-2">
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/40 via-transparent to-transparent" />
      
      {/* Content layers */}
      <div className="absolute inset-5 rounded-[20px] overflow-hidden">
        {/* Header bar */}
        <div className="h-4 flex items-center gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full bg-secondary/40" />
          <div className="w-2 h-2 rounded-full bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-muted/40" />
        </div>
        
        {/* Gradient accent line */}
        <div className="h-2 rounded-full bg-gradient-to-r from-secondary/50 via-secondary/40 to-accent/30 mb-5" />
        
        {/* Text hints */}
        <div className="space-y-2.5 mb-8">
          <div className="w-3/4 h-1.5 rounded-full bg-foreground/8" />
          <div className="w-1/2 h-1.5 rounded-full bg-foreground/6" />
          <div className="w-2/3 h-1.5 rounded-full bg-foreground/5" />
        </div>
        
        {/* Abstract data visualization */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex gap-1.5 items-end h-28">
            <div className="flex-1 h-[45%] rounded-lg bg-gradient-to-t from-secondary/35 via-secondary/20 to-secondary/5" />
            <div className="flex-1 h-[75%] rounded-lg bg-gradient-to-t from-secondary/45 via-secondary/25 to-secondary/8" />
            <div className="flex-1 h-[35%] rounded-lg bg-gradient-to-t from-accent/35 via-accent/20 to-accent/5" />
            <div className="flex-1 h-[60%] rounded-lg bg-gradient-to-t from-secondary/40 via-secondary/22 to-secondary/6" />
            <div className="flex-1 h-[50%] rounded-lg bg-gradient-to-t from-accent/30 via-accent/18 to-accent/4" />
            <div className="flex-1 h-[85%] rounded-lg bg-gradient-to-t from-secondary/50 via-secondary/28 to-secondary/10" />
          </div>
        </div>
      </div>
      
      {/* Light reflection */}
      <div className="absolute top-0 left-0 right-0 h-1/3 rounded-t-[28px] bg-gradient-to-b from-white/30 to-transparent" />
    </div>

    {/* Secondary floating panel - smaller, refined */}
    <div className="absolute w-44 h-28 rounded-2xl bg-gradient-to-br from-white/65 via-white/45 to-white/25 backdrop-blur-xl border border-white/50 shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)] transform -rotate-6 -translate-x-28 -translate-y-28">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      <div className="absolute inset-3 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="w-full h-1 rounded-full bg-secondary/25" />
          <div className="w-3/4 h-1 rounded-full bg-secondary/18" />
          <div className="w-1/2 h-1 rounded-full bg-secondary/12" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-secondary/25 to-secondary/15" />
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/25 to-accent/15" />
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-secondary/20 to-secondary/10" />
        </div>
      </div>
    </div>

    {/* Tertiary accent element */}
    <div className="absolute w-20 h-20 rounded-xl bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-lg border border-white/40 shadow-[0_16px_32px_-4px_rgba(0,0,0,0.1)] transform rotate-12 translate-x-36 translate-y-32">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/8 via-accent/5 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/15 flex items-center justify-center">
          <div className="w-4 h-4 rounded-md bg-gradient-to-br from-secondary/40 to-secondary/25" />
        </div>
      </div>
    </div>

    {/* Decorative rings */}
    <div className="absolute w-48 h-48 rounded-full border border-secondary/6 -translate-x-12 translate-y-36" />
    <div className="absolute w-72 h-72 rounded-full border border-accent/5 translate-x-16 -translate-y-20" />
    <div className="absolute w-96 h-96 rounded-full border border-secondary/3 translate-x-8 translate-y-4" />
    
    {/* Ambient gradient orbs */}
    <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-secondary/15 to-transparent blur-3xl translate-x-28 translate-y-12" />
    <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-accent/18 to-transparent blur-2xl -translate-x-24 -translate-y-16" />
  </div>
);

// Trust indicator component
const TrustIndicator = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2.5 text-muted-foreground">
    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/12 to-secondary/6 flex items-center justify-center border border-secondary/10">
      <Icon className="w-4 h-4 text-secondary" strokeWidth={1.8} />
    </div>
    <span className="text-sm font-medium tracking-wide">{text}</span>
  </div>
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Ambient navy-to-blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-secondary/[0.03] to-accent/[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/[0.02] to-accent/[0.03]" />
      
      {/* Soft ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-secondary/6 via-secondary/3 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/5 via-accent/2 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/[0.02] to-transparent rounded-full blur-[150px]" />

      {/* Very subtle grid pattern - reduced contrast */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Minimal floating icons */}
      <FloatingIcon icon={Database} className="top-40 left-[6%] w-5 h-5 text-secondary/10" delay={0} duration={12} />
      <FloatingIcon icon={Cloud} className="top-1/2 left-[4%] w-4 h-4 text-accent/8" delay={3} duration={10} />
      <FloatingIcon icon={Layers} className="bottom-1/3 left-[7%] w-4 h-4 text-secondary/8" delay={5} duration={14} />

      {/* Content */}
      <div className="container-wide relative z-10 pt-36 pb-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left column - 7/12 (~58%) */}
          <div className="lg:col-span-7">
            {/* Overline - refined letter-spacing */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-secondary/80 mb-8 animate-fade-up">
              Kami Merancang Infrastruktur Digital
            </p>

            {/* Headline - larger, editorial feel with generous line-height */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground animate-fade-up">
              Bukan Sekadar Website.
              <br />
              <span className="mt-3 inline-block">
                Kami Membangun{' '}
                <span 
                  className="relative bg-gradient-to-r from-secondary via-secondary/90 to-accent bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 60px hsla(var(--secondary), 0.15), 0 0 100px hsla(var(--accent), 0.1)'
                  }}
                >
                  Sistem Bisnis.
                </span>
              </span>
            </h1>

            {/* Supporting paragraph - more breathing space */}
            <p className="mt-10 text-lg sm:text-xl text-muted-foreground leading-[1.8] max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Zanscode membantu bisnis serius merancang sistem digital yang scalable, terstruktur, dan siap untuk tumbuh.
            </p>

            {/* CTA buttons - elevated styling */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white text-base px-10 py-7 rounded-xl font-semibold shadow-[0_8px_30px_-4px_rgba(31,106,225,0.35)] hover:shadow-[0_12px_40px_-4px_rgba(31,106,225,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                <Link to="/contact">
                  Diskusikan Bisnis Anda
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border border-foreground/15 text-foreground hover:bg-muted/30 hover:border-foreground/25 hover:-translate-y-0.5 text-base px-10 py-7 rounded-xl font-medium transition-all duration-300"
              >
                <Link to="/how-we-work">
                  Lihat Cara Kerja Kami
                </Link>
              </Button>
            </div>

            {/* Trust indicators - more spacing */}
            <div className="mt-14 flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <TrustIndicator icon={Shield} text="Enterprise-ready" />
              <TrustIndicator icon={Layers} text="Custom System" />
              <TrustIndicator icon={Headphones} text="Long-term Support" />
            </div>
          </div>

          {/* Right column - 5/12 (~42%) - pushed inward */}
          <div className="lg:col-span-5 hidden lg:flex justify-center animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="w-full max-w-md lg:max-w-none lg:-mr-8">
              <AbstractTechVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
