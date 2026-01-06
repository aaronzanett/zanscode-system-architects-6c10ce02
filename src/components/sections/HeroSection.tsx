import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import heroSystem from '@/assets/hero-system.png';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-visible gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroSystem}
          alt="System Architecture"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/95 via-dark-800/80 to-dark-800/40" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white animate-fade-up">
            {t('hero.title')}
            <br />
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-up-delay-1">
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
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border border-white/60 text-white hover:bg-white/10 hover:border-white hover:text-white text-base px-8 py-6 rounded-xl font-medium transition-all duration-300"
            >
              <Link to="/how-we-work">
                {t('hero.cta.secondary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - positioned below the fold */}
      <div className="absolute top-full left-0 right-0 h-24 bg-gradient-to-b from-dark-800 via-dark-800/40 to-background" />
    </section>
  );
}
