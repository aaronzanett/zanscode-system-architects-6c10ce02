import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, GitBranch, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient blobs */}
      {/* Left blob - blue/indigo */}
      <motion.div
        className="absolute -left-40 top-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(240 80% 70%), hsl(var(--secondary)) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, 60, 20, -20, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Right blob - pink/rose */}
      <motion.div
        className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-[110px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(320 70% 80%), hsl(280 60% 75%) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, -50, 20, 40, 0],
          y: [0, 50, -30, 20, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      {/* Center accent blob - cyan */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full opacity-10 blur-[90px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1.15, 1],
          rotate: [0, 20, -15, 10, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4 py-32">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-[-0.02em] text-foreground max-w-4xl mx-auto">
          {t('hero.headline.part1')}
          <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(193 100% 55%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('hero.headline.part2')}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="group bg-secondary hover:bg-secondary-hover text-white hover:text-white text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link to="/contact" className="flex items-center gap-2">
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border bg-background text-foreground hover:bg-muted text-base px-8 py-6 rounded-full font-medium transition-all duration-200"
          >
            <Link to="/how-we-work">
              {t('hero.cta.secondary')}
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Enterprise-grade Architecture</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2.5">
            <GitBranch className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Tailored Business Systems</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Long-term Technical Partnership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
