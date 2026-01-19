import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Settings2, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Trust indicator component
const TrustIndicator = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2.5 text-muted-foreground">
    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary/12 to-secondary/6 flex items-center justify-center border border-secondary/10">
      <Icon className="w-4 h-4 text-secondary" strokeWidth={1.8} />
    </div>
    <span className="text-sm font-medium tracking-wide whitespace-nowrap">{text}</span>
  </div>
);

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9]" />
      
      {/* Very subtle grid pattern with upward scroll animation */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-grid-scroll"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Soft ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/5 via-secondary/3 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/4 via-accent/2 to-transparent rounded-full blur-[80px]" />

      {/* Main centered content */}
      <div className="container-wide relative z-10 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - large, editorial */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground animate-fade-up">
            {t('hero.headline.part1')}
            <br />
            <span 
              className="relative bg-gradient-to-r from-secondary via-secondary/90 to-accent bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 60px hsla(var(--secondary), 0.12)'
              }}
            >
              {t('hero.headline.part2')}
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA buttons - centered */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-sm px-7 py-6 rounded-full font-semibold shadow-[0_4px_20px_-4px_rgba(31,106,225,0.35)] hover:shadow-[0_8px_28px_-4px_rgba(31,106,225,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact">
                {t('hero.cta.primary')}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white border border-border/60 text-foreground hover:bg-muted/30 hover:border-border hover:-translate-y-0.5 text-sm px-7 py-6 rounded-full font-medium transition-all duration-300"
            >
              <Link to="/how-we-work">
                {t('hero.cta.secondary')}
              </Link>
            </Button>
          </div>

          {/* Trust indicators - centered below CTA */}
          <div className="mt-12 flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <TrustIndicator icon={Building2} text={t('hero.trust.enterprise')} />
            <TrustIndicator icon={Settings2} text={t('hero.trust.custom')} />
            <TrustIndicator icon={Handshake} text={t('hero.trust.support')} />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}
