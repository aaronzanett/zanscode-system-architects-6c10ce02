import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Settings2, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-system.png';

// Trust indicator component
const TrustIndicator = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-secondary/30">
      <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
    </div>
    <div>
      <h3 className="font-semibold text-white text-sm">{title}</h3>
      <p className="text-slate-400 text-sm mt-0.5">{description}</p>
    </div>
  </div>
);

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center gradient-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Accent glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />

      <div className="container-wide relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">System Solution Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              {t('hero.headline.part1')}
              <br />
              <span className="text-gradient">
                {t('hero.headline.part2')}
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-secondary hover:bg-secondary/90 text-white text-sm px-7 py-6 rounded-full font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300"
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
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-sm px-7 py-6 rounded-full font-medium transition-all duration-300"
              >
                <Link to="/how-we-work">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-5">
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

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Image container with glow */}
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-2xl scale-95" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                  <img 
                    src={heroImage} 
                    alt="Enterprise system dashboard meeting" 
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))]/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating stats card */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-slate-400">Client Satisfaction</div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-accent/90 rounded-lg px-3 py-1.5 shadow-lg">
                  <span className="text-xs font-semibold text-primary">Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
