import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroVideo from '@/assets/hero-video.mp4';
export function HeroSection() {
  const {
    t
  } = useLanguage();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle overlay for text legibility on bright background */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-[-0.02em] text-white max-w-4xl mx-auto">
          {t('hero.headline.part1')}
          <br />
          {t('hero.headline.part2')}
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group bg-secondary hover:bg-secondary-hover text-white hover:text-white text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <Link to="/contact" className="flex items-center gap-2">
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 text-base px-8 py-6 rounded-full font-medium transition-all duration-200">
            <Link to="/how-we-work">
              {t('hero.cta.secondary')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      
    </section>;
}