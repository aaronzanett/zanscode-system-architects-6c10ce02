import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Settings2, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import team photos
import person1 from '@/assets/team/person-1.jpg';
import person2 from '@/assets/team/person-2.jpg';
import person3 from '@/assets/team/person-3.jpg';
import person4 from '@/assets/team/person-4.jpg';
import person5 from '@/assets/team/person-5.jpg';
import person6 from '@/assets/team/person-6.jpg';

// Trust indicator component
const TrustIndicator = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string;
  description?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-secondary" strokeWidth={1.8} />
    </div>
    <div>
      <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      {description && (
        <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
      )}
    </div>
  </div>
);

// Photo card component with organic shapes
const PhotoCard = ({ 
  src, 
  alt, 
  className = "",
  size = "default"
}: { 
  src: string; 
  alt: string;
  className?: string;
  size?: "small" | "default" | "large";
}) => {
  const sizeClasses = {
    small: "w-24 h-24 md:w-28 md:h-28",
    default: "w-28 h-32 md:w-32 md:h-40",
    large: "w-32 h-40 md:w-40 md:h-52",
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-2xl overflow-hidden shadow-lg ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container-wide relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/8 border border-secondary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-xs font-medium text-secondary tracking-wide uppercase">System Solution Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground">
              {t('hero.headline.part1')}
              <br />
              <span className="text-secondary">
                {t('hero.headline.part2')}
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-secondary hover:bg-secondary/90 text-white text-sm px-6 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted/50 text-sm px-6 py-5 rounded-full font-medium transition-all duration-200"
              >
                <Link to="/how-we-work">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators - stacked vertically */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="flex flex-col gap-4">
                <TrustIndicator 
                  icon={Building2} 
                  title={t('hero.trust.enterprise')}
                  description="Built to scale with your growth"
                />
                <TrustIndicator 
                  icon={Settings2} 
                  title={t('hero.trust.custom')}
                  description="Solutions designed for your workflow"
                />
                <TrustIndicator 
                  icon={Handshake} 
                  title={t('hero.trust.support')}
                  description="We're partners, not just vendors"
                />
              </div>
            </div>
          </div>

          {/* Right: Organic photo grid */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Organic grid layout */}
              <div className="flex gap-4 justify-center lg:justify-end">
                {/* Left column - offset up */}
                <div className="flex flex-col gap-4 -mt-4">
                  <PhotoCard 
                    src={person1} 
                    alt="Team member" 
                    size="large"
                    className="rotate-[-2deg]"
                  />
                  <PhotoCard 
                    src={person2} 
                    alt="Team member" 
                    size="default"
                    className="rotate-[1deg] ml-2"
                  />
                </div>
                
                {/* Middle column */}
                <div className="flex flex-col gap-4 mt-8">
                  <PhotoCard 
                    src={person3} 
                    alt="Team member" 
                    size="default"
                    className="rotate-[2deg]"
                  />
                  <PhotoCard 
                    src={person4} 
                    alt="Team member" 
                    size="large"
                    className="rotate-[-1deg]"
                  />
                </div>
                
                {/* Right column - offset down */}
                <div className="flex flex-col gap-4 mt-16 hidden sm:flex">
                  <PhotoCard 
                    src={person5} 
                    alt="Team member" 
                    size="default"
                    className="rotate-[-2deg]"
                  />
                  <PhotoCard 
                    src={person6} 
                    alt="Team member" 
                    size="small"
                    className="rotate-[3deg] ml-1"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-secondary/5 -z-10" />
              <div className="absolute -top-6 right-12 w-12 h-12 rounded-full bg-accent/10 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
