import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Layers, Headphones, Database, Cloud, Cpu } from 'lucide-react';

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

// Abstract tech visual component
const AbstractTechVisual = () => (
  <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
    {/* Main glassmorphism card */}
    <div className="absolute w-72 h-80 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/50 shadow-2xl transform rotate-6 translate-x-4">
      <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/5" />
      <div className="absolute top-8 left-6 right-6 h-3 rounded-full bg-gradient-to-r from-secondary/40 to-accent/30" />
      <div className="absolute top-14 left-6 w-20 h-2 rounded-full bg-muted/40" />
      <div className="absolute top-20 left-6 w-16 h-2 rounded-full bg-muted/30" />
      
      {/* Abstract data visualization */}
      <div className="absolute bottom-8 left-6 right-6 flex gap-2 items-end">
        <div className="flex-1 h-16 rounded-lg bg-gradient-to-t from-secondary/30 to-secondary/10" />
        <div className="flex-1 h-24 rounded-lg bg-gradient-to-t from-secondary/40 to-secondary/15" />
        <div className="flex-1 h-12 rounded-lg bg-gradient-to-t from-accent/30 to-accent/10" />
        <div className="flex-1 h-20 rounded-lg bg-gradient-to-t from-secondary/35 to-secondary/12" />
        <div className="flex-1 h-14 rounded-lg bg-gradient-to-t from-accent/25 to-accent/8" />
      </div>
    </div>

    {/* Secondary floating panel */}
    <div className="absolute w-48 h-32 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10 backdrop-blur-lg border border-white/40 shadow-xl transform -rotate-12 -translate-x-24 -translate-y-20">
      <div className="absolute inset-3 flex flex-col gap-2">
        <div className="w-full h-2 rounded-full bg-white/50" />
        <div className="w-3/4 h-2 rounded-full bg-white/40" />
        <div className="w-1/2 h-2 rounded-full bg-white/30" />
        <div className="mt-auto flex gap-1">
          <div className="w-6 h-6 rounded-lg bg-secondary/30" />
          <div className="w-6 h-6 rounded-lg bg-accent/30" />
          <div className="w-6 h-6 rounded-lg bg-secondary/20" />
        </div>
      </div>
    </div>

    {/* Accent floating element */}
    <div className="absolute w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/20 backdrop-blur-md border border-white/30 shadow-lg transform rotate-12 translate-x-32 translate-y-28">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/40 to-accent/30 flex items-center justify-center">
          <Cpu className="w-6 h-6 text-secondary/70" strokeWidth={1.5} />
        </div>
      </div>
    </div>

    {/* Decorative circles */}
    <div className="absolute w-40 h-40 rounded-full border border-secondary/10 -translate-x-16 translate-y-32" />
    <div className="absolute w-64 h-64 rounded-full border border-accent/10 translate-x-20 -translate-y-16" />
    
    {/* Gradient orbs */}
    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl translate-x-24 translate-y-8" />
    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-accent/25 to-transparent blur-xl -translate-x-20 -translate-y-12" />
  </div>
);

// Trust indicator component
const TrustIndicator = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2 text-muted-foreground">
    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
      <Icon className="w-4 h-4 text-secondary" strokeWidth={2} />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/2 to-secondary/4" />
      
      {/* Soft gradient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-accent/6 to-transparent rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-[60px]" />

      {/* Very subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating tech icons - minimal and subtle */}
      <FloatingIcon icon={Database} className="top-32 left-[5%] w-6 h-6 text-secondary/15" delay={0} duration={10} />
      <FloatingIcon icon={Cloud} className="top-1/2 left-[8%] w-5 h-5 text-accent/12" delay={2} duration={9} />
      <FloatingIcon icon={Layers} className="bottom-1/3 left-[3%] w-5 h-5 text-secondary/10" delay={4} duration={11} />

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left column - 60% */}
          <div className="lg:col-span-3">
            {/* Overline */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-6 animate-fade-up">
              Kami Merancang Infrastruktur Digital
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-up">
              Bukan Sekadar Website.
              <br />
              <span className="mt-2 inline-block">
                Kami Membangun{' '}
                <span className="bg-gradient-to-r from-secondary via-secondary to-accent bg-clip-text text-transparent">
                  Sistem Bisnis.
                </span>
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Zanscode membantu bisnis serius merancang sistem digital yang scalable, terstruktur, dan siap untuk tumbuh.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white text-base px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link to="/contact">
                  Diskusikan Bisnis Anda
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border border-foreground/20 text-foreground hover:bg-muted/50 hover:border-foreground/30 hover:-translate-y-0.5 text-base px-8 py-6 rounded-xl font-medium transition-all duration-300"
              >
                <Link to="/how-we-work">
                  Lihat Cara Kerja Kami
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <TrustIndicator icon={Shield} text="Enterprise-ready" />
              <TrustIndicator icon={Layers} text="Custom System" />
              <TrustIndicator icon={Headphones} text="Long-term Support" />
            </div>
          </div>

          {/* Right column - 40% */}
          <div className="lg:col-span-2 hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <AbstractTechVisual />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
