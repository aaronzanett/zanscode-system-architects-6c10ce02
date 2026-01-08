import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Code2, Database, Cloud, Shield, Zap, Layers } from 'lucide-react';

// Floating icon component with gentle animation
const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0,
  duration = 6
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
  duration?: number;
}) => (
  <div 
    className={`absolute opacity-20 text-secondary ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon className="w-full h-full" strokeWidth={1.5} />
  </div>
);

// Small decorative dot
const FloatingDot = ({ 
  className, 
  delay = 0,
  size = 'w-2 h-2'
}: { 
  className: string; 
  delay?: number;
  size?: string;
}) => (
  <div 
    className={`absolute rounded-full bg-secondary/20 ${size} ${className}`}
    style={{
      animation: `float 8s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  />
);

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />
      
      {/* Soft radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />

      {/* Floating UI Icons - Left side */}
      <FloatingIcon icon={Code2} className="top-32 left-[8%] w-8 h-8" delay={0} duration={7} />
      <FloatingIcon icon={Database} className="top-1/3 left-[12%] w-6 h-6" delay={1.5} duration={8} />
      <FloatingIcon icon={Shield} className="bottom-1/3 left-[6%] w-7 h-7" delay={3} duration={6} />
      
      {/* Floating UI Icons - Right side */}
      <FloatingIcon icon={Cloud} className="top-40 right-[10%] w-9 h-9" delay={0.5} duration={7.5} />
      <FloatingIcon icon={Zap} className="top-1/2 right-[8%] w-5 h-5" delay={2} duration={6.5} />
      <FloatingIcon icon={Layers} className="bottom-1/4 right-[12%] w-7 h-7" delay={1} duration={8} />

      {/* Floating decorative dots */}
      <FloatingDot className="top-24 left-[20%]" delay={0.5} size="w-3 h-3" />
      <FloatingDot className="top-1/2 left-[5%]" delay={2} size="w-2 h-2" />
      <FloatingDot className="bottom-32 left-[15%]" delay={1} size="w-2.5 h-2.5" />
      <FloatingDot className="top-36 right-[18%]" delay={1.5} size="w-2 h-2" />
      <FloatingDot className="top-2/3 right-[6%]" delay={0} size="w-3 h-3" />
      <FloatingDot className="bottom-40 right-[20%]" delay={2.5} size="w-2 h-2" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground animate-fade-up">
            {t('hero.title')}
            <br />
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up-delay-1">
            {t('hero.subtitle')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-base px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">
                {t('hero.cta.primary')}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 text-base px-8 py-6 rounded-xl font-medium transition-all duration-300"
            >
              <Link to="/how-we-work">
                {t('hero.cta.secondary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
