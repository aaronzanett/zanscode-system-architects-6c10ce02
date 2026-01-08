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

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Richer gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/8" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      {/* Enhanced soft radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-secondary/12 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/4 rounded-full blur-[150px]" />

      {/* Floating UI Icons - Left side */}
      <FloatingIcon icon={Code2} className="top-32 left-[8%] w-8 h-8" delay={0} duration={7} />
      <FloatingIcon icon={Database} className="top-1/3 left-[12%] w-6 h-6" delay={1.5} duration={8} />
      <FloatingIcon icon={Shield} className="bottom-1/3 left-[6%] w-7 h-7" delay={3} duration={6} />
      
      {/* Floating UI Icons - Right side */}
      <FloatingIcon icon={Cloud} className="top-40 right-[10%] w-9 h-9" delay={0.5} duration={7.5} />
      <FloatingIcon icon={Zap} className="top-1/2 right-[8%] w-5 h-5" delay={2} duration={6.5} />
      <FloatingIcon icon={Layers} className="bottom-1/4 right-[12%] w-7 h-7" delay={1} duration={8} />

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
              className="bg-secondary hover:bg-secondary text-white text-base px-8 py-6 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">
                {t('hero.cta.primary')}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border border-foreground/80 text-foreground hover:bg-transparent hover:-translate-y-0.5 hover:shadow-md text-base px-8 py-6 rounded-xl font-medium transition-all duration-300"
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
