import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Layers, Headphones, Check, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Floating metric card component
const MetricCard = ({ 
  value, 
  label, 
  className,
  isActive = false
}: { 
  value: string; 
  label: string; 
  className?: string;
  isActive?: boolean;
}) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/40 p-3 ${className}`}>
    <div className="flex items-center gap-2">
      <span className={`text-xl font-bold ${isActive ? 'text-secondary' : 'text-foreground'}`}>{value}</span>
      {isActive && (
        <div className="w-8 h-4 rounded-full bg-secondary flex items-center justify-end px-0.5">
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
      )}
    </div>
    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
  </div>
);

// Security badge component
const SecurityBadge = ({ 
  label, 
  className 
}: { 
  label: string; 
  className?: string;
}) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/40 px-3 py-2 flex items-center gap-2 ${className}`}>
    <Shield className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
    <span className="text-xs font-medium text-foreground">{label}</span>
    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center ml-1">
      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
    </div>
  </div>
);

// Team card component
const TeamCard = ({ 
  label, 
  className 
}: { 
  label: string; 
  className?: string;
}) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/40 p-3 ${className}`}>
    <div className="flex items-center gap-2 mb-2">
      <Users className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
      <span className="text-xs font-medium text-foreground">{label}</span>
    </div>
    <div className="flex -space-x-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center">
        <span className="text-[10px] font-medium text-white">T1</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 border-2 border-white flex items-center justify-center">
        <span className="text-[10px] font-medium text-white">T2</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 border-2 border-white flex items-center justify-center">
        <span className="text-[10px] font-medium text-white">AI</span>
      </div>
    </div>
  </div>
);

// Customer avatars component
const CustomerAvatars = ({ 
  label,
  className 
}: { 
  label: string;
  className?: string;
}) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-border/40 p-3 ${className}`}>
    <p className="text-xs font-medium text-foreground mb-2">{label}</p>
    <div className="grid grid-cols-2 gap-1.5">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
        <span className="text-xs font-medium text-white">A</span>
      </div>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center">
        <span className="text-xs font-medium text-white">B</span>
      </div>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center">
        <span className="text-xs font-medium text-white">C</span>
      </div>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
        <span className="text-xs font-medium text-white">D</span>
      </div>
    </div>
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

      {/* Floating UI elements - Left side */}
      <div className="absolute left-[5%] top-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <MetricCard value="8%" label={t('hero.metric.without')} className="w-36" />
      </div>
      
      <div className="absolute left-[6%] top-[42%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <MetricCard value="75%" label={t('hero.metric.with')} isActive className="w-36" />
      </div>
      
      <div className="absolute left-[8%] bottom-[22%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <CustomerAvatars label={t('hero.customers')} className="w-28" />
      </div>

      {/* Floating UI elements - Right side */}
      <div className="absolute right-[6%] top-[22%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.45s' }}>
        <SecurityBadge label={t('hero.security')} />
      </div>
      
      <div className="absolute right-[5%] top-[42%] hidden lg:block animate-fade-in" style={{ animationDelay: '0.55s' }}>
        <TeamCard label={t('hero.team')} className="w-32" />
      </div>

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
          <div className="mt-12 flex flex-wrap gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <TrustIndicator icon={Shield} text={t('hero.trust.enterprise')} />
            <TrustIndicator icon={Layers} text={t('hero.trust.custom')} />
            <TrustIndicator icon={Headphones} text={t('hero.trust.support')} />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}
