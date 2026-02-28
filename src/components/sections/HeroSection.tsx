import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, GitBranch, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[hsl(220,20%,8%)]">
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, hsl(220 20% 8% / 0.6) 70%, hsl(220 20% 8% / 0.95) 100%)',
        }}
      />

      {/* Large animated gradient blobs */}
      {/* Primary blue blob */}
      <motion.div
        className="absolute -left-20 top-1/3 w-[700px] h-[700px] rounded-full opacity-60 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(214 82% 55%), hsl(240 70% 50%) 50%, transparent 80%)',
        }}
        animate={{
          x: [0, 80, -30, 50, 0],
          y: [0, -60, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Rose / magenta blob */}
      <motion.div
        className="absolute -right-20 top-1/4 w-[600px] h-[600px] rounded-full opacity-50 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(330 80% 60%), hsl(280 70% 55%) 50%, transparent 80%)',
        }}
        animate={{
          x: [0, -70, 30, -40, 0],
          y: [0, 60, -50, 30, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Cyan accent blob */}
      <motion.div
        className="absolute left-1/3 bottom-1/4 w-[500px] h-[500px] rounded-full opacity-40 blur-[90px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(193 100% 60%), hsl(170 80% 50%) 50%, transparent 80%)',
        }}
        animate={{
          x: [0, 50, -60, 30, 0],
          y: [0, -40, 50, -60, 0],
          scale: [1, 1.3, 0.8, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      {/* Warm amber blob */}
      <motion.div
        className="absolute right-1/3 top-2/3 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60%), hsl(15 80% 55%) 50%, transparent 80%)',
        }}
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, 50, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1.2, 1],
          rotate: [0, 30, -20, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4 py-32">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-[-0.02em] text-white max-w-4xl mx-auto">
          {t('hero.headline.part1')}
          <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, hsl(193 100% 65%) 0%, hsl(280 80% 70%) 50%, hsl(330 80% 65%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('hero.headline.part2')}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="group bg-white text-[hsl(220,20%,8%)] hover:bg-white/90 text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 rounded-full font-medium transition-all duration-200 backdrop-blur-sm"
          >
            <Link to="/how-we-work">
              {t('hero.cta.secondary')}
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/50">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-[hsl(193,100%,65%)]" />
            <span className="text-sm font-medium">Enterprise-grade Architecture</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2.5">
            <GitBranch className="w-5 h-5 text-[hsl(193,100%,65%)]" />
            <span className="text-sm font-medium">Tailored Business Systems</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[hsl(193,100%,65%)]" />
            <span className="text-sm font-medium">Long-term Technical Partnership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
